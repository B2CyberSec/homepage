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
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 10.5c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286z" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                B2CyberSec GmbH
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              IT-Infrastruktur, NIS-2 Compliance und Penetration Testing. 20+ Jahre Erfahrung. Augsburg, Deutschland.
            </p>

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
            Augsburg, Deutschland
          </p>
        </div>
      </div>
    </footer>
  );
}
