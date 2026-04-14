"use client";

import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

export default function DirApplier() {
  const { locale, isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, isRTL]);

  return null;
}
