"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="trabalhos" className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-14 max-w-2xl md:mb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-signal">
            Projetos selecionados
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-syne)] text-3xl tracking-tight text-mist md:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Trabalho que demonstra o ciclo completo
          </h2>
          <p className="mt-4 max-w-xl text-steel md:text-[1.05rem]">
            Uma seleção dos meus repositórios no GitHub — do backend com
            autenticação a produtos digitais em produção.
          </p>
        </div>

        <div>
          {featured.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group grid gap-6 border-t border-line py-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] md:gap-14 md:py-12"
            >
              <div>
                <span className="font-mono text-[11px] tabular-nums text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-3 font-[family-name:var(--font-syne)] text-2xl text-mist transition-colors group-hover:text-signal md:text-3xl"
                  style={{ fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm text-steel/75">{project.role}</p>
              </div>

              <div className="flex flex-col justify-between gap-7">
                <p className="text-[0.98rem] leading-relaxed text-steel md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/75"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal transition hover:brightness-125"
                    >
                      Ver demo ↗
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist/85 transition hover:text-signal"
                  >
                    Código ↗
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-line" />
        </div>

        <div className="mt-16">
          <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.26em] text-steel">
            Mais projetos
          </p>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex flex-col border-t border-line pt-5"
              >
                <h3
                  className="font-[family-name:var(--font-syne)] text-lg text-mist"
                  style={{ fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                  {project.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal"
                    >
                      Demo ↗
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist/75"
                  >
                    Código ↗
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
