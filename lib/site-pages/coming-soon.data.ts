import greenTrail from "@/app/assets/About/green-trail.webp";
import officeCorner from "@/app/assets/About/office-corner.webp";
import { therapistChairPortrait } from "@/app/headshots";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";
import type { CardItem } from "@/lib/site-pages/types";

export const comingSoonHighlights: Array<
  CardItem & {
    eyebrow: string;
  }
> = [
  {
    eyebrow: "A gentler arrival",
    title: "A quieter intake experience",
    description:
      "Fresh copy, calmer transitions, and a more grounded first impression are being shaped with care.",
  },
  {
    eyebrow: "More guidance",
    title: "Resources that feel steady",
    description:
      "Supportive educational content and thoughtful next steps are being prepared for clients who want clarity before reaching out.",
  },
  {
    eyebrow: "Same heart, refined",
    title: "The atmosphere is the work",
    description:
      "Every detail is being tuned to feel soft, spacious, and emotionally safe rather than simply finished.",
  },
];

export const comingSoonStatusItems = [
  "Refining message hierarchy",
  "Preparing softer visual storytelling",
  "Polishing the call-to-action flow",
];

export const comingSoonPageData: ContractPageData = {
  template: "standalone",
  metadata: buildPageMetadata({
    title: "Coming Soon",
    description:
      "This EDH Therapy page is being prepared and will be available soon.",
    pathname: "/coming-soon",
    noindex: true,
  }),
  sections: [
    {
      type: "coming-soon",
      brand: "EDH Therapy",
      subbrand: "Sanctuary In Progress",
      badge: "Under Construction",
      eyebrow: "A calmer space is on the way",
      title: [
        { text: "This page is being" },
        { text: "quietly shaped.", accent: true },
      ],
      description:
        "We are building a softer, more spacious experience here right now. The goal is not just to launch another page, but to create something that feels grounded, clear, and emotionally safe from the first glance.",
      meantime: {
        eyebrow: "In the meantime",
        text: "The rest of the site is still live.",
      },
      support: {
        eyebrow: "Need support now?",
        phone: "916-500-4431",
        phoneHref: "tel:9165004431",
        email: "contact@edhtherapy.com",
        emailHref: "mailto:contact@edhtherapy.com",
      },
      highlights: comingSoonHighlights,
      images: {
        portrait: {
          src: therapistChairPortrait,
          alt: "Therapy portrait in a calm, welcoming setting",
          unoptimized: true,
          sizes: "(min-width: 1024px) 22rem, 100vw",
        },
        moodboard: [
          {
            src: officeCorner,
            alt: "A quiet room corner with soft natural light",
            sizes: "(min-width: 1024px) 10rem, 50vw",
          },
          {
            src: greenTrail,
            alt: "A green trail suggesting calm movement and reflection",
            sizes: "(min-width: 1024px) 10rem, 50vw",
          },
        ],
      },
      status: {
        eyebrow: "Status",
        title: "In progress",
        items: comingSoonStatusItems,
      },
    },
  ],
};
