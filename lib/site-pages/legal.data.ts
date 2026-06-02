import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

export const privacyPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Privacy Policy",
    description:
      "Privacy policy information for EDH Therapy is being prepared and will be available soon.",
    pathname: "/privacy",
    noindex: true,
  }),
  sections: [],
};

export const termsPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Terms of Service",
    description:
      "Terms of service information for EDH Therapy is being prepared and will be available soon.",
    pathname: "/terms",
    noindex: true,
  }),
  sections: [],
};
