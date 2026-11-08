import { Briefcase, FolderKanban, Home, Mail, Sparkles, UserRound } from "lucide-react";

const items = [
  { href: "/#top", label: "Home", Icon: Home },
  { href: "/#about", label: "About", Icon: UserRound },
  { href: "/#experience", label: "Experience", Icon: Briefcase },
  { href: "/#work", label: "Projects", Icon: FolderKanban },
  { href: "/#skills", label: "Skills", Icon: Sparkles },
  { href: "/#contact", label: "Contact", Icon: Mail },
];

export function Dock() {
  return (
    <nav className="dock" aria-label="Quick navigation">
      {items.map(({ href, label, Icon }) => (
        <a key={href} href={href} data-label={label} aria-label={label}><Icon size={19} strokeWidth={1.8} /></a>
      ))}
    </nav>
  );
}
