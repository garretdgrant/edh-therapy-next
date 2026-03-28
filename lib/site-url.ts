const DEFAULT_SITE_URL = "https://edhtherapy.com";

export function getSiteUrl() {
  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (!configuredSiteUrl) {
    return DEFAULT_SITE_URL;
  }

  const normalizedSiteUrl = configuredSiteUrl.startsWith("http")
    ? configuredSiteUrl
    : `https://${configuredSiteUrl}`;

  return normalizedSiteUrl.replace(/\/$/, "");
}
