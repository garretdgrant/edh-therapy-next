import { getSiteUrl } from "./site-url";

type BreadcrumbItem = {
  name: string;
  pathname: string;
};

export function buildPageUrl(pathname: string) {
  return new URL(pathname, getSiteUrl()).toString();
}

export function getWebSiteId() {
  return `${getSiteUrl()}#website`;
}

export function getProfessionalServiceId() {
  return `${getSiteUrl()}#professional-service`;
}

export function getPersonId() {
  return `${buildPageUrl("/about")}#person`;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildPageUrl(item.pathname),
    })),
  };
}
