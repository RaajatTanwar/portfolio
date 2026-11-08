/** Floating cyan cursed-energy motes — only visible in dark mode (see --particle-opacity). */
export function Particles() {
  let s = 17;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const dots = Array.from({ length: 26 }, () => ({
    left: `${(rnd() * 100).toFixed(1)}%`,
    s: `${(2 + rnd() * 4).toFixed(1)}px`,
    d: `${(14 + rnd() * 18).toFixed(1)}s`,
    delay: `-${(rnd() * 24).toFixed(1)}s`,
    x: `${((rnd() - 0.5) * 140).toFixed(0)}px`,
  }));
  return (
    <div className="particles" aria-hidden="true">
      {dots.map((p, i) => (
        <i key={i} style={{ left: p.left, ["--s" as string]: p.s, ["--d" as string]: p.d, ["--delay" as string]: p.delay, ["--x" as string]: p.x } as React.CSSProperties} />
      ))}
    </div>
  );
}
