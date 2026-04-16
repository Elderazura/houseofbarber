import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";

const reasons = [
  {
    title: "Personal Styling",
    description: "Consultation-led service shaped to your face, hair texture, and lifestyle.",
  },
  {
    title: "Senior Professionals",
    description: "Experienced artists who balance trend awareness with timeless precision.",
  },
  {
    title: "Premium Environment",
    description: "A calm, polished setting designed to make every visit feel elevated.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-hob-dark py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-10 max-w-2xl">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Signature care, from first consultation to final finish.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {reasons.map((reason, index) => (
            <ScrollReveal key={reason.title} preset="fadeUp" delay={0.1 * (index + 1)} className="bento-card p-6">
              <p className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">{reason.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-hob-muted">{reason.description}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeIn" delay={0.35} className="mt-4 relative h-52 md:h-64 overflow-hidden rounded-xl border border-hob-gold/20">
          <Image
            src="/coffeenbarber/DUB00496.jpg"
            alt="Luxury grooming environment at House of Barber"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-hob-black/60 to-transparent" />
        </ScrollReveal>

        <ScrollReveal preset="fadeUp" delay={0.45} className="mt-8">
          <Link
            href="tel:+971501124229"
            className="inline-flex w-full items-center justify-center border border-hob-gold px-6 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black sm:w-fit"
          >
            Call Concierge
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
