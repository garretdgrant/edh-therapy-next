import {
  buildBreadcrumbSchema,
  buildPageUrl,
  getBusinessId,
  getWebSiteId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import type {
  ContractPageData,
  SimpleCard,
} from "@/lib/site-pages/page-content.types";

const contactPageUrl = buildPageUrl("/contact");
const businessId = getBusinessId();

export const contactCards: Array<{
  type: "phone" | "email" | "location";
  label: string;
  value: string;
  href?: string;
  note?: string;
  iconPaths: string[];
  toneClassName: string;
}> = [
  {
    type: "phone",
    label: "Phone",
    value: "916-500-4431",
    href: "tel:9165004431",
    iconPaths: [
      "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    ],
    toneClassName: "bg-sage-soft/30 group-hover:bg-sage-soft/50",
  },
  {
    type: "email",
    label: "Email",
    value: "contact@edhtherapy.com",
    href: "mailto:contact@edhtherapy.com",
    iconPaths: [
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    ],
    toneClassName: "bg-terracotta-soft/30 group-hover:bg-terracotta-soft/50",
  },
  {
    type: "location",
    label: "Location",
    value: "El Dorado Hills, California",
    note: "Online sessions throughout CA",
    iconPaths: [
      "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      "M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    ],
    toneClassName: "bg-linen",
  },
];

export const contactInfoCards: SimpleCard[] = [
  {
    title: "Free Consultation",
    description:
      "Book a complimentary 15-minute call to discuss your needs and determine if we're a good fit before committing to therapy.",
    tone: "sage",
    icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Quick Response",
    description:
      "I respond to all inquiries within 1-2 business days. For urgent matters, please call directly.",
    tone: "terracotta",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Confidential & Secure",
    description:
      "All communications are handled with care and confidentiality. Your privacy is my priority.",
    tone: "linen",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
];

export const contactPaymentItems = [
  "50-minute individual sessions",
  "Superbills provided",
  "HSA/FSA accepted",
];

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "@id": `${contactPageUrl}#consultation-contact`,
  contactType: "therapy consultation",
  telephone: "+1-916-500-4431",
  email: "contact@edhtherapy.com",
  url: contactPageUrl,
  areaServed: {
    "@type": "State",
    name: "California",
  },
  availableLanguage: "en-US",
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${contactPageUrl}#webpage`,
  name: "Contact EDH Therapy",
  url: contactPageUrl,
  description:
    "Contact EDH Therapy to schedule a free 15-minute consultation for online therapy in California. Sessions are offered by telehealth only.",
  inLanguage: "en-US",
  isPartOf: {
    "@id": getWebSiteId(),
  },
  about: {
    "@id": businessId,
  },
  mainEntity: {
    "@id": `${contactPageUrl}#consultation-contact`,
  },
};

const breadcrumbSchema = buildBreadcrumbSchema("/contact", [
  { name: "Home", pathname: "/" },
  { name: "Contact", pathname: "/contact" },
]);

export const contactPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Book a Free Therapy Consultation",
    description:
      "Contact EDH Therapy to schedule a free 15-minute consultation for online therapy in California. Sessions are offered by telehealth only.",
    pathname: "/contact",
    imageAlt: "Contact EDH Therapy for online therapy in California",
  }),
  jsonLd: [
    { id: "contact-page-jsonld", data: contactPageSchema },
    { id: "contact-point-jsonld", data: contactPointSchema },
    { id: "contact-breadcrumb-jsonld", data: breadcrumbSchema },
  ],
  hero: {
    minHeight: "contact",
    eyebrow: "Get in Touch",
    title: [{ text: "Let's" }, { text: "connect", accent: true }],
    description: [
      "Ready to take the first step? Schedule a free 15-minute consultation to discuss your needs and see if we're a good fit. I typically respond within 1-2 business days.",
    ],
    contactCards,
    form: {
      title: "Send a Message",
      description: "Fill out the form below and I'll be in touch soon.",
    },
  },
  sections: [
    {
      type: "contact-info-grid",
      cards: contactInfoCards,
    },
    {
      type: "crisis",
      title: "Crisis Resources",
      icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
      text: [
        "If you are experiencing a mental health crisis or emergency, please call ",
        { text: "988", strong: true, className: "text-cream" },
        " (Suicide & Crisis Lifeline) or go to your nearest emergency room. Online therapy is not appropriate for crisis situations.",
      ],
    },
    {
      type: "payment",
      eyebrow: "Insurance & Payment",
      title: [
        { text: "Investment in" },
        { text: "your wellbeing", accent: true },
      ],
      description: [
        "I am an out-of-network provider. This means I don't bill insurance directly, but I provide superbills for potential reimbursement based on your plan's out-of-network benefits.",
      ],
      price: {
        amount: "$175",
        label: "per session",
      },
      items: contactPaymentItems,
    },
  ],
};
