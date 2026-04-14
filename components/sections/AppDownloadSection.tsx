"use client";

import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { detectPlatform, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/device";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function AppDownloadSection() {
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <section id="app" className="py-24 bg-hob-dark border-t border-hob-gold/10">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal preset="fadeUp">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-4">
              Book smarter
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-4">
              Get the app.
            </h2>
            <p className="text-sm text-hob-muted leading-relaxed mb-10">
              Manage appointments, explore services, and find your nearest
              House of Barber — all from your pocket.
            </p>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <m.a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col items-center px-8 py-4 border transition-all duration-200 ${
                  platform === "android"
                    ? "border-white/10 text-hob-muted opacity-50"
                    : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                }`}
              >
                <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-widest uppercase mb-1">
                  Download on the
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-xl">App Store</span>
              </m.a>

              <m.a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className={`flex flex-col items-center px-8 py-4 border transition-all duration-200 ${
                  platform === "ios"
                    ? "border-white/10 text-hob-muted opacity-50"
                    : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                }`}
              >
                <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-widest uppercase mb-1">
                  Get it on
                </span>
                <span className="font-[family-name:var(--font-cormorant)] text-xl">Google Play</span>
              </m.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
