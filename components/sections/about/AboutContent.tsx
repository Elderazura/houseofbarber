"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutContent() {
  const { t } = useLanguage();
  const timeline = [
    {
      year: "2018",
      title: "House of Barber Founded",
      body: "Launched with a premium men-first grooming concept focused on consistency, craft, and hospitality.",
    },
    {
      year: "2019",
      title: "Abu Dhabi Footprint Expanded",
      body: "Multiple UAE branches opened to bring the same service benchmark across neighborhoods.",
    },
    {
      year: "2021",
      title: "Family Salon Format Introduced",
      body: "Services expanded for women and kids, evolving into a full family grooming destination.",
    },
    {
      year: "2023",
      title: "India Presence Added",
      body: "Operations expanded to Bengaluru and Kochi with the same House of Barber standards.",
    },
    {
      year: "2024",
      title: "Coffee & Barber Model Debuted",
      body: "Cafe-led experience launched at WTC Abu Dhabi and Edappally Kochi with lounge seating, coffee, and snacks.",
    },
    {
      year: "Today",
      title: "7 Branches, One Service Standard",
      body: "Every branch runs on consultation-led service, premium products, hygiene rigor, and finishing excellence.",
    },
  ];

  return (
    <PageTransition>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-20 max-w-3xl">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-4">
              {t.about.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal text-hob-white leading-[1.1] mb-8">
              {t.about.heading1}
              <br />
              <em className="text-hob-gold italic">{t.about.headingItalic}</em>
            </h1>
            <p className="text-base text-hob-muted leading-relaxed max-w-xl mb-4">
              {t.about.body1}
            </p>
            <p className="text-base text-hob-muted leading-relaxed max-w-xl">
              {t.about.body2}
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fadeIn" className="mb-20">
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden rounded-lg">
              <Image
                src="/assets/hob/brand/hob-brand-identity-1.png"
                alt="House of Barber — premium salon experience"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hob-black/60 to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" className="mb-8">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block">
              {t.about.valuesEyebrow}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.about.values.map((v, i) => (
              <ScrollReveal key={v.title} preset="fadeUp" delay={i * 0.08}>
                <div className={`p-6 min-h-[160px] flex flex-col justify-between ${i % 2 === 0 ? "bento-card-gold" : "bento-card"}`}>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">
                    {v.title}
                  </h3>
                  <p className="text-sm text-hob-muted leading-relaxed">
                    {v.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <section className="mt-20">
            <ScrollReveal preset="fadeUp" className="mb-8">
              <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                Our Journey
              </span>
              <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
                Full timeline of House of Barber.
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year + item.title} preset="fadeUp" delay={i * 0.05}>
                  <article className="bento-card p-6 md:p-7 grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 items-start">
                    <div className="font-[family-name:var(--font-cormorant)] text-3xl text-hob-gold">{item.year}</div>
                    <div>
                      <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-hob-muted leading-relaxed">{item.body}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ScrollReveal preset="fadeUp" className="relative min-h-[300px] overflow-hidden rounded-xl border border-hob-gold/20">
              <Image src="/Banner/shop_interior.jpg" alt="House of Barber salon interior" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-hob-black/80 via-hob-black/30 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white">
                  Craft, culture, and consistency.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.1} className="bento-card-gold p-7 md:p-8">
              <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase block mb-3">
                Today at a glance
              </span>
              <ul className="space-y-3 text-sm md:text-base text-hob-muted leading-relaxed">
                <li>• 7 operating branches across UAE and India</li>
                <li>• Family-friendly service model: men, women, and kids</li>
                <li>• Coffee & Barber live at WTC Abu Dhabi and Edappally Kochi</li>
                <li>• Consultation-first approach with premium finishing standards</li>
              </ul>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/locations"
                  className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
                >
                  Explore Locations
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
                >
                  View Services
                </Link>
              </div>
            </ScrollReveal>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
