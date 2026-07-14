# AGENTS.md

Guia para agentes de IA (Codex e similares) e para quem for manter este
projeto. Leia antes de editar.

## O que é

Site institucional single-page da **Apex** (estúdio digital). Next.js 14 (App
Router) + TypeScript + Tailwind CSS. Renderização estática (SSG), sem backend.

## Princípios do projeto

1. **Conteúdo separado da apresentação.** Textos, serviços, cases etc. vivem em
   `src/data/*` e `src/config/site.ts`. Componentes só renderizam - não coloque
   copy hardcoded dentro de componentes/sections.
2. **Um único ponto para a marca.** Contato e identidade textual em
   `src/config/site.ts`; cores em `src/app/globals.css` (`:root`, CSS vars
   mapeadas no `tailwind.config.ts`). Não espalhe cores hex pelo código -
   use as classes de tema (`bg-base`, `text-muted`, `text-accent`, etc.).
   **A identidade é monocromática** (logo P&B → preto neutro + branco + prata):
   não introduza cores saturadas; hierarquia se faz com luz/contraste, não com
   cor. O "accent" É branco - botões primários têm texto escuro
   (`text-accent-foreground`).
3. **Sem dependências desnecessárias.** Ícones são SVG inline (`ui/Icon.tsx`),
   animações são CSS + IntersectionObserver (`ui/Reveal.tsx`). Antes de instalar
   uma lib, verifique se dá para resolver com o que já existe.
4. **Performance é requisito.** Mantenha a página estática. Use `"use client"`
   só quando houver interatividade real (hoje: `Header` e `Reveal`).
5. **Acessibilidade.** HTML semântico, `aria-label` em ícones/botões, foco
   visível, respeito a `prefers-reduced-motion` (já no CSS).

## Estrutura mental

- `app/` → shell, SEO e composição da página.
- `sections/` → blocos grandes da página (uma seção = um arquivo).
- `components/ui/` → peças reutilizáveis (Button, Card visual, Section, Reveal…).
- `components/layout/` → Header e Footer.
- `data/` + `config/` → **a fonte da verdade do conteúdo**.
- `lib/` / `hooks/` → utilidades.

## Convenções

- **Imports** usam o alias `@/` (ex.: `@/components/ui/Button`). Configurado em
  `tsconfig.json`.
- **Tipos**: cada arquivo de dados exporta seu `type` (ex.: `Service`). Ao
  adicionar campos, atualize o type.
- **Ícones**: para usar um ícone novo, adicione ao objeto `paths` e ao union
  `IconName` em `src/components/ui/Icon.tsx`. Grid 24×24, `stroke-width` 1.75.
- **Novas seções**: crie em `src/sections/`, use `<Section id="...">` e
  `<SectionHeading>`, envolva blocos com `<Reveal>`, e registre em
  `src/app/page.tsx` + em `src/data/navigation.ts` (se for para o menu).
- **Espaçamento/tipografia**: reaproveite os padrões existentes (`py-20/24/28`,
  `font-display` para títulos). Não introduza novas escalas sem necessidade.

## Coisas a NÃO fazer

- Não hardcode número de WhatsApp/e-mail em componentes - use `siteConfig`.
- Não use `<img>` sem `loading="lazy"` (ou prefira `next/image`).
- Não remova os `// TODO` de `site.ts` sem substituir pelo valor real.
- Não quebre o build: rode `npm run build` antes de considerar pronto.

## Checklist antes de entregar

- [ ] `npm run build` passa sem erros nem warnings de tipo.
- [ ] Testado em mobile (menu abre/fecha, seções empilham).
- [ ] Placeholders de portfólio e `// TODO` de contato revisados.
- [ ] Logo e favicon atualizados, se aplicável.

## Marca

- Logo oficial: "A" em malha de nós (plexus), branca - em
  `public/assets/brand/logo.svg`; favicon (círculo preto) em
  `public/favicon.svg`. Ambos **gerados** por `scripts/gen-logo.mjs`
  (`node scripts/gen-logo.mjs` a partir da raiz) - para mexer na geometria,
  edite o script, não os SVGs à mão.
- O componente `src/components/ui/Logo.tsx` renderiza `logo.svg` + wordmark.

## Estado atual / pendências conhecidas

- Portfólio usa **cases fictícios** (`placeholder: true`).
- Contato em `site.ts` está com valores de exemplo (`// TODO`).
- Não há formulário de contato com backend - os CTAs abrem WhatsApp/e-mail.
  (Ver ideias de evolução em `SKILLS.md`.)
- Faltam ícones raster opcionais (`favicon.ico`, `apple-touch-icon.png`,
  imagem Open Graph 1200×630) - gerar a partir de `public/favicon.svg`.
