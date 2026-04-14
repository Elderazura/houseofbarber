import type { Metadata } from "next";
import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS, Location } from "@/lib/hob-content";
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

function LocationCard({ loc }: { loc: Location }) {
  return (
    <Link
      href={`/locations/${loc.id}`}
      className="bento-card group flex flex-col justify-between p-6 min-h-[180px]"
    >
      <div>
        <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {loc.type}
        </span>
        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white mb-2">
          {loc.name}
        </h3>
        <p className="text-xs text-hob-muted leading-relaxed line-clamp-2">
          {loc.address}
        </p>
      </div>
      <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mt-4 group-hover:translate-x-1 transition-transform inline-block">
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
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              Find us
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white">
              Our Locations.
            </h1>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.1} className="mb-4">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted uppercase">
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
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted uppercase">
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
