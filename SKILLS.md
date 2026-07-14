# SKILLS.md - Design System & Convenções Técnicas

Referência do "como" deste projeto: o sistema de design, os padrões de código e
o roteiro de evolução. Serve tanto para humanos quanto para agentes de IA.

---

## 🎨 Design System

### Paleta (definida em `src/app/globals.css` → `:root`)

**Monocromática premium**, harmonizada com a logo (preto & branco, estilo
Vercel/Linear). O "acento" é branco→prata metálica.

| Token                | Uso                                | Valor atual |
| -------------------- | ---------------------------------- | ----------- |
| `--color-base`       | Fundo principal                    | `#070707`   |
| `--color-surface`    | Cartões / superfícies              | `#0E0E0E`   |
| `--color-surface-2`  | Superfícies elevadas               | `#171717`   |
| `--color-border`     | Bordas e divisores                 | `#27272A`   |
| `--color-foreground` | Texto principal                    | `#FAFAFA`   |
| `--color-muted`      | Texto secundário                   | `#A1A1AA`   |
| `--color-accent`     | Cor de destaque (branco)           | `#FFFFFF`   |
| `--color-accent-2`   | Fim do gradiente (prata)           | `#A1A1AA`   |

> Trocar a paleta = editar essas variáveis. Todo o site (via classes Tailwind
> `bg-base`, `text-accent`, `bg-accent-gradient`, etc.) se atualiza junto.
> ⚠️ **Não introduza cores saturadas** - a identidade é monocromática por
> decisão de marca (a logo é P&B). Hierarquia se faz com luz, não com cor.

### Tipografia

- **Display (títulos):** Sora - `font-display`.
- **Corpo:** Inter - `font-sans` (padrão).
- Escala: `text-3xl/4xl/5xl/6xl` para títulos, `text-base/lg` para corpo.
- Títulos usam `tracking-tight` e `font-semibold`.

### Espaçamento & layout

- Container central: máx. `1200px`, com padding lateral responsivo
  (config em `tailwind.config.ts`).
- Ritmo vertical das seções: `py-20` (mobile) → `py-24` → `py-28` (desktop),
  encapsulado no componente `<Section>`.
- Raios: cartões `rounded-2xl`; botões e chips `rounded-full`.

### Motion (microinterações)

- **Reveal on scroll:** componente `<Reveal>` (fade + slide-up) via
  IntersectionObserver. Use `delay` para efeito escalonado (stagger).
- **Hover:** cartões sobem levemente (`hover:-translate-y-1`) e ganham borda/
  brilho de acento. Transições com `ease-smooth` (curva custom).
- Respeita `prefers-reduced-motion` (desliga animações).

---

## 🧩 Biblioteca de componentes

| Componente         | Papel                                             |
| ------------------ | ------------------------------------------------- |
| `ui/Container`     | Largura máxima + padding consistentes             |
| `ui/Section`       | Wrapper de seção (espaçamento + âncora)           |
| `ui/SectionHeading`| Eyebrow + título + descrição padronizados         |
| `ui/Button`        | `ButtonLink` (âncora) e `Button` - variantes primary/secondary/ghost |
| `ui/Card` (visual) | Estilo base via classe `.card-base`               |
| `ui/Reveal`        | Animação de entrada no viewport                   |
| `ui/Logo`          | Marca oficial (plexus "A") + wordmark             |
| `ui/Icon`          | Conjunto de ícones SVG inline                     |
| `layout/Header`    | Navegação fixa + menu mobile                      |
| `layout/Footer`    | Rodapé com links, serviços e contato              |

**Regra de ouro:** conteúdo vem de `data/` e `config/`; componentes só exibem.

---

## ⚙️ Qualidade & performance

- Página 100% estática (SSG). First Load JS ≈ 90 kB.
- Fontes auto-hospedadas por `next/font` (sem FOUT dependente de rede em prod).
- Imagens: usar `next/image` ou `<img loading="lazy">`.
- SEO: metadata, Open Graph, `sitemap.xml`, `robots.txt`, JSON-LD (Schema.org).
- Acessibilidade: HTML semântico, foco visível, `aria-label`s, contraste alto.

---

## 🗺️ Roteiro de evolução (ideias)

Melhorias naturais quando o negócio pedir:

1. **Formulário de contato** com backend (ex.: Route Handler + Resend/e-mail,
   ou um serviço como Formspree). Hoje os CTAs abrem WhatsApp/e-mail.
2. **Blog / Conteúdo** para SEO - pasta `app/blog` com MDX. Ótimo para ranquear
   nas buscas citadas no README.
3. **Página de case detalhada** por projeto (`app/portfolio/[slug]`).
4. **Depoimentos de clientes** (nova seção + `data/testimonials.ts`).
5. **Botão flutuante de WhatsApp** persistente no canto da tela.
6. **Analytics** (Vercel Analytics, Plausible ou GA4) e **Cookie/LGPD**.
7. **Internacionalização** (pt/en) se atender clientes fora do Brasil.
8. **Modo claro** opcional (a base em CSS vars já facilita).
9. **Ícones/OG image** dedicados: gerar `favicon.ico`, `apple-touch-icon.png` e
   uma imagem Open Graph 1200×630 para compartilhamento em redes.
10. **Testes** (Playwright para e2e dos fluxos de CTA) e CI.

---

## 📌 Onde mexer (resumo)

- Conteúdo → `src/data/*`, `src/config/site.ts`
- Aparência → `src/app/globals.css`, `tailwind.config.ts`
- Estrutura → `src/sections/*`, `src/app/page.tsx`
- Marca → `public/assets/brand/`, `src/components/ui/Logo.tsx`

Detalhes de convenção em **CLAUDE.md**; como rodar/publicar em **README.md**.
