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
| `public/davi-portrait.jpg` | Foto da seção Sobre |

## Componentes principais

| Arquivo | Responsabilidade |
|---|---|
| `SiteHeader.tsx` | Navegação âncora + link GitHub |
| `Hero.tsx` | Primeira dobra, CTAs |
| `TornadoBackdrop.tsx` | Fundo fixo: fallback CSS + Originkit Tornado |
| `TornadoFallback.tsx` | Animação CSS quando WebGL está indisponível |
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
- Fallback Tornado: `.tornado-fallback*` (spin / drift / sparks)

## Integração Originkit

O Tornado (Vortex) vive em:

```text
src/components/originkit/ui/tornado.tsx
```

É montado via `TornadoBackdrop` (dynamic, `ssr: false`) junto com `TornadoFallback`. Cores alinhadas à marca (`#3ad4ba`, `#8fa8b5`, `#e07a4f`).

- **Com WebGL:** Vortex Three.js por cima do fallback.
- **Sem WebGL:** apenas o fallback CSS mantém movimento no fundo.

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
- Sem suíte de testes automatizados própria neste repositório (o `package.json` oferece lint, mas não scripts de Vitest ou Playwright).

## Evidências de testes em projetos relacionados

As competências de testes exibidas no portfólio referem-se aos projetos associados, **não** a uma suíte de testes executada neste site:

| Ferramenta | Projeto | Evidência verificável |
|---|---|---|
| Vitest | [Nexus ERP](https://github.com/Davi-silv/nexus-erp) | Scripts `test` e `test:integration` em [package.json](https://github.com/Davi-silv/nexus-erp/blob/main/package.json); diretório `tests/integration/` |
| Playwright | [Nexus ERP](https://github.com/Davi-silv/nexus-erp) | [playwright.config.js](https://github.com/Davi-silv/nexus-erp/blob/main/playwright.config.js), [script E2E](https://github.com/Davi-silv/nexus-erp/blob/main/scripts/test-e2e.sh) e diretório `tests/e2e/` |
| Vitest e React Testing Library | [Nexus Food](https://github.com/Davi-silv/Nexus-FOOD) | Scripts `test` e `test:security` em [package.json](https://github.com/Davi-silv/Nexus-FOOD/blob/main/package.json); diretório `src/tests/security/` |

**Escopo da verificação:** foram conferidos scripts, configurações e presença dos diretórios acima. Não foram executados testes, apurada cobertura ou confirmados resultados de CI nesta revisão. Portanto, a documentação não afirma que as suítes estejam passando ou que exista pipeline de CI ativo.


Histórico de mudanças: [CHANGELOG.md](./CHANGELOG.md)
