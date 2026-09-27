import { CREAM, EAU_L } from "../brand/tokens";

/* SIGNAL MAP (hero)
   Singapore at the centre, Southeast Asian markets at their true relative
   positions (no coastline), Europe and Mauritius leaving the frame.
   Range rings and coordinates give the "intelligence" feel; slow signals
   travel along the lines. */

const SG = [280, 300];
const NODES = [
  { name: "Malaysia",    at: [245, 271], label: [233, 276], anchor: "end" },
  { name: "Thailand",    at: [226, 100], label: [238, 105], anchor: "start" },
  { name: "Vietnam",     at: [326, 147], label: [338, 152], anchor: "start" },
  { name: "Indonesia",   at: [328, 422], label: [340, 427], anchor: "start" },
  { name: "Philippines", at: [557, 86],  label: [547, 70],  anchor: "end" },
];
const FAR = [
  { name: "Europe",    to: [60, 0],  label: [74, 20] },
  { name: "Mauritius", to: [0, 410], label: [8, 394] },
];
const line = (a, b) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`;
const PULSES = [
  { d: line(SG, NODES[4].at), begin: "2.2s" },
  { d: line(NODES[3].at, SG), begin: "4.6s" },
  { d: line(SG, NODES[1].at), begin: "7s" },
];

export default function SignalMap() {
  return (
    <svg className="kh-map" viewBox="0 0 600 520" aria-hidden="true" focusable="false">
      <defs>
        {FAR.map((f) => (
          <linearGradient key={f.name} id={`kh-far-${f.name}`} gradientUnits="userSpaceOnUse" x1={SG[0]} y1={SG[1]} x2={f.to[0]} y2={f.to[1]}>
            <stop offset="0" stopColor={CREAM} stopOpacity="0.35" />
            <stop offset="1" stopColor={CREAM} stopOpacity="0" />
          </linearGradient>
        ))}
      </defs>

      {/* Range rings around Singapore */}
      <g fill="none" stroke={CREAM} strokeOpacity="0.07" className="kh-fade">
        {[80, 160, 240].map((r) => <circle key={r} cx={SG[0]} cy={SG[1]} r={r} />)}
      </g>

      {FAR.map((f, i) => (
        <g key={f.name} className="kh-fade" style={{ animationDelay: `${1.3 + i * 0.2}s` }}>
          <path d={line(SG, f.to)} stroke={`url(#kh-far-${f.name})`} strokeWidth="1" strokeDasharray="3 6" fill="none" />
          <text x={f.label[0]} y={f.label[1]} className="kh-map-far">{f.name}</text>
        </g>
      ))}

      <g stroke={CREAM} strokeOpacity="0.3" strokeWidth="1">
        {NODES.map((n, i) => (
          <path key={n.name} className="kh-draw" style={{ animationDelay: `${0.4 + i * 0.1}s` }}
            d={line(SG, n.at)} pathLength="1" fill="none" />
        ))}
      </g>

      {NODES.map((n, i) => (
        <g key={n.name} className="kh-fade" style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
          <circle cx={n.at[0]} cy={n.at[1]} r="8" fill="none" stroke={CREAM} strokeOpacity="0.18" />
          <circle cx={n.at[0]} cy={n.at[1]} r="3" fill={CREAM} />
          <text x={n.label[0]} y={n.label[1]} textAnchor={n.anchor} className="kh-map-label">{n.name}</text>
        </g>
      ))}

      {PULSES.map((p) => (
        <circle key={p.begin} className="kh-pulse" r="2.5" fill={EAU_L} opacity="0">
          <animateMotion dur="9s" begin={p.begin} repeatCount="indefinite" path={p.d} keyPoints="0;1;1" keyTimes="0;0.28;1" calcMode="linear" />
          <animate attributeName="opacity" dur="9s" begin={p.begin} repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.03;0.25;0.28;1" />
        </circle>
      ))}

      {/* Singapore */}
      <circle className="kh-ring" cx={SG[0]} cy={SG[1]} r="9" fill="none" stroke={EAU_L} strokeWidth="1.2" />
      <circle cx={SG[0]} cy={SG[1]} r="17" fill={EAU_L} fillOpacity="0.14" />
      <circle cx={SG[0]} cy={SG[1]} r="6.5" fill={EAU_L} />
      <text x={SG[0] + 26} y={SG[1] + 6} className="kh-map-sg">Singapore</text>
      <text x={SG[0] + 26} y={SG[1] + 26} className="kh-map-coord">1°17′N 103°51′E</text>
    </svg>
  );
}
