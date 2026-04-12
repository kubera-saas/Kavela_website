import { Link } from "react-router-dom";
import {
  BLUE, BLUE_D, BLUE_L, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, ImageBreak,
} from "../components/shared";

export default function Home() {
  return (
    <RevealEngine>

      {/* ════════════ HERO ════════════ */}
      <section style={{
        position: "relative", minHeight: "100vh",
        display: "flex", alignItems: "flex-end",
        overflow: "hidden", backgroundColor: NAVY,
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${IMG.heroHome}')`,
          backgroundSize: "cover", backgroundPosition: "center 45%",
          opacity: 0.4,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(180deg, ${NAVY}80 0%, ${NAVY}30 35%, ${NAVY}C0 75%, ${NAVY} 100%)`,
        }} />

        <Wrap style={{ position: "relative", zIndex: 2, paddingBottom: "6rem", paddingTop: "14rem", width: "100%" }}>
          <div data-r>
            <h1 style={{
              fontFamily: HEAD, fontWeight: 200, color: WHITE,
              fontSize: "clamp(3.2rem, 8vw, 6.5rem)",
              lineHeight: 1.05, letterSpacing: "-0.035em",
              marginBottom: "2rem", maxWidth: "900px",
            }}>
              Your next market<br />is in <strong style={{ fontWeight: 600 }}>Asia.</strong>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.75,
              color: "rgba(255,255,255,0.5)", maxWidth: "440px",
              marginBottom: "3rem", fontFamily: BODY, fontWeight: 300,
            }}>
              We connect investment funds and corporates to the right people,
              in the right markets, at the right time.
            </p>

            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
              <Btn to="/contact" variant="white">Let's meet →</Btn>
              <Btn to="/platform" variant="ghost" style={{ opacity: 0.5 }}>How it works</Btn>
            </div>
          </div>
        </Wrap>
      </section>

      {/* ════════════ ONE-LINER ════════════ */}
      <section style={{ padding: "6rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ maxWidth: "820px" }}>
            <p style={{
              fontFamily: HEAD, fontWeight: 300, color: TEXT_D,
              fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}>
              Kavela is a <strong style={{ fontWeight: 600, color: BLUE }}>network-driven platform</strong>.
              We don't write reports. We open doors — connecting you to investors,
              distributors, and operators who make Asia happen.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ════════════ TWO PATHS — CINEMATIC ════════════ */}
      <section style={{ backgroundColor: WHITE, paddingBottom: "1.5rem" }}>
        <Wrap>
          {/* Corporate */}
          <Link to="/corporate" data-r style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            minHeight: "500px", borderRadius: "16px", overflow: "hidden",
            marginBottom: "1.5rem", textDecoration: "none",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
            className="g2"
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(10,22,40,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('${IMG.corporate}')`,
                backgroundSize: "cover", backgroundPosition: "center",
                transition: "transform 0.6s ease",
              }}
                className="card-img"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, ${BLUE}60 0%, ${NAVY}40 100%)`,
              }} />
            </div>
            <div style={{
              padding: "4rem 3.5rem",
              backgroundColor: NAVY, color: WHITE,
              display: "flex", flexDirection: "column", justifyContent: "center",
            }}>
              <Label light>For Corporates</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 300, color: WHITE,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15,
                letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                You know the market is there.<br />
                <strong style={{ fontWeight: 600 }}>We know the people.</strong>
              </h2>
              <p style={{
                fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)",
                marginBottom: "2rem", maxWidth: "380px",
              }}>
                Market entry, distribution partnerships, and deal execution
                across Southeast Asia, India, and China.
              </p>
              <span style={{ fontSize: "0.88rem", fontWeight: 600, color: WHITE, fontFamily: HEAD }}>
                Learn more →
              </span>
            </div>
          </Link>

          {/* Funds */}
          <Link to="/funds" data-r style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            minHeight: "500px", borderRadius: "16px", overflow: "hidden",
            textDecoration: "none",
            transition: "transform 0.4s ease, box-shadow 0.4s ease",
          }}
            className="g2"
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 20px 60px rgba(10,22,40,0.15)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            <div style={{
              padding: "4rem 3.5rem",
              backgroundColor: BLUE, color: WHITE,
              display: "flex", flexDirection: "column", justifyContent: "center",
              order: 1,
            }}>
              <Label light>For Investment Funds</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 300, color: WHITE,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15,
                letterSpacing: "-0.02em", marginBottom: "1.25rem",
              }}>
                Your LPs want Asia exposure.<br />
                <strong style={{ fontWeight: 600 }}>We make it happen.</strong>
              </h2>
              <p style={{
                fontSize: "0.95rem", lineHeight: 1.7, color: "rgba(255,255,255,0.45)",
                marginBottom: "2rem", maxWidth: "380px",
              }}>
                Fund setup, portfolio company expansion, and deal flow
                through curated local networks.
              </p>
              <span style={{ fontSize: "0.88rem", fontWeight: 600, color: WHITE, fontFamily: HEAD }}>
                Learn more →
              </span>
            </div>
            <div style={{
              position: "relative", overflow: "hidden", order: 2,
            }}>
              <div style={{
                position: "absolute", inset: 0,
                backgroundImage: `url('${IMG.funds}')`,
                backgroundSize: "cover", backgroundPosition: "center",
              }} />
              <div style={{
                position: "absolute", inset: 0,
                background: `linear-gradient(135deg, ${NAVY}50 0%, ${BLUE}30 100%)`,
              }} />
            </div>
          </Link>
        </Wrap>
      </section>

      {/* ════════════ IMAGE BREAK ════════════ */}
      <ImageBreak image={IMG.asia3} height="45vh" />

      {/* ════════════ DIFFERENTIATOR ════════════ */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            <div>
              <Label>Why Kavela</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}>
                Others consult.<br />
                <strong style={{ fontWeight: 600, color: BLUE }}>We connect.</strong>
              </h2>
            </div>
            <div style={{ paddingTop: "0.5rem" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: GRAY, fontFamily: BODY, marginBottom: "1.5rem" }}>
                Most firms spend months on strategy decks. We spend that time
                introducing you to the distributor who will carry your product,
                the LP who will back your fund, or the operator who will run your
                local office.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: GRAY, fontFamily: BODY }}>
                That's not consulting. That's access.
              </p>
            </div>
          </div>

          <div data-rs style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="g3">
            {[
              { n: "Access", d: "Curated network of investors, distributors, and operators across 4 Asian markets." },
              { n: "Speed", d: "First introductions in weeks. Not a 6-month scoping phase followed by a report." },
              { n: "Execution", d: "We stay involved until the deal closes. Introductions without follow-through are worthless." },
            ].map((item, i) => (
              <div key={item.n} data-rc style={{
                padding: "3rem 2.5rem",
                borderLeft: i > 0 ? `1px solid ${GRAY_L}` : "none",
              }}>
                <h3 style={{
                  fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
                  fontSize: "1.3rem", marginBottom: "1rem",
                }}>{item.n}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: GRAY }}>{item.d}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ════════════ WHY ASIA TEASER ════════════ */}
      <section style={{
        padding: "8rem 0",
        backgroundColor: NAVY, position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${IMG.asia1}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.15,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${NAVY}E0 0%, ${NAVY}C0 100%)`,
        }} />
        <Wrap style={{ position: "relative", zIndex: 2 }}>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center",
          }}>
            <div>
              <Label light>Why Asia</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: WHITE,
                fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em", marginBottom: "1.5rem",
              }}>
                The gravity of<br />global business is<br />
                <strong style={{ fontWeight: 600 }}>shifting east.</strong>
              </h2>
              <p style={{
                fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(255,255,255,0.4)",
                marginBottom: "2.5rem",
              }}>
                The companies and funds that enter now — with the right local partners —
                will define the next decade. The ones that wait will spend the decade
                catching up.
              </p>
              <Btn to="/why-asia" variant="outline">Explore why →</Btn>
            </div>
            <div data-rs className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem",
            }}>
              {[
                { n: "Singapore", d: "Asia's financial capital. Where every serious fund sets up." },
                { n: "Southeast Asia", d: "600M consumers. Digital-first. Under-penetrated." },
                { n: "India", d: "Scale meets ambition. The startup ecosystem the world is watching." },
                { n: "China", d: "Complex. Essential. Impossible to navigate alone." },
              ].map((m) => (
                <div key={m.n} data-rc style={{
                  padding: "1.75rem", borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}>
                  <p style={{ fontFamily: HEAD, fontWeight: 600, color: WHITE, fontSize: "1rem", marginBottom: "0.5rem" }}>{m.n}</p>
                  <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "rgba(255,255,255,0.35)" }}>{m.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section style={{ padding: "10rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ textAlign: "center" }}>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)",
              lineHeight: 1.1, letterSpacing: "-0.03em",
              marginBottom: "2rem",
            }}>
              Let's <strong style={{ fontWeight: 600, color: BLUE }}>talk.</strong>
            </h2>
            <p style={{
              fontSize: "1.1rem", lineHeight: 1.7, color: GRAY, fontFamily: BODY,
              maxWidth: "420px", margin: "0 auto 3rem",
            }}>
              You tell us where you want to go.<br />
              We'll tell you who you need to meet.
            </p>
            <Btn to="/contact">Get in touch →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
