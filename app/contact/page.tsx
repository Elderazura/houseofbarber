import type { Metadata } from "next";
import ContactContent from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with House of Barber — enquire about services, locations, or book an appointment via WhatsApp.",
  openGraph: { url: "https://www.houseofbarber.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
