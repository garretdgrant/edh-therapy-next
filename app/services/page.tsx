import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-12 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sage-soft/25 to-transparent animate-float" />
            <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Therapy Services & Areas of Support
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Personalized therapy
                  <br />
                  <span className="font-medium">for meaningful change</span>
                </h1>
                <p className="text-lg text-warm-gray leading-relaxed max-w-xl">
                  Whether you&apos;re seeking individual support or relationship
                  guidance, therapy is tailored to your goals, values, and lived
                  experience.
                </p>
                <a
                  href="#book"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300"
                >
                  Book a Free Consultation
                </a>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] max-w-md mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-br from-linen to-cream-dark shadow-2xl shadow-sand/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-16 h-16 mx-auto rounded-full bg-cream flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-sand"
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
                        Calm therapy session image placeholder
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-sage-soft/30 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Therapy",
                desc: "Support for anxiety, self-esteem, depression, identity, and life transitions.",
              },
              {
                title: "Couples & Relationship Support",
                desc: "Guidance through communication challenges, conflict, and emotional disconnection.",
              },
              {
                title: "Life Transitions",
                desc: "Care through divorce, grief, career shifts, parenthood, and personal change.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 bg-cream rounded-2xl shadow-sm"
              >
                <h2 className="font-serif text-2xl text-charcoal">
                  {service.title}
                </h2>
                <p className="text-warm-gray mt-3">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div className="space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                Therapy Modalities
              </span>
              <h3 className="font-serif text-3xl text-charcoal">
                Evidence-based approaches
              </h3>
              <p className="text-warm-gray leading-relaxed">
                Treatment is customized to your needs, drawing from a blend of
                modalities that support insight, skills, and emotional
                resilience.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Cognitive Behavioral Therapy (CBT)",
                  "Emotionally Focused Therapy",
                  "Narrative Therapy",
                  "Mindfulness-Based Approaches",
                  "Family Systems",
                  "Strength-Based & Person-Centered",
                ].map((modality) => (
                  <div
                    key={modality}
                    className="px-4 py-3 bg-cream-dark rounded-xl text-sm text-charcoal"
                  >
                    {modality}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-linen to-cream shadow-xl shadow-sand/20">
                <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/10 to-terracotta-soft/10 flex items-center justify-center">
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
                          d="M8 9l4 4 4-4"
                        />
                      </svg>
                    </div>
                    <p className="text-warm-gray text-sm">
                      Peaceful office detail image placeholder
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-terracotta-soft/30 -z-10" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-linen">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <span className="inline-block font-serif text-sage text-lg italic">
                Issues Commonly Addressed
              </span>
              <h3 className="font-serif text-3xl text-charcoal">
                You don&apos;t have to carry it alone
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Anxiety & Stress",
                "Depression & Low Mood",
                "Relationship & Family Dynamics",
                "Codependency & Boundaries",
                "Self-Esteem & Identity",
                "Divorce & Separation",
                "Parenting Challenges",
                "Grief & Loss",
              ].map((issue) => (
                <div
                  key={issue}
                  className="group flex items-center gap-3 p-4 bg-cream rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <span className="text-charcoal">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
            <div className="p-10 rounded-3xl bg-gradient-to-br from-sage-soft/30 to-sage-soft/10">
              <h3 className="font-serif text-3xl text-charcoal">
                Telehealth Format
              </h3>
              <p className="text-warm-gray mt-4 leading-relaxed">
                Sessions are held through secure, confidential video to provide
                flexibility and privacy wherever you are in California.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Secure", "Private", "Convenient"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-cream rounded-full text-sm text-charcoal-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10">
              <h3 className="font-serif text-3xl text-charcoal">
                Fees & Insurance
              </h3>
              <div className="mt-4 space-y-3 text-warm-gray">
                <p>
                  <span className="font-serif text-4xl text-charcoal">
                    $175
                  </span>{" "}
                  per session
                </p>
                <p>Out-of-network provider with superbills available.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <span className="inline-block font-serif text-sage text-lg italic">
                How Therapy Works
              </span>
              <h3 className="font-serif text-3xl text-charcoal">
                A clear, supportive process
              </h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Consultation call",
                "Intake session",
                "Weekly or bi-weekly sessions",
                "Ongoing assessment & growth",
              ].map((step, index) => (
                <div
                  key={step}
                  className="p-6 bg-cream rounded-2xl text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-sage-soft/40 flex items-center justify-center font-serif text-lg text-charcoal">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-warm-gray mt-4">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="book" className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block font-serif text-sage text-lg italic">
              Ready to Start?
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
              Book a free 15-minute consultation
            </h3>
            <p className="text-warm-gray">
              Let&apos;s talk about your goals and see if therapy is the right
              fit.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300"
            >
              Book a Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
