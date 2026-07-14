import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { processSteps } from "@/data/process";

export function Process() {
  return (
    <Section id="processo">
      <SectionHeading
        eyebrow="Como funciona"
        title="Um caminho curto, claro e acompanhado até a publicação."
        description="Cada etapa tem um objetivo concreto. Você sabe o que estamos fazendo, o que precisamos receber e quando o projeto avança."
      />

      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 55}>
            <div className="h-full border-t-2 border-foreground pt-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-muted">0{index + 1}</span>
                <Icon name={step.icon} size={21} className="text-accent" />
              </div>
              <h3 className="mt-6 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

