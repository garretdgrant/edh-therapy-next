import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import {
  buildBreadcrumbSchema,
  buildPageUrl,
  getProfessionalServiceId,
} from "@/lib/schema";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact EDH Therapy | Free 15-Minute Consultation",
  description:
    "Contact EDH Therapy to book a free 15-minute consultation, ask questions, or get started with online therapy throughout California.",
  pathname: "/contact",
});

const contactPageUrl = buildPageUrl("/contact");
const professionalServiceId = getProfessionalServiceId();

const contactBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "Home", pathname: "/" },
  { name: "Contact", pathname: "/contact" },
]);

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact EDH Therapy",
  url: contactPageUrl,
  description:
    "Contact EDH Therapy to schedule a free 15-minute consultation for online therapy throughout California.",
  mainEntity: {
    "@id": professionalServiceId,
  },
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <script
          id="contact-breadcrumb-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactBreadcrumbSchema),
          }}
        />
        <script
          id="contact-page-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageSchema),
          }}
        />

        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          {/* Organic Background Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sage-soft/30 to-transparent animate-float" />
            <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-linen/50 animate-pulse-gentle" />

            {/* Subtle grain texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-6 opacity-0-initial animate-fade-in">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-soft/30 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                    <span className="text-sm text-charcoal-soft tracking-wide">
                      Get in Touch
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
                    Let&apos;s
                    <br />
                    <span className="font-medium italic text-charcoal-soft">
                      connect
                    </span>
                  </h1>
                </div>

                <p className="text-lg text-warm-gray leading-relaxed max-w-xl opacity-0-initial animate-fade-in-up delay-200">
                  Ready to take the first step? Schedule a free 15-minute
                  consultation to discuss your needs and see if we&apos;re a
                  good fit. I typically respond within 1-2 business days.
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 opacity-0-initial animate-fade-in-up delay-400">
                  <a
                    href="tel:9164712562"
                    className="group flex items-center gap-4 p-4 bg-cream-dark/50 rounded-2xl hover:bg-cream-dark transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sage-soft/30 flex items-center justify-center group-hover:bg-sage-soft/50 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-charcoal-soft"
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
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">Phone</p>
                      <p className="font-medium text-charcoal">
                        (916) 471-2562
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@edhtherapy.com"
                    className="group flex items-center gap-4 p-4 bg-cream-dark/50 rounded-2xl hover:bg-cream-dark transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-terracotta-soft/30 flex items-center justify-center group-hover:bg-terracotta-soft/50 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-charcoal-soft"
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
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">Email</p>
                      <p className="font-medium text-charcoal">
                        contact@edhtherapy.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-cream-dark/50 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-linen flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-charcoal-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-warm-gray">Location</p>
                      <p className="font-medium text-charcoal">
                        El Dorado Hills, California
                      </p>
                      <p className="text-xs text-warm-gray">
                        Online sessions throughout CA
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content - Form */}
              <div className="relative opacity-0-initial animate-scale-in delay-300">
                <div className="relative p-8 md:p-10 rounded-[2rem] bg-cream shadow-2xl shadow-sand/20 border border-sand/20">
                  {/* Form Header */}
                  <div className="mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                      Send a Message
                    </h2>
                    <p className="text-warm-gray mt-2">
                      Fill out the form below and I&apos;ll be in touch soon.
                    </p>
                  </div>

                  <ContactForm />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-sage-soft/40 blur-sm -z-10" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-terracotta-soft/30 blur-sm -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info Section */}
        <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
          {/* Decorative curves */}
          <svg
            className="absolute top-0 left-0 right-0 w-full h-16 text-cream"
            preserveAspectRatio="none"
            viewBox="0 0 1440 64"
          >
            <path
              fill="currentColor"
              d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z"
            />
          </svg>

          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* What to Expect */}
              <div className="p-8 bg-cream rounded-3xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-soft to-sage-soft/50 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-charcoal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">
                  Free Consultation
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  Book a complimentary 15-minute call to discuss your needs and
                  determine if we&apos;re a good fit before committing to
                  therapy.
                </p>
              </div>

              {/* Response Time */}
              <div className="p-8 bg-cream rounded-3xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-terracotta-soft to-terracotta-soft/50 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-charcoal"
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
                <h3 className="font-serif text-2xl text-charcoal mb-3">
                  Quick Response
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  I respond to all inquiries within 1-2 business days. For
                  urgent matters, please call directly.
                </p>
              </div>

              {/* Confidentiality */}
              <div className="p-8 bg-cream rounded-3xl">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-linen to-sand/50 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-charcoal"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-charcoal mb-3">
                  Confidential & Secure
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  All communications are handled with care and confidentiality.
                  Your privacy is my priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Notice */}
        <section className="py-16 bg-charcoal relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-charcoal-soft/20 blur-3xl" />

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-terracotta-soft/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-terracotta-soft"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-serif text-xl text-cream mb-2">
                  Crisis Resources
                </h3>
                <p className="text-sand leading-relaxed">
                  If you are experiencing a mental health crisis or emergency,
                  please call <strong className="text-cream">988</strong>{" "}
                  (Suicide & Crisis Lifeline) or go to your nearest emergency
                  room. Online therapy is not appropriate for crisis situations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Note */}
        <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Insurance & Payment
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-charcoal leading-tight">
                  Investment in
                  <br />
                  <span className="font-medium">your wellbeing</span>
                </h2>
                <p className="text-warm-gray leading-relaxed">
                  I am an out-of-network provider. This means I don&apos;t bill
                  insurance directly, but I provide superbills for potential
                  reimbursement based on your plan&apos;s out-of-network
                  benefits.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-px bg-sand" />
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <div className="w-12 h-px bg-sand" />
                </div>
              </div>

              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10">
                <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-terracotta-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl text-charcoal">
                      $175
                    </span>
                    <span className="text-warm-gray">per session</span>
                  </div>
                  <ul className="space-y-3 text-warm-gray">
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-sage"
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
                      50-minute individual sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-sage"
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
                      Superbills provided
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-sage"
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
                      HSA/FSA accepted
                    </li>
                  </ul>
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
