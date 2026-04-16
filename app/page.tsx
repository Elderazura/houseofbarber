import type { Metadata } from "next";
import PageTransition from "@/components/motion/PageTransition";
import HeroSection from "@/components/sections/HeroSection";
import BrandStatsSection from "@/components/sections/BrandStatsSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import ServicesBentoSection from "@/components/sections/ServicesBentoSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import StyleOutcomesSection from "@/components/sections/StyleOutcomesSection";
import CoffeeBarberTeaserSection from "@/components/sections/CoffeeBarberTeaserSection";
import LocationsTeaserSection from "@/components/sections/LocationsTeaserSection";
import GalleryTeaserSection from "@/components/sections/GalleryTeaserSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AppDownloadSection from "@/components/sections/AppDownloadSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { organizationSchema } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "House of Barber | Premium Family Salon — Abu Dhabi",
  description:
    "House of Barber — premium family salon and barbershop in Abu Dhabi, UAE and India. Expert grooming for men, women, and kids across 7 locations.",
  openGraph: {
    url: "https://www.houseofbarber.com",
    title: "House of Barber | Premium Family Salon — Abu Dhabi",
  },
};

export default function HomePage() {
  return (
    <PageTransition>
      <JsonLd data={organizationSchema()} />
      <main>
        <HeroSection />
        <BrandStatsSection />
        <BrandStorySection />
        <ServicesBentoSection />
        <WhyChooseSection />
        <StyleOutcomesSection />
        <CoffeeBarberTeaserSection />
        <LocationsTeaserSection />
        <GalleryTeaserSection />
        <TestimonialsSection />
        <AppDownloadSection />
        <FAQSection />
        <FinalCtaSection />
      </main>
    </PageTransition>
  );
}
