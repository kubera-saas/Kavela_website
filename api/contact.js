/* global process */
/* ═══════════════════════════════════════════
   POST /api/contact  (Vercel Function)
   Receives the contact and Healthcare Brief forms and forwards them by email
   through Resend. The recipient address only exists server side, in the
   CONTACT_TO_EMAIL environment variable - it never reaches the browser.

   Environment variables (Vercel > Project > Settings > Environment Variables):
     RESEND_API_KEY      required - API key from resend.com
     CONTACT_TO_EMAIL    required - where messages are delivered
     CONTACT_FROM_EMAIL  optional - verified sender, e.g. "KAVELA Website <website@kavela.co>"
                         (defaults to Resend's test sender, which only delivers
                         to the email address that owns the Resend account)
   ═══════════════════════════════════════════ */

const FORMS = {
  contact: { required: ["name", "email", "message"], subject: "New enquiry" },
  brief:   { required: ["email"],                    subject: "Healthcare Brief - new registration" },
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

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL) {
    console.error("[contact] RESEND_API_KEY or CONTACT_TO_EMAIL is not configured");
    return res.status(500).json({ ok: false, error: "config" });
  }

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
    if (!r.ok) {
      console.error("[contact] Resend error", r.status, await r.text());
      return res.status(502).json({ ok: false, error: "send" });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[contact] Network error", err);
    return res.status(502).json({ ok: false, error: "send" });
  }
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
