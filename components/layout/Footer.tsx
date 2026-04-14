import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";

const FOOTER_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Book Appointment", href: "/booking" },
];

const UAE_BRANCHES = [
  { name: "Al Falah St", type: "Gents & Kids" },
  { name: "Reem Island", type: "Family" },
  { name: "WTC Mall Souq", type: "Family + Café" },
  { name: "Navy Gate - TCA", type: "Gents & Kids" },
  { name: "Reem Bay Towers", type: "Family" },
];

export default function Footer() {
  return (
    <footer className="relative bg-hob-dark border-t border-hob-warm-white/10 pt-24 pb-12 overflow-hidden">
      {/* Decorative Branding */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none w-full text-center">
        <h1 className="text-[15vw] font-playfair uppercase whitespace-nowrap">HOUSE OF BARBER</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="relative w-40 h-20">
              <Image
                src="/logo.png"
                alt="House of Barber"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-hob-warm-white/50 font-dm-sans text-sm leading-relaxed max-w-xs">
              Abu Dhabi&apos;s premier family grooming destination. 
              Modern precision with 1920s country-club soul.
            </p>
            <div className="flex items-center gap-6 text-hob-gold">
              <a href="https://instagram.com/houseofbarber_" target="_blank" className="hover:scale-110 transition-transform"><Instagram className="w-5 h-5" /></a>
              <a href="mailto:admin@houseofbarber.com" className="hover:scale-110 transition-transform"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-hob-gold font-josefin text-xs uppercase tracking-[0.3em] font-semibold">Explore</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-hob-warm-white/60 hover:text-hob-gold transition-colors text-sm font-dm-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UAE Locations */}
          <div className="space-y-8">
            <h4 className="text-hob-gold font-josefin text-xs uppercase tracking-[0.3em] font-semibold">UAE Locations</h4>
            <ul className="space-y-4">
              {UAE_BRANCHES.map((branch) => (
                <li key={branch.name} className="space-y-1">
                  <p className="text-hob-warm-white text-sm font-dm-sans">{branch.name}</p>
                  <p className="text-hob-gold/50 text-[10px] uppercase tracking-widest">{branch.type}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* India & Contact */}
          <div className="space-y-8">
            <h4 className="text-hob-gold font-josefin text-xs uppercase tracking-[0.3em] font-semibold">India & Contact</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-hob-warm-white text-sm font-dm-sans">Marathahalli, Bengaluru</p>
                <p className="text-hob-gold/50 text-[10px] uppercase tracking-widest">Family Salon</p>
              </div>
              <div className="space-y-4 pt-4 border-t border-hob-warm-white/5">
                <div className="flex items-center gap-3 text-hob-warm-white/60 text-sm">
                  <Phone className="w-4 h-4 text-hob-gold" />
                  <span>+971 50 112 4229</span>
                </div>
                <div className="flex items-center gap-3 text-hob-warm-white/60 text-sm">
                  <Mail className="w-4 h-4 text-hob-gold" />
                  <span>admin@houseofbarber.com</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-hob-warm-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-hob-mid-gray text-[10px] uppercase tracking-widest">
            © 2025 House of Barber. All Rights Reserved.
          </p>
          <div className="flex items-center gap-8 text-hob-mid-gray text-[10px] uppercase tracking-widest font-josefin">
            <Link href="/privacy" className="hover:text-hob-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-hob-gold transition-colors">Terms of Use</Link>
            <span className="opacity-30">|</span>
            <span className="text-hob-gold/40">Powered by Azura Creative Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
