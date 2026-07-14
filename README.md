# Apex Lab

Site institucional multipágina da Apex Lab, desenvolvido com Next.js 14,
TypeScript e Tailwind CSS. O projeto é estático, rápido e não depende de backend.

## Páginas

- `/`: proposta de valor, serviços, portfólio, processo, conteúdo e FAQ.
- `/criacao-de-sites`: página comercial e SEO para sites profissionais.
- `/ecommerce`: página comercial e SEO para lojas virtuais.
- `/portfolio`: projetos reais e estudos de caso.
- `/sobre`: posicionamento e experiência da empresa.
- `/conteudos`: base editorial para crescimento orgânico.
- `/politica-de-privacidade` e `/termos-de-uso`: páginas legais.

## Executar

```powershell
npm.cmd install
npm.cmd run dev
```

Abra `http://localhost:3000`.

Para validar a versão de produção:

```powershell
npm.cmd run build
npm.cmd run start
```

## Contatos e métricas

Crie um arquivo `.env.local` usando `.env.example` como referência.

- `NEXT_PUBLIC_WHATSAPP_NUMBER`: DDI, DDD e número, somente dígitos.
- `NEXT_PUBLIC_PHONE_DISPLAY`: telefone no formato que será exibido.
- `NEXT_PUBLIC_CONTACT_EMAIL`: e-mail comercial.
- `NEXT_PUBLIC_INSTAGRAM_URL`: URL completa do Instagram.
- `NEXT_PUBLIC_LINKEDIN_URL`: URL completa do LinkedIn.
- `NEXT_PUBLIC_GA_ID`: identificador do Google Analytics 4.

Sem um número configurado, os botões abrem o WhatsApp para o visitante escolher
um contato. Com o número configurado, a conversa é aberta diretamente com a Apex.

O Analytics só é carregado após consentimento do visitante. Cliques nos botões
possuem os eventos `whatsapp` e `schedule` com a localização do CTA.

## Conteúdo editável

- Marca, domínio e contato: `src/config/site.ts`
- Textos principais: `src/data/content.ts`
- Serviços: `src/data/services.ts` e `src/data/servicePages.ts`
- Portfólio: `src/data/portfolio.ts`
- Capturas dos projetos: `public/assets/portfolio/`
- Perguntas frequentes: `src/data/faqs.ts`
- Conteúdos: `src/data/articles.ts`
- Prazos e indicadores: `src/data/stats.ts`

## SEO

O projeto inclui metadados por página, URLs canônicas, sitemap, robots, imagem de
compartilhamento, dados estruturados de organização, FAQ e estudos de caso.

No lançamento:

1. Configure o domínio `laboratorioapex.com` na hospedagem.
2. Preencha os contatos em `.env.local` ou no painel da hospedagem.
3. Cadastre o domínio no Google Search Console.
4. Envie `https://laboratorioapex.com/sitemap.xml`.
5. Configure `NEXT_PUBLIC_GA_ID` quando a propriedade do Analytics existir.
6. Atualize CNPJ e dados empresariais assim que estiverem disponíveis.

## Portfólio

As imagens são capturas locais dos projetos autorizados. O projeto Ensy usa uma
apresentação editorial porque o endereço informado não retornou uma página visual
utilizável durante a captura. Substitua sua imagem em `src/data/portfolio.ts` quando
uma captura oficial estiver disponível.
