export const siteConfig = {
  name: "Apex Lab",
  legalName: "Laboratório Apex",
  tagline: "Tecnologia que transforma negócios.",
  description:
    "A Apex Lab cria sites profissionais e e-commerces rápidos, estratégicos e preparados para transformar presença digital em oportunidades de negócio.",
  url: "https://laboratorioapex.com",
  locale: "pt_BR",
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "laboratorioapexsuporte@gmail.com",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "554884278276",
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "+55 48 8427-8276",
    city: "Atendimento em todo o Brasil",
    whatsappMessage:
      "Olá! Vim pelo site da Apex Lab e quero conversar sobre um projeto.",
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? siteConfig.contact.whatsappMessage);
  const phone = siteConfig.contact.whatsapp;
  return phone
    ? `https://wa.me/${phone}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const mailtoLink = siteConfig.contact.email
  ? `mailto:${siteConfig.contact.email}`
  : "";
