import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";
import { whatsappLink } from "@/config/site";

export function CTA() {
  const { cta } = content;
  const meetingMessage = "Olá! Vim pelo site da Apex Lab e gostaria de agendar uma conversa sobre meu projeto.";

  return (
    <Section id="contato" className="bg-accent text-white">
      <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-white/70">{cta.eyebrow}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-5xl">{cta.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{cta.subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <ButtonLink
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="bg-foreground text-canvas hover:bg-canvas hover:text-foreground"
            data-conversion="whatsapp"
            data-location="final-cta"
          >
            <Icon name="whatsapp" size={20} />
            {cta.primary}
          </ButtonLink>
          <ButtonLink
            href={whatsappLink(meetingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="secondary"
            className="border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10"
            data-conversion="schedule"
            data-location="final-cta"
          >
            {cta.secondary}
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
