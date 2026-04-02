import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="text-8xl font-bold text-gradient-brand">404</div>
        <h1 className="text-3xl font-bold text-[#1d1d1f] mt-4">Seite nicht gefunden</h1>
        <p className="text-[#86868b] mt-4 leading-relaxed">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block bg-[#e8530e] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#c44400] transition-all"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </div>
  );
}
