import { COMPANY } from "@/lib/data";

export default function Datenschutz() {
  return (
    <div className="pt-20 lg:pt-24">
      <section className="py-16 lg:py-24">
        <div className="container max-w-3xl">
          <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-semibold text-foreground">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen
                Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">2. Verantwortliche Stelle</h2>
              <div className="space-y-1">
                <p className="text-foreground font-medium">{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
                <p>Telefon: <span className="font-mono text-foreground">{COMPANY.phone}</span></p>
                <p>E-Mail: <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></p>
              </div>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-semibold text-foreground">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1">
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

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">4. Externe Dienste</h2>
              <h3 className="text-lg font-semibold text-foreground">Calendly</h3>
              <p>
                Wir nutzen Calendly für die Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten
                (Name, E-Mail, ggf. Telefonnummer) an Calendly übermittelt. Calendly verarbeitet diese Daten
                gemäß ihrer eigenen Datenschutzerklärung.
              </p>
              <h3 className="text-lg font-semibold text-foreground">Google Fonts</h3>
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts.
                Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in Ihren Browsercache,
                um Texte und Schriftarten korrekt anzuzeigen.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">5. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                <li>Die Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
                <li>Der Datenverarbeitung zu widersprechen</li>
                <li>Ihre Daten in einem übertragbaren Format zu erhalten (Datenportabilität)</li>
              </ul>
              <p>
                Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt,
                haben Sie das Recht, sich bei einer Aufsichtsbehörde zu beschweren.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">6. Cookies</h2>
              <p>
                Diese Website verwendet technisch notwendige Cookies, die für den Betrieb der Seite erforderlich sind.
                Darüber hinaus werden keine Cookies gesetzt, die einer Einwilligung bedürfen.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 space-y-4">
              <h2 className="text-xl font-bold text-foreground">7. Kontakt</h2>
              <p>
                Bei Fragen zum Datenschutz erreichen Sie uns unter:{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
