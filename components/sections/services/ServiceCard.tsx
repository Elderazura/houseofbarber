import { Service } from "@/lib/hob-content";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function ServiceCard({ service }: { service: Service }) {
  const waMessage = `Hi House of Barber, I'd like to book: ${service.title}`;
  const waUrl = buildWhatsAppUrl(waMessage);

  return (
    <div className="bento-card flex flex-col justify-between p-6 min-h-[200px]">
      <div>
        <div className="flex items-start justify-between mb-3">
          <span className="font-[family-name:var(--font-josefin)] text-[8px] tracking-widest text-hob-gold uppercase px-2 py-1 border border-hob-gold/30 bg-hob-gold/5">
            {service.category}
          </span>
          <span className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-muted uppercase">
            {service.duration}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-hob-white mb-3">
          {service.title}
        </h3>
        <p className="text-xs text-hob-muted leading-relaxed">
          {service.description}
        </p>
      </div>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase hover:text-hob-gold-lt transition-colors"
      >
        Book via App →
      </a>
    </div>
  );
}
