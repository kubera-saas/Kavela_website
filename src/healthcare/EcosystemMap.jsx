import { useEffect, useState } from "react";
import { INK as KV_DARK, HEAD } from "../brand/tokens";
import { ECOSYSTEM } from "./content";

/* ECOSYSTEM MAP
   Six groups around KAVELA. Hover or select a group to see where it meets
   the others. On phones the names sit under each point so they stay readable. */

const { groups, links } = ECOSYSTEM;

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

function layout(compact) {
  const W = compact ? 520 : 760, H = compact ? 520 : 500, cx = W / 2, cy = H / 2, R = compact ? 150 : 175;
  const pos = Object.fromEntries(groups.map((g, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    return [g.id, { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), cos: Math.cos(a), sin: Math.sin(a) }];
  }));
  return { W, H, cx, cy, pos };
}

function curve(a, b, cx, cy) {
  const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
  let qx = cx + (mx - cx) * 0.35, qy = cy + (my - cy) * 0.35;
  if (Math.hypot(mx - cx, my - cy) < 1) {           // opposite groups: bow around the centre
    const len = Math.hypot(b.x - a.x, b.y - a.y);
    qx = cx - ((b.y - a.y) / len) * 80;
    qy = cy + ((b.x - a.x) / len) * 80;
  }
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function labelPos(p, compact, r) {
  if (compact) {
    if (p.sin < -0.9) return { x: p.x, y: p.y - r - 12, anchor: "middle" };
    return { x: p.x, y: p.y + r + 28, anchor: "middle" };
  }
  const x = p.x + p.cos * (r + 14), y = p.y + p.sin * (r + 14);
  const anchor = Math.abs(p.cos) < 0.1 ? "middle" : p.cos > 0 ? "start" : "end";
  return { x, y: y + (p.sin < -0.9 ? -2 : p.sin > 0.9 ? 14 : 5), anchor };
}

export default function EcosystemMap() {
  const compact = useCompact();
  const [pinned, setPinned] = useState(groups[0].id);
  const [hover, setHover] = useState(null);
  const active = hover || pinned;
  const { W, H, cx, cy, pos } = layout(compact);
  const on = (l) => l[0] === active || l[1] === active;
  const r = compact ? 10 : 7;
  const sym = compact ? 64 : 48;

  const meets = (id) => links.filter((l) => l[0] === id || l[1] === id)
    .map((l) => ({ other: groups.find((g) => g.id === (l[0] === id ? l[1] : l[0])), text: l[2] }));

  return (
    <div className="kh-eco">
      <svg className="kh-eco-visual" viewBox={`0 0 ${W} ${H}`} aria-hidden="true" focusable="false">
        {links.map((l) => (
          <path key={l[0] + l[1]} d={curve(pos[l[0]], pos[l[1]], cx, cy)} fill="none"
            stroke={KV_DARK} strokeOpacity={on(l) ? 0.85 : 0.1} strokeWidth={on(l) ? 1.6 : 1}
            style={{ transition: "stroke-opacity .4s, stroke-width .4s" }} />
        ))}

        {groups.map((g) => {
          const p = pos[g.id], isActive = g.id === active;
          const linked = links.some((l) => on(l) && (l[0] === g.id || l[1] === g.id));
          const lp = labelPos(p, compact, r);
          return (
            <g key={g.id} style={{ cursor: "pointer" }}
              onMouseEnter={() => setHover(g.id)} onMouseLeave={() => setHover(null)} onClick={() => setPinned(g.id)}>
              <circle cx={p.x} cy={p.y} r={r + 14} fill="transparent" />
              <circle cx={p.x} cy={p.y} r={r} fill={isActive ? KV_DARK : "#FFFFFF"} stroke={KV_DARK}
                strokeOpacity={isActive || linked ? 1 : 0.3} strokeWidth="1.3" style={{ transition: "fill .3s, stroke-opacity .3s" }} />
              <text x={lp.x} y={lp.y} textAnchor={lp.anchor}
                style={{ fontFamily: HEAD, fontSize: compact ? 23 : 16, fontWeight: isActive ? 600 : 500, fill: KV_DARK, opacity: isActive || linked ? 1 : 0.45, transition: "opacity .3s" }}>
                {g.short}
              </text>
            </g>
          );
        })}

        <image href="/Healthcare/Eau/kavela-healthcare-eau-symbole.svg" x={cx - sym / 2} y={cy - sym / 2} width={sym} height={sym} />
      </svg>

      <ul className="kh-eco-list" onMouseLeave={() => setHover(null)}>
        {groups.map((g) => {
          const open = g.id === pinned;
          return (
            <li key={g.id} className={open ? "is-open" : undefined}>
              <button type="button" aria-expanded={open} aria-controls={`kh-eco-${g.id}`}
                onClick={() => setPinned(g.id)} onMouseEnter={() => setHover(g.id)}>
                {g.name}
              </button>
              <div id={`kh-eco-${g.id}`} className="kh-eco-detail" hidden={!open}>
                <p>{g.text}</p>
                <p className="kh-eco-meets">
                  {meets(g.id).map((x, i) => (
                    <span key={x.other.id}>{i > 0 && <br />}With {x.other.with}: {x.text}.</span>
                  ))}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
