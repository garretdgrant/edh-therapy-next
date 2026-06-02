import { getSiteUrl } from "./site-url";

export function buildPageUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}

export function getBusinessId() {
  return `${getSiteUrl()}#business`;
}

export function getWebSiteId() {
  return `${getSiteUrl()}#website`;
}

export function getProfessionalServiceId() {
  return getBusinessId();
}

export function getPersonId() {
  return `${buildPageUrl("/about")}#person`;
}

export function getWebPageId(pathname: string) {
  return `${buildPageUrl(pathname)}#webpage`;
}

export function getBreadcrumbId(pathname: string) {
  return `${buildPageUrl(pathname)}#breadcrumb`;
}

export function getFaqPageId(pathname: string) {
  return `${buildPageUrl(pathname)}#faqpage`;
}

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

export function buildBreadcrumbSchema(
  pathname: string,
  items: BreadcrumbItem[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": getBreadcrumbId(pathname),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildPageUrl(item.pathname),
    })),
  };
}

type BuildWebPageSchemaOptions = {
  pathname: string;
  type?: "WebPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  mainEntity?: Record<string, unknown>;
  about?: Record<string, unknown>;
  isPartOf?: Record<string, unknown>;
};

export function buildWebPageSchema({
  pathname,
  type = "WebPage",
  name,
  description,
  mainEntity,
  about,
  isPartOf,
}: BuildWebPageSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": getWebPageId(pathname),
    url: buildPageUrl(pathname),
    name,
    description,
    inLanguage: "en-US",
    isPartOf: isPartOf ?? {
      "@id": getWebSiteId(),
    },
    ...(about ? { about } : {}),
    ...(mainEntity ? { mainEntity } : {}),
  };
}
