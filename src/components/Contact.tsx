export function Contact() {
  return (
    <section id="contato" className="relative border-t border-line py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border border-line px-6 py-14 md:px-12 md:py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-signal">
            Contato
          </p>
          <h2
            className="mt-3 max-w-2xl font-[family-name:var(--font-syne)] text-3xl tracking-tight text-mist md:text-5xl"
            style={{ fontWeight: 700 }}
          >
            Vamos conversar sobre o próximo projeto
          </h2>
          <p className="mt-5 max-w-lg text-steel md:text-[1.05rem]">
            Aberto a freelas, times de produto e desafios fullstack. Veja meu
            código no GitHub ou explore a demo da aplicação completa.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://github.com/Davi-silv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center bg-signal px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-void transition hover:brightness-110"
            >
              Abrir GitHub
            </a>
            <a
              href="https://aplica-o-dev-fullstack.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center border border-line px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition hover:border-steel hover:text-signal"
            >
              Ver app fullstack
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-steel/65 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Davi Barbosa da Silva</span>
          <span>Portfólio profissional · Next.js</span>
        </footer>
      </div>
    </section>
  );
}
