const PHONE_DISPLAY = "(22) 99935-5329";
const PHONE_TEL = "+5522999355329";
const WHATSAPP_URL =
  "https://wa.me/5522999355329?text=Ol%C3%A1%20Davi%2C%20vim%20pelo%20seu%20portf%C3%B3lio";

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
            Aberto a freelas, times de produto e novos desafios. Me chame no
            WhatsApp ou veja meu código no GitHub.
          </p>

          <div className="mt-8 border-t border-line pt-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
              Telefone / WhatsApp
            </p>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block font-[family-name:var(--font-syne)] text-2xl text-mist transition hover:text-signal md:text-3xl"
              style={{ fontWeight: 700 }}
            >
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center bg-signal px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-void transition hover:brightness-110"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/Davi-silv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center border border-line px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-mist transition hover:border-steel hover:text-signal"
            >
              Abrir GitHub
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col gap-3 border-t border-line pt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-steel/65 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Davi Barbosa da Silva</span>
          <a
            href={`tel:${PHONE_TEL}`}
            className="transition hover:text-signal"
          >
            {PHONE_DISPLAY}
          </a>
        </footer>
      </div>
    </section>
  );
}
