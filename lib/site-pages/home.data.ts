import cozyChair from "@/app/assets/Home/cozy_chair.webp";
import glassesDesk from "@/app/assets/Home/glasses-desk.webp";
import laptopCouch from "@/app/assets/Home/laptop-couch.webp";
import { therapistDeskPortrait } from "@/app/headshots";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  buildWebPageSchema,
  getBusinessId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";
import type { FaqItem } from "@/lib/site-pages/types";

export const homeFaqs: FaqItem[] = [
  {
    question: "How much does therapy cost?",
    answer:
      "Individual therapy sessions are $175 per 50-minute session. I am an out-of-network provider, but I provide superbills for potential insurance reimbursement through PPO plans. I accept credit cards, debit cards, and HSA/FSA cards.",
    schemaName: "How much does therapy cost at EDH Therapy?",
  },
  {
    question: "Do you offer in-person or online sessions?",
    answer:
      "All sessions are conducted online via secure, HIPAA-compliant video. This allows me to serve clients throughout California with greater flexibility and accessibility - no commute or waiting room required.",
    schemaName: "Do you offer in-person or online therapy sessions?",
  },
  {
    question: "What issues do you help with?",
    answer:
      "I specialize in anxiety, depression, relationship challenges, life transitions, self-esteem, codependency, boundaries, grief, divorce, parenting support, and family dynamics. If you're unsure whether I can help with your specific concern, I'm happy to discuss it during a free consultation.",
    schemaName: "What issues does Meagan Murray help with?",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free 15-minute consultation call using the button on this page. During the call, we'll talk about what you're looking for and whether we're a good fit. If so, we'll schedule your first full session.",
    schemaName: "How do I get started with therapy at EDH Therapy?",
  },
];

const homePageTitle = "Online Therapy in California";
const homePageDescription =
  "EDH Therapy offers online therapy for individuals, couples, teens, and families throughout California, with support for anxiety, relationships, and life transitions.";
const homePageUrl = buildPageUrl("/");
const therapistDeskImageUrl = buildPageUrl(therapistDeskPortrait);
const businessReference = {
  "@id": getBusinessId(),
};

const webPageSchema = {
  ...buildWebPageSchema({
    pathname: "/",
    name: homePageTitle,
    description: homePageDescription,
    about: businessReference,
    mainEntity: businessReference,
  }),
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: therapistDeskImageUrl,
  },
  image: [therapistDeskImageUrl],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${homePageUrl}#faqpage`,
  url: homePageUrl,
  name: "EDH Therapy Frequently Asked Questions",
  about: businessReference,
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.schemaName,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbSchema = buildBreadcrumbSchema("/", [
  { name: "Home", pathname: "/" },
]);

