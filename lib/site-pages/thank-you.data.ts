import { buildPageUrl, getWebSiteId } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { CardItem } from "@/lib/site-pages/types";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

const thankYouPageUrl = buildPageUrl("/contact/thank-you");

const thankYouPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${thankYouPageUrl}#webpage`,
  name: "Thank You | EDH Therapy",
  url: thankYouPageUrl,
  description:
    "Confirmation page for successful contact form submissions to EDH Therapy.",
  inLanguage: "en-US",
  isPartOf: {
    "@id": getWebSiteId(),
  },
};

export const nextSteps: CardItem[] = [
  {
    title: "Response within 1-2 business days",
    description:
      "Your inquiry is in the queue. You can expect a thoughtful reply by email or phone shortly.",
  },
  {
    title: "A brief consultation comes first",
    description:
      "The first step is a free 15-minute consultation to understand your needs and answer questions.",
  },
  {
    title: "Confidentiality stays central",
    description:
      "Your message is handled with care and used only to respond to your inquiry.",
  },
];

export const thankYouPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Thank You",
    description:
      "Thanks for contacting EDH Therapy. Your message has been received and a response will follow within 1-2 business days.",
    pathname: "/contact/thank-you",
    noindex: true,
  }),
  jsonLd: [{ id: "thank-you-page-jsonld", data: thankYouPageSchema }],
  sections: [
    {
      type: "thank-you",
      eyebrow: "Message received",
      title: [
        { text: "Thank you for" },
        { text: "reaching out", accent: true },
      ],
      paragraphs: [
        [
          "Your message has been sent successfully. I'll review your inquiry and follow up within 1-2 business days to talk through next steps.",
        ],
        [
          "If your situation is urgent, please call ",
          {
            text: "916-500-4431",
            href: "tel:9165004431",
            className:
              "font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft",
          },
          ". If you are experiencing a mental health crisis, call ",
          { text: "988", strong: true, className: "text-charcoal" },
          " or go to the nearest emergency room.",
        ],
      ],
      ctas: [
        { label: "Return Home", href: "/", variant: "primary" },
        { label: "Explore Services", href: "/services", variant: "secondary" },
      ],
      aside: {
        eyebrow: "What Happens Next",
        title: "Gentle, clear follow-up",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
        steps: nextSteps,
        contactEyebrow: "Prefer direct contact?",
        contactHref: "mailto:contact@edhtherapy.com",
        contactLabel: "contact@edhtherapy.com",
      },
    },
  ],
};
