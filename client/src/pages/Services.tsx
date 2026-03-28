import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, STAFF_AUGMENTATION, COMPANY, IMAGES } from "@/lib/data";

type Category = "alle" | "einmalig" | "abo" | "stundenbasis";

export default function Services() {
  const [category, setCategory] = useState<Category>("alle");

  const filtered = category === "alle" ? SERVICES : SERVICES.filter((s) => s.category === category);

  const categories: { value: Category; label: string }[] = [
    { value: "alle", label: "Alle Services" },
    { value: "einmalig", label: "Einmalig" },
    { value: "abo", label: "Abonnement" },
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.services} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        <div className="container relative z-10">
          <SectionHeading
            badge="Service-Katalog"
            title="IT-Security Services — klar und transparent"
            subtitle="Wählen Sie den passenden Service für Ihr Unternehmen. Alle Preise sind Festpreise, alle Lieferzeiten garantiert."
          />

          {/* Category Filter */}
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="pb-16 lg:pb-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((service) => (
              <ServiceCard key={service.id} service={service} featured={service.popular} />
            ))}
          </div>
        </div>
      </section>

      {/* Staff Augmentation */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <SectionHeading
            badge="Experten auf Zeit"
            title="IT-Security-Experten auf Stundenbasis"
            subtitle="Brauchen Sie kurzfristig Verstärkung? Unsere Experten sind ab 48 Stunden verfügbar — nearshore oder onshore."
          />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {STAFF_AUGMENTATION.map((model) => (
              <div key={model.id} className="glass-card glass-card-hover rounded-2xl p-6 lg:p-8 space-y-5">
                <h3 className="text-xl font-bold text-foreground">{model.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold font-mono text-foreground">{model.rate}</span>
                </div>
                <p className="text-sm text-muted-foreground">Verfügbarkeit: {model.availability}</p>
                <ul className="space-y-2">
                  {model.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-white/10 text-foreground hover:bg-white/15 font-semibold">
                    Anfragen <ChevronRight size={16} className="ml-1" />
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
              Nicht sicher, welcher Service passt?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kein Problem. In einem kostenlosen 15-Minuten-Gespräch finden wir gemeinsam den richtigen Service für Sie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 h-14">
                  Kostenloses Erstgespräch
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
