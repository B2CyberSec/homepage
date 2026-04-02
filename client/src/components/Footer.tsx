/**
 * Footer – Bauhaus Security Design
 * Minimal footer with legal links, contact info, and copyright.
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 lg:py-14">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company */}
          <div>
            <span className="font-heading font-bold text-lg tracking-tight text-foreground block mb-3">
              B2Cyber<span className="text-signal">Sec</span>
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pragmatische Cybersecurity für den Mittelstand. NIS-2, CISO as a Service & Pentesting aus Augsburg.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Leistungen</h4>
            <ul className="space-y-2">
              {["NIS-2 Compliance", "CISO as a Service", "Pentesting", "Managed Security", "Security Quick Check"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const el = document.querySelector("#leistungen");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-muted-foreground hover:text-signal transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const el = document.querySelector("#warum");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-signal transition-colors"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.querySelector("#kontakt");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-sm text-muted-foreground hover:text-signal transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link href="/impressum" className="text-sm text-muted-foreground hover:text-signal transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-signal transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3 text-foreground">Kontakt</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>B2CyberSec GmbH</p>
              <p>Werner-von-Siemens-Str. 6</p>
              <p>86159 Augsburg</p>
              <a href="tel:+4982190789500" className="block hover:text-signal transition-colors">
                +49 (0) 821 90 789 500
              </a>
              <a href="mailto:info@b2cybersec.com" className="block hover:text-signal transition-colors">
                info@b2cybersec.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} B2CyberSec GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/impressum" className="text-xs text-muted-foreground hover:text-signal transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="text-xs text-muted-foreground hover:text-signal transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
