import greenTrail from "@/app/assets/About/green-trail.webp";
import officeCorner from "@/app/assets/About/office-corner.webp";
import { therapistSeatedStoolPortrait } from "@/app/headshots";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  buildWebPageSchema,
  getBusinessId,
  getPersonId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

const aboutPageUrl = buildPageUrl("/about");
const personId = getPersonId();
const businessId = getBusinessId();

const trainingModalities = [
  "CBT",
  "Emotionally Focused Therapy",
  "Mindfulness-Based",
  "Narrative Therapy",
  "Family Systems",
  "Strength-Based",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": personId,
  name: "Meagan Murray",
  honorificSuffix: "AMFT",
  jobTitle: "Associate Marriage & Family Therapist",
  url: aboutPageUrl,
  image: buildPageUrl(therapistSeatedStoolPortrait),
  email: "contact@edhtherapy.com",
  telephone: "+1-916-500-4431",
  address: {
    "@type": "PostalAddress",
    addressLocality: "El Dorado Hills",
    addressRegion: "CA",
    addressCountry: "US",
  },
  description:
    "Meagan Murray, AMFT, offers collaborative online therapy to individuals, couples, teens, and families throughout California.",
  worksFor: {
    "@id": businessId,
  },
  mainEntityOfPage: {
    "@id": `${aboutPageUrl}#webpage`,
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of San Francisco" },
    { "@type": "CollegeOrUniversity", name: "University of California, Davis" },
  ],
  knowsAbout: [
    "Cognitive Behavioral Therapy",
    "Emotionally Focused Therapy",
    "Mindfulness-Based Therapy",
    "Narrative Therapy",
    "Family Systems",
    "Strength-Based Therapy",
    "Anxiety Support",
    "Relationship Challenges",
    "Life Transitions",
    "Teen Therapy",
    "Family Therapy",
  ],
};

const aboutPageSchema = buildWebPageSchema({
  pathname: "/about",
  type: "AboutPage",
  name: "About Meagan Murray, AMFT",
  description:
    "Professional background, therapy values, and online therapy approach for Meagan Murray, AMFT.",
  about: { "@id": businessId },
  mainEntity: { "@id": personId },
});

const breadcrumbSchema = buildBreadcrumbSchema("/about", [
  { name: "Home", pathname: "/" },
  { name: "About", pathname: "/about" },
]);