export const homePageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: homePageTitle,
    description: homePageDescription,
    pathname: "/",
    imageAlt:
      "Meagan Murray, AMFT - online therapist serving clients throughout California",
  }),
  jsonLd: [
    { id: "homepage-webpage-jsonld", data: webPageSchema },
    { id: "homepage-faq-jsonld", data: faqSchema },
    { id: "homepage-breadcrumb-jsonld", data: breadcrumbSchema },
  ],
  hero: {
    minHeight: "screen",
    eyebrow: "Online Therapy Throughout California · Meagan Murray, AMFT",
    title: [
      { text: "Therapist in El Dorado Hills, CA" },
      { text: "- Compassionate Therapy for Growth", accent: true },
    ],
    description: [
      {
        text: "Meagan Murray, AMFT",
        href: "/about",
        className:
          "font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft",
      },
      " provides compassionate online therapy for individuals, couples, teens, and families in El Dorado Hills and throughout California. Whether you're navigating anxiety, relationship challenges, depression, or a major life transition, therapy can help you find clarity, build connection, and move forward with confidence.",
    ],
    ctas: [
      {
        label: "Book a Free Consultation",
        href: "/contact",
        variant: "primary",
      },
      { label: "Learn More", href: "/services", variant: "secondary" },
    ],
    image: {
      src: therapistDeskPortrait,
      alt: "Meagan Murray, AMFT - online therapist in El Dorado Hills, CA during a telehealth session",
      priority: true,
      unoptimized: true,
      sizes: "(min-width: 1024px) 40vw, 80vw",
      objectClassName: "object-cover object-center",
    },
  },
  sections: [
    {
      type: "text-image",
      surface: "cream-dark",
      eyebrow: "Welcome",
      title: [{ text: "Everyone Deserves a Safe Space" }],
      paragraphs: [
        [
          "My approach is warm, collaborative, and human-centered - designed to support you in understanding yourself deeply and feeling more grounded in your life and relationships.",
        ],
        [
          "Therapy is a place to slow down, reflect, and reconnect with your strengths. Together, we work toward greater emotional resilience, clarity, and confidence.",
        ],
        [
          "As an Associate Marriage and Family Therapist based in El Dorado Hills, I integrate evidence-based modalities like Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), and mindfulness to create a therapeutic experience tailored to your needs.",
        ],
      ],
      image: {
        src: glassesDesk,
        alt: "Warm therapy workspace - EDH Therapy, El Dorado Hills, California",
        className: "aspect-[3/4] max-w-md mx-auto",
        sizes: "(min-width: 1024px) 40vw, 100vw",
      },
      imageFirst: true,
      divider: true,
    },
    {
      type: "split-cards",
      surface: "cream",
      eyebrow: "Who I Work With",
      title: [{ text: "Supporting You Through Life's Challenges" }],
      description: [
        "Whether you're experiencing a major life transition or simply feeling stuck, therapy can support meaningful change. I work with individuals at many stages of life, as well as couples and families seeking stronger connection.",
      ],
      image: {
        src: cozyChair,
        alt: "Comfortable and safe therapy setting for individuals, couples, and families",
        className: "aspect-[16/9]",
        sizes: "(min-width: 1024px) 50vw, 100vw",
      },
      linkedCards: true,
      cards: [
        {
          title: "Adults",
          description: "Individual therapy for adults ages 18 and older.",
          href: "/services",
        },
        {
          title: "Teens",
          description: "Adolescent therapy for ages 13-17.",
          href: "/services",
        },
        {
          title: "Couples",
          description: "Relationship, premarital, and reconnection therapy.",
          href: "/services",
        },
        {
          title: "Families",
          description:
            "Family systems, parent-child dynamics, and transitions.",
          href: "/services",
        },
      ],
    },
    {
      type: "card-grid",
      surface: "linen",
      eyebrow: "Specialties",
      title: [{ text: "Areas of Support" }],
      description: [
        "These are some of the challenges I help clients navigate. If you don't see your concern listed, reach out - I'm happy to discuss whether therapy with me might be a good fit.",
      ],
      cardVariant: "compact",
      cards: [
        "Anxiety & Stress",
        "Relationship Challenges",
        "Life Transitions",
        "Depression & Low Mood",
        "Self-Esteem & Identity",
        "Grief & Loss",
        "Divorce & Separation",
        "Parenting Support",
        "Codependency & Boundaries",
      ].map((title) => ({
        title,
        description: "",
        href: "/services",
      })),
      linkedCards: true,
    },
    {
      type: "list-panel",
      id: "approach",
      surface: "cream",
      eyebrow: "My Approach",
      title: [{ text: "Evidence-Based & Collaborative Therapy" }],
      description: [
        "Treatment is always tailored to your needs, values, and goals. I draw from several evidence-based modalities to provide the support that works best for you - because no two clients are alike, and no single approach fits everyone.",
      ],
      items: [
        {
          label: "CBT",
          title: "Cognitive Behavioral Therapy",
          description:
            "Identify and shift unhelpful thought patterns that drive anxiety, depression, and stress.",
        },
        {
          label: "EFT",
          title: "Emotionally Focused Therapy",
          description:
            "Strengthen emotional bonds and build secure attachment in relationships.",
        },
        {
          label: "Mindfulness",
          title: "Mindfulness-Based Therapy",
          description:
            "Cultivate present-moment awareness to reduce overwhelm and increase emotional regulation.",
        },
        {
          label: "Narrative",
          title: "Narrative Therapy",
          description:
            "Reframe your story, separate yourself from the problem, and find new meaning in your experiences.",
        },
        {
          label: "Person-Centered",
          title: "Person-Centered & Strength-Based Approaches",
          description:
            "Build on your existing strengths, inner wisdom, and capacity for growth.",
        },
        {
          label: "Family Systems",
          title: "Family Systems Work",
          description:
            "Understand and improve patterns within family relationships and dynamics.",
        },
      ],
    },
    {
      type: "dark-steps",
      eyebrow: "What to Expect",
      title: "Your First Steps in Therapy",
      description: [
        "Starting therapy can feel vulnerable - but your first step doesn't have to be overwhelming. Here's what the process looks like when you work with me.",
      ],
      steps: [
        {
          title: "Explore",
          description:
            "We start by understanding what's bringing you to therapy - what feels hard, what feels stuck, and what you're hoping to change.",
        },
        {
          title: "Clarify",
          description:
            "Together, we define how you want your life to feel and set goals that are meaningful to you.",
        },
        {
          title: "Identify",
          description:
            "We uncover the patterns, beliefs, and emotional blocks that may be keeping you from moving forward.",
        },
        {
          title: "Build",
          description:
            "You develop practical tools for emotional resilience, healthier relationships, and lasting confidence.",
        },
      ],
      footer:
        "The goal is to create a supportive space where you feel seen, understood, and empowered to grow.",
    },
    {
      type: "feature-cards",
      surface: "cream",
      cards: [
        {
          tone: "sage",
          title: "Online Therapy Throughout California",
          icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          image: {
            src: laptopCouch,
            alt: "Online therapy session on laptop - HIPAA-compliant telehealth throughout California",
            width: 96,
            height: 96,
          },
          description: [
            [
              "All sessions are held via secure, HIPAA-compliant video - offering privacy, flexibility, and ease from wherever you are in California. No commute, no waiting room. Just a quiet space and a stable internet connection.",
            ],
          ],
          tags: ["Secure", "Private", "Flexible"],
        },
        {
          tone: "terracotta",
          title: "Fees & Insurance",
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          price: {
            amount: "$175",
            label: "per 50-minute session",
          },
          description: [
            [
              "I am an out-of-network provider, which means I don't bill insurance directly. However, I provide superbills - detailed receipts you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network mental health benefits. I accept credit cards, debit cards, and HSA/FSA cards. Payment is collected at the time of each session.",
            ],
          ],
        },
      ],
    },
    {
      type: "faq-list",
      surface: "cream-dark",
      eyebrow: "Common Questions",
      title: "Frequently Asked Questions About Therapy",
      faqs: homeFaqs,
      footer: {
        before: "Have more questions? Visit the",
        linkLabel: "FAQs page",
        href: "/faqs",
        after: ".",
      },
    },
    {
      type: "cta",
      id: "book",
      surface: "cream-dark",
      eyebrow: "Ready to Begin?",
      title: [{ text: "Book a Free 15-Minute Consultation" }],
      description: [
        "If you're ready to explore whether therapy is the right fit, I'd love to hear from you. The consultation is free, and there's no pressure - just a conversation about what you're going through and how I can help.",
      ],
      ctas: [
        {
          label: "Book a Free Consultation",
          href: "/contact",
          variant: "primary",
        },
      ],
      directContact: {
        label: "Prefer to reach out directly?",
        phone: "916-500-4431",
        phoneHref: "tel:9165004431",
        emailLabel: "Email",
        emailHref: "mailto:contact@edhtherapy.com",
      },
    },
  ],
};
