import { Link } from "wouter";
import { COMPANY } from "@/lib/data";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* Simple top bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-14 flex items-center">
          <Link href="/" className="text-sm font-medium text-[#e8530e] hover:text-[#c44400] transition-colors">
            &larr; Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <section className="pt-24 pb-16 lg:pt-28 lg:pb-24">
        <div className="max-w-[700px] mx-auto px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Datenschutzerklärung</h1>

          <div className="space-y-10 text-[#86868b] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">2. Verantwortliche Stelle</h2>
              <div className="space-y-1 mb-3">
                <p className="text-[#1d1d1f] font-medium">{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
                <p>Telefon: <span className="text-[#1d1d1f]">{COMPANY.phone}</span></p>
                <p>E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-[#e8530e] hover:underline">{COMPANY.email}</a></p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2 mb-3">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">4. Externe Dienste</h2>
              <h3 className="text-base font-semibold text-[#1d1d1f] mb-2">Calendly</h3>
              <p>
                Wir nutzen Calendly für die Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten
                (Name, E-Mail, ggf. Telefonnummer) an Calendly übermittelt. Calendly verarbeitet diese Daten
                gemäß ihrer eigenen Datenschutzerklärung.
              </p>
              <h3 className="text-base font-semibold text-[#1d1d1f] mt-4 mb-2">Google Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts.
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in Ihren Browsercache,
                um Texte und Schriftarten korrekt anzuzeigen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Der Datenverarbeitung zu widersprechen</li>
                <li>Ihre Daten in einem übertragbaren Format zu erhalten (Datenportabilität)</li>
              </ul>
              <p className="mt-3">
                Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt,
                haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">6. Cookies</h2>
              <p>
                Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind.
                Darüber hinaus werden keine Cookies gesetzt, die einer Einwilligung bedürfen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">7. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz erreichen Sie uns unter:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-[#e8530e] hover:underline">{COMPANY.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
