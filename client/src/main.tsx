import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App";
import "./index.css";
import { captureUtm } from "./lib/tracking";

// Vercel Web Analytics: cookielos, ohne Consent nutzbar (zählt Seiten + eigene Ereignisse).
inject();

// Kampagnen-Parameter (utm_*, fbclid) der Landing-URL für die Session merken,
// damit sie später an Calendly-Links weitergegeben werden können.
captureUtm();

// Nach einem Deploy zeigen offene Browser-Tabs noch auf alte Chunk-Dateien,
// die es nicht mehr gibt ("Failed to fetch dynamically imported module").
// Vite meldet das als vite:preloadError — dann einmal automatisch neu laden.
// Zeit-Guard: höchstens ein Auto-Reload alle 10 Sekunden, keine Schleife.
window.addEventListener("vite:preloadError", (event) => {
  const KEY = "b2-chunk-reload-at";
  const last = Number(sessionStorage.getItem(KEY) || 0);
  if (Date.now() - last < 10_000) return;
  sessionStorage.setItem(KEY, String(Date.now()));
  event.preventDefault();
  window.location.reload();
});

createRoot(document.getElementById("root")!).render(<App />);
