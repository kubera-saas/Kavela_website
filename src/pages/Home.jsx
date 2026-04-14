import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BLUE, BLUE_D, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, ImageBreak,
} from "../components/shared";

/* ─── Hover card with sub-themes ─── */
function PathCard({ to, image, label, title, subtitle, themes, side = "left" }) {
  const [hovered, setHovered] = useState(false);
  const imgSide = (
    <div className="kv-market-img" style={{ position: "relative", overflow: "hidden", minHeight: "340px" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        transition: "transform 0.6s ease",
        transform: hovered ? "scale(1.04)" : "scale(1)",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(135deg, ${BLUE}50 0%, ${NAVY}60 100%)`,
      }} />
    </div>
  );
  const textSide = (
    <div style={{
      padding: "3.5rem", backgroundColor: NAVY, color: WHITE,
      display: "flex", flexDirection: "column", justifyContent: "center",
    }}>
      <Label light>{label}</Label>
      <h2 style={{
        fontFamily: HEAD, fontWeight: 300, color: WHITE,
        fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", lineHeight: 1.2,
        letterSpacing: "-0.02em", marginBottom: "1rem",
      }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p style={{
        fontSize: "0.92rem", lineHeight: 1.7, color: "rgba(255,255,255,0.4)",
        marginBottom: "1.5rem", maxWidth: "380px",
      }}>{subtitle}</p>

      {/* Sub-themes on hover */}
      <div style={{
        overflow: "hidden",
        maxHeight: hovered ? "200px" : "0",
        opacity: hovered ? 1 : 0,
        transition: "max-height 0.4s ease, opacity 0.3s ease",
        marginBottom: hovered ? "1.5rem" : "0",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {themes.map((t) => (
            <span key={t} style={{
              fontSize: "0.72rem", padding: "6px 14px", borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)", fontFamily: HEAD, fontWeight: 500,
              letterSpacing: "0.03em",
            }}>{t}</span>
          ))}
        </div>
      </div>

      <span style={{ fontSize: "0.88rem", fontWeight: 600, color: WHITE, fontFamily: HEAD }}>
        Learn more →
      </span>
    </div>
  );

  return (
    <Link to={to} data-r style={{
      display: "grid", gridTemplateColumns: "1fr 1fr",
      borderRadius: "16px", overflow: "hidden",
      textDecoration: "none", cursor: "pointer",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      transform: hovered ? "translateY(-3px)" : "translateY(0)",
      boxShadow: hovered ? "0 20px 60px rgba(10,22,40,0.15)" : "none",
    }}
      className="g2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {side === "left" ? <>{imgSide}{textSide}</> : <>{textSide}{imgSide}</>}
    </Link>
  );
}

export default function Home() {
  return (
    <RevealEngine>

      {/* ════════════ HERO ════════════ */}
      <section className="kv-hero" style={{
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

        <Wrap className="kv-hero-inner" style={{ position: "relative", zIndex: 2, paddingBottom: "6rem", paddingTop: "14rem", width: "100%" }}>
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
              color: "rgba(255,255,255,0.5)", maxWidth: "480px",
              marginBottom: "3rem", fontFamily: BODY, fontWeight: 300,
            }}>
              We help investment funds, family offices, and corporates
              find the right partners and opportunities in Southeast Asia.
            </p>

            <div className="kv-hero-btns" style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap", alignItems: "center" }}>
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
              We help corporates, funds, and family offices connect with
              the right investors, distributors, and operators across Asia.
            </p>
          </div>
        </Wrap>
      </section>

      {/* ════════════ TWO PATHS - HOVER SUB-THEMES ════════════ */}
      <section style={{ backgroundColor: WHITE, paddingBottom: "1.5rem" }}>
        <Wrap style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

          <PathCard
            to="/corporate"
            image={IMG.corporate}
            label="For Corporates"
            title="Expanding into Asia?<br/><strong style='font-weight:600'>We can help.</strong>"
            subtitle="Market entry, distribution partnerships, and deal execution - with a focus on Singapore and Southeast Asia."
            themes={["Market entry", "High-value introductions", "Distribution partnerships", "Deal execution"]}
            side="left"
          />

          <PathCard
            to="/funds"
            image={IMG.funds}
            label="For Funds & Family Offices"
            title="Looking for Asia exposure?<br/><strong style='font-weight:600'>Let's explore together.</strong>"
            subtitle="Operational support, portfolio expansion, and deal flow through local networks we've built over the years."
            themes={["Operational support", "Portfolio expansion", "Deal flow", "LP & co-investor access"]}
            side="right"
          />

        </Wrap>
      </section>

      {/* ════════════ IMAGE BREAK ════════════ */}
      <ImageBreak image={IMG.asia3} height="45vh" />

      {/* ════════════ WHAT WE BRING ════════════ */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            <div>
              <Label>What we bring</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}>
                Access, speed,<br />and <strong style={{ fontWeight: 600, color: BLUE }}>follow-through.</strong>
              </h2>
            </div>
            <div style={{ paddingTop: "0.5rem" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: GRAY, fontFamily: BODY, marginBottom: "1.5rem" }}>
                Many expansion journeys lose momentum - not because the strategy is wrong,
                but because the right introductions don't happen soon enough. That's
                where we focus: helping match the right distributor, LP,
                or operator to your specific needs.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: GRAY, fontFamily: BODY }}>
                And we stay involved until the relationship is working.
              </p>
            </div>
          </div>

          <div data-rs style={{ marginTop: "5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0" }} className="g3">
            {[
              { n: "Access", d: "A growing network of investors, distributors, and operators - strongest in Singapore and Southeast Asia, with reach into India and China." },
              { n: "Speed", d: "First introductions in weeks. We aim to move at the pace of opportunity, not at the pace of a typical advisory engagement." },
              { n: "Follow-through", d: "We stay involved beyond the introduction. A connection only has value if it leads somewhere concrete." },
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
                For funds, family offices, and corporates with a long-term view,
                building the right local relationships now is key.
              </p>
              <Btn to="/why-asia" variant="outline">Explore why →</Btn>
            </div>
            <div data-rs className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem",
            }}>
              {[
                { n: "Singapore", d: "Our home base. Asia's financial hub and natural starting point." },
                { n: "Southeast Asia", d: "Our core focus. Fast-growing, digital-first, full of opportunity." },
                { n: "India", d: "Extended reach through trusted partners. A market we're actively exploring." },
                { n: "China", d: "Selective access through local intermediaries we work with." },
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
              Tell us where you want to go.<br />
              We'll tell you who you need to meet.
            </p>
            <Btn to="/contact">Get in touch →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
