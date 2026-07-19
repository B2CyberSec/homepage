import { useEffect } from "react";

const SITE_ORIGIN = "https://www.b2cybersec.com";

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo(title: string, description: string, robots?: string) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    if (robots) setMeta("robots", robots);
    const path = window.location.pathname === "/" ? "" : window.location.pathname;
    const canonical = `${SITE_ORIGIN}${path}`;
    setCanonical(canonical);
    setProperty("og:url", canonical);
    setProperty("og:title", title);
    setProperty("og:description", description);
  }, [title, description, robots]);
}
