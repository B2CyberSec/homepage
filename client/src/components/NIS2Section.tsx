/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * NIS2: Full-bleed background image. Deadline badge. 3 key facts as icons. No walls of text.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { AlertTriangle, Euro, Clock } from "lucide-react";

const NIS2_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/nis2_warning-R6oDALLvTSZbdCTdEMEehF.webp";

export default function NIS2Section() {
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const facts = [
    { Icon: Clock, value: "6. März 2026", label: t("nis2.fact_deadline") },
    { Icon: Euro, value: "10 Mio. €", label: t("nis2.fact_fine") },
    { Icon: AlertTriangle, value: "29.508", label: t("nis2.fact_companies") },
  ];

  return (
    <section id="nis2" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img src={NIS2_BG} alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/60" />
      </div>

      <div className="relative z-10 container py-20 md:py-28">
        {/* Expired badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#ff4500] text-white">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-widest" style={{ fontFamily: "var(--font-mono)" }}>
            {t("nis2.badge")}
          </span>
        </div>

        {/* Headline — 2 lines max */}
        <h2
          className="font-bold text-white leading-tight mb-10"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          {t("nis2.title1")}
          <br />
          <span className="text-[#ff4500]">{t("nis2.title2")}</span>
        </h2>

        {/* 3 key facts as horizontal cards — visual, scannable */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl">
          {facts.map(({ Icon, value, label }, i) => (
            <div key={i} className="p-4 border border-white/10 bg-black/40 backdrop-blur-sm text-center">
              <Icon className="text-[#ff4500] mx-auto mb-2" size={22} />
              <p className="text-white font-bold text-lg md:text-2xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
                {value}
              </p>
              <p className="text-white/45 text-xs mt-1 uppercase tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Single CTA */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#preise"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] text-white font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-all"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("nis2.cta1")} →
          </a>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white/70 font-bold uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("nis2.cta2")}
          </a>
        </div>
      </div>
    </section>
  );
}
