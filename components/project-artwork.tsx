import type { Project } from "@/data/portfolio";

const META = {
  research: { n: "01", kanji: "探", label: "AGENT ORCHESTRATION" },
  galaxy: { n: "02", kanji: "銀河", label: "ELLIPTICAL · SPIRAL · IRREGULAR" },
  receipts: { n: "03", kanji: "証", label: "PROOF OVER PROMISES" },
  uniwell: { n: "04", kanji: "癒", label: "CAMPUS CARE, CONNECTED" },
} as const;

function galaxyStars() {
  let seed = 11;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const stars: { x: number; y: number; r: number; o: number }[] = [];
  for (let arm = 0; arm < 3; arm++) {
    for (let i = 0; i < 90; i++) {
      const t = i / 90;
      const r = 6 + t * 96;
      const a = (arm * 2 * Math.PI) / 3 + t * 5.4 + (rnd() - 0.5) * 0.55;
      stars.push({
        x: +(r * Math.cos(a)).toFixed(2),
        y: +(r * Math.sin(a)).toFixed(2),
        r: +(0.5 + rnd() * 1.5 * (1 - t * 0.5)).toFixed(2),
        o: +(0.35 + rnd() * 0.65).toFixed(2),
      });
    }
  }
  return stars;
}

function Research() {
  const nodes = [
    [92, 56], [306, 48], [330, 150], [212, 196], [78, 156],
  ];
  return (
    <svg viewBox="0 0 400 230" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="rs-core"><stop offset="0" stopColor="#fff" /><stop offset=".4" stopColor="#c9a6ff" /><stop offset="1" stopColor="#9d5cff" stopOpacity="0" /></radialGradient>
      </defs>
      <g className="art-orbit-spin" fill="none" stroke="#9d5cff" strokeOpacity=".45">
        <ellipse cx="200" cy="115" rx="150" ry="62" transform="rotate(-24 200 115)" />
        <ellipse cx="200" cy="115" rx="120" ry="48" transform="rotate(38 200 115)" strokeDasharray="3 6" />
      </g>
      <g stroke="#c9a6ff" strokeOpacity=".7" strokeWidth="1.5" fill="none">
        {nodes.map(([x, y], i) => <line key={i} className="art-flow" x1="200" y1="115" x2={x} y2={y} />)}
      </g>
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <rect x={x - 11} y={y - 11} width="22" height="22" transform={`rotate(45 ${x} ${y})`} fill="#160f2c" stroke="#c9a6ff" strokeWidth="1.5" />
          <circle cx={x} cy={y} r="3" fill="#fff" />
        </g>
      ))}
      <circle cx="200" cy="115" r="46" fill="url(#rs-core)" />
      <rect x="182" y="97" width="36" height="36" transform="rotate(45 200 115)" fill="#0a0716" stroke="#fff" strokeWidth="2" />
      <circle cx="200" cy="115" r="6" fill="#fff" />
    </svg>
  );
}

function Galaxy() {
  const stars = galaxyStars();
  return (
    <svg viewBox="0 0 400 230" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <radialGradient id="gx-core"><stop offset="0" stopColor="#fff" /><stop offset=".25" stopColor="#bfeaff" /><stop offset=".6" stopColor="#37c6ff" stopOpacity=".5" /><stop offset="1" stopColor="#37c6ff" stopOpacity="0" /></radialGradient>
      </defs>
      <g transform="translate(200 115) rotate(-22) scale(1.45 .6)">
        <g className="art-galaxy-spin">
          {stars.map((s, i) => <circle key={i} cx={s.x} cy={s.y} r={s.r} fill={i % 7 === 0 ? "#ffb3c1" : "#d4f3ff"} opacity={s.o} />)}
        </g>
      </g>
      <ellipse cx="200" cy="115" rx="62" ry="30" fill="url(#gx-core)" transform="rotate(-22 200 115)" />
      <circle cx="200" cy="115" r="5" fill="#fff" />
    </svg>
  );
}

