import { Check, Clock, ChevronRight, Award } from "lucide-react";
import * as Icons from "lucide-react";
import StarRating from "./StarRating";
import type { ServicePackage } from "@/lib/data";
import CalendlyButton from "./CalendlyButton";

interface ServiceCardProps {
  service: ServicePackage;
  featured?: boolean;
}

export default function ServiceCard({ service, featured }: ServiceCardProps) {
  const IconComponent = (Icons as any)[service.icon] || Icons.Shield;

  return (
    <div
      className={`relative group rounded-2xl transition-all duration-300 flex flex-col ${
        featured
          ? "glass-card glow-teal border-primary/30"
          : "glass-card glass-card-hover"
      }`}
    >
      {service.popular && (
        <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Award size={12} />
          Beliebteste Wahl
        </div>
      )}

      <div className="p-6 lg:p-8 flex flex-col flex-1 gap-4">
        {/* Icon + title + category chip */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <IconComponent size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          </div>
          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 rounded bg-secondary border border-border shrink-0 ml-2">
            {service.category === "einmalig" ? "Einmalig" : service.category === "abo" ? "Abo" : "Stunde"}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed min-h-[3.5rem]">
          {service.description}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold font-mono text-foreground">{service.price}</span>
          {service.priceNote && (
            <span className="text-sm text-muted-foreground">/ {service.priceNote}</span>
          )}
        </div>

        {/* Delivery + rating */}
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <Clock size={14} className="text-primary" />
            {service.deliveryTime}
          </div>
          <StarRating rating={service.rating} reviewCount={service.reviewCount} size="sm" />
        </div>

        {/* Guarantee box */}
        <div className="p-3 rounded-xl bg-primary/5 border border-primary/15">
          <p className="text-sm font-medium text-primary">{service.hormozi}</p>
        </div>

        {/* Features — grows to fill remaining space */}
        <ul className="space-y-2 flex-1">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check size={16} className="text-primary shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>

        {/* Review quote — always rendered (invisible placeholder if none) */}
        <div className="pt-4 border-t border-border">
          <div className="p-3 rounded-xl bg-secondary border border-border/60 min-h-[4.5rem]">
            {service.reviews.length > 0 ? (
              <>
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: service.reviews[0].stars }).map((_, i) => (
                    <Icons.Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{service.reviews[0].text}"</p>
                <p className="text-xs text-muted-foreground mt-1">— {service.reviews[0].author}, {service.reviews[0].company}</p>
              </>
            ) : (
              <p className="text-sm text-muted-foreground italic opacity-0 select-none">placeholder</p>
            )}
          </div>
        </div>

        {/* CTA — always at bottom */}
        <CalendlyButton
          className={`w-full font-semibold shadow-sm ${
            featured || service.popular
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
          }`}
        >
          Jetzt buchen
          <ChevronRight size={16} className="ml-1" />
        </CalendlyButton>
      </div>
    </div>
  );
}
