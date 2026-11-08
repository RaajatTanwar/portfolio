const CX = 250;
const CY = 250;

function pt(r: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  return [(CX + r * Math.cos(a)).toFixed(2), (CY + r * Math.sin(a)).toFixed(2)] as const;
}

/** Abstract "domain" sigil: Blue + Red converging into Hollow Purple. No characters. */
export function DomainSigil() {
  const ticks = Array.from({ length: 96 }, (_, i) => {
    const deg = i * 3.75;
    const long = i % 8 === 0;
    const [x1, y1] = pt(238, deg);
    const [x2, y2] = pt(long ? 222 : 230, deg);
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth={long ? 2 : 1} />;
  });

  const square = (r: number, offset: number) =>
    [0, 90, 180, 270].map((d) => pt(r, d + offset).join(",")).join(" ");

  const bolt = (deg: number) => {
    const pts: string[] = [];
    const radii = [58, 84, 104, 128, 150, 176];
    radii.forEach((r, i) => {
      const jitter = i % 2 === 0 ? -5 : 5;
      pts.push(pt(r, deg + jitter + (i === radii.length - 1 ? 0 : 0)).join(","));
    });
    return pts.join(" ");
  };

  const ringText = "呪力◆術式◆領域◆結界◆黒閃◆人工知能◆呪力◆術式◆領域◆結界◆黒閃◆人工知能◆";

  return (
    <svg className="sigil" viewBox="0 0 500 500" role="img" aria-label="Abstract cursed-energy domain sigil with blue, red and purple orbs">
      <defs>
        <radialGradient id="g-purple">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.16" stopColor="#ead9ff" />
          <stop offset="0.42" stopColor="#9d5cff" />
          <stop offset="0.74" stopColor="#4c1cb8" stopOpacity="0.8" />
          <stop offset="1" stopColor="#4c1cb8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-blue">
          <stop offset="0" stopColor="#eaffff" />
          <stop offset="0.35" stopColor="#37c6ff" />
          <stop offset="1" stopColor="#37c6ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="g-red">
          <stop offset="0" stopColor="#fff0f3" />
          <stop offset="0.35" stopColor="#ff2d55" />
          <stop offset="1" stopColor="#ff2d55" stopOpacity="0" />
        </radialGradient>
        <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.2" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <path id="ring-path" d="M 250,250 m -204,0 a 204,204 0 1,1 408,0 a 204,204 0 1,1 -408,0" />
      </defs>

      {/* outer tick ring */}
      <g className="sg-spin-slow" stroke="#c9a6ff" strokeOpacity="0.55" fill="none">{ticks}</g>
      <circle cx={CX} cy={CY} r="244" fill="none" stroke="#9d5cff" strokeOpacity="0.4" />

      {/* kanji ring */}
      <g className="sg-spin-rev">
        <text fontFamily="Yuji Boku, serif" fontSize="23" fill="#c9a6ff" fillOpacity="0.8">
          <textPath href="#ring-path" textLength="1262" lengthAdjust="spacing">{ringText}</textPath>
        </text>
      </g>
      <circle cx={CX} cy={CY} r="184" fill="none" stroke="#9d5cff" strokeOpacity="0.5" strokeDasharray="3 9" />

      {/* rotating octagram */}
      <g className="sg-spin" fill="none" strokeWidth="1.3">
        <polygon points={square(170, 45)} stroke="#ff2d55" strokeOpacity="0.55" />
        <polygon points={square(170, 0)} stroke="#37c6ff" strokeOpacity="0.55" />
        <circle cx={CX} cy={CY} r="136" stroke="#efe9dd" strokeOpacity="0.25" strokeDasharray="1 7" strokeWidth="2" />
      </g>

      {/* converging orbs */}
      <g filter="url(#f-glow)">
        <circle className="sg-orb sg-blue" cx="150" cy="250" r="54" fill="url(#g-blue)" />
        <circle className="sg-orb sg-red" cx="350" cy="250" r="54" fill="url(#g-red)" />
      </g>
      <circle className="sg-orb sg-core" cx={CX} cy={CY} r="84" fill="url(#g-purple)" />
      <circle cx={CX} cy={CY} r="19" fill="#fff" fillOpacity="0.95" filter="url(#f-glow)" />

      {/* black-flash lightning (layered strokes instead of a filter, so nothing paints while hidden) */}
      <g fill="none" strokeLinejoin="miter" strokeLinecap="square">
        {[
          ["", -38, "#ff2d55"],
          [" b2", 148, "#ff2d55"],
          [" b3", -132, "#c9a6ff"],
        ].map(([cls, deg, color]) => (
          <g key={String(deg)} className={`sg-bolt${cls}`}>
            <polyline points={bolt(deg as number)} stroke={color as string} strokeOpacity="0.28" strokeWidth="14" />
            <polyline points={bolt(deg as number)} stroke={color as string} strokeWidth="5" />
            <polyline points={bolt(deg as number)} stroke="#fff" strokeWidth="1.6" />
          </g>
        ))}
      </g>
    </svg>
  );
}
