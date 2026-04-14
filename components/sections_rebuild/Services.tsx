"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Scissors, Zap, Wind, Palette, Baby, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: <Scissors className="w-10 h-10" />,
    title: "Classic Haircut",
    desc: "Signature cut, tailored to you. Includes consultation, styling, and neck shave.",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Beard Design",
    desc: "Sculpted precision, HOB-certified styles. Shave and trim to perfection.",
  },
  {
    icon: <Wind className="w-10 h-10" />,
    title: "Shave & Grooming",
    desc: "Hot towel, straight razor, old-school luxury. The traditional grooming experience.",
  },
  {
    icon: <Palette className="w-10 h-10" />,
    title: "Color & Styling",
    desc: "From grays to gradients, done right. Expert coloring for the modern gentleman.",
  },
  {
    icon: <Baby className="w-10 h-10" />,
    title: "Kids Haircut",
    desc: "Stress-free cuts for the young gentlemen. Patience and precision for all ages.",
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Scalp & Skin",
    desc: "Dandruff treatments, facials for men. Refresh and rejuvenate your skin.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { x: 0 },
      {
        x: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-hob-black scroll-mt-20 px-6 sm:px-12">
      <div ref={triggerRef}>
        <div className="h-screen flex items-center mb-12">
           <div className="max-w-2xl">
              <span className="text-hob-gold font-josefin tracking-[0.3em] text-xs uppercase italic font-semibold mb-4 block">
                Our Craft
              </span>
              <h2 className="text-5xl md:text-8xl font-playfair text-hob-warm-white leading-tight mb-8">
                Services <br />
                <span className="text-hob-gold italic">Refining the Detail.</span>
              </h2>
           </div>
        </div>
        
        <div ref={sectionRef} className="flex relative w-[300vw] h-[60vh] gap-12 items-center">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="w-[80vw] md:w-[40vw] lg:w-[25vw] h-full flex-shrink-0"
            >
              <div className="group relative w-full h-full bg-hob-dark border border-hob-warm-white/10 p-12 flex flex-col justify-between transition-all duration-700 hover:border-hob-gold/40">
                <div className="absolute top-0 right-0 p-8 text-hob-warm-white/5 font-playfair text-8xl transition-all duration-700 group-hover:text-hob-gold/10">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <div className="text-hob-gold mb-8 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12 transform-gpu">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-cormorant text-hob-warm-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-hob-warm-white/60 font-dm-sans text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="relative z-10 pt-8 mt-auto border-t border-hob-warm-white/5">
                  <button className="text-hob-gold font-josefin uppercase tracking-widest text-[10px] flex items-center gap-2 group-hover:gap-4 transition-all duration-500">
                    Explore Details <span>→</span>
                  </button>
                </div>
                
                {/* Hover gold underline animation */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-hob-gold transition-all duration-700 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Fill end space */}
        <div className="h-[20vh]" />
      </div>
    </section>
  );
}
