import { COMPANY } from "@/lib/data";

export default function Impressum() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">Impressum</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-1">
                <p className="text-foreground font-medium">{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Vertreten durch</h2>
              <p>Geschäftsführer: {COMPANY.ceo}</p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Kontakt</h2>
              <div className="space-y-1">
                <p>Telefon: <span className="font-mono text-foreground">{COMPANY.phone}</span></p>
                <p>E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></p>
                <p>Geschäftsführer: <a href={`mailto:${COMPANY.emailCeo}`} className="text-primary hover:underline">{COMPANY.emailCeo}</a></p>
                <p>Website: <a href={`https://${COMPANY.website}`} className="text-primary hover:underline">{COMPANY.website}</a></p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Registereintrag</h2>
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: Amtsgericht Augsburg</p>
              <p className="text-foreground font-medium">HRB 33545</p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="text-foreground font-medium">DE 323792746</p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-1">
                <p className="text-foreground font-medium">{COMPANY.ceo}</p>
                <p>{COMPANY.address}</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Urheberrecht</h2>
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
