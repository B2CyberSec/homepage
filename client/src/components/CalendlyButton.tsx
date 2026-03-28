import { ReactNode, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/data";

// Extend Window type for Calendly
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
}

export default function CalendlyButton({
  children,
  className,
  size = "default",
  variant = "default",
}: CalendlyButtonProps) {
  const openCalendly = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: COMPANY.calendly });
    } else {
      // Fallback: open in new tab if script not loaded yet
      window.open(COMPANY.calendly, "_blank", "noopener,noreferrer");
    }
  }, []);

  return (
    <Button
      onClick={openCalendly}
      className={className}
      size={size}
      variant={variant}
    >
      {children}
    </Button>
  );
}
