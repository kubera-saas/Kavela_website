/* KAVELA HEALTHCARE - all the text of the page.
   Rules: each idea said once, impersonal senior tone (no "we / our / us"),
   no figures, no client names, never "ASEAN", no dot separators,
   no dashes inside sentences.
   Titles are [plain part, italic part]: the italic part is set in Gambetta italic. */

export const NAV = [
  ["Ecosystem", "#top"],
  ["Practice areas", "#services"],
  ["Approach", "#approach"],
  ["Intelligence", "#intelligence"],
];

export const HERO = {
  title: ["Market access across", "Asian healthcare."],
  text: "For healthcare companies, operators and investors. Anchored in Singapore, focused on Southeast Asia, with reach into Europe and Mauritius.",
  cta: "Discuss a priority",
  secondary: "Practice areas",
};

/* Orbit: the ecosystem around Singapore. Order and orbit positions are set in Orbit.jsx. */
export const ECOSYSTEM = {
  hint: "Select a group to see where it meets the others.",
  groups: [
    { id: "H", name: "Hospital groups", with: "hospital groups", text: "Private and public networks running modernisation, expansion and procurement programmes." },
    { id: "M", name: "MedTech", with: "MedTech companies", text: "Device, equipment, software and digital companies building a regional presence." },
    { id: "L", name: "Local partners", with: "local partners", text: "Distributors, licensed representatives, integrators and service partners in each market." },
    { id: "I", name: "Institutions", with: "institutions", text: "Public health bodies, payers and agencies that shape the rules." },
    { id: "O", name: "Operators", with: "operators", text: "Clinics, diagnostics, day surgery and care beyond the hospital." },
    { id: "C", name: "Investors", with: "investors", text: "Private equity and venture funds, family offices and institutional investors with a healthcare strategy." },
  ],
  links: [
    ["H", "M", "modernisation programmes, pilots and procurement"],
    ["H", "C", "expansion and investment programmes"],
    ["H", "L", "tenders, supply and service"],
    ["H", "I", "public programmes and payment reform"],
    ["M", "L", "registration, distribution and service"],
    ["M", "C", "growth capital and strategic investment"],
    ["M", "O", "technology for care beyond the hospital"],
    ["M", "I", "market authorisation and standards"],
    ["O", "C", "building and consolidating care platforms"],
  ],
};

export const STATEMENT = {
  title: ["Healthcare in Southeast Asia is not one market.", "Access is built country by country."],
  text: "Each country has its own regulation, buyers, payers and decision makers. A strong product or investment thesis does not open doors on its own.",
};

export const SERVICES = {
  title: ["Practice", "areas"],
  groups: [
    {
      name: "Healthcare companies",
      who: "MedTech and healthcare technology companies, healthcare multinationals",
      items: [
        ["Market access", "Where an offer fits, who buys, and whether to work direct or through a local partner."],
        ["Hospital and operator engagement", "Access to hospital groups, clinics and care platforms around modernisation and expansion programmes."],
        ["Partner selection", "The right distributor, integrator or strategic partner in each market."],
      ],
    },
    {
      name: "Private capital",
      who: "Funds, family offices and their portfolio companies",
      items: [
        ["Healthcare deal flow", "Operators and platforms that fit a healthcare investment strategy."],
        ["Portfolio support", "Suppliers, partners and expansion opportunities in support of value creation plans."],
        ["Co-investor and LP access", "Investors active in healthcare across the region."],
      ],
    },
  ],
};

export const APPROACH = {
  title: ["From signal to", "execution."],
  steps: [
    ["Intelligence", "Market structure, decision makers and the signals that open a window, mapped against a defined objective."],
    ["Access", "Qualified counterparties and senior introductions, briefed on both sides."],
    ["Execution", "Continued involvement until a partnership, a pilot or a transaction is decided."],
  ],
  note: "The practice does not distribute products and does not act as a regulatory, clinical or investment adviser.",
};

export const INTELLIGENCE = {
  title: ["KAVELA Health", "Intelligence"],
  text: "A concise read on what is changing in Southeast Asian healthcare, and what it changes commercially.",
  topics: ["Transactions", "Regulation and payers", "Hospital infrastructure", "Capital"],
  formTitle: "The Healthcare Brief",
  formText: "First editions in preparation.",
};

export const CONTACT = {
  title: ["Working on a healthcare priority", "in Asia?"],
  text: "First conversations are confidential.",
  profiles: ["A healthcare or MedTech company", "A hospital group or operator", "An investor or family office", "An institution", "Other"],
};

export const FOOTER = { about: "The healthcare practice of KAVELA, based in Singapore." };

export const LINKEDIN = "https://www.linkedin.com/company/kavelagroup/";
export const PARENT = "https://kavela.co";
