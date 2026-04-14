export type LocationCountry = "AE" | "IN";

export type Location = {
  id: string;
  name: string;
  type: "Gents & Kids Salon" | "Family Salon" | "Family Salon & Cafe";
  address: string;
  phone: string;
  country: LocationCountry;
};

export type ServiceCategory = "men" | "women" | "kids";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  duration: string;
  description: string;
};

export function serviceCategoryLabel(category: ServiceCategory) {
  switch (category) {
    case "men":
      return "Men"
    case "women":
      return "Women"
    case "kids":
      return "Kids"
  }
}

export type GalleryCategory = "haircuts" | "beards" | "color" | "interior" | "kids" | "all";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  categories: GalleryCategory[];
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Book Now", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

export const UAE_LOCATIONS: Location[] = [
  {
    id: "al-falah",
    name: "Al Falah Street",
    type: "Gents & Kids Salon",
    address: "Next to City Bank, Al Falah Street, Abu Dhabi, UAE",
    phone: "+971501124229",
    country: "AE",
  },
  {
    id: "reem-arc",
    name: "Reem Island – ARC Towers",
    type: "Family Salon",
    address: "Shams Boutique Gate & ARC Towers, Reem Island, Abu Dhabi, UAE",
    phone: "+97126444121",
    country: "AE",
  },
  {
    id: "wtc",
    name: "WTC Mall Souq",
    type: "Family Salon & Cafe",
    address: "Next to Rolex Showroom, WTC Mall Souq, Abu Dhabi, UAE",
    phone: "+97126418133",
    country: "AE",
  },
  {
    id: "navy-gate",
    name: "Navy Gate – TCA",
    type: "Gents & Kids Salon",
    address: "Behind Lebanese Flower, Navy Gate, TCA, Abu Dhabi, UAE",
    phone: "+971544407794",
    country: "AE",
  },
  {
    id: "reem-bay",
    name: "Reem Bay Towers",
    type: "Family Salon & Cafe",
    address: "Reem Bay Towers, Najmat, Reem Island, Abu Dhabi, UAE",
    phone: "+971508867205",
    country: "AE",
  },
];

export const INDIA_LOCATIONS: Location[] = [
  {
    id: "marathahalli",
    name: "Marathahalli, Bengaluru",
    type: "Family Salon",
    address:
      "Laavish Pro 4 Building, Spice Garden Layout, Marathahalli, Bengaluru, Karnataka, India",
    phone: "",
    country: "IN",
  },
  {
    id: "edappally-kochi",
    name: "Edappally, Kochi",
    type: "Family Salon & Cafe",
    address:
      "Opposite Lulu Mall, Ponekkara, Edappally, Kochi, Ernakulam, Kerala 682024, India",
    phone: "+917511144463",
    country: "IN",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "classic-haircut",
    title: "Classic Haircut",
    category: "men",
    duration: "45 min",
    description:
      "Our signature service. A tailored consultation, precision cut, energising shampoo and conditioning, and finishing-touch styling for a total look. This is where it all begins.",
  },
  {
    slug: "beard-design",
    title: "Beard Designing",
    category: "men",
    duration: "30 min",
    description:
      "Bring your beard to the next level. Our HOB-certified barbers sculpt, shape, and define — from classic full beards to sharp geometric styles. This isn't a trim, it's an art form.",
  },
  {
    slug: "hot-towel-shave",
    title: "Hot Towel Shave",
    category: "men",
    duration: "30 min",
    description:
      "The original luxury. A warm towel, a steady hand, and a straight razor. Post-shave cooling treatment included. Some rituals never go out of style.",
  },
  {
    slug: "hair-color-men",
    title: "Hair Color & Highlights",
    category: "men",
    duration: "60–90 min",
    description:
      "Whether you're going natural or making a statement, our color specialists handle everything from root touch-ups to full transformations. Precision mixing, clean application, lasting results.",
  },
  {
    slug: "dandruff-treatment",
    title: "Dandruff Treatment",
    category: "women",
    duration: "45 min",
    description:
      "Targeted scalp care designed to treat the root cause. A combination of specialized products and techniques to calm, balance, and restore your scalp's health.",
  },
  {
    slug: "mens-facial",
    title: "Men's Facial",
    category: "men",
    duration: "45 min",
    description:
      "Because skincare isn't optional. Our men's facial addresses the signs of daily life — stress, sun, and the march of time — with professional-grade products and techniques tailored to male skin.",
  },
  {
    slug: "kids-haircut",
    title: "Kids Haircut (Boys)",
    category: "kids",
    duration: "30 min",
    description:
      "A calm, patient experience built for young ones. We work with kids (and parents) to find the right style — and make sure they actually enjoy the chair. For boys, up to age 10.",
  },
  {
    slug: "girls-cut",
    title: "Girls Haircut (Under 10)",
    category: "kids",
    duration: "30 min",
    description:
      "Gentle, professional trims and styles for girls under 10. We make the experience fun and comfortable for every young guest.",
  },
  // Women services (family salon)
  {
    slug: "womens-haircut",
    title: "Women's Haircut & Styling",
    category: "women",
    duration: "45 min",
    description:
      "A consultation-first cut designed around your hair texture and your day-to-day life. Precision shaping, finishing details, and style guidance included.",
  },
  {
    slug: "blowout-dry",
    title: "Blowout / Blow Dry",
    category: "women",
    duration: "45 min",
    description:
      "Polished volume and smooth movement. Our stylists prep, blowout, and finish so your hair looks fresh for days.",
  },
  {
    slug: "threading-waxing",
    title: "Threading & Waxing",
    category: "women",
    duration: "30–45 min",
    description:
      "Clean shaping with careful, comfortable technique. We help you get a natural look that suits your features.",
  },
  {
    slug: "bridal-styling",
    title: "Bridal Styling (On Request)",
    category: "women",
    duration: "90 min",
    description:
      "For the big day: hair styling planned for longevity, comfort, and camera-ready definition. Availability depends on schedule.",
  },
  {
    slug: "hair-color-women",
    title: "Hair Color & Highlights (Women)",
    category: "women",
    duration: "60–120 min",
    description:
      "From natural tones to bolder transformations, our color specialists deliver clean application and lasting results with careful aftercare advice.",
  },
];

// Gallery images: these point to assets we will copy into `public/assets/hob/gallery/`.
// Category assignment is a pragmatic distribution so all filters have results.
const gallery = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "27.jpg",
  "28.jpg",
  "30.jpg",
  "31.jpg",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.jpg",
  "36.jpg",
  "37.jpg",
];

function categoriesForIndex(i: number): GalleryCategory[] {
  if (i < 12) return ["all", "haircuts", "interior"];
  if (i < 20) return ["all", "beards", "haircuts"];
  if (i < 26) return ["all", "color", "haircuts"];
  if (i < 30) return ["all", "interior"];
  return ["all", "kids", "interior"];
}

export const GALLERY_IMAGES: GalleryImage[] = gallery.map((file, i) => ({
  id: file.replace(".jpg", ""),
  src: `/assets/hob/gallery/${file}`,
  alt: `House of Barber gallery image ${file}`,
  categories: categoriesForIndex(i),
}));

