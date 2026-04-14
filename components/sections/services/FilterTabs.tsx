"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ServiceCategory } from "@/lib/hob-content";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FilterTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = (searchParams.get("cat") ?? "all") as "all" | ServiceCategory;
  const { t } = useLanguage();

  const tabs: { label: string; value: "all" | ServiceCategory }[] = [
    { label: t.servicesPage.filterAll,   value: "all" },
    { label: t.servicesPage.filterMen,   value: "men" },
    { label: t.servicesPage.filterWomen, value: "women" },
    { label: t.servicesPage.filterKids,  value: "kids" },
  ];

  function setFilter(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value === "all") params.delete("cat");
    else params.set("cat", value);
    router.push(`/services?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setFilter(tab.value)}
          className={`font-[family-name:var(--font-josefin)] text-[9px] tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
            current === tab.value
              ? "border-hob-gold bg-hob-gold text-hob-black"
              : "border-white/10 text-hob-muted hover:border-hob-gold hover:text-hob-gold"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
