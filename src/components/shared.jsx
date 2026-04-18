import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* ═══════════════════════════════════════════
   KAVELA - DESIGN SYSTEM v3
   Premium. Cinematic. Understated confidence.
   ═══════════════════════════════════════════ */

/* ─── TOKENS ─── */
export const BLUE     = "#1A3D7C";
export const BLUE_D   = "#0E2A5C";
export const BLUE_L   = "#2A5BA8";
export const NAVY     = "#0A1628";
export const WHITE    = "#FFFFFF";
export const OFF_W    = "#F5F6F8";
export const GRAY     = "#6B7280";
export const GRAY_L   = "#E5E7EB";
export const TEXT_D   = "#0F172A";
export const HEAD     = "'Inter Tight', 'Inter', system-ui, sans-serif";
export const BODY     = "'Inter', system-ui, sans-serif";
export const EASE     = "cubic-bezier(.16,1,.3,1)";
export const MAX_W    = "1280px";

/* ─── IMAGES ─── */
const U = (id, w = 1280, q = 75) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
export const IMG = {
  heroHome:  U("photo-1525625293386-3f8f99389edd"),            // Singapore skyline MBS dusk (hero)
  corporate: U("photo-1444723121867-7a241cacace9"),            // Singapore skyline night wide
  funds:     U("photo-1508964942454-1a56651d54ac"),            // Singapore MBS night
  platform:  U("photo-1517309230475-6736d926b979"),            // Hong Kong night
  asia1:     U("photo-1540959733332-eab4deabeeaf"),            // Tokyo tower wide
  asia2:     U("photo-1596422846543-75c6fc197f07"),            // Singapore CBD
  asia3:     U("photo-1536098561742-ca998e48cbcc"),            // Tokyo street neon
  asia4:     U("photo-1570168007204-dfb528c6958f"),            // Mumbai Gateway of India
};

/* ─── GLOBAL STYLES ─── */
export function GlobalStyles() {
  return (
    <style>{`
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      body { overflow-x: hidden; font-family: ${BODY}; color: ${TEXT_D}; background: ${WHITE}; }
      img { max-width: 100%; display: block; }
      a { text-decoration: none; color: inherit; }

      /* Reveal - lighter transforms for fluidity */
      [data-r] {
        opacity: 0; transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        will-change: opacity, transform;
      }
      [data-r].vis { opacity: 1 !important; transform: translateY(0) !important; }
      [data-rs] > [data-rc] {
        opacity: 0; transform: translateY(14px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        will-change: opacity, transform;
      }
      [data-rs].vis > [data-rc] { opacity: 1 !important; transform: translateY(0) !important; }

      /* Nav */
      .dk-nav { display: none !important; }
      .mb-toggle { display: flex !important; }
      @media(min-width:1024px) {
        .dk-nav { display: flex !important; }
        .mb-toggle { display: none !important; }
      }

      /* Grids */
      @media(max-width:900px) {
        .g2 { grid-template-columns: 1fr !important; }
        .g3 { grid-template-columns: 1fr !important; }
        .g4 { grid-template-columns: 1fr 1fr !important; }
        .kv-pathcard-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
      }
      @media(max-width:520px) {
        .g4 { grid-template-columns: 1fr !important; }
      }

      /* ─── MOBILE (tablet) ─── */
      @media(max-width:768px) {
        /* Sections: reduce vertical padding */
        section { padding-top: 4.5rem !important; padding-bottom: 4.5rem !important; }

        /* Hero */
        .kv-hero { min-height: 70vh !important; }
        .kv-hero-inner { padding-top: 8rem !important; padding-bottom: 4rem !important; }
        .kv-hero h1, .kv-page-hero h1 { font-size: clamp(2rem, 8vw, 3rem) !important; }

        /* Grids: reduce gaps on mobile */
        .g2, .g3 { gap: 2rem !important; }

        /* Stacked cards: swap border-left for border-top */
        .g3 > [data-rc] {
          border-left: none !important;
          border-right: none !important;
          padding: 2.5rem 1.5rem !important;
        }

        /* Market cards: reduce image panel height */
        .kv-market-img { min-height: 220px !important; }

        /* Path cards: tighter padding, themes always visible on touch */
        .kv-pathcard-text { padding: 2.25rem 1.5rem !important; }
        .kv-pathcard-themes {
          max-height: none !important; opacity: 1 !important;
          margin-bottom: 1.25rem !important;
        }
        .kv-pathcard-title { font-size: clamp(1.5rem, 5.5vw, 1.9rem) !important; }

        /* Parallax: disable on mobile/iOS */
        .kv-parallax { background-attachment: scroll !important; }

        /* Nav: smaller logo, fits cleanly inside the bar */
        .kv-nav { height: 64px !important; }
        .kv-nav-logo { height: 44px !important; }

        /* Footer */
        footer { padding-top: 3rem !important; }
        .kv-footer-grid { gap: 2.5rem !important; padding-bottom: 3rem !important; }
        .kv-footer-logo { height: 50px !important; }

        /* Comparison cards */
        .kv-compare { gap: 1.25rem !important; }

        /* Quote sections */
        .kv-quote { padding: 4rem 0 !important; }
        .kv-quote p { font-size: clamp(1.1rem, 4vw, 1.5rem) !important; }

        /* CTA sections */
        .kv-cta h2 { font-size: clamp(1.8rem, 6vw, 2.5rem) !important; }
      }

      /* ─── MOBILE (phone) ─── */
      @media(max-width:480px) {
        section { padding-top: 3.5rem !important; padding-bottom: 3.5rem !important; }
        .kv-hero { min-height: 60vh !important; }
        .kv-hero-inner { padding-top: 7rem !important; padding-bottom: 3rem !important; }

        .kv-nav { height: 60px !important; }
        .kv-nav-logo { height: 40px !important; }

        .kv-footer-grid { gap: 2rem !important; }
        .kv-footer-logo { height: 40px !important; }

        /* Buttons stack full width */
        .kv-hero-btns { flex-direction: column !important; }
        .kv-hero-btns a { width: 100% !important; justify-content: center !important; text-align: center !important; }
      }
    `}</style>
  );
}

