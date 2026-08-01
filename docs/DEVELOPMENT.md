# Desenvolvimento

## Pré-requisitos

- Node.js 20+ (recomendado)
- npm 10+
- Conta GitHub (para publicar o repositório)

## Instalação

```bash
cd portifolio-future
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3100](http://localhost:3100).

O servidor escuta em `0.0.0.0`, então também funciona via IP da rede local.

## Go Live no Cursor / VS Code

1. Confirme que `npm run dev` está ativo
2. Clique em **Go Live**
3. O Live Server sobe na porta **5502** e redireciona para **http://localhost:3100**

Configuração em `.vscode/settings.json` e página de entrada em `.liveserver/index.html`.

### Se `localhost:3000` mostrar outro projeto

Esse comportamento costuma ser **cache / service worker** antigo no navegador.

1. Prefira sempre **http://localhost:3100**
2. Ou abra temporariamente a página de limpeza (quando disponível) em `.liveserver/clear-3000.html`
3. No Chrome: DevTools → Application → Service Workers → Unregister + Clear site data para `localhost`

O componente `ClearStaleWorkers` também tenta remover workers/caches ao carregar o portfólio.

## Editar conteúdo

### Projetos e skills

Arquivo: `src/data/projects.ts`

```ts
{
  slug: "meu-projeto",
  title: "Título",
  tagline: "Curto · Descritivo",
  description: "Parágrafo objetivo…",
  stack: ["React", "Node.js"],
  role: "Fullstack",
  live: "https://…",   // opcional
  repo: "https://github.com/…",
  featured: true       // aparece na lista principal
}
```

### Textos de seção

Altere os componentes em `src/components/` (`Hero`, `About`, `Contact`, etc.).

### Foto

Substitua `public/davi.jpg` mantendo o mesmo nome, ou atualize o `src` em `About.tsx`.

## Build e produção

```bash
npm run build
npm run start
```

## Qualidade

```bash
npm run lint
```

## Publicar no GitHub

Com o GitHub CLI autenticado:

```bash
gh auth login
gh repo create portifolio-future --public --source=. --remote=origin --push
```

Ou, se o repositório remoto já existir:

```bash
git remote add origin https://github.com/Davi-silv/portifolio-future.git
git push -u origin main
```

## Checklist antes do deploy

- [ ] Links `live` e `repo` válidos em `projects.ts`
- [ ] Foto e bio atualizadas
- [ ] `npm run build` sem erros
- [ ] Teste mobile (hero + navegação)
