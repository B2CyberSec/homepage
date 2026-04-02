import { Link } from "wouter";
import { COMPANY } from "@/lib/data";

export default function Impressum() {
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
          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-12">Impressum</h1>

          <div className="space-y-10 text-[#86868b] leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="font-medium text-[#1d1d1f]">{COMPANY.name}</p>
              <p>{COMPANY.address}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Vertreten durch</h2>
              <p>Geschäftsführer: {COMPANY.ceo}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Kontakt</h2>
              <p>Telefon: <span className="text-[#1d1d1f]">{COMPANY.phone}</span></p>
              <p>E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-[#e8530e] hover:underline">{COMPANY.email}</a></p>
              <p>Geschäftsführer: <a href={`mailto:${COMPANY.emailCeo}`} className="text-[#e8530e] hover:underline">{COMPANY.emailCeo}</a></p>
              <p>Website: <a href={`https://${COMPANY.website}`} className="text-[#e8530e] hover:underline">{COMPANY.website}</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Registereintrag</h2>
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht Augsburg</p>
              <p className="text-[#1d1d1f] font-medium">{COMPANY.hrb}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="text-[#1d1d1f] font-medium">{COMPANY.ustId}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-[#1d1d1f] font-medium">{COMPANY.ceo}</p>
              <p>{COMPANY.address}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-[#e8530e] hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#1d1d1f] mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
