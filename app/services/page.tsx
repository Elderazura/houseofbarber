import type { Metadata } from "next";
import ServicesContent from "@/components/sections/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all services at House of Barber — precision cuts, beard design, hair colour, and more for men, women, and kids.",
  openGraph: { url: "https://www.houseofbarber.com/services" },
};

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ cat?: string }>;
}) {
  const { cat = "all" } = await searchParams;

  return <ServicesContent cat={cat} />;
}
