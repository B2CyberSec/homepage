/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * Services: Premium dark grid image + detailed service cards.
 * Each card shows icon, title, short punchy description, and price.
 * Layout: image-led top half, card grid below — premium, not cheap.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Search, Zap, Lock, Users, HeadphonesIcon } from "lucide-react";

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/services_premium_v3-d9hoCG6NGYFN6CaqpeXqsy.webp";

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const services = [
    {
      Icon: Shield,
      titleKey: "services.nis2_title",
      subKey: "services.nis2_sub",
      priceKey: "services.nis2_price",
    },
    {
      Icon: Search,
      titleKey: "services.pentest_title",
      subKey: "services.pentest_sub",
      priceKey: "services.pentest_price",
    },
    {
      Icon: Zap,
      titleKey: "services.quickcheck_title",
      subKey: "services.quickcheck_sub",
      priceKey: "services.quickcheck_price",
    },
    {
      Icon: Lock,
      titleKey: "services.ciso_title",
      subKey: "services.ciso_sub",
      priceKey: "services.ciso_price",
    },
    {
      Icon: Users,
      titleKey: "services.staff_title",
      subKey: "services.staff_sub",
      priceKey: "services.staff_price",
    },
    {
      Icon: HeadphonesIcon,
      titleKey: "services.mssp_title",
      subKey: "services.mssp_sub",
      priceKey: "services.mssp_price",
    },
  ];

  return (
    <section id="services" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="container">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            {t("services.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("services.title1")}
            <span className="text-white/35"> {t("services.title2")}</span>
          </h2>
        </div>

        {/* Premium image — full width, edge-to-edge feel */}
        <div className="relative w-full overflow-hidden mb-12" style={{ maxHeight: "480px" }}>
          <img
            src={SERVICES_IMG}
            alt="B2CyberSec Services: NIS-2, Pentest, Quick Check, CISO as a Service, Professional Services, Managed Security"
            className="w-full h-full object-cover object-center"
            style={{ maxHeight: "480px" }}
            loading="lazy"
          />
          {/* Subtle bottom fade into section bg */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Service cards — 3-column grid, premium dark cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {services.map(({ Icon, titleKey, subKey, priceKey }, i) => (
            <div
              key={i}
              className="group flex flex-col gap-3 px-6 py-5 border border-white/8 bg-white/[0.02] hover:border-[#ff4500]/40 hover:bg-[#ff4500]/[0.03] transition-all duration-300"
            >
              {/* Icon + price row */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-[#ff4500]/40 transition-colors">
                  <Icon className="text-[#ff4500]" size={18} />
                </div>
                <span className="text-[#ff4500] font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>
                  {t(priceKey)}
                </span>
              </div>
              {/* Title */}
              <p className="text-white font-bold text-base leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {t(titleKey)}
              </p>
              {/* Short punchy sub */}
              <p className="text-white/40 text-xs leading-relaxed" style={{ fontFamily: "var(--font-mono)" }}>
                {t(subKey)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff4500] text-white font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-colors"
            style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem" }}
          >
            {t("hero.cta1")} →
          </a>
          <p className="text-white/25 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
            {t("pricing.netto_note")}
          </p>
        </div>
      </div>
    </section>
  );
}
