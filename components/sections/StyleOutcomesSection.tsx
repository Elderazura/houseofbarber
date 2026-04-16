import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

const outcomes = [
  { label: "Modern Fade", detail: "Clean gradients with soft, natural texture." },
  { label: "Executive Classic", detail: "Sharp structure with a polished silhouette." },
  { label: "Bold Texture", detail: "Movement and volume crafted for statement looks." },
  { label: "Beard Precision", detail: "Symmetry, density shaping, and refined edging." },
];

export default function StyleOutcomesSection() {
  return (
    <section className="bg-hob-black py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-10 max-w-2xl">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            Style Outcomes
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Distinct looks, tailored to your rhythm.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {outcomes.map((item, index) => (
            <ScrollReveal key={item.label} preset="fadeUp" delay={0.1 * (index + 1)} className={index === 0 ? "bento-card-gold p-6" : "bento-card p-6"}>
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-hob-muted">{item.detail}</p>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <ScrollReveal preset="fadeIn" delay={0.25} className="relative h-44 overflow-hidden rounded-xl border border-white/10 md:h-56">
            <Image
              src="/coffeenbarber/DUB00594.jpg"
              alt="Signature haircut result"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal preset="fadeIn" delay={0.3} className="relative h-44 overflow-hidden rounded-xl border border-white/10 md:h-56">
            <Image
              src="/coffeenbarber/DUB00395.jpg"
              alt="Beard and style finish result"
              fill
              className="object-cover"
            />
          </ScrollReveal>
        </div>

        <ScrollReveal preset="fadeUp" delay={0.45} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/gallery"
            className="inline-flex w-full items-center justify-center border border-hob-gold px-6 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black sm:w-fit"
          >
            View Gallery
          </Link>
          <Link
            href="/services"
            className="inline-flex w-full items-center justify-center px-2 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-muted uppercase transition-colors hover:text-hob-white sm:w-fit"
          >
            Book a Style Session
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
