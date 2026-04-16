"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, GalleryCategory } from "@/lib/hob-content";
import Lightbox from "./Lightbox";

const filters: { label: string; value: GalleryCategory }[] = [
  { label: "All",      value: "all" },
  { label: "Haircuts", value: "haircuts" },
  { label: "Beards",   value: "beards" },
  { label: "Colour",   value: "color" },
  { label: "Kids",     value: "kids" },
  { label: "Interior", value: "interior" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredRaw = GALLERY_IMAGES.filter((img) => img.categories.includes(active));
  const filtered = filteredRaw.filter(
    (img, idx, arr) =>
      arr.findIndex((x) => x.src.replace(" 2.jpg", ".jpg") === img.src.replace(" 2.jpg", ".jpg")) === idx
  );

  function openLightbox(id: string) {
    const idx = filtered.findIndex((img) => img.id === id);
    setLightboxIndex(idx);
  }

  return (
    <>
      <div className="flex gap-2 flex-wrap mb-8">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
              active === f.value
                ? "border-hob-gold bg-hob-gold text-hob-black"
                : "border-white/10 text-hob-muted hover:border-hob-gold hover:text-hob-gold"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 [column-fill:_balance]">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => (
            <m.button
              key={img.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => openLightbox(img.id)}
              className="group block w-full overflow-hidden rounded-lg border border-white/10 mb-3 md:mb-4 break-inside-avoid"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={1300}
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-hob-black/0 group-hover:bg-hob-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-hob-black/65 to-transparent">
                  <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-[0.18em] uppercase text-hob-gold">
                    {img.categories.find((c) => c !== "all") ?? "gallery"}
                  </span>
                </div>
              </div>
            </m.button>
          ))}
        </AnimatePresence>
      </div>

      <Lightbox
        images={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((i) =>
            i !== null ? (i - 1 + filtered.length) % filtered.length : null
          )
        }
        onNext={() =>
          setLightboxIndex((i) =>
            i !== null ? (i + 1) % filtered.length : null
          )
        }
      />
    </>
  );
}
