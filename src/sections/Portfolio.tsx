import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { Icon } from "@/components/ui/Icon";
import { projects } from "@/data/portfolio";

export function Portfolio() {
  return (
    <Section id="portfolio" className="bg-surface">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Trabalhos reais"
          title="Projetos para negócios, públicos e mercados diferentes."
          description="Uma amostra de como transformamos necessidades específicas em experiências digitais claras e funcionais."
        />
        <Link href="/portfolio" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent">
          Ver todos os projetos
          <Icon name="arrow-right" size={17} />
        </Link>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.slice(0, 3).map((project, index) => (
          <PortfolioCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>
    </Section>
  );
}

