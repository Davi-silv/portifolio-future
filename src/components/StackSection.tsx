"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/projects";

export function StackSection() {
  return (
    <section id="stack" className="relative border-t border-line py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-30 grid-field" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-signal">
            Competências
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-syne)] text-3xl tracking-tight text-mist md:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Tecnologias e práticas que uso no dia a dia
          </h2>
          <p className="mt-4 text-steel md:text-[1.05rem]">
            Base sólida em frontend e backend, com atenção a produto, UX e
            entrega contínua.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.area}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-5 bg-signal" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                  {group.area}
                </h3>
              </div>
              <ul className="space-y-0">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line/60 py-2.5 text-[0.95rem] text-mist/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
