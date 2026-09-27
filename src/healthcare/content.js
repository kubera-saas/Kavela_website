/* KAVELA HEALTHCARE - all the text of the page.
   Rules: short sentences, no figures, no client names, never "ASEAN",
   no dot separators, no dashes inside sentences. */

export const NAV = [
  ["Services", "#services"],
  ["Approach", "#approach"],
  ["Ecosystem", "#ecosystem"],
  ["Intelligence", "#intelligence"],
];

export const HERO = {
  title: "Market access and strategic engagement across Asian healthcare.",
  text: "KAVELA Healthcare works with healthcare companies, operators and investors to find the right counterparties in Southeast Asia, and to turn them into real engagement.",
  cta: "Discuss a priority",
  secondary: "Practice areas",
};

export const FACTS = [
  ["Headquarters", "Singapore"],
  ["Core market", "Southeast Asia"],
  ["Extended reach", "Europe and Mauritius"],
  ["Clients", "Healthcare companies, operators and investors"],
];

export const OVERVIEW = {
  title: "A healthcare practice built on access.",
  text: [
    "Healthcare in Southeast Asia is not one market. Each country has its own regulation, buyers, payers and decision makers, and a strong product or investment thesis does not open doors on its own.",
    "KAVELA Healthcare combines local market intelligence, senior relationships across the ecosystem and hands-on follow-through, so that clients reach the right counterparties and move forward with them.",
  ],
  note: "The practice does not distribute products and does not act as a regulatory, clinical or investment adviser.",
};

export const SERVICES = {
  title: "Practice areas",
  groups: [
    {
      name: "For healthcare companies",
      who: "MedTech and healthcare technology companies, healthcare multinationals",
      items: [
        ["Market access", "Where an offer fits, who buys, and whether to work direct or through a local partner."],
        ["Hospital and operator engagement", "Senior introductions to hospital groups, clinics and care platforms, briefed on both sides."],
        ["Partner selection", "Identifying and qualifying the right distributor, integrator or strategic partner in each market."],
      ],
    },
    {
      name: "For private capital",
      who: "Funds, family offices and their portfolio companies",
      items: [
        ["Healthcare deal flow", "Access to operators and platforms in Southeast Asia that fit a healthcare investment strategy."],
        ["Portfolio support", "Introductions that support value creation plans: suppliers, partners and expansion opportunities."],
        ["Co-investor and LP access", "Connections with investors active in healthcare across the region."],
      ],
    },
  ],
};

export const APPROACH = {
  title: "From signal to execution.",
  text: "Three disciplines, applied to one defined objective at a time.",
  /* [name, full text (computer), short text (phone)] */
  steps: [
    ["Intelligence", "Transactions, regulation, hospital projects and capital movements across the region, translated into a clear view of who matters for a given objective.", "Market, players and signals, mapped against a defined objective."],
    ["Access", "Identification and qualification of the right counterparties, with senior introductions briefed on both sides. An introduction is a step, not the end product.", "Senior introductions to qualified counterparties, briefed on both sides."],
    ["Execution", "Continued involvement as relationships turn into pilots, partnerships or transactions, alongside local partners, until a decision is made.", "Involvement through to a partnership, a pilot or a transaction."],
  ],
};

/* Ecosystem map: order = position around the circle, clockwise from the top */
export const ECOSYSTEM = {
  title: "Across the healthcare ecosystem.",
  text: "Hospital groups, MedTech companies, investors, institutions and local partners rarely sit at the same table. KAVELA works between them.",
  groups: [
    { id: "H", name: "Hospital groups", short: "Hospitals", with: "hospital groups", text: "Private and public networks running modernisation, expansion and procurement programmes." },
    { id: "M", name: "MedTech and healthcare technology", short: "MedTech", with: "MedTech companies", text: "Device, equipment, software and digital companies building a regional presence." },
    { id: "L", name: "Local partners", short: "Local partners", with: "local partners", text: "Distributors, licensed representatives, integrators and service partners in each market." },
    { id: "I", name: "Institutions", short: "Institutions", with: "institutions", text: "Public health bodies, payers and agencies that shape the rules." },
    { id: "O", name: "Healthcare operators", short: "Operators", with: "operators", text: "Clinics, diagnostics, day surgery and care beyond the hospital." },
    { id: "C", name: "Investors", short: "Investors", with: "investors", text: "Private equity and venture funds, family offices and institutional investors with a healthcare strategy." },
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

export const INTELLIGENCE = {
  title: "KAVELA Health Intelligence",
  text: "A concise read on the transactions, regulatory changes and structural shifts shaping healthcare in Southeast Asia, and what they change commercially.",
  topics: [
    ["Transactions", "Who is acquiring, merging or raising capital, and what it changes for market access."],
    ["Regulation and payers", "Registration, procurement and payment reforms that change the rules country by country."],
    ["Hospital infrastructure", "New capacity, modernisation programmes and the projects behind them."],
    ["Capital", "Where healthcare investment is concentrating across the region."],
  ],
  formTitle: "Join the Healthcare Brief",
  formText: "The first editions are in preparation.",
};

export const CONTACT = {
  title: "Working on a healthcare priority in Asia?",
  text: "A short description of the priority is enough to start. First conversations are confidential and serve to define objectives and priority stakeholders.",
  profiles: ["A healthcare or MedTech company", "A hospital group or operator", "An investor or family office", "An institution", "Other"],
};

export const FOOTER = {
  about: "The healthcare practice of KAVELA, based in Singapore.",
  reach: "Southeast Asia, Europe and Mauritius",
  disclaimer: "KAVELA does not distribute products and does not provide regulatory, clinical or investment advice.",
};

export const LINKEDIN = "https://www.linkedin.com/company/kavelagroup/";
export const PARENT = "https://kavela.co";
