import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS, NAV_ITEMS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  const waUrl = buildWhatsAppUrl("Hi House of Barber, I'd like to make an enquiry.");

  return (
    <footer className="bg-hob-dark border-t border-white/5 pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-[family-name:var(--font-cormorant)] text-2xl tracking-[0.3em] text-hob-white uppercase mb-4">
              H O B
            </div>
            <p className="text-sm text-hob-muted leading-relaxed max-w-xs">
              Premium family salon and barbershop. Precision grooming for men,
              women, and kids across Abu Dhabi and India.
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
              UAE Locations
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
              India Locations
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
              Explore
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
            © {new Date().getFullYear()} House of Barber. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase">
            The Chair Has Always Been Yours.
          </p>
        </div>
      </div>
    </footer>
  );
}
