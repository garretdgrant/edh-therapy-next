import { therapistChairPortrait } from "@/app/headshots";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  buildWebPageSchema,
  getBusinessId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";
import type { TitledTextItem } from "@/lib/site-pages/types";

const servicesPageUrl = buildPageUrl("/services");
const businessId = getBusinessId();

const therapyServiceCards = [
  {
    title: "Individual Therapy",
    desc: "One-on-one support for anxiety, depression, self-esteem, identity exploration, and navigating life transitions. A space just for you.",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    features: ["Adults 18+", "Teens 13-17", "Weekly sessions"],
  },
  {
    title: "Couples Therapy",
    desc: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    features: ["Premarital", "Conflict resolution", "Reconnection"],
  },
  {
    title: "Family Therapy",
    desc: "Work through family dynamics, improve communication patterns, and rebuild trust within your family system.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    features: ["Parent-child", "Blended families", "Transitions"],
  },
];

const therapyModalities = [
  {
    name: "CBT",
    full: "Cognitive Behavioral Therapy",
    desc: "Identify and change unhelpful thought patterns",
  },
  {
    name: "EFT",
    full: "Emotionally Focused Therapy",
    desc: "Strengthen emotional bonds in relationships",
  },
  {
    name: "Mindfulness",
    full: "Mindfulness-Based Approaches",
    desc: "Cultivate present-moment awareness",
  },
  {
    name: "Narrative",
    full: "Narrative Therapy",
    desc: "Reframe your story and find new meaning",
  },
  {
    name: "Family Systems",
    full: "Family Systems Theory",
    desc: "Understand patterns within family dynamics",
  },
  {
    name: "Person-Centered",
    full: "Strength-Based & Person-Centered",
    desc: "Build on your existing strengths and wisdom",
  },
];

const supportIssues = [
  {
    title: "Anxiety & Stress",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Depression & Low Mood",
    icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
  },
  {
    title: "Relationship Challenges",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Self-Esteem & Identity",
    icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Life Transitions",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Codependency & Boundaries",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Divorce & Separation",
    icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
  },
  {
    title: "Parenting Challenges",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Grief & Loss",
    icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const serviceItems: TitledTextItem[] = [
  {
    title: "Online Individual Therapy",
    desc: "One-on-one online therapy for anxiety, depression, self-esteem, identity exploration, and life transitions.",
  },
  {
    title: "Online Couples Therapy",
    desc: "Online relationship therapy for communication, conflict resolution, premarital support, and emotional reconnection.",
  },
  {
    title: "Online Family Therapy",
    desc: "Online family therapy for family dynamics, parent-child communication, blended families, transitions, and rebuilding trust.",
  },
  {
    title: "Online Teen Therapy",
    desc: "Online adolescent therapy for ages 13-17 addressing anxiety, self-esteem, school stress, and family conflict.",
  },
  {
    title: "Anxiety Support",
    desc: "Online therapy support for anxiety, stress, overwhelm, and emotional regulation.",
  },
  {
    title: "Relationship Challenges",
    desc: "Online therapy for relationship challenges, boundaries, communication, and connection.",
  },
  {
    title: "Life Transitions",
    desc: "Online therapy for life transitions, identity shifts, divorce, separation, and parenting changes.",
  },
  {
    title: "Depression Support",
    desc: "Online therapy support for depression, low mood, and emotional disconnection.",
  },
  {
    title: "Self-Esteem",
    desc: "Online therapy for self-esteem, identity, confidence, and personal growth.",
  },
  {
    title: "Grief and Loss",
    desc: "Online therapy support for grief, loss, and emotionally difficult transitions.",
  },
  {
    title: "Family Dynamics",
    desc: "Online therapy for family systems, communication patterns, and parent-child dynamics.",
  },
];

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${servicesPageUrl}#therapy-services`,
  name: "Online Therapy Services",
  url: servicesPageUrl,
  itemListElement: serviceItems.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      serviceType: "Online mental health therapy",
      provider: { "@id": businessId },
      areaServed: { "@type": "State", name: "California" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: servicesPageUrl,
        serviceLocation: {
          "@type": "VirtualLocation",
          name: "Telehealth therapy sessions",
          url: servicesPageUrl,
        },
      },
    },
  })),
};

const medicalTherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "@id": `${servicesPageUrl}#online-therapy`,
  name: "Online Therapy",
  description:
    "Telehealth therapy for individuals, couples, teens, and families throughout California.",
  provider: { "@id": businessId },
  areaServed: { "@type": "State", name: "California" },
};

