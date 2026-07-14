import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Termos de uso", alternates: { canonical: "/termos-de-uso" } };

export default function TermsPage() {
  return (
    <main id="conteudo-principal">
      <PageHero eyebrow="Informações legais" title="Termos de uso" description="Condições gerais para uso das informações e canais disponíveis no site da Apex Lab." />
      <Section containerClassName="max-w-3xl">
        <div className="space-y-8 text-base leading-7 text-muted">
          <section><h2 className="font-display text-xl font-semibold text-foreground">Conteúdo informativo</h2><p className="mt-3">Os conteúdos deste site apresentam serviços, experiências e orientações gerais. Escopo, prazo e condições comerciais são definidos em proposta e contrato próprios.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Resultados</h2><p className="mt-3">Sites e e-commerces podem apoiar confiança, descoberta e conversão, mas resultados comerciais também dependem da oferta, divulgação, operação e decisões do contratante.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Propriedade intelectual</h2><p className="mt-3">Marca, textos e elementos próprios da Apex Lab não podem ser reproduzidos para fins comerciais sem autorização. Marcas e conteúdos exibidos em projetos pertencem aos respectivos titulares.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Links externos</h2><p className="mt-3">Links para projetos e serviços de terceiros são fornecidos como referência. A Apex Lab não controla alterações posteriores realizadas nesses ambientes.</p></section>
        </div>
      </Section>
    </main>
  );
}

