import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/jsonld";
import JsonLd from "@/components/JsonLd";
import PageTransition from "@/components/motion/PageTransition";
import ScrollReveal from "@/components/motion/ScrollReveal";

const ALL_LOCATIONS = [...UAE_LOCATIONS, ...INDIA_LOCATIONS];

export function generateStaticParams() {
  return ALL_LOCATIONS.map((loc) => ({ slug: loc.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = ALL_LOCATIONS.find((l) => l.id === slug);
  if (!loc) return {};
  return {
    title: loc.name,
    description: `${loc.type} at ${loc.address}. Book your appointment at House of Barber ${loc.name}.`,
    openGraph: { url: `https://www.houseofbarber.com/locations/${loc.id}` },
  };
}

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = ALL_LOCATIONS.find((l) => l.id === slug);
  if (!loc) notFound();

  const waUrl = buildWhatsAppUrl(
    `Hi House of Barber, I'd like to book at ${loc.name}.`
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`;

  return (
    <PageTransition>
      <JsonLd data={localBusinessSchema(loc)} />
      <JsonLd data={breadcrumbSchema([
        { name: "Home", href: "/" },
        { name: "Locations", href: "/locations" },
        { name: loc.name, href: `/locations/${loc.id}` },
      ])} />
      <main className="pt-24 pb-20 min-h-screen">
        <div className="section-container max-w-3xl">
          <ScrollReveal preset="fadeUp">
            <Link
              href="/locations"
              className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase hover:text-hob-gold transition-colors inline-block mb-8"
            >
              ← All locations
            </Link>
            <span className="font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.3em] text-hob-gold uppercase block mb-3">
              {loc.type}
            </span>
            <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-hob-white mb-8">
              {loc.name}
            </h1>
          </ScrollReveal>

          <ScrollReveal preset="fadeUp" delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bento-card p-6">
                <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-2">
                  Address
                </p>
                <p className="text-sm text-hob-white leading-relaxed">
                  {loc.address}
                </p>
              </div>
              {loc.phone && (
                <div className="bento-card p-6">
                  <p className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-sm text-hob-white hover:text-hob-gold transition-colors"
                  >
                    {loc.phone}
                  </a>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-hob-gold text-hob-gold font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
              >
                Book via WhatsApp
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 border border-white/10 text-hob-muted font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] uppercase hover:border-hob-gold hover:text-hob-gold transition-all"
              >
                Open in Maps →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </PageTransition>
  );
}
