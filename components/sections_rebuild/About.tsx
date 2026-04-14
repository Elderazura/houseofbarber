"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const clipReveal = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] as const, delay: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <section ref={ref} className="relative py-24 md:py-40 bg-hob-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column - Large Image with Reveal */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              variants={clipReveal}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
            >
              <Image
                src="/images/variation-2 (16).png"
                alt="House of Barber Heritage"
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-hob-gold/5 mix-blend-multiply" />
            </motion.div>
            
            {/* Small Floating Accent Image/Design */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-10 -left-10 w-48 h-48 bg-hob-dark border border-hob-gold/20 p-4 hidden md:block z-20"
            >
              <div className="relative w-full h-full border border-hob-gold/10 flex items-center justify-center p-6 text-center">
                <span className="text-hob-gold font-josefin text-xs tracking-widest uppercase leading-loose">
                  Crafting <br /> Community <br /> Since 2018
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <span className="text-hob-gold font-josefin tracking-[0.3em] text-xs uppercase italic font-semibold">
                  Who we are
                </span>
                <span className="w-8 h-[1px] bg-hob-gold" />
              </div>

              <h2 className="text-5xl md:text-7xl font-cormorant font-light text-hob-warm-white leading-tight">
                More Than a Cut. <br />
                <span className="text-hob-gold italic">It&apos;s a Ritual.</span>
              </h2>

              <div className="space-y-6 text-hob-warm-white/70 font-dm-sans text-lg leading-relaxed max-w-xl">
                <p>
                  A great barbershop has always been more than scissors and a chair. Since 2018, 
                  House of Barber has been Abu Dhabi&apos;s most trusted destination for men&apos;s grooming — 
                  built on craft, community, and the timeless belief that every man deserves to sits 
                  down, exhale, and leave looking exactly like himself, only sharper.
                </p>
                <p>
                  From the dark wood panels to the plush leather chairs, we&apos;ve preserved the soul 
                  of a 1920s gentleman&apos;s club — and brought it into the present. Every snip, 
                  every razor stroke, every warm towel carries the weight of that original intention.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-hob-warm-white/10">
                {[
                  { label: "Locations", val: "5+" },
                  { label: "Rating", val: "4.8★" },
                  { label: "Founded", val: "2018" },
                  { label: "India", val: "1 City" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <div className="text-2xl font-playfair text-hob-gold mb-1">{stat.val}</div>
                    <div className="text-[10px] uppercase tracking-widest text-hob-mid-gray">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-6">
                <button className="text-hob-gold font-josefin uppercase tracking-widest text-xs flex items-center gap-3 group">
                  <span className="w-10 h-[1px] bg-hob-gold group-hover:w-16 transition-all duration-500" />
                  Read Our Full Story
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
