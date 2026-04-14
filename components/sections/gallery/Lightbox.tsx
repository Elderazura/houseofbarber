"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage } from "@/lib/hob-content";

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const image = currentIndex !== null ? images[currentIndex] : null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {image && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-hob-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-hob-muted hover:text-hob-white"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 p-3 text-hob-muted hover:text-hob-gold"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>
          <m.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-4xl max-h-[85vh] w-full mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1200}
              height={900}
              className="object-contain max-h-[85vh] w-auto mx-auto"
              priority
            />
            <p className="text-center text-xs text-hob-muted mt-4">
              {image.alt}
            </p>
          </m.div>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 p-3 text-hob-muted hover:text-hob-gold"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>
        </m.div>
      )}
    </AnimatePresence>
  );
}
