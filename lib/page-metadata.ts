import type { Metadata } from "next";

export const SITE_NAME = "EDH Therapy";
export const DEFAULT_SITE_DESCRIPTION =
  "EDH Therapy is an El Dorado Hills-based online therapy practice offering telehealth therapy for clients throughout California.";

export const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "EDH Therapy online therapy in California",
};

export const DEFAULT_TWITTER_IMAGE = {
  url: "/twitter-image.jpg",
  alt: "EDH Therapy online therapy in California",
};

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  imageAlt?: string;
  noindex?: boolean;
};

function buildSocialTitle(title: string): string {
  return title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
}

export function buildPageMetadata({
  title,
  description,
  pathname,
  imageAlt,
  noindex = false,
}: BuildPageMetadataOptions): Metadata {
  const socialTitle = buildSocialTitle(title);
  const ogImage = {
    ...DEFAULT_OG_IMAGE,
    alt: imageAlt ?? DEFAULT_OG_IMAGE.alt,
  };
  const twitterImage = {
    ...DEFAULT_TWITTER_IMAGE,
    alt: imageAlt ?? DEFAULT_TWITTER_IMAGE.alt,
  };

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    robots: {
      index: !noindex,
      follow: true,
      googleBot: {
        index: !noindex,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: pathname,
      title: socialTitle,
      description,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [twitterImage],
    },
  };
}
