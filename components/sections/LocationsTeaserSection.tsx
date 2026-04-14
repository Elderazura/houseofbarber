import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { UAE_LOCATIONS } from "@/lib/hob-content";

export default function LocationsTeaserSection() {
  const featured = UAE_LOCATIONS.slice(0, 2);

  return (
    <section className="py-20 bg-hob-dark">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Find us
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
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
                  <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
                    Abu Dhabi
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-hob-muted leading-relaxed">
                    {loc.type}
                  </p>
                </div>
                <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-6 group-hover:translate-x-1 transition-transform inline-block">
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
                <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
                  All locations
                </span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
                  7 Branches
                </h3>
                <p className="text-xs text-hob-muted leading-relaxed">
                  5 in UAE · 2 in India
                </p>
              </div>
              <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-6">
                See all →
              </span>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
