"use client";

import dynamic from "next/dynamic";

const BlackHole = dynamic(() => import("@/components/originkit/ui/black-hole"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-40 w-40 animate-pulse rounded-full border border-signal/20" />
    </div>
  ),
});

const DISK_COLORS = ["#3ad4ba", "#8fa8b5", "#e8eef2", "#e07a4f"];

export function GlobeStage() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,212,186,0.07),transparent_65%)]" />
      <div className="absolute inset-0 flex items-center justify-center animate-drift">
        <div className="h-[min(90vw,600px)] w-[min(90vw,600px)] opacity-90">
          <BlackHole
            colors={DISK_COLORS}
            particleCount={720}
            particleSize={4}
            outerRadius={74}
            tilt={22}
            tiltSideway={158}
            trail={40}
            orbitSpeed={4}
            pullSpeed={1}
            centre={{ voidRadius: 46, voidX: 50, voidY: 50 }}
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}
