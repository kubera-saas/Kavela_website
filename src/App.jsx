import { useEffect, useRef } from "react";

/* DESIGN TOKENS */
const BG = "#000000";
const TEXT = "#F5F5F5";
const BORDER = "rgba(255,255,255,0.08)";
const ACCENT_LIGHT = "rgba(255,255,255,0.06)";
const HEAD = "'Inter Tight', Inter, ui-sans-serif, system-ui";
const KAVELA_TEAL = "#3ED4C9"; // halo / brand tint
// Button blue (inspired by your image)
const PRIMARY = "#264d52ff";
const PRIMARY_DARK = "#1c8389ff";


/* HOOKS */
function useSmoothAnchors() {
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const el = document.querySelector(a.getAttribute("href"));
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}

function useReveal(containerRef, { rootMargin = "0px 0px -12% 0px", stagger = 110 } = {}) {
  useEffect(() => {
    const root = containerRef?.current || document;
    const groups = Array.from(root.querySelectorAll("[data-reveal]"));
    if (!groups.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-reveal-item]");
            items.forEach((el, i) => {
              el.style.transitionDelay = `${i * stagger}ms`;
              el.classList.remove("opacity-0", "translate-y-6", "blur-sm");
              el.classList.add("opacity-100", "translate-y-0", "blur-0");
            });
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin, threshold: 0.12 }
    );

    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, [containerRef, rootMargin, stagger]);
}

/* ICONS */
function IconUnderstand() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 12h5M12 9.5v5" strokeLinecap="round" />
    </svg>
  );
}
function IconConnect() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <circle cx="5" cy="12" r="2.5" />
      <circle cx="19" cy="12" r="2.5" />
      <path d="M7.5 12h9" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}
function IconExecute() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <path d="M4 7h16M4 12h10M4 17h6M18 14.5l2.5 2.5-2.5 2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconMedtech() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 12h8M12 8v8" strokeLinecap="round" />
    </svg>
  );
}
function IconIndustrial() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <path d="M2 20h20M4 20v-8l5-2v-2l5-2v-1l4 2v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconDefense() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={TEXT} strokeWidth="1.2" className="h-8 w-8">
      <path d="M12 2l8 4v6c0 5-8 9-8 9s-8-4-8-9V6l8-4z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* BUTTON COMPONENT */
function Button({ children, label = "Contact", href = "#contact", className = "" }) {
  const content = children ?? label;
  return (
    <a
      href={href}
      aria-label={typeof content === "string" ? content : "Contact"}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 
                  text-sm md:text-base font-medium transition hover:brightness-110
                  focus:outline-none focus:ring-2 focus:ring-offset-0 ${className}`}
      style={{
        background: `linear-gradient(180deg, ${PRIMARY} 0%, ${PRIMARY_DARK} 100%)`,
        color: "#ffffff",
        boxShadow: "0 8px 24px rgba(20,127,202,0.35)",
      }}
    >
      {content}
    </a>
  );
}


/* LAYOUT */
function Section({ id, children, pb = true }) {
  return (
    <section id={id} className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">{children}</div>
      {pb && <SectionDivider />}
    </section>
  );
}
function SectionDivider({ width = "w-2/3" }) {
  return (
    <div className="flex justify-center py-12 md:py-16">
      <div className={`${width} h-px bg-gradient-to-r from-transparent via-white/50 to-transparent`} />
    </div>
  );
}

/* NAV */
function Nav() {
  useSmoothAnchors();
  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", borderColor: BORDER }}
    >
      <nav className="mx-auto flex h-20 md:h-24 max-w-5xl items-center justify-between px-5 md:px-6">
        {/* LOGO */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/8aa262cc-015b-4b77-9c83-a548e0c016b2.png"
            alt="Kavela"
            className="h-12 md:h-30 w-auto object-contain"
          />
        </a>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-12 text-base md:text-lg uppercase tracking-wide">
          {[
            { label: "Why Kavela", href: "#why" },
            { label: "About", href: "#about" },
            { label: "Our Value", href: "#value" },
            { label: "Approach", href: "#approach" },
            { label: "Industries", href: "#industries" },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition opacity-75 hover:opacity-100"
                style={{ fontFamily: HEAD }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Button href="#contact" />
      </nav>
    </header>
  );
}

/* HERO */
function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      {/* Brand halo */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(140rem 60rem at 50% -20%, ${KAVELA_TEAL}0D, transparent 50%),
            radial-gradient(80rem 40rem at 50% 150%, ${KAVELA_TEAL}08, transparent 60%)
          `,
          filter: "blur(40px)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-32 md:pt-24">
        <div data-reveal className="space-y-8">
          <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal-item style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}>
            <p
              className="text-3xl md:text-4xl tracking-[0.3em] text-white/90"
              style={{
                fontFamily: "'Spectral', 'Marcellus', serif",
                fontWeight: 600,
                textTransform: "uppercase",
                textShadow: "0 0 10px rgba(62, 212, 201, 0.35)",
              }}
            >
              Strategy. Innovation. Execution.
            </p>
          </div>

          <h1
            className="opacity-0 translate-y-6 blur-sm transition-all duration-700 text-5xl md:text-7xl font-light uppercase tracking-tight leading-tight"
            data-reveal-item
            style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)", fontFamily: HEAD }}
          >
            
          </h1>

          <p
            className="opacity-0 translate-y-6 blur-sm transition-all duration-700 max-w-2xl text-base md:text-lg leading-relaxed text-white/72"
            data-reveal-item
            style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
          >
            We partner with leaders and innovators to bridge strategy and execution. Building initiatives. Connecting ecosystems. Delivering outcomes that matter.
          </p>

          <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 pt-6" data-reveal-item style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}>
            <Button href="#contact">
              Let&apos;s talk →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ABOUT */
