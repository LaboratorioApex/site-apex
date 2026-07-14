import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ui/ServiceDetailPage";
import { servicePages } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Criação de sites profissionais",
  description: "Criação de sites profissionais rápidos, responsivos e preparados para SEO, confiança e geração de contatos em todo o Brasil.",
  alternates: { canonical: "/criacao-de-sites" },
};

export default function SitesPage() {
  return <ServiceDetailPage data={servicePages["criacao-de-sites"]} />;
}

