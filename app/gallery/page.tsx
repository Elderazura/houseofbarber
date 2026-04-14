import type { Metadata } from "next";
import GalleryGrid from "@/components/sections/gallery/GalleryGrid";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the House of Barber gallery — haircuts, beard styling, hair colour, kids cuts, and salon interiors across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/gallery" },
};

export default function GalleryPage() {
  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Gallery", href: "/gallery" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              The work
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white">
              Gallery.
            </h1>
          </ScrollReveal>
          <GalleryGrid />
        </div>
      </main>
    </PageTransition>
  );
}
