/**
 * Gera a logo vetorial da Apex: um "A" com pico geométrico sólido
 * que se dissolve numa malha de nós conectados (estilo plexus),
 * recriando a arte original enviada pelo cliente.
 *
 * Saídas:
 *  - public/assets/brand/logo.svg   (marca branca, fundo transparente)
 *  - public/favicon.svg             (marca sobre círculo preto)
 */
import { writeFileSync } from "node:fs";

const W = 512;
const mirror = (x) => W - x;

// ---- Nós da malha ------------------------------------------------
// Centro (compartilhados entre os dois lados)
const center = [
  ["c0", 256, 250, 4.5],
  ["c1", 256, 294, 5],
  ["c2", 256, 338, 9], // nó central do arco interno
];

// Lado esquerdo (o direito é espelhado)
const left = [
  ["a1", 180, 254, 4.5],
  ["a2", 220, 258, 5.5],
  ["a3", 200, 280, 3.5],
  ["a4", 238, 284, 4],
  ["b1", 163, 305, 6.5],
  ["b2", 205, 308, 7],
  ["b3", 240, 315, 4.5],
  ["b4", 148, 345, 5],
  ["b5", 190, 350, 6.5],
  ["b6", 227, 356, 7.5],
  ["d1", 118, 392, 8],
  ["d2", 162, 395, 6],
  ["d3", 205, 398, 8.5],
  ["e1", 100, 430, 7],
  ["e2", 143, 432, 8],
  ["e3", 188, 430, 7],
  ["e4", 222, 426, 5.5],
];

// Arestas (ids do lado esquerdo + centro; expandidas para os 2 lados)
const edges = [
  ["a1", "a2"], ["a2", "c0"], ["a1", "a3"], ["a2", "a3"], ["a2", "a4"],
  ["a4", "c0"], ["a3", "a4"],
  ["a3", "b1"], ["a1", "b1"], ["a3", "b2"], ["a4", "b2"], ["a2", "b2"],
  ["a4", "b3"], ["c0", "b3"], ["b3", "c1"], ["c0", "c1"], ["a4", "c1"],
  ["b1", "b2"], ["b2", "b3"],
  ["b1", "b4"], ["b1", "b5"], ["b2", "b5"], ["b2", "b6"], ["b3", "b6"],
  ["b6", "c2"], ["c1", "c2"], ["b3", "c2"],
  ["b4", "b5"], ["b5", "b6"],
  ["b4", "d1"], ["b4", "d2"], ["b5", "d2"], ["b5", "d3"], ["b6", "d3"],
  ["c2", "d3"],
  ["d1", "d2"], ["d2", "d3"],
  ["d1", "e1"], ["d1", "e2"], ["d2", "e2"], ["d2", "e3"], ["d3", "e3"],
  ["d3", "e4"],
  ["e1", "e2"], ["e2", "e3"], ["e3", "e4"],
];

// ---- Expansão dos dois lados -------------------------------------
const nodes = new Map();
for (const [id, x, y, r] of center) nodes.set(id, { x, y, r });
for (const [id, x, y, r] of left) {
  nodes.set("L" + id, { x, y, r });
  nodes.set("R" + id, { x: mirror(x), y, r });
}

const segs = new Set();
for (const side of ["L", "R"]) {
  for (const [u, v] of edges) {
    const uid = u.startsWith("c") ? u : side + u;
    const vid = v.startsWith("c") ? v : side + v;
    segs.add([uid, vid].sort().join("|"));
  }
}

// ---- Montagem do SVG ---------------------------------------------
const lines = [...segs]
  .map((key) => {
    const [u, v] = key.split("|");
    const a = nodes.get(u);
    const b = nodes.get(v);
    return `    <line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`;
  })
  .join("\n");

const dots = [...nodes.values()]
  .map((n) => `    <circle cx="${n.x}" cy="${n.y}" r="${n.r}"/>`)
  .join("\n");

// Pico sólido do "A" (chevron duplo)
const chevrons = `  <g fill="none" stroke="#FFFFFF" stroke-linejoin="round">
    <path d="M164 242 L256 80 L348 242" stroke-width="25"/>
    <path d="M212 242 L256 164 L300 242" stroke-width="17"/>
  </g>`;

const mark = `${chevrons}
  <g stroke="#FFFFFF" stroke-width="2" opacity="0.66">
${lines}
  </g>
  <g fill="#FFFFFF">
${dots}
  </g>`;

const logo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Apex">
  <!-- Logo Apex: "A" em malha de nós (recriação vetorial da arte original) -->
${mark}
</svg>
`;

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <circle cx="256" cy="256" r="256" fill="#0A0A0A"/>
${mark}
</svg>
`;

// Rode a partir da raiz do projeto: `node scripts/gen-logo.mjs`
writeFileSync("public/assets/brand/logo.svg", logo);
writeFileSync("public/favicon.svg", favicon);
console.log("OK - logo.svg e favicon.svg gerados.");
console.log("nós:", nodes.size, "| linhas:", segs.size);
