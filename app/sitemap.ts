import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { sitemapGeneratedEntries } from "./sitemap.generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return sitemapGeneratedEntries.map((entry) => ({
    url: new URL(entry.pathname, siteUrl).toString(),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
