import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/portfolio";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-07-13");
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/criacao-de-sites", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ecommerce", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/conteudos", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/politica-de-privacidade", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/termos-de-uso", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/conteudos/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
