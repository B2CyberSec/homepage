import { Button } from "@/components/ui/button";
import {
  ChevronRight, Users, CheckCircle, Clock, Phone,
  Globe, MapPin, Zap, Award
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY, STAFF_AUGMENTATION, IMAGES } from "@/lib/data";

export default function StaffAugmentation() {
  const { ref, isVisible } = useScrollAnimation();

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
              <Users size={14} />
              Experten auf Zeit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              IT-Security-Experten{" "}
              <span className="text-gradient">wenn Sie sie brauchen</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Brauchen Sie kurzfristig Verstärkung für Ihr Security-Team? Unsere Experten sind ab 48 Stunden
              verfügbar — nearshore aus Bosnien und Herzegowina oder onshore in Deutschland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14">
                  Experten anfragen
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Vorteile"
            title="Warum Experten auf Zeit?"
            subtitle="Flexibel, schnell und kosteneffizient — ohne langfristige Verpflichtungen."
          />
          <div
            ref={ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Zap, title: "Schnell verfügbar", desc: "Nearshore-Experten ab 48 Stunden, Onshore ab 1 Woche." },
              { icon: Globe, title: "Gleiche Zeitzone", desc: "Unsere Nearshore-Experten arbeiten in der gleichen Zeitzone (CET)." },
              { icon: Award, title: "Höchste Qualität", desc: "Alle Experten haben jahrelange Erfahrung in IT-Security." },
              { icon: MapPin, title: "Flexibel einsetzbar", desc: "Remote oder vor Ort, projektbasiert oder langfristig." },
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

      {/* Models */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Modelle"
            title="Nearshore oder Onshore"
            subtitle="Wählen Sie das Modell, das am besten zu Ihrem Projekt passt."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {STAFF_AUGMENTATION.map((model, i) => (
              <div key={model.id} className={`glass-card rounded-2xl p-8 space-y-6 ${i === 0 ? "glow-teal border-primary/30" : "glass-card-hover"}`}>
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
                <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full font-semibold ${i === 0 ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white/10 text-foreground hover:bg-white/15"}`}>
                    Experten anfragen <ChevronRight size={16} className="ml-1" />
                  </Button>
                </a>
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
              Verstärkung gesucht?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Erzählen Sie uns von Ihrem Projekt. Wir finden den passenden Experten für Sie — ab 48 Stunden verfügbar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14">
                  Jetzt Experten anfragen
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </a>
              <a href={`tel:${COMPANY.phone}`}>
                <Button size="lg" variant="outline" className="font-bold px-8 h-14 border-border hover:bg-white/5">
                  <Phone size={18} className="mr-2" />
                  Anrufen
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
