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
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            By the numbers
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} preset="fadeUp" delay={i * 0.08}>
              <div className={`p-6 text-center ${i % 2 === 0 ? "bento-card-gold" : "bento-card"}`}>
                <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-hob-white mb-2">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-gold uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-hob-muted">
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
