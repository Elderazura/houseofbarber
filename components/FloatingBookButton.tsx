"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

export default function FloatingBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToApp() {
    document.getElementById("app")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToApp}
          className="fixed bottom-6 right-6 z-50 md:hidden px-5 py-3 bg-hob-gold text-hob-black font-[family-name:var(--font-josefin)] text-[10px] tracking-widest uppercase shadow-lg"
          aria-label="Book via app"
        >
          Book
        </m.button>
      )}
    </AnimatePresence>
  );
}
