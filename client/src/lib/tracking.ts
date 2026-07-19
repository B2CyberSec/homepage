/*
 * Marketing-Tracking-Helfer (DSGVO-konform):
 * - UTM/fbclid der Anzeigen-Klicks überleben die SPA-Navigation (sessionStorage, first-party)
 * - track() feuert Meta-Pixel-Events NUR, wenn das Pixel nach Consent geladen wurde
 */

const UTM_KEY = "b2cs-utm";
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/** Beim App-Start aufrufen: merkt sich Kampagnen-Parameter aus der Landing-URL. */
export function captureUtm(): void {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    for (const key of UTM_PARAMS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }
    if (Object.keys(found).length > 0) {
      sessionStorage.setItem(UTM_KEY, JSON.stringify(found));
    }
  } catch {
    /* Storage gesperrt (z. B. Inkognito-Sonderfälle) — Tracking ist optional */
  }
}

export function getStoredUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Hängt gemerkte Kampagnen-Parameter an einen Link an; echte Ad-Werte überschreiben statische Defaults. */
export function withUtm(url: string): string {
  const stored = getStoredUtm();
  if (Object.keys(stored).length === 0) return url;
  try {
    const u = new URL(url);
    for (const [key, value] of Object.entries(stored)) {
      u.searchParams.set(key, value);
    }
    return u.toString();
  } catch {
    return url;
  }
}

/** Meta-Pixel-Event — nur nach Consent (dann existiert window.fbq). */
export function track(event: string, data?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", event, data || {});
  }
}

/** PageView bei SPA-Routenwechsel (der Erst-Aufruf kommt vom Pixel-Basiscode). */
export function trackPageView(): void {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}
