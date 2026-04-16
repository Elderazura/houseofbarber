"use client";

import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS, Location } from "@/lib/hob-content";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function LocationCard({ loc, viewDetails }: { loc: Location; viewDetails: string }) {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;
  const isCafeEnabled = loc.type.includes("Cafe");

  return (
    <article className="bento-card group flex flex-col justify-between p-6 min-h-[250px]">
      <div>
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block">
            {loc.type}
          </span>
          {isCafeEnabled ? (
            <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-[0.2em] text-hob-gold uppercase px-2 py-1 border border-hob-gold/30 bg-hob-gold/5">
              Coffee & Barber
            </span>
          ) : null}
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
          {loc.name}
        </h3>
        <p className="text-xs text-hob-muted leading-relaxed">
          {loc.address}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-3 py-2 border border-hob-gold/40 text-hob-gold hover:bg-hob-gold hover:text-hob-black transition-colors"
        >
          Open Map
        </a>
        {loc.phone ? (
          <a
            href={`tel:${loc.phone}`}
            className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-3 py-2 border border-hob-gold/40 text-hob-gold hover:bg-hob-gold hover:text-hob-black transition-colors"
          >
            Call
          </a>
        ) : null}
        <Link
          href={`/locations/${loc.id}`}
          className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase px-3 py-2 border border-transparent hover:border-hob-gold/40 transition-colors"
        >
          {viewDetails}
        </Link>
      </div>
    </article>
  );
}

export default function LocationsContent() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Locations", href: "/locations" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.locationsPage.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white">
              {t.locationsPage.heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.08} className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bento-card p-5">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white">7</p>
                <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-1">Total Branches</p>
              </div>
              <div className="bento-card p-5">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white">2</p>
                <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-1">Coffee & Barber Stores</p>
              </div>
              <div className="bento-card-gold p-5">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white">24/7</p>
                <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-1">Maps & Contact Access</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.1} className="mb-4">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted uppercase">
              {t.locationsPage.uae}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {UAE_LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.07}>
                <LocationCard loc={loc} viewDetails={t.locationsPage.viewDetails} />
              </ScrollReveal>
            ))}
          </div>

          <div className="gold-rule mb-12" />

          <ScrollReveal preset="fadeUp" className="mb-4">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted uppercase">
              {t.locationsPage.india}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INDIA_LOCATIONS.map((loc, i) => (
              <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.07}>
                <LocationCard loc={loc} viewDetails={t.locationsPage.viewDetails} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
