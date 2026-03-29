/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * RealityCheck: Strikethrough "what companies believe" vs reality.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const HACKER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/hacker_dark-B93b29xMCzRzM7BbPD2Vi6.webp";

export default function RealityCheck() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const myths = [
    { myth: t("reality.myth1"), reality: t("reality.fact1") },
    { myth: t("reality.myth2"), reality: t("reality.fact2") },
    { myth: t("reality.myth3"), reality: t("reality.fact3") },
    { myth: t("reality.myth4"), reality: t("reality.fact4") },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#0d0d0d]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image + Title */}
          <div className="lg:sticky lg:top-32">
            <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              {t("reality.tag")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
              {t("reality.title1")}
              <br />
              <span className="text-white/40">{t("reality.title2")}</span>
              <br />
              {t("reality.title3")}
              <span className="text-[#ff4500]">{t("reality.title4")}</span>
              {t("reality.title5")}
            </h2>
            <div className="relative aspect-video rounded-sm overflow-hidden mt-8">
              <img src={HACKER_IMG} alt="Hacker at work" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white/50 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                  {t("reality.image_caption")}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Myth vs Reality cards */}
          <div ref={ref} className="flex flex-col gap-8">
            {myths.map((item, i) => (
              <div
                key={i}
                className={`p-6 md:p-8 border border-white/5 bg-white/[0.02] transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-4">
                  <span className="text-xs text-white/30 uppercase tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                    {t("reality.believe")}
                  </span>
                  <p className="text-xl md:text-2xl text-white/40 line-through decoration-[#ff4500] decoration-2 mt-2 font-medium" style={{ fontFamily: "var(--font-display)" }}>
                    {item.myth}
                  </p>
                </div>
                <div className="pl-4 border-l-2 border-[#ff4500]">
                  <span className="text-xs text-[#ff4500] uppercase tracking-wider font-bold" style={{ fontFamily: "var(--font-mono)" }}>
                    {t("reality.truth")}
                  </span>
                  <p className="text-white/80 text-base md:text-lg mt-2 leading-relaxed">
                    {item.reality}
                  </p>
                </div>
              </div>
            ))}

            {/* Sarcastic closer */}
            <div className="p-6 md:p-8 bg-[#ff4500]/10 border border-[#ff4500]/20">
              <p className="text-[#ff4500] text-lg font-bold" style={{ fontFamily: "var(--font-display)" }}>
                {t("reality.spoiler_title")}
              </p>
              <p className="text-white/70 text-base mt-2">
                {t("reality.spoiler_text")}
              </p>
              <a href="#preise" className="inline-flex items-center mt-4 text-[#ff4500] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                {t("reality.spoiler_cta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
