// Frosted Daylight — Impressum
import { COMPANY, LOGO_URL } from "@/lib/data";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
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
        <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <div className="glass-card p-6 lg:p-8 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">Angaben gemäß § 5 TMG</h2>
            <p>
              {COMPANY.name}<br />
              {COMPANY.address}
            </p>

            <h2 className="text-lg font-semibold text-slate-900 pt-4">Vertreten durch</h2>
            <p>Geschäftsführer: {COMPANY.ceo}</p>

            <h2 className="text-lg font-semibold text-slate-900 pt-4">Kontakt</h2>
            <p>
              Telefon: {COMPANY.phone}<br />
              E-Mail: {COMPANY.email}
            </p>

            <h2 className="text-lg font-semibold text-slate-900 pt-4">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Augsburg<br />
              Registernummer: {COMPANY.hrb}
            </p>

            <h2 className="text-lg font-semibold text-slate-900 pt-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              {COMPANY.ustId}
            </p>

            <h2 className="text-lg font-semibold text-slate-900 pt-4">Haftungsausschluss</h2>
            <p className="text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine
              Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
            </p>
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
