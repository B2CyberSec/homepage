/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * ShockStats: The infographic image IS the section. Minimal text above and below.
 * "Weniger ist mehr" — numbers speak for themselves visually.
 */
import { useLanguage } from "@/contexts/LanguageContext";

const STATS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/stats_infographic_v2-mRk7phpMp36aa9JESmoshP.webp";

export default function ShockStats() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="container">
        {/* Minimal header */}
        <div className="mb-10 md:mb-14">
          <p
            className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t("stats.tag")}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("stats.title1")}
            <span className="text-white/35"> {t("stats.title2")}</span>
          </h2>
        </div>

        {/* The infographic — full width, image does the heavy lifting */}
        <div className="relative w-full overflow-hidden">
          <img
            src={STATS_IMG}
            alt="NIS-2 Statistiken: 10 Mio. € Bußgeld, 29.508 betroffene Unternehmen, 80% nicht compliant, 0 Tage BSI-Frist"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>

        {/* Single punchy quote below — no paragraph walls */}
        <div className="mt-10 md:mt-14 flex items-start gap-4 border-l-4 border-[#ff4500] pl-6 py-2">
          <p
            className="text-xl md:text-2xl text-white font-bold leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("stats.quote")}
          </p>
        </div>
      </div>
    </section>
  );
}
