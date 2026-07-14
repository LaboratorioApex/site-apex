import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { WhyUs } from "@/sections/WhyUs";
import { Portfolio } from "@/sections/Portfolio";
import { Process } from "@/sections/Process";
import { About } from "@/sections/About";
import { Insights } from "@/sections/Insights";
import { FAQ } from "@/sections/FAQ";
import { CTA } from "@/sections/CTA";
import { faqs } from "@/data/faqs";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return (
    <main id="conteudo-principal">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Process />
      <About />
      <Insights />
      <FAQ />
      <CTA />
    </main>
  );
}

