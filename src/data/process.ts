import type { IconName } from "@/components/ui/Icon";

export type ProcessStep = {
  icon: IconName;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    icon: "search",
    title: "Diagnóstico",
    description:
      "Entendemos o negócio, o público, os concorrentes e a ação que o visitante deve realizar.",
  },
  {
    icon: "layers",
    title: "Estratégia e conteúdo",
    description:
      "Organizamos as páginas, a proposta de valor, o SEO e as informações necessárias para vender melhor.",
  },
  {
    icon: "pen-ruler",
    title: "Design",
    description:
      "Criamos uma experiência profissional, acessível e coerente com a identidade da marca.",
  },
  {
    icon: "code",
    title: "Desenvolvimento",
    description:
      "Construímos e testamos o projeto com foco em velocidade, segurança e funcionamento no celular.",
  },
  {
    icon: "handshake",
    title: "Publicação e suporte",
    description:
      "Publicamos, treinamos sua equipe e acompanhamos o primeiro mês de operação sem custo adicional.",
  },
];

