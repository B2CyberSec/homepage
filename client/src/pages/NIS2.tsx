import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle, ChevronRight, Shield, CheckCircle, Clock,
  FileCheck, Users, Building, Zap, Phone, ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import { COMPANY, IMAGES, NIS2_FACTS, SERVICES } from "@/lib/data";

export default function NIS2() {
  const cyberSchild = SERVICES.find((s) => s.id === "cyberschild-audit")!;
  const complianceCare = SERVICES.find((s) => s.id === "nis2-compliance-care")!;
  const { ref: refTimeline, isVisible: visTimeline } = useScrollAnimation();
  const { ref: refWho, isVisible: visWho } = useScrollAnimation();

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.nis2} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-bold">
              <AlertTriangle size={16} />
              BSI-Frist abgelaufen seit {NIS2_FACTS.bsiFrist}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              NIS-2 Compliance{" "}
              <span className="text-gradient">einfach gemacht</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Das NIS-2-Umsetzungsgesetz gilt seit dem {NIS2_FACTS.lawDate}. {NIS2_FACTS.affectedCompanies} Unternehmen
              sind betroffen — und {NIS2_FACTS.nonCompliant} sind noch nicht konform. Wir helfen Ihnen, die Anforderungen
              schnell und verständlich umzusetzen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14">
                  NIS-2 Check starten
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="font-bold text-base px-8 h-14 border-border hover:bg-white/5">
                  Alle NIS-2 Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Die Fakten"
            title="Was bedeutet NIS-2 für Ihr Unternehmen?"
            subtitle="NIS-2 ist die neue EU-Richtlinie für Cybersicherheit. Hier die wichtigsten Fakten — einfach erklärt."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Building, value: NIS2_FACTS.affectedCompanies, label: "Betroffene Unternehmen in Deutschland", sub: `In ${NIS2_FACTS.sectors} Sektoren` },
              { icon: AlertTriangle, value: NIS2_FACTS.maxFine, label: "Maximales Bußgeld", sub: `Oder ${NIS2_FACTS.finePercent}` },
              { icon: Shield, value: NIS2_FACTS.nonCompliant, label: "Noch nicht konform", sub: "Handeln Sie jetzt" },
              { icon: Clock, value: "Abgelaufen", label: "BSI-Registrierungsfrist", sub: `Seit ${NIS2_FACTS.bsiFrist}` },
            ].map((fact, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 space-y-3 text-center">
                <fact.icon size={28} className="text-primary mx-auto" />
                <p className="text-3xl font-extrabold font-mono text-foreground">{fact.value}</p>
                <p className="text-sm font-medium text-foreground">{fact.label}</p>
                <p className="text-xs text-muted-foreground">{fact.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is affected */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Bin ich betroffen?"
            title="Wer muss NIS-2 umsetzen?"
            subtitle="NIS-2 betrifft Unternehmen in 18 Sektoren. Hier eine Auswahl der wichtigsten Branchen."
          />

          <div
            ref={refWho}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto transition-all duration-700 ${
              visWho ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              "Energie & Versorgung",
              "Transport & Verkehr",
              "Gesundheitswesen",
              "Finanz- & Bankwesen",
              "Digitale Infrastruktur",
              "Öffentliche Verwaltung",
              "Produktion & Fertigung",
              "Lebensmittel",
              "Chemie & Pharma",
              "Abfallwirtschaft",
              "Post & Kurier",
              "Forschung",
            ].map((sector, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/8 transition-colors">
                <CheckCircle size={18} className="text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{sector}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Nicht sicher, ob Sie betroffen sind?{" "}
            <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Lassen Sie uns das gemeinsam prüfen →
            </a>
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Zeitplan"
            title="NIS-2 Timeline — Was bisher geschah"
          />

          <div
            ref={refTimeline}
            className={`max-w-2xl mx-auto space-y-0 transition-all duration-700 ${
              visTimeline ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { date: "Jan 2023", event: "NIS-2 Richtlinie tritt auf EU-Ebene in Kraft", status: "done" },
              { date: "Okt 2024", event: "Umsetzungsfrist für Mitgliedsstaaten", status: "done" },
              { date: "Dez 2025", event: "NIS2UmsuCG gilt in Deutschland", status: "done" },
              { date: "Mär 2026", event: "BSI-Registrierungsfrist abgelaufen", status: "urgent" },
              { date: "Jetzt", event: "Bußgelder und Sanktionen möglich", status: "urgent" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full shrink-0 ${
                    item.status === "urgent" ? "bg-destructive" : "bg-primary"
                  }`} />
                  {i < 4 && <div className="w-0.5 h-16 bg-border" />}
                </div>
                <div className="pb-8">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    item.status === "urgent" ? "text-destructive" : "text-primary"
                  }`}>{item.date}</span>
                  <p className="text-foreground font-medium mt-1">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NIS-2 Services */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Unsere NIS-2 Services"
            title="So machen wir Sie NIS-2-konform"
            subtitle="Vom Quick Check bis zur dauerhaften Compliance-Betreuung — wir haben den passenden Service."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CyberSchild Audit */}
            <div className="glass-card glow-teal rounded-2xl p-8 space-y-5 border-primary/30">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                Beliebteste Wahl
              </span>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{cyberSchild.name}</h3>
                  <p className="text-sm text-muted-foreground">{cyberSchild.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{cyberSchild.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold font-mono text-foreground">{cyberSchild.price}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><Clock size={14} className="text-primary" />{cyberSchild.deliveryTime}</div>
                <StarRating rating={cyberSchild.rating} reviewCount={cyberSchild.reviewCount} size="sm" />
              </div>
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-bold text-primary">{cyberSchild.hormozi}</p>
              </div>
              <ul className="space-y-2">
                {cyberSchild.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12">
                  CyberSchild Audit buchen <ChevronRight size={16} className="ml-1" />
                </Button>
              </a>
            </div>

            {/* NIS-2 Compliance Care */}
            <div className="glass-card glass-card-hover rounded-2xl p-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileCheck size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{complianceCare.name}</h3>
                  <p className="text-sm text-muted-foreground">{complianceCare.subtitle}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{complianceCare.description}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold font-mono text-foreground">{complianceCare.price}</span>
                <span className="text-sm text-muted-foreground">/ {complianceCare.priceNote}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><Clock size={14} className="text-primary" />{complianceCare.deliveryTime}</div>
                <StarRating rating={complianceCare.rating} reviewCount={complianceCare.reviewCount} size="sm" />
              </div>
              <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm font-medium text-primary">{complianceCare.hormozi}</p>
              </div>
              <ul className="space-y-2">
                {complianceCare.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} className="text-primary shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full bg-white/10 text-foreground hover:bg-white/15 font-semibold h-12">
                  Compliance Care anfragen <ChevronRight size={16} className="ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="glass-card glow-teal rounded-3xl p-8 lg:p-16 text-center space-y-6">
            <AlertTriangle size={48} className="text-destructive mx-auto" />
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
              Die Frist ist abgelaufen. Handeln Sie jetzt.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Tag ohne NIS-2-Compliance erhöht Ihr Risiko. Starten Sie heute mit unserem CyberSchild Audit
              und wissen Sie in 14 Tagen, wo Sie stehen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14">
                  Jetzt NIS-2 Check starten
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </a>
              <a href={`tel:${COMPANY.phone}`}>
                <Button size="lg" variant="outline" className="font-bold px-8 h-14 border-border hover:bg-white/5">
                  <Phone size={18} className="mr-2" />
                  {COMPANY.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
