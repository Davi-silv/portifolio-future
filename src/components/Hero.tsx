import { GlobeStage } from "./GlobeStage";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-20 pt-28 md:justify-center md:pb-28 md:pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-field" />

      <div className="pointer-events-none absolute inset-y-0 right-[-6%] hidden w-[56%] md:block lg:right-0 lg:w-[52%]">
        <GlobeStage />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="max-w-xl lg:max-w-[34rem]">
          <div className="animate-rise flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
              Desenvolvedor Fullstack
            </p>
          </div>

          <h1
            className="animate-rise-delay-1 mt-6 font-[family-name:var(--font-syne)] text-[clamp(3.2rem,11vw,6.75rem)] leading-[0.9] tracking-[-0.035em] text-mist"
            style={{ fontWeight: 800 }}
          >
            DAVI
            <span className="block text-signal">SILVA</span>
          </h1>

          <p className="animate-rise-delay-2 mt-7 max-w-md text-[1.05rem] leading-relaxed text-steel md:text-lg">
            Desenvolvo aplicações web de ponta a ponta — do backend autenticado
            às interfaces que geram resultado para o negócio.
          </p>

          <div className="animate-rise-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#trabalhos"
              className="inline-flex h-11 items-center bg-signal px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-void transition hover:brightness-110"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex h-11 items-center border border-line px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition hover:border-steel hover:text-signal"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="pointer-events-none relative mt-14 h-52 w-full md:hidden">
          <GlobeStage />
        </div>
      </div>

      <div className="absolute bottom-7 left-5 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-steel/60 md:left-8 md:flex">
        <span className="h-px w-8 bg-signal/50" />
        Disponível para novos projetos
      </div>
    </section>
  );
}
