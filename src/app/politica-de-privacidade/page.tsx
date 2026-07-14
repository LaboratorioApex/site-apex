import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Política de privacidade", alternates: { canonical: "/politica-de-privacidade" } };

export default function PrivacyPage() {
  return (
    <main id="conteudo-principal">
      <PageHero eyebrow="Informações legais" title="Política de privacidade" description="Como tratamos dados de navegação e informações enviadas durante o contato com a Apex Lab." />
      <Section containerClassName="max-w-3xl">
        <div className="space-y-8 text-base leading-7 text-muted">
          <section><h2 className="font-display text-xl font-semibold text-foreground">Dados coletados</h2><p className="mt-3">Podemos registrar dados de navegação, origem do acesso e cliques em canais de contato. Informações pessoais são recebidas somente quando você inicia uma conversa ou as envia voluntariamente.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Finalidade</h2><p className="mt-3">Os dados são usados para responder solicitações, elaborar propostas, melhorar a experiência do site e entender quais canais geram oportunidades comerciais.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Compartilhamento e segurança</h2><p className="mt-3">Não comercializamos dados pessoais. Informações podem ser processadas por serviços essenciais de hospedagem, análise e comunicação, respeitando suas próprias políticas de privacidade.</p></section>
          <section><h2 className="font-display text-xl font-semibold text-foreground">Seus direitos</h2><p className="mt-3">Você pode solicitar confirmação, correção ou exclusão de dados pessoais mantidos pela Apex Lab por meio dos canais oficiais de atendimento.</p></section>
        </div>
      </Section>
    </main>
  );
}

