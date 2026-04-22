/*
 * B2CyberSec Datenschutzerklärung
 * Eigene Route: /datenschutz
 * DSGVO-konforme Datenschutzerklärung
 */

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      <div className="container pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Zurück zur Startseite
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <span className="text-white/50 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              Rechtliches
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.03em" }}
          >
            Datenschutzerklärung
          </h1>
          <p className="text-white/40 text-sm mb-12" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Stand: April 2026
          </p>

          <div className="space-y-10 text-white/70" style={{ fontFamily: "'Inter', sans-serif" }}>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                1. Datenschutz auf einen Blick
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed space-y-3">
                <h3 className="text-white font-semibold">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                <h3 className="text-white font-semibold mt-4">Datenerfassung auf dieser Website</h3>
                <p><strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                <p><strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in das NIS-2 Assessment-Formular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                <p><strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden. Daten, die Sie im NIS-2 Assessment eingeben, werden zur Erstellung Ihrer persönlichen Auswertung und zur Kontaktaufnahme verwendet.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                2. Verantwortlicher
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p className="text-white font-semibold">B2CyberSec GmbH</p>
                <p>Vertreten durch: Boris Bošnjak (Geschäftsführer)</p>
                <p className="mt-3">Telefon: +49 (0) 821 90 789 500</p>
                <p>E-Mail: <a href="mailto:info@b2cybersec.com" className="text-[#0A84FF] hover:underline">info@b2cybersec.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                3. Ihre Rechte
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed space-y-3">
                <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</p>
                <p>Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
                <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                4. Datenerfassung auf dieser Website
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Server-Log-Dateien</h3>
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
                  <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">NIS-2 Assessment-Tool</h3>
                  <p>Wenn Sie unser NIS-2 Readiness Check Tool nutzen und Ihre Kontaktdaten eingeben, werden diese Daten zur Erstellung Ihrer persönlichen Auswertung und zur möglichen Kontaktaufnahme durch B2CyberSec verwendet. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).</p>
                  <p className="mt-2">Folgende Daten werden verarbeitet: Name, Unternehmensname, E-Mail-Adresse, Telefonnummer (optional), NIS-2 Assessment-Score.</p>
                  <p className="mt-2">Diese Daten werden an HubSpot Inc. (USA) übermittelt, sofern Sie Ihre Einwilligung erteilt haben. HubSpot ist unter dem EU-US Data Privacy Framework zertifiziert.</p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Anfrage per E-Mail oder Telefon</h3>
                  <p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                5. Externe Dienste
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Calendly</h3>
                  <p>Wir verwenden Calendly (Calendly LLC, USA) für die Online-Terminbuchung. Wenn Sie einen Termin buchen, werden Ihre Daten an Calendly übermittelt. Calendly ist unter dem EU-US Data Privacy Framework zertifiziert. Datenschutzerklärung von Calendly: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#0A84FF] hover:underline">https://calendly.com/privacy</a></p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Google Fonts</h3>
                  <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                6. Speicherdauer
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: "-0.02em" }}>
                7. Kontakt Datenschutzbeauftragter
              </h2>
              <div className="glass-card rounded-xl p-6 text-sm leading-relaxed">
                <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an:</p>
                <p className="mt-3 text-white font-semibold">Boris Bošnjak</p>
                <p>B2CyberSec GmbH</p>
                <p>E-Mail: <a href="mailto:datenschutz@b2cybersec.com" className="text-[#0A84FF] hover:underline">datenschutz@b2cybersec.com</a></p>
                <p>Telefon: +49 (0) 821 90 789 500</p>
              </div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
