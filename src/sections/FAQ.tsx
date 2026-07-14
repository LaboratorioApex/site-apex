import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <Section id="duvidas">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Respostas claras antes da primeira conversa."
          description="Prazo, SEO, suporte e resultado: o essencial para decidir com mais segurança."
        />
        <FaqList items={faqs} />
      </div>
    </Section>
  );
}

