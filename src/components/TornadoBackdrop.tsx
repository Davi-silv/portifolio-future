"use client";

import dynamic from "next/dynamic";

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
      <div className="absolute inset-0 opacity-[0.55] md:opacity-70">
        <Vortex
          background="transparent"
          speed={8}
          zoom={72}
          twist={3}
          direction="right"
          dots
          comets
          lineOptions={{
            count: 180,
            color: "#3ad4ba",
            glow: 8,
          }}
          dotOptions={{
            count: 5000,
            size: 16,
            color: "#8fa8b5",
            glow: 8,
            flicker: 8,
          }}
          cometOptions={{
            count: 8,
            speed: 5,
            color: "#e07a4f",
            glow: 5,
            tail: 16,
            delay: 10,
            collide: 5,
          }}
          style={{ background: "transparent" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-void/55 to-void/85" />
    </div>
  );
}
