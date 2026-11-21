export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  role: string;
  image?: string;
  live?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "nexus-erp",
    title: "Nexus ERP",
    tagline: "MVP · Gestão financeira · Arquitetura modular",
    description:
      "MVP de gestão financeira para pessoas físicas e pequenas empresas, com dashboards, contas, lançamentos, orçamentos, conciliação por CSV e relatórios. Desenvolvido em JavaScript modular e Vite, com arquitetura em camadas, PWA, persistência local no navegador e testes com Vitest e Playwright. A evolução para backend SaaS, autenticação, Supabase e recursos avançados de CRM e permissões está no planejamento, não sendo apresentada como operação em produção.",
    stack: ["Vite", "JavaScript", "PWA", "Vitest", "Playwright"],
    role: "Desenvolvimento de produto e frontend",
    image: "/projects/nexus-erp.webp",
    repo: "https://github.com/Davi-silv/nexus-erp",
    featured: true,
  },
  {
    slug: "nexus-food",
    title: "Nexus Food",
    tagline: "Restaurantes · CMV · Estoque · Lucro",
    description:
      "SaaS multiempresa para hamburguerias e restaurantes: ficha técnica, CMV, estoque, compras, desperdício, financeiro e dashboard de lucro. Isolamento por empresa com RLS, papéis de acesso, super admin e PWA instalável.",
    stack: ["React", "Vite", "Supabase", "PostgreSQL", "Recharts", "PWA"],
    role: "Produto e fullstack",
    image: "/projects/nexus-food.webp",
    live: "https://nexus-food.vercel.app",
    repo: "https://github.com/Davi-silv/Nexus-FOOD",
    featured: true,
  },
  {
    slug: "lagos-stays",
    title: "Lagos Stays",
    tagline: "Temporada · Pix · PWA · Região dos Lagos",
    description:
      "Plataforma de aluguel por temporada na Região dos Lagos (RJ), com catálogo curado, reservas, pagamento via Pix manual, chat hóspede–anfitrião, painel do anfitrião e admin. PWA instalável com SSR e SEO.",
    stack: [
      "TanStack Start",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "PWA",
    ],
    role: "Fullstack e produto",
    image: "/projects/lagos-stays.webp",
    live: "https://lagos-stays.lovable.app",
    featured: true,
  },
  {
    slug: "cardapio-digital",
    title: "Cardápio Digital",
    tagline: "Produto comercial · WhatsApp · QR Code",
    description:
      "Cardápio digital para a pastelaria Pastel da Casa, com categorias, bandeja de pedidos e envio direto ao WhatsApp. Projetado para uso em balcão e mesas via QR Code.",
    stack: ["HTML", "CSS", "JavaScript", "UX", "WhatsApp"],
    role: "Frontend e produto",
    image: "/projects/cardapio-digital.webp",
    live: "https://cardapio-digital-xi-blue.vercel.app",
    repo: "https://github.com/Davi-silv/cardapio-digital",
    featured: true,
  },
  {
    slug: "brigadeirice",
    title: "Brigadeirice",
    tagline: "Doces gourmet · Landing · WhatsApp",
    description:
      "Landing page da marca Brigadeirice: sabores, catálogo, essência e história, com pedido direto pelo WhatsApp. HTML, CSS e JavaScript puro, layout responsivo e foco em conversão.",
    stack: ["HTML", "CSS", "JavaScript", "UX", "WhatsApp"],
    role: "Frontend e produto",
    image: "/projects/brigadeirice.webp",
    live: "/demos/brigadeirice/index.html",
    repo: "https://github.com/Davi-silv/Brigadeirice",
    featured: true,
  },
  {
    slug: "vertice-fitness-whatsapp",
    title: "Vértice Fitness WhatsApp",
    tagline: "Full Stack · Node.js · Gestão de academia",
    description:
      "Aplicação Full Stack para academia, com landing page, concierge conversacional e painel administrativo. Backend em Node.js e Express, API para autenticação, chat e gestão, sessões e persistência em SQLite; frontend em HTML, CSS e JavaScript. O projeto documenta cadastro de alunos, planos, check-ins, agenda e financeiro. A demonstração disponível neste portfólio é uma versão estática da interface, sem executar o backend nem garantir persistência de dados. Consulte o repositório para conhecer a aplicação completa e suas limitações de implantação.",
    stack: ["JavaScript", "Node.js", "Express", "SQLite", "HTML", "CSS"],
    role: "Desenvolvimento Full Stack",
    image: "/projects/vertice-fitness.webp",
    live: "/demos/vertice-fitness-whatsapp/index.html",
    repo: "https://github.com/Davi-silv/vertice-fitness-whatsapp",
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
    items: [
      "React",
      "Next.js",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
    ],
  },
  {
    area: "Backend",
    items: [
      "Supabase",
      "PostgreSQL e RLS",
      "Node.js",
      "APIs REST",
      "JWT e RBAC",
    ],
  },
  {
    area: "Produto",
    items: [
      "SaaS multiempresa",
      "ERP, CRM e financeiro",
      "Gestão de restaurantes",
      "Conversão WhatsApp e Pix",
    ],
  },
  {
    area: "Entrega",
    items: [
      "Git e GitHub",
      "Deploy na Vercel",
      "Vitest e Playwright",
      "Arquitetura em camadas",
    ],
  },
];
