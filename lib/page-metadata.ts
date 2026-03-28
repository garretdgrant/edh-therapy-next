import type { Metadata } from "next";

export const SITE_NAME = "EDH Therapy";
export const DEFAULT_SITE_DESCRIPTION =
  "Supporting individuals and couples through life transitions, anxiety, relationship challenges, and emotional overwhelm. Online therapy serving clients throughout California.";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
};

function buildSocialTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
}

export function buildPageMetadata({
  title,
  description,
  pathname,
}: BuildPageMetadataOptions): Metadata {
  const socialTitle = buildSocialTitle(title);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url: pathname,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
