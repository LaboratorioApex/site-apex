import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { Analytics } from "@/components/analytics/Analytics";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { siteConfig } from "@/config/site";
import "./globals.css";

const deploymentBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Apex Lab | Criação de sites e e-commerces",
    template: "%s | Apex Lab",
  },
  description: siteConfig.description,
  keywords: [
    "criação de sites profissionais",
    "desenvolvimento de sites",
    "criação de e-commerce",
    "desenvolvimento de loja virtual",
    "agência de criação de sites",
    "site para pequenas empresas",
    "SEO para sites",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Apex Lab | Tecnologia que transforma negócios",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Lab | Tecnologia que transforma negócios",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [{ url: `${deploymentBasePath}/favicon.svg`, type: "image/svg+xml" }],
  },
  manifest: `${deploymentBasePath}/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: "#070909",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  description: siteConfig.description,
  areaServed: { "@type": "Country", name: "Brasil" },
  slogan: siteConfig.tagline,
  serviceType: ["Criação de sites", "Desenvolvimento de e-commerce", "Sistemas e automações"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pt-BR">
      <body>
        <a
          href="#conteudo-principal"
          className="fixed left-3 top-3 z-[100] -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm text-white focus:translate-y-0"
        >
          Ir para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Analytics gaId={gaId} />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
