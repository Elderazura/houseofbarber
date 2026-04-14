# House of Barber Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean-slate rebuild of the HOB website with Noir Gold design system — mobile-first, Framer Motion animations, bento layouts, full SEO, and app-download booking flow.

**Architecture:** Delete all `app/` and `components/hob/` files. Rebuild from scratch using the Noir Gold design tokens, Tailwind v4 `@theme`, and a clear server/client component split. Keep `lib/`, `components/ui/`, and `public/assets/hob/`.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion 12, Lenis 1.3, React Hook Form + Zod, next/font/google, TypeScript 5.

---

## Critical Next.js 16 Notes

- `params` in page components is `Promise<{slug: string}>` — must be awaited: `const { slug } = await params`
- `generateMetadata` receives `{ params: Promise<...> }` — also awaited
- All layouts/pages are Server Components by default; add `'use client'` only for interactivity
- Tailwind v4: use `@theme { --color-hob-black: #0D0D0D; }` in globals.css for Tailwind class generation

---

## File Map

**Created:**
- `app/globals.css` — design tokens, base styles
- `app/layout.tsx` — root layout, fonts, providers
- `app/page.tsx` — homepage
- `app/services/page.tsx`
- `app/locations/page.tsx`
- `app/locations/[slug]/page.tsx`
- `app/gallery/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `components/layout/Navigation.tsx` (client)
- `components/layout/Footer.tsx` (server)
- `components/sections/HeroSection.tsx` (server)
- `components/sections/BrandStatsSection.tsx` (client)
- `components/sections/ServicesBentoSection.tsx` (server)
- `components/sections/LocationsTeaserSection.tsx` (server)
- `components/sections/GalleryTeaserSection.tsx` (server)
- `components/sections/AppDownloadSection.tsx` (client)
- `components/motion/ScrollReveal.tsx` (client)
- `components/motion/CountUp.tsx` (client)
- `components/motion/PageTransition.tsx` (client)
- `components/providers/MotionProvider.tsx` (client)
- `components/providers/LenisProvider.tsx` (client)
- `components/FloatingBookButton.tsx` (client)
- `components/sections/services/ServiceCard.tsx` (server)
- `components/sections/services/FilterTabs.tsx` (client)
- `components/sections/gallery/GalleryGrid.tsx` (client)
- `components/sections/gallery/Lightbox.tsx` (client)
- `components/sections/contact/ContactForm.tsx` (client)
- `components/JsonLd.tsx` (server)
- `lib/device.ts`
- `lib/whatsapp.ts`
- `lib/jsonld.ts`

**Modified:**
- `lib/hob-content.ts` — update NAV_ITEMS, improve gallery alt text
- `.gitignore` — already updated

**Deleted:**
- All of `app/` (rebuild fresh)
- All of `components/hob/`
- `GlobalData.ts`
- `.tmp/`

---

## Task 1: Clean Slate

**Files:**
- Delete: `app/`, `components/hob/`, `GlobalData.ts`, `.tmp/`

- [ ] **Step 1: Delete old directories**

```bash
cd /Users/azura/houseofbarber
rm -rf app components/hob GlobalData.ts .tmp
```

- [ ] **Step 2: Verify kept files exist**

```bash
ls lib/hob-content.ts lib/hob-brand-assets.ts lib/utils.ts
ls components/ui/
ls public/assets/hob/
```

Expected: all three lib files exist, `components/ui/` has button.tsx etc, `public/assets/hob/` has brand/ gallery/ logo/ folders.

- [ ] **Step 3: Create directory structure**

```bash
mkdir -p app/services app/locations/\[slug\] app/gallery app/about app/contact
mkdir -p components/layout components/sections/services components/sections/gallery components/sections/contact
mkdir -p components/motion components/providers
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: clean slate — remove old app and hob components"
```

---

## Task 2: Update Content Data

**Files:**
- Modify: `lib/hob-content.ts`

- [ ] **Step 1: Update NAV_ITEMS and fix gallery alt text**

Open `lib/hob-content.ts`. Replace:

```ts
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/booking" },
  { label: "Contact", href: "/contact" },
];
```

With:

```ts
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
```

- [ ] **Step 2: Replace categoriesForIndex and GALLERY_IMAGES with better alt text**

Replace the `categoriesForIndex` function and `GALLERY_IMAGES` export with:

```ts
function categoriesForIndex(i: number): GalleryCategory[] {
  if (i < 5)  return ["all", "haircuts"];
  if (i < 10) return ["all", "beards"];
  if (i < 14) return ["all", "interior"];
  if (i < 20) return ["all", "haircuts", "beards"];
  if (i < 26) return ["all", "color"];
  if (i < 30) return ["all", "interior"];
  return ["all", "kids"];
}

const galleryAltText: Record<string, string> = {
  "1":  "Men's precision haircut at House of Barber, Abu Dhabi",
  "2":  "Classic fade and taper at House of Barber salon",
  "3":  "Men's grooming session — cut and style, Abu Dhabi",
  "4":  "Sharp scissor cut finish at House of Barber",
  "5":  "Modern textured crop at House of Barber, UAE",
  "6":  "Beard shaping and line-up at House of Barber",
  "7":  "Full beard grooming and hot towel shave",
  "8":  "Beard design and contour at House of Barber",
  "9":  "Beard trim and styling session, Abu Dhabi",
  "10": "Classic straight-razor shave at House of Barber",
  "11": "Premium barber chair and salon interior, House of Barber",
  "13": "House of Barber salon interior — warm lighting and classic decor",
  "14": "Barber station detail at House of Barber, Abu Dhabi",
  "15": "Men's haircut in progress at House of Barber",
  "16": "Fade haircut side profile at House of Barber",
  "17": "Clean taper fade by House of Barber stylist",
  "18": "Men's cut and beard combo service, Abu Dhabi",
  "19": "Precision cut and finish at House of Barber",
  "20": "Hair texture and styling result at House of Barber",
  "21": "Hair colour application at House of Barber",
  "22": "Women's hair colour and highlights, House of Barber",
  "23": "Balayage colour result at House of Barber salon",
  "27": "Hair colour treatment in progress, Abu Dhabi",
  "28": "Vibrant hair colour finish at House of Barber",
  "30": "House of Barber lounge and waiting area",
  "31": "Salon interior detail — House of Barber UAE",
  "32": "Kids' haircut at House of Barber family salon",
  "33": "Children's cut and styling, House of Barber",
  "34": "Fun kids' haircut at House of Barber",
  "35": "Kids' grooming service at House of Barber, Abu Dhabi",
  "36": "House of Barber premium salon experience",
  "37": "House of Barber — family salon and cafe, WTC Abu Dhabi",
};