export const aboutPageData: ContractPageData = {
  template: "site",
  mainClassName: "relative",
  metadata: buildPageMetadata({
    title: "About Meagan Murray, AMFT",
    description:
      "Meet Meagan Murray, AMFT, an El Dorado Hills-based therapist offering online therapy throughout California for individuals, couples, teens, and families.",
    pathname: "/about",
    imageAlt:
      "Meagan Murray, AMFT - El Dorado Hills-based online therapist serving California clients",
  }),
  jsonLd: [
    { id: "about-person-jsonld", data: personSchema },
    { id: "about-page-jsonld", data: aboutPageSchema },
    { id: "about-breadcrumb-jsonld", data: breadcrumbSchema },
  ],
  hero: {
    eyebrow: "Meet Your Therapist",
    title: [
      { text: "Hello, I'm" },
      { text: "Meagan Murray", accent: true },
      { text: "AMFT" },
    ],
    description: [
      "I offer collaborative therapy to individuals, couples, and families seeking clarity, emotional safety, and meaningful change. Therapy is a space to feel seen, understood, and supported as you move toward the life you want.",
    ],
    ctas: [
      {
        label: "Book a Free Consultation",
        href: "/contact",
        variant: "primary",
      },
      { label: "My Values", href: "#values", variant: "secondary" },
    ],
    image: {
      src: therapistSeatedStoolPortrait,
      alt: "Therapist seated on a stool in a bright studio",
      priority: true,
      unoptimized: true,
      objectClassName: "object-cover object-[center_top]",
    },
  },
  sections: [
    {
      type: "text-image",
      surface: "cream-dark",
      eyebrow: "Why I Do This Work",
      title: [
        { text: "Therapy as a space for" },
        { text: "restoration & growth", accent: true },
      ],
      paragraphs: [
        [
          "I'm passionate about helping people reconnect with their strengths, navigate complex emotions, and build relationships rooted in honesty and care.",
        ],
        [
          "I believe healing happens when we feel safe enough to explore our stories and brave enough to rewrite them.",
        ],
      ],
      image: {
        src: officeCorner,
        alt: "Calm room corner with soft natural light",
      },
      divider: true,
    },
    {
      type: "card-grid",
      id: "values",
      surface: "cream",
      eyebrow: "Values & Philosophy",
      title: [{ text: "A grounded, inclusive approach" }],
      description: [
        "These core values guide every session and shape the therapeutic relationship we build together.",
      ],
      cards: [
        {
          title: "Inclusivity",
          description:
            "Creating a welcoming space for all identities, backgrounds, and experiences.",
        },
        {
          title: "Non-judgment",
          description:
            "Meeting you where you are with compassion, not criticism.",
        },
        {
          title: "Curiosity",
          description:
            "Approaching your story with genuine interest and openness.",
        },
        {
          title: "Emotional Safety",
          description:
            "Building a foundation of trust where vulnerability feels possible.",
        },
        {
          title: "Personal Growth",
          description:
            "Supporting your journey toward the person you want to become.",
        },
        {
          title: "Connection",
          description:
            "Fostering meaningful relationships with yourself and others.",
        },
      ],
    },
    {
      type: "credentials",
      eyebrow: "Background",
      title: "Credentials & Experience",
      cards: [
        {
          title: "Education",
          tone: "sage",
          icon: [
            "M12 14l9-5-9-5-9 5 9 5z",
            "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
          ],
          entries: [
            {
              title: "MA in Counseling Psychology",
              detail: "University of San Francisco — 2023",
            },
            {
              title: "BA in Communications",
              detail: "University of California, Davis — 2016",
            },
          ],
        },
        {
          title: "Clinical Credentials",
          tone: "terracotta",
          icon: [
            "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
          ],
          entries: [
            {
              title: "Associate Marriage & Family Therapist",
              detail: "Licensed in California",
            },
            {
              title: "California Telehealth Practice",
              detail:
                "Online therapy sessions for clients throughout California",
            },
          ],
        },
      ],
      training: {
        title: "Training & Modalities",
        description: "Evidence-based approaches tailored to your needs.",
        items: trainingModalities,
      },
    },
    {
      type: "split-cards",
      surface: "cream",
      eyebrow: "Who I Work With",
      title: [
        { text: "Serving individuals," },
        { text: "couples & families", accent: true },
      ],
      description: [
        "I work with clients at various life stages, helping navigate transitions, strengthen relationships, and build emotional resilience.",
      ],
      cards: [
        { title: "Adults", description: "Individual therapy for ages 18+" },
        { title: "Teens", description: "Adolescent support ages 13-17" },
        { title: "Couples", description: "Relationship & premarital therapy" },
        { title: "Families", description: "Family systems & dynamics" },
      ],
    },
    {
      type: "text-image",
      surface: "cream-dark",
      eyebrow: "Personal Note",
      title: [
        { text: "A little about me" },
        { text: "outside of therapy", accent: true },
      ],
      paragraphs: [
        [
          "When I'm not in session, you can find me exploring local trails, trying new coffee shops, or reading about creativity and resilience. I value the small moments that help us feel grounded and connected.",
        ],
        [
          "I believe that who we are as people influences how we show up as therapists — and I bring my whole self to this work.",
        ],
      ],
      image: {
        src: greenTrail,
        alt: "Green forest trail in soft light",
        className: "aspect-[16/10]",
      },
      imageFirst: true,
      divider: true,
    },
    {
      type: "cta",
      id: "book",
      surface: "cream",
      eyebrow: "Ready to Begin?",
      title: [{ text: "Let's see if we're" }, { text: "a good fit" }],
      description: [
        "Book a free 15-minute consultation to explore how therapy could support you. No pressure, just a conversation.",
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
