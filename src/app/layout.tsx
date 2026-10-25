import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Syne } from "next/font/google";
import { ClearStaleWorkers } from "@/components/ClearStaleWorkers";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Davi Silva — Desenvolvedor Fullstack",
  description:
    "Portfólio de Davi Barbosa da Silva. Produtos SaaS fullstack: Nexus ERP, Nexus Food, autenticação e interfaces comerciais.",
  openGraph: {
    title: "Davi Silva — Desenvolvedor Fullstack",
    description:
      "SaaS de ponta a ponta: ERP financeiro, gestão para restaurantes e interfaces comerciais.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${plex.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col atmosphere">
        <ClearStaleWorkers />
        {children}
      </body>
    </html>
  );
}
