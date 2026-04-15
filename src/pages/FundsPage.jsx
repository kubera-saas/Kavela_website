import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, PageHero, ImageBreak,
} from "../components/shared";

export default function FundsPage() {
  return (
    <RevealEngine>

      <PageHero
        label="For Funds & Family Offices"
        title="Deploying or growing<br/><strong style='font-weight:600'>in Asia?</strong>"
        subtitle="Operational support, portfolio expansion, and deal flow - whether you're building your first Asia presence or deepening an existing one."
        image={IMG.funds}
      >
        <Btn to="/contact" variant="white">Let's meet →</Btn>
      </PageHero>

      {/* ── FUND ENTRY ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            <div>
              <Label>Operating in Asia</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em", marginBottom: "1.5rem",
              }}>
                Asia runs on<br />
                <strong style={{ fontWeight: 600 }}>local trust.</strong>
              </h2>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY, marginBottom: "1.25rem" }}>
                Whether you're deploying into a new market or looking to expand
                your regional footprint, knowing who to work with and how to access
                the right deal flow takes time and local relationships.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY }}>
                We've been building those relationships - with founders, LPs,
                co-investors, and operators, particularly in Singapore and Southeast Asia.
                Our goal is to help funds and family offices benefit from that network.
              </p>
            </div>

            <div>
              {[
                { title: "Market positioning", desc: "Where to deploy next, how to position your thesis, and who you need to know - tailored to your fund or family office mandate." },
                { title: "Ecosystem access", desc: "Direct introductions to LPs, co-investors, founders, and corporate partners. A network, not a database." },
                { title: "Operational support", desc: "On-the-ground guidance - from local infrastructure to regulatory navigation - to help turn your Asia strategy into results." },
              ].map((item, i) => (
                <div key={item.title} data-r style={{
                  padding: "2rem 0",
                  borderBottom: i < 2 ? `1px solid ${GRAY_L}` : "none",
                }}>
                  <h4 style={{
                    fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
                    fontSize: "1.05rem", marginBottom: "0.6rem",
                  }}>{item.title}</h4>
                  <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: GRAY }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrap>
      </section>

      <ImageBreak image={IMG.asia2} height="40vh" />

      {/* ── PORTFOLIO ── */}
      <section style={{ padding: "8rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          <div data-r style={{ marginBottom: "4.5rem", maxWidth: "620px" }}>
            <Label>Portfolio companies</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em", marginBottom: "1.5rem",
            }}>
              Your portfolio companies<br />need <strong style={{ fontWeight: 600 }}>local partners.</strong>
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY }}>
              We work directly with portfolio companies on the ground. Same rigor,
              same accountability, same urgency - the investor-grade execution
              your companies deserve.
            </p>
          </div>

          <div data-rs className="g3" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem",
          }}>
            {[
              {
                title: "Go-to-market",
                desc: "Market-specific plans built with local operators who know the distribution landscape, the buyer behaviour, and the competitive dynamics.",
              },
              {
                title: "Partnerships & ops",
                desc: "From distribution deals to local hiring - we find the right people and stay involved until the relationship is working.",
              },
              {
                title: "Follow-on capital",
                desc: "Connections to local investors, strategic acquirers, and funding ecosystems that can fuel the next stage of growth.",
              },
            ].map((o) => (
              <div key={o.title} data-rc style={{
                padding: "2.5rem", borderRadius: "12px",
                backgroundColor: WHITE, border: `1px solid ${GRAY_L}`,
                transition: "box-shadow 0.35s ease",
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "0 8px 28px rgba(10,22,40,0.07)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
              >
                <h3 style={{
                  fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
                  fontSize: "1.1rem", marginBottom: "0.9rem",
                }}>{o.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── QUOTE ── */}
      <section style={{ padding: "7rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontFamily: HEAD, fontWeight: 300, color: TEXT_D,
              fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
              lineHeight: 1.55, letterSpacing: "-0.01em",
            }}>
              "We work daily with growth-stage companies operating and expanding
              across Asia - businesses backed by funds and family offices,
              held to investor-grade expectations. That experience shapes everything we do."
            </p>
          </div>
        </Wrap>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "8rem 0", backgroundColor: BLUE,
      }}>
        <Wrap>
          <div data-r>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: WHITE,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.12,
              letterSpacing: "-0.03em", marginBottom: "1.5rem",
              maxWidth: "550px",
            }}>
              Let's discuss your<br />
              <strong style={{ fontWeight: 600 }}>Asia ambitions.</strong>
            </h2>
            <Btn to="/contact" variant="white">Let's meet →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
