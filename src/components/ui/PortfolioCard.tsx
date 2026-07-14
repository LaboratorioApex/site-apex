import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Project } from "@/data/portfolio";
import { assetPath } from "@/lib/assets";

export function PortfolioCard({ project, priority = false }: { project: Project; priority?: boolean }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-surface">
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="browser-frame m-3 mb-0">
          {project.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={assetPath(project.image)}
              alt={`Página inicial do projeto ${project.title}`}
              className="aspect-[16/9] w-full bg-surface-2 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              loading={priority ? "eager" : "lazy"}
            />
          ) : (
            <div className="flex aspect-[16/9] flex-col justify-end bg-surface-2 p-6 text-white">
              <span className="text-xs font-semibold uppercase text-white/55">Projeto digital</span>
              <strong className="mt-3 font-display text-2xl">{project.title}</strong>
              <span className="mt-1 text-sm text-white/65">{project.domain}</span>
            </div>
          )}
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase text-accent">{project.tag}</p>
            <span className="text-xs text-muted">{project.domain}</span>
          </div>
          <h2 className="mt-3 font-display text-xl font-semibold">{project.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
            Ver estudo de caso
            <Icon name="arrow-right" size={17} />
          </span>
        </div>
      </Link>
    </article>
  );
}
