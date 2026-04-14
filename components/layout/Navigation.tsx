"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/hob-content";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <m.header
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-hob-black/92 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] text-hob-white uppercase"
          >
            H O B
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-[family-name:var(--font-josefin)] text-[10px] tracking-widest uppercase transition-colors duration-200 ${
                  pathname === item.href
                    ? "text-hob-gold"
                    : "text-hob-muted hover:text-hob-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#app"
            className="hidden md:inline-flex items-center px-4 py-2 border border-hob-gold text-hob-gold font-[family-name:var(--font-josefin)] text-[9px] tracking-[0.2em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
          >
            Book
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-hob-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </m.header>

      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-hob-black flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className={`font-[family-name:var(--font-cormorant)] text-3xl font-light transition-colors ${
                      pathname === item.href ? "text-hob-gold" : "text-hob-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05, duration: 0.3 }}
              >
                <Link
                  href="#app"
                  className="mt-4 inline-flex items-center px-8 py-3 border border-hob-gold text-hob-gold font-[family-name:var(--font-josefin)] text-xs tracking-widest uppercase"
                >
                  Book via App
                </Link>
              </m.div>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
