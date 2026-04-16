"use client";

import Image from "next/image";
import GalleryGrid from "./GalleryGrid";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function GalleryContent() {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Gallery", href: "/gallery" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.galleryPage.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white">
              {t.galleryPage.heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
            <p className="mt-4 text-sm md:text-base text-hob-muted max-w-2xl leading-relaxed">
              A curated visual edit of cuts, texture work, beard detailing, color artistry, and signature interiors across our locations.
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.08} className="mb-10">
            <div className="relative h-[34vh] min-h-[240px] overflow-hidden rounded-2xl border border-hob-gold/25">
              <Image src="/Banner/Barber_style.jpg" alt="House of Barber gallery banner" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-hob-black/70 via-hob-black/35 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8 max-w-2xl">
                <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white leading-tight">
                  Fresh looks, premium execution.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <GalleryGrid />
        </div>
      </main>
    </PageTransition>
  );
}
