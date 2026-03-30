/*
 * Footer: Professional, clean design — matching the white version style.
 * White logo, navigation links, address, legal links.
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const WHITE_LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/b2cybersec_logo_white_777b9bbf.png";

export default function Footer() {
  const { lang, t } = useLanguage();

  const calendlyUrl = lang === "de"
    ? "https://calendly.com/b2cybersec/kontakt"
    : "https://calendly.com/b2cybersec/contact";

  const serviceLinks = [
    { label: "NIS-2 Compliance", href: "#nis2" },
    { label: "Penetration Testing", href: "#preise" },
    { label: "Security Quick Check", href: "#preise" },
    { label: "CISO as a Service", href: "#preise" },
    { label: lang === "de" ? "Experten auf Zeit" : "Experts on Demand", href: "#preise" },
    { label: "Managed Security (MSSP)", href: "#preise" },
  ];

  const navLinks = [
    { label: t("nav.problem"), href: "#problem" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.nis2"), href: "#nis2" },
    { label: t("nav.videos"), href: "#videos" },
    { label: t("nav.preise"), href: "#preise" },
    { label: t("nav.kontakt"), href: "#kontakt" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-white/10">
      {/* Main footer content */}
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Info & Address */}
          <div className="lg:col-span-1">
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {t("footer.tagline")}
              <br />
              {t("footer.location")}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                <span>
                  B2CyberSec GmbH<br />
                  Werner-von-Siemens-Str. 6<br />
                  86159 Augsburg
                </span>
              </div>
              <a href="mailto:info@b2cybersec.com" className="flex items-center gap-2 text-white/50 text-sm hover:text-[#ff4500] transition-colors">
                <Mail size={14} className="flex-shrink-0" />
                info@b2cybersec.com
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-[#ff4500] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-display)" }}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/40 text-sm hover:text-[#ff4500] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Calendly */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-5" style={{ fontFamily: "var(--font-display)" }}>
              {t("footer.contact")}
            </h4>
            <div className="space-y-4">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ff4500] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#ff5a1a] transition-all"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("footer.book")}
                <ExternalLink size={14} />
              </a>
              <p className="text-white/40 text-sm">
                <a href="mailto:info@b2cybersec.com" className="hover:text-[#ff4500] transition-colors">
                  info@b2cybersec.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} B2CyberSec GmbH. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/impressum" className="text-white/30 text-xs hover:text-[#ff4500] transition-colors">
              {t("footer.impressum")}
            </Link>
            <Link href="/datenschutz" className="text-white/30 text-xs hover:text-[#ff4500] transition-colors">
              {t("footer.datenschutz")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
