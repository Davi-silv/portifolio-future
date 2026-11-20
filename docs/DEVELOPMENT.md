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
  image: "/projects/meu-projeto.webp", // capa do card (featured)
  live: "https://…",   // opcional
  repo: "https://github.com/…", // opcional
  featured: true       // card grande na grade principal
}
```

- `featured: true` → aparece em **Projetos selecionados** (card com imagem).
- Sem `featured` → aparece em **Mais projetos** (card compacto).

### Capas dos cards

1. Salve a prévia em `public/projects/<slug>.webp` (recomendado ~1200px de largura).
2. Referencie com `image: "/projects/<slug>.webp"`.
3. Prefira WebP para manter o bundle leve.

### Demos estáticas

Coloque HTML/CSS/JS em `public/demos/<slug>/` e aponte `live` para `/demos/<slug>/index.html`.

Exemplos atuais: `brigadeirice`, `vertice-fitness-whatsapp`.

### Textos de seção

Altere os componentes em `src/components/` (`Hero`, `About`, `Contact`, etc.).

### Foto

Substitua `public/davi-portrait.jpg` ou atualize o `src` em `About.tsx`.

## Build e produção

```bash
npm run build
npm run start
```

### Deploy Vercel

O projeto está linkado (pasta `.vercel/`, não versionada). Com a CLI:

```bash
vercel deploy --prod --yes
```

Ou faça push em `main` se o GitHub estiver conectado ao projeto na Vercel.

Produção atual: [portifolio-future.vercel.app](https://portifolio-future.vercel.app)

## Qualidade

```bash
npm run lint
```

## Commits e autor GitHub

Use o e-mail noreply da conta **Davi-silv** para os commits aparecerem no seu perfil:

```bash
GIT_AUTHOR_NAME='DAVI BARBOSA DA SILVA' \
GIT_AUTHOR_EMAIL='163760505+Davi-silv@users.noreply.github.com' \
GIT_COMMITTER_NAME='DAVI BARBOSA DA SILVA' \
GIT_COMMITTER_EMAIL='163760505+Davi-silv@users.noreply.github.com' \
git commit -m "mensagem"
```

## Publicar no GitHub

```bash
git push -u origin HEAD
```

Repositório: [github.com/Davi-silv/portifolio-future](https://github.com/Davi-silv/portifolio-future)

## Checklist antes do deploy

- [ ] Links `live`, `repo` e `image` válidos em `projects.ts`
- [ ] Capas WebP presentes em `public/projects/`
- [ ] Foto e bio atualizadas
- [ ] `npm run build` sem erros
- [ ] Teste mobile (hero + cards + navegação)
- [ ] Sem spam de erros WebGL no terminal (fallback do Tornado)

Histórico de mudanças: [CHANGELOG.md](./CHANGELOG.md)
