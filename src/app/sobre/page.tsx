import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { CTA } from "@/sections/CTA";
import { content } from "@/data/content";
import { stats } from "@/data/stats";

export const metadata: Metadata = {
  title: "Sobre a Apex Lab",
  description: "Conheça a Apex Lab, equipe com mais de seis anos de experiência em sites, e-commerces, software e soluções digitais.",
  alternates: { canonical: "/sobre" },
};

export default function AboutPage() {
  const { about } = content;
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Sobre a Apex Lab"
        title="Tecnologia acessível para negócios que não querem ficar para trás."
        description="Unimos experiência prática, processo ágil e proximidade para ajudar empresas a competir melhor no ambiente digital."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted">{paragraph}</p>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface p-5 sm:p-6">
                <strong className="font-display text-xl font-semibold text-accent sm:text-2xl">{stat.value}</strong>
                <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Nosso compromisso</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">Entregar algo que sua empresa consiga usar, entender e evoluir.</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 border-t border-border pt-4">
                <Icon name="check" size={19} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm font-medium leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <CTA />
    </main>
  );
}

