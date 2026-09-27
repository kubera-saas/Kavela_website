import { useEffect, useRef, useState } from "react";
import { INK, EAU, KV_MUTED } from "../brand/tokens";
import { useReveal } from "../brand/reveal";
import ContactForm, { ContactFormStyles } from "../brand/ContactForm";
import SignalMap from "./SignalMap";
import EcosystemMap from "./EcosystemMap";
import {
  NAV, HERO, FACTS, OVERVIEW, SERVICES, APPROACH, ECOSYSTEM, INTELLIGENCE, CONTACT, FOOTER, LINKEDIN, PARENT,
} from "./content";

/* KAVELA HEALTHCARE - healthcare.kavela.co
   Logos: KAVELA Healthcare "Eau" set (public/Healthcare/Eau). Layout: healthcare.css. */

const LOGO = {
  dark: "/Healthcare/Eau/kavela-healthcare-eau-complet-fonce.svg",
  light: "/Healthcare/Eau/kavela-healthcare-eau-complet-clair.svg",
};

/* Header logo: horizontal version ("HEALTHCARE" on the right), built from the Eau
   pieces by kavela-healthcare/build-logo-horizontal.mjs. To go back to the stacked
   official lockup, set NAV_LOGO = LOGO and restore the heights in healthcare.css. */
const NAV_LOGO = {
  dark: "/Healthcare/Eau-horizontal/kavela-healthcare-eau-horizontal-fonce.svg",
  light: "/Healthcare/Eau-horizontal/kavela-healthcare-eau-horizontal-clair.svg",
};

function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`kh-nav${solid ? " is-solid" : ""}`}>
      <div className="kh-wrap kh-nav-inner">
        <a href="#top" className="kh-nav-logo" aria-label="KAVELA Healthcare, back to top">
          <img src={solid ? NAV_LOGO.light : NAV_LOGO.dark} alt="KAVELA Healthcare" width="306" height="39" />
        </a>
        <nav aria-label="Sections" className="kh-nav-links">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a href="#contact" className="kh-btn kh-btn-nav">Contact</a>
      </div>
    </header>
  );
}

