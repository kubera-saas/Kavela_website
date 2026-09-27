import { useId, useState } from "react";
import { HEAD, BODY } from "./tokens";

/* ═══════════════════════════════════════════
   CONTACT FORM - shared by kavela.co and healthcare.kavela.co
   Posts to /api/contact. No email address is exposed client side.

   form:    "contact" (full enquiry) | "brief" (email only)
   site:    "main" | "healthcare"  (tells the recipient where it came from)
   palette: { text, muted, line, field, accent, accentText, error }
   ═══════════════════════════════════════════ */

const FIELDSETS = {
  contact: [
    { name: "name", label: "Name", autoComplete: "name", required: true },
    { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
    { name: "organisation", label: "Organisation", autoComplete: "organization", wide: true },
    { name: "message", label: "What are you working on?", textarea: true, required: true },
  ],
  brief: [
    { name: "email", label: "Work email", type: "email", autoComplete: "email", required: true },
  ],
};

const ERRORS = {
  missing: "Please complete the required fields.",
  email: "Please enter a valid email address.",
  default: "Your message could not be sent. Please try again in a moment.",
};

export default function ContactForm({
  form = "contact",
  site = "main",
  palette,
  submitLabel = "Send",
  successTitle = "Thank you.",
  successText = "Your message has been received. We will reply personally.",
  inline = false,
  profiles,           // optional list: adds a "You are" dropdown to the contact form
}) {
  const uid = useId();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [invalid, setInvalid] = useState([]);
  const p = palette;
  const fields = profiles && form === "contact"
    ? [...FIELDSETS.contact.slice(0, 2), { ...FIELDSETS.contact[2], wide: false }, { name: "profile", label: "You are", options: profiles }, ...FIELDSETS.contact.slice(3)]
    : FIELDSETS[form];

  async function onSubmit(e) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const miss = fields.filter((f) => f.required && !String(fd[f.name] || "").trim()).map((f) => f.name);
    if (miss.length) { setInvalid(miss); setError(ERRORS.missing); setStatus("error"); return; }

    setStatus("sending"); setError(""); setInvalid([]);
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fd, form, site }),
      });
      const json = await r.json().catch(() => ({}));
      if (r.ok && json.ok) { setStatus("sent"); return; }
      setInvalid(json.fields || []);
      setError(ERRORS[json.error] || ERRORS.default);
      setStatus("error");
    } catch {
      setError(ERRORS.default);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" aria-live="polite" style={{ padding: inline ? "0.25rem 0" : "2rem 0" }}>
        <p style={{ fontFamily: HEAD, fontSize: "1.35rem", fontWeight: 400, color: p.text, marginBottom: "0.5rem" }}>{successTitle}</p>
        <p style={{ fontFamily: BODY, fontSize: "0.95rem", lineHeight: 1.7, color: p.muted }}>{successText}</p>
      </div>
    );
  }

  const label = { display: "block", fontFamily: HEAD, fontSize: "0.9rem", fontWeight: 500, color: p.muted, marginBottom: "0.35rem" };
  const input = (bad) => ({
    width: "100%", fontFamily: BODY, fontSize: "1rem", color: p.text,
    background: p.field, border: "none", borderBottom: `1px solid ${bad ? p.error : p.line}`,
    borderRadius: 0, padding: "0.7rem 0", outline: "none",
    transition: "border-color 0.25s",
  });
  const button = {
    fontFamily: HEAD, fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.01em",
    background: p.accent, color: p.accentText, border: "none", borderRadius: "6px",
    padding: "15px 34px", cursor: status === "sending" ? "wait" : "pointer",
    opacity: status === "sending" ? 0.6 : 1, transition: "opacity 0.3s",
    whiteSpace: "nowrap",
  };

  return (
    <form onSubmit={onSubmit} noValidate className="kv-form" style={{ "--kv-focus": p.accentLine || p.accent }}>
      {/* Honeypot, hidden from people and assistive tech */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
        <label>Leave empty<input name="company_url" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className={inline ? "kv-form-inline" : "kv-form-grid"}>
        {fields.map((f) => {
          const id = `${uid}-${f.name}`;
          const bad = invalid.includes(f.name);
          const common = {
            id, name: f.name, autoComplete: f.autoComplete, required: f.required,
            "aria-invalid": bad || undefined, style: input(bad),
          };
          return (
            <div key={f.name} className={`kv-field-${f.name}${f.textarea || f.wide ? " kv-form-wide" : ""}`} style={{ minWidth: 0 }}>
              <label htmlFor={id} style={label}>{f.label}</label>
              {f.textarea
                ? <textarea {...common} rows={4} maxLength={5000} style={{ ...common.style, resize: "vertical" }} />
                : f.options
                  ? (
                    <select {...common} defaultValue="" style={{ ...common.style, appearance: "none", cursor: "pointer", backgroundImage: `linear-gradient(45deg, transparent 50%, ${p.muted} 50%), linear-gradient(135deg, ${p.muted} 50%, transparent 50%)`, backgroundPosition: "calc(100% - 10px) 55%, calc(100% - 5px) 55%", backgroundSize: "5px 5px", backgroundRepeat: "no-repeat" }}>
                      <option value="" disabled>Select</option>
                      {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )
                  : <input {...common} type={f.type || "text"} maxLength={200} />}
            </div>
          );
        })}
        <div className={inline ? undefined : "kv-form-wide"} style={{ display: "flex", alignItems: "flex-end" }}>
          <button type="submit" disabled={status === "sending"} style={button}>
            {status === "sending" ? "Sending…" : submitLabel}
          </button>
        </div>
      </div>

      <p role="alert" aria-live="assertive" style={{ minHeight: "1.4em", marginTop: "0.9rem", fontFamily: BODY, fontSize: "0.88rem", color: p.error }}>
        {status === "error" ? error : ""}
      </p>
    </form>
  );
}

/* CSS the form relies on (focus ring, grid). Rendered once per page. */
export function ContactFormStyles() {
  return (
    <style>{`
      .kv-form input:focus, .kv-form textarea:focus { border-bottom-color: var(--kv-focus) !important; }
      .kv-form button:focus-visible { outline: 2px solid var(--kv-focus); outline-offset: 3px; }
      .kv-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.75rem 2rem; }
      .kv-form-wide { grid-column: 1 / -1; }
      .kv-form-inline { display: grid; grid-template-columns: 1fr auto; gap: 1.5rem; align-items: end; }
      @media (max-width: 600px) {
        .kv-form-grid, .kv-form-inline { grid-template-columns: 1fr; }
        .kv-form button { width: 100%; }
      }
    `}</style>
  );
}
