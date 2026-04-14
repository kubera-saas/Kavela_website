import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label,
} from "../components/shared";

export default function ContactPage() {
  return (
    <RevealEngine>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", minHeight: "55vh",
        display: "flex", alignItems: "flex-end",
        overflow: "hidden", backgroundColor: NAVY,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${IMG.heroHome}')`,
          backgroundSize: "cover", backgroundPosition: "center 60%",
          opacity: 0.2,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(180deg, ${NAVY}90 0%, ${NAVY}40 40%, ${NAVY}D0 100%)`,
        }} />
        <Wrap style={{ position: "relative", zIndex: 2, paddingBottom: "5rem", paddingTop: "12rem", width: "100%" }}>
          <div data-r>
            <Label light>Let's meet</Label>
            <h1 style={{
              fontFamily: HEAD, fontWeight: 200, color: WHITE,
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              lineHeight: 1.08, letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}>
              Time to <strong style={{ fontWeight: 600 }}>connect.</strong>
            </h1>
            <p style={{
              fontSize: "1.1rem", lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)", maxWidth: "420px",
              fontFamily: BODY, fontWeight: 300,
            }}>
              You tell us where you want to go. We'll tell you who you need to meet.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "6rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            {/* Left */}
            <div>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 300, color: TEXT_D,
                fontSize: "1.6rem", lineHeight: 1.3, marginBottom: "1.5rem",
              }}>
                Whether you're a fund, a family office, or a corporate
                exploring the right entry point into Asia - we'd like to hear from you.
              </h2>

              {/* Email */}
              <a href="mailto:contact@kavela.co" style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "1.75rem", borderRadius: "12px",
                border: `1px solid ${GRAY_L}`, marginBottom: "1rem",
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 4px 20px ${BLUE}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = GRAY_L; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: "52px", height: "52px", borderRadius: "12px",
                  backgroundColor: `${BLUE}08`, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "1.3rem", flexShrink: 0,
                }}>✉</div>
                <div>
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: GRAY, fontFamily: HEAD, fontWeight: 600, marginBottom: "0.3rem" }}>Email</p>
                  <p style={{ fontSize: "1rem", color: BLUE, fontWeight: 600 }}>contact@kavela.co</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/kavelagroup/" target="_blank" rel="noreferrer" style={{
                display: "flex", alignItems: "center", gap: "1.25rem",
                padding: "1.75rem", borderRadius: "12px",
                border: `1px solid ${GRAY_L}`,
                transition: "border-color 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.boxShadow = `0 4px 20px ${BLUE}10`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = GRAY_L; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{
                  width: "52px", height: "52px", borderRadius: "12px",
                  backgroundColor: `${BLUE}08`, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill={BLUE}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.15em", color: GRAY, fontFamily: HEAD, fontWeight: 600, marginBottom: "0.3rem" }}>LinkedIn</p>
                  <p style={{ fontSize: "1rem", color: BLUE, fontWeight: 600 }}>Kavela Group</p>
                </div>
              </a>
            </div>

            {/* Right */}
            <div>
              {/* HQ */}
              <div style={{
                padding: "2.5rem", borderRadius: "14px",
                backgroundColor: NAVY, marginBottom: "1.5rem",
              }}>
                <p style={{
                  fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.3)", fontWeight: 600, fontFamily: HEAD, marginBottom: "1rem",
                }}>Headquarters</p>
                <p style={{ fontSize: "1.3rem", fontWeight: 600, color: WHITE, fontFamily: HEAD, marginBottom: "0.5rem" }}>Singapore</p>
                <p style={{ fontSize: "0.92rem", lineHeight: 1.7, color: "rgba(255,255,255,0.4)" }}>
                  Operating across Southeast Asia, India, and China.
                </p>
              </div>

              {/* What we cover */}
              <div style={{
                padding: "2.5rem", borderRadius: "14px",
                backgroundColor: OFF_W, border: `1px solid ${GRAY_L}`,
              }}>
                <p style={{
                  fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.18em",
                  color: `${BLUE}90`, fontWeight: 600, fontFamily: HEAD, marginBottom: "1.5rem",
                }}>What we cover</p>
                {[
                  "Corporate market entry & partnerships",
                  "Fund & family office expansion in Asia",
                  "Deal sourcing & execution",
                  "Network activation across 4 markets",
                ].map((t) => (
                  <div key={t} style={{
                    display: "flex", alignItems: "center", gap: "0.75rem",
                    padding: "0.55rem 0",
                  }}>
                    <span style={{ color: BLUE, fontWeight: 700, fontSize: "0.85rem" }}>→</span>
                    <span style={{ fontSize: "0.92rem", color: TEXT_D }}>{t}</span>
                  </div>
                ))}
              </div>

              <p style={{
                marginTop: "1.5rem", fontSize: "0.88rem", color: GRAY, lineHeight: 1.7,
                fontStyle: "italic",
              }}>
                We respond to every serious inquiry within 48 hours.
              </p>
            </div>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
