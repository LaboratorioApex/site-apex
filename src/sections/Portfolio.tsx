import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/portfolio";

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Trabalhos reais"
            title="Estratégia aplicada a negócios diferentes."
            description="Selecionamos três projetos para mostrar como contexto, clareza e execução se transformam em soluções digitais sob medida."
          />
          <Reveal delay={180}>
            <Link
              href="/portfolio"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground"
            >
              Ver portfólio completo
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <Link
                href={`/portfolio/${project.slug}`}
                aria-label={`Conhecer o projeto ${project.title}`}
                className="group grid gap-5 border-b border-border py-7 transition-colors hover:border-accent sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:py-9"
              >
                <span className="font-display text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5">
                    <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted">{project.domain}</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold uppercase text-accent">{project.tag}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    <span className="font-semibold uppercase text-foreground">Entregas: </span>
                    {project.deliverables.join(" • ")}
                  </p>
                </div>

                <span className="hidden h-10 w-10 items-center justify-center self-center text-muted transition-colors group-hover:text-accent sm:flex">
                  <Icon name="arrow-up-right" size={22} />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

