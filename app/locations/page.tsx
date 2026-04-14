import type { Metadata } from "next";
import LocationsContent from "@/components/sections/locations/LocationsContent";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find a House of Barber near you — 5 locations across Abu Dhabi UAE and 2 in India (Bengaluru and Kochi).",
  openGraph: { url: "https://www.houseofbarber.com/locations" },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
