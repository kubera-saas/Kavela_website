import { useEffect, useRef, useState } from "react";
import { HC_TEXT, HC_MUTED, HC_SERIF, HC_SANS } from "../brand/tokens";
import { useReveal } from "../brand/reveal";
import ContactForm, { ContactFormStyles } from "../brand/ContactForm";
import Orbit from "./Orbit";
import {
  NAV, HERO, STATEMENT, SERVICES, APPROACH, INTELLIGENCE, CONTACT, FOOTER, LINKEDIN, PARENT,
} from "./content";

/* KAVELA HEALTHCARE - healthcare.kavela.co
   "Private bank" direction: deep green from the Eau tile, Gambetta titles,
   Switzer text. Logos: KAVELA Healthcare "Eau" set (public/Healthcare/Eau).
   Layout: healthcare.css. */

const LOGO = "/Healthcare/Eau/kavela-healthcare-eau-complet-fonce.svg";

/* Title = [plain part, italic part] */
function Title({ as = "h2", parts, id, className }) {
  const inner = <>{parts[0]} <em>{parts[1]}</em></>;
  return as === "h1"
    ? <h1 id={id} className={className}>{inner}</h1>
    : <h2 id={id} className={className}>{inner}</h2>;
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`kh-head${scrolled ? " is-scrolled" : ""}`}>
      <div className="kh-wrap kh-head-inner">
        <nav aria-label="Sections" className="kh-head-nav">
          {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a href="#top" className="kh-head-logo" aria-label="KAVELA Healthcare, back to top">
          <img src={LOGO} alt="KAVELA Healthcare" width="163" height="31" />
        </a>
        <a href="#contact" className="kh-head-cta">Contact</a>
      </div>
    </header>
  );
}

export default function HealthcarePage() {
  const ref = useRef(null);
  useReveal(ref);
  const form = { text: HC_TEXT, muted: HC_MUTED, line: "rgba(236,230,216,.22)", field: "transparent", accent: HC_TEXT, accentText: "#0C201E", accentLine: "#7FC1B8", error: "#F2A08F", font: HC_SANS, titleFont: HC_SERIF, radius: "2px" };

  return (
    <div ref={ref}>
      <a href="#main" className="kh-skip">Skip to content</a>
      <Header />
      <ContactFormStyles />

      <main id="main">
        {/* Hero + ecosystem orbit */}
        <section id="top" className="kh-hero">
          <div className="kh-wrap">
            <div className="kh-hero-text">
              <Title as="h1" parts={HERO.title} />
              <p>{HERO.text}</p>
              <div className="kh-actions">
                <a href="#contact" className="kh-button">{HERO.cta}</a>
                <a href="#services" className="kh-link">{HERO.secondary}</a>
              </div>
            </div>
            <Orbit />
          </div>
        </section>

        {/* Statement */}
        <section className="kh-band" aria-labelledby="kh-statement">
          <div className="kh-wrap kh-statement" data-r>
            <Title parts={STATEMENT.title} id="kh-statement" />
            <p>{STATEMENT.text}</p>
          </div>
        </section>

        {/* Practice areas */}
        <section id="services" className="kh-band" aria-labelledby="kh-services">
          <div className="kh-wrap">
            <Title parts={SERVICES.title} id="kh-services" className="kh-center" />
            <div className="kh-areas" data-rs>
              {SERVICES.groups.map((g) => (
                <article key={g.name} className="kh-area" data-rc>
                  <h3>{g.name}</h3>
                  <p className="kh-area-who">{g.who}</p>
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
        <section id="approach" className="kh-band kh-band-alt" aria-labelledby="kh-approach">
          <div className="kh-wrap">
            <Title parts={APPROACH.title} id="kh-approach" className="kh-center" />
            <ol className="kh-path" data-rs>
              {APPROACH.steps.map(([name, text]) => (
                <li key={name} data-rc>
                  <span className="kh-path-dot" aria-hidden="true" />
                  <h3>{name}</h3>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <p className="kh-note">{APPROACH.note}</p>
          </div>
        </section>

        {/* Intelligence */}
        <section id="intelligence" className="kh-band" aria-labelledby="kh-intel">
          <div className="kh-wrap kh-intel" data-r>
            <div>
              <Title parts={INTELLIGENCE.title} id="kh-intel" />
              <p className="kh-intel-text">{INTELLIGENCE.text}</p>
              <ul className="kh-topics">
                {INTELLIGENCE.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="kh-brief">
              <h3>{INTELLIGENCE.formTitle}</h3>
              <p>{INTELLIGENCE.formText}</p>
              <ContactForm form="brief" site="healthcare" inline submitLabel="Subscribe" palette={form}
                successTitle="Thank you." successText="The first edition will be sent to this address." />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="kh-band kh-band-alt" aria-labelledby="kh-contact">
          <div className="kh-wrap kh-contact">
            <Title parts={CONTACT.title} id="kh-contact" className="kh-center" />
            <p className="kh-center kh-contact-text">{CONTACT.text}</p>
            <div className="kh-contact-form">
              <ContactForm form="contact" site="healthcare" submitLabel="Send" palette={form} profiles={CONTACT.profiles} />
            </div>
          </div>
        </section>
      </main>

      <footer className="kh-foot">
        <div className="kh-wrap kh-foot-inner">
          <img src={LOGO} alt="KAVELA Healthcare" width="190" height="37" />
          <p>{FOOTER.about}</p>
          <div className="kh-foot-links">
            <a href={PARENT}>kavela.co</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>© {new Date().getFullYear()} KAVELA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
