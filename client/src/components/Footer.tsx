/*
 * B2CyberSec Footer
 * Design: Dark, minimal, information-dense grid
 * i18n: All copy via useT(). Legal routes are locale-aware.
 */

import { Link } from "wouter";
import { useT } from "@/contexts/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang, t } = useT();

  const assessmentHref = lang === "de" ? "/nis2-check" : "/readiness-check";
  const imprintHref = lang === "de" ? "/impressum" : "/imprint";
  const privacyHref = lang === "de" ? "/datenschutz" : "/privacy";

  const services = [
    { href: "/#professional-services", label: t("services.s1.title") },
    { href: "/#nis2", label: t("services.s2.title") },
    { href: "/#pentesting", label: t("services.s3.title") },
    { href: assessmentHref, label: t("footer.link.assessment") },
  ];

  const legal = [
    { href: imprintHref, label: t("footer.link.imprint") },
    { href: privacyHref, label: t("footer.link.privacy") },
  ];

  const copyright = t("footer.copyright").replace("{year}", String(currentYear));
  const cityLine = lang === "de" ? "Augsburg, Deutschland" : "Augsburg, Germany";

  return (
    <footer className="bg-[#fbfbfd] border-t border-black/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#2563eb] flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.25)]">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
                </svg>
              </div>
              <span
                className="text-[#1d1d1f] font-bold text-lg"
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}
              >
                B2CyberSec GmbH
              </span>
            </div>
            <p
              className="text-[#1d1d1f]/65 text-base leading-relaxed max-w-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {t("footer.tagline")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[#1d1d1f] font-semibold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "0.08em" }}
            >
              {t("footer.col.services")}
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#1d1d1f]/65 hover:text-[#2563eb] text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-[#1d1d1f] font-semibold text-sm mb-4 uppercase tracking-wider"
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "0.08em" }}
            >
              {t("footer.col.legal")}
            </h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#1d1d1f]/65 hover:text-[#2563eb] text-sm transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#86868b] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            {copyright}
          </p>
          <p className="text-[#86868b] text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {cityLine}
          </p>
        </div>
      </div>
    </footer>
  );
}