function About() {
  return (
    <Section id="about">
      <div data-reveal className="grid gap-16 md:grid-cols-2 md:gap-12 items-start">
        <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal-item>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight mb-8" style={{ fontFamily: HEAD }}>
            About
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-white/76">
            <p>
              Kavela bridges strategy and execution for leaders in venture, corporate innovation, and institutional investment. We identify opportunities, structure initiatives, and deliver measurable outcomes.
            </p>
            <p>
              We don&apos;t talk about innovation — we make it real. Transforming intent into impact, from conception to deployment, with rigor and accountability.
            </p>
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border min-h-[280px] md:min-h-[320px] opacity-0 translate-y-6 blur-sm transition-all duration-700"
          data-reveal-item
          style={{ borderColor: BORDER }}
        >
          <img src="/kavela-about.jpg" alt="Industrial abstraction" className="h-full w-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40"
            style={{
              background: `
                repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0 1px, transparent 1px 24px),
                repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 24px)
              `,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                radial-gradient(140rem 60rem at 50% -20%, ${KAVELA_TEAL}0D, transparent 50%),
                radial-gradient(80rem 40rem at 50% 150%, ${KAVELA_TEAL}08, transparent 60%)
              `,
              filter: "blur(40px)",
            }}
          />
        </div>
      </div>
    </Section>
  );
}

/* OUR VALUE */
function OurValue() {
  const pillars = [
    { title: "Drive Innovation", desc: "Build and deploy initiatives that create lasting competitive advantage." },
    { title: "Activate Growth", desc: "Connect ideas, people, and ecosystems to unlock business potential." },
    { title: "Deliver Outcomes", desc: "Move beyond recommendations to concrete, measurable results." },
    { title: "Operate with Trust", desc: "Act with discretion, precision, and speed in sensitive environments." },
  ];
  return (
    <Section id="value">
      <div data-reveal>
        <div className="text-center opacity-0 translate-y-6 blur-sm transition-all duration-700 mb-16" data-reveal-item>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight" style={{ fontFamily: HEAD }}>Our Value</h2>
          <p className="mt-4 text-white/60 text-base">What we stand for. How we work.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-7 border opacity-0 translate-y-6 blur-sm transition-all duration-700 hover:bg-white/[0.04]"
              data-reveal-item
              style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              <h3 className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: HEAD }}>{p.title}</h3>
              <p className="mt-3 text-white/68 leading-relaxed text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* APPROACH */
function Approach() {
  const steps = [
    { icon: <IconUnderstand />, title: "Understand", desc: "Analyze strategic and operational challenges to identify the real opportunity." },
    { icon: <IconConnect />, title: "Connect", desc: "Bridge ecosystems — linking corporates, innovators, and strategic partners." },
    { icon: <IconExecute />, title: "Execute", desc: "Transform vision into action with rigor, accountability, and speed." },
  ];
  return (
    <Section id="approach">
      <div data-reveal>
        <div className="text-center opacity-0 translate-y-6 blur-sm transition-all duration-700 mb-16" data-reveal-item>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight" style={{ fontFamily: HEAD }}>Our Approach</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-xl p-8 border opacity-0 translate-y-6 blur-sm transition-all duration-700 hover:bg-white/[0.04]"
              data-reveal-item
              style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              <div className="mb-6 inline-flex p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: HEAD }}>{s.title}</h3>
              <p className="mt-3 text-white/68 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* INDUSTRIES */
function Industries() {
  const sectors = [
    { icon: <IconMedtech />, title: "MedTech & Healthcare", desc: "Innovation, partnerships, and new business models." },
    { icon: <IconIndustrial />, title: "Industrial & Manufacturing", desc: "Operational excellence and diversification." },
    { icon: <IconDefense />, title: "Defense, Aerospace & SpaceTech", desc: "Strategic innovation and ecosystem development." },
  ];
  return (
    <Section id="industries">
      <div data-reveal>
        <div className="text-center opacity-0 translate-y-6 blur-sm transition-all duration-700 mb-16" data-reveal-item>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight" style={{ fontFamily: HEAD }}>Industries We Support</h2>
          <p className="mt-4 text-white/60 text-base">Where innovation, strategy, and execution converge.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="rounded-xl p-8 border opacity-0 translate-y-6 blur-sm transition-all duration-700 hover:bg-white/[0.04]"
              data-reveal-item
              style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.015)" }}
            >
              <div className="mb-6 inline-flex p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold uppercase tracking-wide" style={{ fontFamily: HEAD }}>{s.title}</h3>
              <p className="mt-3 text-white/68 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* WHY KAVELA */
function Why() {
  return (
    <Section id="why">
      <div data-reveal className="mx-auto max-w-3xl text-center space-y-8">
        <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal-item>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight" style={{ fontFamily: HEAD }}>Why Kavela</h2>
        </div>
        <p className="opacity-0 translate-y-6 blur-sm transition-all duration-700 text-base leading-relaxed text-white/76" data-reveal-item>
          Ideas have value only when executed. Kavela combines deep, trusted networks across venture capital, institutional investment, and corporate innovation with an unwavering outcome-driven mindset.
        </p>
        <blockquote className="opacity-0 translate-y-6 blur-sm transition-all duration-700 border-l-2 pl-8 py-4 text-left italic" data-reveal-item style={{ borderColor: KAVELA_TEAL }}>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            "We bring clarity where there is complexity, momentum where there is inertia, and results where others stop at strategy."
          </p>
        </blockquote>
      </div>
    </Section>
  );
}

/* --- FINAL CTA (Kavela) --- */
function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative py-28 md:py-36 text-center overflow-hidden"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      {/* halo teal subtil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(60rem 30rem at 50% 0%, ${KAVELA_TEAL}14, transparent 60%),
            radial-gradient(40rem 20rem at 50% 110%, ${KAVELA_TEAL}10, transparent 70%)
          `,
          filter: "blur(28px)",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 md:px-8" data-reveal>
        <h2
          className="opacity-0 translate-y-6 blur-sm transition-all duration-700
                     text-4xl md:text-6xl font-light tracking-tight leading-tight"
          data-reveal-item
          style={{ fontFamily: HEAD, transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
        >
          From intent to impact.
          <br className="hidden md:block" />
          Ready when you are.
        </h2>

        <p
          className="opacity-0 translate-y-6 blur-sm transition-all duration-700
                     mt-6 text-white/75 text-lg md:text-2xl"
          data-reveal-item
          style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
        >
          Confidential. Focused. Outcome-driven.
        </p>

        {/* CTA pilule */}
        <div
          className="opacity-0 translate-y-6 blur-sm transition-all duration-700 mt-10"
          data-reveal-item
          style={{ transitionTimingFunction: "cubic-bezier(.22,1,.36,1)" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-7 md:px-9 py-3 md:py-4 
                       text-base md:text-lg font-medium shadow-lg transition
                       hover:scale-[1.02] active:scale-[0.99]"
            style={{
              background:
                "linear-gradient(180deg, #3ED4C9 0%, #1FA6A0 100%)",
              color: "#001313",
              boxShadow:
                "0 10px 30px rgba(62, 212, 201, 0.22), 0 0 0 1px rgba(255,255,255,0.06) inset",
            }}
          >
            Let’s talk →
          </a>
        </div>
      </div>
    </section>
  );
}


/* CONTACT */
function Contact() {
  return (
    <Section id="contact" pb={false}>
      <div
        className="rounded-2xl p-8 md:p-12 border"
        style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.015)", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
        data-reveal
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700" data-reveal-item>
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-6" style={{ fontFamily: HEAD }}>Get in touch</h3>
            <p className="text-white/68 text-sm mb-8 leading-relaxed">Singapore-based. Operating across Asia & Europe.</p>
            <div className="space-y-4">
              <div>
                <a href="mailto:contact@kavela.co" className="inline-flex text-sm font-medium hover:opacity-60 transition">
                  contact@kavela.co
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/coddycbd/about/?viewAsMember=true" target="_blank" rel="noreferrer" className="inline-flex text-sm font-medium hover:opacity-60 transition">
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>

          <div className="opacity-0 translate-y-6 blur-sm transition-all duration-700 space-y-6" data-reveal-item>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Services</p>
              <p className="text-sm text-white/80">Strategy, Innovation, Execution & Ecosystem Development</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Focus</p>
              <p className="text-sm text-white/80">MedTech, Industrial, Defense, Aerospace & SpaceTech</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-white/50 mb-2">Approach</p>
              <p className="text-sm text-white/80">Deep networks. Outcome-driven. Discreet. Swift execution.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-white/50 tracking-wide">
        © {new Date().getFullYear()} Kavela Consulting. All rights reserved.
      </div>
    </Section>
  );
}

/* MAIN APP */
export default function App() {
  const appRef = useRef(null);
  useReveal(appRef, { rootMargin: "0px 0px -12% 0px", stagger: 110 });

  return (
    <div
      ref={appRef}
      className="min-h-screen text-white antialiased"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <Nav />
      <Hero />
      <Why />
      <About />
      <OurValue />
      <Approach />
      <Industries />
      <FinalCTA />   {/* ← ici */}
      <Contact />
    </div>
  );
}