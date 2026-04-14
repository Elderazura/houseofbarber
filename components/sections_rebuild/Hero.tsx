"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 250]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0 scale-110"
      >
        <div className="absolute inset-0 bg-hob-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hob-black z-10" />
        <Image
          src="/images/variation-1 (12).png"
          alt="House of Barber Interior"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Atmospheric Grain Overlay */}
      <div className="absolute inset-0 z-[5] opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-[1px] bg-hob-gold" />
          <span className="text-hob-gold font-josefin tracking-[0.3em] text-xs uppercase">
            Established 2018 · Abu Dhabi UAE
          </span>
          <span className="w-12 h-[1px] bg-hob-gold" />
        </motion.div>

        <AnimatedHeading
          text="The Chair Has Always Been Yours."
          className="text-6xl md:text-8xl lg:text-9xl font-playfair mb-8 leading-[1.1] text-hob-warm-white"
          stagger={0.12}
          delay={0.8}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-lg md:text-xl text-hob-warm-white/70 font-dm-sans max-w-2xl mx-auto mb-12"
        >
          Premium grooming for the modern gentleman. 5 locations across Abu Dhabi. Now in Bengaluru.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-5 bg-hob-gold text-hob-black font-josefin uppercase font-bold text-sm tracking-widest hover:bg-hob-gold-light transition-all duration-500 hover:scale-105 active:scale-95 group flex items-center gap-2">
            Book Appointment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
          <button className="px-10 py-5 border border-hob-warm-white/20 text-hob-warm-white font-josefin uppercase font-bold text-sm tracking-widest hover:bg-hob-warm-white/10 transition-all duration-500 hover:scale-105 active:scale-95">
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] text-hob-gold font-josefin uppercase tracking-[0.4em] opacity-60">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-hob-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
