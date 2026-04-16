"use client";

import Link from "next/link";
import Image from "next/image";
import { UAE_LOCATIONS, INDIA_LOCATIONS, NAV_ITEMS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const waUrl = buildWhatsAppUrl("Hi House of Barber, I'd like to make an enquiry.");

  return (
    <footer className="bg-hob-dark border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link
              href="/"
              className="relative mb-4 block h-16 w-16 overflow-hidden rounded-full border border-white/10"
            >
              <Image
                src="/logo.png"
                alt="House of Barber"
                fill
                sizes="64px"
                className="object-cover"
              />
            </Link>
            <p className="text-sm text-hob-muted leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/houseofbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/houseofbarber"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted hover:text-hob-gold uppercase transition-colors"
              >
                Facebook
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold hover:text-hob-gold-lt uppercase transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              {t.footer.uaeLocations}
            </p>
            <ul className="space-y-2">
              {UAE_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              {t.footer.indiaLocations}
            </p>
            <ul className="space-y-2 mb-8">
              {INDIA_LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.id}`}
                    className="text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-4">
              {t.footer.explore}
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-hob-muted hover:text-hob-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-rule mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase">
            © {new Date().getFullYear()} House of Barber. {t.footer.allRights}
          </p>
          <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase">
            {t.footer.taglineBottom}
          </p>
        </div>
      </div>
    </footer>
  );
}
