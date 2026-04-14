"use client";

import CountUp from "@/components/motion/CountUp";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const statsData = [
  { end: 7,  suffix: "",  key: "Locations" as const },
  { end: 12, suffix: "+", key: "Years" as const },
  { end: 22, suffix: "",  key: "Services" as const },
  { end: 5,  suffix: "★", key: "Rating" as const },
];

export default function BrandStatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-hob-dark">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="text-center mb-12">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            {t.stats.eyebrow}
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statsData.map((stat, i) => (
            <ScrollReveal key={stat.key} preset="fadeUp" delay={i * 0.08}>
              <div className={`p-6 text-center ${i % 2 === 0 ? "bento-card-gold" : "bento-card"}`}>
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-hob-white mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-gold uppercase mb-1">
                  {t.stats.labels[stat.key]}
                </div>
                <div className="text-xs text-hob-muted">
                  {t.stats.descriptions[stat.key]}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
