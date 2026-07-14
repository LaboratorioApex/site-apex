import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { assetPath } from "@/lib/assets";
import { Icon } from "@/components/ui/Icon";
import { CTA } from "@/sections/CTA";
import { projects, getProject } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Estudo de caso`,
    description: project.description,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: project.href,
    creator: { "@type": "Organization", name: "Apex Lab" },
  };

  return (
    <main id="conteudo-principal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="border-b border-border bg-surface py-14 sm:py-20">
        <Container>
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
            <span aria-hidden="true">←</span> Voltar ao portfólio
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="eyebrow">{project.tag}</p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{project.description}</p>
            </div>
            <ButtonLink href={project.href} target="_blank" rel="noopener noreferrer" variant="secondary">
              Abrir projeto
              <Icon name="arrow-up-right" size={17} />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <div className="browser-frame">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={assetPath(project.image)} alt={`Página inicial de ${project.title}`} className="aspect-[16/9] w-full bg-surface-2 object-cover object-top" />
          ) : (
            <div className="flex aspect-[16/9] flex-col justify-end bg-surface-2 p-8 text-white sm:p-12">
              <span className="text-xs font-semibold uppercase text-white/55">Projeto digital</span>
              <strong className="mt-4 font-display text-4xl sm:text-6xl">{project.title}</strong>
              <span className="mt-2 text-base text-white/65">{project.domain}</span>
            </div>
          )}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <article>
            <p className="text-xs font-semibold uppercase text-accent">O desafio</p>
            <h2 className="mt-4 font-display text-2xl font-semibold">O que precisava ser resolvido</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.challenge}</p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase text-accent">A solução</p>
            <h2 className="mt-4 font-display text-2xl font-semibold">Como a experiência foi estruturada</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{project.solution}</p>
          </article>
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-sm font-semibold">Entregas principais</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.deliverables.map((item) => (
              <li key={item} className="rounded-md border border-border bg-canvas px-3 py-2 text-sm">{item}</li>
            ))}
          </ul>
        </div>
      </Section>
      <CTA />
    </main>
  );
}
