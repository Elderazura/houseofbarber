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
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
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
  if (i < 5)  return ["all", "haircuts"];
  if (i < 10) return ["all", "beards"];
  if (i < 14) return ["all", "interior"];
  if (i < 20) return ["all", "haircuts", "beards"];
  if (i < 26) return ["all", "color"];
  if (i < 30) return ["all", "interior"];
  return ["all", "kids"];
}

const galleryAltText: Record<string, string> = {
  "1":  "Men's precision haircut at House of Barber, Abu Dhabi",
  "2":  "Classic fade and taper at House of Barber salon",
  "3":  "Men's grooming session — cut and style, Abu Dhabi",
  "4":  "Sharp scissor cut finish at House of Barber",
  "5":  "Modern textured crop at House of Barber, UAE",
  "6":  "Beard shaping and line-up at House of Barber",
  "7":  "Full beard grooming and hot towel shave",
  "8":  "Beard design and contour at House of Barber",
  "9":  "Beard trim and styling session, Abu Dhabi",
  "10": "Classic straight-razor shave at House of Barber",
  "11": "Premium barber chair and salon interior, House of Barber",
  "13": "House of Barber salon interior — warm lighting and classic decor",
  "14": "Barber station detail at House of Barber, Abu Dhabi",
  "15": "Men's haircut in progress at House of Barber",
  "16": "Fade haircut side profile at House of Barber",
  "17": "Clean taper fade by House of Barber stylist",
  "18": "Men's cut and beard combo service, Abu Dhabi",
  "19": "Precision cut and finish at House of Barber",
  "20": "Hair texture and styling result at House of Barber",
  "21": "Hair colour application at House of Barber",
  "22": "Women's hair colour and highlights, House of Barber",
  "23": "Balayage colour result at House of Barber salon",
  "27": "Hair colour treatment in progress, Abu Dhabi",
  "28": "Vibrant hair colour finish at House of Barber",
  "30": "House of Barber lounge and waiting area",
  "31": "Salon interior detail — House of Barber UAE",
  "32": "Kids' haircut at House of Barber family salon",
  "33": "Children's cut and styling, House of Barber",
  "34": "Fun kids' haircut at House of Barber",
  "35": "Kids' grooming service at House of Barber, Abu Dhabi",
  "36": "House of Barber premium salon experience",
  "37": "House of Barber — family salon and cafe, WTC Abu Dhabi",
};

export const GALLERY_IMAGES: GalleryImage[] = gallery.map((file, i) => {
  const id = file.replace(".jpg", "");
  return {
    id,
    src: `/assets/hob/gallery/${file}`,
    alt: galleryAltText[id] ?? `House of Barber gallery — ${file}`,
    categories: categoriesForIndex(i),
  };
});

