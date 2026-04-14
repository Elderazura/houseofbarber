"use client";

import { Suspense } from "react";
import { SERVICES } from "@/lib/hob-content";
import ServiceCard from "./ServiceCard";
import FilterTabs from "./FilterTabs";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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

export default function ServicesContent({ cat }: { cat: string }) {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.servicesPage.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white mb-8">
              {t.servicesPage.heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
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
