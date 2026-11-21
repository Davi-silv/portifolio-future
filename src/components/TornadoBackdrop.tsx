"use client";

import dynamic from "next/dynamic";
import { TornadoFallback } from "@/components/TornadoFallback";

const Vortex = dynamic(() => import("@/components/originkit/ui/tornado"), {
  ssr: false,
  loading: () => null,
});

/** Full-page Tornado backdrop used across the portfolio. */
export function TornadoBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Always-on motion layer for browsers without WebGL */}
      <TornadoFallback />

      <div className="absolute inset-0 opacity-90 md:opacity-100">
        <Vortex
          background="transparent"
          speed={10}
          zoom={74}
          twist={3}
          direction="right"
          dots
          comets
          lineOptions={{
            count: 220,
            color: "#3ad4ba",
            glow: 10,
          }}
          dotOptions={{
            count: 6500,
            size: 18,
            color: "#c5d2dc",
            glow: 9,
            flicker: 9,
          }}
          cometOptions={{
            count: 10,
            speed: 6,
            color: "#e07a4f",
            glow: 6,
            tail: 18,
            delay: 8,
            collide: 6,
          }}
          style={{ background: "transparent" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/55 to-void/85" />
    </div>
  );
}
