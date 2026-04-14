"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "@/components/ui/AnimatedHeading";

export default function Heritage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[120vh] bg-hob-black flex items-center justify-center py-40 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <motion.div 
        style={{ opacity: 0.1, rotate: y }}
        className="absolute w-[150vw] h-[150vw] border-[1px] border-hob-gold/20 rounded-full top-[-25%] left-[-25%] pointer-events-none"
      />

      {/* Atmospheric noise/grain logic through radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.05)_0%,transparent_100%)]" />

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <div className="flex flex-col items-center gap-8">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-hob-gold"
          />
          
          <span className="text-hob-gold font-josefin tracking-[0.4em] text-xs uppercase italic font-semibold">
            Our Philosophy
          </span>

          <AnimatedHeading
            text="Grooming is the secret of real elegance."
            as="h2"
            className="text-6xl md:text-8xl lg:text-9xl font-cormorant italic text-hob-warm-white leading-tight"
            stagger={0.12}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-hob-gold font-josefin tracking-widest text-sm uppercase mt-4"
          >
            — House of Barber
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-hob-warm-white/50 font-dm-sans text-lg md:text-xl max-w-2xl mx-auto mt-12 leading-relaxed"
          >
            They say never forget where you come from. We haven&apos;t. 
            Our story began in a single chair on Al Falah Street — 
            and grew into a name that Abu Dhabi trusts for family grooming.
          </motion.p>
        </div>
      </motion.div>
      
      {/* Floating Elements (Subtle dust/grain) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-hob-gold rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
