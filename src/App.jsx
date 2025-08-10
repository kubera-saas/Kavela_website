import { useEffect } from "react";

/** Brand colors */
const NAVY_BG = "#0B0B0D";     // global background
const NAVY_BG_ALT = "#101014"; // section alt
const CARD_BG = "#18181C";     // cards
const GOLD = "#CFAE56";        // CTA / accents
const SKY = "#4AB3F4";         // highlight

function Nav() {
  // Smooth anchor scrolling
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex h-20 md:h-24 max-w-6xl items-center justify-between px-4">
        {/* Logo blanc depuis /public */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/8aa262cc-015b-4b77-9c83-a548e0c016b2.png"
            alt="Kavela"
            className="h-70 md:h-72 w-auto object-contain"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-base text-gray-300">
          <li><a href="#about"   className="hover:text-white transition">About</a></li>
          <li><a href="#services" className="hover:text-white transition">Services</a></li>
          <li><a href="#why"      className="hover:text-white transition">Why Kavela</a></li>
          <li><a href="#contact"  className="hover:text-white transition">Contact</a></li>
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex rounded-xl px-6 py-3 font-semibold shadow transition hover:opacity-90"
          style={{ backgroundColor: GOLD, color: NAVY_BG }}
        >
          Work With Us
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center" style={{ backgroundColor: NAVY_BG }}>
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-32 md:pt-44 text-white">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/60">Kavela Consulting</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Strategic Consulting for <span style={{ color: SKY }}>Measurable Impact</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          We help leaders transform, grow, and operationalize strategy — blending strategic insight with innovative,
          digital-first execution.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl px-5 py-3 font-medium shadow transition hover:opacity-90"
            style={{ backgroundColor: GOLD, color: NAVY_BG }}
          >
            Contact Kavela
          </a>
          <a
            href="#services"
            className="rounded-xl border px-5 py-3 font-medium transition hover:bg-white hover:text-black"
            style={{ borderColor: "rgba(255,255,255,.4)", color: "white" }}
          >
            Our Services
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-6 flex justify-center text-sm text-white/60">
        <a href="#about">Scroll ↓</a>
      </div>
    </section>
  );
}

function Section({ id, alt = false, children }) {
  return (
    <section
      id={id}
      className="py-16 md:py-24"
      style={{ backgroundColor: alt ? NAVY_BG_ALT : NAVY_BG }}
    >
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div
      className="rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      style={{ backgroundColor: CARD_BG }}
    >
      {children}
    </div>
  );
}

function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About Kavela</h2>
          <p className="mt-4 leading-7 text-gray-300">
            Kavela is a consulting and strategy firm helping businesses improve efficiency, optimize processes, and
            leverage digital transformation to reach their goals.
          </p>
          <p className="mt-4 leading-7 text-gray-300">
            We partner with leaders as trusted advisors — combining rigorous strategy with pragmatic execution to
            deliver outcomes that matter.
          </p>
        </div>
        <div className="grid gap-4">
          <Card>
            <h3 className="font-semibold text-white">Our Approach</h3>
            <p className="mt-2 leading-7 text-gray-300">
              Strategic insight blended with innovative solutions and execution discipline.
            </p>
          </Card>
          <Card>
            <h3 className="font-semibold text-white">Key Differentiators</h3>
            <ul className="mt-2 list-disc pl-5 leading-7 text-gray-300">
              <li>Proven methodologies tailored to your context</li>
              <li>Personalized strategies — no one-size-fits-all</li>
              <li>Focus on measurable, sustainable impact</li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const items = [
    {
      title: "Business Consulting",
      desc: "Identify efficiency levers, streamline operations, and improve profitability across functions.",
    },
    {
      title: "Strategic Planning",
      desc: "Define clear priorities and create actionable roadmaps for sustainable growth.",
    },
    {
      title: "Digital Transformation",
      desc: "Modernize tools, processes, and capabilities to unlock data-driven execution.",
    },
  ];

  return (
    <Section id="services" alt>
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">Our Services</h2>
      <p className="mx-auto mt-3 max-w-2xl text-center leading-7 text-gray-300">
        We translate strategy into execution through tailored workstreams and pragmatic delivery.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((s) => (
          <Card key={s.title}>
            <div className="mb-3 h-10 w-10 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,.08)" }} />
            <h3 className="font-semibold text-white">{s.title}</h3>
            <p className="mt-2 leading-7 text-gray-300">{s.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Why() {
  const points = [
    "Tailored solutions — no templates.",
    "Proven track record delivering measurable outcomes.",
    "Commitment to excellence and client partnership.",
  ];

  return (
    <Section id="why">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Why Choose Kavela</h2>
          <ul className="mt-6 grid gap-4">
            {points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: GOLD }}
                />
                <p className="leading-7 text-gray-300">{p}</p>
              </li>
            ))}
          </ul>
        </div>
        <Card>
          <h3 className="font-semibold text-white">Our Promise</h3>
          <p className="mt-2 leading-7 text-gray-300">
            Clear thinking, honest advice, and disciplined execution — aligned to your objectives and measured by
            outcomes.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function CTA() {
  return (
    <section className="py-16 md:py-24 text-center text-white" style={{ backgroundColor: NAVY_BG_ALT }}>
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Let’s Transform Your Business Together</h2>
        <p className="mt-3 text-gray-300">Share your priorities — we’ll outline a focused, actionable plan.</p>
        <div className="mt-7">
          <a
            href="#contact"
            className="inline-flex rounded-xl px-5 py-3 font-medium shadow transition hover:opacity-90"
            style={{ backgroundColor: GOLD, color: NAVY_BG }}
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Section id="contact" alt>
      <div className="rounded-2xl p-6 md:flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.25)]" style={{ backgroundColor: CARD_BG }}>
        <div>
          <h3 className="text-xl font-semibold text-white">Contact</h3>
          <p className="mt-1 leading-7 text-gray-300">
            Email: <span className="font-medium" style={{ color: SKY }}>contact@kavelaconsulting.com</span>
          </p>

        </div>
        <a
          href="mailto:contact@kavela.co"
          className="mt-4 inline-flex rounded-xl px-5 py-3 font-medium shadow transition hover:opacity-90 md:mt-0"
          style={{ backgroundColor: GOLD, color: NAVY_BG }}
        >
          Email Us
        </a>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kavela. Excellence • Innovation • Measurable Impact.
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Why />
        <CTA />
        <Contact />
      </main>
    </div>
  );
}
