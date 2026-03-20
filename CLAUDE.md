# AIToolsRadar

Free AI tool comparison directory — 40+ tools, 6 categories, affiliate-powered revenue.

## Stack
- Next.js 16 + React 19 + TypeScript + Tailwind v4
- Animations: Framer Motion
- Revenue: Affiliate links (no x402)
- SEO: Server components + sitemap + robots.txt

## Commands
```bash
pnpm install    # Install deps
pnpm dev        # Development (localhost:4004)
pnpm build      # Production build
pnpm start      # Start production server
```

## Key Files
- `app/page.tsx` — Homepage (server component, renders HomeClient)
- `app/HomeClient.tsx` — Client-side home with hero carousel
- `app/[category]/page.tsx` — Category pages (code, writing, design, marketing, data, automation)
- `app/[category]/CategoryPageClient.tsx` — Category page client component
- `app/tools/[slug]/page.tsx` — Individual tool review pages
- `app/tools/[slug]/ToolPageClient.tsx` — Tool detail client component
- `app/api/newsletter/route.ts` — Newsletter signup endpoint
- `app/sitemap.ts` — Dynamic sitemap for SEO
- `app/robots.ts` — Robots.txt config
- `app/not-found.tsx` — 404 page
- `lib/tools.ts` — Tool data, categories, types (Tool, Category, CategorySlug)
- `components/ToolCard.tsx` — Tool listing card
- `components/CategoryCard.tsx` — Category navigation card
- `components/ComparisonTable.tsx` — Side-by-side tool comparison
- `components/HeroCarousel.tsx` — Homepage featured tools carousel
- `components/StarRating.tsx` — Star rating display
- `components/NewsletterForm.tsx` — Email capture form
- `components/FunnelCta.tsx` — Cross-sell CTA to paid products
- `components/Header.tsx` / `components/Footer.tsx` — Site layout

## Port Assignment
Production port: 4004 (fleet-manager.sh)

## Revenue Model
- Free site, no paywall
- Affiliate links on each tool (affiliateUrl field in tool data)
- Newsletter capture for email list
- FunnelCta components cross-sell to PromptForge, CryptoPayKit, etc.
- SEO-optimized for organic traffic

## Conventions
- Dark theme (bg-zinc-950)
- No icon libraries — use SVG/emoji
- Framer Motion for all animations
- Server components for SEO pages, client components for interactivity
- Cross-sell footer links to ecosystem products
