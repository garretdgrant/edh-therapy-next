import Header from "../components/Header";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "How does online therapy work?",
    answer:
      "Sessions take place over secure video. You’ll receive a private link and join from a quiet, comfortable space.",
  },
  {
    question: "Do you offer telehealth only?",
    answer:
      "Yes. All sessions are conducted online to provide flexibility across California.",
  },
  {
    question: "Do you take insurance?",
    answer:
      "I am out-of-network. Superbills are available for reimbursement depending on your plan.",
  },
  {
    question: "What issues do you work with?",
    answer:
      "Anxiety, relationship challenges, life transitions, depression, self-esteem, boundaries, and grief.",
  },
  {
    question: "How often should I attend sessions?",
    answer:
      "Most clients meet weekly or bi-weekly. We’ll decide together based on your goals and needs.",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-14 -right-20 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-sage-soft/25 to-transparent animate-float" />
            <div className="absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Resources & Support
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Guidance between sessions
                  <br />
                  <span className="font-medium">
                    and support when you need it
                  </span>
                </h1>
                <p className="text-lg text-warm-gray leading-relaxed max-w-xl">
                  Explore mental health resources, therapeutic tools, and
                  frequently asked questions to help you feel informed and
                  supported.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] max-w-md mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-br from-linen to-cream-dark shadow-2xl shadow-sand/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-14 h-14 mx-auto rounded-full bg-cream flex items-center justify-center">
                        <svg
                          className="w-7 h-7 text-sand"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 6v6l4 2"
                          />
                        </svg>
                      </div>
                      <p className="text-warm-gray text-sm">
                        Image of a journal, tea, or calming workspace
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-sage-soft/30 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <span className="inline-block font-serif text-sage text-lg italic">
                Educational Content
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                Insights to support your growth
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Understanding Anxiety Responses",
                  desc: "Learn how your nervous system responds to stress and what helps soothe it.",
                },
                {
                  title: "Healthy Boundaries 101",
                  desc: "Practical guidance for setting boundaries without guilt.",
                },
                {
                  title: "Attachment & Relationships",
                  desc: "Explore how attachment styles shape closeness and conflict.",
                },
                {
                  title: "Mindfulness for Emotional Regulation",
                  desc: "Simple practices to stay grounded during hard moments.",
                },
                {
                  title: "Navigating Life Transitions",
                  desc: "Strategies for coping with change and uncertainty.",
                },
                {
                  title: "Self-Esteem & Identity Work",
                  desc: "Reconnecting with your values and sense of self.",
                },
              ].map((article) => (
                <div
                  key={article.title}
                  className="p-6 bg-cream rounded-2xl shadow-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center mb-4">
                    <span className="text-charcoal-soft text-sm">Read</span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">
                    {article.title}
                  </h3>
                  <p className="text-warm-gray mt-3">{article.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                Recommended Materials
              </span>
              <h3 className="font-serif text-3xl text-charcoal">
                Books, podcasts, and tools
              </h3>
              <ul className="space-y-3 text-warm-gray">
                <li>The Body Keeps the Score — Bessel van der Kolk</li>
                <li>Attached — Amir Levine & Rachel Heller</li>
                <li>Set Boundaries, Find Peace — Nedra Glover Tawwab</li>
                <li>On Being Podcast — Krista Tippett</li>
              </ul>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-linen to-cream shadow-xl shadow-sand/20">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/15 to-terracotta-soft/10 flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <div className="w-12 h-12 mx-auto rounded-full bg-cream flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-sand"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 6h8m-8 4h8m-8 4h8m-8 4h8M4 6h2m-2 4h2m-2 4h2m-2 4h2"
                        />
                      </svg>
                    </div>
                    <p className="text-warm-gray text-sm">
                      Image of books or a resource shelf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-10">
              <span className="inline-block font-serif text-sage text-lg italic">
                Therapy FAQs
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                Answers to common questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group p-6 bg-cream rounded-2xl shadow-sm"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between text-charcoal font-medium">
                    {item.question}
                    <span className="text-sage group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="text-warm-gray mt-4">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
