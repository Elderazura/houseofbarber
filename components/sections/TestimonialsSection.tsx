import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const testimonials = [
  {
    quote: "Consistent excellence. I book through the app and always walk out camera-ready.",
    name: "A. Rahman",
  },
  {
    quote: "The consultation is thoughtful and the finish is immaculate. Truly premium care.",
    name: "M. D'Souza",
  },
  {
    quote: "Fast when needed, meticulous when it matters. Best grooming experience in the city.",
    name: "K. Nair",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-hob-dark py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-10 max-w-2xl">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Trusted by guests who expect the finest.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} preset="fadeUp" delay={0.1 * (index + 1)} className={index === 1 ? "bento-card-gold p-6" : "bento-card p-6"}>
              <p className="text-sm leading-relaxed text-hob-white/90">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase">{item.name}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.45} className="mt-8">
          <Link
            href="#app"
            className="inline-flex w-full items-center justify-center border border-hob-gold px-6 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black sm:w-fit"
          >
            Book via App
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