/* ─── REVEAL ─── */
export function useReveal(ref) {
  useEffect(() => {
    const root = ref?.current || document;
    const els = [...root.querySelectorAll("[data-r],[data-rs]")];
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("vis");
        [...e.target.querySelectorAll("[data-rc]")].forEach((c, i) => {
          c.style.transitionDelay = `${i * 120}ms`;
        });
        io.unobserve(e.target);
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}

export function RevealEngine({ children }) {
  const ref = useRef(null);
  useReveal(ref);
  return <div ref={ref}>{children}</div>;
}

export function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

/* ─── PRIMITIVES ─── */
export const Wrap = ({ children, style: s = {}, className }) => (
  <div className={className} style={{ maxWidth: MAX_W, margin: "0 auto", padding: "0 clamp(1.5rem, 4vw, 3.5rem)", ...s }}>{children}</div>
);

export const Btn = ({ children, href, to, variant = "primary", style: s = {} }) => {
  const base = {
    display: "inline-flex", alignItems: "center", gap: "0.5rem",
    borderRadius: "6px", padding: "15px 34px",
    fontSize: "0.88rem", fontWeight: 600, fontFamily: HEAD,
    letterSpacing: "0.01em", cursor: "pointer",
    transition: "all 0.3s ease",
  };
  const v = {
    primary:     { ...base, background: BLUE, color: WHITE, border: "none" },
    white:       { ...base, background: WHITE, color: NAVY, border: "none" },
    outline:     { ...base, background: "transparent", color: WHITE, border: "1.5px solid rgba(255,255,255,0.3)" },
    outlineDark: { ...base, background: "transparent", color: BLUE, border: `1.5px solid ${BLUE}30` },
    ghost:       { ...base, background: "transparent", color: WHITE, border: "none", padding: "15px 0" },
  };
  const styles = { ...v[variant], ...s };
  const hover = (e) => { e.currentTarget.style.opacity = "0.8"; };
  const leave = (e) => { e.currentTarget.style.opacity = "1"; };
  if (to) return <Link to={to} style={styles} onMouseEnter={hover} onMouseLeave={leave}>{children}</Link>;
  return <a href={href || "#"} style={styles} onMouseEnter={hover} onMouseLeave={leave}>{children}</a>;
};

export const Label = ({ children, light = false }) => (
  <p style={{
    fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.2em",
    fontWeight: 600, fontFamily: HEAD,
    color: light ? "rgba(255,255,255,0.45)" : `${BLUE}90`,
    marginBottom: "1.25rem",
  }}>{children}</p>
);

/* ─── FULL-BLEED IMAGE BREAK ─── */
export function ImageBreak({ image, height = "50vh", overlay = true }) {
  return (
    <div style={{
      position: "relative", height, overflow: "hidden",
    }}>
      <div className="kv-parallax" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }} />
      {overlay && <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to bottom, ${NAVY}40 0%, ${NAVY}20 50%, ${NAVY}60 100%)`,
      }} />}
    </div>
  );
}

/* ─── PAGE HERO ─── */
export function PageHero({ label, title, subtitle, image, children }) {
  return (
    <section className="kv-hero kv-page-hero" style={{
      position: "relative", minHeight: "80vh",
      display: "flex", alignItems: "flex-end",
      overflow: "hidden", backgroundColor: NAVY,
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.35,
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(180deg, ${NAVY}90 0%, ${NAVY}40 40%, ${NAVY}D0 100%)`,
      }} />

      <Wrap className="kv-hero-inner" style={{ position: "relative", zIndex: 2, paddingBottom: "5rem", paddingTop: "12rem", width: "100%" }}>
        <div data-r>
          {label && <Label light>{label}</Label>}
          <h1 style={{
            fontFamily: HEAD, fontWeight: 300, color: WHITE,
            fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
            lineHeight: 1.1, letterSpacing: "-0.03em",
            marginBottom: subtitle ? "1.5rem" : "2rem",
            maxWidth: "700px",
          }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && (
            <p style={{
              fontSize: "1.1rem", lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)", maxWidth: "480px",
              marginBottom: "2.5rem", fontFamily: BODY, fontWeight: 300,
            }}>{subtitle}</p>
          )}
          {children}
        </div>
      </Wrap>
    </section>
  );
}

