import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Link href="/" className="wordmark">rajat<span>.</span><i className="wordmark-kanji" aria-hidden="true">術師</i></Link>
          <p>Designing and building useful intelligent systems.</p>
        </div>
        <div className="footer-socials">
          <a href={`mailto:${profile.email}`} aria-label="Email Rajat"><Mail size={17} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="#top" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Jujutsu Kaisen–inspired fan-style design · not affiliated with the series</span>
      </div>
    </footer>
  );
}