export default function HealthcarePage() {
  const ref = useRef(null);
  useReveal(ref);
  const light = { text: INK, muted: KV_MUTED, line: "#D3D8DD", field: "transparent", accent: INK, accentText: "#FFFFFF", accentLine: EAU, error: "#B42318" };
  const dark = { text: "#FFFFFF", muted: "rgba(255,255,255,.6)", line: "rgba(255,255,255,.3)", field: "transparent", accent: "#FFFFFF", accentText: INK, accentLine: "#7FC1B8", error: "#F2A08F" };

  return (
    <div ref={ref}>
      <a href="#main" className="kh-skip">Skip to content</a>
      <Nav />
      <ContactFormStyles />

      <main id="main">
        {/* Hero */}
        <section id="top" className="kh-hero">
          <div className="kh-wrap kh-hero-grid">
            <div>
              <h1>{HERO.title}</h1>
              <p className="kh-hero-text">{HERO.text}</p>
              <div className="kh-hero-ctas">
                <a href="#contact" className="kh-btn kh-btn-white">{HERO.cta}</a>
                <a href="#services" className="kh-btn kh-btn-ghost kh-desktop">{HERO.secondary}</a>
              </div>
            </div>
            <div className="kh-hero-visual"><SignalMap /></div>
          </div>
        </section>

        {/* Key facts */}
        <section className="kh-facts" aria-label="Key facts">
          <dl className="kh-wrap kh-facts-grid">
            {FACTS.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        </section>

        {/* Overview */}
        <section className="kh-section" aria-labelledby="kh-overview">
          <div className="kh-wrap kh-overview" data-r>
            <h2 id="kh-overview">{OVERVIEW.title}</h2>
            <div>
              {OVERVIEW.text.map((t, i) => <p key={t} className={i > 0 ? "kh-desktop" : undefined}>{t}</p>)}
              <p className="kh-small">{OVERVIEW.note}</p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="kh-section kh-grey" aria-labelledby="kh-services">
          <div className="kh-wrap">
            <h2 id="kh-services" data-r>{SERVICES.title}</h2>
            <div className="kh-services" data-rs>
              {SERVICES.groups.map((g) => (
                <article key={g.name} className="kh-service" data-rc>
                  <header>
                    <h3>{g.name}</h3>
                    <p>{g.who}</p>
                  </header>
                  <ul>
                    {g.items.map(([name, text]) => (
                      <li key={name}><h4>{name}</h4><p>{text}</p></li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="kh-section" aria-labelledby="kh-approach">
          <div className="kh-wrap">
            <div className="kh-intro" data-r>
              <h2 id="kh-approach">{APPROACH.title}</h2>
              <p>{APPROACH.text}</p>
            </div>
            <div className="kh-steps-wrap">
              <span className="kh-steps-signal" aria-hidden="true" />
              <ol className="kh-steps" data-rs>
                {APPROACH.steps.map(([name, text, short]) => (
                  <li key={name} data-rc>
                    <span className="kh-steps-node" aria-hidden="true" />
                    <h3>{name}</h3>
                    <p className="kh-desktop">{text}</p>
                    <p className="kh-phone">{short}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section id="ecosystem" className="kh-section kh-grey" aria-labelledby="kh-eco">
          <div className="kh-wrap">
            <div className="kh-intro" data-r>
              <h2 id="kh-eco">{ECOSYSTEM.title}</h2>
              <p>{ECOSYSTEM.text}</p>
            </div>
            <div data-r><EcosystemMap /></div>
          </div>
        </section>

        {/* Intelligence */}
        <section id="intelligence" className="kh-section kh-dark" aria-labelledby="kh-intel">
          <div className="kh-wrap">
            <div className="kh-intro" data-r>
              <h2 id="kh-intel">{INTELLIGENCE.title}</h2>
              <p>{INTELLIGENCE.text}</p>
            </div>
            <div className="kh-topics" data-rs>
              {INTELLIGENCE.topics.map(([name, text]) => (
                <div key={name} data-rc><h3>{name}</h3><p>{text}</p></div>
              ))}
            </div>
            <div className="kh-brief" data-r>
              <div>
                <h3>{INTELLIGENCE.formTitle}</h3>
                <p>{INTELLIGENCE.formText}</p>
              </div>
              <ContactForm form="brief" site="healthcare" inline submitLabel="Subscribe" palette={dark}
                successTitle="Thank you." successText="We will send you the first edition." />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="kh-section" aria-labelledby="kh-contact">
          <div className="kh-wrap kh-contact">
            <div data-r>
              <h2 id="kh-contact">{CONTACT.title}</h2>
              <p>{CONTACT.text}</p>
            </div>
            <div data-r>
              <ContactForm form="contact" site="healthcare" submitLabel="Send" palette={light} profiles={CONTACT.profiles} />
            </div>
          </div>
        </section>
      </main>

      <footer className="kh-footer">
        <div className="kh-wrap">
          <div className="kh-footer-grid">
            <div>
              <img src={LOGO.dark} alt="KAVELA Healthcare" width="286" height="55" className="kh-footer-logo" />
              <p>{FOOTER.about}</p>
            </div>
            <div className="kh-desktop">
              <h4>Healthcare</h4>
              {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
              <a href="#contact">Contact</a>
            </div>
            <div>
              <h4>KAVELA</h4>
              <a href={PARENT}>kavela.co</a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div>
              <h4>Singapore</h4>
              <p>{FOOTER.reach}</p>
            </div>
          </div>
          <div className="kh-footer-bottom">
            <p>© {new Date().getFullYear()} KAVELA</p>
            <p>{FOOTER.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
