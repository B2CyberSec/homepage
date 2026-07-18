import { useEffect } from "react";

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo(title: string, description: string, robots?: string) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    if (robots) setMeta("robots", robots);
  }, [title, description, robots]);
}
