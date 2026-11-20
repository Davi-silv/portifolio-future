# Arquitetura

## Objetivo

Site de portfólio estático (pré-renderizado) que comunica a identidade profissional de Davi Silva e exibe produtos reais — com ênfase na linha **Nexus** (ERP e Food) e experiências comerciais em produção.

## Stack

| Camada | Tecnologia | Papel |
|---|---|---|
| Framework | Next.js 16 (App Router) | Rotas, SSR/SSG, otimização de imagens |
| UI | React 19 | Componentes client/server |
| Estilo | Tailwind CSS 4 | Design system via CSS variables |
| Motion | Framer Motion | Entrada no scroll, hover dos cards |
| Tipografia | Syne + IBM Plex (Google Fonts) | Display + corpo + mono |
| Visual | Originkit Tornado (Three.js) | Fundo WebGL (com fallback sem GPU) |

## Modelo de páginas

Uma única rota `/` (`src/app/page.tsx`) compõe as seções:

```text
TornadoBackdrop (fixed, z-0)
SiteHeader (fixed)
└── main (z-10)
    ├── Hero
    ├── Projects          ← cards + capas
    ├── StackSection
    ├── About
    └── Contact / footer
```

## Dados

`src/data/projects.ts` exporta:

- `projects` — lista tipada (`Project`) com `featured`, `image`, stack, links `live`/`repo`
- `skills` — grupos de competências (Frontend, Backend, Produto, Entrega)

Não há backend neste repositório: conteúdo estático no frontend.

### Assets de projeto

| Pasta | Uso |
|---|---|
| `public/projects/*.webp` | Capas dos cards featured |
| `public/demos/<slug>/` | Demos HTML estáticas (ex.: Brigadeirice, Vértice Fitness) |
| `public/davi.jpg` | Foto da seção Sobre |

## Componentes principais

| Arquivo | Responsabilidade |
|---|---|
| `SiteHeader.tsx` | Navegação âncora + link GitHub |
| `Hero.tsx` | Primeira dobra, CTAs |
| `TornadoBackdrop.tsx` | Fundo WebGL fixo (Originkit Tornado) |
| `tornado.tsx` | Motor Three.js do vortex + probe WebGL |
| `Projects.tsx` | Cards featured (com imagem) + grade secundária |
| `StackSection.tsx` | Competências |
| `About.tsx` | Bio + foto + indicadores |
| `Contact.tsx` | CTAs finais |
| `ClearStaleWorkers.tsx` | Remove service workers/caches antigos no `localhost` |

## Design system (CSS)

Variáveis em `src/app/globals.css`:

- `--void`, `--ink`, `--panel` — fundos
- `--mist`, `--steel` — tipografia
- `--signal`, `--ember` — acentos
- Utilitários: `.atmosphere`, `.grid-field`, animações `rise` / `drift`

## Integração Originkit

O Tornado (Vortex) vive em:

```text
src/components/originkit/ui/tornado.tsx
```

É montado uma vez via `TornadoBackdrop` (dynamic, `ssr: false`) como fundo fixo. Cores alinhadas à marca (`#3ad4ba`, `#8fa8b5`, `#e07a4f`).

Se WebGL não estiver disponível, o componente não inicializa o renderer e a página segue com o fundo estático.

## Decisões relevantes

1. **Porta 3100** — evita conflito com service workers/caches de outros projetos em `:3000`.
2. **Conteúdo em arquivo TS** — fácil de editar sem CMS.
3. **Cards só na seção Projetos** — containers de interação (demo/código); hero permanece limpo.
4. **Capas WebP** — prévias leves em `public/projects/`.
5. **Motion com `prefers-reduced-motion`** — respeita acessibilidade.
6. **Narrativa SaaS** — Hero/Sobre/skills priorizam Nexus ERP e Nexus Food.

## Limites atuais

- Sem formulário de contato embutido (WhatsApp / GitHub)
- Sem i18n (apenas `pt-BR`)
- Sem testes automatizados ainda

Histórico de mudanças: [CHANGELOG.md](./CHANGELOG.md)
