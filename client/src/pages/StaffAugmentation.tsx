import { Button } from "@/components/ui/button";
import {
  ChevronRight, CheckCircle, Clock, Globe, MapPin,
  Zap, Award, Network, Server, Shield, Code2
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY, STAFF_AUGMENTATION, IMAGES } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";

export default function ProfessionalServices() {
  const { ref, isVisible } = useScrollAnimation();

  const capabilities = [
    { icon: Network, title: "Network Security", desc: "Firewall-Engineering, IDS/IPS, Netzwerksegmentierung, VPN und sichere Netzwerkarchitektur für komplexe Unternehmensumgebungen." },
    { icon: Globe, title: "Cloud Security", desc: "Sicherheitsarchitektur für AWS, Azure und GCP. Cloud-native Security Controls, IAM, CSPM und DevSecOps-Integration." },
    { icon: Code2, title: "Netzwerk-Automatisierung", desc: "Infrastructure as Code, Ansible, Python-Automatisierung und CI/CD-Pipelines für Netzwerk- und Security-Infrastruktur." },
    { icon: Server, title: "Service Provider & ISP", desc: "Spezialisierte Expertise für Carrier-Grade-Netzwerke, BGP, MPLS und Service-Provider-Sicherheitsarchitekturen." },
    { icon: Shield, title: "Zero Trust & SASE", desc: "Moderne Sicherheitsarchitekturen: SD-WAN, SASE, Zero Trust Network Access (ZTNA) und Mikrosegmentierung." },
    { icon: Award, title: "Regulatory Compliance", desc: "BSI-Grundschutz, NIS-2, ISO 27001 und branchenspezifische Compliance-Anforderungen in regulierten Umgebungen." },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.team} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Network size={14} />
              Professional Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Network Infrastructure{" "}
              <span className="text-gradient">auf höchstem Niveau</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Unser spezialisiertes Network Infrastructure Team bringt tiefes Fachwissen in Network Security,
              Cloud-Architekturen, Automatisierung und Service-Provider-Umgebungen. Für Projekte, die echte
              Expertise erfordern — nicht nur Ressourcen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14 shadow-md shadow-primary/20">
                    Projekt besprechen
                  <ChevronRight size={20} className="ml-2" />
                  </CalendlyButton>
              <a href={`mailto:${COMPANY.email}`}>
                <Button size="lg" variant="outline" className="font-bold text-base px-8 h-14 border-border hover:bg-secondary/60">
                  Anfrage per E-Mail
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Kompetenzen"
            title="Was unser Team leistet"
            subtitle="Spezialisierte Expertise in allen Bereichen der Netzwerk- und Cloud-Sicherheit — von der Planung bis zur Umsetzung."
          />
          <div
            ref={ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {capabilities.map((item, i) => (
              <div key={i} className="glass-card glass-card-hover rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Engagement-Modelle"
            title="Nearshore oder Onshore"
            subtitle="Wählen Sie das Modell, das am besten zu Ihrem Projekt und Ihren Anforderungen passt."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
            {STAFF_AUGMENTATION.map((model, i) => (
              <div key={model.id} className={`glass-card rounded-2xl p-8 flex flex-col ${i === 0 ? "glow-teal border-primary/30" : "glass-card-hover"}`}>
                {i === 0 && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Bestes Preis-Leistungs-Verhältnis
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {i === 0 ? <Globe size={24} /> : <MapPin size={24} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{model.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold font-mono text-foreground">{model.rate}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock size={14} className="text-primary" />
                  Verfügbarkeit: {model.availability}
                </div>
                <ul className="space-y-2">
                  {model.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <CalendlyButton className={`w-full font-semibold ${i === 0 ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary border border-border text-foreground hover:bg-secondary/80"}`}>
                    Projekt anfragen <ChevronRight size={16} className="ml-1" />
                  </CalendlyButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Warum B2CyberSec"
            title="Echte Expertise, nicht nur Kapazität"
            subtitle="Wir stellen keine Ressourcen bereit — wir liefern Ergebnisse."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: "Schnell einsatzbereit", desc: "Nearshore-Experten ab 48 Stunden, Onshore ab 1 Woche — für zeitkritische Projekte." },
              { icon: Globe, title: "Europäisches Team", desc: "Alle Experten arbeiten in europäischer Zeitzone und kommunizieren auf Deutsch und Englisch." },
              { icon: Award, title: "Tiefe Spezialisierung", desc: "Kein Generalisten-Pool — unser Team ist auf Network & Cloud Security fokussiert." },
              { icon: Shield, title: "Sicherheitsüberprüft", desc: "Alle Mitarbeiter sind sicherheitsüberprüft und arbeiten nach höchsten Qualitätsstandards." },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="glass-card glow-teal rounded-3xl p-8 lg:p-16 text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Bereit für Ihr nächstes Projekt?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beschreiben Sie uns Ihr Projekt in einem kostenlosen Erstgespräch.
              Wir analysieren die Anforderungen und nennen Ihnen innerhalb von 24 Stunden
              ein konkretes Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14 shadow-md shadow-primary/20">
                    Kostenloses Erstgespräch
                  <ChevronRight size={20} className="ml-2" />
                  </CalendlyButton>
              <a href={`mailto:${COMPANY.email}`}>
                <Button size="lg" variant="outline" className="font-bold px-8 h-14 border-border hover:bg-secondary/60">
                  Anfrage per E-Mail
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
