"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { m } from "framer-motion";
import { detectPlatform, APP_STORE_URL, PLAY_STORE_URL } from "@/lib/device";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AppDownloadSection() {
  const [platform, setPlatform] = useState<"ios" | "android" | "desktop">("desktop");
  const { t } = useLanguage();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setPlatform(detectPlatform());
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const appBenefits = [
    "One-tap booking and quick rescheduling",
    "Live branch info across UAE and India",
    "Service history and preferred stylist tracking",
  ];

  return (
    <section id="app" className="py-24 bg-hob-dark border-t border-hob-gold/10">
      <div className="section-container">
        <ScrollReveal preset="fadeUp">
          <div className="max-w-5xl mx-auto rounded-2xl border border-hob-gold/30 bg-gradient-to-b from-hob-black via-hob-dark to-hob-black p-6 md:p-10 shadow-[0_24px_56px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 md:gap-10 items-center">
              <div>
                <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-4">
                  {t.app.eyebrow}
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-4">
                  {t.app.heading}
                </h2>
                <p className="text-sm text-hob-muted leading-relaxed">
                  {t.app.body}
                </p>

                <ul className="mt-6 space-y-3">
                  {appBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm text-hob-white/90">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-hob-gold shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-hob-gold/20 bg-hob-dark/70 p-4 sm:p-5">
                <div className="flex flex-col gap-3">
                  <m.a
                    href={APP_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className={`group flex items-center justify-between gap-4 px-5 py-4 border transition-all duration-200 ${
                      platform === "android"
                        ? "border-white/10 text-hob-muted opacity-50"
                        : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                    }`}
                  >
                    <span className="flex flex-col text-left">
                      <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-widest uppercase mb-1">
                        {t.app.appStoreLabel}
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-xl">{t.app.appStoreName}</span>
                    </span>
                    <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      iOS
                    </span>
                  </m.a>

                  <m.a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className={`group flex items-center justify-between gap-4 px-5 py-4 border transition-all duration-200 ${
                      platform === "ios"
                        ? "border-white/10 text-hob-muted opacity-50"
                        : "border-hob-gold text-hob-gold hover:bg-hob-gold hover:text-hob-black"
                    }`}
                  >
                    <span className="flex flex-col text-left">
                      <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-widest uppercase mb-1">
                        {t.app.playStoreLabel}
                      </span>
                      <span className="font-[family-name:var(--font-cormorant)] text-xl">{t.app.playStoreName}</span>
                    </span>
                    <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase group-hover:translate-x-1 transition-transform">
                      Android
                    </span>
                  </m.a>

                  <Link
                    href="/contact"
                    className="mt-1 text-center px-5 py-3 border border-white/20 text-hob-white font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.22em] uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
                  >
                    Prefer web booking?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
