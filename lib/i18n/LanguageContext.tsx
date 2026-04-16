"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { en } from "./translations/en";
import { ar } from "./translations/ar";
import type { Translation } from "./translations/en";

type Locale = "en" | "ar";

interface LanguageContextValue {
  locale: Locale;
  t: Translation;
  toggleLocale: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  t: en as Translation,
  toggleLocale: () => {},
  isRTL: false,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("hob-locale") as Locale | null;
    return saved === "ar" || saved === "en" ? saved : "en";
  });

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "ar" : "en";
      localStorage.setItem("hob-locale", next);
      return next;
    });
  }, []);

  const isRTL = locale === "ar";
  const t: Translation = locale === "ar" ? ar : (en as Translation);

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLocale, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
