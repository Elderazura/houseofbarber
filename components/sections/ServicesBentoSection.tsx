"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ServicesBentoSection() {
  const { t } = useLanguage();

  const categories = [
    {
      key: "men",
      label: t.services.men.label,
      title: t.services.men.title,
      description: t.services.men.description,
      count: t.services.men.count,
      href: "/services?cat=men",
      image: "/Banner/Barber_style.jpg",
      span: "md:col-span-2 md:row-span-2",
      gold: true,
    },
    {
      key: "women",
      label: t.services.women.label,
      title: t.services.women.title,
      description: t.services.women.description,
      count: t.services.women.count,
      href: "/services?cat=women",
      image: "/Banner/haircut.jpg",
      span: "",
      gold: false,
    },
    {
      key: "kids",
      label: t.services.kids.label,
      title: t.services.kids.title,
      description: t.services.kids.description,
      count: t.services.kids.count,
      href: "/services?cat=kids",
      image: "/Banner/kid.jpg",
      span: "",
      gold: false,
    },
  ];

  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12">
          <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
            {t.services.eyebrow}
          </span>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
            {t.services.heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[400px]">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.key} preset="fadeUp" delay={i * 0.1} className={`${cat.span} h-full`}>
              <Link
                href={cat.href}
                className={`group relative isolate flex flex-col justify-between p-7 h-full min-h-[180px] overflow-hidden ${
                  cat.gold ? "bento-card-gold" : "bento-card"
                }`}
              >
                <div className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-45">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} services`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-hob-black/65 via-hob-black/35 to-hob-black/75" />
                </div>
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
                    {cat.count}
                  </span>
                  <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase group-hover:translate-x-1 transition-transform">
                    {t.services.explore}
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
            {t.services.viewAll}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
