"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { GALLERY_IMAGES } from "@/lib/hob-content";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function GalleryTeaserSection() {
  const { t } = useLanguage();
  const preview = GALLERY_IMAGES.slice(0, 6);

  return (
    <section className="py-20 bg-hob-black">
      <div className="section-container">
        <ScrollReveal preset="fadeUp" className="mb-12 flex justify-between items-end">
          <div>
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.gallery.eyebrow}
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-hob-white">
              {t.gallery.heading}
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:inline font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            {t.gallery.viewAll}
          </Link>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((img, i) => (
            <ScrollReveal
              key={img.id}
              preset="fadeIn"
              delay={i * 0.07}
              className={i === 0 || i === 3 ? "md:row-span-2" : ""}
            >
              <Link href="/gallery" className="group block overflow-hidden rounded-lg">
                <div className={`relative w-full overflow-hidden ${i === 0 || i === 3 ? "h-[400px]" : "h-[190px]"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-hob-black/0 group-hover:bg-hob-black/20 transition-colors duration-300" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/gallery"
            className="font-[family-name:var(--font-josefin)] text-[10px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
          >
            {t.gallery.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
