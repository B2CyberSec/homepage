/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * ShockStats: Full-width dark section with animated numbers.
 * Numbers are sized to fit within their grid cell without overflow.
 */
import { useCountUp } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

function StatBlock({ value, suffix, label, sarcasm }: {
  value: number;
  suffix: string;
  label: string;
  sarcasm: string;
}) {
  const { count, ref } = useCountUp(value, 2500);
  const { lang } = useLanguage();

  return (
    <div ref={ref} className="text-center md:text-left overflow-hidden">
      {/* Number row — capped size to prevent overflow */}
      <div className="flex items-end justify-center md:justify-start gap-1 flex-wrap">
        <span
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ff4500] leading-none tabular-nums"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {count.toLocaleString(lang === "de" ? "de-DE" : "en-US")}
        </span>
        <span
          className="text-xl md:text-2xl font-bold text-[#ff4500]/70 pb-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {suffix}
        </span>
      </div>
      <p
        className="text-white text-sm md:text-base font-bold mt-3 uppercase tracking-wide"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </p>
      <p
        className="text-white/40 text-xs mt-2 leading-relaxed"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {sarcasm}
      </p>
    </div>
  );
}

export default function ShockStats() {
  const { lang, t } = useLanguage();

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[#0a0a0a] noise-overlay">
      <div className="relative z-10 container">
        <div className="mb-16 md:mb-24">
          <p
            className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {t("stats.tag")}
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("stats.title1")}
            <br />
            <span className="text-white/40">{t("stats.title2")}</span>
          </h2>
        </div>

        {/* Stats grid — gap increased so numbers breathe */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-10">
          <StatBlock
            value={10}
            suffix={lang === "de" ? " Mio. €" : " M €"}
            label={t("stats.fine_label")}
            sarcasm={t("stats.fine_sub")}
          />
          <StatBlock
            value={29500}
            suffix=""
            label={t("stats.companies_label")}
            sarcasm={t("stats.companies_sub")}
          />
          <StatBlock
            value={80}
            suffix="%"
            label={t("stats.noncompliant_label")}
            sarcasm={t("stats.noncompliant_sub")}
          />
          <StatBlock
            value={0}
            suffix={lang === "de" ? " Tage" : " Days"}
            label={t("stats.deadline_label")}
            sarcasm={t("stats.deadline_sub")}
          />
        </div>

        <div className="mt-20 md:mt-28 p-8 md:p-12 border-l-4 border-[#ff4500] bg-white/[0.02]">
          <p
            className="text-2xl md:text-3xl text-white font-bold leading-snug"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("stats.quote")}
          </p>
          <p className="text-white/50 text-lg mt-4">
            {t("stats.quote_attr")}
          </p>
        </div>
      </div>
    </section>
  );
}
