import type { Metadata } from "next";
import {
  Playfair_Display,
  Cormorant_Garamond,
  DM_Sans,
  Josefin_Sans,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-josefin",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.houseofbarber.com"),
  title: {
    default: "House of Barber | Premium Family Salon — Abu Dhabi",
    template: "%s | House of Barber",
  },
  description:
    "House of Barber — premium family salon and barbershop in Abu Dhabi, UAE and India. Expert grooming for men, women, and kids across 7 locations.",
  keywords: [
    "barber abu dhabi",
    "family salon abu dhabi",
    "mens haircut abu dhabi",
    "house of barber",
    "barbershop uae",
    "salon bengaluru",
  ],
  openGraph: {
    siteName: "House of Barber",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/hob/brand/hob-brand-1.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${josefin.variable}`}
    >
      <body className="font-[family-name:var(--font-dm-sans)] bg-hob-black text-hob-white">
        {children}
      </body>
    </html>
  );
}
