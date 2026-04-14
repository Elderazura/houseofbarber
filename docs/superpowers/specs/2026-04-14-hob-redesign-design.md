# House of Barber — Website Redesign Spec

**Date:** 2026-04-14
**Approach:** Clean Slate (B) — rebuild UI layer, keep all brand assets and data files
**Design Direction:** Noir Gold — deep black canvas, gold-only accent, editorial serif typography

---

## 1. Design System

### Color Tokens
All defined as CSS custom properties in `app/globals.css`:

| Token | Value | Role |
|---|---|---|
| `--hob-black` | `#0D0D0D` | Primary background |
| `--hob-dark` | `#1A1A1A` | Section backgrounds |
| `--hob-charcoal` | `#2C2C2C` | Card backgrounds |
| `--hob-gold` | `#C9A84C` | Primary accent — borders, labels, CTAs |
| `--hob-gold-lt` | `#E8C96A` | Hover state for gold elements |
| `--hob-cream` | `#F5EFE0` | Alternate light sections |
| `--hob-white` | `#FAF7F2` | Body text on dark bg |
| `--hob-muted` | `#888888` | Secondary / supporting text |

### Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Hero / Display | Playfair Display | 400 | 5xl–7xl | Italic for accent phrases |
| Section Heading | Cormorant Garamond | 300 | 3xl–4xl | Light weight, generous line-height |
| Eyebrow / Label | Josefin Sans | 300 | xs | `letter-spacing: 0.25em`, uppercase |
| CTA / Button | Josefin Sans | 400 | xs | `letter-spacing: 0.2em`, uppercase |
| Body | DM Sans | 300 | sm–base | `line-height: 1.7` |

All fonts loaded via `next/font/google` with `display: 'swap'`.

### Buttons

| Variant | Style | Usage |
|---|---|---|
| Primary | Transparent bg, `1px solid --hob-gold`, gold text → fills on hover | Main CTAs |
| Secondary | `--hob-gold` fill, `--hob-black` text | App download, strongest CTA |
| Ghost | No border, muted white text | Tertiary / informational links |

### Navigation

- Sticky, frosted glass: `background: rgba(13,13,13,0.92)`, `backdrop-filter: blur(12px)`
- Logo: "H O B" in Cormorant Garamond, letterspaced
- Links: Josefin Sans, xs, `--hob-muted` → `--hob-white` on hover, `--hob-gold` when active
- "Book" CTA: outlined gold button, right-aligned
- **Scroll behaviour:** hides on scroll-down, reappears on scroll-up (CSS class toggle via scroll event)
- **Mobile:** hamburger icon → full-screen overlay with Framer Motion staggered link reveal
- **Breakpoint:** hamburger at `< md` (768px)

### Bento Cards

Used for: Services overview, Gallery masonry, Location tease, Stats strip.

- Background: `rgba(255,255,255,0.03)`, border: `1px solid rgba(255,255,255,0.07)`
- Accent cells: `rgba(201,168,76,0.08)` bg, `rgba(201,168,76,0.2)` border
- Hover: `scale(1.01)` + gold border glow (`box-shadow: 0 0 0 1px rgba(201,168,76,0.4)`)
- Border radius: `rounded-lg` (8px)
- All bento grids are CSS Grid — no JS layout libraries

---

## 2. Architecture

### Approach
Clean slate rebuild. Remove all files under `app/` and `components/hob/`. Keep:
- `public/assets/hob/` — all brand images, gallery photos, logos
- `lib/hob-content.ts` — services, locations, navigation data
- `lib/hob-brand-assets.ts` — brand image registry
- `lib/utils.ts` — `cn()` utility
- `components/ui/` — shadcn/ui base components
- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`

### File Structure (rebuilt)
```
app/
  layout.tsx              # Root layout: fonts, metadata, Lenis, MotionProvider
  globals.css             # Design tokens, base styles, scrollbar
  page.tsx                # Homepage
  services/page.tsx
  locations/
    page.tsx
    [slug]/page.tsx       # Dynamic per-location page
  gallery/page.tsx
  about/page.tsx
  contact/page.tsx
  sitemap.ts              # Auto-generated sitemap
  robots.ts               # robots.txt

