"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#trabalhos", label: "Projetos" },
  { href: "#stack", label: "Competências" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? "border-b border-line bg-void/75 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <a
          href="#topo"
          className="font-[family-name:var(--font-syne)] text-lg tracking-tight text-mist md:text-xl"
          style={{ fontWeight: 700 }}
        >
          DAVI<span className="text-signal">.</span>
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-steel transition-colors hover:text-mist"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://github.com/Davi-silv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mist transition-colors hover:text-signal"
        >
          GitHub
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
