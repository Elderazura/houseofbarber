import type { Metadata } from "next";
import AboutContent from "@/components/sections/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about House of Barber — our heritage, values, and commitment to premium family grooming across Abu Dhabi and India.",
  openGraph: { url: "https://www.houseofbarber.com/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
