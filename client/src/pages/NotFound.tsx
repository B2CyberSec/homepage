import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
      <div className="container text-center space-y-8 max-w-lg">
        <div className="text-8xl font-extrabold font-mono text-gradient">404</div>
        <h1 className="text-3xl font-bold text-foreground">Seite nicht gefunden</h1>
        <p className="text-muted-foreground">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Home size={16} className="mr-2" />
              Zur Startseite
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="border-border hover:bg-white/5 font-semibold">
              Services ansehen
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
