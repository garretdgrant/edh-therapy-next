import greenTrail from "@/app/assets/About/green-trail.webp";
import officeCorner from "@/app/assets/About/office-corner.webp";
import { therapistSeatedStoolPortrait } from "@/app/headshots";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

export const aboutPageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Meagan Murray, AMFT | El Dorado Hills Therapist",
    description:
      "Meet Meagan Murray, AMFT: an online therapist serving El Dorado Hills & California. Warm, evidence-based care (CBT, EFT) for individuals, couples & families.",
    pathname: "/about",
    imageAlt:
      "Meagan Murray, AMFT, online therapist in El Dorado Hills, California",
  }),
  jsonLd: [
    {
      id: "person",
      data: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Meagan Murray",
        jobTitle: "Associate Marriage and Family Therapist",
        url: "https://www.eldoradohillstherapy.com/about",
        image:
          "https://www.eldoradohillstherapy.com/headshots/optimized/edh-therapy-therapist-seated-stool-portrait.webp",
        telephone: "+1-916-500-4431",
        worksFor: {
          "@type": "Organization",
          name: "EDH Therapy",
          url: "https://www.eldoradohillstherapy.com/",
        },
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "University of San Francisco",
          },
          {
            "@type": "EducationalOrganization",
            name: "University of California, Davis",
          },
        ],
        knowsAbout: [
          "Cognitive Behavioral Therapy",
          "Emotionally Focused Therapy",
          "Mindfulness-Based Therapy",
          "Narrative Therapy",
          "Family Systems Therapy",
          "Strength-Based Therapy",
          "Anxiety",
          "Depression",
          "Couples therapy",
        ],
        areaServed: [
          "El Dorado Hills",
          "Folsom",
          "Cameron Park",
          "Sacramento",
          "Roseville",
          "Granite Bay",
          "California",
        ],
      },
    },
    {
      id: "breadcrumb",
      data: {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.eldoradohillstherapy.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: "https://www.eldoradohillstherapy.com/about",
          },
        ],
      },
    },
    {
      id: "faq",
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are you a licensed therapist?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "I'm a Registered Associate Marriage and Family Therapist (AMFT) in California. That means I've finished my master's degree and I'm building supervised hours toward full licensure. I work under licensed clinical supervision, and you can confirm California registrations on the state license lookup at search.dca.ca.gov.",
            },
          },
          {
            "@type": "Question",
            name: "Who do you work with?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "I see adults, teens ages 13 to 17, couples, and families. I help with anxiety, depression, life changes, and relationship struggles. I'm based in El Dorado Hills and work with clients across California by secure video.",
            },
          },
          {
            "@type": "Question",
            name: "What's your approach?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "I use proven methods and fit them to you. That often means CBT for anxious or stuck thinking, Emotionally Focused Therapy for couples, and mindfulness and narrative tools to help you feel more in control. We go at a pace that feels right for you.",
            },
          },
        ],
      },
    },
  ],
  hero: {
    eyebrow: "Meet Your Therapist",
    title: [{ text: "Hello, I'm Meagan Murray, AMFT" }],
    description: [
      "I'm an online therapist based in El Dorado Hills, and I work with clients across California. I offer collaborative therapy for individuals, couples, and families who want clarity, emotional safety, and real change. My goal is simple: to give you a space where you feel seen, understood, and supported.",
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
      alt: "Meagan Murray, AMFT, online therapist in El Dorado Hills, California",
      priority: true,
      unoptimized: true,
      sizes: "(min-width: 1024px) 40vw, 80vw",
      objectClassName: "object-cover object-center",
    },
  },
  sections: [
    {
      type: "text-image",
      surface: "cream",
      eyebrow: "Why I Do This Work",
      title: [
        { text: "Therapy as a space for " },
        { text: "restoration & growth", accent: true },
      ],
      paragraphs: [
        [
          "I help people reconnect with their strengths, work through hard emotions, and build relationships rooted in honesty and care. In sessions, I listen closely and we move at your pace. You set the direction, and I help you get there.",
        ],
        [
          "I believe healing happens when we feel safe enough to look at our stories, and brave enough to rewrite them. Many of the people I work with come in feeling stuck, anxious, or worn down. Together, we make sense of what's going on and find small, steady steps forward.",
        ],
        [
          "Most of my clients live in El Dorado Hills and nearby towns, and we meet by secure video anywhere in California. You can read more about how I work on my ",
          { text: "therapy services", href: "/services", strong: true },
          " page.",
        ],
      ],
      image: {
        src: officeCorner,
        alt: "Calm therapy office corner with warm natural light",
        className: "aspect-[4/5] max-w-md mx-auto",
        sizes: "(min-width: 1024px) 40vw, 100vw",
      },
      imageFirst: true,
      divider: true,
    },
    {
      type: "card-grid",
      id: "values",
      surface: "cream-dark",
      eyebrow: "Values & Philosophy",
      title: [{ text: "A grounded, inclusive approach" }],
      description: [
        "These values guide every session and shape the work we do together.",
      ],
      columns: 3,
      cardVariant: "plain",
      cards: [
        {
          title: "Inclusivity",
          description:
            "A welcoming space for all identities, backgrounds, and experiences.",
        },
        {
          title: "Non-judgment",
          description:
            "Meeting you where you are with compassion, not criticism.",
        },
        {
          title: "Curiosity",
          description:
            "Approaching your story with real interest and openness.",
        },
        {
          title: "Emotional Safety",
          description: "Building trust so that opening up feels possible.",
        },
        {
          title: "Personal Growth",
          description:
            "Supporting your path toward the person you want to become.",
        },
        {
          title: "Connection",
          description:
            "Helping you build honest relationships with yourself and others.",
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
          icon: [
            "M12 14l9-5-9-5-9 5 9 5z",
            "M12 14l6.16-3.422A12.083 12.083 0 0118 14.5c0 2.485-2.686 4.5-6 4.5s-6-2.015-6-4.5c0-1.39.627-2.635 1.614-3.46L12 14z",
          ],
          tone: "sage",
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
          icon: [
            "M9 12l2 2 4-4",
            "M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z",
          ],
          tone: "terracotta",
          entries: [
            {
              title: "Registered Associate Marriage & Family Therapist",
              detail: "California Board of Behavioral Sciences registration",
            },
            {
              title: "Licensed Clinical Supervision",
              detail: "Supervised clinical practice toward full licensure",
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
        description: "Evidence-based approaches, tailored to what you need.",
        items: [
          "CBT",
          "Emotionally Focused Therapy",
          "Mindfulness-Based",
          "Narrative Therapy",
          "Family Systems",
          "Strength-Based",
        ],
      },
    },
    {
      type: "card-grid",
      surface: "cream",
      eyebrow: "Who I Work With",
      title: [
        { text: "Serving individuals, couples & families in El Dorado Hills" },
      ],
      description: [
        "I work with clients at different life stages — helping with transitions, relationships, and building emotional resilience.",
      ],
      columns: 4,
      cardVariant: "plain",
      cards: [
        {
          title: "Adults",
          description: "Individual therapy for ages 18+",
        },
        {
          title: "Teens",
          description: "Adolescent support, ages 13–17",
        },
        {
          title: "Couples",
          description: "Relationship & premarital therapy",
        },
        {
          title: "Families",
          description: "Family systems & dynamics",
        },
      ],
    },
    {
      type: "text-image",
      surface: "cream",
      eyebrow: "Personal Note",
      title: [
        { text: "A little about me " },
        { text: "outside of therapy", accent: true },
      ],
      paragraphs: [
        [
          "When I'm not in session, you can find me out on local trails, trying new coffee shops, or reading about creativity and resilience. I notice the small moments that keep us grounded and connected.",
        ],
        [
          "I believe who we are as people shapes how we show up as therapists. I bring my whole self to this work, and I'll meet you as a whole person too.",
        ],
      ],
      image: {
        src: greenTrail,
        alt: "Green walking trail in El Dorado Hills, California",
        className: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 45vw, 100vw",
      },
    },
    {
      type: "faq-list",
      surface: "cream-dark",
      eyebrow: "Good to Know",
      title: "Common questions about working with me",
      faqs: [
        {
          question: "Are you a licensed therapist?",
          answer:
            "I'm a Registered Associate Marriage and Family Therapist (AMFT) in California. That means I've finished my master's degree and I'm building supervised hours toward full licensure. I work under licensed clinical supervision, and you can confirm California registrations on the state license lookup at search.dca.ca.gov.",
        },
        {
          question: "Who do you work with?",
          answer:
            "I see adults, teens ages 13 to 17, couples, and families. I help with anxiety, depression, life changes, and relationship struggles. I'm based in El Dorado Hills and work with clients across California by secure video.",
        },
        {
          question: "What's your approach?",
          answer:
            "I use proven methods and fit them to you. That often means CBT for anxious or stuck thinking, Emotionally Focused Therapy for couples, and mindfulness and narrative tools to help you feel more in control. We go at a pace that feels right for you.",
        },
      ],
    },
    {
      type: "cta",
      surface: "cream",
      eyebrow: "Ready to Begin?",
      title: [
        { text: "Let's see if we're " },
        { text: "a good fit", accent: true },
      ],
      description: [
        "Book a free 15-minute consultation to explore how therapy could support you. No pressure — just a conversation.",
      ],
      ctas: [
        {
          label: "Book a Free Consultation",
          href: "/contact",
          variant: "primary",
          icon: "arrow",
        },
        {
          label: "Call 916-500-4431",
          href: "tel:9165004431",
          variant: "secondary",
          icon: "phone",
        },
      ],
    },
  ],
};
