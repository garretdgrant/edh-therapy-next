import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cozyChair from "./assets/Home/cozy_chair.webp";
import laptopCouch from "./assets/Home/laptop-couch.webp";
import glassesDesk from "./assets/Home/glasses-desk.webp";
import { therapistDeskPortrait } from "./headshots";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  buildWebPageSchema,
  getBusinessId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";

const pageTitle = "Online Therapy in California";
const pageDescription =
  "EDH Therapy offers online therapy for individuals, couples, teens, and families throughout California, with support for anxiety, relationships, and life transitions.";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitle,
  description: pageDescription,
  pathname: "/",
  imageAlt:
    "Meagan Murray, AMFT - online therapist serving clients throughout California",
});

const whoIWorkWith = [
  {
    title: "Adults",
    description: "Individual therapy for adults ages 18 and older.",
  },
  {
    title: "Teens",
    description: "Adolescent therapy for ages 13-17.",
  },
  {
    title: "Couples",
    description: "Relationship, premarital, and reconnection therapy.",
  },
  {
    title: "Families",
    description: "Family systems, parent-child dynamics, and transitions.",
  },
];

const specialties = [
  "Anxiety & Stress",
  "Relationship Challenges",
  "Life Transitions",
  "Depression & Low Mood",
  "Self-Esteem & Identity",
  "Grief & Loss",
  "Divorce & Separation",
  "Parenting Support",
  "Codependency & Boundaries",
];

const therapyApproaches = [
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
];

const firstSteps = [
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
];

