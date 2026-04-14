// lib/whatsapp.ts
const HOB_WHATSAPP = "971501124229";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${HOB_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

export function buildBookingMessage({
  name,
  phone,
  location,
  message,
}: {
  name: string;
  phone: string;
  location: string;
  message: string;
}): string {
  return [
    `Hi House of Barber,`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred Location: ${location}`,
    ``,
    message ? `Message: ${message}` : "",
  ]
    .filter((l) => l !== undefined)
    .join("\n")
    .trim();
}
