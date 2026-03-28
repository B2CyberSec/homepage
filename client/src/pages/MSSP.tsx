import { Button } from "@/components/ui/button";
import {
  ChevronRight, Eye, ShieldCheck, CheckCircle, Clock, Phone,
  Activity, Bell, BarChart3, Headphones
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COMPANY, SERVICES } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";

export default function MSSP() {
  const basic = SERVICES.find((s) => s.id === "mssp-basic")!;
  const professional = SERVICES.find((s) => s.id === "mssp-professional")!;
  const ciso = SERVICES.find((s) => s.id === "ciso-as-a-service")!;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Eye size={14} />
              Managed Security
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              24/7 Sicherheits&shy;überwachung{" "}
              <span className="text-gradient">für Ihr Unternehmen</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Wie ein Wachdienst — aber für Ihre IT. Rund-um-die-Uhr Überwachung, sofortige Alarmierung
              bei Bedrohungen und ein persönlicher Ansprechpartner. Damit Sie nachts ruhig schlafen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14">
                    MSSP anfragen
                  <ChevronRight size={20} className="ml-2" />
                  </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Vorteile"
            title="Warum Managed Security?"
            subtitle="Sie konzentrieren sich auf Ihr Geschäft — wir kümmern uns um Ihre Sicherheit."
          />
          <div
            ref={ref}
            className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { icon: Activity, title: "24/7 Monitoring", desc: "Ihre Systeme werden rund um die Uhr überwacht — auch nachts und am Wochenende." },
              { icon: Bell, title: "Sofort-Alarmierung", desc: "Bei einer Bedrohung werden Sie sofort informiert. Keine Verzögerung, kein Risiko." },
              { icon: BarChart3, title: "Monatliche Berichte", desc: "Verständliche Statusberichte zeigen Ihnen, wie sicher Ihre IT ist." },
              { icon: Headphones, title: "Persönlicher Kontakt", desc: "Ihr dedizierter Ansprechpartner kennt Ihre Infrastruktur und ist immer erreichbar." },
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

      {/* Packages */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <SectionHeading
            badge="Pakete"
            title="Wählen Sie Ihr MSSP-Paket"
            subtitle="Von der Basis-Überwachung bis zum externen CISO — wir haben das passende Paket."
          />

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[basic, professional, ciso].map((pkg, i) => (
              <div key={pkg.id} className={`glass-card rounded-2xl p-6 lg:p-8 space-y-5 ${i === 1 ? "glow-teal border-primary/30" : "glass-card-hover"}`}>
                {i === 1 && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    Beliebteste Wahl
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {i === 0 && <Eye size={24} />}
                    {i === 1 && <ShieldCheck size={24} />}
                    {i === 2 && <Headphones size={24} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{pkg.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold font-mono text-foreground">{pkg.price}</span>
                  {pkg.priceNote && <span className="text-sm text-muted-foreground">/ {pkg.priceNote}</span>}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <StarRating rating={pkg.rating} reviewCount={pkg.reviewCount} size="sm" />
                </div>
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-sm font-medium text-primary">{pkg.hormozi}</p>
                </div>
                <ul className="space-y-2">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-primary shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <CalendlyButton className={`w-full font-semibold ${i === 1 ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary border border-border text-foreground hover:bg-secondary/80"}`}>
                    Anfragen <ChevronRight size={16} className="ml-1" />
                  </CalendlyButton>
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
              Schlafen Sie wieder ruhig
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mit unserer 24/7 Sicherheitsüberwachung ist Ihr Unternehmen rund um die Uhr geschützt.
            </p>
            <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14">
                    Kostenloses Erstgespräch
                <ChevronRight size={20} className="ml-2" />
                  </CalendlyButton>
          </div>
        </div>
      </section>
    </div>
  );
}
