"use client";

import { useMemo } from "react";
import { APP_STORE_URL, PLAY_STORE_URL, detectPlatform } from "@/lib/device";

export default function BookingPage() {
  const platform = useMemo(() => detectPlatform(), []);
  const primaryStore = platform === "android" ? PLAY_STORE_URL : APP_STORE_URL;
  const primaryLabel = platform === "android" ? "Open Play Store" : "Open App Store";
  const helperText =
    platform === "android"
      ? "Android detected. Continue with Google Play to book your appointment."
      : platform === "ios"
        ? "iPhone/iPad detected. Continue with App Store to book your appointment."
        : "Use your phone for the best booking experience. Choose your app store below.";

  return (
    <main className="pt-24 pb-20 min-h-screen bg-hob-black">
      <section className="section-container">
        <div className="fixed inset-0 z-40 bg-hob-black/70 backdrop-blur-sm" aria-hidden />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book through app"
          className="relative z-50 mx-auto max-w-xl bento-card-gold p-8 md:p-10 text-center"
        >
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            App Only Booking
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white mb-4">
            BOOK NOW
          </h1>
          <p className="text-sm md:text-base text-hob-muted max-w-2xl mx-auto leading-relaxed mb-8">
            {helperText}
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={primaryStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
            >
              {primaryLabel}
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              App Store
            </a>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
