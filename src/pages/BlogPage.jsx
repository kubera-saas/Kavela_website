import { Link } from "react-router-dom";
import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY, IMG,
  RevealEngine, Wrap, Label, PageHero,
} from "../components/shared";
import SEO from "../components/SEO";
import { getAllArticles } from "../lib/articles";

const articles = getAllArticles();

function ArticleCard({ article }) {
  const fmtDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <Link to={`/blog/${article.slug}`} data-rc style={{
      display: "block", borderRadius: "16px", overflow: "hidden",
      border: `1px solid ${GRAY_L}`, backgroundColor: WHITE,
      transition: "transform 0.35s ease, box-shadow 0.35s ease",
      textDecoration: "none",
    }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(10,22,40,0.1)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      {article.image && (
        <div style={{
          height: "200px", overflow: "hidden", position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${article.image}')`,
            backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(180deg, transparent 50%, ${NAVY}40 100%)`,
          }} />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "2rem" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "1rem",
          marginBottom: "1rem",
        }}>
          <span style={{
            fontSize: "0.75rem", color: GRAY, fontFamily: HEAD,
            fontWeight: 500,
          }}>{fmtDate}</span>
          {article.readTime && (
            <>
              <span style={{ fontSize: "0.65rem", color: GRAY_L }}>|</span>
              <span style={{
                fontSize: "0.75rem", color: GRAY, fontFamily: HEAD,
                fontWeight: 500,
              }}>{article.readTime}</span>
            </>
          )}
        </div>

        <h3 style={{
          fontFamily: HEAD, fontWeight: 600, color: TEXT_D,
          fontSize: "1.2rem", lineHeight: 1.35,
          marginBottom: "0.75rem",
        }}>{article.title}</h3>

        <p style={{
          fontSize: "0.92rem", lineHeight: 1.7, color: GRAY,
          marginBottom: "1.25rem",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}>{article.description}</p>

        <span style={{
          fontSize: "0.85rem", fontWeight: 600, color: BLUE,
          fontFamily: HEAD,
        }}>Read more →</span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  return (
    <RevealEngine>
      <SEO
        title="Insights"
        description="Perspectives on doing business in Asia - for funds, family offices, and corporates navigating the region."
        path="/blog"
      />

      <PageHero
        label="Insights"
        title="Perspectives on<br/><strong style='font-weight:600'>doing business in Asia.</strong>"
        subtitle="Ideas, observations, and lessons from working across the region - for funds, family offices, and corporates."
        image={IMG.asia2}
      />

      <section style={{ padding: "6rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          {articles.length === 0 ? (
            <div data-r style={{ textAlign: "center", padding: "4rem 0" }}>
              <p style={{
                fontFamily: HEAD, fontWeight: 300, color: GRAY,
                fontSize: "1.2rem",
              }}>Articles coming soon.</p>
            </div>
          ) : (
            <>
              <div data-r style={{ marginBottom: "3rem" }}>
                <Label>Latest</Label>
              </div>
              <div data-rs className="g3" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.75rem",
              }}>
                {articles.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </>
          )}
        </Wrap>
      </section>

      {/* CTA */}
      <section style={{ padding: "6rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r style={{ textAlign: "center", maxWidth: "550px", margin: "0 auto" }}>
            <h2 style={{
              fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.15,
              letterSpacing: "-0.02em", marginBottom: "1.25rem",
            }}>
              Want to discuss a topic?<br />
              <strong style={{ fontWeight: 600, color: BLUE }}>Let's talk.</strong>
            </h2>
            <p style={{
              fontSize: "1rem", lineHeight: 1.7, color: GRAY,
              fontFamily: BODY, marginBottom: "2rem",
            }}>
              Our insights come from real work. If something resonates,
              we'd love to continue the conversation.
            </p>
            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              borderRadius: "6px", padding: "15px 34px",
              fontSize: "0.88rem", fontWeight: 600, fontFamily: HEAD,
              background: BLUE, color: WHITE, border: "none",
              transition: "opacity 0.3s", textDecoration: "none",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Get in touch →</Link>
          </div>
        </Wrap>
      </section>
    </RevealEngine>
  );
}
