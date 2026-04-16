import { useParams, Link } from "react-router-dom";
import {
  BLUE, NAVY, WHITE, OFF_W, GRAY, GRAY_L, TEXT_D,
  HEAD, BODY,
  RevealEngine, Wrap, Label,
} from "../components/shared";
import SEO from "../components/SEO";
import { getArticleBySlug, getAllArticles } from "../lib/articles";

/* Scoped typography for rendered markdown */
function ArticleStyles() {
  return (
    <style>{`
      .kv-article h2 {
        font-family: ${HEAD};
        font-weight: 300;
        font-size: 1.6rem;
        color: ${TEXT_D};
        margin: 2.5rem 0 1rem;
        letter-spacing: -0.02em;
        line-height: 1.3;
      }
      .kv-article h3 {
        font-family: ${HEAD};
        font-weight: 600;
        font-size: 1.15rem;
        color: ${TEXT_D};
        margin: 2rem 0 0.75rem;
      }
      .kv-article p {
        font-size: 1.05rem;
        line-height: 1.85;
        color: ${GRAY};
        font-family: ${BODY};
        margin-bottom: 1.5rem;
      }
      .kv-article a {
        color: ${BLUE};
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .kv-article a:hover { opacity: 0.7; }
      .kv-article strong {
        font-weight: 600;
        color: ${TEXT_D};
      }
      .kv-article ul, .kv-article ol {
        margin: 1rem 0 1.5rem 1.5rem;
        color: ${GRAY};
        font-family: ${BODY};
        font-size: 1.05rem;
        line-height: 1.85;
      }
      .kv-article li { margin-bottom: 0.5rem; }
      .kv-article blockquote {
        border-left: 3px solid ${BLUE};
        padding: 0.5rem 0 0.5rem 1.5rem;
        margin: 2rem 0;
        font-style: italic;
      }
      .kv-article blockquote p { color: ${TEXT_D}; font-weight: 300; }
      .kv-article hr {
        border: none;
        border-top: 1px solid ${GRAY_L};
        margin: 3rem 0;
      }
      .kv-article em { font-style: italic; }
    `}</style>
  );
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <RevealEngine>
        <section style={{
          minHeight: "60vh", display: "flex", alignItems: "center",
          justifyContent: "center", backgroundColor: OFF_W,
        }}>
          <Wrap>
            <div style={{ textAlign: "center" }}>
              <h1 style={{
                fontFamily: HEAD, fontWeight: 200, color: TEXT_D,
                fontSize: "2rem", marginBottom: "1rem",
              }}>Article not found</h1>
              <Link to="/blog" style={{
                color: BLUE, fontFamily: HEAD, fontWeight: 600,
                fontSize: "0.95rem",
              }}>← Back to Insights</Link>
            </div>
          </Wrap>
        </section>
      </RevealEngine>
    );
  }

  const fmtDate = new Date(article.date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <RevealEngine>
      <SEO
        title={article.title}
        description={article.description}
        path={`/blog/${article.slug}`}
        image={article.image}
        type="article"
        article={article}
      />
      <ArticleStyles />

      {/* Hero */}
      <section style={{
        position: "relative", minHeight: "50vh",
        display: "flex", alignItems: "flex-end",
        overflow: "hidden", backgroundColor: NAVY,
      }}>
        {article.image && (
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `url('${article.image}')`,
            backgroundSize: "cover", backgroundPosition: "center",
            opacity: 0.3,
          }} />
        )}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(180deg, ${NAVY}90 0%, ${NAVY}40 40%, ${NAVY}D0 100%)`,
        }} />

        <Wrap style={{
          position: "relative", zIndex: 2,
          paddingBottom: "4rem", paddingTop: "10rem", width: "100%",
        }}>
          <div data-r style={{ maxWidth: "720px" }}>
            <Link to="/blog" style={{
              fontSize: "0.8rem", fontFamily: HEAD, fontWeight: 600,
              color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
              textTransform: "uppercase", marginBottom: "1.5rem",
              display: "inline-block",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
            >← Insights</Link>

            <h1 style={{
              fontFamily: HEAD, fontWeight: 300, color: WHITE,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              lineHeight: 1.15, letterSpacing: "-0.025em",
              marginBottom: "1.5rem",
            }}>{article.title}</h1>

            <div style={{
              display: "flex", alignItems: "center", gap: "1.25rem",
              flexWrap: "wrap",
            }}>
              <span style={{
                fontSize: "0.85rem", color: "rgba(255,255,255,0.4)",
                fontFamily: HEAD,
              }}>{fmtDate}</span>
              {article.readTime && (
                <>
                  <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                  <span style={{
                    fontSize: "0.85rem", color: "rgba(255,255,255,0.4)",
                    fontFamily: HEAD,
                  }}>{article.readTime}</span>
                </>
              )}
              {article.author && (
                <>
                  <span style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
                  <span style={{
                    fontSize: "0.85rem", color: "rgba(255,255,255,0.4)",
                    fontFamily: HEAD,
                  }}>By {article.author}</span>
                </>
              )}
            </div>
          </div>
        </Wrap>
      </section>

      {/* Article body */}
      <section style={{ padding: "5rem 0", backgroundColor: WHITE }}>
        <Wrap>
          <div data-r
            className="kv-article"
            style={{ maxWidth: "720px", margin: "0 auto" }}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </Wrap>
      </section>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <section style={{ paddingBottom: "3rem", backgroundColor: WHITE }}>
          <Wrap>
            <div style={{
              maxWidth: "720px", margin: "0 auto",
              display: "flex", flexWrap: "wrap", gap: "0.5rem",
              borderTop: `1px solid ${GRAY_L}`, paddingTop: "2rem",
            }}>
              {article.tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: "0.72rem", padding: "6px 14px",
                  borderRadius: "100px",
                  border: `1px solid ${GRAY_L}`,
                  color: GRAY, fontFamily: HEAD, fontWeight: 500,
                  letterSpacing: "0.03em",
                }}>{tag}</span>
              ))}
            </div>
          </Wrap>
        </section>
      )}

      {/* Back + CTA */}
      <section style={{ padding: "4rem 0", backgroundColor: OFF_W }}>
        <Wrap>
          <div data-r style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: "1.5rem",
          }}>
            <Link to="/blog" style={{
              fontSize: "0.92rem", fontWeight: 600, color: BLUE,
              fontFamily: HEAD,
            }}>← All insights</Link>
            <Link to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              borderRadius: "6px", padding: "12px 28px",
              fontSize: "0.85rem", fontWeight: 600, fontFamily: HEAD,
              background: BLUE, color: WHITE, border: "none",
              transition: "opacity 0.3s", textDecoration: "none",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
            >Let's talk about this →</Link>
          </div>
        </Wrap>
      </section>
    </RevealEngine>
  );
}
