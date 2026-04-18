# KAVELA WEBSITE

## Projet
Plateforme basée à Singapour qui connecte corporates, fonds d'investissement et family offices avec les bons partenaires en Asie. Coeur: Singapour + SEA. Reach étendu (non-expertise): Inde, Chine. Cible: entrants en Asie (20%) et acteurs déjà en Asie voulant s'étendre régionalement (80%).

## Owner
Billel Trabelsi (billel.trabelsi83@gmail.com). Francophone, non-développeur mais deploy Vercel. Répondre en français, niveau accessible.

## Hosting
Vercel (auto-deploy sur push `main`). Domaine: kavela.co.

## Stack
- React 19 + react-router-dom v7 (SPA, BrowserRouter)
- Vite 7 + SWC
- **Inline styles partout** via `src/components/shared.jsx` (tokens, Nav, Footer, Wrap, Btn, PageHero, ImageBreak, RevealEngine, GlobalStyles). Tailwind installé mais pas utilisé.
- react-helmet-async (SEO), front-matter + marked (blog), vite-plugin-sitemap

## Branding & visuel
- **Couleurs**: BLUE #1A3D7C (dominante), NAVY #0A1628, WHITE, OFF_W #F5F6F8, GRAY #6B7280, GRAY_L #E5E7EB, TEXT_D #0F172A.
- **Fonts**: Inter Tight (titres), Inter (corps).
- **Imagerie**: Unsplash, villes asiatiques uniquement (Singapour, Tokyo, Hong Kong, Mumbai). Ambiance institutionnelle, feutrée, jamais tape-à-l'oeil.
- **Logos**: `public/LogoKavela.png` (blanc, sur fond sombre/transparent), `public/transparent-07.png` (noir, sur fond clair).
- **Nav**: fixe 96px, logo 110px, bascule blanc/noir selon contexte, hamburger <1024px.
- **Animations**: reveal discret via IntersectionObserver (data-r, data-rs, data-rc). Parallax sur ImageBreak (désactivé mobile).
- **Grids**: classes g2/g3/g4. Breakpoints 768px et 480px (classes kv-*).
- **Esprit**: sobre, institutionnel, contemporain. Beaucoup de blanc, typographie large, peu d'ornements.

## Structure clé
- `src/pages/` - une page par route (Home, Corporate, Funds, Platform, WhyAsia, Contact, Blog, Article)
- `src/components/shared.jsx` - design system complet
- `src/components/SEO.jsx` - meta/OG/Schema.org
- `content/articles/` - markdown + frontmatter (title, slug, date, author, description, image, tags, readTime)
- `src/lib/articles.js` - loader via `import.meta.glob`
- `scripts/get-routes.mjs` - routes pour sitemap

## Règles de ton (CRITIQUE)
- **Humble et institutionnel**. Jamais arrogant. Jamais de survente.
- **Honnête sur le scope**: SG + SEA = coeur. Inde = reach croissant. Chine = accès sélectif via intermédiaires. NE JAMAIS revendiquer d'expertise Chine/Inde.
- **Inclusif**: parle aux entrants ET aux acteurs déjà en Asie.
- **Aucun chiffre attaquable**: pas de stats, pourcentages, comparaisons quantifiées. Langage évocateur non-quantifié.
- **Pas d'em-dashes (—)**: tirets simples (-) uniquement.
- **Style neutre singapourien**: Singapour = neutralité (équivalent asiatique de la Suisse). Tout le writing (site, articles, réponses) doit être apolitique, non-partisan, mesuré. Ne jamais prendre parti géopolitique ni projeter de jugement culturel.
- **Cibles & services**: corporates, fonds, family offices (toujours citer "family offices" avec les fonds). Services: market entry, expansion régionale, distribution partnerships, deal execution, operational support, deal flow, LP/co-investor access.

## Build
`npm run dev` / `npm run build` / `npm run preview`
