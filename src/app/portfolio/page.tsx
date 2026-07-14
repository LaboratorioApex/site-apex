import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { CTA } from "@/sections/CTA";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfólio de sites e e-commerces",
  description: "Conheça projetos reais de sites institucionais e lojas virtuais desenvolvidos para negócios de diferentes segmentos.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Portfólio"
        title="Trabalhos reais para desafios e públicos diferentes."
        description="Cada projeto combina contexto, estratégia e execução. Aqui você pode conhecer o problema, a solução e o que foi entregue."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </Section>
      <CTA />
    </main>
  );
}

