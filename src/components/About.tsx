"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-px border border-line" />
          <Image
            src="/davi.jpg"
            alt="Retrato de Davi Barbosa da Silva"
            width={640}
            height={800}
            className="relative z-10 aspect-[4/5] w-full object-cover object-top"
            priority
          />
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-steel">
            Davi Barbosa da Silva · GitHub @Davi-silv
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-signal">
            Sobre
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-syne)] text-3xl tracking-tight text-mist md:text-4xl"
            style={{ fontWeight: 700 }}
          >
            Desenvolvimento com foco em resultado
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-steel md:text-[1.05rem]">
            <p>
              Sou desenvolvedor fullstack e construo sistemas utilizáveis de
              verdade: autenticação, APIs, interfaces e fluxos que resolvem
              problemas de negócio — de apps autenticados a cardápios digitais
              que fecham pedido no WhatsApp.
            </p>
            <p>
              Meu histórico no GitHub mostra evolução consistente: bases sólidas
              em HTML, CSS e JavaScript, aplicações React com Node e JWT, e
              experiência mobile com Ionic e TypeScript.
            </p>
          </div>

          <dl className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { label: "Repositórios", value: "22+" },
              { label: "Stack principal", value: "React · Node" },
              { label: "Atuação", value: "Fullstack" },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-line pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-steel">
                  {stat.label}
                </dt>
                <dd
                  className="mt-2 font-[family-name:var(--font-syne)] text-xl text-mist md:text-2xl"
                  style={{ fontWeight: 700 }}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
