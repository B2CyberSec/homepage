/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Contact: Final CTA section. Aggressive but professional.
 * Calendly embed + email. No phone on main page.
 */
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="kontakt" className="relative py-24 md:py-32 bg-[#0d0d0d]">
      <div ref={ref} className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <p
            className={`text-[#ff4500] text-sm font-bold uppercase tracking-[0.2em] mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // Der letzte Abschnitt. Ihre Entscheidung.
          </p>

          <h2
            className={`text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Sie haben zwei
            <br />
            Optionen.
          </h2>

          {/* Two options */}
          <div
            className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Option 1: Bad */}
            <div className="p-8 border border-white/5 bg-white/[0.02] text-left">
              <div className="text-4xl mb-4">🙈</div>
              <h3
                className="text-xl font-bold text-white/40 mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Option A: Nichts tun
              </h3>
              <ul className="space-y-3 text-white/40 text-sm">
                <li>→ Weiter hoffen, dass es Sie nicht trifft</li>
                <li>→ BSI-Bußgeld riskieren (bis 10 Mio. €)</li>
                <li>→ Beim nächsten Ransomware-Angriff improvisieren</li>
                <li>→ Ihrem IT-Admin die Schuld geben</li>
                <li>→ Diese Seite schließen und vergessen</li>
              </ul>
              <p className="text-white/20 text-xs mt-6" style={{ fontFamily: "var(--font-mono)" }}>
                // Statistisch die beliebteste Wahl. Leider.
              </p>
            </div>

            {/* Option 2: Good */}
            <div className="p-8 border border-[#ff4500]/30 bg-[#ff4500]/[0.05] text-left">
              <div className="text-4xl mb-4">🛡️</div>
              <h3
                className="text-xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Option B: Jetzt handeln
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">→</span>
                  15-Minuten Erstgespräch — kostenlos, unverbindlich
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">→</span>
                  Security Quick Check in 48h — ab 990 €
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">→</span>
                  NIS-2 Compliance in 14 Tagen — ab 4.900 €
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#ff4500]">→</span>
                  Endlich ruhig schlafen
                </li>
              </ul>
              <a
                href="https://calendly.com/b2cybersec/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#ff4500] text-white font-bold text-sm uppercase tracking-wider hover:bg-[#ff5a1a] transition-all group"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Calendar size={16} />
                Termin buchen
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Contact methods */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <a
              href="https://calendly.com/b2cybersec/kontakt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/60 hover:text-[#ff4500] transition-colors group"
            >
              <Calendar size={20} />
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                calendly.com/b2cybersec
              </span>
            </a>
            <a
              href="mailto:info@b2cybersec.com"
              className="flex items-center gap-3 text-white/60 hover:text-[#ff4500] transition-colors group"
            >
              <Mail size={20} />
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>
                info@b2cybersec.com
              </span>
            </a>
          </div>

          {/* Final sarcastic note */}
          <p
            className={`text-white/20 text-xs mt-12 transition-all duration-700 delay-800 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            // P.S. Wenn Sie bis hierhin gescrollt haben und immer noch nichts tun — 
            wir können Ihnen auch nicht helfen. Aber wir haben es versucht.
          </p>
        </div>
      </div>
    </section>
  );
}
