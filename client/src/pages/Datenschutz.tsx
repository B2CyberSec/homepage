import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container py-20 md:py-32 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-body text-sm">
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-6 h-6 text-white/60" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-3xl md:text-4xl">Datenschutzerklärung</h1>
        </div>

        <div className="space-y-8 text-white/70 font-body text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">2. Verantwortliche Stelle</h2>
            <p>
              B2CyberSec GmbH<br />
              Werner-von-Siemens-Str. 6<br />
              86159 Augsburg<br />
              Telefon: +49 (0) 821 90 789 500<br />
              E-Mail: info@b2cybersec.com
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">3. Datenerfassung auf dieser Website</h2>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">4. Hosting</h2>
            <p>
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">5. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">6. Analyse-Tools</h2>
            <p>
              Diese Website nutzt Umami Analytics, ein datenschutzfreundliches Webanalyse-Tool. Es werden keine Cookies gesetzt und keine personenbezogenen Daten erhoben. Die Analyse erfolgt anonymisiert und DSGVO-konform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
