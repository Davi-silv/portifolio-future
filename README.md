# Portfólio Future — Davi Silva

Portfólio profissional de **Davi Barbosa da Silva**, desenvolvido com Next.js, TypeScript e Tailwind CSS. Apresenta projetos fullstack selecionados do GitHub, com visual contemporâneo e o componente **Black Hole** (Originkit) no hero.

**Autor:** [Davi-silv](https://github.com/Davi-silv)  
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion

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
| **Hero** | Marca DAVI SILVA, CTAs e animação Black Hole |
| **Projetos** | Trabalhos destacados + grade de projetos adicionais |
| **Competências** | Frontend, Backend, Produto e Entrega |
| **Sobre** | Foto, bio e indicadores |
| **Contato** | Links para GitHub e demo fullstack |

Os dados dos projetos ficam centralizados em `src/data/projects.ts`.

---

## Estrutura do projeto

```text
portifolio-future/
├── .liveserver/          # Entrada do Go Live → redireciona para :3100
├── .vscode/              # Settings do Live Server e tasks
├── docs/                 # Documentação técnica
├── public/               # Assets estáticos (foto, ícones)
├── src/
│   ├── app/              # App Router (layout, page, globals)
│   ├── components/       # UI do portfólio + Originkit
│   │   └── originkit/ui/ # Black Hole e placeholder Globe
│   └── data/             # Projetos e competências
├── package.json
└── README.md
```

Documentação detalhada: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) · [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)

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

- [Aplicação Fullstack](https://github.com/Davi-silv/aplica--o-dev-fullstack) — React + Node.js + JWT + SQLite  
- [Cardápio Digital](https://github.com/Davi-silv/cardapio-digital) — produto real com pedido via WhatsApp  
- [Loja de Perfumes](https://github.com/Davi-silv/loja-perfumes) — e-commerce frontend  

Lista completa editável em `src/data/projects.ts`.

---

## Deploy

Recomendado na [Vercel](https://vercel.com):

```bash
npm run build
```

Configure a porta apenas se for self-hosting; na Vercel a porta é gerenciada automaticamente.

---

## Licença

Projeto pessoal de portfólio. Código disponível para fins de demonstração e estudo.
