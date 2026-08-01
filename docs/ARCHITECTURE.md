# Arquitetura

## Objetivo

Site de portfólio estático (pré-renderizado) que comunica a identidade profissional de Davi Silva e exibe projetos reais hospedados no GitHub, com foco em desenvolvimento fullstack.

## Stack

| Camada | Tecnologia | Papel |
|---|---|---|
| Framework | Next.js 16 (App Router) | Rotas, SSR/SSG, otimização de imagens |
| UI | React 19 | Componentes client/server |
| Estilo | Tailwind CSS 4 | Design system via CSS variables |
| Motion | Framer Motion | Entrada das seções no scroll |
| Tipografia | Syne + IBM Plex (Google Fonts) | Display + corpo + mono |
| Visual | Originkit Black Hole | Canvas 2D no hero |

## Modelo de páginas

Uma única rota `/` (`src/app/page.tsx`) compõe as seções:

```text
SiteHeader (fixed)
└── main
    ├── Hero (+ Black Hole)
    ├── Projects
    ├── StackSection
    ├── About
    └── Contact / footer
```

## Dados

`src/data/projects.ts` exporta:

- `projects` — lista tipada (`Project`) com `featured`, stack, links live/repo
- `skills` — grupos de competências

Não há backend neste repositório: tudo é conteúdo estático no frontend.

## Componentes principais

| Arquivo | Responsabilidade |
|---|---|
| `SiteHeader.tsx` | Navegação âncora + link GitHub |
| `Hero.tsx` | Primeira dobra, CTAs, visual |
| `GlobeStage.tsx` | Carrega Black Hole (dynamic, sem SSR) |
| `black-hole.tsx` | Animação de disco de acreção (Originkit) |
| `Projects.tsx` | Featured + grade secundária |
| `StackSection.tsx` | Competências |
| `About.tsx` | Bio + foto |
| `Contact.tsx` | CTAs finais |
| `ClearStaleWorkers.tsx` | Remove service workers/caches antigos no `localhost` |

## Design system (CSS)

Variáveis em `src/app/globals.css`:

- `--void`, `--ink`, `--panel` — fundos
- `--mist`, `--steel` — tipografia
- `--signal`, `--ember` — acentos
- Utilitários: `.atmosphere`, `.grid-field`, animações `rise` / `drift`

## Integração Originkit

O componente Black Hole vive em:

```text
src/components/originkit/ui/black-hole.tsx
```

É importado via `next/dynamic` em `GlobeStage.tsx` com `ssr: false` (depende de `canvas` / `window`).

Cores do disco alinhadas à marca do portfólio (`#3ad4ba`, `#8fa8b5`, etc.).

## Decisões relevantes

1. **Porta 3100** — evita conflito com service workers/caches de outros projetos em `:3000`.
2. **Conteúdo em arquivo TS** — fácil de editar sem CMS.
3. **Sem cards no hero** — hierarquia visual limpa (marca + CTA + visual).
4. **Motion com `prefers-reduced-motion`** — respeita acessibilidade.

## Limites atuais

- Sem formulário de contato / e-mail público no repositório
- Sem i18n (apenas `pt-BR`)
- Sem testes automatizados ainda
