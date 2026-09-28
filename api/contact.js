/* global process */
/* ═══════════════════════════════════════════
   POST /api/contact  (Vercel Function)
   Receives the contact form and the newsletter form.
   - Contact form: forwarded by email through Resend. The recipient address
     only exists server side (CONTACT_TO_EMAIL) - it never reaches the browser.
   - Newsletter form: the email is added to the beehiiv publication as a
     subscriber. If Resend is configured too, a notification email is also
     sent (best effort). Without beehiiv keys, it falls back to email only.

   Environment variables (Vercel > Project > Settings > Environment Variables):
     RESEND_API_KEY          API key from resend.com
     CONTACT_TO_EMAIL        where contact messages are delivered
     CONTACT_FROM_EMAIL      optional - verified sender, e.g. "KAVELA Website <website@kavela.co>"
                             (defaults to Resend's test sender, which only delivers
                             to the email address that owns the Resend account)
     BEEHIIV_API_KEY         beehiiv > Settings > API > Create new key
     BEEHIIV_PUBLICATION_ID  beehiiv > Settings > API (starts with "pub_")
     BEEHIIV_LIST_IDS        optional - comma separated list ids, to add
                             subscribers to specific newsletter lists
   ═══════════════════════════════════════════ */

const FORMS = {
  contact: { required: ["name", "email", "message"], subject: "New enquiry" },
  brief:   { required: ["email"],                    subject: "Newsletter - new subscriber" },
};

const FIELDS = [
  ["name", "Name", 120],
  ["email", "Email", 200],
  ["organisation", "Organisation", 160],
  ["profile", "Profile", 80],
  ["role", "Role", 120],
  ["message", "Message", 5000],
];

const SITES = { main: "kavela.co", healthcare: "healthcare.kavela.co" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (v, max) => String(v ?? "").replace(/\r/g, "").trim().slice(0, max);
const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method" });
  }

  const body = typeof req.body === "string" ? safeJson(req.body) : (req.body || {});
  const form = FORMS[body.form] ? body.form : "contact";
  const site = SITES[body.site] || SITES.main;

  // Honeypot: bots fill every field. Pretend success, send nothing.
  if (body.company_url) return res.status(200).json({ ok: true });

  const data = Object.fromEntries(FIELDS.map(([k, , max]) => [k, clean(body[k], max)]));
  const missing = FORMS[form].required.filter((k) => !data[k]);
  if (missing.length) return res.status(400).json({ ok: false, error: "missing", fields: missing });
  if (!EMAIL_RE.test(data.email)) return res.status(400).json({ ok: false, error: "email", fields: ["email"] });

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID } = process.env;
  const resendReady = !!(RESEND_API_KEY && CONTACT_TO_EMAIL);

  // Newsletter → beehiiv subscriber (plus a best-effort notification email)
  if (form === "brief" && BEEHIIV_API_KEY && BEEHIIV_PUBLICATION_ID) {
    const sub = await subscribeBeehiiv(data.email, site);
    if (!sub.ok) return res.status(502).json({ ok: false, error: "send" });
    if (resendReady) await sendEmail(form, site, data).catch(() => {});
    return res.status(200).json({ ok: true });
  }

  if (!resendReady) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not configured");
    return res.status(500).json({ ok: false, error: "config" });
  }

  const sent = await sendEmail(form, site, data);
  return sent.ok ? res.status(200).json({ ok: true }) : res.status(502).json({ ok: false, error: "send" });
}

/* Adds the email to the beehiiv publication (existing unsubscribed readers are reactivated). */
async function subscribeBeehiiv(email, site) {
  const { BEEHIIV_API_KEY, BEEHIIV_PUBLICATION_ID, BEEHIIV_LIST_IDS } = process.env;
  const lists = (BEEHIIV_LIST_IDS || "").split(",").map((s) => s.trim()).filter(Boolean);
  try {
    const r = await fetch(`https://api.beehiiv.com/v2/publications/${encodeURIComponent(BEEHIIV_PUBLICATION_ID)}/subscriptions`, {
      method: "POST",
      headers: { Authorization: `Bearer ${BEEHIIV_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
        utm_source: site,
        utm_medium: "website",
        referring_site: `https://${site}`,
        ...(lists.length ? { newsletter_list_ids: lists } : {}),
      }),
    });
    if (!r.ok) console.error("[newsletter] beehiiv error", r.status, await r.text());
    return { ok: r.ok };
  } catch (err) {
    console.error("[newsletter] Network error", err);
    return { ok: false };
  }
}

/* Forwards the form by email through Resend. */
async function sendEmail(form, site, data) {
  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  const rows = FIELDS.filter(([k]) => data[k]);
  const text = [`Source: ${site}`, ...rows.map(([k, label]) => `${label}: ${data[k]}`)].join("\n\n");
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0E2431">
    <p style="color:#56636C">Source: ${escape(site)}</p>
    ${rows.map(([k, label]) => `<p><strong>${label}</strong><br>${escape(data[k]).replace(/\n/g, "<br>")}</p>`).join("")}
  </div>`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL || "KAVELA Website <onboarding@resend.dev>",
        to: [CONTACT_TO_EMAIL],
        reply_to: data.email,
        subject: `[${site}] ${FORMS[form].subject}${data.name ? ` - ${data.name.replace(/\s+/g, " ")}` : ""}`,
        text,
        html,
      }),
    });
    if (!r.ok) console.error("[contact] Resend error", r.status, await r.text());
    return { ok: r.ok };
  } catch (err) {
    console.error("[contact] Network error", err);
    return { ok: false };
  }
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
