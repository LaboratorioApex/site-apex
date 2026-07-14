import type { IconName } from "@/components/ui/Icon";

export type Differential = {
  icon: IconName;
  title: string;
  description: string;
};

export const differentials: Differential[] = [
  {
    icon: "gauge",
    title: "Entrega realmente ágil",
    description:
      "Escopo claro e processo organizado para colocar o projeto no ar em dias, não em meses.",
  },
  {
    icon: "search",
    title: "SEO em todos os planos",
    description:
      "Estrutura, conteúdo e desempenho preparados para o Google desde a primeira versão.",
  },
  {
    icon: "headset",
    title: "Suporte após a entrega",
    description:
      "Um mês de manutenção e suporte gratuitos para acompanhar os primeiros passos do projeto.",
  },
  {
    icon: "handshake",
    title: "Você não fica sozinho",
    description:
      "Treinamento e orientação de divulgação para transformar o site em uma ferramenta útil para o negócio.",
  },
];

