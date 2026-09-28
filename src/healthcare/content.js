/* KAVELA HEALTHCARE - all the text of the page.
   Rules: short sentences, no figures, no client names, never "ASEAN",
   no dot separators, no dashes inside sentences. */

export const NAV = [
  ["Approach", "#approach"],
  ["Services", "#services"],
  ["Ecosystem", "#ecosystem"],
  ["Newsletter", "#intelligence"],
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

/* Engagement model, shown near the top of the page */
export const APPROACH = {
  title: "From mandate to closing.",
  text: "One engagement, carried by the same team from the first discussion to the final agreement.",
  /* [name, full text (computer), short text (phone)] */
  steps: [
    ["Mandate", "A defined objective, agreed with the client.", "A defined objective, agreed with the client."],
    ["Business development", "The right partners, identified and approached.", "The right partners, identified and approached."],
    ["Relationship", "Structured coordination on both sides.", "Structured coordination on both sides."],
    ["Closing", "Involvement until the agreement is reached.", "Involvement until the agreement is reached."],
  ],
};

/* Ecosystem map: order = position around the circle, clockwise from the top */
export const ECOSYSTEM = {
  title: "Across the healthcare ecosystem.",
  text: "Investors, institutions, hospital groups, local partners, MedTech companies and operators rarely sit at the same table. KAVELA works between them.",
  groups: [
    { id: "C", name: "Investors", short: "Investors", with: "investors", text: "Private equity and venture funds, family offices and institutional investors with a healthcare strategy." },
    { id: "I", name: "Institutions", short: "Institutions", with: "institutions", text: "Public health bodies, payers and agencies that shape the rules." },
    { id: "H", name: "Hospital groups", short: "Hospitals", with: "hospital groups", text: "Private and public networks running modernisation, expansion and procurement programmes." },
    { id: "L", name: "Local partners", short: "Local partners", with: "local partners", text: "Distributors, licensed representatives, integrators and service partners in each market." },
    { id: "M", name: "MedTech and healthcare technology", short: "MedTech", with: "MedTech companies", text: "Device, equipment, software and digital companies building a regional presence." },
    { id: "O", name: "Healthcare operators", short: "Operators", with: "operators", text: "Clinics, diagnostics, day surgery and care beyond the hospital." },
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
  title: "KAVELA Healthcare Newsletter",
  text: "A concise read on the transactions, regulatory changes and structural shifts shaping healthcare in Southeast Asia, and what they change commercially.",
  topics: [
    ["Transactions", "Who is acquiring, merging or raising capital, and what it changes for market access."],
    ["Regulation and payers", "Registration, procurement and payment reforms that change the rules country by country."],
    ["Hospital infrastructure", "New capacity, modernisation programmes and the projects behind them."],
    ["Capital", "Where healthcare investment is concentrating across the region."],
  ],
  formTitle: "Subscribe to the newsletter",
  formText: "Periodic analysis of healthcare across Southeast Asia, by email.",
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
