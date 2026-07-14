import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { FaqList } from "@/components/ui/FaqList";
import { Icon } from "@/components/ui/Icon";
import { Process } from "@/sections/Process";
import { faqs } from "@/data/faqs";
import type { ServicePageData } from "@/data/servicePages";
import { whatsappLink } from "@/config/site";

export function ServiceDetailPage({ data }: { data: ServicePageData }) {
  return (
    <main id="conteudo-principal">
      <PageHero eyebrow={data.eyebrow} title={data.title} description={data.description} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{data.introTitle}</h2>
            <div className="mt-5 space-y-4">
              {data.intro.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-muted sm:text-lg">{paragraph}</p>
              ))}
            </div>
            <ButtonLink
              href={whatsappLink(data.ctaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-8"
              data-conversion="whatsapp"
              data-location={`${data.slug}-intro`}
            >
              Conversar sobre meu projeto
              <Icon name="arrow-right" size={18} />
            </ButtonLink>
          </div>

          <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase text-accent">O que muda para o negócio</p>
            <ul className="mt-6 space-y-4">
              {data.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-muted">
                  <Icon name="check" size={19} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm font-medium leading-relaxed sm:text-base">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Entrega completa"
          title="O essencial para lançar com uma base profissional."
          description="Cada projeto combina visão comercial, conteúdo, experiência e tecnologia em uma única entrega."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {data.included.map((item, index) => (
            <article key={item.title} className="bg-canvas p-6">
              <span className="text-xs font-semibold text-accent">0{index + 1}</span>
              <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="formatos">
        <SectionHeading
          eyebrow="Prazo e formato"
          title="Uma entrega compatível com o tamanho do desafio."
          description="Os prazos começam a contar após a aprovação do escopo e o recebimento dos materiais necessários."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {data.formats.map((format) => (
            <article key={format.title} className="border-t-2 border-foreground pt-5">
              <p className="text-sm font-semibold text-accent">{format.time}</p>
              <h3 className="mt-5 font-display text-xl font-semibold">{format.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{format.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Process />

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading
            eyebrow="Antes de decidir"
            title="Dúvidas comuns sobre o projeto."
            description="Respostas diretas sobre prazo, SEO, acompanhamento e investimento."
          />
          <FaqList items={faqs.slice(0, 4)} />
        </div>
      </Section>

      <Section className="bg-accent text-white">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Seu próximo passo pode começar com uma conversa simples.</h2>
            <p className="mt-4 text-base leading-relaxed text-white/75">Conte o que deseja construir e receba uma orientação objetiva sobre formato, prazo e caminho recomendado.</p>
          </div>
          <ButtonLink
            href={whatsappLink(data.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="shrink-0 bg-foreground text-canvas hover:bg-canvas hover:text-foreground"
            data-conversion="whatsapp"
            data-location={`${data.slug}-final`}
          >
            Falar no WhatsApp
            <Icon name="whatsapp" size={19} />
          </ButtonLink>
        </div>
      </Section>
    </main>
  );
}
