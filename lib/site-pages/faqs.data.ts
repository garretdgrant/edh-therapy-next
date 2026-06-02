import {
  buildBreadcrumbSchema,
  buildPageUrl,
  getBusinessId,
  getFaqPageId,
  getWebSiteId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import { therapistStandingPortrait } from "@/app/headshots";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";
import type { FaqCategory } from "@/lib/site-pages/types";

export const faqs: FaqCategory[] = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I schedule my first appointment?",
        answer:
          "You can book a free 15-minute consultation call through the booking button on this site. During this call, we'll discuss your needs and determine if we're a good fit. If so, we'll schedule your first full session.",
      },
      {
        question: "What happens in the first session?",
        answer:
          "The first session is an intake where we explore your history, current challenges, and therapy goals. It's a chance for us to get to know each other and begin building a therapeutic relationship. You can share as much or as little as feels comfortable.",
      },
      {
        question: "How long are therapy sessions?",
        answer:
          "Individual sessions are 50 minutes. Couples and family sessions may be extended to 60-80 minutes depending on your needs.",
      },
    ],
  },
  {
    category: "Online Therapy",
    questions: [
      {
        question: "How does online therapy work?",
        answer:
          "Sessions take place over secure, HIPAA-compliant video. You'll receive a private link before each session and can join from any quiet, comfortable space with a stable internet connection. Many clients find telehealth just as effective as in-person therapy.",
      },
      {
        question: "Do you offer in-person sessions?",
        answer:
          "At this time, all sessions are conducted online via telehealth. This allows me to serve clients throughout California with greater flexibility and accessibility.",
      },
      {
        question: "What if I have technical difficulties during a session?",
        answer:
          "If we get disconnected, I'll attempt to reconnect via video. If that doesn't work, we can continue by phone. Technical issues are rare, but we'll always find a way to complete your session.",
      },
    ],
  },
  {
    category: "Fees & Insurance",
    questions: [
      {
        question: "How much does therapy cost?",
        answer:
          "Individual sessions are $175 per 50-minute session. Couples and family sessions may have different rates based on session length.",
      },
      {
        question: "Do you accept insurance?",
        answer:
          "I am an out-of-network provider. This means I don't bill insurance directly, but I can provide superbills (detailed receipts) that you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network benefits.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "I accept credit cards, debit cards, and HSA/FSA cards. Payment is collected at the time of each session.",
      },
    ],
  },
  {
    category: "The Therapy Process",
    questions: [
      {
        question: "How often should I attend sessions?",
        answer:
          "Most clients start with weekly sessions to build momentum and establish a strong therapeutic relationship. As you progress, we may transition to bi-weekly sessions. We'll decide together based on your goals and needs.",
      },
      {
        question: "How long will I need to be in therapy?",
        answer:
          "The length of therapy varies depending on your goals and challenges. Some clients find benefit in short-term work (8-12 sessions), while others prefer longer-term support. We'll regularly check in about your progress and adjust as needed.",
      },
      {
        question: "What issues do you work with?",
        answer:
          "I specialize in anxiety, relationship challenges, life transitions, depression, self-esteem, boundaries, grief, and family dynamics. If you're unsure whether I can help with your specific concern, please reach out for a consultation.",
      },
    ],
  },
];

const faqPageUrl = buildPageUrl("/faqs");
const businessId = getBusinessId();

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": getFaqPageId("/faqs"),
  url: faqPageUrl,
  name: "Online Therapy FAQs",
  description:
    "Answers to common questions about online therapy, session length, fees, insurance, telehealth, scheduling, and what to expect from EDH Therapy.",
  isPartOf: {
    "@id": getWebSiteId(),
  },
  mainEntityOfPage: {
    "@id": getFaqPageId("/faqs"),
  },
  about: {
    "@id": businessId,
  },
  mainEntity: faqs.flatMap((category) =>
    category.questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

const breadcrumbSchema = buildBreadcrumbSchema("/faqs", [
  { name: "Home", pathname: "/" },
  { name: "FAQs", pathname: "/faqs" },
]);

export const faqsPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Online Therapy FAQs",
    description:
      "Answers to common questions about online therapy, session length, fees, insurance, telehealth, scheduling, and starting therapy with EDH Therapy.",
    pathname: "/faqs",
    imageAlt: "EDH Therapy online therapy frequently asked questions",
  }),
  jsonLd: [
    { id: "faqs-faqpage-jsonld", data: faqSchema },
    { id: "faqs-breadcrumb-jsonld", data: breadcrumbSchema },
  ],
  hero: {
    eyebrow: "Questions & Answers",
    title: [
      { text: "Frequently" },
      { text: "Asked", accent: true },
      { text: "Questions" },
    ],
    description: [
      "Find answers to common questions about therapy, the process, and what to expect. If you don't see your question here, please reach out.",
    ],
    ctas: [
      {
        label: "Still have questions?",
        href: "/contact",
        variant: "primary",
      },
    ],
    image: {
      src: therapistStandingPortrait,
      alt: "Therapist standing in a calm studio space",
      priority: true,
      unoptimized: true,
      objectClassName: "object-cover object-[center_top]",
    },
  },
  sections: [
    {
      type: "faq-categories",
      categories: faqs,
    },
    {
      type: "cta",
      surface: "cream",
      eyebrow: "Need More Information?",
      title: [{ text: "Let's connect" }],
      description: [
        "If you didn't find what you were looking for, I'm happy to answer your questions directly. Book a free consultation or send me a message.",
      ],
      ctas: [
        { label: "Contact Me", href: "/contact", variant: "primary" },
        {
          label: "916-500-4431",
          href: "tel:9165004431",
          variant: "secondary",
          icon: "phone",
        },
      ],
    },
  ],
};
