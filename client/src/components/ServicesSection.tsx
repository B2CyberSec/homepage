/*
 * DESIGN: Editorial Shock — "Der Weckruf" V2
 * Services: Icon grid image as visual anchor. Each card: icon + title + price only.
 * No long descriptions. Let the price and title do the talking.
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Search, Zap, Lock, Users, HeadphonesIcon } from "lucide-react";

const SERVICES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/services_grid_v2-g2WW4tq7uULrbSxgNWoTX3.webp";

export default function ServicesSection() {
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const services = [
    { Icon: Shield, titleKey: "services.nis2_title", priceKey: "services.nis2_price" },
    { Icon: Search, titleKey: "services.pentest_title", priceKey: "services.pentest_price" },
    { Icon: Zap, titleKey: "services.quickcheck_title", priceKey: "services.quickcheck_price" },
    { Icon: Lock, titleKey: "services.ciso_title", priceKey: "services.ciso_price" },
    { Icon: Users, titleKey: "services.staff_title", priceKey: "services.staff_price" },
    { Icon: HeadphonesIcon, titleKey: "services.mssp_title", priceKey: "services.mssp_price" },
  ];

  return (
    <section id="services" className="relative bg-[#0a0a0a] py-20 md:py-28">
      <div className="container">
        {/* Minimal header */}
        <div className="mb-12">
          <p className="text-[#ff4500] text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ fontFamily: "var(--font-mono)" }}>
            {t("services.tag")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
            {t("services.title1")}
            <span className="text-white/35"> {t("services.title2")}</span>
          </h2>
        </div>

        {/* Two-column layout: image left, service list right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Services icon grid image */}
          <div className="relative rounded-sm overflow-hidden bg-[#111]">
            <img
              src={SERVICES_IMG}
              alt="B2CyberSec Services: NIS-2, Pentest, Quick Check, CISO as a Service, Professional Services, Compliance Care"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Right: Compact service list — title + price, no description */}
          <div className="flex flex-col gap-3">
            {services.map(({ Icon, titleKey, priceKey }, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 px-5 py-4 border border-white/5 bg-white/[0.02] hover:border-[#ff4500]/30 hover:bg-[#ff4500]/[0.03] transition-all duration-300 cursor-default"
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-white/10 group-hover:border-[#ff4500]/40 transition-colors">
                  <Icon className="text-[#ff4500]" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-bold text-sm md:text-base truncate" style={{ fontFamily: "var(--font-display)" }}>
                    {t(titleKey)}
                  </p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-[#ff4500] font-bold text-sm md:text-base" style={{ fontFamily: "var(--font-display)" }}>
                    {t(priceKey)}
                  </span>
                </div>
                <span className="text-white/15 group-hover:text-[#ff4500] transition-colors text-lg ml-1">→</span>
              </div>
            ))}

            {/* Single CTA */}
            <a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 px-6 py-4 bg-[#ff4500] text-white font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-colors"
              style={{ fontFamily: "var(--font-display)", fontSize: "0.9rem" }}
            >
              {t("hero.cta1")} →
            </a>
            <p className="text-white/25 text-xs text-center" style={{ fontFamily: "var(--font-mono)" }}>
              {t("pricing.netto_note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