export const GALLERY_IMAGES: GalleryImage[] = gallery.map((file, i) => {
  const id = file.replace(".jpg", "");
  return {
    id,
    src: `/assets/hob/gallery/${file}`,
    alt: galleryAltText[id] ?? `House of Barber gallery — ${file}`,
    categories: categoriesForIndex(i),
  };
});
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
cd /Users/azura/houseofbarber && npx tsc --noEmit 2>&1 | head -20
```

Expected: no errors (or only errors from missing app/ files which we'll add shortly).

- [ ] **Step 4: Commit**

```bash
git add lib/hob-content.ts
git commit -m "feat: update nav items and improve gallery alt text"
```

---

## Task 3: Utility Libraries

**Files:**
- Create: `lib/device.ts`, `lib/whatsapp.ts`, `lib/jsonld.ts`

- [ ] **Step 1: Create `lib/device.ts`**

```ts
// lib/device.ts
// Client-side only — call inside useEffect or 'use client' components

export type DevicePlatform = "ios" | "android" | "desktop";

export function detectPlatform(): DevicePlatform {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "desktop";
}

export const APP_STORE_URL =
  "https://apps.apple.com/in/app/house-of-barber/id1571444397";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.saloon.hob";
```

- [ ] **Step 2: Create `lib/whatsapp.ts`**

```ts
// lib/whatsapp.ts
// Builds a wa.me URL with a pre-filled message

const HOB_WHATSAPP = "971501124229"; // Al Falah default number, no +

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${HOB_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage({
  name,
  phone,
  location,
  message,
}: {
  name: string;
  phone: string;
  location: string;
  message: string;
}): string {
  return [
    `Hi House of Barber,`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred Location: ${location}`,
    ``,
    message ? `Message: ${message}` : "",
  ]
    .filter((l) => l !== undefined)
    .join("\n")
    .trim();
}
```

- [ ] **Step 3: Create `lib/jsonld.ts`**

```ts
// lib/jsonld.ts
// Builds JSON-LD structured data objects

import { Location } from "./hob-content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "House of Barber",
    url: "https://www.houseofbarber.com",
    logo: "https://www.houseofbarber.com/assets/hob/logo/hob-logo.png",
    sameAs: [
      "https://www.instagram.com/houseofbarber",
      "https://www.facebook.com/houseofbarber",
      "https://apps.apple.com/in/app/house-of-barber/id1571444397",
      "https://play.google.com/store/apps/details?id=com.saloon.hob",
    ],
  };
}

export function localBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.houseofbarber.com/locations/${location.id}`,
    name: `House of Barber — ${location.name}`,
    description: `${location.type} at ${location.address}`,
    url: `https://www.houseofbarber.com/locations/${location.id}`,
    telephone: location.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressCountry: location.country,
    },
    image: "https://www.houseofbarber.com/assets/hob/brand/hob-brand-1.png",
    priceRange: "$$",
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `https://www.houseofbarber.com${c.href}`,
    })),
  };
}
```

- [ ] **Step 4: Verify TS**

```bash
cd /Users/azura/houseofbarber && npx tsc --noEmit 2>&1 | grep "lib/" | head -10
```

Expected: no errors in lib/ files.

- [ ] **Step 5: Commit**

```bash
git add lib/device.ts lib/whatsapp.ts lib/jsonld.ts
git commit -m "feat: add device detection, WhatsApp URL builder, and JSON-LD helpers"
```

---

## Task 4: Design Tokens + Global CSS

**Files:**
- Create: `app/globals.css`

- [ ] **Step 1: Create `app/globals.css`**

```css
@import "tailwindcss";

@theme {
  --color-hob-black: #0D0D0D;
  --color-hob-dark: #1A1A1A;
  --color-hob-charcoal: #2C2C2C;
  --color-hob-gold: #C9A84C;
  --color-hob-gold-lt: #E8C96A;
  --color-hob-cream: #F5EFE0;
  --color-hob-white: #FAF7F2;
  --color-hob-muted: #888888;

  --font-display: var(--font-playfair);
  --font-heading: var(--font-cormorant);
  --font-label: var(--font-josefin);
  --font-body: var(--font-dm-sans);
}

/* Base */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: auto; /* Lenis handles smooth scroll */
}

