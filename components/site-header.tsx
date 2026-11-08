"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Rajat home" onClick={() => setIsOpen(false)}>
          rajat<span>.</span>
          <i className="wordmark-kanji" aria-hidden="true">術師</i>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <ThemeToggle />
          <a className="header-cta" href={`mailto:${profile.email}`}>
            Let&apos;s talk <span className="arrow-dot"><ArrowUpRight size={16} strokeWidth={2} /></span>
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {isOpen && (
        <nav className="mobile-nav container" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`} onClick={() => setIsOpen(false)}>
            Email me <ArrowUpRight size={15} />
          </a>
        </nav>
      )}
    </header>
  );
}
