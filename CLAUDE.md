# KAVELA WEBSITE - Project Context

## What is Kavela
Kavela is a Singapore-based network-driven platform that connects corporates, investment funds, and family offices with the right partners across Asia. Core markets: Singapore and Southeast Asia. Extended reach: India and China (but NOT core competencies - be honest about this). The company helps both people entering Asia AND people already operating in Asia who want to expand regionally.

## Owner
Billel Trabelsi (billel.trabelsi83@gmail.com). Speaks French primarily. Technical enough to deploy on Vercel but not a developer. All instructions should be in French or adapted to his level.

## Hosting & Domain
- Hosted on **Vercel** (auto-deploys from git push to main)
- Domain: **kavela.co**
- Git remote: check with `git remote -v`

## Tech Stack
- **React 19** + **react-router-dom v7.9.4** (SPA with BrowserRouter)
- **Vite v7.1.1** with SWC plugin
- **Inline styles** everywhere (no CSS modules, no styled-components)
- Design system in `src/components/shared.jsx` (tokens, Nav, Footer, all shared components)
- Tailwind is installed but the site uses inline JS style objects from shared.jsx
- **react-helmet-async** for SEO meta tags
- **front-matter** + **marked** for blog markdown parsing
- **vite-plugin-sitemap** for auto-generated sitemap.xml

## Architecture

### Pages (src/pages/)
| Page | Route | Description |
|------|-------|-------------|
| Home.jsx | `/` | Hero, PathCards with hover sub-themes, "What we bring" section, Why Asia teaser, CTA |
| CorporatePage.jsx | `/corporate` | For corporates growing in Asia |
| FundsPage.jsx | `/funds` | For funds & family offices |
| PlatformPage.jsx | `/platform` | How Kavela works (Map/Connect/Close), comparison table |
| WhyAsiaPage.jsx | `/why-asia` | 4 market cards (Singapore, SEA, India, China) |
| ContactPage.jsx | `/contact` | Email, LinkedIn, HQ info |
| BlogPage.jsx | `/blog` | Article listing with cards |
| ArticlePage.jsx | `/blog/:slug` | Single article with markdown rendering |

### Design System (src/components/shared.jsx)
- **Colors**: BLUE=#1A3D7C (dominant), NAVY=#0A1628, WHITE, OFF_W=#F5F6F8, GRAY=#6B7280, GRAY_L=#E5E7EB, TEXT_D=#0F172A
- **Fonts**: HEAD = Inter Tight, BODY = Inter
- **Components**: Wrap, Btn, Label, PageHero, ImageBreak, RevealEngine, ScrollTop, Nav, Footer, GlobalStyles
- **Images**: All from Unsplash, Asian cities only (Singapore, Tokyo, Hong Kong, Mumbai). Stored in IMG object.
- **Responsive**: CSS classes g2, g3, g4 for grid collapse. Mobile media queries at 768px and 480px with kv-* classes.
- **Animations**: IntersectionObserver-based reveal (data-r, data-rs, data-rc attributes)
- **Parallax**: backgroundAttachment:fixed on ImageBreak (disabled on mobile via kv-parallax class)
- **Nav**: Fixed, 96px height, logo 110px. Switches between LogoKavela.png (white, for transparent nav on homepage) and transparent-07.png (black, for solid nav when scrolled/inner pages). Mobile hamburger menu at <1024px.
- **Footer**: 4-column grid (logo+desc, Pages, Connect, HQ). Logo 70px with brightness invert filter.

### Blog System (content/articles/)
- Articles are Markdown files with YAML frontmatter in `content/articles/`
- Loaded at build time via Vite's `import.meta.glob` in `src/lib/articles.js`
- Frontmatter fields: title, slug, date, author, description, image, tags, readTime
- SEO component (`src/components/SEO.jsx`): meta tags, OG, Twitter cards, Schema.org Article structured data
- Sitemap auto-generated at build including all article routes (`scripts/get-routes.mjs`)
- `public/robots.txt` points to sitemap

### Key Files
- `src/App.jsx` - Router setup with all routes
- `src/main.jsx` - Entry point, wraps app in HelmetProvider
- `vite.config.js` - Vite config with sitemap plugin
- `public/LogoKavela.png` - White logo on dark background
- `public/transparent-07.png` - Black logo on transparent background

## Tone & Content Rules

### CRITICAL - Tone
- **Humble and institutional**. Never arrogant or pretentious. A prospect should never feel we overpromise.
- **Honest about scope**: Singapore & SEA are core. India = growing reach. China = selective access through intermediaries. NEVER claim expertise in China/India.
- **Inclusive**: The site must speak to BOTH people entering Asia from outside AND people already in Asia looking to expand regionally.
- **No attackable claims**: Avoid specific statistics, percentages, or comparative claims that could be challenged (e.g., don't say "280 million people", "20% growth", "more unicorns than Europe"). Stay with evocative, non-quantified language.
- **No em-dashes** (—): Use regular hyphens (-) only.

### Content targets
- Corporates, investment funds, and family offices
- Always mention "family offices" alongside funds
- Services: market entry, regional expansion, distribution partnerships, deal execution, operational support, deal flow, LP/co-investor access

## Build & Deploy
```bash
npm run dev    # Local dev server
npm run build  # Production build (outputs to dist/)
npm run preview # Preview production build
```
Vercel auto-deploys on push to main branch.

## What's Next (not yet built)
- **AI content loop**: Script using Claude API to auto-generate/optimize blog articles, integrate Google Search Console API for performance data, continuous improvement loop
- **Pre-rendering**: For better SEO, consider adding server-side rendering or static pre-rendering (current setup is client-side SPA - Google can index JS but static HTML is better)
- **Google Search Console**: Domain kavela.co needs to be verified in GSC for search analytics
