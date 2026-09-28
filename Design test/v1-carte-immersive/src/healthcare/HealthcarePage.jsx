import { useEffect, useRef, useState } from "react";
import { INK, EAU, KV_MUTED } from "../brand/tokens";
import { useReveal } from "../brand/reveal";
import ContactForm, { ContactFormStyles } from "../brand/ContactForm";
import SignalMap from "./SignalMap";
import EcosystemMap from "./EcosystemMap";
import {
  NAV, HERO, STORY, SERVICES, ECOSYSTEM, INTELLIGENCE, CONTACT, FOOTER, LINKEDIN, PARENT,
} from "./content";

/* KAVELA HEALTHCARE - healthcare.kavela.co
   Top of page: a story told over the pinned signal map (the map follows the scroll).
   Logos: KAVELA Healthcare "Eau" set (public/Healthcare). Layout: healthcare.css. */

const LOGO = {
  dark: "/Healthcare/Eau/kavela-healthcare-eau-complet-fonce.svg",
  light: "/Healthcare/Eau/kavela-healthcare-eau-complet-clair.svg",
};

/* Header logo: horizontal version ("HEALTHCARE" on the right), built from the Eau
   pieces by kavela-healthcare/build-logo-horizontal.mjs. */
const NAV_LOGO = {
  dark: "/Healthcare/Eau-horizontal/kavela-healthcare-eau-horizontal-fonce.svg",
  light: "/Healthcare/Eau-horizontal/kavela-healthcare-eau-horizontal-clair.svg",
};

/* Transparent over the dark story, white once the story has scrolled away */
function Nav() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const story = document.querySelector(".kh-story");
    const on = () => setSolid(!!story && story.getBoundingClientRect().bottom < 90);
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
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

/* Which story panel sits in the middle of the screen → map stage */
function useStage(ref) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const panels = ref.current?.querySelectorAll("[data-stage]") || [];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setStage(Number(e.target.dataset.stage)); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [ref]);
  return stage;
}

export default function HealthcarePage() {
  const ref = useRef(null);
  const storyRef = useRef(null);
  useReveal(ref);
  const stage = useStage(storyRef);
  const light = { text: INK, muted: KV_MUTED, line: "#D3D8DD", field: "transparent", accent: INK, accentText: "#FFFFFF", accentLine: EAU, error: "#B42318" };
  const dark = { text: "#FFFFFF", muted: "rgba(255,255,255,.6)", line: "rgba(255,255,255,.3)", field: "transparent", accent: "#FFFFFF", accentText: INK, accentLine: "#7FC1B8", error: "#F2A08F" };

  return (
    <div ref={ref}>
      <a href="#main" className="kh-skip">Skip to content</a>
      <Nav />
      <ContactFormStyles />

      <main id="main">
        {/* Story over the pinned map */}
        <section id="top" className="kh-story" ref={storyRef} aria-label="KAVELA Healthcare">
          <div className="kh-story-map" aria-hidden="true">
            <div className="kh-story-map-inner"><SignalMap stage={stage} /></div>
          </div>

          <div className="kh-wrap">
            <div className="kh-panel kh-panel-hero" data-stage="0">
              <div className="kh-panel-body">
                <h1>{HERO.title}</h1>
                <p className="kh-hero-text">{HERO.text}</p>
                <a href="#contact" className="kh-btn kh-btn-white">{HERO.cta}</a>
              </div>
            </div>

            {STORY.map((p) => (
              <div key={p.title} id={p.id} className="kh-panel" data-stage={p.stage}>
                <div className="kh-panel-body" data-r>
                  {p.kicker && <p className="kh-kicker">{p.kicker}</p>}
                  <h2>{p.title}</h2>
                  <p className="kh-panel-text">{p.text}</p>
                  {p.note && <p className="kh-panel-note">{p.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice areas */}
        <section id="services" className="kh-section" aria-labelledby="kh-services">
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
          <div className="kh-wrap kh-intel">
            <div data-r>
              <h2 id="kh-intel">{INTELLIGENCE.title}</h2>
              <p className="kh-intel-text">{INTELLIGENCE.text}</p>
              <ul className="kh-topics">
                {INTELLIGENCE.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
            <div className="kh-brief" data-r>
              <h3>{INTELLIGENCE.formTitle}</h3>
              <p>{INTELLIGENCE.formText}</p>
              <ContactForm form="brief" site="healthcare" inline submitLabel="Subscribe" palette={dark}
                successTitle="Thank you." successText="The first edition will be sent to this address." />
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
        <div className="kh-wrap kh-footer-inner">
          <div>
            <img src={LOGO.dark} alt="KAVELA Healthcare" width="286" height="55" className="kh-footer-logo" />
            <p>{FOOTER.about}</p>
          </div>
          <div className="kh-footer-links">
            <a href={PARENT}>kavela.co</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>© {new Date().getFullYear()} KAVELA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
