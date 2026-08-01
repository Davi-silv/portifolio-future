"use client";

/**
 * Placeholder until `npx originkit@latest add globe` runs.
 * Re-run the CLI with -o / --overwrite to replace this file.
 */
export default function Globe() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-full w-full max-h-[640px] max-w-[640px]">
        <div className="absolute inset-[10%] rounded-full border border-[rgba(62,224,196,0.35)]" />
        <div className="absolute inset-[20%] rounded-full border border-[rgba(148,185,198,0.2)]" />
        <div
          className="absolute inset-[30%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 28%, #24343f 0%, #0c141c 52%, #05070b 100%)",
          }}
        />
        <div className="absolute left-1/2 top-[20%] h-[60%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(62,224,196,0.55)] to-transparent" />
        <div className="absolute left-[20%] top-1/2 h-px w-[60%] -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(62,224,196,0.4)] to-transparent" />
      </div>
    </div>
  );
}
