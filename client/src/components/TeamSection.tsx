/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Team: SOC image background. Stats about the team.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/team_augsburg-isMkQDs3DeU7fBD9uvXdhZ.webp";

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const stats = [
    { num: t("team.stat1_num"), label: t("team.stat1_label"), sub: t("team.stat1_sub") },
    { num: t("team.stat2_num"), label: t("team.stat2_label"), sub: t("team.stat2_sub") },
    { num: t("team.stat3_num"), label: t("team.stat3_label"), sub: t("team.stat3_sub") },
    { num: t("team.stat4_num"), label: t("team.stat4_label"), sub: t("team.stat4_sub") },
    { num: t("team.stat5_num"), label: t("team.stat5_label"), sub: t("team.stat5_sub") },
    { num: t("team.stat6_num"), label: t("team.stat6_label"), sub: t("team.stat6_sub") },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={TEAM_IMG} alt="" className="w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div ref={ref} className="relative z-10 container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              {t("team.tag")}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8" style={{ fontFamily: "var(--font-display)" }}>
              {t("team.title1")}
              <br />
              {t("team.title2")}
              <br />
              <span className="text-white/40">{t("team.title3")}</span>
            </h2>
            <div className="space-y-4 text-white/60 text-lg leading-relaxed">
              <p>{t("team.p1")}</p>
              <p>
                {t("team.p2_pre")}
                <span className="text-white font-bold">{t("team.p2_bold")}</span>
                {t("team.p2_post")}
              </p>
              <p className="text-white/40" style={{ fontFamily: "var(--font-mono)" }}>
                {t("team.p3")}
              </p>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {stats.map((stat, i) => (
              <div key={i} className="p-5 border border-white/5 bg-white/[0.02]">
                <span className="text-3xl md:text-4xl font-bold text-[#ff4500] block" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.num}
                </span>
                <span className="text-white text-sm font-bold block mt-1" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.label}
                </span>
                <span className="text-white/30 text-xs block mt-1" style={{ fontFamily: "var(--font-mono)" }}>
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
