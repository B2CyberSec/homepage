/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Footer: Minimal, dark. Legal links. No fluff.
 */
import { Link } from "wouter";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663406320538/nFZEie8kzRFKviGqGmc9gt/b2cybersec_logo_3e2cf22b.png";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-[#050505] border-t border-white/5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo & tagline */}
          <div>
            <img
              src={LOGO_URL}
              alt="B2CyberSec"
              className="h-10 w-auto mb-4"
            />
            <p className="text-white/40 text-sm leading-relaxed">
              IT Security Solutions & Services.
              <br />
              Augsburg. Deutschland. Seit 20+ Jahren.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-white text-sm font-bold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: "NIS-2 Compliance", href: "#nis2" },
                { label: "Pentesting", href: "#preise" },
                { label: "Security Quick Check", href: "#preise" },
                { label: "CISO as a Service", href: "#preise" },
                { label: "Experten auf Zeit", href: "#preise" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#ff4500] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white text-sm font-bold uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Kontakt
            </h4>
            <ul className="space-y-2 text-white/40 text-sm">
              <li>
                <a
                  href="mailto:info@b2cybersec.com"
                  className="hover:text-[#ff4500] transition-colors"
                >
                  info@b2cybersec.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/b2cybersec/kontakt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff4500] transition-colors"
                >
                  Termin buchen (Calendly)
                </a>
              </li>
              <li className="pt-2">
                B2CyberSec GmbH
                <br />
                Werner-von-Siemens-Str. 6
                <br />
                86159 Augsburg
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} B2CyberSec GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-white/30 text-xs hover:text-[#ff4500] transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-white/30 text-xs hover:text-[#ff4500] transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
