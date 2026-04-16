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
        <div className="relative h-[58vh] min-h-[380px] overflow-hidden rounded-2xl border border-hob-gold/25">
          <Image
            src="/coffeenbarber/DUB00594 2.jpg"
            alt="Coffee and Barber lounge at House of Barber"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hob-black/30 via-hob-black/30 to-hob-black/80" />
          <div className="absolute bottom-0 p-7 md:p-10 max-w-3xl">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              Coffee & Barber
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white leading-tight">
              Premium grooming meets cafe culture.
            </h1>
            <p className="mt-4 text-sm md:text-base text-hob-muted leading-relaxed max-w-2xl">
              A thoughtfully designed model where your appointment and your unwind moment live in one place.
              Grooming, coffee, conversation, and comfort - done with one premium standard.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Why Coffee & Barber",
            body: "Because premium service should feel complete. Not rushed in, rushed out - but a calm experience worth spending time on.",
          },
          {
            title: "Customer Is King",
            body: "From the first greeting to the final finish, every interaction is designed around comfort, respect, and personal preference.",
          },
          {
            title: "More Than A Haircut",
            body: "A destination experience with styling, coffee, snacks, and premium seating for guests and companions.",
          },
        ].map((item, i) => (
          <article key={item.title} className={i === 1 ? "bento-card-gold p-6" : "bento-card p-6"}>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-hob-white mb-3">
              {item.title}
            </h2>
            <p className="text-sm md:text-base text-hob-muted leading-relaxed">{item.body}</p>
          </article>
        ))}
      </section>

      <section className="section-container mt-14 grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-hob-gold/20">
          <Image
            src="/coffeenbarber/DUB00496 2.jpg"
            alt="Coffee service at House of Barber"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hob-black/75 to-transparent" />
          <div className="absolute bottom-0 p-6 max-w-md">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-hob-white">
              Excellent coffee.
            </h2>
            <p className="mt-2 text-sm text-hob-muted">
              Fresh brews and cafe-grade beverages made to complement your salon visit.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-hob-gold/20">
          <Image
            src="/coffeenbarber/DUB00395 2.jpg"
            alt="Snacks and lounge at Coffee and Barber"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hob-black/75 to-transparent" />
          <div className="absolute bottom-0 p-6 max-w-md">
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-hob-white">
              Curated snacks, premium seating.
            </h2>
            <p className="mt-2 text-sm text-hob-muted">
              Comfort-focused lounge spaces for waiting, relaxing, and enjoying your time in-store.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container mt-14">
        <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white mb-6">
          Coffee & Barber in moments
        </h2>
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
          {cafeGallery.map((src) => (
            <div key={src} className="relative mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-xl border border-white/10">
              <Image
                src={src}
                alt="Coffee and Barber in-store glimpse"
                width={1200}
                height={1400}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="w-full h-auto object-cover"
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
          </div>
        </div>
      </section>
    </main>
  );
}
