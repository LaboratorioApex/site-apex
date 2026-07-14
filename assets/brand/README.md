# Marca / Identidade Visual

A logo oficial da Apex, o "A" em malha de nós (plexus) em branco, vive aqui.

## Arquivos

| Arquivo                          | O que é                                        |
| -------------------------------- | ---------------------------------------------- |
| `logo.svg`                       | Marca oficial (branca, fundo transparente)     |
| `../../favicon.svg` (public/)    | Mesma marca sobre círculo preto (aba/ícone)    |

Ambos são **gerados** por `scripts/gen-logo.mjs` (recriação vetorial fiel da
arte original). Para ajustar a geometria da marca, edite o script e rode:

```bash
node scripts/gen-logo.mjs
```

## Como substituir por outro arquivo

Basta trocar `logo.svg` (mesmo nome). O site usa o arquivo diretamente em
`src/components/ui/Logo.tsx`. Prefira SVG; se for PNG, use fundo transparente
e atualize a extensão no componente.

> A marca é **branca** e foi projetada para os fundos escuros do site.

## Paleta de cores

Monocromática, harmonizada com a logo (preto & branco):
definida em `src/app/globals.css` (bloco `:root`). O acento é branco→prata
(`--color-accent` / `--color-accent-2`). Evite introduzir cores saturadas;
elas quebram a identidade.

## Favicon extra (opcional)

Para `favicon.ico`, `apple-touch-icon.png` (180×180) e ícones PWA em PNG,
gere a partir de `public/favicon.svg` (ex.: https://realfavicongenerator.net)
e referencie em `src/app/layout.tsx`, campo `icons`.
