import Link from "next/link";
import ScrollReveal from "@/components/motion/ScrollReveal";

const categories = [
  {
    key: "men",
    label: "Men's",
    title: "Grooming",
    description: "Precision cuts, beard design, hot-towel shaves and more. The works.",
    count: 6,
    href: "/services?cat=men",
    span: "md:col-span-2 md:row-span-2",
    gold: true,
  },
  {
    key: "women",
    label: "Women's",
    title: "Salon",
    description: "Cuts, colour, styling, and waxing for every occasion.",
    count: 8,
    href: "/services?cat=women",
    span: "",
    gold: false,
  },
  {
    key: "kids",
    label: "Kids'",
    title: "Fun Cuts",
    description: "Gentle, fun cuts for little ones. We make it enjoyable.",
    count: 2,
    href: "/services?cat=kids",
    span: "",
    gold: false,
  },
] as const;

export default function ServicesBentoSection() {
  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            What we offer
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            For the whole family.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[400px]">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.key} preset="fadeUp" delay={i * 0.1} className={`${cat.span} h-full`}>
              <Link
                href={cat.href}
                className={`group flex flex-col justify-between p-7 h-full min-h-[180px] ${
                  cat.gold ? "bento-card-gold" : "bento-card"
                }`}
              >
                <div>
                  <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
                    {cat.label}
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light text-hob-white mb-3">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-hob-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase">
                    {cat.count} services
                  </span>
                  <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase group-hover:translate-x-1 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal preset="fadeUp" delay={0.3} className="mt-8 text-right">
          <Link
            href="/services"
            className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            View all 22 services →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
