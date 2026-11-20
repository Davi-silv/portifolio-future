"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%", amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden border border-line bg-panel/55 transition-[border-color,background-color,box-shadow] duration-400 hover:border-signal/40 hover:bg-panel"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-signal/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {featured && project.image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink">
          <Image
            src={project.image}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
          <span className="absolute left-4 top-4 z-10 border border-line/80 bg-void/70 px-2.5 py-1 font-mono text-[10px] tabular-nums tracking-[0.14em] text-signal backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      )}

      <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-7" : "p-5 md:p-6"}`}>
        {!(featured && project.image) && (
          <div className="mb-4 flex items-start justify-between gap-4">
            <span className="font-mono text-[11px] tabular-nums text-signal">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel/80">
              {project.role}
            </span>
          </div>
        )}

        {featured && project.image && (
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-steel/80">
            {project.role}
          </p>
        )}

        <h3
          className={`font-[family-name:var(--font-syne)] tracking-tight text-mist transition-colors duration-300 group-hover:text-signal ${
            featured ? "text-2xl md:text-[1.65rem]" : "text-xl"
          }`}
          style={{ fontWeight: 700 }}
        >
          {project.title}
        </h3>

        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-signal/90">
          {project.tagline}
        </p>

        <p
          className={`mt-4 leading-relaxed text-steel ${
            featured ? "text-[0.95rem] md:text-[0.98rem]" : "text-sm"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, featured ? 6 : 4).map((tech) => (
            <span
              key={tech}
              className="border border-line bg-void/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-mist/70 transition-colors duration-300 group-hover:border-signal/25"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-5 pt-7">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal transition duration-300 hover:brightness-125"
            >
              Ver demo ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-mist/80 transition duration-300 hover:text-signal"
            >
              Código ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const reduceMotion = useReducedMotion();

  return (
    <section id="trabalhos" className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="mb-14 max-w-2xl md:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.55, ease }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-signal">
            Projetos selecionados
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-syne)] text-3xl tracking-tight text-mist md:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Trabalho selecionado
          </h2>
          <p className="mt-4 max-w-xl text-steel md:text-[1.05rem]">
            Produtos SaaS e interfaces em produção — do ERP multiempresa à
            operação de restaurantes e experiências comerciais.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              featured
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="mt-16 md:mt-20">
            <motion.p
              className="mb-8 font-mono text-[11px] uppercase tracking-[0.26em] text-steel"
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              Mais projetos
            </motion.p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {rest.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={featured.length + index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
