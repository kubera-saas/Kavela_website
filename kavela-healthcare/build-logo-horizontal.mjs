// Builds the horizontal KAVELA Healthcare lockup ("HEALTHCARE" on the right).
// Every piece is taken from the official "Eau" files, nothing is typed with a font:
//   - symbol tile        : public/Healthcare/Eau/kavela-healthcare-eau-symbole.svg
//   - KAVELA wordmark    : public/Healthcare/Eau/kavela-healthcare-eau-logo-*.svg
//   - HEALTHCARE letters : the drawn descriptor of the same files (same strokes, same spacing)
// Run: node kavela-healthcare/build-logo-horizontal.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const eau = (f) => readFileSync(join(root, "public/Healthcare/Eau", f), "utf8");
const src = eau("kavela-healthcare-eau-logo-fonce.svg");

const wordmark = src.match(/<path fill-rule="evenodd"[^>]* d="([^"]+)"/)[1];
const letters = [...src.matchAll(/<path transform="translate\(([\d.]+) 0\)" d="([^"]+)"\/>/g)]
  .map(([, x, d]) => `<path transform="translate(${x} 0)" d="${d}"/>`).join("");

// Layout, in a 32-unit-high box (the symbol tile is 32 × 32)
const WM_SCALE = 0.1161;                 // wordmark 775 × 120 → 90 × 13.9
const WM_X = 44, WM_Y = (32 - 120 * WM_SCALE) / 2;
const RULE_X = 145;
const CAP = 0.41;                        // descriptor cell 20 high → 8.2 high
const CAP_X = 157, CAP_Y = (32 - 20 * CAP) / 2;
const W = Math.ceil(CAP_X + 226 * CAP + 1);

const build = ({ id, ink, accent, rule }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} 32" width="${W * 8}" height="256" role="img" aria-label="KAVELA Healthcare"><title>KAVELA Healthcare</title>
<rect width="32" height="32" rx="7.5" fill="#235F5C"/><rect x="8.5" y="8" width="3.5" height="16" rx="1.75" fill="#F7F4EC"/><path d="M14.6 8L21.6 16L14.6 24" fill="none" stroke="#F7F4EC" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
<g transform="translate(${WM_X} ${WM_Y.toFixed(3)}) scale(${WM_SCALE})"><path fill-rule="evenodd" fill="${ink}" d="${wordmark}"/></g>
<rect x="${RULE_X}" y="8" width="0.8" height="16" fill="${rule}"/>
<g transform="translate(${CAP_X} ${CAP_Y.toFixed(3)}) scale(${CAP})"><clipPath id="cap-${id}"><rect x="-3" width="232" height="20"/></clipPath><g clip-path="url(#cap-${id})" fill="none" stroke="${accent}" stroke-width="2.8">${letters}</g></g>
</svg>
`;

const out = join(root, "public/Healthcare/Eau-horizontal");
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "kavela-healthcare-eau-horizontal-fonce.svg"), build({ id: "hf", ink: "#F7F4EC", accent: "#7FC1B8", rule: "#46606B" }));
writeFileSync(join(out, "kavela-healthcare-eau-horizontal-clair.svg"), build({ id: "hc", ink: "#0E2431", accent: "#2D7672", rule: "#B7C0C6" }));
console.log("width", W, "→", out);
