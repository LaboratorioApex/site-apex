import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/ui/ServiceDetailPage";
import { servicePages } from "@/data/servicePages";

export const metadata: Metadata = {
  title: "Desenvolvimento de e-commerce",
  description: "Desenvolvimento de lojas virtuais com pagamentos, frete, SEO, treinamento e suporte para vender em todo o Brasil.",
  alternates: { canonical: "/ecommerce" },
};

export default function EcommercePage() {
  return <ServiceDetailPage data={servicePages.ecommerce} />;
}

