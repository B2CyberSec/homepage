import { useState } from "react";
import { ChevronRight, CheckCircle, Clock, Eye, ShieldCheck, Headphones, Shield, Zap, BarChart3, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import { SERVICES, IMAGES } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";

export default function MSSP() {
  const basic = SERVICES.find(s => s.id === "mssp-basic")!;
  const professional = SERVICES.find(s => s.id === "mssp-professional")!;
  const ciso = SERVICES.find(s => s.id === "ciso-as-a-service")!;

  const packages = [basic, professional, ciso];
  const icons = [Eye, ShieldCheck, Headphones];
  const highlighted = 1; // Professional is highlighted

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.services} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <Eye size={14} />
              MSSP
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              24/7 Security{" "}
              <span className="text-gradient">ohne eigenes Team</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Managed Security Services — wir überwachen Ihre IT rund um die Uhr,
              erkennen Bedrohungen in Echtzeit und reagieren sofort. Sie schlafen ruhig,
              wir arbeiten.
            </p>
            <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14 shadow-md shadow-primary/20">
              Kostenloses Erstgespräch
              <ChevronRight size={20} className="ml-2" />
            </CalendlyButton>
          </div>
        </div>
      </section>

      {/* Why MSSP */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Warum MSSP"
            title="Sicherheit als Service"
            subtitle="Ein eigenes Security-Team aufzubauen kostet 300.000+ € pro Jahr. Unsere MSSP-Pakete starten ab 1.990 € im Monat."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Eye, title: "24/7 Überwachung", desc: "Ihre IT wird rund um die Uhr überwacht — auch nachts, am Wochenende und an Feiertagen." },
              { icon: Zap, title: "Sofortige Reaktion", desc: "Bei einem Sicherheitsvorfall reagieren wir innerhalb von Minuten, nicht Stunden." },
              { icon: BarChart3, title: "Monatliche Reports", desc: "Klare Berichte über den Sicherheitsstatus Ihrer IT — verständlich für Management und Technik." },
              { icon: Users, title: "Ihr Security-Team", desc: "Unser Team wird zu Ihrem Team. Wir kennen Ihre Infrastruktur und Ihre Risiken." },
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

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {packages.map((pkg, i) => {
              const IconComp = icons[i];
              const isHighlighted = i === highlighted;
              return (
                <div
                  key={pkg.id}
                  className={`glass-card rounded-2xl p-6 lg:p-8 flex flex-col ${
                    isHighlighted ? "glow-teal border-primary/30" : "glass-card-hover"
                  }`}
                >
                  {/* Badge row — fixed height */}
                  <div className="h-7 mb-3">
                    {isHighlighted && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                        Beliebteste Wahl
                      </span>
                    )}
                  </div>

                  {/* Icon + title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <IconComp size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                    </div>
                  </div>

                  {/* Description — fixed min-height */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 min-h-[4rem]">
                    {pkg.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-extrabold font-mono text-foreground">{pkg.price}</span>
                    {pkg.priceNote && (
                      <span className="text-sm text-muted-foreground">/ {pkg.priceNote}</span>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                    <StarRating rating={pkg.rating} reviewCount={pkg.reviewCount} size="sm" />
                  </div>

                  {/* Guarantee box */}
                  <div className="p-3 rounded-xl bg-primary/5 border border-primary/10 mb-3">
                    <p className="text-sm font-medium text-primary">{pkg.hormozi}</p>
                  </div>

                  {/* Features — grows to fill space */}
                  <ul className="space-y-2 flex-1">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle size={14} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Review quote — always rendered */}
                  <div className="p-3 rounded-xl bg-secondary/40 border-t border-border mt-4">
                    {pkg.reviews.length > 0 ? (
                      <>
                        <p className="text-sm text-muted-foreground italic">"{pkg.reviews[0].text}"</p>
                        <p className="text-xs text-muted-foreground mt-1">— {pkg.reviews[0].author}, {pkg.reviews[0].company}</p>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground italic opacity-0 select-none">placeholder</p>
                    )}
                  </div>

                  {/* CTA — always at bottom */}
                  <CalendlyButton
                    className={`w-full font-semibold mt-4 ${
                      isHighlighted
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary border border-border text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    Anfragen <ChevronRight size={16} className="ml-1" />
                  </CalendlyButton>
                </div>
              );
            })}
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
