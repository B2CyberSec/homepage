import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container py-20 md:py-32 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 font-body text-sm">
          <ArrowLeft className="w-4 h-4" />
          Zurück
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-6 h-6 text-white/60" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-3xl md:text-4xl">Impressum</h1>
        </div>

        <div className="space-y-8 text-white/70 font-body text-sm leading-relaxed">
          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              B2CyberSec GmbH<br />
              Werner-von-Siemens-Str. 6<br />
              86159 Augsburg
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Vertreten durch</h2>
            <p>Boris Bošnjak, Geschäftsführer</p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Kontakt</h2>
            <p>
              Telefon: +49 (0) 821 90 789 500<br />
              E-Mail: info@b2cybersec.com
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Augsburg<br />
              Registernummer: HRB [auf Anfrage]
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: [auf Anfrage]</p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg text-white mb-2">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
