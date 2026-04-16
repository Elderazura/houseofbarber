import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const faqs = [
  {
    question: "Do I need to book in advance?",
    answer: "Advance booking is recommended for preferred slots, especially evenings and weekends.",
  },
  {
    question: "Can I choose my stylist?",
    answer: "Yes. You can select your preferred professional when booking through the app or by phone.",
  },
  {
    question: "Are services available for women and kids?",
    answer: "Yes. House of Barber offers curated services for men, women, and children.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-hob-black py-20">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-10 max-w-2xl">
          <span className="mb-3 block font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase">
            FAQ
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            Answers to common booking questions.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4">
          {faqs.map((item, index) => (
            <ScrollReveal key={item.question} preset="fadeUp" delay={0.1 * (index + 1)} className="bento-card p-6">
              <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-hob-white">{item.question}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hob-muted">{item.answer}</p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.45} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center border border-hob-gold px-6 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-gold uppercase transition-all hover:bg-hob-gold hover:text-hob-black sm:w-fit"
          >
            Contact Team
          </Link>
          <Link
            href="tel:+971501124229"
            className="inline-flex w-full items-center justify-center px-2 py-3 text-center font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] text-hob-muted uppercase transition-colors hover:text-hob-white sm:w-fit"
          >
            Call Now
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
