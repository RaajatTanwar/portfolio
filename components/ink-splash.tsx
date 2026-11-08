/** Deterministic manga-style ink splatter. Colour comes from `currentColor` (set via CSS). */
export function InkSplash({ seed = 3, className = "", style }: { seed?: number; className?: string; style?: React.CSSProperties }) {
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);

  // main blob: smooth closed curve through jittered radial points
  const N = 22;
  const pts = Array.from({ length: N }, (_, i) => {
    const a = (i / N) * Math.PI * 2;
    const spike = i % 3 === 0 ? 1.28 : 1;
    const r = (36 + rnd() * 26) * spike;
    return [100 + r * Math.cos(a), 100 + r * Math.sin(a)] as const;
  });
  const mid = (a: readonly number[], b: readonly number[]) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  let d = `M ${mid(pts[N - 1], pts[0]).map((v) => v.toFixed(1)).join(" ")}`;
  for (let i = 0; i < N; i++) {
    const m = mid(pts[i], pts[(i + 1) % N]);
    d += ` Q ${pts[i][0].toFixed(1)} ${pts[i][1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`;
  }
  d += " Z";

  const drops = Array.from({ length: 46 }, () => {
    const a = rnd() * Math.PI * 2;
    const dist = 62 + rnd() * 52;
    const r = Math.max(0.8, 7.5 * (1 - (dist - 62) / 60) * rnd() + 0.8);
    return { x: 100 + dist * Math.cos(a), y: 100 + dist * Math.sin(a), r };
  });

  return (
    <svg className={`ink ${className}`} style={style} viewBox="0 0 200 200" fill="currentColor" aria-hidden="true">
      <path d={d} />
      {drops.map((c, i) => <circle key={i} cx={c.x.toFixed(1)} cy={c.y.toFixed(1)} r={c.r.toFixed(1)} />)}
    </svg>
  );
}
