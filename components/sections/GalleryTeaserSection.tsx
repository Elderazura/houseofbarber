"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { GALLERY_IMAGES } from "@/lib/hob-content";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function GalleryTeaserSection() {
  const { t, locale } = useLanguage();
  const chips =
    locale === "ar"
      ? ["قصات", "لحية", "صبغة", "أطفال", "الديكور"]
      : ["Cuts", "Beard", "Color", "Kids", "Interiors"];
  const ctaLabel = locale === "ar" ? "استكشف المعرض الكامل" : "Explore the full gallery";

  const curated = [2, 7, 10, 14, 21, 30, 24, 31]
    .map((i) => GALLERY_IMAGES[i])
    .filter((img) => Boolean(img?.src));

  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-8 md:mb-12">
          <div className="max-w-3xl">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.gallery.eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white leading-tight">
              {t.gallery.heading}
            </h2>
            <p className="mt-4 text-sm md:text-base text-hob-muted leading-relaxed max-w-2xl">
              {locale === "ar"
                ? "لقطات منتقاة من القصات المميزة، تهذيب اللحية، الألوان، ومساحات الصالون - لتعكس مستوى الحِرفة في كل زيارة."
                : "A curated look at signature cuts, sculpted beards, colour work, and interiors - crafted to reflect the House of Barber standard in every frame."}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal preset="fadeUp" delay={0.08} className="mb-6 md:mb-8 flex flex-wrap gap-2.5">
          {chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-full border border-hob-gold/35 bg-[rgba(200,168,110,0.08)] px-3.5 py-1.5 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.22em] uppercase text-hob-gold/95"
            >
              {chip}
            </span>
          ))}
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {curated.map((img, i) => (
            <ScrollReveal key={`${img.id}-${i}`} preset="fadeIn" delay={i * 0.06}>
              <Link
                href="/gallery"
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]"
              >
                <div className="relative w-full overflow-hidden aspect-[4/5] md:aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,8,0.02)_0%,rgba(8,8,8,0.62)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                    <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.2em] uppercase text-white/80">
                      {chips[i % chips.length]}
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.2} className="mt-8 md:mt-10">
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-3 rounded-full border border-hob-gold/40 bg-[rgba(200,168,110,0.08)] px-5 py-2.5 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.2em] uppercase text-hob-gold transition-all duration-300 hover:border-hob-gold hover:bg-[rgba(200,168,110,0.16)]"
          >
            <span>{ctaLabel}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
