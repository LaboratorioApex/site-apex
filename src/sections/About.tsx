import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";

export function About() {
  const { about } = content;

  return (
    <Section id="sobre" className="bg-surface">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal as="p" className="eyebrow">{about.eyebrow}</Reveal>
          <Reveal as="h2" delay={60} className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            {about.title}
          </Reveal>
        </div>

        <div>
          <div className="space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <Reveal as="p" key={paragraph} delay={index * 60} className="text-base leading-relaxed text-muted sm:text-lg">
                {paragraph}
              </Reveal>
            ))}
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-2 text-sm font-medium">
                <Icon name="check" size={17} className="mt-0.5 shrink-0 text-accent" />
                {highlight}
              </li>
            ))}
          </ul>
          <Link href="/sobre" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent">
            Conhecer a Apex Lab
            <Icon name="arrow-right" size={17} />
          </Link>
        </div>
      </div>
    </Section>
  );
}

