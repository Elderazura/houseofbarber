import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coffee & Barber",
  description:
    "Coffee & Barber by House of Barber — premium grooming, excellent coffee, curated snacks, and refined lounge comfort at WTC Abu Dhabi and Edappally Kochi.",
  openGraph: { url: "https://www.houseofbarber.com/coffee-barber" },
};

const cafeGallery = [
  "/coffeenbarber/DUB00359.jpg",
  "/coffeenbarber/DUB00383.jpg",
  "/coffeenbarber/DUB00395.jpg",
  "/coffeenbarber/DUB00496.jpg",
  "/coffeenbarber/DUB00594.jpg",
  "/coffeenbarber/DUB00383 2.jpg",
];

export default function CoffeeBarberPage() {
  return (
    <main className="pt-24 pb-20 min-h-screen bg-hob-black">
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-5 items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-hob-gold/25 min-h-[420px] lg:min-h-[560px]">
            <Image
              src="/coffeenbarber/DUB00594 2.jpg"
              alt="Coffee and Barber lounge at House of Barber"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-hob-black/55 via-hob-black/65 to-hob-black/92" />
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
              <div className="max-w-4xl rounded-xl bg-hob-black/55 border border-white/10 backdrop-blur-[2px] px-5 py-4 md:px-6 md:py-5">
                <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.32em] text-hob-gold uppercase block mb-3">
                  Coffee & Barber
                </span>
                <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-light text-hob-white leading-[0.95]">
                  Grooming.
                  <br />
                  Coffee.
                  <br />
                  Comfort.
                </h1>
              </div>
            </div>
          </div>

          <div className="bento-card-gold p-7 md:p-9 flex flex-col justify-between">
            <div>
              <p className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.28em] text-hob-gold uppercase mb-4">
                Why this model
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-hob-white leading-tight mb-5">
                Because premium service should feel complete, never rushed.
              </p>
              <p className="text-sm md:text-base text-hob-muted leading-relaxed">
                Coffee & Barber is built for people who value detail. Your appointment, coffee, snacks,
                and lounge time come together in one polished, customer-first experience.
              </p>
            </div>
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
              >
                Book Now
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
              >
                Find Stores
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container mt-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <article className="bento-card p-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-3">
              Customer Is King
            </h2>
            <p className="text-sm md:text-base text-hob-muted leading-relaxed">
              Every touchpoint is personalized - greeting, consultation, service execution, and post-visit care.
            </p>
          </article>
          <article className="bento-card-gold p-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-3">
              More Service
            </h2>
            <p className="text-sm md:text-base text-hob-muted leading-relaxed">
              More than haircut or beard: coffee moments, curated snacks, and lounge-grade comfort.
            </p>
          </article>
          <article className="bento-card p-6">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-3">
              One Premium Standard
            </h2>
            <p className="text-sm md:text-base text-hob-muted leading-relaxed">
              The same level of craft and hospitality across grooming station, beverage service, and waiting spaces.
            </p>
          </article>
        </div>
      </section>

      <section className="section-container mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-5">
        <div className="bento-card p-7 md:p-8">
          <p className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase mb-3">
            Coffee & snacks
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-4 leading-tight">
            Excellent coffee.
            <br />
            Curated snacks.
          </h2>
          <p className="text-sm md:text-base text-hob-muted leading-relaxed">
            Fresh brews and cafe-grade beverages are served as part of the experience, with snacks selected
            for guests who prefer to relax before or after service.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="px-3 py-2 border border-hob-gold/30 text-hob-gold text-[9px] tracking-widest uppercase text-center">Espresso</div>
            <div className="px-3 py-2 border border-hob-gold/30 text-hob-gold text-[9px] tracking-widest uppercase text-center">Americano</div>
            <div className="px-3 py-2 border border-hob-gold/30 text-hob-gold text-[9px] tracking-widest uppercase text-center">Cold Brew</div>
            <div className="px-3 py-2 border border-hob-gold/30 text-hob-gold text-[9px] tracking-widest uppercase text-center">Light Bites</div>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-hob-gold/20">
          <Image
            src="/coffeenbarber/DUB00496 2.jpg"
            alt="Coffee service at House of Barber"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hob-black/75 to-transparent" />
          <div className="absolute bottom-0 p-6 md:p-8 max-w-xl">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
              Lounge-first atmosphere.
            </h2>
            <p className="mt-2 text-sm text-hob-muted">
              Premium seating and warm service pace that makes waiting feel intentional and comfortable.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-6">
          Inside the experience
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {cafeGallery.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-xl border border-white/10 ${
                i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""
              }`}
            >
              <Image
                src={src}
                alt="Coffee and Barber in-store glimpse"
                width={1200}
                height={1400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className={`w-full object-cover ${i === 0 ? "h-[420px] md:h-full" : "h-[210px] md:h-[280px]"}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section-container mt-14">
        <div className="bento-card-gold p-8 md:p-10">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            Available now
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-4">
            WTC Abu Dhabi & Edappally Kochi
          </h2>
          <p className="text-sm md:text-base text-hob-muted max-w-2xl leading-relaxed">
            Coffee & Barber is currently live in these flagship stores. More branches will follow as we expand
            the experience.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/locations/wtc"
              className="inline-flex items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase hover:bg-hob-gold hover:text-hob-black transition-all"
            >
              View WTC
            </Link>
            <Link
              href="/locations/edappally-kochi"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              View Kochi
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center border border-hob-gold/35 px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase hover:border-hob-gold hover:text-hob-gold transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
