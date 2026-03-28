import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, Clock, ChevronRight, Award } from "lucide-react";
import * as Icons from "lucide-react";
import StarRating from "./StarRating";
import type { ServicePackage } from "@/lib/data";
import { COMPANY } from "@/lib/data";

interface ServiceCardProps {
  service: ServicePackage;
  featured?: boolean;
}

export default function ServiceCard({ service, featured }: ServiceCardProps) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Shield;

  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 ${
        featured
          ? "glass-card glow-teal border-primary/30"
          : "glass-card glass-card-hover"
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          <Award size={12} />
          Beliebteste Wahl
        </div>
      )}

      <div className="p-6 lg:p-8 space-y-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <IconComponent size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 rounded bg-white/5">
            {service.category === "einmalig" ? "Einmalig" : service.category === "abo" ? "Abo" : "Stunde"}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold font-mono text-foreground">{service.price}</span>
          {service.priceNote && (
            <span className="text-sm text-muted-foreground">/ {service.priceNote}</span>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={14} className="text-primary" />
            {service.deliveryTime}
          </div>
          <StarRating rating={service.rating} reviewCount={service.reviewCount} size="sm" />
        </div>

        <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
          <p className="text-sm font-medium text-primary">{service.hormozi}</p>
        </div>

        <ul className="space-y-2">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check size={16} className="text-primary shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {service.reviews.length > 0 && (
          <div className="pt-4 border-t border-border">
            <div className="p-3 rounded-xl bg-white/3">
              <div className="flex items-center gap-1 mb-1">
                {Array.from({ length: service.reviews[0].stars }).map((_, i) => (
                  <Icons.Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">"{service.reviews[0].text}"</p>
              <p className="text-xs text-muted-foreground mt-1">— {service.reviews[0].author}, {service.reviews[0].company}</p>
            </div>
          </div>
        )}

        <a href={COMPANY.calendly} target="_blank" rel="noopener noreferrer" className="block">
          <Button
            className={`w-full font-semibold ${
              featured || service.popular
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-white/10 text-foreground hover:bg-white/15"
            }`}
          >
            Jetzt buchen
            <ChevronRight size={16} className="ml-1" />
          </Button>
        </a>
      </div>
    </div>
  );
}