components/
  layout/
    Navigation.tsx        # Sticky nav, mobile overlay
    Footer.tsx
  sections/
    HeroSection.tsx       # Full-height, parallax bg image, gold outlined CTA
    BrandStatsSection.tsx # 4-cell bento with CountUp animation
    ServicesBentoSection.tsx  # Asymmetric bento: Men (2fr) + Women + Kids
    LocationsTeaserSection.tsx # 3-col bento, links to /locations
    GalleryTeaserSection.tsx   # 5-col masonry bento preview
    AppDownloadSection.tsx     # Device-detected store CTAs
  ui/                     # shadcn/ui (button, card, input, etc.)
  motion/
    ScrollReveal.tsx      # Intersection-based fade-up / slide-in
    CountUp.tsx           # rAF-based animated number
    PageTransition.tsx    # Route change transition
  providers/
    MotionProvider.tsx    # Framer Motion LazyMotion + MotionConfig
    LenisProvider.tsx     # Lenis smooth scroll init
  FloatingBookButton.tsx  # Fixed-position "Book" CTA (mobile) — scrolls to AppDownloadSection or opens WhatsApp
```

---

## 3. Pages

### Homepage (`/`)

Sections in order:
1. `<Navigation />` — sticky, frosted glass
2. `<HeroSection />` — full-viewport, parallax brand image, headline, gold CTA
3. `<BrandStatsSection />` — 4-cell bento: 7 Locations, 12+ Years, 22 Services, 5★ Rating (CountUp on scroll-enter)
4. `<ServicesBentoSection />` — asymmetric grid: Men's (2fr tall), Women's + Kids' (1fr each). Each links to `/services`
5. `<LocationsTeaserSection />` — 3-col bento showing 2 featured locations + "View all" cell
6. `<GalleryTeaserSection />` — 5-col masonry bento, 6–8 images, links to `/gallery`
7. `<AppDownloadSection />` — device-detected (iOS → App Store, Android → Play Store, desktop → both)
8. `<Footer />` — locations list, nav links, social (Instagram, Facebook), WhatsApp

### Services (`/services`)

- Full-page header with section label + heading
- Filter tabs: All / Men / Women / Kids (client-side filter, no page reload)
- Service cards in responsive bento grid (3-col desktop, 2-col tablet, 1-col mobile)
- Each card: service name, category badge, short description, duration/price range, "Book via App" CTA
- JSON-LD: `Service` schema per service item

### Locations (`/locations`)

- UAE / India tab toggle
- Location cards: name, neighbourhood, city, hours, phone, WhatsApp link, Google Maps link
- Each card links to `/locations/[slug]`
- JSON-LD: `LocalBusiness` schema per location

### Location Detail (`/locations/[slug]`)

- Slug is the location name kebab-cased, e.g. `al-falah`, `reem-island`, `wtc`, `navy-gate`, `reem-bay`, `bengaluru`, `kochi` — derived from `hob-content.ts` at build time
- Dynamic page generated from `hob-content.ts` locations array
- Hero with location name + area
- Hours, services offered, address, map embed (iframe or link), WhatsApp CTA
- `generateStaticParams()` for static generation at build time
- JSON-LD: full `LocalBusiness` schema with geo, hours, phone

### Gallery (`/gallery`)

- Filter bar: All / Haircuts / Beards / Color / Kids / Interior
- Masonry bento grid — CSS Grid with `grid-auto-rows` and `span` for tall items
- Lightbox on image click (client component, keyboard-navigable)
- Every `<Image>` has descriptive `alt` text: e.g. `"Men's fade haircut at House of Barber Reem Island, Abu Dhabi"`
- JSON-LD: `ImageObject` schema for each image

### About (`/about`)

- Editorial layout: large serif headline + brand story text
- Brand imagery (from `hob-brand-assets.ts`)
- Values / pillars section
- JSON-LD: `Organization` schema

### Contact (`/contact`)

- Lead form: Name, Phone, Location (select), Message — React Hook Form + Zod validation
- On submit: opens a pre-filled WhatsApp message (`wa.me/...?text=...`) — no backend required
- WhatsApp CTA alongside form as a direct fallback
- All location addresses listed
- Social links

---

## 4. App Download Section

Device detection using `navigator.userAgent` (client component, no SSR):

```
iOS / iPadOS   → highlight App Store button, show Play Store dimmed
Android        → highlight Play Store button, show App Store dimmed
Desktop        → show both equally with equal prominence
```

Links:
- App Store: Sourced from the existing `houseofbarber.com` page source — confirm exact URL before build (Play Store ID confirms it's `com.saloon.hob`)
- Play Store: `https://play.google.com/store/apps/details?id=com.saloon.hob`

Section copy: *"Book smarter. Get the app."* — manages appointments, explore services, find your nearest location.

---

## 5. SEO & Metadata

### Per-Page `generateMetadata()`

