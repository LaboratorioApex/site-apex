import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Conteúdos sobre sites, e-commerce e presença digital",
  description: "Conteúdos práticos para pequenos negócios tomarem decisões melhores sobre sites, lojas virtuais, SEO e presença digital.",
  alternates: { canonical: "/conteudos" },
};

export default function ContentPage() {
  return (
    <main id="conteudo-principal">
      <PageHero
        eyebrow="Conteúdos"
        title="Informação prática para usar melhor a tecnologia no seu negócio."
        description="Sem excesso de termos técnicos: apenas o que ajuda a decidir, planejar e transformar presença digital em uma ferramenta comercial."
      />
      <Section>
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="flex min-h-72 flex-col bg-surface p-6">
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-semibold uppercase text-accent">{article.category}</span>
                <span className="text-muted">{article.readTime}</span>
              </div>
              <h2 className="mt-8 font-display text-xl font-semibold leading-snug">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{article.excerpt}</p>
              <Link href={`/conteudos/${article.slug}`} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold">
                Ler conteúdo
                <Icon name="arrow-right" size={16} />
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}

