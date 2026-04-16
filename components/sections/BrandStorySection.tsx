import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function BrandStorySection() {
  return (
    <section className="bg-hob-black py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="max-w-3xl">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            Brand Story
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Craft rooted in heritage, styled for today.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-hob-muted">
            House of Barber began with one idea: every guest should leave feeling sharper, calmer, and unmistakably confident.
            From precision cuts to tailored finishing, every detail is handled with quiet excellence.
          </p>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <ScrollReveal preset="fadeUp" delay={0.1} className="bento-card p-6">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">15+ Years</p>
            <p className="mt-2 text-xs leading-relaxed text-hob-muted">Trusted grooming and salon expertise across modern premium spaces.</p>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.2} className="bento-card p-6">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">7 Branches</p>
            <p className="mt-2 text-xs leading-relaxed text-hob-muted">A consistent signature experience in every location.</p>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.3} className="bento-card-gold p-6">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">One Standard</p>
            <p className="mt-2 text-xs leading-relaxed text-hob-muted">Refined technique, premium products, and attentive hospitality.</p>
          </ScrollReveal>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          <ScrollReveal preset="fadeIn" delay={0.1} className="relative h-40 overflow-hidden rounded-xl border border-white/10 md:h-52">
            <Image
              src="/Banner/exterior.jpg"
              alt="Premium barbering style"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal preset="fadeIn" delay={0.15} className="relative h-40 overflow-hidden rounded-xl border border-white/10 md:h-52">
            <Image
              src="/Banner/shop_interior.jpg"
              alt="House of Barber grooming detail"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal preset="fadeIn" delay={0.2} className="relative hidden h-40 overflow-hidden rounded-xl border border-white/10 md:block md:h-52">
            <Image
              src="/coffeenbarber/DUB00383.jpg"
              alt="Refined salon finish"
              fill
              className="object-cover"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal preset="fadeUp" delay={0.35} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/locations"
            className="inline-flex w-fit items-center justify-center border border-hob-gold px-6 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black"
          >
            View Locations
          </Link>
          <Link
            href="/services"
            className="inline-flex w-fit items-center justify-center px-2 py-3 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-muted uppercase transition-colors hover:text-hob-white"
          >
            Explore Services
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
