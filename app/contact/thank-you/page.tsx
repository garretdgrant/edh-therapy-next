import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { buildPageMetadata } from "@/lib/page-metadata";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  getProfessionalServiceId,
} from "@/lib/schema";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Thank You",
    description:
      "Thanks for contacting EDH Therapy. Your message has been received and a response will follow within 1-2 business days.",
    pathname: "/contact/thank-you",
  }),
  robots: {
    index: false,
    follow: true,
  },
};

const thankYouPageUrl = buildPageUrl("/contact/thank-you");
const professionalServiceId = getProfessionalServiceId();

const thankYouBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", pathname: "/" },
  { name: "Contact", pathname: "/contact" },
  { name: "Thank You", pathname: "/contact/thank-you" },
]);

const thankYouPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Thank You | EDH Therapy",
  url: thankYouPageUrl,
  description:
    "Confirmation page for successful contact form submissions to EDH Therapy.",
  isPartOf: {
    "@id": professionalServiceId,
  },
};

const nextSteps = [
  {
    title: "Response within 1-2 business days",
    description:
      "Your inquiry is in the queue. You can expect a thoughtful reply by email or phone shortly.",
  },
  {
    title: "A brief consultation comes first",
    description:
      "The first step is a free 15-minute consultation to understand your needs and answer questions.",
  },
  {
    title: "Confidentiality stays central",
    description:
      "Your message is handled with care and used only to respond to your inquiry.",
  },
];

export default function ContactThankYouPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <script
          id="thank-you-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(thankYouBreadcrumbSchema),
          }}
        />
        <script
          id="thank-you-page-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(thankYouPageSchema),
          }}
        />

        <section className="relative min-h-[78vh] overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 -right-28 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sage-soft/35 to-transparent animate-float" />
            <div className="absolute -left-32 bottom-0 h-[480px] w-[480px] rounded-full bg-gradient-to-tr from-terracotta-soft/25 to-transparent animate-float-reverse" />
            <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-linen/60 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:gap-14">
              <div className="space-y-8">
                <div className="space-y-6 opacity-0-initial animate-fade-in">
                  <div className="inline-flex items-center gap-3 rounded-full bg-sage-soft/35 px-4 py-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/70 text-charcoal">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-sm tracking-wide text-charcoal-soft">
                      Message received
                    </span>
                  </div>

                  <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.02] tracking-tight text-charcoal md:text-6xl lg:text-7xl">
                    Thank you for
                    <br />
                    <span className="font-medium italic text-charcoal-soft">
                      reaching out
                    </span>
                  </h1>
                </div>

                <div className="max-w-2xl space-y-5 opacity-0-initial animate-fade-in-up delay-200">
                  <p className="text-lg leading-relaxed text-warm-gray">
                    Your message has been sent successfully. I&apos;ll review
                    your inquiry and follow up within 1-2 business days to talk
                    through next steps.
                  </p>
                  <p className="text-lg leading-relaxed text-warm-gray">
                    If your situation is urgent, please call{" "}
                    <a
                      href="tel:9164712562"
                      className="font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft"
                    >
                      (916) 471-2562
                    </a>
                    . If you are experiencing a mental health crisis, call{" "}
                    <strong className="text-charcoal">988</strong> or go to the
                    nearest emergency room.
                  </p>
                </div>

                <div className="flex flex-col gap-4 opacity-0-initial animate-fade-in-up delay-400 sm:flex-row">
                  <Link
                    href="/"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-charcoal px-8 py-4 text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-charcoal-soft hover:shadow-xl"
                  >
                    <span>Return Home</span>
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
                    className="inline-flex items-center justify-center rounded-full border border-sand px-8 py-4 text-charcoal-soft transition-all duration-300 hover:border-sage hover:text-charcoal"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <aside className="relative opacity-0-initial animate-scale-in delay-300">
                <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-sage-soft/45 blur-sm" />
                <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-terracotta-soft/35 blur-sm" />

                <div className="relative overflow-hidden rounded-[2rem] border border-sand/30 bg-cream/90 p-8 shadow-2xl shadow-sand/20 backdrop-blur-sm">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-warm-gray">
                        What Happens Next
                      </p>
                      <h2 className="mt-3 font-serif text-3xl text-charcoal">
                        Gentle, clear follow-up
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linen text-charcoal">
                      <svg
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {nextSteps.map((step) => (
                      <div
                        key={step.title}
                        className="rounded-[1.5rem] border border-sand/35 bg-cream-dark/75 p-5"
                      >
                        <h3 className="font-serif text-2xl text-charcoal">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-warm-gray">
                          {step.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-[1.5rem] bg-charcoal px-6 py-5 text-cream">
                    <p className="text-sm uppercase tracking-[0.24em] text-sand">
                      Prefer direct contact?
                    </p>
                    <a
                      href="mailto:contact@edhtherapy.com"
                      className="mt-3 block font-serif text-2xl transition-colors duration-300 hover:text-sage-soft"
                    >
                      contact@edhtherapy.com
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
