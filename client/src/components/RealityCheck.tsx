/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * RealityCheck: Full-width split-screen image first, then 2 punchy myth/fact pairs.
 * Image carries the emotional weight. Text is minimal.
 */
import { useLanguage } from "@/contexts/LanguageContext";

const HACKER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/hacker_reality_v2-HFTdqWofzyFTGd9BgBmx9R.webp";

export default function RealityCheck() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#0d0d0d]">
      {/* Full-width split-screen image — no padding, edge-to-edge */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: "70vh" }}>
        <img
          src={HACKER_IMG}
          alt="Ihr IT-Admin entspannt — während ein Hacker Ihre Daten stiehlt"
          className="w-full h-full object-cover object-center"
          style={{ maxHeight: "70vh" }}
        />
        {/* Overlay caption — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d0d0d] to-transparent pt-20 pb-8 px-6 md:px-12">
          <p
            className="text-white/50 text-sm max-w-lg"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t("reality.image_caption")}
          </p>
        </div>
      </div>

      {/* Minimal myth/fact — only 2 pairs, punchy */}
      <div className="container py-16 md:py-20">
        <div className="mb-10">
          <p className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            {t("reality.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("reality.title1")}
            <span className="text-white/35"> {t("reality.title2")}</span>
          </h2>
        </div>

        {/* 2-column myth vs fact — compact, visual */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { myth: t("reality.myth1"), reality: t("reality.fact1") },
            { myth: t("reality.myth2"), reality: t("reality.fact2") },
          ].map((item, i) => (
            <div key={i} className="border border-white/8 bg-white/[0.02] overflow-hidden">
              {/* Myth — struck through */}
              <div className="px-6 py-5 border-b border-white/5">
                <span className="text-[10px] text-white/25 uppercase tracking-widest block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  {t("reality.believe")}
                </span>
                <p className="text-lg text-white/35 line-through decoration-[#ff4500] decoration-[1px] font-medium" style={{ fontFamily: "var(--font-display)" }}>
                  {item.myth}
                </p>
              </div>
              {/* Reality */}
              <div className="px-6 py-5 border-l-4 border-[#ff4500]">
                <span className="text-[10px] text-[#ff4500] uppercase tracking-widest font-bold block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
                  {t("reality.truth")}
                </span>
                <p className="text-white/80 text-base leading-relaxed">
                  {item.reality}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Single CTA line */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/8" />
          <a
            href="#preise"
            className="text-[#ff4500] font-bold text-sm uppercase tracking-wider hover:text-white transition-colors whitespace-nowrap"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("reality.spoiler_cta")} →
          </a>
          <div className="flex-1 h-px bg-white/8" />
        </div>
      </div>
    </section>
  );
}