body {
  background-color: #0D0D0D;
  color: #FAF7F2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: #0D0D0D; }
::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: #E8C96A; }

/* Gold divider utility */
.gold-rule {
  height: 1px;
  background: linear-gradient(to right, transparent, #C9A84C, transparent);
}

/* Bento card base */
.bento-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.bento-card:hover {
  box-shadow: 0 0 0 1px rgba(201, 168, 76, 0.35);
  transform: scale(1.01);
}

.bento-card-gold {
  background: rgba(201, 168, 76, 0.08);
  border: 1px solid rgba(201, 168, 76, 0.2);
  border-radius: 8px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.bento-card-gold:hover {
  box-shadow: 0 0 0 1px rgba(201, 168, 76, 0.5);
  transform: scale(1.01);
}

/* Section container */
.section-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px)  { .section-container { padding: 0 1.5rem; } }
@media (min-width: 1024px) { .section-container { padding: 0 2rem; } }
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add design tokens and global CSS (Noir Gold)"
```

---

## Task 5: Root Layout + Fonts

**Files:**
- Create: `app/layout.tsx`

- [ ] **Step 1: Create `app/layout.tsx`**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  DM_Sans,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseofbarber.com"),
  title: {
    default: "House of Barber | Premium Family Salon — Abu Dhabi",
    template: "%s | House of Barber",
  },
  description:
    "House of Barber — premium family salon and barbershop in Abu Dhabi, UAE and India. Expert grooming for men, women, and kids across 7 locations.",
  keywords: [
    "barber abu dhabi",
    "family salon abu dhabi",
    "mens haircut abu dhabi",
    "house of barber",
    "barbershop uae",
    "salon bengaluru",
  ],
  openGraph: {
    siteName: "House of Barber",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/hob/brand/hob-brand-1.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${josefin.variable}`}
    >
      <body className="font-body bg-hob-black text-hob-white">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify the build doesn't crash on layout**

```bash
cd /Users/azura/houseofbarber && npx tsc --noEmit 2>&1 | grep "layout" | head -5
```

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add root layout with Noir Gold fonts"
```

---

## Task 6: Motion + Lenis Providers

**Files:**
- Create: `components/providers/MotionProvider.tsx`, `components/providers/LenisProvider.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create `components/providers/MotionProvider.tsx`**

```tsx
// components/providers/MotionProvider.tsx
"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
```

- [ ] **Step 2: Create `components/providers/LenisProvider.tsx`**

```tsx
// components/providers/LenisProvider.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 3: Add providers to `app/layout.tsx`**

Add imports after the existing imports:

```tsx
import MotionProvider from "@/components/providers/MotionProvider";
import LenisProvider from "@/components/providers/LenisProvider";
```

Wrap `{children}` in the body:

```tsx
<body className="font-body bg-hob-black text-hob-white">
  <MotionProvider>
    <LenisProvider>
      {children}
    </LenisProvider>
  </MotionProvider>
</body>
```

- [ ] **Step 4: Commit**

```bash
git add components/providers/MotionProvider.tsx components/providers/LenisProvider.tsx app/layout.tsx
git commit -m "feat: add Framer Motion and Lenis scroll providers"
```

---

## Task 7: Motion Primitives

**Files:**
- Create: `components/motion/ScrollReveal.tsx`, `components/motion/CountUp.tsx`, `components/motion/PageTransition.tsx`

- [ ] **Step 1: Create `components/motion/ScrollReveal.tsx`**

```tsx
// components/motion/ScrollReveal.tsx
"use client";

import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Preset = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

const presets: Record<Preset, { hidden: object; visible: object }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 24 },
    visible: { opacity: 1, x: 0 },
  },
};

interface ScrollRevealProps {
  children: React.ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  preset = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  once = true,
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.1 });
  const variant = presets[preset];

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variant}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </m.div>
  );
}
```

- [ ] **Step 2: Create `components/motion/CountUp.tsx`**

```tsx
// components/motion/CountUp.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface CountUpProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1200,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const startTime = performance.now();

    function update(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}
```

- [ ] **Step 3: Create `components/motion/PageTransition.tsx`**

```tsx
// components/motion/PageTransition.tsx
"use client";

