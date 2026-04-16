import type { Metadata } from "next";
import Link from "next/link";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/device";

export const metadata: Metadata = {
  title: "Booking",
  description:
    "Book your House of Barber appointment through our iPad and Android software experience.",
  openGraph: { url: "https://www.houseofbarber.com/booking" },
};

export default function BookingPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-hob-black">
      <section className="section-container">
        <div className="bento-card-gold p-8 md:p-10 text-center">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Booking
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white mb-4">
            BOOKING !
          </h1>
          <p className="text-sm md:text-base text-hob-muted max-w-2xl mx-auto leading-relaxed">
            Book your chair quickly through our app software channels. Choose your platform and continue
            to appointment booking.
          </p>
        </div>
      </section>

      <section className="section-container mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card p-7 flex flex-col items-start gap-4 hover:border-hob-gold/50 transition-colors"
        >
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.25em] text-hob-gold uppercase">
            iPad software
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-hob-white">
            Apple Booking
          </h2>
          <p className="text-sm text-hob-muted leading-relaxed">
            Continue on App Store and book directly through House of Barber software.
          </p>
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase">
            Open App Store →
          </span>
        </a>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bento-card p-7 flex flex-col items-start gap-4 hover:border-hob-gold/50 transition-colors"
        >
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.25em] text-hob-gold uppercase">
            Android software
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-hob-white">
            Play Booking
          </h2>
          <p className="text-sm text-hob-muted leading-relaxed">
            Continue on Google Play and book your preferred slot in seconds.
          </p>
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase">
            Open Play Store →
          </span>
        </a>
      </section>

      <section className="section-container mt-10">
        <div className="bento-card p-7 md:p-8">
          <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.25em] text-hob-gold uppercase mb-3">
            Account access
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/login"
              className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              Signup
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
