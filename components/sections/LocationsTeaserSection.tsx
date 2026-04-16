"use client";

import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { UAE_LOCATIONS } from "@/lib/hob-content";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LocationsTeaserSection() {
  const { t } = useLanguage();
  const featured = UAE_LOCATIONS.slice(0, 4);

  return (
    <section className="py-20 bg-hob-dark">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            {t.locations.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            {t.locations.heading.split("\n").map((line, i, arr) => (
              <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
            ))}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {featured.map((loc, i) => (
            <ScrollReveal key={loc.id} preset="fadeUp" delay={i * 0.1}>
              <article className="group rounded-xl border border-hob-gold/30 bg-gradient-to-b from-hob-dark/80 via-hob-black/80 to-hob-black p-6 min-h-[250px] shadow-[0_18px_44px_rgba(0,0,0,0.32)] transition-all duration-300 hover:border-hob-gold/60 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block">
                      {t.locations.uae}
                    </span>
                    <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-[0.22em] text-hob-muted uppercase">
                      {t.locations.phone}
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-hob-muted leading-relaxed mb-3">
                    {loc.type}
                  </p>
                  <p className="text-[11px] text-hob-muted leading-relaxed">
                    {loc.address}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {loc.phone ? (
                    <a
                      href={`tel:${loc.phone}`}
                      className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-3 py-2 border border-hob-gold/40 text-hob-gold hover:bg-hob-gold hover:text-hob-black transition-colors"
                    >
                      Call
                    </a>
                  ) : null}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-3 py-2 border border-hob-gold/40 text-hob-gold hover:bg-hob-gold hover:text-hob-black transition-colors"
                  >
                    Map
                  </a>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase px-3 py-2 border border-transparent hover:border-hob-gold/40 transition-colors"
                  >
                    {t.locations.viewLocation}
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}

          <ScrollReveal preset="fadeUp" delay={0.4}>
            <Link
              href="/locations"
              className="bento-card-gold flex flex-col justify-between p-6 min-h-[250px]"
            >
              <div>
                <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
                  {t.locations.eyebrow}
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
                  7 Branches
                </h3>
                <p className="text-xs text-hob-muted leading-relaxed">
                  5 in UAE · 2 in India
                </p>
              </div>
              <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-6">
                {t.locations.viewAll}
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
