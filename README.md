# Rajat Tanwar — Portfolio

A responsive, Jujutsu Kaisen–inspired portfolio (light theme by default with a dark-mode toggle; indigo/lavender palette, condensed display type, spec-sheet panels, ink splatters, kanji accents) built with Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide icons. It includes a home page, experience and education sections, a skills overview, four project cards, and statically generated project case-study pages.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run typecheck
npm run build
npm run start
```

## Personalise before publishing

Most profile content lives in `data/portfolio.ts`:

1. Add your actual dates to the Fokel experience (currently shown as `Internship`) in `data/portfolio.ts`.
2. Review the Fokel bullets and keep only tasks that accurately describe your internship.
3. Update project details, links, and technologies if your repositories change.
4. Add a final résumé PDF to `public/` and create a download link in the hero or contact section when you are ready to publish it. There is no placeholder PDF in this starter.
5. Set your deployed domain in `metadataBase` in `app/layout.tsx` if you later add absolute Open Graph image URLs or canonical metadata.
6. Confirm the UniWell live URL and other external project links are still active before deployment.

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. Import that repository into Vercel.
3. Keep the default Next.js build settings (`npm run build`).
4. Add your custom domain in Vercel after the first deployment.

No environment variables or database are required for the current static portfolio.

## Project structure

```text
rajat-portfolio/
├── app/
│   ├── work/[slug]/page.tsx    # Project case-study pages
│   ├── globals.css             # JJK visual system (colours, fonts, motifs, responsive)
│   ├── icon.svg                # Browser tab icon
│   ├── layout.tsx              # Global layout and metadata
│   ├── not-found.tsx           # Custom 404 page
│   └── page.tsx                # Portfolio home page
├── components/
│   ├── ink-splash.tsx          # Manga-style ink splatter
│   ├── theme-toggle.tsx        # Light/dark switch
│   ├── dock.tsx                # Floating icon nav
│   ├── domain-sigil.tsx        # Hero cursed-energy sigil (SVG)
│   ├── cursed-fx.tsx           # Cursor aura + click flash
│   ├── project-artwork.tsx     # SVG project illustrations
│   ├── project-card.tsx        # Project card
│   ├── section-heading.tsx     # Reusable section heading
│   ├── site-footer.tsx         # Footer and social links
│   └── site-header.tsx         # Responsive navigation
├── data/
│   └── portfolio.ts            # Editable profile, experience, skills, projects
├── public/                     # Static assets and resume PDF
├── package.json
└── README.md
```

## Notes

- Fonts (Bebas Neue, Rajdhani, Yuji Boku, Zen Kaku Gothic New, Space Mono) are self-hosted via @fontsource; light/dark colour tokens live at the top of `app/globals.css` (`:root` and `[data-theme="dark"]`); the choice is remembered in localStorage.
- Fan-style design only; no characters or official artwork are used.
- The site uses SVG/CSS illustrations rather than remote stock images, keeping the first version self-contained and fast.
- The Fokel responsibilities are drafted at role level from the information provided. Verify them against your actual internship work before publishing.
- The 81.84% Galaxy classification metric is the result previously supplied for the project; keep it only if it matches the final evaluation you intend to present.
