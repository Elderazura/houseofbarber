import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about House of Barber — our heritage, values, and commitment to premium family grooming across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/about" },
};

const values = [
  { title: "Precision",  desc: "Every cut is intentional. Every line, considered." },
  { title: "Craft",      desc: "We've spent years perfecting techniques that last." },
  { title: "Family",     desc: "A space for everyone — men, women, and kids." },
  { title: "Legacy",     desc: "12+ years of trust built chair by chair." },
];

export default function AboutPage() {
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
              Our story
            </span>
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-normal text-hob-white leading-[1.1] mb-8">
              More than a haircut.
              <br />
              <em className="text-hob-gold italic">A tradition.</em>
            </h1>
            <p className="text-base text-hob-muted leading-relaxed max-w-xl">
              House of Barber was founded on a simple belief: that a great grooming
              experience should be available to every member of the family. Across
              our seven locations, we bring precision, warmth, and craft together
              — every single visit.
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
              What we stand for
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} preset="fadeUp" delay={i * 0.08}>
                <div className={`p-6 min-h-[160px] flex flex-col justify-between ${i % 2 === 0 ? "bento-card-gold" : "bento-card"}`}>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">
                    {v.title}
                  </h3>
                  <p className="text-sm text-hob-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
