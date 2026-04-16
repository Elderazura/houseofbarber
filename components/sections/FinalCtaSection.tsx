import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function FinalCtaSection() {
  return (
    <section className="bg-hob-dark py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="bento-card-gold p-8 md:p-10">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            Your Next Look Starts Here
          </span>
          <h2 className="max-w-3xl font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Book your chair. Walk in polished. Leave unforgettable.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-hob-muted">
            Secure your preferred time in moments and experience signature grooming built around your schedule.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href="#app"
              className="inline-flex items-center justify-center border border-hob-gold px-5 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black"
            >
              Book on App
            </Link>
            <Link
              href="tel:+971501124229"
              className="inline-flex items-center justify-center border border-hob-gold/40 px-5 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase transition-colors hover:border-hob-gold hover:text-hob-gold"
            >
              Call to Book
            </Link>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center border border-hob-gold/40 px-5 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase transition-colors hover:border-hob-gold hover:text-hob-gold"
            >
              Find Locations
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-hob-gold/40 px-5 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-white uppercase transition-colors hover:border-hob-gold hover:text-hob-gold"
            >
              View Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
