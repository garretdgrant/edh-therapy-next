import glassesDesk from "@/app/assets/Home/glasses-desk.webp";
import laptopCouch from "@/app/assets/Home/laptop-couch.webp";
import { therapistDeskPortrait } from "@/app/headshots";
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

export const homePageData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "El Dorado Hills Therapist | Online Therapy in CA",
    description:
      "Compassionate online therapy with Meagan Murray, AMFT — for anxiety, depression, couples & families in El Dorado Hills and across California. Free consult.",
    pathname: "/",
    imageAlt:
      "Meagan Murray, AMFT — online therapist in El Dorado Hills, CA during a telehealth session",
  }),
  jsonLd: [
    {
      id: "localbusiness",
      data: {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "EDH Therapy — Meagan Murray, AMFT",
        url: "https://www.eldoradohillstherapy.com/",
        telephone: "+1-916-500-4431",
        email: "contact@eldoradohillstherapy.com",
        priceRange: "$$",
        areaServed: [
          "El Dorado Hills",
          "Folsom",
          "Cameron Park",
          "Sacramento",
          "Roseville",
          "Granite Bay",
          "California",
        ],
        founder: { "@type": "Person", name: "Meagan Murray" },
      },
    },
    {
      id: "person",
      data: {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Meagan Murray",
        jobTitle: "Associate Marriage and Family Therapist (AMFT)",
        worksFor: { "@type": "MedicalBusiness", name: "EDH Therapy" },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "University of San Francisco",
          },
          {
            "@type": "CollegeOrUniversity",
            name: "University of California, Davis",
          },
        ],
        knowsAbout: [
          "Cognitive Behavioral Therapy",
          "Emotionally Focused Therapy",
          "Mindfulness",
          "Narrative Therapy",
          "Person-Centered Therapy",
          "Family Systems Therapy",
          "Anxiety",
          "Depression",
          "Relationships",
        ],
        areaServed: "California",
      },
    },
    {
      id: "faqpage",
      data: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does therapy cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Each session is $175. I'm an out-of-network provider, so I can give you a superbill to send to your insurance for possible reimbursement. I also accept HSA and FSA cards.",
            },
          },
          {
            "@type": "Question",
            name: "Is online therapy as good as in person?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For most concerns, yes. Research shows online therapy works just as well as meeting face to face, and many clients find it easier to fit into their week.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer therapy in El Dorado Hills?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. I'm based in El Dorado Hills and see clients here and across California by secure video, including Folsom, Cameron Park, Sacramento, Roseville, and Granite Bay.",
            },
          },
          {
            "@type": "Question",
            name: "How do I get started?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Start with a free 15-minute consultation. We'll talk about what you're looking for and whether we're a good fit. If it feels right, we'll book your first session.",
            },
          },
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
        ],
      },
    },
  ],
  hero: {
    eyebrow: "El Dorado Hills · Online Therapy Across California",
    title: [
      { text: "Therapist in El Dorado Hills, CA" },
      { text: " — Compassionate Online Therapy", accent: true },
    ],
    description: [
      "Hi, I'm Meagan Murray, AMFT. I help people across California feel more steady, more connected, and more like themselves. We meet online, so therapy fits into your real life. If you're dealing with anxiety, a hard chapter, or strain in your relationships, you don't have to carry it alone.",
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
      surface: "cream",
      eyebrow: "Welcome",
      title: [{ text: "Everyone Deserves a Safe Space" }],
      paragraphs: [
        [
          "The first thing I work on with anyone new is simple: helping you feel safe enough to be honest. Real change starts there. You set the pace, and nothing you bring is too big or too small.",
        ],
        [
          "Most people I see come in feeling stuck, worn out, or unsure where to start. That's okay. Part of my job is to help you make sense of it, one step at a time.",
        ],
        [
          "My style is warm and down to earth. I'll listen closely, ask honest questions, and work with you to find what actually helps — not a one-size-fits-all plan.",
        ],
      ],
      image: {
        src: glassesDesk,
        alt: "Warm therapy workspace for online therapy clients in El Dorado Hills and California",
        className: "aspect-[3/4] max-w-md mx-auto",
        sizes: "(min-width: 1024px) 40vw, 100vw",
      },
      imageFirst: true,
      divider: true,
    },
    {
      type: "card-grid",
      surface: "cream-dark",
      title: [{ text: "Care You Can Trust" }],
      columns: 3,
      cardVariant: "plain",
      cards: [
        {
          title: "Evidence-based methods",
          description:
            "I use proven approaches like CBT and EFT, matched to what you actually need.",
        },
        {
          title: "Licensed in California",
          description:
            "I'm a Registered Associate Marriage and Family Therapist (AMFT) working under licensed clinical supervision.",
        },
        {
          title: "Clear, upfront fees",
          description:
            "Sessions are $175. I go over costs before we ever begin, so there are no surprises.",
        },
      ],
    },
    {
      type: "card-grid",
      surface: "linen",
      title: [{ text: "Who I Work With" }],
      columns: 4,
      cardVariant: "icon",
      linkedCards: true,
      cards: [
        {
          title: "Individuals",
          description:
            "One-on-one support for anxiety, depression, and big life changes.",
          href: "/services",
        },
        {
          title: "Couples",
          description:
            "Tools to communicate better, reconnect, and work through conflict.",
          href: "/services",
        },
        {
          title: "Teens (13–17)",
          description:
            "A safe place for teens to feel heard and build real coping skills.",
          href: "/services",
        },
        {
          title: "Families",
          description:
            "Help for families who want to understand each other better.",
          href: "/services",
        },
      ],
    },
    {
      type: "card-grid",
      surface: "cream",
      title: [{ text: "Areas of Support" }],
      columns: 3,
      cardVariant: "plain",
      linkedCards: true,
      cards: [
        {
          title: "Anxiety & Stress",
          description:
            "Quiet a racing mind and feel more in control of your days.",
          href: "/services",
        },
        {
          title: "Depression & Low Mood",
          description:
            "Find energy, hope, and a way forward when things feel heavy.",
          href: "/services",
        },
        {
          title: "Relationship Challenges",
          description:
            "Rebuild trust and connection with the people who matter.",
          href: "/services",
        },
        {
          title: "Life Transitions",
          description: "Steady support through change, loss, and new chapters.",
          href: "/services",
        },
        {
          title: "Grief & Loss",
          description: "A gentle space to process loss at your own pace.",
          href: "/services",
        },
        {
          title: "Self-Esteem & Identity",
          description:
            "Get to know yourself and treat yourself with more kindness.",
          href: "/services",
        },
      ],
    },
    {
      type: "card-grid",
      surface: "cream-dark",
      title: [{ text: "My Approach" }],
      columns: 3,
      cardVariant: "icon",
      cards: [
        {
          title: "Cognitive Behavioral Therapy (CBT)",
          description:
            "Notice and shift the thought patterns that keep you stuck.",
        },
        {
          title: "Emotionally Focused Therapy (EFT)",
          description: "Build safer, closer bonds in your relationships.",
        },
        {
          title: "Mindfulness",
          description: "Stay present and learn to calm your nervous system.",
        },
        {
          title: "Narrative Therapy",
          description: "Retell your story in a way that gives you more power.",
        },
        {
          title: "Person-Centered",
          description:
            "You lead the way; I follow with care and zero judgment.",
        },
        {
          title: "Family Systems",
          description: "See how family patterns shape how you feel today.",
        },
      ],
    },
    {
      type: "dark-steps",
      eyebrow: "Getting Started",
      title: "What to Expect",
      description: [
        "Starting therapy can feel like a lot. Here's how simple it really is.",
      ],
      steps: [
        {
          title: "Reach out",
          description:
            "Book a free 15-minute consultation. We'll see if we're a good fit — no pressure.",
        },
        {
          title: "First session",
          description:
            "We get to know each other and talk about what brought you in.",
        },
        {
          title: "The work",
          description:
            "We meet regularly online and dig into what matters most to you.",
        },
        {
          title: "Growth",
          description:
            "We check in often, celebrate progress, and adjust as you change.",
        },
      ],
    },
    {
      type: "text-image",
      surface: "cream-dark",
      eyebrow: "Online Therapy",
      title: [
        { text: "Online Therapy for El Dorado Hills & Across California" },
      ],
      paragraphs: [
        [
          "All of my sessions happen online by secure video. That means you can meet from home, on a lunch break, or anywhere you feel comfortable — no commute and no waiting room.",
        ],
        [
          "I'm based in El Dorado Hills and work with clients across the area, including Folsom, Cameron Park, Sacramento, Roseville, and Granite Bay, plus anyone living anywhere in California.",
        ],
        [
          "For most concerns, online therapy is just as effective as meeting in person, and many people find it easier to keep up with.",
        ],
      ],
      image: {
        src: laptopCouch,
        alt: "Online therapy by secure video for El Dorado Hills and California clients",
        className: "aspect-[4/3]",
        sizes: "(min-width: 1024px) 45vw, 100vw",
      },
    },
    {
      type: "payment",
      eyebrow: "Fees",
      title: [{ text: "Simple, Transparent Pricing" }],
      description: ["I keep things clear so you can plan ahead."],
      price: {
        amount: "$175",
        label: "per 50-minute session",
      },
      items: [
        "Per 50-minute session",
        "Out-of-network provider",
        "Superbills provided for insurance reimbursement",
        "HSA and FSA cards accepted",
      ],
    },
    {
      type: "faq-list",
      surface: "cream-dark",
      eyebrow: "FAQ",
      title: "Common Questions",
      faqs: [
        {
          question: "How much does therapy cost?",
          answer:
            "Each session is $175. I'm an out-of-network provider, so I can give you a superbill to send to your insurance for possible reimbursement. I also accept HSA and FSA cards.",
        },
        {
          question: "Is online therapy as good as in person?",
          answer:
            "For most concerns, yes. Research shows online therapy works just as well as meeting face to face, and many clients find it easier to fit into their week.",
        },
        {
          question: "Do you offer therapy in El Dorado Hills?",
          answer:
            "Yes. I'm based in El Dorado Hills and see clients here and across California by secure video, including Folsom, Cameron Park, Sacramento, Roseville, and Granite Bay.",
        },
        {
          question: "How do I get started?",
          answer:
            "Start with a free 15-minute consultation. We'll talk about what you're looking for and whether we're a good fit. If it feels right, we'll book your first session.",
        },
      ],
    },
    {
      type: "cta",
      surface: "cream",
      eyebrow: "Let's Connect",
      title: [{ text: "You Don't Have to Do This Alone" }],
      description: [
        "Reach out for a free consultation and take the first step at your own pace.",
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
