import { Button } from "@/components/ui/button";
import {
  Phone, Mail, MapPin, Clock, ChevronRight, Calendar, MessageSquare
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { COMPANY } from "@/lib/data";

export default function Contact() {
  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Kontakt"
            title="Sprechen Sie mit uns"
            subtitle="Ob per Telefon, E-Mail oder Calendly — wir sind für Sie da. Buchen Sie ein kostenloses Erstgespräch oder rufen Sie uns direkt an."
          />
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Calendly */}
            <div className="glass-card glow-teal rounded-2xl p-8 space-y-6 border-primary/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Erstgespräch buchen</h3>
                  <p className="text-sm text-muted-foreground">Kostenlos, 15 Minuten, unverbindlich</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Buchen Sie direkt einen Termin in unserem Kalender. In 15 Minuten besprechen wir
                Ihre Situation und empfehlen den passenden Service — ohne Verkaufsdruck.
              </p>
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-14">
                  Termin bei Calendly buchen
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </a>
              <div className="rounded-xl overflow-hidden border border-border" style={{ minHeight: 500 }}>
                <iframe
                  src="https://calendly.com/b2cybersec/kontakt?hide_gdpr_banner=1"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Calendly Terminbuchung"
                  className="bg-secondary/60"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Direkter Kontakt</h3>
                <p className="text-muted-foreground">
                  Sie möchten lieber direkt mit uns sprechen? Kein Problem — rufen Sie uns an oder schreiben Sie uns.
                </p>

                <div className="space-y-4">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">Telefon</p>
                      <p className="text-sm font-mono text-muted-foreground">{COMPANY.phone}</p>
                      <p className="text-xs text-muted-foreground mt-1">Mo–Fr, 8:00–18:00 Uhr</p>
                    </div>
                  </a>

                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">E-Mail</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.email}</p>
                      <p className="text-xs text-muted-foreground mt-1">Antwort innerhalb von 24 Stunden</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Adresse</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.name}</p>
                      <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/60">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Geschäftszeiten</p>
                      <p className="text-sm text-muted-foreground">Montag – Freitag: 8:00 – 18:00 Uhr</p>
                      <p className="text-sm text-muted-foreground">Incident-Hotline: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Häufige Fragen</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { q: "Wie schnell können Sie starten?", a: "Je nach Service ab 48 Stunden. Für die meisten Projekte innerhalb einer Woche." },
                    { q: "Brauche ich ein Erstgespräch?", a: "Nein. Sie können Services direkt buchen. Das Erstgespräch ist optional und kostenlos." },
                    { q: "Arbeiten Sie auch vor Ort?", a: "Ja, unsere Onshore-Experten kommen auch zu Ihnen. Nearshore-Experten arbeiten remote." },
                  ].map((faq, i) => (
                    <div key={i} className="p-4 rounded-xl bg-secondary/60">
                      <p className="font-medium text-foreground text-sm">{faq.q}</p>
                      <p className="text-sm text-muted-foreground mt-1">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
