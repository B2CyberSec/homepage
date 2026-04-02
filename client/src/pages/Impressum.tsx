/**
 * Impressum Page – German legal requirement
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container max-w-3xl py-24 lg:py-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-signal transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-heading font-bold text-3xl sm:text-4xl tracking-tight mb-8">Impressum</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80 text-sm leading-relaxed">
          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              B2CyberSec GmbH<br />
              Werner-von-Siemens-Str. 6<br />
              86159 Augsburg<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Vertreten durch</h2>
            <p>Boris Bošnjak, Geschäftsführer</p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Kontakt</h2>
            <p>
              Telefon: +49 (0) 821 90 789 500<br />
              E-Mail: info@b2cybersec.com<br />
              Website: www.b2cybersec.com
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Augsburg<br />
              Registernummer: wird nachgetragen
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              wird nachgetragen
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Boris Bošnjak<br />
              Werner-von-Siemens-Str. 6<br />
              86159 Augsburg
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-signal hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-semibold text-lg text-foreground mb-2">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
