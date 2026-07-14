export type Project = {
  slug: string;
  title: string;
  tag: "E-commerce" | "Site institucional" | "Plataforma educacional";
  domain: string;
  href: string;
  image?: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    slug: "garrafa-de-vinho",
    title: "Garrafa de Vinho",
    tag: "E-commerce",
    domain: "garrafadevinho.com.br",
    href: "https://garrafadevinho.com.br",
    image: "/assets/portfolio/garrafa-de-vinho.jpg",
    description:
      "Loja virtual de vinhos com catálogo amplo, conteúdo editorial e experiência de compra nacional.",
    challenge:
      "Organizar uma operação digital com muitos rótulos e tornar a descoberta de produtos mais clara para diferentes perfis de consumidor.",
    solution:
      "Estrutura de e-commerce com categorias, busca, conteúdo de apoio e jornada de compra preparada para apresentar variedade sem perder clareza.",
    deliverables: ["E-commerce", "Catálogo de produtos", "Conteúdo e SEO", "Experiência responsiva"],
  },
  {
    slug: "zeofertil",
    title: "ZeoFertil",
    tag: "Site institucional",
    domain: "zeofertil.com",
    href: "https://zeofertil.com",
    image: "/assets/portfolio/zeofertil.jpg",
    description:
      "Presença institucional para uma empresa de tecnologia que transforma resíduos industriais em fertilizantes de alta performance.",
    challenge:
      "Comunicar uma solução técnica e inovadora de forma compreensível para indústrias, parceiros e potenciais investidores.",
    solution:
      "Arquitetura de informação que aproxima tecnologia, impacto ambiental, reconhecimento e aplicações comerciais.",
    deliverables: ["Site institucional", "Arquitetura de conteúdo", "Apresentação de tecnologia", "SEO técnico"],
  },
  {
    slug: "ensy",
    title: "Ensy",
    tag: "Plataforma educacional",
    domain: "ensy.com.br",
    href: "https://ensy.com.br",
    image: "/assets/portfolio/ensy.png",
    description:
      "Plataforma brasileira de cursos online com catálogo amplo, assinatura e experiência de aprendizagem digital.",
    challenge:
      "Organizar mais de 150 cursos e comunicar os benefícios da assinatura de forma simples para públicos com interesses diferentes.",
    solution:
      "Experiência organizada por categorias, benefícios claros e caminhos diretos para descoberta de cursos e assinatura.",
    deliverables: ["Plataforma educacional", "Catálogo de cursos", "Jornada de assinatura", "Experiência responsiva"],
  },
  {
    slug: "ratio-coffee",
    title: "Ratio Coffee",
    tag: "E-commerce",
    domain: "ratiocoffee.com",
    href: "https://ratiocoffee.com",
    image: "/assets/portfolio/ratio-coffee.jpg",
    description:
      "Experiência internacional de e-commerce para uma marca de cafeteiras de precisão com forte apelo de produto e design.",
    challenge:
      "Equilibrar narrativa de marca, diferenciais técnicos e uma jornada de compra fluida para produtos premium.",
    solution:
      "Apresentação editorial dos produtos, comparação de modelos e conteúdo que aproxima engenharia, ritual e decisão de compra.",
    deliverables: ["E-commerce", "Experiência de produto", "Conteúdo editorial", "Interface responsiva"],
  },
  {
    slug: "dra-luiza-schmidt",
    title: "Dra. Luiza Schmidt",
    tag: "Site institucional",
    domain: "draluizaschmidt.com.br",
    href: "https://draluizaschmidt.com.br",
    image: "/assets/portfolio/dra-luiza-schmidt.jpg",
    description:
      "Site para odontologia estética e harmonização facial com posicionamento sofisticado e foco em agendamentos.",
    challenge:
      "Transmitir segurança, naturalidade e cuidado humano em uma área na qual confiança é decisiva para o contato.",
    solution:
      "Experiência visual elegante com apresentação profissional, procedimentos, resultados e chamadas diretas para agendamento.",
    deliverables: ["Site institucional", "Posicionamento", "Galeria de resultados", "Conversão por WhatsApp"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
