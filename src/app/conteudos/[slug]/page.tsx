import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTA } from "@/sections/CTA";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/conteudos/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt, publishedTime: article.publishedAt },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <main id="conteudo-principal">
      <article>
        <header className="border-b border-border bg-surface py-14 sm:py-20">
          <Container>
            <Link href="/conteudos" className="text-sm font-semibold text-accent">← Todos os conteúdos</Link>
            <div className="mt-8 max-w-4xl">
              <p className="text-xs font-semibold uppercase text-accent">{article.category} · {article.readTime}</p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">{article.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{article.excerpt}</p>
            </div>
          </Container>
        </header>
        <Section containerClassName="max-w-3xl">
          <div className="space-y-12">
            {article.sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-muted sm:text-lg">{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Section>
      </article>
      <CTA />
    </main>
  );
}

