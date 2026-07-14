/**
 * Junta classes condicionais de forma segura (ignora valores falsy).
 * Versão leve, sem dependências, no estilo do popular `clsx`.
 *
 *   cn("base", condicao && "extra", undefined) // => "base extra"
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}
