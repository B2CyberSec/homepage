import {
  ChevronRight, Users, Shield, Globe, Award,
  MapPin, Building, Clock, Target, Zap
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY, TEAM_MEMBERS, IMAGES } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";

export default function About() {
  const { ref: refTeam, isVisible: visTeam } = useScrollAnimation();
  const { ref: refValues, isVisible: visValues } = useScrollAnimation();

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.team} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Building size={14} />
              Über uns
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {COMPANY.teamSize} Experten.{" "}
              <span className="text-gradient">{COMPANY.experience} Erfahrung.</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              B2CyberSec ist Ihr Partner für IT-Security in Deutschland. Gegründet mit dem Ziel,
              IT-Sicherheit so einfach, transparent und verlässlich zu machen wie möglich —
              ohne Fachbegriff-Wüste, ohne versteckte Kosten.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading
                badge="Das Unternehmen"
                title="IT-Security aus Augsburg"
                align="left"
              />
              <p className="text-muted-foreground leading-relaxed">
                Die {COMPANY.name} hat ihren Sitz in Augsburg und betreut
                Unternehmen in ganz Deutschland. Mit über 20 Jahren Erfahrung in IT-Netzwerk und
                Security kennen wir die Herausforderungen mittelständischer Unternehmen.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Unser Ansatz: IT-Security muss verständlich, transparent und bezahlbar sein.
                Deshalb bieten wir klare Festpreise, garantierte Lieferzeiten und verständliche Berichte.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: MapPin, label: "Standort", value: "Augsburg, Deutschland" },
                  { icon: Users, label: "Team", value: `${COMPANY.teamSize} Experten` },
                  { icon: Clock, label: "Erfahrung", value: COMPANY.experience },
                  { icon: Target, label: "Pentester", value: `${COMPANY.pentesters} zertifiziert` },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <item.icon size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stärken statt Partner */}
            <div className="glass-card rounded-2xl p-8 space-y-5">
              <h3 className="text-xl font-bold text-foreground">Was uns auszeichnet</h3>
              <div className="space-y-4">
                {[
                  { icon: Target, title: `${COMPANY.pentesters} zertifizierte Pentester`, desc: "Spezialisiertes Team für Penetrationstests — intern und extern." },
                  { icon: Shield, title: "NIS-2 Expertise", desc: "Wir begleiten Unternehmen von der Gap-Analyse bis zur vollständigen Compliance." },
                  { icon: Globe, title: "Europäisches Netzwerk", desc: "Experten in Deutschland und Europa — gleiche Zeitzone, höchste Qualität." },
                  { icon: Zap, title: "Schnelle Lieferung", desc: "Festpreise und garantierte Lieferzeiten — keine Überraschungen." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/60">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Das Team"
            title="Die Menschen hinter B2CyberSec"
            subtitle="Ein Team aus erfahrenen Sicherheitsexperten — für Ihre IT-Sicherheit."
          />

          <div
            ref={refTeam}
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 transition-all duration-700 ${
              visTeam ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {TEAM_MEMBERS.map((member, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-5 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-lg font-bold mx-auto">
                  {member.initials}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Unsere Werte"
            title="Wofür wir stehen"
          />
          <div
            ref={refValues}
            className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
              visValues ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Shield, title: "Transparenz", desc: "Klare Preise, klare Lieferzeiten, klare Ergebnisse. Keine versteckten Kosten, kein Kleingedrucktes." },
              { icon: Users, title: "Verständlichkeit", desc: "Wir erklären IT-Security so, dass jeder es versteht. Keine Fachbegriff-Wüste, keine Überheblichkeit." },
              { icon: Award, title: "Qualität", desc: "Über 20 Jahre Erfahrung, zertifizierte Experten und bewährte Methoden. Wir liefern Ergebnisse, auf die Sie sich verlassen können." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Calendly only, no personal email */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="glass-card glow-teal rounded-3xl p-8 lg:p-16 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Lernen Sie uns kennen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In einem kostenlosen 15-Minuten-Gespräch stellen wir uns vor und besprechen,
              wie wir Ihnen helfen können.
            </p>
            <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14">
              Erstgespräch buchen
              <ChevronRight size={20} className="ml-2" />
            </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
