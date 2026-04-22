/*
 * B2CyberSec Footer
 * Design: Dark, minimal, information-dense grid
 */

import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0A84FF] flex items-center justify-center shadow-[0_0_16px_rgba(10,132,255,0.4)]">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>B2</span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                B2CyberSec GmbH
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              IT-Security, NIS-2 Compliance und Penetration Testing. 20+ Jahre Erfahrung. Augsburg, Deutschland.
            </p>
            <div className="mt-6 space-y-2">
              <a
                href="tel:+498219078950"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +49 (0) 821 90 789 500
              </a>
              <a
                href="mailto:info@b2cybersec.com"
                className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="w-4 h-4 text-[#0A84FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@b2cybersec.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "0.08em" }}>
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/#professional-services", label: "Professional Services" },
                { href: "/#nis2", label: "NIS-2 & Compliance" },
                { href: "/#pentesting", label: "Penetration Testing" },
                { href: "/nis2-check", label: "NIS-2 Readiness Check" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
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
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "0.08em" }}>
              Rechtliches
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/50 hover:text-white text-sm transition-colors"
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
          <p className="text-white/30 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {currentYear} B2CyberSec GmbH. Alle Rechte vorbehalten.
          </p>
          <p className="text-white/30 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Tochter der Uspor GmbH · Augsburg, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
