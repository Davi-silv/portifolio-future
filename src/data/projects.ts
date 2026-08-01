export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  live?: string;
  repo: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "cardapio-digital",
    title: "Cardápio Digital",
    tagline: "Produto comercial · WhatsApp · QR Code",
    description:
      "Cardápio digital para a pastelaria Pastel da Casa, com categorias, bandeja de pedidos e envio direto ao WhatsApp. Projetado para uso em balcão e mesas via QR Code.",
    stack: ["HTML", "CSS", "JavaScript", "UX", "WhatsApp"],
    role: "Frontend e produto",
    live: "https://cardapio-digital-xi-blue.vercel.app",
    repo: "https://github.com/Davi-silv/cardapio-digital",
    featured: true,
  },
  {
    slug: "loja-perfumes",
    title: "Loja de Perfumes",
    tagline: "E-commerce · Catálogo · Conversão",
    description:
      "Loja virtual com vitrine de produtos, navegação de catálogo e experiência de compra responsiva, com foco em clareza comercial e organização do inventário.",
    stack: ["JavaScript", "HTML", "CSS"],
    role: "Frontend",
    live: "https://loja-perfumes-red.vercel.app",
    repo: "https://github.com/Davi-silv/loja-perfumes",
    featured: true,
  },
  {
    slug: "imobiliaria",
    title: "Imobiliária",
    tagline: "Listagens · Landing · Leads",
    description:
      "Site imobiliário com apresentação de imóveis e layout responsivo orientado à conversão de leads.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend",
    live: "https://imobiliaria-mauve.vercel.app",
    repo: "https://github.com/Davi-silv/imobiliaria",
  },
  {
    slug: "luxury-motors",
    title: "Luxury Motors",
    tagline: "Showroom · Branding · Varejo",
    description:
      "Showroom digital para veículos premium, com galeria de modelos e narrativa visual alinhada à marca.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend",
    live: "https://luxury-motors-virid.vercel.app",
    repo: "https://github.com/Davi-silv/Luxury-Motors",
  },
  {
    slug: "ionic-pokedex",
    title: "Ionic Pokédex",
    tagline: "Mobile · TypeScript · Integração",
    description:
      "Aplicativo mobile com Ionic e TypeScript consumindo API externa, com tipagem forte e componentes nativos.",
    stack: ["Ionic", "TypeScript", "REST API"],
    role: "Mobile",
    repo: "https://github.com/Davi-silv/ionic-pokedex",
  },
  {
    slug: "site-viagem",
    title: "Site de Viagem",
    tagline: "Destinos · Conteúdo · UI",
    description:
      "Interface rica para descoberta de destinos, com seções editoriais e navegação focada em engajamento.",
    stack: ["JavaScript", "CSS", "HTML"],
    role: "Frontend",
    live: "https://site-de-viagem-main-1.vercel.app",
    repo: "https://github.com/Davi-silv/site-de-viagem-main--1-",
  },
  {
    slug: "restaurante",
    title: "Landing de Restaurante",
    tagline: "Hospitalidade · CTA · Responsivo",
    description:
      "Landing gastronômica com hierarquia visual clara e chamadas para ação pensadas para atrair visitas e reservas.",
    stack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend",
    live: "https://restaurante-landing-page-ten.vercel.app",
    repo: "https://github.com/Davi-silv/restaurante-landing-page",
  },
];

export const skills = [
  {
    area: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vite", "HTML e CSS", "Ionic"],
  },
  {
    area: "Backend",
    items: ["Node.js", "Express", "JWT", "SQLite", "APIs REST", "Validação"],
  },
  {
    area: "Produto",
    items: [
      "UX orientada a conversão",
      "Fluxos WhatsApp",
      "E-commerce",
      "Interfaces mobile",
    ],
  },
  {
    area: "Entrega",
    items: ["Git e GitHub", "Deploy na Vercel", "MVC", "Context API"],
  },
];
