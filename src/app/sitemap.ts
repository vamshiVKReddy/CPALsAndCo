import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cpalsandco.com";
  const now = new Date();

  const routes = [
    { url: "/", changeFrequency: "monthly" as const, priority: 1.0 },
    { url: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: "/industries", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/insights", changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "/careers", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
