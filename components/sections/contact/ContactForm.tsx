"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UAE_LOCATIONS, INDIA_LOCATIONS } from "@/lib/hob-content";
import { buildWhatsAppUrl, buildBookingMessage } from "@/lib/whatsapp";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const schema = z.object({
  name:     z.string().min(2, "Name must be at least 2 characters"),
  phone:    z.string().min(7, "Enter a valid phone number"),
  location: z.string().min(1, "Please select a location"),
  message:  z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    const text = buildBookingMessage({
      name: data.name,
      phone: data.phone,
      location: data.location,
      message: data.message ?? "",
    });
    const url = buildWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-lg">
      <div>
        <label className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {t.contact.name}
        </label>
        <input
          {...register("name")}
          placeholder={t.contact.namePlaceholder}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors"
        />
        {errors.name && (
          <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {t.contact.phone}
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder={t.contact.phonePlaceholder}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors"
        />
        {errors.phone && (
          <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {t.contact.location}
        </label>
        <select
          {...register("location")}
          className="w-full bg-hob-dark border border-white/10 px-4 py-3 text-sm text-hob-white focus:outline-none focus:border-hob-gold transition-colors appearance-none"
        >
          <option value="">{t.contact.selectDefault}</option>
          <optgroup label="UAE">
            {UAE_LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.name}>{loc.name}</option>
            ))}
          </optgroup>
          <optgroup label="India">
            {INDIA_LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.name}>{loc.name}</option>
            ))}
          </optgroup>
        </select>
        {errors.location && (
          <p className="text-xs text-red-400 mt-1">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="font-[family-name:var(--font-josefin)] text-[9px] tracking-widest text-hob-gold uppercase block mb-2">
          {t.contact.message}
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder={t.contact.messagePlaceholder}
          className="w-full bg-transparent border border-white/10 px-4 py-3 text-sm text-hob-white placeholder:text-hob-muted/50 focus:outline-none focus:border-hob-gold transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 border border-hob-gold text-hob-gold font-[family-name:var(--font-josefin)] text-[10px] tracking-[0.25em] uppercase hover:bg-hob-gold hover:text-hob-black transition-all duration-200"
      >
        {t.contact.submit} →
      </button>
    </form>
  );
}
