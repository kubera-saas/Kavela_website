import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, PageHero, ImageBreak,
} from "../components/shared";

export default function PlatformPage() {
  return (
    <RevealEngine>

      <PageHero
        label="How it works"
        title="Not a consulting firm.<br/><strong style='font-weight:600'>A platform.</strong>"
        subtitle="We activate a network built over years of operating in Asia. For corporates, funds, and family offices looking to move with precision."
        image={IMG.platform}
      >
        <Btn to="/contact" variant="white">Get started →</Btn>
      </PageHero>

      {/* ── THE MODEL ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ marginBottom: "5rem", maxWidth: "620px" }}>
            <Label>The model</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}>
              Three moves. <strong style={{ fontWeight: 600 }}>Real outcomes.</strong>
            </h2>
          </div>

          <div data-rs className="g3" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0",
          }}>
            {[
              {
                num: "01", title: "Map",
                desc: "We sit with you and define what winning looks like in Asia. Not a generic scan — a focused assessment of where you have an unfair advantage, who the key players are, and what the real timeline looks like.",
              },
              {
                num: "02", title: "Connect",
                desc: "We activate our network. The right investors, the right distributors, the right operators — matched to your specific needs. Every introduction is pre-qualified and comes with context on both sides.",
              },
              {
                num: "03", title: "Close",
                desc: "We stay in the room. Facilitating negotiations, bridging cultural gaps, handling the back-and-forth that turns a warm introduction into a signed agreement.",
              },
            ].map((s, i) => (
              <div key={s.title} data-rc style={{
                padding: "3.5rem 3rem",
                backgroundColor: i === 1 ? OFF_W : WHITE,
                borderLeft: i > 0 ? `1px solid ${GRAY_L}` : "none",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: HEAD, fontWeight: 200, color: `${BLUE}08`,
                  fontSize: "7rem", lineHeight: 1, letterSpacing: "-0.05em",
                  position: "absolute", top: "1rem", right: "1.5rem",
                  userSelect: "none",
                }}>{s.num}</span>
                <div style={{
                  width: "32px", height: "3px", backgroundColor: BLUE,
                  marginBottom: "2rem", borderRadius: "2px",
                }} />
                <h3 style={{
                  fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
                  fontSize: "1.35rem", marginBottom: "1.25rem",
                }}>{s.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.85, color: GRAY }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <ImageBreak image={IMG.asia3} height="40vh" />

      {/* ── THE NETWORK ── */}
      <section style={{ padding: "8rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            <div>
              <Label>The network</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em", marginBottom: "1.5rem",
              }}>
                Built over years.<br />
                <strong style={{ fontWeight: 600 }}>Activated in days.</strong>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY }}>
                Our network isn't a contact database. It's a curated set of
                relationships — with investors, distributors, operators, and
                decision-makers across Asia — built through years of
                doing business together.
              </p>
            </div>

            <div data-rs style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { n: "Singapore", r: "Hub. Where we sit. Where the capital flows." },
                { n: "Southeast Asia", r: "Indonesia, Vietnam, Thailand, Philippines. Market by market." },
                { n: "India", r: "Founders, corporates, VCs. The ecosystem everyone is watching." },
                { n: "China", r: "Selective access. Trusted intermediaries. No shortcuts." },
              ].map((m) => (
                <div key={m.n} data-rc style={{
                  padding: "1.5rem 1.75rem", borderRadius: "10px",
                  backgroundColor: WHITE, border: `1px solid ${GRAY_L}`,
                }}>
                  <p style={{ fontFamily: HEAD, fontWeight: 600, color: TEXT_D, fontSize: "1rem", marginBottom: "0.35rem" }}>{m.n}</p>
                  <p style={{ fontSize: "0.88rem", lineHeight: 1.6, color: GRAY }}>{m.r}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ── COMPARISON ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ marginBottom: "4rem", maxWidth: "620px" }}>
            <Label>The difference</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}>
              Consulting vs. <strong style={{ fontWeight: 600 }}>Kavela.</strong>
            </h2>
          </div>

          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem",
          }}>
            <div style={{
              padding: "3rem", borderRadius: "14px",
              backgroundColor: OFF_W, border: `1px solid ${GRAY_L}`,
            }}>
              <p style={{
                fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em",
                color: GRAY, fontWeight: 600, fontFamily: HEAD, marginBottom: "2rem",
              }}>Traditional approach</p>
              {[
                "Multi-month scoping phase",
                "Strategy deck with recommendations",
                "Market research from a distance",
                "Hand-off after delivery",
                "Engagement measured in time spent",
              ].map((t) => (
                <div key={t} style={{
                  display: "flex", alignItems: "center", gap: "0.85rem",
                  padding: "0.7rem 0", borderBottom: `1px solid ${GRAY_L}`,
                }}>
                  <span style={{ color: GRAY, fontSize: "0.8rem" }}>—</span>
                  <span style={{ fontSize: "0.95rem", color: GRAY }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: "3rem", borderRadius: "14px",
              backgroundColor: NAVY, border: `2px solid ${BLUE}30`,
            }}>
              <p style={{
                fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.4)", fontWeight: 600, fontFamily: HEAD, marginBottom: "2rem",
              }}>Kavela</p>
              {[
                "First introductions in weeks",
                "Connections grounded in real relationships",
                "Local knowledge from years on the ground",
                "Involvement through to execution",
                "Aligned to outcomes, not hours",
              ].map((t) => (
                <div key={t} style={{
                  display: "flex", alignItems: "center", gap: "0.85rem",
                  padding: "0.7rem 0", borderBottom: `1px solid rgba(255,255,255,0.06)`,
                }}>
                  <span style={{ color: WHITE, fontSize: "0.8rem", fontWeight: 700 }}>→</span>
                  <span style={{ fontSize: "0.95rem", color: WHITE, fontWeight: 500 }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "8rem 0", backgroundColor: BLUE }}>
        <Wrap>
          <div data-r>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: WHITE,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.12,
              letterSpacing: "-0.03em", marginBottom: "1.5rem",
              maxWidth: "550px",
            }}>
              Tell us where you're going.<br />
              <strong style={{ fontWeight: 600 }}>We'll show you who to meet.</strong>
            </h2>
            <Btn to="/contact" variant="white">Let's meet →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
