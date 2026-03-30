/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Pricing: Transparent, bold pricing tables.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const einmalig = [
    {
      name: t("pricing.quickcheck_name"), price: t("pricing.quickcheck_price"), period: t("pricing.quickcheck_unit"),
      tagline: t("pricing.quickcheck_sub"), featured: false, cta: t("pricing.quickcheck_cta"),
      features: [t("pricing.quickcheck_f1"), t("pricing.quickcheck_f2"), t("pricing.quickcheck_f3"), t("pricing.quickcheck_f4")],
    },
    {
      name: t("pricing.audit_name"), price: t("pricing.audit_price"), period: t("pricing.quickcheck_unit"),
      tagline: t("pricing.audit_sub"), featured: true, cta: t("pricing.audit_cta"),
      features: [t("pricing.audit_f1"), t("pricing.audit_f2"), t("pricing.audit_f3"), t("pricing.audit_f4"), t("pricing.audit_f5"), t("pricing.audit_f6")],
    },
    {
      name: t("pricing.komplett_name"), price: t("pricing.komplett_price"), period: t("pricing.quickcheck_unit"),
      tagline: t("pricing.komplett_sub"), featured: false, cta: t("pricing.komplett_cta"),
      features: [t("pricing.komplett_f1"), t("pricing.komplett_f2"), t("pricing.komplett_f3"), t("pricing.komplett_f4"), t("pricing.komplett_f5"), t("pricing.komplett_f6")],
    },
  ];

  return (
    <section id="preise" className="relative py-24 md:py-32 bg-[#0d0d0d]">
      <div ref={ref} className="container">
        <div className="mb-16 md:mb-20">
          <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            {t("pricing.tag")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("pricing.title1")}
            <br />
            <span className="text-white/40">{t("pricing.title2")}</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-2xl">{t("pricing.desc")}</p>
        </div>

        {/* Fixed-price packages */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t("pricing.fixed_title")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {einmalig.map((pkg, i) => (
              <div
                key={i}
                className={`relative flex flex-col p-6 md:p-8 border transition-all duration-700 ${pkg.featured ? "border-[#ff4500]/50 bg-[#ff4500]/[0.05]" : "border-white/5 bg-white/[0.02]"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-[#ff4500] text-white text-xs font-bold uppercase tracking-wider">
                    {t("pricing.popular")}
                  </div>
                )}
                <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.name}</h4>
                <p className="text-white/40 text-sm mt-1 mb-6" style={{ fontFamily: "var(--font-mono)" }}>{pkg.tagline}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.price}</span>
                  <span className="text-white/40 text-sm">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
                  className={`block text-center py-3 font-bold text-sm uppercase tracking-wider transition-all ${pkg.featured ? "bg-[#ff4500] text-white hover:bg-[#ff5a1a]" : "border border-white/20 text-white/80 hover:border-[#ff4500] hover:text-[#ff4500]"}`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {pkg.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Pentesting */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t("pricing.pentest_title")}
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.pentest_sub")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: t("pricing.pentest_starter"), price: t("pricing.pentest_starter_price"), time: t("pricing.pentest_starter_time"),
                features: [t("pricing.pentest_s_f1"), t("pricing.pentest_s_f2"), t("pricing.pentest_s_f3"), t("pricing.pentest_s_f4"), t("pricing.pentest_s_f5")] },
              { name: t("pricing.pentest_pro"), price: t("pricing.pentest_pro_price"), time: t("pricing.pentest_pro_time"),
                features: [t("pricing.pentest_p_f1"), t("pricing.pentest_p_f2"), t("pricing.pentest_p_f3"), t("pricing.pentest_p_f4"), t("pricing.pentest_p_f5"), t("pricing.pentest_p_f6")] },
            ].map((pkg, i) => (
              <div key={i} className="flex flex-col p-6 md:p-8 border border-white/5 bg-white/[0.02]">
                <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.name}</h4>
                <div className="flex items-baseline gap-2 mt-2 mb-1">
                  <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.price}</span>
                </div>
                <p className="text-white/30 text-xs mb-6" style={{ fontFamily: "var(--font-mono)" }}>{pkg.time}</p>
                <ul className="space-y-2 flex-1">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-white/70 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer"
                  className="block text-center mt-6 py-3 border border-white/20 text-white/80 font-bold text-sm uppercase tracking-wider hover:border-[#ff4500] hover:text-[#ff4500] transition-all"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {t("pricing.pentest_cta")}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Subscriptions */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t("pricing.abo_title")}
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.abo_sub")}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t("pricing.ciso_name"), price: t("pricing.ciso_price_val"), unit: t("pricing.ciso_unit"), time: t("pricing.ciso_time"),
                features: [t("pricing.ciso_f1"), t("pricing.ciso_f2"), t("pricing.ciso_f3"), t("pricing.ciso_f4")] },
              { name: t("pricing.nis2care_name"), price: t("pricing.nis2care_price"), unit: t("pricing.ciso_unit"), time: t("pricing.nis2care_time"),
                features: [t("pricing.nis2care_f1"), t("pricing.nis2care_f2"), t("pricing.nis2care_f3"), t("pricing.nis2care_f4")] },
              { name: t("pricing.mssp_basic_name"), price: t("pricing.mssp_basic_price"), unit: t("pricing.ciso_unit"), time: t("pricing.mssp_basic_time"),
                features: [t("pricing.mssp_basic_f1"), t("pricing.mssp_basic_f2"), t("pricing.mssp_basic_f3")] },
              { name: t("pricing.mssp_pro_name"), price: t("pricing.mssp_pro_price"), unit: t("pricing.ciso_unit"), time: t("pricing.mssp_pro_time"),
                features: [t("pricing.mssp_pro_f1"), t("pricing.mssp_pro_f2"), t("pricing.mssp_pro_f3"), t("pricing.mssp_pro_f4")] },
            ].map((pkg, i) => (
              <div key={i} className="flex flex-col p-6 border border-white/5 bg-white/[0.02]">
                <h4 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.name}</h4>
                <div className="flex items-baseline gap-1 mt-2 mb-1">
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{pkg.price}</span>
                  <span className="text-white/40 text-sm">{pkg.unit}</span>
                </div>
                <p className="text-white/30 text-xs mb-4" style={{ fontFamily: "var(--font-mono)" }}>{pkg.time}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="text-[#ff4500] mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-white/60 text-xs">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Augmentation */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-display)" }}>
            {t("pricing.staff_title")}
          </h3>
          <p className="text-white/40 text-sm mb-8" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.staff_sub")}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02]">
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("pricing.nearshore_name")}</h4>
              <p className="text-white/40 text-sm mt-1">{t("pricing.nearshore_desc")}</p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("pricing.nearshore_price")}</span>
                <span className="text-white/40 text-sm">{t("pricing.nearshore_unit")}</span>
              </div>
              <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.nearshore_avail")}</p>
            </div>
            <div className="p-6 md:p-8 border border-white/5 bg-white/[0.02]">
              <h4 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("pricing.onshore_name")}</h4>
              <p className="text-white/40 text-sm mt-1">{t("pricing.onshore_desc")}</p>
              <div className="flex items-baseline gap-1 mt-4">
                <span className="text-3xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>{t("pricing.onshore_price")}</span>
                <span className="text-white/40 text-sm">{t("pricing.nearshore_unit")}</span>
              </div>
              <p className="text-white/30 text-xs mt-2" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.onshore_avail")}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm" style={{ fontFamily: "var(--font-mono)" }}>{t("pricing.netto_note")}</p>
        </div>
      </div>
    </section>
  );
}
