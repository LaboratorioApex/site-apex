"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type Consent = "accepted" | "rejected" | null;

function startAnalytics(gaId: string) {
  if (document.querySelector(`[data-ga-id="${gaId}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  script.dataset.gaId = gaId;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", gaId, { anonymize_ip: true });
}

export function Analytics({ gaId }: { gaId?: string }) {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    if (!gaId) return;
    const saved = window.localStorage.getItem("apex-analytics-consent") as Consent;
    if (saved === "accepted" || saved === "rejected") setConsent(saved);
    if (saved === "accepted") startAnalytics(gaId);
  }, [gaId]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest<HTMLElement>("[data-conversion]");
      if (!link) return;

      const eventName = link.dataset.conversion ?? "conversion";
      const location = link.dataset.location ?? "unknown";
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ event: eventName, location });
      window.gtag?.("event", eventName, { event_category: "conversion", location });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!gaId || consent !== null) return null;

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem("apex-analytics-consent", value);
    setConsent(value);
    if (value === "accepted") startAnalytics(gaId);
  };

  return (
    <aside className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-2xl rounded-lg border border-border bg-surface p-4 shadow-soft sm:flex sm:items-center sm:gap-5">
      <p className="text-sm leading-relaxed text-muted">
        Usamos métricas anônimas para entender acessos e melhorar o site. Você decide se deseja permitir essa medição.
      </p>
      <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
        <button onClick={() => choose("rejected")} className="min-h-10 rounded-md border border-border px-4 text-sm font-semibold">Recusar</button>
        <button onClick={() => choose("accepted")} className="min-h-10 rounded-md bg-accent px-4 text-sm font-semibold text-white">Permitir</button>
      </div>
    </aside>
  );
}

