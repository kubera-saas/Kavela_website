import {
  BLUE, BLUE_L, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, PageHero, ImageBreak,
} from "../components/shared";

export default function CorporatePage() {
  return (
    <RevealEngine>

      <PageHero
        label="For Corporates"
        title="You know the market<br/>is there. <strong style='font-weight:600'>We know<br/>the people.</strong>"
        subtitle="Asia isn't one market. It's dozens — each with its own rules, players, and timing. We give you direct access to the people who matter in each one."
        image={IMG.corporate}
      >
        <Btn to="/contact" variant="white">Let's meet →</Btn>
      </PageHero>

      {/* ── THE PROBLEM ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ maxWidth: "720px" }}>
            <Label>The reality</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em", marginBottom: "2rem",
            }}>
              Most companies enter Asia <strong style={{ fontWeight: 600 }}>too slowly.</strong>
            </h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY, marginBottom: "1.25rem" }}>
              They hire a consulting firm. Six months later, they have a market entry report.
              Twelve months later, they're still looking for a local partner.
              By then, the window has moved.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY }}>
              We don't write market entry reports. We introduce you to the distributor
              who will carry your product next quarter.
            </p>
          </div>
        </Wrap>
      </section>

      <ImageBreak image={IMG.asia4} height="40vh" />

      {/* ── WHAT WE DO ── */}
      <section style={{ padding: "8rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          <div data-r style={{ marginBottom: "4.5rem" }}>
            <Label>What we do</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}>
              Three ways in.
            </h2>
          </div>

          <div data-rs className="g3" style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0",
          }}>
            {[
              {
                title: "Market Entry",
                desc: "We identify the specific market, the specific partners, and the specific timing for your entry. Then we make the introductions that get you in the room.",
              },
              {
                title: "Partnerships",
                desc: "Distributors, JV partners, local operators — we know who is serious, who delivers, and who to avoid. Every introduction is pre-qualified.",
              },
              {
                title: "Deal Execution",
                desc: "We don't hand you a list and wish you luck. We stay in the room, facilitate negotiations, and make sure deals actually close.",
              },
            ].map((o, i) => (
              <div key={o.title} data-rc style={{
                padding: "3rem",
                backgroundColor: WHITE,
                borderRight: i < 2 ? `1px solid ${GRAY_L}` : "none",
                border: `1px solid ${GRAY_L}`,
                borderLeft: i === 0 ? `1px solid ${GRAY_L}` : "none",
              }}>
                <div style={{
                  width: "36px", height: "3px", backgroundColor: BLUE,
                  marginBottom: "2rem", borderRadius: "2px",
                }} />
                <h3 style={{
                  fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
                  fontSize: "1.2rem", marginBottom: "1rem",
                }}>{o.title}</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>{o.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      {/* ── THE DIFFERENCE ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <blockquote style={{ margin: 0 }}>
              <p style={{
                fontFamily: HEAD, fontWeight: 300, color: TEXT_D,
                fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
                lineHeight: 1.55, letterSpacing: "-0.01em",
              }}>
                "A good introduction is worth more than a great strategy deck.
                We've built our entire model around that belief."
              </p>
            </blockquote>
          </div>
        </Wrap>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "8rem 0", backgroundColor: NAVY,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url('${IMG.corporate}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.1,
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, ${NAVY}F0 0%, ${NAVY}D0 100%)`,
        }} />
        <Wrap style={{ position: "relative", zIndex: 2 }}>
          <div data-r>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: WHITE,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)", lineHeight: 1.12,
              letterSpacing: "-0.03em", marginBottom: "1.5rem",
              maxWidth: "550px",
            }}>
              Tell us the market.<br />
              <strong style={{ fontWeight: 600 }}>We'll open the door.</strong>
            </h2>
            <Btn to="/contact" variant="white">Let's meet →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
