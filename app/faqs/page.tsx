"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const faqs = [
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

export default function FAQs() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question],
    );
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
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
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-6 opacity-0-initial animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage-soft/30 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                  <span className="text-sm text-charcoal-soft tracking-wide">
                    Questions & Answers
                  </span>
                </div>

                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
                  Frequently
                  <br />
                  <span className="font-medium italic text-charcoal-soft">
                    Asked
                  </span>{" "}
                  Questions
                </h1>
              </div>

              <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto opacity-0-initial animate-fade-in-up delay-200">
                Find answers to common questions about therapy, the process, and
                what to expect. If you don&apos;t see your question here, please
                reach out.
              </p>

              <div className="opacity-0-initial animate-fade-in-up delay-400">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Still have questions?</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
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

          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-soft to-sage-soft/50 flex items-center justify-center text-charcoal font-serif font-medium">
                      {String(categoryIndex + 1).padStart(2, "0")}
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                      {category.category}
                    </h2>
                  </div>

                  {/* Questions */}
                  <div className="space-y-4 pl-16">
                    {category.questions.map((item) => {
                      const isOpen = openItems.includes(item.question);
                      return (
                        <div
                          key={item.question}
                          className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <button
                            onClick={() => toggleItem(item.question)}
                            className="w-full p-6 flex items-start justify-between gap-4 text-left"
                          >
                            <span className="font-medium text-charcoal group-hover:text-charcoal-soft transition-colors duration-300">
                              {item.question}
                            </span>
                            <div
                              className={`w-8 h-8 rounded-full bg-sage-soft/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isOpen ? "bg-sage-soft/50 rotate-180" : ""
                              }`}
                            >
                              <svg
                                className="w-4 h-4 text-charcoal-soft"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96" : "max-h-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <div className="pt-2 border-t border-sand/30">
                                <p className="text-warm-gray leading-relaxed pt-4">
                                  {item.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8">
              <span className="inline-block font-serif text-sage text-lg italic">
                Need More Information?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                Let&apos;s connect
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
                If you didn&apos;t find what you were looking for, I&apos;m
                happy to answer your questions directly. Book a free
                consultation or send me a message.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
                >
                  <span>Contact Me</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
                </a>
                <a
                  href="tel:9164712562"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand text-charcoal-soft rounded-full hover:border-sage hover:text-charcoal transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5"
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
                  <span>(916) 471-2562</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
