import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { services } from "@/data/services";

export function Services() {
  const primary = services.filter((service) => service.primary);
  const complementary = services.filter((service) => !service.primary);

  return (
    <Section id="servicos" className="bg-surface">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <SectionHeading
          eyebrow="O que construímos"
          title="A presença digital que seu próximo cliente espera encontrar."
          description="Começamos pelos dois produtos com maior impacto comercial para pequenos negócios: sites profissionais e lojas virtuais."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {primary.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-lg border border-border bg-canvas p-6 transition-colors hover:border-accent"
              >
                <Icon name={service.icon} size={28} className="text-accent" />
                <h3 className="mt-8 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-foreground">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon name="check" size={16} className="text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">
                  Entender a solução
                  <Icon name="arrow-right" size={17} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div id="solucoes-complementares" className="mt-12 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
        {complementary.map((service, index) => (
          <Reveal key={service.slug} delay={index * 70}>
            <Link href={service.href} className="flex items-start gap-4 rounded-lg p-4 hover:bg-canvas">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon name={service.icon} size={22} />
              </span>
              <span>
                <strong className="block font-display text-base">{service.title}</strong>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{service.description}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