/* ─── NAV ─── */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    h();
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;
  const bg = solid ? `rgba(255,255,255,0.96)` : "transparent";
  const fg = solid ? TEXT_D : WHITE;
  const shadow = solid ? "0 1px 0 rgba(0,0,0,0.06)" : "none";

  const links = [
    ["Home", "/"],
    ["Corporate", "/corporate"],
    ["Funds", "/funds"],
    ["Platform", "/platform"],
    ["Why Asia", "/why-asia"],
    ["Insights", "/blog"],
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.35s ease",
      backgroundColor: bg, boxShadow: shadow,
      backdropFilter: solid ? "blur(12px)" : "none",
    }}>
      <Wrap>
        <nav className="kv-nav" style={{
          height: "96px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src={solid ? "/transparent-07.png" : "/LogoKavela.png"}
              alt="Kavela"
              className="kv-nav-logo"
              style={{
                height: "110px", width: "auto",
                transition: "opacity 0.3s",
              }}
            />
          </Link>

          <ul className="dk-nav" style={{
            listStyle: "none", display: "flex", alignItems: "center", gap: "2.75rem",
          }}>
            {links.map(([label, path]) => (
              <li key={label}>
                <Link to={path} style={{
                  color: fg, fontSize: "0.88rem", fontWeight: 500,
                  fontFamily: HEAD,
                  opacity: (path === "/" ? location.pathname === "/" : location.pathname.startsWith(path)) ? 1 : 0.55,
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "1"}
                  onMouseLeave={e => { const active = path === "/" ? location.pathname === "/" : location.pathname.startsWith(path); if (!active) e.currentTarget.style.opacity = "0.55"; }}
                >{label}</Link>
              </li>
            ))}
            <li>
              <Btn to="/contact" variant={solid ? "primary" : "white"}
                style={{ padding: "11px 28px", fontSize: "0.84rem" }}>
                Let's meet
              </Btn>
            </li>
          </ul>

          <button className="mb-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: fg, fontSize: "1.6rem", padding: "8px",
              display: "flex", alignItems: "center",
            }}
            aria-label="Menu"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>
      </Wrap>

      {mobileOpen && (
        <div style={{
          background: WHITE, borderTop: `1px solid ${GRAY_L}`,
          padding: "0.5rem 0 1.25rem",
          boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
          maxHeight: "calc(100vh - 60px)", overflowY: "auto",
        }}>
          <Wrap>
            {links.map(([label, path], i) => (
              <Link key={label} to={path}
                style={{
                  display: "block", padding: "16px 0", fontSize: "1rem",
                  fontWeight: 500, fontFamily: HEAD, color: TEXT_D,
                  borderBottom: i < links.length - 1 ? `1px solid ${GRAY_L}` : "none",
                }}
              >{label}</Link>
            ))}
            <Link to="/contact"
              style={{
                display: "block", marginTop: "1.25rem",
                padding: "14px 20px", textAlign: "center",
                background: BLUE, color: WHITE,
                borderRadius: "6px", fontSize: "0.95rem",
                fontWeight: 600, fontFamily: HEAD,
                letterSpacing: "0.01em",
              }}
            >Let's meet →</Link>
          </Wrap>
        </div>
      )}
    </header>
  );
}