import { m } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/motion/
git commit -m "feat: add ScrollReveal, CountUp, and PageTransition motion components"
```

---

## Task 8: Navigation

**Files:**
- Create: `components/layout/Navigation.tsx`

- [ ] **Step 1: Create `components/layout/Navigation.tsx`**

```tsx
// components/layout/Navigation.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/hob-content";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <m.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-hob-black/92 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-sm tracking-[0.3em] text-hob-white uppercase"
          >
            H O B
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-[10px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-hob-gold"
                    : "text-hob-muted hover:text-hob-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Book CTA */}
          <Link
            href="#app"
            className="hidden md:inline-flex items-center px-4 py-2 border border-hob-gold text-hob-gold font-label text-[9px] tracking-[0.2em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
          >
            Book
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-hob-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </m.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-hob-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`font-heading text-3xl font-light transition-colors ${
                      pathname === item.href ? "text-hob-gold" : "text-hob-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.3 }}
              >
                <Link
                  href="#app"
                  className="mt-4 inline-flex items-center px-8 py-3 border border-hob-gold text-hob-gold font-label text-xs tracking-widest uppercase"
                >
                  Book via App
                </Link>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

> `useRef` is already included in the import above.

- [ ] **Step 2: Add Navigation to layout**

In `app/layout.tsx`, import and add `<Navigation />` inside the providers:

```tsx
import Navigation from "@/components/layout/Navigation";
// ...
<body className="font-body bg-hob-black text-hob-white">
  <MotionProvider>
    <LenisProvider>
      <Navigation />
      {children}
    </LenisProvider>
  </MotionProvider>
</body>
```

- [ ] **Step 3: Commit**

```bash
git add components/layout/Navigation.tsx app/layout.tsx
git commit -m "feat: add sticky navigation with mobile overlay"
```

---

## Task 9: Footer + FloatingBookButton

**Files:**
- Create: `components/layout/Footer.tsx`, `components/FloatingBookButton.tsx`

- [ ] **Step 1: Create `components/layout/Footer.tsx`**

```tsx
// components/layout/Footer.tsx
import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS, NAV_ITEMS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const waUrl = buildWhatsAppUrl("Hi House of Barber, I'd like to make an enquiry.");

  return (
    <footer className="bg-hob-dark border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading text-2xl tracking-[0.3em] text-hob-white uppercase mb-4">
              H O B
            </div>
            <p className="font-body text-sm text-hob-muted leading-relaxed max-w-xs">
              Premium family salon and barbershop. Precision grooming for men,
              women, and kids across Abu Dhabi and India.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/houseofbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[9px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/houseofbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[9px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
              >
                Facebook
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-[9px] tracking-widest text-hob-gold hover:text-hob-gold-lt uppercase transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* UAE Locations */}
          <div>
            <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              UAE Locations
            </p>
            <ul className="space-y-2">
              {UAE_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="font-body text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + India */}
          <div>
            <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              India Locations
            </p>
            <ul className="space-y-2 mb-8">
              {INDIA_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="font-body text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              Explore
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-body text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-label text-[9px] tracking-widest text-hob-muted uppercase">
            © {new Date().getFullYear()} House of Barber. All rights reserved.
          </p>
          <p className="font-label text-[9px] tracking-widest text-hob-muted uppercase">
            The Chair Has Always Been Yours.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Create `components/FloatingBookButton.tsx`**

```tsx
// components/FloatingBookButton.tsx
"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToApp() {
    document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToApp}
          className="fixed bottom-6 right-6 z-50 md:hidden px-5 py-3 bg-hob-gold text-hob-black font-label text-[10px] tracking-widest uppercase shadow-lg"
          aria-label="Book via app"
        >
          Book
        </m.button>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Add Footer and FloatingBookButton to layout**

In `app/layout.tsx`:

```tsx
import Footer from "@/components/layout/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
// Inside body:
<Navigation />
{children}
<Footer />
<FloatingBookButton />
```

- [ ] **Step 4: Commit**

```bash
git add components/layout/Footer.tsx components/FloatingBookButton.tsx app/layout.tsx
git commit -m "feat: add footer and floating book button"
```

---

## Task 10: Hero Section

**Files:**
- Create: `components/sections/HeroSection.tsx`

- [ ] **Step 1: Create `components/sections/HeroSection.tsx`**

```tsx
// components/sections/HeroSection.tsx
"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Parallax background */}
      <m.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/assets/hob/brand/hob-brand-1.png"
          alt="House of Barber premium salon interior"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hob-black/60 via-hob-black/40 to-hob-black" />
      </m.div>

      {/* Content */}
      <div className="section-container relative z-10 pt-16">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-hob-gold" />
          <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            House of Barber
          </span>
          <div className="h-px w-8 bg-hob-gold" />
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-normal text-hob-white leading-[1.1] max-w-2xl mb-8"
        >
          The Chair Has
          <br />
          <em className="text-hob-gold italic">Always Been</em>
          <br />
          Yours.
        </m.h1>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link
            href="#app"
            className="inline-flex items-center gap-2 px-7 py-3 border border-hob-gold text-hob-gold font-label text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 text-hob-muted font-label text-[10px] tracking-[0.25em] uppercase hover:text-hob-white transition-colors"
          >
            View Services →
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-gradient-to-b from-hob-gold to-transparent animate-pulse" />
          <span className="font-label text-[8px] tracking-[0.3em] text-hob-muted uppercase">Scroll</span>
        </m.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify the hero image path exists**

```bash
ls /Users/azura/houseofbarber/public/assets/hob/brand/ | head -5
```

If `hob-brand-1.png` doesn't exist, use the first file listed.

- [ ] **Step 3: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: add hero section with parallax and animated headline"
```

---

## Task 11: Brand Stats Section

**Files:**
- Create: `components/sections/BrandStatsSection.tsx`

- [ ] **Step 1: Create `components/sections/BrandStatsSection.tsx`**

```tsx
// components/sections/BrandStatsSection.tsx
"use client";

import CountUp from "@/components/motion/CountUp";
import ScrollReveal from "@/components/motion/ScrollReveal";

const stats = [
  { end: 7,  suffix: "",  label: "Locations", description: "Across UAE & India" },
  { end: 12, suffix: "+", label: "Years",     description: "Of precision craft" },
  { end: 22, suffix: "",  label: "Services",  description: "For the whole family" },
  { end: 5,  suffix: "★", label: "Rating",    description: "Across all branches" },
];

export default function BrandStatsSection() {
  return (
    <section className="py-20 bg-hob-dark">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="text-center mb-12">
          <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            By the numbers
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} preset="fadeUp" delay={i * 0.08}>
              <div className={`bento-card p-6 text-center ${i % 2 === 0 ? "bento-card-gold" : ""}`}>
                <div className="font-display text-4xl md:text-5xl text-hob-white mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-label text-[10px] tracking-widest text-hob-gold uppercase mb-1">
                  {stat.label}
                </div>
                <div className="font-body text-xs text-hob-muted">
                  {stat.description}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/BrandStatsSection.tsx
git commit -m "feat: add brand stats section with CountUp bento"
```

---

## Task 12: Services Bento Section

**Files:**
- Create: `components/sections/ServicesBentoSection.tsx`

- [ ] **Step 1: Create `components/sections/ServicesBentoSection.tsx`**

```tsx
// components/sections/ServicesBentoSection.tsx
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const categories = [
  {
    key: "men",
    label: "Men's",
    title: "Grooming",
    description: "Precision cuts, beard design, hot-towel shaves and more. The works.",
    count: 6,
    href: "/services?cat=men",
    span: "md:col-span-2 md:row-span-2",
    gold: true,
  },
  {
    key: "women",
    label: "Women's",
    title: "Salon",
    description: "Cuts, colour, styling, and waxing for every occasion.",
    count: 8,
    href: "/services?cat=women",
    span: "",
    gold: false,
  },
  {
    key: "kids",
    label: "Kids'",
    title: "Fun Cuts",
    description: "Gentle, fun cuts for little ones. We make it enjoyable.",
    count: 2,
    href: "/services?cat=kids",
    span: "",
    gold: false,
  },
] as const;

export default function ServicesBentoSection() {
  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            What we offer
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-hob-white">
            For the whole family.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 md:h-[400px]">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.key} preset="fadeUp" delay={i * 0.1} className={`${cat.span} h-full`}>
              <Link
                href={cat.href}
                className={`group flex flex-col justify-between p-7 h-full min-h-[180px] ${
                  cat.gold ? "bento-card-gold" : "bento-card"
                }`}
              >
                <div>
                  <span className="font-label text-[9px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                    {cat.label}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-light text-hob-white mb-3">
                    {cat.title}
                  </h3>
                  <p className="font-body text-sm text-hob-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-label text-[9px] tracking-widest text-hob-muted uppercase">
                    {cat.count} services
                  </span>
                  <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.3} className="mt-8 text-right">
          <Link
            href="/services"
            className="font-label text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            View all 22 services →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/ServicesBentoSection.tsx
git commit -m "feat: add services bento section"
```

---

## Task 13: Locations Teaser + Gallery Teaser + App Download

**Files:**
- Create: `components/sections/LocationsTeaserSection.tsx`, `components/sections/GalleryTeaserSection.tsx`, `components/sections/AppDownloadSection.tsx`

- [ ] **Step 1: Create `components/sections/LocationsTeaserSection.tsx`**

```tsx
// components/sections/LocationsTeaserSection.tsx
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { UAE_LOCATIONS } from "@/lib/hob-content";

export default function LocationsTeaserSection() {
  const featured = UAE_LOCATIONS.slice(0, 2);

  return (
    <section className="py-20 bg-hob-dark">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Find us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-hob-white">
            UAE & India.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((loc, i) => (
            <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.1}>
              <Link
                href={`/locations/${loc.id}`}
                className="bento-card group flex flex-col justify-between p-6 min-h-[180px]"
              >
                <div>
                  <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
                    Abu Dhabi
                  </span>
                  <h3 className="font-heading text-2xl font-light text-hob-white mb-2">
                    {loc.name}
                  </h3>
                  <p className="font-body text-xs text-hob-muted leading-relaxed">
                    {loc.type}
                  </p>
                </div>
                <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase mt-6 group-hover:translate-x-1 transition-transform inline-block">
                  View location →
                </span>
              </Link>
            </ScrollReveal>
          ))}

          <ScrollReveal preset="fadeUp" delay={0.2}>
            <Link
              href="/locations"
              className="bento-card-gold flex flex-col justify-between p-6 min-h-[180px]"
            >
              <div>
                <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
                  All locations
                </span>
                <h3 className="font-heading text-2xl font-light text-hob-white mb-2">
                  7 Branches
                </h3>
                <p className="font-body text-xs text-hob-muted leading-relaxed">
                  5 in UAE · 2 in India
                </p>
              </div>
              <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase mt-6">
                See all →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `components/sections/GalleryTeaserSection.tsx`**

```tsx
// components/sections/GalleryTeaserSection.tsx
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { GALLERY_IMAGES } from "@/lib/hob-content";

export default function GalleryTeaserSection() {
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12 flex justify-between items-end">
          <div>
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              The work
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-hob-white">
              See it for yourself.
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:inline font-label text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            Full gallery →
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((img, i) => (
            <ScrollReveal
              key={img.id}
              preset="fadeIn"
              delay={i * 0.07}
              className={i === 0 || i === 3 ? "md:row-span-2" : ""}
            >
              <Link href="/gallery" className="group block overflow-hidden rounded-lg">
                <div className={`relative w-full overflow-hidden ${i === 0 || i === 3 ? "h-[400px]" : "h-[190px]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-hob-black/0 group-hover:bg-hob-black/20 transition-colors duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/gallery"
            className="font-label text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            Full gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Create `components/sections/AppDownloadSection.tsx`**

```tsx
// components/sections/AppDownloadSection.tsx
"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { detectPlatform, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/device";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function AppDownloadSection() {
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <section id="app" className="py-24 bg-hob-dark border-t border-hob-gold/10">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal preset="fadeUp">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-4">
              Book smarter
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-hob-white mb-4">
              Get the app.
            </h2>
            <p className="font-body text-sm text-hob-muted leading-relaxed mb-10">
              Manage appointments, explore services, and find your nearest
              House of Barber — all from your pocket.
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <m.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col items-center px-8 py-4 border transition-all duration-200 ${
                  platform === "android"
                    ? "border-white/10 text-hob-muted opacity-50"
                    : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                }`}
              >
                <span className="font-label text-[8px] tracking-widest uppercase mb-1">
                  Download on the
                </span>
                <span className="font-heading text-xl">App Store</span>
              </m.a>

              <m.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col items-center px-8 py-4 border transition-all duration-200 ${
                  platform === "ios"
                    ? "border-white/10 text-hob-muted opacity-50"
                    : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                }`}
              >
                <span className="font-label text-[8px] tracking-widest uppercase mb-1">
                  Get it on
                </span>
                <span className="font-heading text-xl">Google Play</span>
              </m.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add components/sections/LocationsTeaserSection.tsx components/sections/GalleryTeaserSection.tsx components/sections/AppDownloadSection.tsx
git commit -m "feat: add locations teaser, gallery teaser, and app download sections"
```

---

## Task 14: Homepage Assembly

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create `app/page.tsx`**

```tsx
// app/page.tsx
import type { Metadata } from "next";
import PageTransition from "@/components/motion/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import BrandStatsSection from "@/components/sections/BrandStatsSection";
import ServicesBentoSection from "@/components/sections/ServicesBentoSection";
import LocationsTeaserSection from "@/components/sections/LocationsTeaserSection";
import GalleryTeaserSection from "@/components/sections/GalleryTeaserSection";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import { organizationSchema } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "House of Barber | Premium Family Salon — Abu Dhabi",
  description:
    "House of Barber — premium family salon and barbershop in Abu Dhabi, UAE and India. Expert grooming for men, women, and kids across 7 locations.",
  openGraph: {
    url: "https://www.houseofbarber.com",
    title: "House of Barber | Premium Family Salon — Abu Dhabi",
  },
};

export default function HomePage() {
  return (
    <PageTransition>
      <JsonLd data={organizationSchema()} />
      <main>
        <HeroSection />
        <BrandStatsSection />
        <ServicesBentoSection />
        <LocationsTeaserSection />
        <GalleryTeaserSection />
        <AppDownloadSection />
      </main>
    </PageTransition>
  );
}
```

- [ ] **Step 2: Create `components/JsonLd.tsx`**

```tsx
// components/JsonLd.tsx
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 3: Start dev server and verify homepage renders**

```bash
cd /Users/azura/houseofbarber && npm run dev
```

Open http://localhost:3000 — expect: dark page, hero with headline, stats bento, services bento, locations, gallery, app download.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components/JsonLd.tsx
git commit -m "feat: assemble homepage with all sections"
```

---

## Task 15: Services Page

**Files:**
- Create: `app/services/page.tsx`, `components/sections/services/ServiceCard.tsx`, `components/sections/services/FilterTabs.tsx`

- [ ] **Step 1: Create `components/sections/services/ServiceCard.tsx`**

```tsx
// components/sections/services/ServiceCard.tsx
import Link from "next/link";
import { Service } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ServiceCard({ service }: { service: Service }) {
  const waMessage = `Hi House of Barber, I'd like to book: ${service.title}`;
  const waUrl = buildWhatsAppUrl(waMessage);

  return (
    <div className="bento-card flex flex-col justify-between p-6 min-h-[200px]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <span className="font-label text-[8px] tracking-widest text-hob-gold uppercase px-2 py-1 border border-hob-gold/30 bg-hob-gold/5">
            {service.category}
          </span>
          <span className="font-label text-[9px] tracking-widest text-hob-muted uppercase">
            {service.duration}
          </span>
        </div>
        <h3 className="font-heading text-xl font-light text-hob-white mb-3">
          {service.title}
        </h3>
        <p className="font-body text-xs text-hob-muted leading-relaxed">
          {service.description}
        </p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center font-label text-[9px] tracking-widest text-hob-gold uppercase hover:text-hob-gold-lt transition-colors"
      >
        Book via App →
      </a>
    </div>
  );
}
```

- [ ] **Step 2: Create `components/sections/services/FilterTabs.tsx`**

```tsx
// components/sections/services/FilterTabs.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ServiceCategory } from "@/lib/hob-content";

const tabs: { label: string; value: "all" | ServiceCategory }[] = [
  { label: "All",   value: "all" },
  { label: "Men",   value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids",  value: "kids" },
];

export default function FilterTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("cat") ?? "all") as "all" | ServiceCategory;

  function setFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") params.delete("cat");
    else params.set("cat", value);
    router.push(`/services?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setFilter(tab.value)}
          className={`font-label text-[9px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
            current === tab.value
              ? "border-hob-gold bg-hob-gold text-hob-black"
              : "border-white/10 text-hob-muted hover:border-hob-gold hover:text-hob-gold"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Create `app/services/page.tsx`**

```tsx
// app/services/page.tsx
import type { Metadata } from "next";
import { Suspense } from "react";
import { SERVICES } from "@/lib/hob-content";
import ServiceCard from "@/components/sections/services/ServiceCard";
import FilterTabs from "@/components/sections/services/FilterTabs";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all services at House of Barber — precision cuts, beard design, hair colour, and more for men, women, and kids.",
  openGraph: { url: "https://www.houseofbarber.com/services" },
};

// Services page must read searchParams to filter — needs to be a client boundary via Suspense
function ServicesList({ cat }: { cat: string }) {
  const filtered =
    cat === "all" || !cat
      ? SERVICES
      : SERVICES.filter((s) => s.category === cat);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filtered.map((service, i) => (
        <ScrollReveal key={service.slug} preset="fadeUp" delay={i * 0.05}>
          <ServiceCard service={service} />
        </ScrollReveal>
      ))}
    </div>
  );
}

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat = "all" } = await searchParams;

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              What we offer
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-hob-white mb-8">
              Services.
            </h1>
            <Suspense fallback={null}>
              <FilterTabs />
            </Suspense>
          </ScrollReveal>

          <ServicesList cat={cat} />
        </div>
      </main>
    </PageTransition>
  );
}
```

> `SERVICES` is already exported from `lib/hob-content.ts` as `export const SERVICES: Service[]`.

- [ ] **Step 4: Commit**

```bash
git add app/services/ components/sections/services/ lib/hob-content.ts
git commit -m "feat: add services page with filter tabs"
```

---

## Task 16: Locations Pages

**Files:**
- Create: `app/locations/page.tsx`, `app/locations/[slug]/page.tsx`

- [ ] **Step 1: Create `app/locations/page.tsx`**

```tsx
// app/locations/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find a House of Barber near you — 5 locations across Abu Dhabi UAE and 2 in India (Bengaluru and Kochi).",
  openGraph: { url: "https://www.houseofbarber.com/locations" },
};

function LocationCard({ loc }: { loc: (typeof UAE_LOCATIONS)[0] }) {
  return (
    <Link
      href={`/locations/${loc.id}`}
      className="bento-card group flex flex-col justify-between p-6 min-h-[180px]"
    >
      <div>
        <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {loc.type}
        </span>
        <h3 className="font-heading text-2xl font-light text-hob-white mb-2">
          {loc.name}
        </h3>
        <p className="font-body text-xs text-hob-muted leading-relaxed line-clamp-2">
          {loc.address}
        </p>
      </div>
      <span className="font-label text-[9px] tracking-widest text-hob-gold uppercase mt-4 group-hover:translate-x-1 transition-transform inline-block">
        View details →
      </span>
    </Link>
  );
}

export default function LocationsPage() {
  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Locations", href: "/locations" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              Find us
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-hob-white">
              Our Locations.
            </h1>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.1} className="mb-4">
            <span className="font-label text-[10px] tracking-widest text-hob-muted uppercase">
              UAE — Abu Dhabi
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {UAE_LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.07}>
                <LocationCard loc={loc} />
              </ScrollReveal>
            ))}
          </div>

          <div className="gold-rule mb-12" />

          <ScrollReveal preset="fadeUp" className="mb-4">
            <span className="font-label text-[10px] tracking-widest text-hob-muted uppercase">
              India
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDIA_LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.07}>
                <LocationCard loc={loc} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
```

- [ ] **Step 2: Create `app/locations/[slug]/page.tsx`**

```tsx
// app/locations/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";
import PageTransition from "@/components/motion/PageTransition";
import ScrollReveal from "@/components/motion/ScrollReveal";

const ALL_LOCATIONS = [...UAE_LOCATIONS, ...INDIA_LOCATIONS];

export function generateStaticParams() {
  return ALL_LOCATIONS.map((loc) => ({ slug: loc.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = ALL_LOCATIONS.find((l) => l.id === slug);
  if (!loc) return {};
  return {
    title: loc.name,
    description: `${loc.type} at ${loc.address}. Book your appointment at House of Barber ${loc.name}.`,
    openGraph: { url: `https://www.houseofbarber.com/locations/${loc.id}` },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = ALL_LOCATIONS.find((l) => l.id === slug);
  if (!loc) notFound();

  const waUrl = buildWhatsAppUrl(
    `Hi House of Barber, I'd like to book at ${loc.name}.`
  );
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(loc.address)}`;

  return (
    <PageTransition>
      <JsonLd data={localBusinessSchema(loc)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Locations", href: "/locations" },
        { name: loc.name, href: `/locations/${loc.id}` },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container max-w-3xl">
          <ScrollReveal preset="fadeUp">
            <Link
              href="/locations"
              className="font-label text-[9px] tracking-widest text-hob-muted uppercase hover:text-hob-gold transition-colors inline-block mb-8"
            >
              ← All locations
            </Link>
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {loc.type}
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-hob-white mb-8">
              {loc.name}
            </h1>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bento-card p-6">
                <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-2">
                  Address
                </p>
                <p className="font-body text-sm text-hob-white leading-relaxed">
                  {loc.address}
                </p>
              </div>
              {loc.phone && (
                <div className="bento-card p-6">
                  <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${loc.phone}`}
                    className="font-body text-sm text-hob-white hover:text-hob-gold transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-hob-gold text-hob-gold font-label text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
              >
                Book via WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/10 text-hob-muted font-label text-[10px] tracking-[0.25em] uppercase hover:border-hob-gold hover:text-hob-gold transition-all"
              >
                Open in Maps →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </PageTransition>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/locations/
git commit -m "feat: add locations overview and detail pages"
```

---

## Task 17: Gallery Page

**Files:**
- Create: `app/gallery/page.tsx`, `components/sections/gallery/GalleryGrid.tsx`, `components/sections/gallery/Lightbox.tsx`

- [ ] **Step 1: Create `components/sections/gallery/Lightbox.tsx`**

```tsx
// components/sections/gallery/Lightbox.tsx
"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/lib/hob-content";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const image = currentIndex !== null ? images[currentIndex] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {image && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-hob-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-hob-muted hover:text-hob-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 p-3 text-hob-muted hover:text-hob-gold"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <m.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-auto mx-auto"
              priority
            />
            <p className="text-center font-body text-xs text-hob-muted mt-4">
              {image.alt}
            </p>
          </m.div>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 p-3 text-hob-muted hover:text-hob-gold"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Create `components/sections/gallery/GalleryGrid.tsx`**

```tsx
// components/sections/gallery/GalleryGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, GalleryCategory } from "@/lib/hob-content";
import Lightbox from "./Lightbox";

const filters: { label: string; value: GalleryCategory }[] = [
  { label: "All",      value: "all" },
  { label: "Haircuts", value: "haircuts" },
  { label: "Beards",   value: "beards" },
  { label: "Colour",   value: "color" },
  { label: "Kids",     value: "kids" },
  { label: "Interior", value: "interior" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = GALLERY_IMAGES.filter((img) =>
    img.categories.includes(active)
  );

  function openLightbox(id: string) {
    const idx = filtered.findIndex((img) => img.id === id);
    setLightboxIndex(idx);
  }

  return (
    <>
      {/* Filter bar */}
      <div className="flex gap-2 flex-wrap mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-label text-[9px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
              active === f.value
                ? "border-hob-gold bg-hob-gold text-hob-black"
                : "border-white/10 text-hob-muted hover:border-hob-gold hover:text-hob-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <m.button
              key={img.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightbox(img.id)}
              className="group block w-full overflow-hidden rounded-lg break-inside-avoid mb-3"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hob-black/0 group-hover:bg-hob-black/30 transition-colors duration-300" />
              </div>
            </m.button>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        images={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((i) =>
            i !== null ? (i - 1 + filtered.length) % filtered.length : null
          )
        }
        onNext={() =>
          setLightboxIndex((i) =>
            i !== null ? (i + 1) % filtered.length : null
          )
        }
      />
    </>
  );
}
```

- [ ] **Step 3: Create `app/gallery/page.tsx`**

```tsx
// app/gallery/page.tsx
import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the House of Barber gallery — haircuts, beard styling, hair colour, kids cuts, and salon interiors across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/gallery" },
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Gallery", href: "/gallery" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              The work
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-hob-white">
              Gallery.
            </h1>
          </ScrollReveal>
          <GalleryGrid />
        </div>
      </main>
    </PageTransition>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/gallery/ components/sections/gallery/
git commit -m "feat: add gallery page with masonry grid, filters, and lightbox"
```

---

## Task 18: About Page

**Files:**
- Create: `app/about/page.tsx`

- [ ] **Step 1: Create `app/about/page.tsx`**

```tsx
// app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { HOB_BRAND_ASSETS } from "@/lib/hob-brand-assets";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about House of Barber — our heritage, values, and commitment to premium family grooming across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/about" },
};

const values = [
  { title: "Precision",  desc: "Every cut is intentional. Every line, considered." },
  { title: "Craft",      desc: "We've spent years perfecting techniques that last." },
  { title: "Family",     desc: "A space for everyone — men, women, and kids." },
  { title: "Legacy",     desc: "12+ years of trust built chair by chair." },
];

export default function AboutPage() {
  // Use first available brand asset
  const heroAsset = HOB_BRAND_ASSETS[0];

  return (
    <PageTransition>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          {/* Hero */}
          <ScrollReveal preset="fadeUp" className="mb-20 max-w-3xl">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-4">
              Our story
            </span>
            <h1 className="font-heading text-5xl md:text-7xl font-light text-hob-white leading-[1.1] mb-8">
              More than a haircut.
              <br />
              <em className="text-hob-gold italic">A tradition.</em>
            </h1>
            <p className="font-body text-base text-hob-muted leading-relaxed max-w-xl">
              House of Barber was founded on a simple belief: that a great grooming
              experience should be available to every member of the family. Across
              our seven locations, we bring precision, warmth, and craft together
              — every single visit.
            </p>
          </ScrollReveal>

          {/* Brand image */}
          {heroAsset && (
            <ScrollReveal preset="fadeIn" className="mb-20">
              <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-lg">
                <Image
                  src={heroAsset.src}
                  alt={heroAsset.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hob-black/60 to-transparent" />
              </div>
            </ScrollReveal>
          )}

          {/* Values bento */}
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-8">
              What we stand for
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} preset="fadeUp" delay={i * 0.08}>
                <div className={`p-6 min-h-[160px] flex flex-col justify-between ${i % 2 === 0 ? "bento-card-gold" : "bento-card"}`}>
                  <h3 className="font-heading text-2xl font-light text-hob-white">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-hob-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
```

> **Note:** Check the actual export from `lib/hob-brand-assets.ts` — if it's not `HOB_BRAND_ASSETS`, update the import accordingly.

- [ ] **Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add about page with editorial layout and values bento"
```

---

## Task 19: Contact Page

**Files:**
- Create: `app/contact/page.tsx`, `components/sections/contact/ContactForm.tsx`

- [ ] **Step 1: Create `components/sections/contact/ContactForm.tsx`**

```tsx
// components/sections/contact/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl, buildBookingMessage } from "@/lib/whatsapp";

const schema = z.object({
  name:     z.string().min(2, "Name must be at least 2 characters"),
  phone:    z.string().min(7, "Enter a valid phone number"),
  location: z.string().min(1, "Please select a location"),
  message:  z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const allLocations = [...UAE_LOCATIONS, ...INDIA_LOCATIONS];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    const text = buildBookingMessage({
      name: data.name,
      phone: data.phone,
      location: data.location,
      message: data.message ?? "",
    });
    const url = buildWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-lg">
      <div>
        <label className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          Name
        </label>
        <input
          {...register("name")}
          placeholder="Your name"
          className="w-full bg-transparent border border-white/10 px-4 py-3 font-body text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors"
        />
        {errors.name && (
          <p className="font-body text-xs text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          Phone
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+971 50 000 0000"
          className="w-full bg-transparent border border-white/10 px-4 py-3 font-body text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors"
        />
        {errors.phone && (
          <p className="font-body text-xs text-red-400 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          Preferred Location
        </label>
        <select
          {...register("location")}
          className="w-full bg-hob-dark border border-white/10 px-4 py-3 font-body text-sm text-hob-white focus:outline-none focus:border-hob-gold transition-colors appearance-none"
        >
          <option value="">Select a location</option>
          <optgroup label="UAE">
            {UAE_LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.name}>{loc.name}</option>
            ))}
          </optgroup>
          <optgroup label="India">
            {INDIA_LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.name}>{loc.name}</option>
            ))}
          </optgroup>
        </select>
        {errors.location && (
          <p className="font-body text-xs text-red-400 mt-1">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="font-label text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          Message (optional)
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Any preferences or questions?"
          className="w-full bg-transparent border border-white/10 px-4 py-3 font-body text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 border border-hob-gold text-hob-gold font-label text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
      >
        Send via WhatsApp →
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Create `app/contact/page.tsx`**

```tsx
// app/contact/page.tsx
import type { Metadata } from "next";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ContactForm from "@/components/sections/contact/ContactForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with House of Barber — enquire about services, locations, or book an appointment via WhatsApp.",
  openGraph: { url: "https://www.houseofbarber.com/contact" },
};

export default function ContactPage() {
  const directWa = buildWhatsAppUrl("Hi House of Barber, I have an enquiry.");

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-label text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              Get in touch
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-light text-hob-white mb-4">
              Contact.
            </h1>
            <p className="font-body text-sm text-hob-muted max-w-md leading-relaxed">
              Fill in the form and we'll open WhatsApp with your message
              pre-filled — or reach us directly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal preset="fadeUp" delay={0.1}>
              <ContactForm />
            </ScrollReveal>

            {/* Direct links */}
            <ScrollReveal preset="fadeUp" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-4">
                    Direct WhatsApp
                  </p>
                  <a
                    href={directWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-body text-sm text-hob-white hover:text-hob-gold transition-colors"
                  >
                    Chat with us →
                  </a>
                </div>

                <div>
                  <p className="font-label text-[9px] tracking-widest text-hob-gold uppercase mb-4">
                    All Locations
                  </p>
                  <ul className="space-y-3">
                    {[...UAE_LOCATIONS, ...INDIA_LOCATIONS].map((loc) => (
                      <li key={loc.id}>
                        <p className="font-body text-sm text-hob-white">{loc.name}</p>
                        <p className="font-body text-xs text-hob-muted leading-relaxed">{loc.address}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/contact/ components/sections/contact/
git commit -m "feat: add contact page with WhatsApp-linked form"
```

---

## Task 20: Sitemap + Robots

**Files:**
- Create: `app/sitemap.ts`, `app/robots.ts`

- [ ] **Step 1: Create `app/sitemap.ts`**

```ts
// app/sitemap.ts
import { MetadataRoute } from "next";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";

const BASE = "https://www.houseofbarber.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/services", "/locations", "/gallery", "/about", "/contact"].map(
    (route) => ({
      url: `${BASE}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    })
  );

  const locationRoutes = [...UAE_LOCATIONS, ...INDIA_LOCATIONS].map((loc) => ({
    url: `${BASE}/locations/${loc.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes];
}
```

- [ ] **Step 2: Create `app/robots.ts`**

```ts
// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.houseofbarber.com/sitemap.xml",
  };
}
```

- [ ] **Step 3: Commit**

```bash
git add app/sitemap.ts app/robots.ts
git commit -m "feat: add sitemap.xml and robots.txt generation"
```

---

## Task 21: Final Build Verification

- [ ] **Step 1: Run TypeScript check**

```bash
cd /Users/azura/houseofbarber && npx tsc --noEmit 2>&1
```

Expected: 0 errors. Fix any type errors before continuing.

- [ ] **Step 2: Run linter**

```bash
cd /Users/azura/houseofbarber && npm run lint 2>&1
```

Expected: no errors. Fix any linting issues.

- [ ] **Step 3: Run production build**

```bash
cd /Users/azura/houseofbarber && npm run build 2>&1
```

Expected: build completes successfully, all routes listed (/, /services, /locations, /locations/[slug], /gallery, /about, /contact, /sitemap.xml, /robots.txt).

- [ ] **Step 4: Spot-check responsive layout**

Start dev server (`npm run dev`) and check these breakpoints in browser DevTools:
- 375px (iPhone SE) — nav collapses to hamburger, all sections single column, no horizontal overflow
- 768px (iPad) — 2-col bento grids appear, desktop nav links visible
- 1280px (desktop) — 3–4 col layouts, full nav with Book CTA

- [ ] **Step 5: Check reduced motion**

In browser DevTools → Rendering → Emulate CSS media feature `prefers-reduced-motion: reduce`. Verify page loads without animations but content is still fully readable and usable.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "chore: final build verification and cleanup"
```

---

## Common Issues & Fixes

**`useRef` not imported in Navigation.tsx** — add `useRef` to the React import line.

**SERVICES not exported from hob-content.ts** — grep for the actual export name. It may be an array named differently. Combine all service arrays manually if needed.

**HOB_BRAND_ASSETS export shape** — check `lib/hob-brand-assets.ts` for the actual export. It may be an array of `{src, alt}` objects or a different shape. Update the About page import accordingly.

**`bento-card` hover not working on mobile** — the `:hover` selector doesn't fire reliably on touch. This is acceptable; tap interactions still work.

**Lenis conflicts with Next.js scroll restoration** — if you see double-scroll behaviour, add `history.scrollRestoration = 'manual'` in the LenisProvider useEffect.

**Font CSS variables not resolving** — ensure the `@theme` block in `globals.css` uses `--font-display: var(--font-playfair)` and that `font-display` maps to the Tailwind utility `font-display`. If not, add to `@theme`: `--font-family-display: var(--font-playfair)` etc and use `font-[family-name:var(--font-playfair)]` as fallback.
