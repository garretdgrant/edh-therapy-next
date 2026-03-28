import type { Metadata } from "next";
import { getSiteUrl } from "./site-url";

const DEFAULT_OG_IMAGE_PATH = "/edh-therapy-og-image.jpg";

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
}: BuildPageMetadataOptions): Metadata {
  const url = new URL(pathname, getSiteUrl()).toString();

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "EDH Therapy",
      images: [
        {
          url: DEFAULT_OG_IMAGE_PATH,
          width: 1200,
          height: 800,
          alt: "EDH Therapy Open Graph image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
  };
}
