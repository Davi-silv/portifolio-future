"use client";

import dynamic from "next/dynamic";

const Vortex = dynamic(() => import("@/components/originkit/ui/tornado"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full border border-signal/20" />
    </div>
  ),
});

/** Hero-focused Tornado stage (desktop side / mobile block). */
export function GlobeStage() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,212,186,0.08),transparent_65%)]" />
      <div className="absolute inset-0 opacity-90">
        <Vortex
          background="transparent"
          speed={10}
          zoom={78}
          twist={3}
          direction="right"
          dots
          comets
          lineOptions={{ count: 220, color: "#3ad4ba", glow: 10 }}
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
    </div>
  );
}
