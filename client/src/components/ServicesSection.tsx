/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Services: Dark cards with orange accents. Sarcastic descriptions.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Search, Users, Zap, Lock, HeadphonesIcon } from "lucide-react";

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();

  const services = [
    { icon: Shield, titleKey: "services.nis2_title", subKey: "services.nis2_sub", descKey: "services.nis2_desc", priceKey: "services.nis2_price", noteKey: "services.nis2_note" },
    { icon: Search, titleKey: "services.pentest_title", subKey: "services.pentest_sub", descKey: "services.pentest_desc", priceKey: "services.pentest_price", noteKey: "services.pentest_note" },
    { icon: Zap, titleKey: "services.quickcheck_title", subKey: "services.quickcheck_sub", descKey: "services.quickcheck_desc", priceKey: "services.quickcheck_price", noteKey: "services.quickcheck_note" },
    { icon: Lock, titleKey: "services.ciso_title", subKey: "services.ciso_sub", descKey: "services.ciso_desc", priceKey: "services.ciso_price", noteKey: "services.ciso_note" },
    { icon: Users, titleKey: "services.staff_title", subKey: "services.staff_sub", descKey: "services.staff_desc", priceKey: "services.staff_price", noteKey: "services.staff_note" },
    { icon: HeadphonesIcon, titleKey: "services.mssp_title", subKey: "services.mssp_sub", descKey: "services.mssp_desc", priceKey: "services.mssp_price", noteKey: "services.mssp_note" },
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#0a0a0a]">
      <div className="container">
        <div className="mb-16 md:mb-20">
          <p className="text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: "var(--font-mono)" }}>
            {t("services.tag")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("services.title1")}
            <br />
            <span className="text-white/40">{t("services.title2")}</span>
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-2xl">
            {t("services.desc")}
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`group relative p-6 md:p-8 border border-white/5 bg-white/[0.02] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/[0.03] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-white/10 group-hover:border-[#ff4500]/30 transition-colors mb-6">
                  <Icon className="text-[#ff4500]" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {t(service.titleKey)}
                </h3>
                <p className="text-[#ff4500] text-sm font-bold mb-4" style={{ fontFamily: "var(--font-mono)" }}>
                  {t(service.subKey)}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {t(service.descKey)}
                </p>
                <div className="mt-auto">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                      {t(service.priceKey)}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
                    {t(service.noteKey)}
                  </p>
                </div>
                <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#ff4500] transition-colors">
                  <span className="text-2xl">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm mb-6" style={{ fontFamily: "var(--font-mono)" }}>
            {t("pricing.netto_note")}
          </p>
        </div>
      </div>
    </section>
  );
}
