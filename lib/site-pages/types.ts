import type { Metadata } from "next";

export type JsonLdScript = {
  id: string;
  data: Record<string, unknown>;
};

export type SitePageData = {
  metadata: Metadata;
  jsonLd?: JsonLdScript[];
};

export type CardItem = {
  title: string;
  description: string;
};

export type TitledTextItem = {
  title: string;
  desc: string;
};

export type IconCardItem = {
  title: string;
  desc: string;
  icon: string;
  features?: string[];
};

export type LabelledTextItem = {
  label: string;
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
  schemaName?: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};
