import type { IconName } from "@/components/ui/Icon";

export type Service = {
  slug: string;
  icon: IconName;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  features: string[];
  primary?: boolean;
};

export const services: Service[] = [
  {
    slug: "criacao-de-sites",
    icon: "globe",
    title: "Criação de sites profissionais",
    shortTitle: "Sites profissionais",
    description:
      "Sites institucionais e páginas de conversão que fortalecem sua marca, explicam seu valor e facilitam o contato de novos clientes.",
    href: "/criacao-de-sites",
    features: ["SEO desde a estrutura", "Design responsivo", "Entrega a partir de 2 dias"],
    primary: true,
  },
  {
    slug: "ecommerce",
    icon: "cart",
    title: "Desenvolvimento de e-commerce",
    shortTitle: "E-commerce",
    description:
      "Lojas virtuais completas para apresentar produtos com clareza, receber pagamentos e vender para todo o Brasil.",
    href: "/ecommerce",
    features: ["Pagamentos e frete", "Gestão de produtos", "Treinamento incluído"],
    primary: true,
  },
  {
    slug: "landing-pages",
    icon: "rocket",
    title: "Landing pages",
    shortTitle: "Landing pages",
    description:
      "Páginas objetivas para campanhas, lançamentos e captação de contatos, com uma ação principal e carregamento rápido.",
    href: "/criacao-de-sites#formatos",
    features: ["Foco em conversão", "Integração com campanhas", "Medição de contatos"],
  },
  {
    slug: "sistemas-e-automacoes",
    icon: "code",
    title: "Sistemas e automações",
    shortTitle: "Sistemas e automações",
    description:
      "Soluções personalizadas para eliminar tarefas repetitivas, organizar processos e resolver gargalos do negócio.",
    href: "/#solucoes-complementares",
    features: ["Fluxos sob medida", "Integrações", "Evolução contínua"],
  },
];

