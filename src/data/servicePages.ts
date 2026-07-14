export type ServicePageData = {
  slug: "criacao-de-sites" | "ecommerce";
  eyebrow: string;
  title: string;
  description: string;
  introTitle: string;
  intro: string[];
  outcomes: string[];
  included: { title: string; description: string }[];
  formats: { title: string; time: string; description: string }[];
  ctaMessage: string;
};

export const servicePages: Record<ServicePageData["slug"], ServicePageData> = {
  "criacao-de-sites": {
    slug: "criacao-de-sites",
    eyebrow: "Criação de sites profissionais",
    title: "Um site que faz sua empresa parecer tão profissional quanto ela realmente é.",
    description:
      "Estratégia, conteúdo, design e desenvolvimento para transformar visitas em confiança e conversas comerciais.",
    introTitle: "Seu site precisa trabalhar antes mesmo de você responder no WhatsApp.",
    intro: [
      "Quando alguém recebe sua mensagem, encontra sua empresa no Google ou chega pelo Instagram, o site ajuda a decidir se vale a pena continuar a conversa.",
      "Por isso, não começamos escolhendo cores. Primeiro definimos o que seu público precisa entender, quais dúvidas precisam ser respondidas e qual ação deve acontecer em seguida.",
    ],
    outcomes: [
      "Apresentar sua empresa com mais credibilidade",
      "Explicar serviços sem depender de mensagens longas",
      "Criar uma base para Google, anúncios e redes sociais",
      "Facilitar contatos e pedidos de orçamento",
    ],
    included: [
      { title: "Estratégia e conteúdo", description: "Proposta de valor, estrutura de páginas e textos orientados ao público." },
      { title: "Design responsivo", description: "Experiência profissional e acessível em celular, tablet e computador." },
      { title: "SEO desde a base", description: "Títulos, descrições, estrutura técnica, velocidade e indexação." },
      { title: "Medição de contatos", description: "Preparação para acompanhar cliques no WhatsApp e origem das visitas." },
      { title: "Treinamento", description: "Orientação para usar, atualizar e divulgar o projeto depois da entrega." },
      { title: "Suporte inicial", description: "Um mês de suporte e manutenção gratuitos após a publicação." },
    ],
    formats: [
      { title: "Página única", time: "2 dias", description: "Uma experiência direta para apresentar a oferta e gerar contatos." },
      { title: "Site de 3 páginas", time: "3 dias", description: "Mais espaço para separar empresa, serviços e contato." },
      { title: "Institucional completo", time: "5 dias úteis", description: "Estrutura completa para autoridade, SEO e evolução de conteúdo." },
    ],
    ctaMessage: "Olá! Vim pela página de criação de sites da Apex Lab e quero conversar sobre meu projeto.",
  },
  ecommerce: {
    slug: "ecommerce",
    eyebrow: "Desenvolvimento de e-commerce",
    title: "Sua loja pronta para vender com clareza, segurança e espaço para crescer.",
    description:
      "Do catálogo ao pagamento, estruturamos uma experiência de compra que facilita a operação e a decisão do cliente.",
    introTitle: "Uma loja virtual precisa funcionar para quem compra e para quem administra.",
    intro: [
      "Um bom e-commerce não é apenas uma vitrine. Ele conecta produtos, estoque, pagamentos, frete, atendimento e divulgação em uma jornada coerente.",
      "Planejamos essa operação antes do desenvolvimento para reduzir retrabalho, tornar o catálogo mais claro e preparar a loja para receber novos clientes.",
    ],
    outcomes: [
      "Vender para clientes além da sua região",
      "Receber pagamentos com uma jornada organizada",
      "Apresentar produtos e políticas com clareza",
      "Medir vendas, origem de acessos e oportunidades",
    ],
    included: [
      { title: "Estrutura da loja", description: "Categorias, produtos, filtros e navegação adaptados ao catálogo." },
      { title: "Pagamento e frete", description: "Configuração dos meios adequados à operação e ao público." },
      { title: "Experiência responsiva", description: "Compra simples e legível, especialmente em celulares." },
      { title: "SEO para produtos", description: "Base técnica e orientação para categorias e descrições encontráveis." },
      { title: "Treinamento de gestão", description: "Sua equipe aprende a gerenciar produtos, pedidos e informações." },
      { title: "Suporte inicial", description: "Um mês de suporte e manutenção gratuitos após a publicação." },
    ],
    formats: [
      { title: "Planejamento", time: "Etapa 1", description: "Catálogo, operação, meios de pagamento e regras de entrega." },
      { title: "Construção", time: "Etapa 2", description: "Interface, cadastro, integrações e configuração da jornada." },
      { title: "Publicação", time: "A partir de 15 dias úteis", description: "Testes, treinamento e acompanhamento da entrada no ar." },
    ],
    ctaMessage: "Olá! Vim pela página de e-commerce da Apex Lab e quero conversar sobre minha loja virtual.",
  },
};

