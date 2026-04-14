import type { Metadata } from "next";
import GalleryContent from "@/components/sections/gallery/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse the House of Barber gallery — haircuts, beard styling, hair colour, kids cuts, and salon interiors across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/gallery" },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
