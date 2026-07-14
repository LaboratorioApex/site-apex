import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { articles } from "@/data/articles";

export function Insights() {
  return (
    <Section id="conteudos">
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Conteúdo útil"
          title="Decisões digitais explicadas sem complicação."
          description="Materiais para entender quando investir, o que priorizar e como usar melhor sua presença online."
        />
        <Link href="/conteudos" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent">
          Ver conteúdos
          <Icon name="arrow-right" size={17} />
        </Link>
      </div>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {articles.map((article) => (
          <article key={article.slug} className="flex h-full flex-col bg-surface p-6">
            <p className="text-xs font-semibold uppercase text-accent">{article.category}</p>
            <h3 className="mt-5 font-display text-lg font-semibold leading-snug">{article.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
            <Link href={`/conteudos/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold">
              Ler em {article.readTime}
              <Icon name="arrow-right" size={16} />
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
