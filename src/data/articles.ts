export type ArticleSection = {
  title: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "site-profissional-ajuda-a-vender-mais",
    title: "Como um site profissional ajuda seu negócio a vender mais",
    excerpt:
      "Entenda o papel do site na confiança, na decisão de compra e na geração de novas oportunidades.",
    category: "Estratégia digital",
    readTime: "5 min",
    publishedAt: "2026-07-13",
    sections: [
      {
        title: "O site reduz a dúvida antes do contato",
        paragraphs: [
          "Antes de chamar uma empresa, muita gente procura sinais de que ela é confiável. Um site bem estruturado apresenta serviços, trabalhos realizados, processo e formas de contato em um ambiente controlado pela própria marca.",
          "Isso não garante uma venda, mas diminui a incerteza e ajuda o potencial cliente a chegar à conversa mais preparado.",
        ],
      },
      {
        title: "Sua oferta fica mais fácil de entender",
        paragraphs: [
          "Redes sociais são ótimas para relacionamento, mas o conteúdo fica disperso. No site, cada serviço pode ter uma explicação objetiva, exemplos e uma chamada para ação coerente com a intenção do visitante.",
        ],
      },
      {
        title: "O site conecta seus canais",
        paragraphs: [
          "Google, Instagram, WhatsApp e anúncios funcionam melhor quando levam a uma base capaz de explicar valor e medir interesse. O site é essa base: ele organiza a jornada e permite descobrir quais canais trazem contatos mais qualificados.",
        ],
      },
    ],
  },
  {
    slug: "instagram-ou-site",
    title: "Instagram ou site: do que um pequeno negócio realmente precisa?",
    excerpt:
      "Os dois canais têm funções diferentes. Veja como usá-los juntos sem depender de apenas uma plataforma.",
    category: "Presença digital",
    readTime: "4 min",
    publishedAt: "2026-07-13",
    sections: [
      {
        title: "Instagram cria proximidade",
        paragraphs: [
          "O Instagram é valioso para mostrar rotina, novidades, bastidores e manter contato frequente com o público. Ele ajuda a construir familiaridade e alcance.",
        ],
      },
      {
        title: "O site organiza confiança e intenção",
        paragraphs: [
          "Quem chega ao site geralmente quer entender melhor a empresa, comparar opções ou tomar uma decisão. Por isso, o conteúdo precisa ser mais direto, estável e orientado ao próximo passo.",
        ],
      },
      {
        title: "A melhor escolha é integração",
        paragraphs: [
          "Use as redes sociais para atrair e manter relacionamento. Use o site para aprofundar a proposta, aparecer em buscas e conduzir o visitante ao WhatsApp, ao agendamento ou à compra.",
        ],
      },
    ],
  },
  {
    slug: "o-que-planejar-antes-de-criar-ecommerce",
    title: "O que planejar antes de criar um e-commerce",
    excerpt:
      "Produtos, pagamentos, frete, conteúdo e operação: os pontos que precisam estar claros antes da loja entrar no ar.",
    category: "E-commerce",
    readTime: "6 min",
    publishedAt: "2026-07-13",
    sections: [
      {
        title: "Comece pela operação",
        paragraphs: [
          "Uma loja virtual precisa refletir como o negócio controla produtos, estoque, pedidos, entregas e atendimento. Definir esses fluxos antes do desenvolvimento evita retrabalho.",
        ],
      },
      {
        title: "Prepare informações que ajudam a decidir",
        paragraphs: [
          "Fotos consistentes, descrições claras, medidas, prazos e políticas de troca reduzem dúvidas e melhoram a experiência de compra. O catálogo é parte central da estratégia, não apenas um cadastro técnico.",
        ],
      },
      {
        title: "Planeje aquisição e medição",
        paragraphs: [
          "A loja precisa nascer conectada à divulgação. Defina como as pessoas chegarão, quais ações serão medidas e como você continuará atraindo clientes depois do lançamento.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