function Receipts() {
  return (
    <svg viewBox="0 0 400 230" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      {/* ghost talisman */}
      <g transform="rotate(9 200 115)" opacity=".35">
        <rect x="150" y="14" width="86" height="202" fill="#efe9dd" />
        <rect x="156" y="20" width="74" height="190" fill="none" stroke="#a80f2d" strokeWidth="1.5" />
      </g>
      {/* ofuda */}
      <g transform="rotate(-6 200 115)">
        <rect x="156" y="12" width="92" height="206" fill="#efe9dd" />
        <rect x="162" y="18" width="80" height="194" fill="none" stroke="#a80f2d" strokeWidth="2" />
        <path d="M162 46h80M162 184h80" stroke="#a80f2d" strokeWidth="1.5" />
        <text x="202" y="82" textAnchor="middle" fontFamily="Yuji Boku, serif" fontSize="30" fill="#14101f">検</text>
        <text x="202" y="118" textAnchor="middle" fontFamily="Yuji Boku, serif" fontSize="30" fill="#14101f">証</text>
        <text x="202" y="154" textAnchor="middle" fontFamily="Yuji Boku, serif" fontSize="30" fill="#14101f">済</text>
        <g stroke="#a80f2d" strokeWidth="2" fill="none"><path d="M178 30l6 6 10-12" /><path d="M210 30l6 6 10-12" /></g>
      </g>
      {/* seal */}
      <g className="art-stamp">
        <circle cx="286" cy="150" r="32" fill="rgba(255,45,85,.14)" stroke="#ff2d55" strokeWidth="3" />
        <circle cx="286" cy="150" r="26" fill="none" stroke="#ff2d55" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M273 150l9 10 18-21" fill="none" stroke="#ff2d55" strokeWidth="5" strokeLinecap="square" />
      </g>
      <g stroke="#ff2d55" strokeOpacity=".5" strokeWidth="1.5"><path d="M40 70h70M40 82h46M40 94h58" /><path d="M300 52h60M312 64h48" /></g>
    </svg>
  );
}

function Uniwell() {
  return (
    <svg viewBox="0 0 400 230" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g fill="none" stroke="#46e29b" strokeWidth="2">
        <circle className="art-ring" cx="200" cy="115" r="60" />
        <circle className="art-ring r2" cx="200" cy="115" r="60" />
        <circle className="art-ring r3" cx="200" cy="115" r="60" />
      </g>
      <path className="art-ecg" d="M0 120h110l14-6 10 6h18l14-58 22 112 18-76 12 22h182" fill="none" stroke="#46e29b" strokeWidth="3" strokeLinejoin="miter" style={{ filter: "drop-shadow(0 0 6px #46e29b)" }} />
      <g transform="translate(200 115)">
        <rect x="-9" y="-30" width="18" height="60" fill="#0a0716" stroke="#bdfbe0" strokeWidth="2" />
        <rect x="-30" y="-9" width="60" height="18" fill="#0a0716" stroke="#bdfbe0" strokeWidth="2" />
        <rect x="-8" y="-8" width="16" height="16" fill="#0a0716" />
      </g>
    </svg>
  );
}

export function ProjectArtwork({ project, large = false }: { project: Project; large?: boolean }) {
  const meta = META[project.visual];
  return (
    <div className={`project-artwork artwork-${project.visual}${large ? " artwork-large" : ""}`} data-visual={project.visual} aria-hidden="true">
      <div className="art-bg" />
      <div className="art-halftone" />
      <span className="art-kanji">{meta.kanji}</span>
      {project.visual === "research" && <Research />}
      {project.visual === "galaxy" && <Galaxy />}
      {project.visual === "receipts" && <Receipts />}
      {project.visual === "uniwell" && <Uniwell />}
      <span className="artwork-index">{meta.n}</span>
      <span className="art-label">{meta.label}</span>
    </div>
  );
}
