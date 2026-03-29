/*
 * DESIGN: Editorial Shock — "Der Weckruf"
 * Impressum: Legal page. Clean, minimal, dark.
 */
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
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
          Impressum
        </h1>

        <div className="space-y-8 text-white/70 text-base leading-relaxed">
          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              B2CyberSec GmbH
              <br />
              Werner-von-Siemens-Str. 6
              <br />
              86159 Augsburg
              <br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Vertreten durch
            </h2>
            <p>Geschäftsführer: Boris Bošnjak</p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Kontakt
            </h2>
            <p>
              Telefon: +49 (0) 821 90 789 500
              <br />
              E-Mail:{" "}
              <a href="mailto:info@b2cybersec.com" className="text-[#ff4500] hover:underline">
                info@b2cybersec.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Registereintrag
            </h2>
            <p>
              Handelsregister: Amtsgericht Augsburg
              <br />
              Registernummer: HRB 33545
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              DE 323792746
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Boris Bošnjak
              <br />
              Werner-von-Siemens-Str. 6
              <br />
              86159 Augsburg
            </p>
          </div>

          <div>
            <h2 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)" }}>
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff4500] hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
