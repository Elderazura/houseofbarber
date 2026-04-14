"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <m.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110"
      >
        <Image
          src="/assets/hob/brand/hob-brand-identity-1.png"
          alt="House of Barber premium salon interior"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hob-black/60 via-hob-black/40 to-hob-black" />
      </m.div>

      <div className="section-container relative z-10 pt-16">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-8 bg-hob-gold" />
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            House of Barber
          </span>
          <div className="h-px w-8 bg-hob-gold" />
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-normal text-hob-white leading-[1.1] max-w-2xl mb-8"
        >
          The Chair Has
          <br />
          <em className="text-hob-gold italic">Always Been</em>
          <br />
          Yours.
        </m.h1>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link
            href="#app"
            className="inline-flex items-center gap-2 px-7 py-3 border border-hob-gold text-hob-gold font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3 text-hob-muted font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] uppercase hover:text-hob-white transition-colors"
          >
            View Services →
          </Link>
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-gradient-to-b from-hob-gold to-transparent animate-pulse" />
          <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-[0.3em] text-hob-muted uppercase">Scroll</span>
        </m.div>
      </div>
    </section>
  );
}
