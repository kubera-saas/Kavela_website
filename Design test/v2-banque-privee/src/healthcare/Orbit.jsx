import { useEffect, useState } from "react";
import { ECOSYSTEM } from "./content";

/* ORBIT - the ecosystem around Singapore (hero visual).
   Six groups sit on two orbits around the KAVELA Eau symbol. Selecting a
   group (hover, click or the buttons underneath) draws its links to the
   others and shows what it covers. Europe and Mauritius sit on the outer,
   dashed orbit. Phones get a round, taller layout with larger labels. */

const { groups, links } = ECOSYSTEM;

/* [group id, orbit, angle in degrees] */
const PLACES = [["H", "outer", -90], ["M", "inner", -18], ["L", "outer", 22], ["I", "inner", 98], ["O", "outer", 158], ["C", "inner", 198]];

const LAYOUTS = {
  wide:    { w: 1100, h: 470, cx: 550, cy: 235, inner: [210, 84], outer: [390, 160], far: [535, 218] },
  compact: { w: 420,  h: 460, cx: 210, cy: 222, inner: [100, 100], outer: [162, 162], far: null },
};

function useCompact(query = "(max-width: 700px)") {
  const [m, setM] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setM(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [query]);
  return m;
}

const ellipse = ([rx, ry], cx, cy) => `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0`;

export default function Orbit() {
  const compact = useCompact();
  const L = compact ? LAYOUTS.compact : LAYOUTS.wide;
  const [active, setActive] = useState("M");

  const pos = Object.fromEntries(PLACES.map(([id, orbit, deg]) => {
    const [rx, ry] = L[orbit], a = (deg * Math.PI) / 180;
    return [id, { x: L.cx + rx * Math.cos(a), y: L.cy + ry * Math.sin(a), cos: Math.cos(a), sin: Math.sin(a) }];
  }));

  const label = (p) => {
    if (compact) {
      const inner = Math.hypot(p.x - L.cx, p.y - L.cy) < 130;
      if (inner && Math.abs(p.cos) > 0.35) return { x: p.x + (p.cos > 0 ? 16 : -16), y: p.y + 8, a: p.cos > 0 ? "start" : "end" };
      const x = Math.min(Math.max(p.x, 70), L.w - 70);
      return p.sin < -0.9 ? { x, y: p.y - 18, a: "middle" } : { x, y: p.y + 32, a: "middle" };
    }
    if (Math.abs(p.cos) < 0.35) return { x: p.x, y: p.sin < 0 ? p.y - 18 : p.y + 30, a: "middle" };
    return { x: p.x + (p.cos > 0 ? 16 : -16), y: p.y + 6, a: p.cos > 0 ? "start" : "end" };
  };

  const curve = (a, b) => {
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const qx = L.cx + (mx - L.cx) * 0.75, qy = L.cy + (my - L.cy) * 0.75;
    return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  };

  const on = (l) => l[0] === active || l[1] === active;
  const linked = new Set(links.filter(on).flat().filter((x) => x.length === 1));
  const current = groups.find((g) => g.id === active);
  const meets = links.filter(on).map((l) => ({ other: groups.find((g) => g.id === (l[0] === active ? l[1] : l[0])), text: l[2] }));
  const sym = compact ? 56 : 60;

  return (
    <div className="kh-orbit">
      <svg viewBox={`0 0 ${L.w} ${L.h}`} className="kh-orbit-svg" aria-hidden="true" focusable="false">
        <defs>
          <path id="kh-o-in" d={ellipse(L.inner, L.cx, L.cy)} />
          <path id="kh-o-out" d={ellipse(L.outer, L.cx, L.cy)} />
        </defs>

        <g className="kh-o-rings" fill="none">
          <ellipse cx={L.cx} cy={L.cy} rx={L.inner[0]} ry={L.inner[1]} />
          <ellipse cx={L.cx} cy={L.cy} rx={L.outer[0]} ry={L.outer[1]} />
          {L.far && <ellipse cx={L.cx} cy={L.cy} rx={L.far[0]} ry={L.far[1]} className="kh-o-far" />}
        </g>

        {L.far && (
          <g className="kh-o-reach">
            {[["Europe", 206], ["Mauritius", 150]].map(([name, deg]) => {
              const a = (deg * Math.PI) / 180, x = L.cx + L.far[0] * Math.cos(a), y = L.cy + L.far[1] * Math.sin(a);
              return <g key={name}><circle cx={x} cy={y} r="2.5" /><text x={x - 10} y={y + 5} textAnchor="end">{name}</text></g>;
            })}
          </g>
        )}

        {/* Links of the selected group */}
        {links.map((l) => (
          <path key={l[0] + l[1]} d={curve(pos[l[0]], pos[l[1]])} className={`kh-o-link${on(l) ? " is-on" : ""}`} fill="none" />
        ))}
        {groups.map((g) => (
          <line key={g.id} x1={L.cx} y1={L.cy} x2={pos[g.id].x} y2={pos[g.id].y} className={`kh-o-spoke${g.id === active ? " is-on" : ""}`} />
        ))}

        {/* Signals travelling on the orbits */}
        <circle r="3" className="kh-o-signal"><animateMotion dur="16s" repeatCount="indefinite"><mpath href="#kh-o-in" /></animateMotion></circle>
        <circle r="3" className="kh-o-signal"><animateMotion dur="26s" begin="-9s" repeatCount="indefinite"><mpath href="#kh-o-out" /></animateMotion></circle>

        {/* Groups */}
        {groups.map((g) => {
          const p = pos[g.id], lp = label(p), isOn = g.id === active, isLinked = linked.has(g.id);
          return (
            <g key={g.id} className={`kh-o-node${isOn ? " is-on" : isLinked ? " is-linked" : ""}`}
              onMouseEnter={() => setActive(g.id)} onClick={() => setActive(g.id)}>
              <circle cx={p.x} cy={p.y} r="22" fill="transparent" />
              <circle cx={p.x} cy={p.y} r={isOn ? 6 : 4.5} className="kh-o-dot" />
              <text x={lp.x} y={lp.y} textAnchor={lp.a} className="kh-o-label">{g.name}</text>
            </g>
          );
        })}

        {/* Singapore: the KAVELA Healthcare Eau symbol */}
        <circle cx={L.cx} cy={L.cy} r={sym * 0.8} className="kh-o-halo" />
        <image href="/Healthcare/Eau/kavela-healthcare-eau-symbole.svg" x={L.cx - sym / 2} y={L.cy - sym / 2} width={sym} height={sym} />
        <text x={L.cx} y={L.cy + sym / 2 + 22} textAnchor="middle" className="kh-o-sg">Singapore</text>
      </svg>

      <div className="kh-orbit-caption" aria-live="polite">
        <div className="kh-orbit-tabs" role="group" aria-label="Ecosystem">
          {groups.map((g) => (
            <button key={g.id} type="button" aria-pressed={g.id === active} onClick={() => setActive(g.id)}>{g.name}</button>
          ))}
        </div>
        <p className="kh-orbit-text">{current.text}</p>
        <ul className="kh-orbit-meets">
          {meets.map((m) => <li key={m.other.id}><span>With {m.other.with}:</span> {m.text}</li>)}
        </ul>
      </div>
    </div>
  );
}
