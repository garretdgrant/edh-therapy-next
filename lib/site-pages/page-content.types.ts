import type { Metadata } from "next";
import type { StaticImageData } from "next/image";
import type { JsonLdScript } from "@/lib/site-pages/types";

export type ImageSource = string | StaticImageData;

export type InlineTextSegment =
  | string
  | {
      text: string;
      href?: string;
      strong?: boolean;
      className?: string;
    };

export type PageImage = {
  src: ImageSource;
  alt: string;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
  className?: string;
  objectClassName?: string;
  width?: number;
  height?: number;
};

export type PageCta = {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "text";
  icon?: "arrow" | "phone" | "email" | "check";
};

export type PageTitle = Array<{
  text: string;
  accent?: boolean;
}>;

export type NumberedCard = {
  step?: string;
  title: string;
  description?: string;
  desc?: string;
  href?: string;
  icon?: string;
  features?: string[];
};

export type SimpleCard = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: string;
  iconPaths?: string[];
  tone?: "sage" | "terracotta" | "linen";
};

export type ContactCard = {
  label: string;
  value: string;
  href?: string;
  note?: string;
  iconPaths: string[];
  toneClassName: string;
};

export type HeroContent = {
  eyebrow: string;
  title: PageTitle;
  description: InlineTextSegment[];
  minHeight?: "screen" | "standard" | "contact";
  ctas?: PageCta[];
  image?: PageImage;
  contactCards?: ContactCard[];
  form?: {
    title: string;
    description: string;
  };
};

export type TextImageSection = {
  type: "text-image";
  id?: string;
  surface: "cream" | "cream-dark";
  eyebrow: string;
  title: PageTitle;
  paragraphs: InlineTextSegment[][];
  image?: PageImage;
  imageFirst?: boolean;
  divider?: boolean;
};

export type CardGridSection = {
  type: "card-grid";
  id?: string;
  surface: "cream" | "cream-dark" | "linen";
  eyebrow?: string;
  title: PageTitle;
  description?: InlineTextSegment[];
  cards: NumberedCard[];
  columns?: 2 | 3 | 4;
  linkedCards?: boolean;
  cardVariant?: "plain" | "icon" | "compact";
};

export type SplitCardsSection = {
  type: "split-cards";
  id?: string;
  surface: "cream";
  eyebrow: string;
  title: PageTitle;
  description: InlineTextSegment[];
  image?: PageImage;
  cards: NumberedCard[];
  linkedCards?: boolean;
};

export type ListPanelSection = {
  type: "list-panel";
  id?: string;
  surface: "cream";
  eyebrow: string;
  title: PageTitle;
  description: InlineTextSegment[];
  items: Array<{
    label?: string;
    name?: string;
    title?: string;
    full?: string;
    description?: string;
    desc?: string;
  }>;
};

export type DarkStepsSection = {
  type: "dark-steps";
  eyebrow: string;
  title: string;
  description: InlineTextSegment[];
  steps: NumberedCard[];
  footer?: string;
};

export type FeatureCardsSection = {
  type: "feature-cards";
  surface: "cream";
  cards: Array<{
    title: string;
    description: InlineTextSegment[][];
    icon: string;
    tone: "sage" | "terracotta";
    image?: PageImage;
    tags?: string[];
    price?: {
      amount: string;
      label: string;
    };
  }>;
};

export type FaqSection = {
  type: "faq-list";
  surface: "cream-dark";
  eyebrow: string;
  title: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  footer?: {
    before: string;
    linkLabel: string;
    href: string;
    after: string;
  };
};

export type CtaSection = {
  type: "cta";
  id?: string;
  surface: "cream" | "cream-dark";
  eyebrow: string;
  title: PageTitle;
  description: InlineTextSegment[];
  ctas: PageCta[];
  directContact?: {
    label: string;
    phone: string;
    phoneHref: string;
    emailLabel: string;
    emailHref: string;
  };
};

export type CredentialsSection = {
  type: "credentials";
  eyebrow: string;
  title: string;
  cards: Array<{
    title: string;
    icon: string[];
    tone: "sage" | "terracotta";
    entries: Array<{
      title: string;
      detail: string;
    }>;
  }>;
  training: {
    title: string;
    description: string;
    items: string[];
  };
};

export type ContactInfoGridSection = {
  type: "contact-info-grid";
  cards: SimpleCard[];
};

export type CrisisSection = {
  type: "crisis";
  title: string;
  text: InlineTextSegment[];
  icon: string;
};

export type PaymentSection = {
  type: "payment";
  eyebrow: string;
  title: PageTitle;
  description: InlineTextSegment[];
  price: {
    amount: string;
    label: string;
  };
  items: string[];
};

export type FaqCategoriesSection = {
  type: "faq-categories";
  categories: Array<{
    category: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  }>;
};

export type ThankYouSection = {
  type: "thank-you";
  eyebrow: string;
  title: PageTitle;
  paragraphs: InlineTextSegment[][];
  ctas: PageCta[];
  aside: {
    eyebrow: string;
    title: string;
    icon: string;
    steps: SimpleCard[];
    contactEyebrow: string;
    contactHref: string;
    contactLabel: string;
  };
};

export type ComingSoonSection = {
  type: "coming-soon";
  brand: string;
  subbrand: string;
  badge: string;
  eyebrow: string;
  title: PageTitle;
  description: string;
  meantime: {
    eyebrow: string;
    text: string;
  };
  support: {
    eyebrow: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
  };
  highlights: SimpleCard[];
  images: {
    portrait: PageImage;
    moodboard: PageImage[];
  };
  status: {
    eyebrow: string;
    title: string;
    items: string[];
  };
};

export type PageSection =
  | TextImageSection
  | CardGridSection
  | SplitCardsSection
  | ListPanelSection
  | DarkStepsSection
  | FeatureCardsSection
  | FaqSection
  | CtaSection
  | CredentialsSection
  | ContactInfoGridSection
  | CrisisSection
  | PaymentSection
  | FaqCategoriesSection
  | ThankYouSection
  | ComingSoonSection;

export type ContractPageData = {
  template: "site" | "standalone";
  metadata: Metadata;
  jsonLd?: JsonLdScript[];
  className?: string;
  mainClassName?: string;
  hero?: HeroContent;
  sections: PageSection[];
};
