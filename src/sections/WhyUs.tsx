import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { differentials } from "@/data/differentials";

export function WhyUs() {
  return (
    <Section id="diferenciais">
      <SectionHeading
        eyebrow="Por que a Apex Lab"
        title="Rapidez sem abandonar estratégia, qualidade ou acompanhamento."
        description="O projeto termina publicado, explicado e pronto para ser usado. Não entregamos uma página e desaparecemos."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {differentials.map((item, index) => (
          <Reveal key={item.title} delay={index * 60}>
            <article className="h-full bg-surface p-6 lg:min-h-64">
              <Icon name={item.icon} size={25} className="text-accent" />
              <h3 className="mt-10 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

