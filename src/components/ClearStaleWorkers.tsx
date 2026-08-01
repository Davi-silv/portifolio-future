"use client";

import { useEffect } from "react";

/** Removes leftover service workers/caches (e.g. Prospecta on localhost). */
export function ClearStaleWorkers() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const clear = async () => {
      try {
        if ("serviceWorker" in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          await Promise.all(registrations.map((reg) => reg.unregister()));
        }
        if ("caches" in window) {
          const keys = await caches.keys();
          await Promise.all(keys.map((key) => caches.delete(key)));
        }
      } catch {
        /* ignore */
      }
    };

    void clear();
  }, []);

  return null;
}