/* ─── FOOTER ─── */
export function Footer() {
  const lk = {
    fontSize: "0.88rem", color: "rgba(255,255,255,0.4)",
    transition: "color 0.2s", display: "block", marginBottom: "0.85rem",
  };
  const h = (e) => e.currentTarget.style.color = "rgba(255,255,255,0.85)";
  const l = (e) => e.currentTarget.style.color = "rgba(255,255,255,0.4)";

  return (
    <footer style={{ backgroundColor: NAVY, padding: "5.5rem 0 0" }}>
      <Wrap>
        <div className="g4 kv-footer-grid" style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.2fr",
          gap: "4rem", paddingBottom: "4.5rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          alignItems: "start",
        }}>
          <div>
            <img src="/LogoKavela.png" alt="Kavela"
              className="kv-footer-logo"
              style={{ height: "70px", width: "auto", filter: "brightness(0) invert(1)", marginBottom: "1.5rem", opacity: 0.8 }}
            />
            <p style={{ fontSize: "0.92rem", lineHeight: 1.75, color: "rgba(255,255,255,0.35)", maxWidth: "300px" }}>
              Connecting corporates, funds, and family offices with the right people across Asia.
            </p>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", fontWeight: 600, fontFamily: HEAD, marginBottom: "1.75rem" }}>Pages</p>
            {[["Corporate","/corporate"],["Funds & Family Offices","/funds"],["Platform","/platform"],["Why Asia","/why-asia"],["Insights","/blog"],["Contact","/contact"]].map(([la,p]) => (
              <Link key={la} to={p} style={lk} onMouseEnter={h} onMouseLeave={l}>{la}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", fontWeight: 600, fontFamily: HEAD, marginBottom: "1.75rem" }}>Connect</p>
            <a href="mailto:contact@kavela.co" style={lk} onMouseEnter={h} onMouseLeave={l}>contact@kavela.co</a>
            <a href="https://www.linkedin.com/company/kavelagroup/" target="_blank" rel="noreferrer" style={lk} onMouseEnter={h} onMouseLeave={l}>LinkedIn</a>
          </div>

          <div>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", fontWeight: 600, fontFamily: HEAD, marginBottom: "1.75rem" }}>Headquarters</p>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, color: "rgba(255,255,255,0.4)" }}>
              Singapore
            </p>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.7, color: "rgba(255,255,255,0.25)", marginTop: "0.35rem" }}>
              ASEAN · India · China
            </p>
          </div>
        </div>

        <div style={{
          padding: "2rem 0", display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "1rem",
        }}>
          <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.18)", fontFamily: HEAD }}>
            © {new Date().getFullYear()} Kavela
          </p>
        </div>
      </Wrap>
    </footer>
  );
}
