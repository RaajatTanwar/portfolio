import type { Metadata, Viewport } from "next";
import "@fontsource/bebas-neue/latin-400.css";
import "@fontsource/rajdhani/latin-500.css";
import "@fontsource/rajdhani/latin-600.css";
import "@fontsource/rajdhani/latin-700.css";
import "@fontsource/yuji-boku/400.css";
import "@fontsource/zen-kaku-gothic-new/latin-400.css";
import "@fontsource/zen-kaku-gothic-new/latin-500.css";
import "@fontsource/zen-kaku-gothic-new/latin-700.css";
import "@fontsource/space-mono/latin-400.css";
import "@fontsource/space-mono/latin-700.css";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CursedFx } from "@/components/cursed-fx";
import { Dock } from "@/components/dock";
import { Particles } from "@/components/particles";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.headline}`,
  description: profile.summary,
  applicationName: "Rajat Tanwar Portfolio",
  keywords: ["Rajat Tanwar", "AI Engineer", "Machine Learning", "Generative AI", "Full Stack Developer", "AI Solutions Engineer"],
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#ecebf4" }, { media: "(prefers-color-scheme: dark)", color: "#0c0a20" }],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light")document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body>
        <div className="energy-gauge" aria-hidden="true" />
        <CursedFx />
        <Particles />
        <Dock />
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
