"use client";

import { useEffect, useRef } from "react";

/** Cursor aura that follows the pointer + a red "Black Flash" ring on click. Pointer devices only. */
export function CursedFx() {
  const aura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let x = 0, y = 0, tx = 0, ty = 0, raf = 0;
    const el = aura.current;

    const loop = () => {
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      if (el) el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => {
      tx = e.clientX; ty = e.clientY;
      el?.classList.add("is-on");
    };
    const leave = () => el?.classList.remove("is-on");
    const click = (e: MouseEvent) => {
      const ring = document.createElement("span");
      ring.className = "flash-burst";
      ring.style.left = `${e.clientX}px`;
      ring.style.top = `${e.clientY}px`;
      document.body.appendChild(ring);
      window.setTimeout(() => ring.remove(), 600);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("click", click);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("click", click);
    };
  }, []);

  return <div ref={aura} className="cursor-aura" aria-hidden="true" />;
}
