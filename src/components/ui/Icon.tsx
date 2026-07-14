import type { SVGProps } from "react";

/**
 * Sistema de ícones em SVG inline (sem dependências externas).
 * Todos herdam `currentColor` e o traço padrão, ficando leves e
 * fáceis de estilizar via classes Tailwind (ex.: text-accent).
 *
 * Para adicionar um ícone novo: crie a entrada no objeto `paths`
 * usando o mesmo grid 24x24 e stroke-width 1.75.
 */

export type IconName =
  | "globe"
  | "rocket"
  | "cart"
  | "code"
  | "puzzle"
  | "plug"
  | "palette"
  | "cursor"
  | "gauge"
  | "shield"
  | "sparkles"
  | "headset"
  | "layers"
  | "arrow-right"
  | "arrow-up-right"
  | "check"
  | "menu"
  | "close"
  | "whatsapp"
  | "mail"
  | "phone"
  | "map-pin"
  | "instagram"
  | "linkedin"
  | "github"
  | "quote"
  | "search"
  | "pen-ruler"
  | "handshake";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

const paths: Record<IconName, JSX.Element> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M5 15c-1.5 1-2 4-2 4s3-.5 4-2c.7-1 .5-2.3-.3-3-.8-.8-2-.9-1.7 1Z" />
      <path d="M9 15l-3-3c1-4 4-8 9-9 1 5-3 9-6 9Z" />
      <path d="M15 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.2" />
      <circle cx="18" cy="20" r="1.2" />
      <path d="M3 4h2l2.2 11.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 8H6" />
    </>
  ),
  code: (
    <>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
    </>
  ),
  puzzle: (
    <>
      <path d="M10 4a2 2 0 1 1 4 0v1h3a1 1 0 0 1 1 1v3h1a2 2 0 1 1 0 4h-1v3a1 1 0 0 1-1 1h-3v-1a2 2 0 1 0-4 0v1H6a1 1 0 0 1-1-1v-3H4a2 2 0 1 1 0-4h1V6a1 1 0 0 1 1-1h4V4Z" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v5M15 2v5M6 7h12v3a6 6 0 0 1-12 0V7ZM12 16v6" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.8.7-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-3.9-4-7-9-7Z" />
      <circle cx="7.5" cy="12" r="1" />
      <circle cx="10" cy="8" r="1" />
      <circle cx="14.5" cy="8" r="1" />
    </>
  ),
  cursor: (
    <>
      <path d="M5 4l6 15 2-6 6-2L5 4Z" />
    </>
  ),
  gauge: (
    <>
      <path d="M12 13l4-4M4.5 17a9 9 0 1 1 15 0" />
      <circle cx="12" cy="13" r="1" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3ZM18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
    </>
  ),
  headset: (
    <>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1M4 13a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1ZM20 13a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2 1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM18 19a5 5 0 0 1-5 3" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  "arrow-right": (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7M8 7h9v9" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4.5 4.5L19 7" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.5 8.2c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.6 1.4c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3-.1.5.3.6 1.2 1.6 2.1 2 .2.1.4.1.5 0l.6-.6c.1-.2.3-.2.5-.1l1.4.7c.2.1.3.3.3.5 0 .6-.4 1.2-1 1.4-.5.2-1.2.3-2.6-.3-1.9-.8-3.4-2.6-3.9-3.8-.3-.7-.5-1.6.4-2.7Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.5 11.5 0 0 0-6 0C6.3 3.3 5.3 3.6 5.3 3.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 10c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </>
  ),
  quote: (
    <>
      <path d="M7 7H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-2a4 4 0 0 1-2-2ZM7 7c0 3-1 4-3 5M19 7h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v-2a4 4 0 0 1-2-2ZM19 7c0 3-1 4-3 5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  "pen-ruler": (
    <>
      <path d="M4 20l4-1 9.5-9.5a2 2 0 0 0 0-2.8l-.7-.7a2 2 0 0 0-2.8 0L4.5 15.5 4 20ZM14 6l3.5 3.5" />
    </>
  ),
  handshake: (
    <>
      <path d="m11 17 2 2a1.5 1.5 0 0 0 2-2M8 14l2 2a1.5 1.5 0 0 0 2-2M13 15l1.5 1.5a1.5 1.5 0 0 0 2-2L14 9l1-4H8L5 8v5l2.5 2.5" />
      <path d="M19 8v5l-2 1" />
    </>
  ),
};

export function Icon({ name, size = 24, strokeWidth = 1.75, ...props }: IconProps & { strokeWidth?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
