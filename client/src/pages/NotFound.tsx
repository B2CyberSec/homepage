import { Link } from "wouter";
import { ArrowLeft, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded border border-border mb-6">
          <AlertTriangle className="w-8 h-8 text-signal" />
        </div>
        <h1 className="font-heading font-bold text-6xl text-signal mb-2 font-mono">404</h1>
        <h2 className="font-heading font-semibold text-xl mb-3">Seite nicht gefunden</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded bg-signal text-background hover:opacity-90 transition-opacity"
        >
          <ArrowLeft className="w-4 h-4" />
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
