"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Toggle light and dark mode" title="Toggle light / dark">
      <Moon className="i-moon" size={19} />
      <Sun className="i-sun" size={19} />
    </button>
  );
}