Every page exports a `generateMetadata()` function:

| Page | Title pattern | Description |
|---|---|---|
| `/` | `House of Barber \| Premium Family Salon — Abu Dhabi` | Brand overview, 155 chars |
| `/services` | `Services \| House of Barber` | Lists service categories |
| `/locations` | `Locations — UAE & India \| House of Barber` | Lists all cities |
| `/locations/[slug]` | `[Location Name] \| House of Barber` | Location-specific |
| `/gallery` | `Gallery \| House of Barber` | Photo gallery description |
| `/about` | `About \| House of Barber` | Brand story |
| `/contact` | `Contact \| House of Barber` | Contact page |

All pages include:
- `canonical` — absolute URL, no trailing slash
- `openGraph.images` — per-page brand photo
- `twitter.card: 'summary_large_image'`
- `robots: { index: true, follow: true }`

### Structured Data (JSON-LD)

All injected via `<script type="application/ld+json">` in page `<head>`:

- **`Organization`** — on `/`, `/about`: name, logo, url, sameAs (Instagram, Facebook, Play Store, App Store)
- **`LocalBusiness`** — on `/locations/[slug]`: name, address, geo, openingHours, telephone, priceRange, image
- **`Service`** — on `/services`: each service with name, description, provider, areaServed
- **`BreadcrumbList`** — on all inner pages
- **`ImageObject`** — on `/gallery`: each image with name, contentUrl, description

### Image SEO

- All `<Image>` components use descriptive `alt` text (no empty alt on content images)
- Hero image: `priority` prop
- All others: `loading="lazy"` (Next.js default)
- Correct `sizes` prop on every image to prevent oversized downloads:
  - Full-width: `sizes="100vw"`
  - Bento cells: `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`
- WebP served automatically by Next.js Image Optimization

### Technical SEO

- `app/sitemap.ts` — auto-generates XML sitemap including all static + dynamic location routes
- `app/robots.ts` — allows all, points to sitemap
- No layout shift: explicit `width` + `height` on all images
- Fonts: `display: 'swap'` prevents invisible text during load
- 44px minimum touch targets on all interactive elements
- No horizontal overflow on mobile (tested at 375px, 390px, 414px)

---

## 6. Motion & Animation

All animations use **Framer Motion** via `LazyMotion` + `domAnimation` features for lean bundle.

| Animation | Trigger | Details |
|---|---|---|
| Hero headline | Page load | Fade-up, staggered words, 0.6s ease-out |
| Section headings | Scroll enter (IntersectionObserver) | Fade-up 24px, 0.5s |
| Bento cells | Scroll enter | Staggered slide-in, 0.04s delay per cell |
| CountUp numbers | Scroll enter | rAF-based, 1.2s duration, easeOut |
| Nav links (mobile) | Menu open | Staggered fade-up, 0.05s per link |
| Bento hover | Mouse enter | `scale(1.01)` + gold border glow, 0.2s |
| Page transitions | Route change | Fade out/in, 0.3s |
| Hero parallax | Scroll | Background `translateY` at 0.3× scroll speed |
| Lenis smooth scroll | Global | `duration: 1.2`, `easing: easeInOutQuart` |

All animations wrapped in `useReducedMotion()` check — disabled when `prefers-reduced-motion: reduce`.

---

## 7. Mobile-First Breakpoints

| Breakpoint | Width | Layout notes |
|---|---|---|
| Base (mobile) | 0–767px | Single column, full-width sections, hamburger nav |
| `md` | 768–1023px | 2-col bento, tablet nav (links visible) |
| `lg` | 1024–1279px | 3-col bento, full nav |
| `xl` | 1280–1535px | 4-col bento, wider gutters |
| `2xl` | 1536px+ | Max-width container (1400px), centred |

Container padding: `px-4` mobile → `px-6` tablet → `px-8` desktop.

---

## 8. What We're Removing

The following will be deleted in the clean slate:

- All files under `app/` (will be rebuilt)
- All files under `components/hob/` (will be rebuilt)
- `GlobalData.ts` — legacy unrelated data, unused
- `_raw_assets/` — design reference docs, safe to keep as-is (not included in build output)
- `.tmp/` — temp files
- Duplicate lib files: `components/hob/lib/hob-content.ts`, `components/hob/lib/hob-brand-assets.ts` (canonical versions kept in `lib/`)

---

## 9. Out of Scope

- Firebase Auth integration (users directed to app download instead)
- Online payment or checkout
- CMS / admin panel
- Blog or news section
- Multi-language (English only for now)
