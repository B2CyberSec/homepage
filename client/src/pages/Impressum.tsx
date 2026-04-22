/*
 * B2CyberSec Impressum
 * Eigene Route: /impressum
 * Vollständige Pflichtangaben gemäß § 5 TMG
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Rechtliches
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-12"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
          >
            Impressum
          </h1>

          <div className="space-y-10 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Angaben gemäß § 5 TMG
              </h2>
              <div className="glass-card rounded-xl p-6 space-y-1 text-sm leading-relaxed">
                <p className="text-white font-semibold">B2CyberSec GmbH</p>
                <p>Tochtergesellschaft der Uspor GmbH</p>
                <p className="mt-3 text-white/50 text-xs uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Geschäftsführer</p>
                <p className="text-white">Boris Bošnjak</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Kontakt
              </h2>
              <div className="glass-card rounded-xl p-6 space-y-2 text-sm leading-relaxed">
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#0A84FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+498219078950" className="hover:text-white transition-colors">+49 (0) 821 90 789 500</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#0A84FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:boris@b2cybersec.com" className="hover:text-white transition-colors">boris@b2cybersec.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#0A84FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <a href="https://www.b2cybersec.com" className="hover:text-white transition-colors">www.b2cybersec.com</a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Handelsregister
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed space-y-1">
                <p>Registergericht: Amtsgericht Augsburg</p>
                <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  Handelsregisternummer wird nach Eintragung ergänzt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Umsatzsteuer-ID
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
                <p className="text-white/40 text-xs mt-2" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  USt-ID wird nach Zuteilung durch das Finanzamt ergänzt.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p className="text-white">Boris Bošnjak</p>
                <p>B2CyberSec GmbH</p>
                <p>Augsburg, Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                EU-Streitschlichtung
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#0A84FF] hover:underline">https://ec.europa.eu/consumers/odr/</a></p>
                <p className="mt-3">Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Haftung für Inhalte
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p className="mt-3">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Haftung für Links
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                Urheberrecht
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
