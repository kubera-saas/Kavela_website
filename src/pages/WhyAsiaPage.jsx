import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Btn, Label, PageHero, ImageBreak,
} from "../components/shared";

export default function WhyAsiaPage() {
  return (
    <RevealEngine>

      <PageHero
        label="Why Asia"
        title="The gravity of global<br/>business is <strong style='font-weight:600'>shifting east.</strong>"
        subtitle="This isn't a trend piece. It's the operating reality for every serious fund, family office, and corporate with a 10-year horizon."
        image={IMG.asia2}
      >
        <Btn to="/contact" variant="white">Explore with us →</Btn>
      </PageHero>

      {/* ── THE CASE ── */}
      <section style={{ padding: "8rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r className="g2" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start",
          }}>
            <div>
              <Label>The case</Label>
              <h2 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
                letterSpacing: "-0.025em",
              }}>
                Asia isn't<br /><strong style={{ fontWeight: 600 }}>emerging.</strong><br />
                It's arrived.
              </h2>
            </div>
            <div style={{ paddingTop: "0.5rem" }}>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY, marginBottom: "1.5rem" }}>
                More than half of the world's middle class will live in Asia by 2030.
                The region already produces more unicorns than Europe. Its digital
                infrastructure in many markets leapfrogs the West.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY, marginBottom: "1.5rem" }}>
                But the opportunity isn't in the macro numbers. It's in the specifics -
                the regulatory window that opens for 18 months, the distribution
                partner who controls an entire vertical, the LP network that only
                meets through personal introductions.
              </p>
              <p style={{ fontSize: "1.05rem", lineHeight: 1.85, color: GRAY, fontFamily: BODY }}>
                That's where we operate.
              </p>
            </div>
          </div>
        </Wrap>
      </section>

      <ImageBreak image={IMG.heroHome} height="45vh" />

      {/* ── MARKETS ── */}
      <section style={{ padding: "8rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          <div data-r style={{ marginBottom: "5rem", maxWidth: "620px" }}>
            <Label>Where we operate</Label>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}>
              Four markets. <strong style={{ fontWeight: 600 }}>Each one different.</strong>
            </h2>
          </div>

          {/* Market cards - alternating layout */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Singapore */}
            <div data-r className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${GRAY_L}`, backgroundColor: WHITE,
            }}>
              <div className="kv-market-img" style={{ position: "relative", minHeight: "320px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${IMG.heroHome}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${BLUE}50 0%, ${NAVY}60 100%)` }} />
              </div>
              <div style={{ padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: HEAD, fontWeight: 600, color: TEXT_D, fontSize: "1.5rem", marginBottom: "1.25rem" }}>Singapore</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY, marginBottom: "0.75rem" }}>
                  Where Kavela sits. Where the capital flows. Every major fund, every regional
                  HQ, every serious player in Asia has a presence here.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>
                  Strong rule of law, English-speaking, and plugged into every market in the region.
                  If you're entering Asia, you start here.
                </p>
              </div>
            </div>

            {/* Southeast Asia */}
            <div data-r className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${GRAY_L}`, backgroundColor: WHITE,
            }}>
              <div style={{ padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: HEAD, fontWeight: 600, color: TEXT_D, fontSize: "1.5rem", marginBottom: "1.25rem" }}>Southeast Asia</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY, marginBottom: "0.75rem" }}>
                  Not one market - a mosaic. Indonesia alone has 280 million people and a
                  digital economy growing at 20% a year. Vietnam is the manufacturing
                  alternative everyone is watching. Thailand and the Philippines are
                  building consumer markets that reward first movers.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>
                  The key to ASEAN is knowing which market fits your product - and knowing
                  the distributor who controls that vertical.
                </p>
              </div>
              <div className="kv-market-img" style={{ position: "relative", minHeight: "320px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${IMG.asia3}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${NAVY}40 0%, ${BLUE}50 100%)` }} />
              </div>
            </div>

            {/* India */}
            <div data-r className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${GRAY_L}`, backgroundColor: WHITE,
            }}>
              <div className="kv-market-img" style={{ position: "relative", minHeight: "320px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${IMG.asia4}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${BLUE}50 0%, ${NAVY}60 100%)` }} />
              </div>
              <div style={{ padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: HEAD, fontWeight: 600, color: TEXT_D, fontSize: "1.5rem", marginBottom: "1.25rem" }}>India</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY, marginBottom: "0.75rem" }}>
                  A market attracting global attention - government-backed FDI push,
                  a massive domestic consumer base, and a generation of founders
                  who think global from day one.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>
                  India rewards patience and the right local partner.
                  We're building our network there and can facilitate introductions
                  through trusted contacts on the ground.
                </p>
              </div>
            </div>

            {/* China */}
            <div data-r className="g2" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              borderRadius: "16px", overflow: "hidden",
              border: `1px solid ${GRAY_L}`, backgroundColor: WHITE,
            }}>
              <div style={{ padding: "3.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 style={{ fontFamily: HEAD, fontWeight: 600, color: TEXT_D, fontSize: "1.5rem", marginBottom: "1.25rem" }}>China</h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY, marginBottom: "0.75rem" }}>
                  A complex but important market. The regulatory landscape shifts
                  constantly, the business culture is relationship-first, and
                  the competitive dynamics are unique.
                </p>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: GRAY }}>
                  We're transparent: China isn't our primary focus. But through
                  trusted intermediaries we work with, we can help facilitate
                  selective introductions when the opportunity is right.
                </p>
              </div>
              <div className="kv-market-img" style={{ position: "relative", minHeight: "320px" }}>
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: `url('${IMG.asia1}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${NAVY}50 0%, ${BLUE}40 100%)` }} />
              </div>
            </div>

          </div>
        </Wrap>
      </section>

      {/* ── TIMING ── */}
      <section className="kv-quote" style={{ padding: "7rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontFamily: HEAD, fontWeight: 300, color: TEXT_D,
              fontSize: "clamp(1.3rem, 2.8vw, 1.8rem)",
              lineHeight: 1.55, letterSpacing: "-0.01em",
            }}>
              "The funds, family offices, and corporates that establish the right local
              partnerships now will be best positioned for the decade ahead."
            </p>
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
          backgroundImage: `url('${IMG.heroHome}')`,
          backgroundSize: "cover", backgroundPosition: "center",
          opacity: 0.12,
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
              maxWidth: "500px",
            }}>
              Interested in Asia?<br />
              <strong style={{ fontWeight: 600 }}>Let's talk about it.</strong>
            </h2>
            <Btn to="/contact" variant="white">Let's meet →</Btn>
          </div>
        </Wrap>
      </section>

    </RevealEngine>
  );
}
