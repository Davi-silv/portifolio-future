# Changelog — Portfólio Future

Registro das alterações relevantes do portfólio, em ordem cronológica inversa.

---

## 2026-11-20 — Cards com imagem e animações

### O que mudou

- A seção **Projetos selecionados** passou a usar **cards** com capa, stack, papel e CTAs.
- Cada projeto em destaque tem **imagem de prévia** em `public/projects/*.webp`.
- Animações suaves com Framer Motion: entrada no scroll, leve elevação no hover e zoom da capa.
- Respeito a `prefers-reduced-motion` (animações reduzidas quando o usuário pede menos movimento).

### Arquivos

| Arquivo | Alteração |
|---|---|
| `src/components/Projects.tsx` | Cards em grade; capa via `next/image`; motion |
| `src/data/projects.ts` | Campo opcional `image` nos projetos featured |
| `public/projects/` | Capas WebP (Nexus ERP/Food, Lagos, Cardápio, Brigadeirice, Vértice) |

### Como atualizar uma capa

1. Capture uma tela 1280×800 (ou similar) do produto.
2. Converta para WebP e salve em `public/projects/<slug>.webp`.
3. Ajuste `image: "/projects/<slug>.webp"` em `src/data/projects.ts`.

---

## 2026-11-20 — Fallback WebGL do Tornado

### Problema

Em ambientes sem WebGL (preview sandbox / GPU desabilitada), o `THREE.WebGLRenderer` falhava em loop e enchia o terminal de erros.

### Solução

- Probe `webglAvailable()` antes de iniciar o Vortex.
- Se WebGL não existir, o fundo fica estático/transparente sem logs repetidos.

### Arquivo

- `src/components/originkit/ui/tornado.tsx`

---

## 2026-10-25 — Linha Nexus no centro do portfólio

### O que mudou

- **Nexus ERP** e **Nexus Food** entram como projetos principais (`featured`).
- Copy do Hero, Sobre, Competências e README alinhados a SaaS multiempresa.
- Loja de Perfumes sai do destaque (permanece em “Mais projetos”).

### Projetos

| Projeto | Live / Repo |
|---|---|
| Nexus ERP | [github.com/Davi-silv/nexus-erp](https://github.com/Davi-silv/nexus-erp) |
| Nexus Food | [nexus-food.vercel.app](https://nexus-food.vercel.app) |

### Arquivos

- `src/data/projects.ts`
- `src/components/Hero.tsx`, `About.tsx`, `Projects.tsx`, `StackSection.tsx`
- `src/app/layout.tsx` (metadata)
- `README.md`

### Deploy

- Commit publicado em `main` no GitHub.
- Produção Vercel: [portifolio-future.vercel.app](https://portifolio-future.vercel.app)

---

## 2026-08 — Brigadeirice e demos locais

### O que mudou

- **Brigadeirice** adicionada como featured.
- Demo estática hospedada em `public/demos/brigadeirice/` (HTML/CSS/JS + imagens).
- Campo `repo` tornou-se opcional no tipo `Project` (projetos só com demo).

### Links

- Demo: `/demos/brigadeirice/index.html`
- Código: [github.com/Davi-silv/Brigadeirice](https://github.com/Davi-silv/Brigadeirice)

---

## 2026-08 — Lagos Stays

### O que mudou

- **Lagos Stays** (aluguel por temporada, Pix, PWA) entra no portfólio como featured.
- Live: [lagos-stays.lovable.app](https://lagos-stays.lovable.app)

---

## 2026 — Vértice Fitness WhatsApp

### O que mudou

- Demo de concierge WhatsApp para academia de luxo em `public/demos/vertice-fitness-whatsapp/`.
- Projeto featured com live relativo ao portfólio.

---

## Modelo de dados atual (`Project`)

```ts
{
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  image?: string;   // capa (featured) — ex.: "/projects/nexus-erp.webp"
  live?: string;    // demo
  repo?: string;    // GitHub
  featured?: boolean;
}
```

- `featured: true` → card grande na grade principal (com imagem, se houver).
- Sem `featured` → card compacto em “Mais projetos”.

---

## Referências

- Arquitetura: [ARCHITECTURE.md](./ARCHITECTURE.md)
- Desenvolvimento: [DEVELOPMENT.md](./DEVELOPMENT.md)
- README: [../README.md](../README.md)
