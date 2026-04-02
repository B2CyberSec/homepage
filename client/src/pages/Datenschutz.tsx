// Frosted Daylight — Datenschutz
import { COMPANY, LOGO_URL } from "@/lib/data";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#fafbfc]">
      {/* Header */}
      <header className="border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <img src={LOGO_URL} alt="B2CyberSec" className="h-7 w-auto" />
          </Link>
        </div>
      </header>

      <main className="container py-16 lg:py-24 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <div className="glass-card p-6 lg:p-8 space-y-6">
            <section>
              <h2 className="text-lg font-semibold text-slate-900">1. Datenschutz auf einen Blick</h2>
              <p className="text-sm leading-relaxed mt-2">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                werden können.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">2. Verantwortliche Stelle</h2>
              <p className="text-sm leading-relaxed mt-2">
                {COMPANY.name}<br />
                {COMPANY.address}<br />
                Telefon: {COMPANY.phone}<br />
                E-Mail: {COMPANY.email}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">3. Datenerfassung auf dieser Website</h2>
              <p className="text-sm leading-relaxed mt-2">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen
                (z.B. per Kontaktformular oder E-Mail). Andere Daten werden automatisch beim
                Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
                technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des
                Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">4. Hosting</h2>
              <p className="text-sm leading-relaxed mt-2">
                Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf
                dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
                Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und
                sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">5. Ihre Rechte</h2>
              <p className="text-sm leading-relaxed mt-2">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger
                und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben
                außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
                diese Einwilligung jederzeit für die Zukunft widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">6. SSL-/TLS-Verschlüsselung</h2>
              <p className="text-sm leading-relaxed mt-2">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
                vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte
                Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                "http://" auf "https://" wechselt.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/60 py-8">
        <div className="container flex items-center justify-between text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} {COMPANY.name}</span>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-slate-600 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-slate-600 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
