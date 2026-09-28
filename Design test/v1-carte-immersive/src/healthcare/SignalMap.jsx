import { CREAM, EAU_L } from "../brand/tokens";

/* SIGNAL MAP (pinned behind the story)
   Singapore at the centre, Southeast Asian markets at their true relative
   positions (no coastline), Europe and Mauritius leaving the frame.
   The `stage` prop follows the scroll (see healthcare.css, .stage-N):
     0 hero       Singapore pulses, links faint
     1 market     each market lights up on its own (fragmentation)
     2 intel      radar sweep over the region
     3 access     links from Singapore light up
     4 execution  links turn Eau green, signals travel along them */

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

export default function SignalMap({ stage = 0 }) {
  return (
    <svg className={`kh-map stage-${stage}`} viewBox="0 0 600 520" aria-hidden="true" focusable="false">
      <defs>
        {FAR.map((f) => (
          <linearGradient key={f.name} id={`kh-far-${f.name}`} gradientUnits="userSpaceOnUse" x1={SG[0]} y1={SG[1]} x2={f.to[0]} y2={f.to[1]}>
            <stop offset="0" stopColor={CREAM} stopOpacity="0.5" />
            <stop offset="1" stopColor={CREAM} stopOpacity="0" />
          </linearGradient>
        ))}
        <linearGradient id="kh-sweep" gradientUnits="userSpaceOnUse" x1={SG[0]} y1={SG[1]} x2={SG[0] + 250} y2={SG[1]}>
          <stop offset="0" stopColor={EAU_L} stopOpacity="0.28" />
          <stop offset="1" stopColor={EAU_L} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Range rings */}
      <g className="kh-m-rings" fill="none" stroke={CREAM}>
        {[80, 160, 240].map((r) => <circle key={r} cx={SG[0]} cy={SG[1]} r={r} />)}
      </g>

      {/* Radar sweep (intelligence) */}
      <g className="kh-m-sweep">
        <path d={`M${SG[0]} ${SG[1]} L${SG[0] + 250} ${SG[1]} A250 250 0 0 0 ${(SG[0] + 250 * Math.cos(-0.5)).toFixed(1)} ${(SG[1] + 250 * Math.sin(-0.5)).toFixed(1)} Z`} fill="url(#kh-sweep)" />
      </g>

      {/* Reach beyond the region */}
      {FAR.map((f) => (
        <g key={f.name} className="kh-m-far">
          <path d={line(SG, f.to)} stroke={`url(#kh-far-${f.name})`} strokeWidth="1.2" strokeDasharray="3 6" fill="none" />
          <text x={f.label[0]} y={f.label[1]} className="kh-map-far">{f.name}</text>
        </g>
      ))}

      {/* Singapore → each market */}
      {NODES.map((n, i) => (
        <path key={n.name} className="kh-m-link kh-draw" style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          d={line(SG, n.at)} pathLength="1" fill="none" />
      ))}

      {/* Markets */}
      {NODES.map((n, i) => (
        <g key={n.name} className="kh-m-node" style={{ "--i": i }}>
          <circle className="kh-m-halo" cx={n.at[0]} cy={n.at[1]} r="9" fill="none" stroke={CREAM} />
          <circle cx={n.at[0]} cy={n.at[1]} r="3.2" fill={CREAM} />
          <text x={n.label[0]} y={n.label[1]} textAnchor={n.anchor} className="kh-map-label">{n.name}</text>
        </g>
      ))}

      {/* Signals travelling along the links (execution) */}
      <g className="kh-m-pulses">
        {NODES.map((n, i) => (
          <circle key={n.name} className="kh-pulse" r="2.8" fill={EAU_L} opacity="0">
            <animateMotion dur="5s" begin={`${i * 0.9}s`} repeatCount="indefinite" path={i % 2 ? line(n.at, SG) : line(SG, n.at)} keyPoints="0;1;1" keyTimes="0;0.45;1" calcMode="linear" />
            <animate attributeName="opacity" dur="5s" begin={`${i * 0.9}s`} repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.04;0.42;0.45;1" />
          </circle>
        ))}
      </g>

      {/* Singapore */}
      <circle className="kh-ring" cx={SG[0]} cy={SG[1]} r="9" fill="none" stroke={EAU_L} strokeWidth="1.2" />
      <circle cx={SG[0]} cy={SG[1]} r="18" fill={EAU_L} fillOpacity="0.15" />
      <circle cx={SG[0]} cy={SG[1]} r="7" fill={EAU_L} />
      <text x={SG[0] + 26} y={SG[1] + 6} className="kh-map-sg">Singapore</text>
      <text x={SG[0] + 26} y={SG[1] + 26} className="kh-map-coord">1°17′N 103°51′E</text>
    </svg>
  );
}
