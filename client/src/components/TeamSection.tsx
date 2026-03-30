/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * Team: Full-bleed image with 4 key stats overlaid. One sentence. No paragraphs.
 */
import { useLanguage } from "@/contexts/LanguageContext";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/team_augsburg-isMkQDs3DeU7fBD9uvXdhZ.webp";

export default function TeamSection() {
  const { t } = useLanguage();

  const stats = [
    { num: t("team.stat1_num"), label: t("team.stat1_label") },
    { num: t("team.stat2_num"), label: t("team.stat2_label") },
    { num: t("team.stat3_num"), label: t("team.stat3_label") },
    { num: t("team.stat4_num"), label: t("team.stat4_label") },
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="container">
        {/* Minimal header */}
        <div className="mb-10">
          <p className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            {t("team.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("team.title1")}
            <span className="text-white/35"> {t("team.title2")}</span>
          </h2>
        </div>

        {/* Full-width image with stats overlaid at bottom */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: "55vh" }}>
          <img
            src={TEAM_IMG}
            alt="B2CyberSec Team — 17 IT-Security-Experten aus Augsburg"
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: "55vh" }}
            loading="lazy"
          />
          {/* Dark gradient at bottom for stats readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />

          {/* Stats overlaid at bottom */}
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className="px-4 md:px-8 py-5 bg-black/60 backdrop-blur-sm text-center">
                <span className="text-[#ff4500] font-bold block text-2xl md:text-4xl leading-none" style={{ fontFamily: "var(--font-display)" }}>
                  {stat.num}
                </span>
                <span className="text-white/60 text-xs md:text-sm block mt-1 uppercase tracking-wide" style={{ fontFamily: "var(--font-mono)" }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Single sarcastic line below */}
        <p
          className="mt-8 text-white/35 text-sm text-center"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {t("team.p3")}
        </p>
      </div>
    </section>
  );
}
