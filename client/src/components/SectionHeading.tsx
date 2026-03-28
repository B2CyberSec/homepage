import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ badge, title, subtitle, align = "center" }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-12 lg:mb-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${align === "center" ? "text-center max-w-3xl mx-auto" : ""}`}
    >
      {badge && (
        <span className="inline-block text-xs font-mono font-semibold uppercase tracking-widest text-primary mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
