/**
 * Datenschutz Page – German privacy policy requirement
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-24 lg:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-signal transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 text-sm leading-relaxed">
          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-heading font-medium text-base text-foreground mb-1">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">2. Verantwortliche Stelle</h2>
            <p>
              B2CyberSec GmbH<br />
              Werner-von-Siemens-Str. 6<br />
              86159 Augsburg<br />
              Telefon: +49 (0) 821 90 789 500<br />
              E-Mail: info@b2cybersec.com
            </p>
            <p className="mt-2">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-heading font-medium text-base text-foreground mb-1">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
            <p className="mt-2">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">4. Kontaktaufnahme</h2>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">6. Analyse-Tools</h2>
            <p>
              Diese Website nutzt Umami Analytics, ein datenschutzfreundliches, cookieloses Analyse-Tool. Es werden keine personenbezogenen Daten gespeichert und keine Cookies gesetzt. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">7. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
