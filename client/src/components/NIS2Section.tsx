/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * NIS2: Dramatic urgency section. Expired deadline. Massive fine.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const NIS2_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/nis2_warning-R6oDALLvTSZbdCTdEMEehF.webp";

export default function NIS2Section() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const requirements = [
    { title: t("nis2.req1_title"), desc: t("nis2.req1_desc") },
    { title: t("nis2.req2_title"), desc: t("nis2.req2_desc") },
    { title: t("nis2.req3_title"), desc: t("nis2.req3_desc") },
    { title: t("nis2.req4_title"), desc: t("nis2.req4_desc") },
    { title: t("nis2.req5_title"), desc: t("nis2.req5_desc") },
    { title: t("nis2.req6_title"), desc: t("nis2.req6_desc") },
  ];

  return (
    <section id="nis2" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={NIS2_BG} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
      </div>

      <div ref={ref} className="relative z-10 container">
        <div className="max-w-4xl">
          <div className={`inline-flex items-center gap-3 mb-8 px-4 py-2 bg-[#ff4500]/10 border border-[#ff4500]/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-2 h-2 bg-[#ff4500] rounded-full animate-pulse" />
            <span className="text-[#ff4500] text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
              {t("nis2.badge")}
            </span>
          </div>

          <h2 className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ fontFamily: "var(--font-display)" }}>
            {t("nis2.title1")}
            <br />
            <span className="text-[#ff4500]">{t("nis2.title2")}</span>
            <br />
            <span className="text-white/40">{t("nis2.title3")}</span>
          </h2>

          <div className={`space-y-6 mb-12 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              {t("nis2.text1_pre")}
              <span className="text-white font-bold">{t("nis2.text1_date1")}</span>
              {t("nis2.text1_mid")}
              <span className="text-[#ff4500] font-bold">{t("nis2.text1_date2")}</span>
              {t("nis2.text1_post")}
            </p>
            <p className="text-base text-white/50" style={{ fontFamily: "var(--font-mono)" }}>
              {t("nis2.text2")}
            </p>
          </div>

          <p className="text-white font-bold text-lg uppercase tracking-wide mb-6" style={{ fontFamily: "var(--font-display)" }}>
            {t("nis2.what_title")}
          </p>

          <div className={`grid sm:grid-cols-2 gap-4 mb-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {requirements.map((item, i) => (
              <div key={i} className="p-4 border border-white/5 bg-white/[0.02]">
                <p className="text-white font-bold text-sm uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </p>
                <p className="text-white/50 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href="#preise" className="inline-flex items-center justify-center px-8 py-4 bg-[#ff4500] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#ff5a1a] transition-all" style={{ fontFamily: "var(--font-display)" }}>
              {t("nis2.cta1")}
            </a>
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white/80 font-bold uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all" style={{ fontFamily: "var(--font-display)" }}>
              {t("nis2.cta2")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
