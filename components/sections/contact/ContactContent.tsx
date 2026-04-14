"use client";

import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ContactForm from "./ContactForm";
import ScrollReveal from "@/components/motion/ScrollReveal";
import PageTransition from "@/components/motion/PageTransition";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonld";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactContent() {
  const { t } = useLanguage();
  const directWa = buildWhatsAppUrl("Hi House of Barber, I have an enquiry.");

  return (
    <PageTransition>
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container">
          <ScrollReveal preset="fadeUp" className="mb-12">
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {t.contact.eyebrow}
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white mb-4">
              {t.contact.heading.split("\n").map((line, i, arr) => (
                <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
              ))}
            </h1>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ScrollReveal preset="fadeUp" delay={0.1}>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal preset="fadeUp" delay={0.2}>
              <div className="space-y-8">
                <div>
                  <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-4">
                    {t.contact.orContact}
                  </p>
                  <a
                    href={directWa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-hob-white hover:text-hob-gold transition-colors"
                  >
                    {t.contact.whatsappCta} →
                  </a>
                </div>

                <div>
                  <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-4">
                    All Locations
                  </p>
                  <ul className="space-y-3">
                    {[...UAE_LOCATIONS, ...INDIA_LOCATIONS].map((loc) => (
                      <li key={loc.id}>
                        <p className="text-sm text-hob-white">{loc.name}</p>
                        <p className="text-xs text-hob-muted leading-relaxed">{loc.address}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
