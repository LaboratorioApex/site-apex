"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { content } from "@/data/content";
import { stats } from "@/data/stats";
import { projects } from "@/data/portfolio";
import { whatsappLink } from "@/config/site";
import { assetPath } from "@/lib/assets";

export function Hero() {
  const { hero } = content;
  const featuredProjects = projects.filter((project) => project.image).slice(0, 3);
  const guarantees = [
    {
      icon: "search" as const,
      title: "SEO incluído",
      description: "Estrutura preparada para o Google desde o início.",
    },
    {
      icon: "rocket" as const,
      title: "Prazos definidos",
      description: "Páginas únicas a partir de dois dias úteis.",
    },
    {
      icon: "headset" as const,
      title: "30 dias de suporte",
      description: "Acompanhamento gratuito depois da publicação.",
    },
    {
      icon: "handshake" as const,
      title: "Treinamento incluso",
      description: "Orientação para usar e divulgar seu novo site.",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-canvas pt-8 sm:pt-12 lg:pt-16">
      <Container>
        <div className="grid gap-8 pb-10 pt-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:pb-16 lg:pt-8">
          <div>
            <Reveal
              as="h1"
              delay={60}
              className="max-w-5xl font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-[5.35rem]"
            >
              Transformamos sua presença digital em <span className="text-accent">confiança e vendas.</span>
            </Reveal>
          </div>

          <Reveal as="div" delay={140} className="flex flex-col justify-end border-l border-border pl-5 lg:pb-1">
            <p className="text-base leading-relaxed text-muted">{hero.subtitle}</p>
            <div className="mt-7 flex flex-col gap-3">
              <ButtonLink
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="whitespace-nowrap px-5 text-sm"
                data-conversion="whatsapp"
                data-location="hero"
              >
                {hero.primaryCta}
                <Icon name="arrow-right" size={19} />
              </ButtonLink>
              <ButtonLink
                href={whatsappLink("Olá! Vim pelo site da Apex Lab e gostaria de falar com um especialista.")}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                data-conversion="whatsapp"
                data-location="hero-secondary"
              >
                {hero.secondaryCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={210} className="border-y border-border py-5">
          <dl className="grid grid-cols-2 gap-x-5 gap-y-5 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs leading-snug text-muted">{stat.label}</dt>
                <dd className="mt-1 font-display text-lg font-semibold text-foreground sm:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-4 py-8 sm:grid-cols-3 sm:py-10">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={260 + index * 70} className="hero-project-card">
              <Link href={`/portfolio/${project.slug}`} className="group block" data-cursor="project">
                <div className="overflow-hidden rounded-md border border-border bg-surface">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(project.image ?? "")}
                    alt={`Projeto ${project.title}`}
                    className="aspect-[16/10] w-full bg-surface-2 object-cover object-top opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className="mt-3 flex items-start justify-between gap-3 border-t border-border pt-3">
                  <span className="text-sm font-semibold text-foreground">{project.title}</span>
                  <span className="text-right text-xs text-muted">{project.tag}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="border-t border-border bg-surface">
        <Container>
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((item) => (
              <div key={item.title} className="flex gap-4 bg-surface px-4 py-6 lg:px-5 lg:py-7">
                <Icon name={item.icon} size={21} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
