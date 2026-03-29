/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Datenschutz: Privacy policy page. Clean, minimal, dark.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="container py-24 md:py-32 max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[#ff4500] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          <span className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>Zurück</span>
        </Link>

        <h1
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-white/70 text-base leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="text-white/80 font-bold text-base mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              2. Verantwortliche Stelle
            </h2>
            <p>
              B2CyberSec GmbH
              <br />
              Werner-von-Siemens-Str. 6
              <br />
              86159 Augsburg
              <br />
              E-Mail:{" "}
              <a href="mailto:info@b2cybersec.com" className="text-[#ff4500] hover:underline">
                info@b2cybersec.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="text-white/80 font-bold text-base mb-2">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.
            </p>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h3 className="text-white/80 font-bold text-base mb-2">Kontaktaufnahme</h3>
            <p>
              Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              4. Externe Dienste
            </h2>
            <h3 className="text-white/80 font-bold text-base mb-2">Calendly</h3>
            <p>
              Wir nutzen Calendly für die Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten von Calendly verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von Calendly:{" "}
              <a
                href="https://calendly.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                calendly.com/privacy
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              6. Widerspruch gegen Datenerfassung
            </h2>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen. Wenden Sie sich hierzu an:{" "}
              <a href="mailto:info@b2cybersec.com" className="text-[#ff4500] hover:underline">
                info@b2cybersec.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