const servicesPageSchema = buildWebPageSchema({
  pathname: "/services",
  name: "Online Therapy Services in California",
  description:
    "Online individual therapy, couples therapy, family therapy, teen therapy, and mental health support areas offered by EDH Therapy.",
  about: { "@id": businessId },
  mainEntity: { "@id": `${servicesPageUrl}#therapy-services` },
});

const breadcrumbSchema = buildBreadcrumbSchema("/services", [
  { name: "Home", pathname: "/" },
  { name: "Services", pathname: "/services" },
]);

export const servicesPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Online Therapy Services in California",
    description:
      "Explore online individual therapy, couples therapy, family therapy, and teen therapy for California clients navigating anxiety, grief, relationships, and life transitions.",
    pathname: "/services",
    imageAlt: "EDH Therapy online therapy services for California clients",
  }),
  jsonLd: [
    { id: "services-page-jsonld", data: servicesPageSchema },
    { id: "services-offer-catalog-jsonld", data: offerCatalogSchema },
    { id: "services-medical-therapy-jsonld", data: medicalTherapySchema },
    { id: "services-breadcrumb-jsonld", data: breadcrumbSchema },
  ],
  hero: {
    eyebrow: "Therapy Services",
    title: [
      { text: "Personalized" },
      { text: "therapy", accent: true },
      { text: "for change" },
    ],
    description: [
      "Whether you're seeking individual support or relationship guidance, therapy is tailored to your goals, values, and lived experience. Together, we'll find the approach that works for you.",
    ],
    ctas: [
      {
        label: "Book a Free Consultation",
        href: "/contact",
        variant: "primary",
      },
      { label: "View Approaches", href: "#modalities", variant: "secondary" },
    ],
    image: {
      src: therapistChairPortrait,
      alt: "Therapist seated in a calm studio space",
      priority: true,
      unoptimized: true,
      objectClassName: "object-cover object-[center_top]",
    },
  },
  sections: [
    {
      type: "card-grid",
      surface: "cream-dark",
      eyebrow: "What I Offer",
      title: [{ text: "Types of Therapy" }],
      description: [
        "Each therapeutic journey is unique. I offer support across several formats to meet you where you are.",
      ],
      columns: 3,
      cardVariant: "icon",
      cards: therapyServiceCards,
    },
    {
      type: "list-panel",
      id: "modalities",
      surface: "cream",
      eyebrow: "Therapy Modalities",
      title: [{ text: "Evidence-based" }, { text: "approaches", accent: true }],
      description: [
        "Treatment is customized to your needs, drawing from a blend of modalities that support insight, skills, and emotional resilience. I meet you where you are.",
      ],
      items: therapyModalities,
    },
    {
      type: "card-grid",
      surface: "linen",
      eyebrow: "Areas of Support",
      title: [{ text: "You don't have to carry it alone" }],
      description: [
        "These are some of the challenges I commonly help clients navigate. If you don't see your concern listed, please reach out.",
      ],
      cardVariant: "compact",
      cards: supportIssues.map((issue) => ({
        title: issue.title,
        description: "",
        icon: issue.icon,
      })),
    },
    {
      type: "dark-steps",
      eyebrow: "The Process",
      title: "How Therapy Works",
      description: [
        "A clear, supportive process designed to help you feel comfortable from the very first step.",
      ],
      steps: [
        {
          step: "01",
          title: "Free Consultation",
          desc: "A 15-minute call to discuss your needs and see if we're a good fit",
        },
        {
          step: "02",
          title: "Intake Session",
          desc: "Your first full session to explore your history and goals",
        },
        {
          step: "03",
          title: "Regular Sessions",
          desc: "Weekly or bi-weekly meetings tailored to your schedule",
        },
        {
          step: "04",
          title: "Ongoing Growth",
          desc: "Continuous assessment and adjustment as you progress",
        },
      ],
    },
    {
      type: "feature-cards",
      surface: "cream",
      cards: [
        {
          tone: "sage",
          title: "Telehealth Sessions",
          icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
          description: [
            [
              "Sessions are held through secure, confidential video to provide flexibility and privacy wherever you are in California. No commute, no waiting room.",
            ],
          ],
          tags: ["Secure", "Private", "Convenient", "California-wide"],
        },
        {
          tone: "terracotta",
          title: "Fees & Insurance",
          icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
          price: { amount: "$175", label: "per 50-min session" },
          description: [
            [
              "I am an out-of-network provider. Superbills are available for potential reimbursement depending on your insurance plan.",
            ],
          ],
        },
      ],
    },
    {
      type: "cta",
      id: "book",
      surface: "cream-dark",
      eyebrow: "Ready to Start?",
      title: [{ text: "Take the first step" }, { text: "toward change" }],
      description: [
        "Book a free 15-minute consultation to discuss your goals and see if we're a good fit. No pressure, just a conversation.",
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
