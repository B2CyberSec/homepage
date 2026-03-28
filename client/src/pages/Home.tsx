import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ChevronRight, Shield, Search, Eye, UserCog, Clock, Users,
  AlertTriangle, CheckCircle, ArrowRight, Zap, FileCheck, ShieldCheck, Mail
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeading from "@/components/SectionHeading";
import StarRating from "@/components/StarRating";
import { COMPANY, IMAGES, NIS2_FACTS, SERVICES } from "@/lib/data";
import CalendlyButton from "@/components/CalendlyButton";

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-secondary/30 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <img src={IMAGES.hero} alt="" className="w-full h-full object-cover opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
              <AlertTriangle size={16} />
              <span>NIS-2 Frist abgelaufen — BSI-Registrierung seit {NIS2_FACTS.bsiFrist} Pflicht</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-foreground">
              IT-Security{" "}
              <span className="text-gradient">einfach</span>
              <br />
              direkt online buchen
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Klare Preise. Schnelle Lieferung. Keine Überraschungen.
              Wählen Sie Ihren Security-Service, buchen Sie online — und wir kümmern uns um den Rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14 shadow-md shadow-primary/20">
                  Services ansehen
                  <ChevronRight size={20} className="ml-2" />
                </Button>
              </Link>
              <CalendlyButton size="lg" variant="outline" className="font-bold text-base px-8 h-14 border-border hover:bg-black/5">
                    Kostenloses Erstgespräch
                  </CalendlyButton>
            </div>

            <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-primary" />
                <span>{COMPANY.experience} Erfahrung</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span>{COMPANY.teamSize} Experten</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-primary" />
                <span>Festpreise</span>
              </div>
            </div>
          </div>

          {/* Live Service Catalog Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card glow-teal rounded-2xl p-8 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-mono text-primary font-semibold">Live Service-Katalog</span>
                </div>
                {SERVICES.slice(0, 3).map((s) => (
                  <div key={s.id} className="flex items-center justify-between p-3 rounded-xl bg-black/4 hover:bg-black/6 transition-colors border border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {s.icon === "Zap" && <Zap size={16} />}
                        {s.icon === "Shield" && <Shield size={16} />}
                        {s.icon === "Search" && <Search size={16} />}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.deliveryTime}</p>
                      </div>
                    </div>
                    <span className="font-mono font-bold text-foreground text-sm">{s.price}</span>
                  </div>
                ))}
                <Link href="/services">
                  <span className="flex items-center gap-1 text-sm text-primary font-semibold hover:underline mt-2">
                    Alle {SERVICES.length} Services ansehen <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── NIS-2 Urgency Banner ─── */
function NIS2Banner() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="relative py-20 overflow-hidden bg-secondary/40">
      <div className="container relative z-10">
        <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive text-xs font-bold uppercase tracking-wider">
                <AlertTriangle size={14} />
                Frist abgelaufen
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
                NIS-2 ist da.{" "}
                <span className="text-destructive">Sind Sie bereit?</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Seit dem {NIS2_FACTS.lawDate} gilt das NIS-2-Umsetzungsgesetz. Die BSI-Registrierungsfrist
                lief am {NIS2_FACTS.bsiFrist} ab. {NIS2_FACTS.affectedCompanies} Unternehmen in {NIS2_FACTS.sectors} Sektoren
                sind betroffen — und {NIS2_FACTS.nonCompliant} sind noch nicht konform.
              </p>
              <p className="text-muted-foreground">
                Bußgelder bis zu <span className="text-foreground font-bold">{NIS2_FACTS.maxFine}</span> oder{" "}
                <span className="text-foreground font-bold">{NIS2_FACTS.finePercent}</span> drohen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/nis-2">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm">
                    NIS-2 Compliance prüfen
                    <ChevronRight size={16} className="ml-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-border hover:bg-black/5 font-semibold">
                    CyberSchild Audit ab 4.900 €
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { value: NIS2_FACTS.affectedCompanies, label: "Betroffene Unternehmen", icon: Users },
                { value: NIS2_FACTS.maxFine, label: "Maximales Bußgeld", icon: AlertTriangle },
                { value: NIS2_FACTS.nonCompliant, label: "Noch nicht konform", icon: Shield },
                { value: `${NIS2_FACTS.sectors} Sektoren`, label: "Betroffene Branchen", icon: FileCheck },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 space-y-3">
                  <stat.icon size={28} className="text-red-600" />
                  <p className="text-3xl lg:text-4xl font-extrabold font-mono text-foreground">{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Featured Services ─── */
function FeaturedServices() {
  const featured = SERVICES.filter((s) => s.popular || s.id === "security-quick-check").slice(0, 3);
  const iconMap: Record<string, any> = { Shield, Search, Zap, ShieldCheck, Eye, UserCog, FileCheck, ShieldAlert: Shield };

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <SectionHeading
          badge="Service-Katalog"
          title="Wählen Sie Ihren Security-Service"
          subtitle="Klare Preise, klare Lieferzeiten, klare Ergebnisse. Kein Kleingedrucktes, keine versteckten Kosten."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {featured.map((service) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <div key={service.id} className="glass-card glass-card-hover rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1">
                {/* Badge row — always present for alignment */}
                <div className="h-7 mb-3">
                  {service.popular && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Beliebteste Wahl
                    </span>
                  )}
                </div>
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.subtitle}</p>
                  </div>
                </div>
                {/* Description — flex-1 to push rest down */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{service.description}</p>
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-extrabold font-mono text-foreground">{service.price}</span>
                  {service.priceNote && <span className="text-sm text-muted-foreground">/ {service.priceNote}</span>}
                </div>
                {/* Delivery + rating */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1"><Clock size={14} className="text-primary" />{service.deliveryTime}</div>
                  <StarRating rating={service.rating} size="sm" />
                </div>
                {/* Hormozi guarantee */}
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 mb-4">
                  <p className="text-sm font-medium text-primary">{service.hormozi}</p>
                </div>
                {/* Button always at bottom */}
                <CalendlyButton className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-sm mt-auto">
                    Jetzt buchen <ChevronRight size={16} className="ml-1" />
                  </CalendlyButton>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" className="border-border hover:bg-black/5 font-semibold">
              Alle {SERVICES.length} Services ansehen
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    { icon: Search, title: "1. Service wählen", desc: "Durchstöbern Sie unseren Katalog und wählen Sie den passenden Service — mit klaren Preisen und Lieferzeiten." },
    { icon: CheckCircle, title: "2. Online buchen", desc: "Buchen Sie direkt über die Website oder vereinbaren Sie ein kostenloses Erstgespräch über Calendly." },
    { icon: Shield, title: "3. Wir liefern", desc: "Unser Team startet sofort. Sie erhalten regelmäßige Updates und einen verständlichen Abschlussbericht." },
    { icon: Mail, title: "4. Immer erreichbar", desc: "Bei Fragen erreichen Sie uns jederzeit per E-Mail oder über unser Kontaktformular." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container">
        <SectionHeading
          badge="So funktioniert's"
          title="In 4 Schritten zur IT-Sicherheit"
          subtitle="Kein komplizierter Prozess, keine endlosen Meetings. Einfach buchen und loslegen."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {steps.map((step, i) => (
            <div key={i} className="relative glass-card rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <step.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <ArrowRight size={16} className="text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Section ─── */
function TrustSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <SectionHeading
          badge="Warum B2CyberSec"
          title="Vertrauen durch Transparenz"
          subtitle="Wir machen IT-Security verständlich. Keine Fachbegriff-Wüste, keine versteckten Kosten."
        />

        <div
          ref={ref}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            {
              icon: Shield,
              title: "Klare Festpreise",
              desc: "Jeder Service hat einen festen Preis. Keine Überraschungen, keine Nachforderungen. Sie wissen vorher, was es kostet.",
            },
            {
              icon: Clock,
              title: "Garantierte Lieferzeiten",
              desc: "Wir nennen Ihnen den genauen Zeitrahmen — und halten ihn ein. Vom Quick Check in 48 Stunden bis zum vollständigen Audit in 14 Tagen.",
            },
            {
              icon: Users,
              title: "17 Experten, 20+ Jahre",
              desc: "Unser Team aus 17 spezialisierten Sicherheitsexperten — 9 Network Infrastructure Experten und 8 zertifizierte Pentester — bringt über 20 Jahre Erfahrung mit.",
            },
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
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="container">
        <div
          ref={ref}
          className={`glass-card glow-teal rounded-3xl p-8 lg:p-16 text-center space-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground">
            Bereit für echte IT-Sicherheit?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buchen Sie jetzt ein kostenloses 15-Minuten-Erstgespräch. Wir analysieren Ihre Situation
            und empfehlen den passenden Service — unverbindlich und ohne Verkaufsdruck.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base px-8 h-14 shadow-md shadow-primary/20">
                    Kostenloses Erstgespräch buchen
                <ChevronRight size={20} className="ml-2" />
                  </CalendlyButton>
            <a href={`mailto:${COMPANY.email}`}>
              <Button size="lg" variant="outline" className="font-bold text-base px-8 h-14 border-border hover:bg-black/5">
                <Mail size={18} className="mr-2" />
                Anfrage per E-Mail
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <HeroSection />
      <NIS2Banner />
      <FeaturedServices />
      <HowItWorks />
      <TrustSection />
      <CTASection />
    </div>
  );
}
