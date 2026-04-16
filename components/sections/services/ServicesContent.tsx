"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/lib/hob-content";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import FilterTabs from "./FilterTabs";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ServicesList() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("cat") ?? "all";
  const filtered =
    cat === "all"
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ServicesContent({ cat: _cat }: { cat?: string }) {
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
          <Suspense fallback={null}>
            <ServicesList />
          </Suspense>

          <section className="mt-20">
            <ScrollReveal preset="fadeUp" className="mb-8">
              <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                Signature Packages
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
                Curated sessions for a complete look.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Executive Refresh",
                  duration: "75 min",
                  description:
                    "Precision haircut, beard detailing, and finishing style with a consultation-first approach.",
                  image: "/Banner/Barber_style.jpg",
                },
                {
                  title: "Family Salon Ritual",
                  duration: "90 min",
                  description:
                    "A premium family appointment block for women and kids with coordinated styling and care.",
                  image: "/Banner/haircut.jpg",
                },
                {
                  title: "Occasion Grooming",
                  duration: "60 min",
                  description:
                    "Last-mile grooming for events: cut refinement, texture work, beard shape, and final set.",
                  image: "/Banner/exterior.jpg",
                },
              ].map((pack, i) => (
                <ScrollReveal key={pack.title} preset="fadeUp" delay={i * 0.08}>
                  <article className="bento-card overflow-hidden h-full">
                    <div className="relative h-40">
                      <Image src={pack.image} alt={pack.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-hob-black/70 to-hob-black/10" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">{pack.title}</h3>
                        <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase">
                          {pack.duration}
                        </span>
                      </div>
                      <p className="text-sm text-hob-muted leading-relaxed">{pack.description}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <ScrollReveal preset="fadeUp" className="bento-card p-7 md:p-8">
              <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                Our Service Journey
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-hob-white mb-6">
                Structured, calm, and detail-focused.
              </h2>
              <ol className="space-y-4">
                {[
                  ["Consult", "We start with style goals, face shape, and hair behavior."],
                  ["Craft", "Your service is performed with precise technique and premium products."],
                  ["Finish", "Final checks, styling guidance, and aftercare recommendations."],
                ].map(([step, detail]) => (
                  <li key={step} className="border-l border-hob-gold/30 pl-4">
                    <p className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-gold uppercase mb-1">{step}</p>
                    <p className="text-sm text-hob-muted leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ol>
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.1} className="relative overflow-hidden rounded-xl border border-hob-gold/20 min-h-[320px]">
              <Image
                src="/Banner/shop_interior.jpg"
                alt="Premium service experience at House of Barber"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hob-black via-hob-black/30 to-transparent" />
              <div className="absolute bottom-0 p-7">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-3">
                  Crafted for repeat confidence.
                </p>
                <p className="text-sm text-hob-muted max-w-md">
                  Every visit is designed to be consistent, personal, and visibly premium from the first minute.
                </p>
              </div>
            </ScrollReveal>
          </section>

          <ScrollReveal preset="fadeUp" className="mt-16">
            <section className="bento-card-gold p-8 md:p-10">
              <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                Ready To Book
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white max-w-2xl">
                Choose your service, pick your slot, and walk in assured.
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="#app"
                  className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
                >
                  Book via App
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
                >
                  Talk to Team
                </Link>
              </div>
            </section>
          </ScrollReveal>
        </div>
      </main>
    </PageTransition>
  );
}
