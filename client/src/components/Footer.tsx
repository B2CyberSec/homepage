// Frosted Daylight — Footer
import { COMPANY, LOGO_URL } from "@/lib/data";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 py-12 lg:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={LOGO_URL} alt="B2CyberSec" className="h-8 w-auto mb-4" />
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Pragmatische IT-Sicherheit für den Mittelstand in Bayern und
              Baden-Württemberg.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                "Security Quick Check",
                "Pentesting",
                "CISO as a Service",
                "Managed Security",
                "Compliance Care",
                "Professional Services",
              ].map((s) => (
                <li key={s}>
                  <button
                    onClick={() =>
                      document
                        .querySelector("#services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Unternehmen</h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                >
                  Kontakt
                </button>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-sm text-slate-500 hover:text-orange-500 transition-colors"
                >
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Kontakt</h4>
            <div className="space-y-2.5 text-sm text-slate-500">
              <p>Werner-von-Siemens-Str. 6, 86159 Augsburg</p>
              <a
                href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                className="block hover:text-orange-500 transition-colors"
              >
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="block hover:text-orange-500 transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} B2CyberSec GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
