// lib/jsonld.ts
import { Location } from "./hob-content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "House of Barber",
    url: "https://www.houseofbarber.com",
    logo: "https://www.houseofbarber.com/assets/hob/logo/hob-logo.png",
    sameAs: [
      "https://www.instagram.com/houseofbarber",
      "https://www.facebook.com/houseofbarber",
      "https://apps.apple.com/in/app/house-of-barber/id1571444397",
      "https://play.google.com/store/apps/details?id=com.saloon.hob",
    ],
  };
}

export function localBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://www.houseofbarber.com/locations/${location.id}`,
    name: `House of Barber — ${location.name}`,
    description: `${location.type} at ${location.address}`,
    url: `https://www.houseofbarber.com/locations/${location.id}`,
    telephone: location.phone || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressCountry: location.country,
    },
    image: "https://www.houseofbarber.com/assets/hob/brand/hob-brand-1.png",
    priceRange: "$$",
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `https://www.houseofbarber.com${c.href}`,
    })),
  };
}