const homeFaqs = [
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

const homePageUrl = buildPageUrl("/");
const therapistDeskImageUrl = buildPageUrl(therapistDeskPortrait);
const businessReference = {
  "@id": getBusinessId(),
};

const webPageSchema = {
  ...buildWebPageSchema({
    pathname: "/",
    name: pageTitle,
    description: pageDescription,
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

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <script
          id="homepage-webpage-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        />
        <script
          id="homepage-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          id="homepage-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <section className="relative min-h-screen overflow-hidden pt-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-sage-soft/30 to-transparent animate-float" />
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
            <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-linen/50 animate-pulse-gentle" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <div className="space-y-6 opacity-0-initial animate-fade-in">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sage-soft/30 px-4 py-2">
                    <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                    <span className="text-sm tracking-wide text-charcoal-soft">
                      Online Therapy Throughout California · Meagan Murray, AMFT
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl font-light leading-[1.05] tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                    Therapist in El Dorado Hills, CA
                    <span className="block font-medium italic text-charcoal-soft">
                      - Compassionate Therapy for Growth
                    </span>
                  </h1>
                </div>

                <p className="max-w-2xl text-lg leading-relaxed text-warm-gray opacity-0-initial animate-fade-in-up delay-200">
                  <Link
                    href="/about"
                    className="font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft"
                  >
                    Meagan Murray, AMFT
                  </Link>{" "}
                  provides compassionate online therapy for individuals,
                  couples, teens, and families in El Dorado Hills and throughout
                  California. Whether you&apos;re navigating anxiety,
                  relationship challenges, depression, or a major life
                  transition, therapy can help you find clarity, build
                  connection, and move forward with confidence.
                </p>

                <div className="flex flex-col gap-4 opacity-0-initial animate-fade-in-up delay-400 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal-soft hover:shadow-xl"
                  >
                    <span>Book a Free Consultation</span>
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-sand px-8 py-4 text-charcoal-soft transition-all duration-300 hover:border-sage hover:text-charcoal"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>

              <div className="relative opacity-0-initial animate-scale-in delay-300">
                <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-sage-soft/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-terracotta-soft/30 blur-sm" />

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-sand/30">
                  <div className="absolute inset-4 rounded-[1.5rem] border border-sand/50" />
                  <div className="absolute inset-8 overflow-hidden rounded-[1rem]">
                    <Image
                      src={therapistDeskPortrait}
                      alt="Meagan Murray, AMFT - online therapist in El Dorado Hills, CA during a telehealth session"
                      fill
                      priority
                      unoptimized
                      className="object-cover object-center"
                      sizes="(min-width: 1024px) 40vw, 80vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
          <svg
            className="absolute left-0 right-0 top-0 h-16 w-full text-cream"
            preserveAspectRatio="none"
            viewBox="0 0 1440 64"
          >
            <path
              fill="currentColor"
              d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z"
            />
          </svg>

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-sage-soft/30 blur-sm" />
                <div className="relative mx-auto aspect-[3/4] max-w-md overflow-hidden rounded-[2rem] shadow-xl shadow-sand/20">
                  <Image
                    src={glassesDesk}
                    alt="Warm therapy workspace - EDH Therapy, El Dorado Hills, California"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              </div>

              <div className="order-1 space-y-8 lg:order-2">
                <span className="inline-block font-serif text-lg italic text-sage">
                  Welcome
                </span>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
                  Everyone Deserves a Safe Space
                </h2>
                <p className="text-lg leading-relaxed text-warm-gray">
                  My approach is warm, collaborative, and human-centered -
                  designed to support you in understanding yourself deeply and
                  feeling more grounded in your life and relationships.
                </p>
                <p className="text-lg leading-relaxed text-warm-gray">
                  Therapy is a place to slow down, reflect, and reconnect with
                  your strengths. Together, we work toward greater emotional
                  resilience, clarity, and confidence.
                </p>
                <p className="text-lg leading-relaxed text-warm-gray">
                  As an Associate Marriage and Family Therapist based in El
                  Dorado Hills, I integrate evidence-based modalities like
                  Cognitive Behavioral Therapy (CBT), Emotionally Focused
                  Therapy (EFT), and mindfulness to create a therapeutic
                  experience tailored to your needs.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="h-px w-12 bg-sand" />
                  <div className="h-2 w-2 rounded-full bg-sage" />
                  <div className="h-px w-12 bg-sand" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <span className="inline-block font-serif text-lg italic text-sage">
                  Who I Work With
                </span>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
                  Supporting You Through Life&apos;s Challenges
                </h2>
                <p className="text-lg leading-relaxed text-warm-gray">
                  Whether you&apos;re experiencing a major life transition or
                  simply feeling stuck, therapy can support meaningful change. I
                  work with individuals at many stages of life, as well as
                  couples and families seeking stronger connection.
                </p>

                <div className="relative mt-8">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg shadow-sand/20">
                    <Image
                      src={cozyChair}
                      alt="Comfortable and safe therapy setting for individuals, couples, and families"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {whoIWorkWith.map((item, index) => (
                  <Link
                    key={item.title}
                    href="/services"
                    className="group relative rounded-2xl bg-cream-dark p-8 transition-all duration-500 hover:bg-linen"
                  >
                    <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sage-soft/30 text-xs font-medium text-charcoal-soft">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-charcoal-soft">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-warm-gray">
                      {item.description}
                    </p>
                    <div className="mt-4 h-px w-8 bg-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-linen py-24 md:py-32">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-sage-soft/10 to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
              <span className="inline-block font-serif text-lg italic text-sage">
                Specialties
              </span>
              <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
                Areas of Support
              </h2>
              <p className="text-lg leading-relaxed text-warm-gray">
                These are some of the challenges I help clients navigate. If you
                don&apos;t see your concern listed, reach out - I&apos;m happy
                to discuss whether therapy with me might be a good fit.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {specialties.map((specialty) => (
                <Link
                  key={specialty}
                  href="/services"
                  className="group flex items-center gap-4 rounded-xl bg-cream p-5 transition-all duration-300 hover:bg-cream-dark"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage-soft/30 transition-colors duration-300 group-hover:bg-sage-soft/50">
                    <span className="font-serif text-sm text-charcoal-soft">
                      +
                    </span>
                  </div>
                  <span className="font-medium text-charcoal">{specialty}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="approach"
          className="relative overflow-hidden bg-cream py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div className="space-y-8">
                <span className="inline-block font-serif text-lg italic text-sage">
                  My Approach
                </span>
                <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
                  Evidence-Based & Collaborative Therapy
                </h2>
                <p className="text-lg leading-relaxed text-warm-gray">
                  Treatment is always tailored to your needs, values, and goals.
                  I draw from several evidence-based modalities to provide the
                  support that works best for you - because no two clients are
                  alike, and no single approach fits everyone.
                </p>
              </div>

              <div className="space-y-4">
                {therapyApproaches.map((approach, index) => (
                  <article
                    key={approach.label}
                    className="group rounded-xl p-4 transition-all duration-300 hover:bg-cream-dark"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sage-soft to-sage-soft/50 font-serif font-medium text-charcoal">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-charcoal">
                          {approach.label} - {approach.title}
                        </h3>
                        <p className="text-sm leading-7 text-warm-gray">
                          {approach.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-charcoal-soft/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sage/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
              <span className="inline-block font-serif text-lg italic text-sage-soft">
                What to Expect
              </span>
              <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
                Your First Steps in Therapy
              </h2>
              <p className="text-lg leading-relaxed text-sand">
                Starting therapy can feel vulnerable - but your first step
                doesn&apos;t have to be overwhelming. Here&apos;s what the
                process looks like when you work with me.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {firstSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative rounded-2xl border border-charcoal-soft/30 bg-charcoal-soft/30 p-8 transition-all duration-500 hover:border-sage/30"
                >
                  <span className="absolute right-4 top-4 font-serif text-5xl font-light text-charcoal-soft/40 transition-colors duration-500 group-hover:text-sage/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3 pt-12">
                    <h3 className="font-serif text-2xl text-cream">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-sand">
                      {step.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center text-sand">
              The goal is to create a supportive space where you feel seen,
              understood, and empowered to grow.
            </p>
          </div>
        </section>

        <section className="relative bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sage-soft/30 to-sage-soft/10 p-10 md:p-12">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sage-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cream">
                      <svg
                        className="h-8 w-8 text-sage"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-linen to-cream shadow-md sm:block">
                      <Image
                        src={laptopCouch}
                        alt="Online therapy session on laptop - HIPAA-compliant telehealth throughout California"
                        width={96}
                        height={96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Online Therapy Throughout California
                  </h3>
                  <p className="leading-relaxed text-warm-gray">
                    All sessions are held via secure, HIPAA-compliant video -
                    offering privacy, flexibility, and ease from wherever you
                    are in California. No commute, no waiting room. Just a quiet
                    space and a stable internet connection.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Secure", "Private", "Flexible"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream px-4 py-1.5 text-sm text-charcoal-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10 p-10 md:p-12">
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-terracotta-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream">
                    <svg
                      className="h-8 w-8 text-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Fees & Insurance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl text-charcoal">
                        $175
                      </span>
                      <span className="text-warm-gray">
                        per 50-minute session
                      </span>
                    </div>
                    <p className="leading-relaxed text-warm-gray">
                      I am an out-of-network provider, which means I don&apos;t
                      bill insurance directly. However, I provide superbills -
                      detailed receipts you can submit to your insurance company
                      for potential reimbursement. Many PPO plans offer
                      out-of-network mental health benefits. I accept credit
                      cards, debit cards, and HSA/FSA cards. Payment is
                      collected at the time of each session.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
              <span className="inline-block font-serif text-lg italic text-sage">
                Common Questions
              </span>
              <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
                Frequently Asked Questions About Therapy
              </h2>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((item) => (
                <article
                  key={item.question}
                  className="rounded-[1.75rem] bg-cream p-8 shadow-lg shadow-sand/10"
                >
                  <h3 className="font-serif text-2xl text-charcoal">
                    {item.question}
                  </h3>
                  <p className="mt-4 leading-8 text-warm-gray">{item.answer}</p>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-lg text-warm-gray">
              Have more questions? Visit the{" "}
              <Link
                href="/faqs"
                className="font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft"
              >
                FAQs page
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          id="book"
          className="relative overflow-hidden bg-cream-dark py-24 md:py-32"
        >
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8 text-center">
              <span className="inline-block font-serif text-lg italic text-sage">
                Ready to Begin?
              </span>
              <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl lg:text-6xl">
                Book a Free 15-Minute Consultation
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-warm-gray">
                If you&apos;re ready to explore whether therapy is the right
                fit, I&apos;d love to hear from you. The consultation is free,
                and there&apos;s no pressure - just a conversation about what
                you&apos;re going through and how I can help.
              </p>

              <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-10 py-5 text-lg text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-charcoal-soft hover:shadow-2xl"
                >
                  <span>Book a Free Consultation</span>
                  <svg
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>

              <div className="space-y-4 pt-8">
                <p className="text-sm text-warm-gray">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                  <a
                    href="tel:9165004431"
                    className="flex items-center gap-2 text-charcoal transition-colors duration-300 hover:text-sage"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>(916) 500-4431</span>
                  </a>
                  <span className="hidden text-sand sm:block">|</span>
                  <a
                    href="mailto:contact@edhtherapy.com"
                    className="flex items-center gap-2 text-charcoal transition-colors duration-300 hover:text-sage"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
