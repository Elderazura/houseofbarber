"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBg = useTransform(
    scrollY, 
    [0, 100], 
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"]
  );
  
  const navPadding = useTransform(scrollY, [0, 100], ["2.5rem", "1.5rem"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.nav
      style={{ 
        backgroundColor: navBg,
        paddingTop: navPadding,
        paddingBottom: navPadding,
        backdropFilter: navBlur
      }}
      className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Desktop Links Left */}
        <div className="hidden lg:flex items-center gap-8 flex-1">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-josefin uppercase tracking-[0.3em] text-hob-warm-white/60 hover:text-hob-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo Middle */}
        <div className="flex-shrink-0 relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="House of Barber"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Desktop Links Right */}
        <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
          {NAV_LINKS.slice(3).map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[10px] font-josefin uppercase tracking-[0.3em] text-hob-warm-white/60 hover:text-hob-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking"
            className="px-6 py-3 border border-hob-gold text-hob-gold font-josefin uppercase text-[10px] tracking-[0.2em] hover:bg-hob-gold hover:text-hob-black transition-all duration-500 rounded-sm ml-4"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-hob-gold p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-hob-black z-[110] flex flex-col items-center justify-center lg:hidden"
      >
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-10 right-10 text-hob-gold"
        >
          <X className="w-8 h-8" />
        </button>
        
        <div className="flex flex-col items-center gap-10">
          {NAV_LINKS.map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-cormorant italic text-hob-warm-white hover:text-hob-gold transition-colors"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.9 }}
            transition={{ delay: NAV_LINKS.length * 0.1 }}
          >
            <Link 
              href="/booking"
              onClick={() => setIsOpen(false)}
              className="mt-6 px-12 py-4 bg-hob-gold text-hob-black font-josefin uppercase font-bold text-sm tracking-widest"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
