"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const featureImages = [
  "/coffeenbarber/DUB00359.jpg",
  "/coffeenbarber/DUB00383 2.jpg",
  "/coffeenbarber/DUB00496 2.jpg",
];

export default function CoffeeBarberTeaserSection() {
  return (
    <section id="coffee-barber" className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-6">
          <Link href="/coffee-barber" className="block">
            <div className="relative h-[34vh] min-h-[240px] overflow-hidden rounded-2xl border border-hob-gold/25">
              <Image src="/coffeenbarber/DUB00594 2.jpg" alt="Coffee and Barber banner" fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-hob-black/70 via-hob-black/30 to-transparent" />
              <div className="absolute bottom-0 p-6 md:p-8 max-w-2xl">
                <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-2">
                  New Experience
                </span>
                <p className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white leading-tight">
                  Coffee & Barber at House of Barber
                </p>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        <ScrollReveal preset="fadeUp" className="mb-10 max-w-3xl">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Coffee & Barber
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Premium grooming, cafe comfort, one destination.
          </h2>
          <p className="mt-4 text-sm md:text-base text-hob-muted leading-relaxed max-w-2xl">
            Our WTC Abu Dhabi and Edappally Kochi locations now feature an in-house cafe with excellent
            coffee, curated snacks, and a refined seating lounge while you wait or unwind post-service.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {featureImages.map((src, i) => (
            <ScrollReveal key={src} preset="fadeIn" delay={i * 0.08} className="relative h-52 md:h-60 overflow-hidden rounded-xl border border-hob-gold/20">
              <Image src={src} alt="Coffee and Barber lounge experience" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-hob-black/60 to-transparent" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/coffee-barber"
            className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
          >
            Explore Coffee & Barber
          </Link>
          <Link
            href="/locations"
            className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
          >
            Find WTC & Kochi
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
