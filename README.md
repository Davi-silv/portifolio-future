# Portfólio Future — Davi Barbosa da Silva

<div align="center">

### Portfólio de desenvolvimento Front-End e Full Stack

Projetos, competências e experiência prática em desenvolvimento de soluções web.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**[Ver portfólio online](https://portifolio-future.vercel.app/)** · **[GitHub](https://github.com/Davi-silv)** · **[LinkedIn](https://www.linkedin.com/in/davi-barbosa-silva/)**

</div>

---

## Sobre o projeto

O **Portfólio Future** é o site profissional de **Davi Barbosa da Silva**, desenvolvido para apresentar projetos, competências técnicas e canais de contato. Utiliza o **App Router do Next.js** e uma interface com animações.

A experiência visual inclui o componente **Tornado / Vortex (Originkit)**, usado como fundo animado, além de animações com Framer Motion e recursos 3D associados ao Three.js.

## Principais seções

| Seção | Conteúdo |
| --- | --- |
| Apresentação | Identidade profissional, chamada principal e links de navegação |
| Projetos | Cards de projetos destacados e outros trabalhos |
| Competências | Tecnologias e áreas de atuação |
| Sobre | Trajetória e informações do desenvolvedor |
| Contato | Acesso aos canais profissionais |

O catálogo de projetos e competências pode ser editado em `src/data/projects.ts`, e as capas dos projetos ficam em `public/projects/`.

## Tecnologias

- **Next.js 16** e **React 19**;
- **TypeScript**;
- **Tailwind CSS 4**;
- **Framer Motion**;
- **Three.js**;
- **Originkit Tornado / Vortex**.

## Projetos apresentados

O portfólio documenta, entre outros:

- [Nexus ERP](https://github.com/Davi-silv/nexus-erp) — sistema de gestão financeira;
- [Nexus Food](https://github.com/Davi-silv/Nexus-FOOD) — gestão para restaurantes;
- [Cardápio Digital](https://github.com/Davi-silv/cardapio-digital) — cardápio com pedidos via WhatsApp;
- [Brigadeirice](https://github.com/Davi-silv/Brigadeirice) — landing page para doces gourmet;
- [Vértice Fitness](https://github.com/Davi-silv/vertice-fitness-whatsapp) — aplicação de academia com painel de gestão.

A lista exibida no site pode mudar conforme `src/data/projects.ts`.

## Organização do código

```text
src/
├── app/                  # Rotas, layout e estilos globais
├── components/           # Componentes visuais e animações
│   └── originkit/ui/     # Tornado / Vortex
└── data/                 # Dados dos projetos e competências

public/
├── demos/                # Demonstrações estáticas
├── projects/             # Capas dos projetos
└── davi-portrait.jpg     # Imagem de perfil
```

## Executar localmente

**Pré-requisito:** Node.js e npm.

```bash
git clone https://github.com/Davi-silv/portifolio-future.git
cd portifolio-future
npm install
npm run dev
```

Acesse **http://localhost:3100**.

| Comando | Função |
| --- | --- |
| `npm run dev` | Iniciar o ambiente de desenvolvimento (porta 3100) |
| `npm run build` | Gerar o build de produção |
| `npm run start` | Iniciar o servidor de produção (porta 3100) |
| `npm run lint` | Executar o ESLint |

O workspace também possui configuração de **Go Live**, com redirecionamento da porta 5502 para o servidor Next.js na porta 3100.

## Publicação

O projeto está disponível em **[portifolio-future.vercel.app](https://portifolio-future.vercel.app/)**. A documentação existente contempla deploy na Vercel.

## Documentação

- [Arquitetura](docs/ARCHITECTURE.md)
- [Desenvolvimento](docs/DEVELOPMENT.md)
- [Histórico de alterações](docs/CHANGELOG.md)

## Autoria

**Davi Barbosa da Silva** — Desenvolvedor de Software e fundador da **Evolutiva Tech**.

[GitHub](https://github.com/Davi-silv) · [LinkedIn](https://www.linkedin.com/in/davi-barbosa-silva/) · [Portfólio](https://portifolio-future.vercel.app/)

---

<sub>Projeto pessoal de portfólio. Consulte os arquivos e os direitos de cada recurso antes de reutilizar o conteúdo.</sub>
