# Portfólio Future — Davi Silva

Portfólio profissional de **Davi Barbosa da Silva**, desenvolvido com Next.js, TypeScript e Tailwind CSS. Apresenta projetos fullstack selecionados do GitHub, com visual contemporâneo e o componente **Tornado / Vortex** (Originkit) como fundo animado em todo o site.

**Autor:** [Davi-silv](https://github.com/Davi-silv)  
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Three.js · Originkit Tornado

---

## Demonstração local

```bash
npm install
npm run dev
```

Abra: [http://localhost:3100](http://localhost:3100)

> A porta padrão deste projeto é **3100** (evita conflito com caches de outros apps em `localhost:3000`).

---

## Visão geral

O site é uma single-page application com seções:

| Seção | Conteúdo |
|---|---|
| **Hero** | Marca DAVI SILVA, CTAs e Tornado Originkit (fundo global) |
| **Projetos** | Cards com capa (featured) + grade de projetos adicionais |
| **Competências** | Frontend, Backend, Produto e Entrega |
| **Sobre** | Foto, bio e indicadores (linha Nexus) |
| **Contato** | Links para WhatsApp e GitHub |

Os dados dos projetos ficam centralizados em `src/data/projects.ts`. Capas em `public/projects/`.

---

## Estrutura do projeto

```text
portifolio-future/
├── .liveserver/          # Entrada do Go Live → redireciona para :3100
├── .vscode/              # Settings do Live Server e tasks
├── docs/                 # Arquitetura, desenvolvimento e changelog
├── public/
│   ├── demos/            # Demos HTML estáticas
│   ├── projects/         # Capas WebP dos cards featured
│   └── davi.jpg
├── src/
│   ├── app/              # App Router (layout, page, globals)
│   ├── components/       # UI do portfólio + Originkit
│   │   └── originkit/ui/ # Tornado / Vortex
│   └── data/             # Projetos e competências
├── package.json
└── README.md
```

Documentação: [ARCHITECTURE](docs/ARCHITECTURE.md) · [DEVELOPMENT](docs/DEVELOPMENT.md) · [CHANGELOG](docs/CHANGELOG.md)

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em `0.0.0.0:3100` |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build em `0.0.0.0:3100` |
| `npm run lint` | ESLint |

---

## Go Live (Live Server)

Neste workspace, o **Go Live** usa a porta **5502** e redireciona automaticamente para o Next.js em **http://localhost:3100**.

1. Rode `npm run dev`
2. Clique em **Go Live** na barra de status do Cursor/VS Code

---

## Projetos em destaque

- [Nexus ERP](https://github.com/Davi-silv/nexus-erp) — ERP financeiro e CRM multiempresa  
- [Nexus Food](https://nexus-food.vercel.app) — gestão de restaurantes: CMV, estoque e lucro  
- [Lagos Stays](https://lagos-stays.lovable.app) — aluguel por temporada (Região dos Lagos), Pix e PWA  
- [Cardápio Digital](https://github.com/Davi-silv/cardapio-digital) — produto real com pedido via WhatsApp  
- [Brigadeirice](/demos/brigadeirice/index.html) — landing de doces gourmet com pedido via WhatsApp  
- [Vértice Fitness WhatsApp](/demos/vertice-fitness-whatsapp/index.html) — concierge conversacional  

Lista completa editável em `src/data/projects.ts`.

Produção: [portifolio-future.vercel.app](https://portifolio-future.vercel.app)

---

## Deploy

Recomendado na [Vercel](https://vercel.com) (projeto já linkado):

```bash
npm run build
# ou
vercel deploy --prod --yes
```

Push em `main` também dispara o deploy se o GitHub estiver conectado à Vercel.

---

## Licença

Projeto pessoal de portfólio. Código disponível para fins de demonstração e estudo.
