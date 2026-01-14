import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="relative">
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-16 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-sage-soft/25 to-transparent animate-float" />
            <div className="absolute -bottom-32 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-terracotta-soft/20 to-transparent animate-float-reverse" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Meet Your Therapist
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Hello, I&apos;m [Therapist Name], AMFT
                  <br />
                  <span className="font-medium">
                    Compassionate care in California
                  </span>
                </h1>
                <p className="text-lg text-warm-gray leading-relaxed max-w-xl">
                  I offer collaborative therapy to individuals, couples, and
                  families seeking clarity, emotional safety, and meaningful
                  change. Therapy is a space to feel seen, understood, and
                  supported as you move toward the life you want.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300"
                  >
                    Book a Free Consultation
                  </a>
                  <a
                    href="#values"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-sand text-charcoal-soft rounded-full hover:border-sage hover:text-charcoal transition-all duration-300"
                  >
                    My Values
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] max-w-sm mx-auto rounded-[2rem] overflow-hidden bg-gradient-to-br from-linen to-cream-dark shadow-2xl shadow-sand/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-28 h-28 mx-auto rounded-full bg-cream flex items-center justify-center">
                        <svg
                          className="w-12 h-12 text-sand"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM6 20a6 6 0 0112 0"
                          />
                        </svg>
                      </div>
                      <p className="text-warm-gray text-sm">
                        Headshot in a calm, natural setting
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-sage-soft/30 -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream-dark">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Why I Do This Work
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                  Therapy as a space for restoration and growth
                </h2>
                <p className="text-warm-gray leading-relaxed">
                  I&apos;m passionate about helping people reconnect with their
                  strengths, navigate complex emotions, and build relationships
                  rooted in honesty and care. I believe healing happens when we
                  feel safe enough to explore our stories and brave enough to
                  rewrite them.
                </p>
              </div>

              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-linen to-cream shadow-xl shadow-sand/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-sage-soft/10 to-terracotta-soft/10 flex items-center justify-center">
                    <div className="text-center space-y-3 p-6">
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
                        Lifestyle image of a serene office corner
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="values" className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <span className="inline-block font-serif text-sage text-lg italic">
                Values & Philosophy
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                A grounded, inclusive approach
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Inclusivity",
                "Non-judgment",
                "Curiosity",
                "Emotional safety",
                "Personal growth",
                "Connection and meaning",
              ].map((value, index) => (
                <div
                  key={value}
                  className="relative p-6 bg-cream-dark rounded-2xl shadow-sm"
                >
                  <span className="absolute top-4 right-4 text-xs text-warm-gray">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal">{value}</h3>
                  <p className="text-sm text-warm-gray mt-3">
                    A steady foundation for a therapeutic relationship built on
                    trust.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-linen">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="font-serif text-3xl text-charcoal">
                  Credentials & Education
                </h3>
                <ul className="text-warm-gray space-y-3">
                  <li>
                    MA in Counseling Psychology — University of San Francisco
                    (2023)
                  </li>
                  <li>
                    BA in Communications — University of California, Davis
                    (2016)
                  </li>
                </ul>
                <div className="pt-4 border-t border-sand/60">
                  <h4 className="font-serif text-2xl text-charcoal">
                    Clinical Credentials
                  </h4>
                  <p className="text-warm-gray mt-2">
                    Licensed as AMFT in California
                    <br />
                    Supervised by: [Supervisor Name, License #]
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="font-serif text-3xl text-charcoal">
                  Populations Served
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Adults", "Teens", "Couples", "Families"].map((group) => (
                    <div
                      key={group}
                      className="p-4 bg-cream rounded-xl text-charcoal text-center"
                    >
                      {group}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-sand/60">
                  <h4 className="font-serif text-2xl text-charcoal">
                    Experience & Training
                  </h4>
                  <p className="text-warm-gray mt-2">
                    CBT, Emotionally Focused Therapy, mindfulness-based work,
                    narrative therapy, family systems, and strength-based
                    approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-cream">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Personal Note
                </span>
                <h3 className="font-serif text-3xl text-charcoal">
                  A little about me outside of therapy
                </h3>
                <p className="text-warm-gray leading-relaxed">
                  When I&apos;m not in session, you can find me exploring local
                  trails, trying new coffee shops, or reading about creativity
                  and resilience. I value the small moments that help us feel
                  grounded and connected.
                </p>
              </div>

              <div className="relative">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-linen to-cream shadow-xl shadow-sand/20">
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
                            d="M3 7h18M5 7V5a2 2 0 012-2h2m8 4V5a2 2 0 00-2-2h-2m-6 0h6"
                          />
                        </svg>
                      </div>
                      <p className="text-warm-gray text-sm">
                        Image of a cozy reading nook or nature trail
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="py-20 bg-cream-dark">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-6">
            <span className="inline-block font-serif text-sage text-lg italic">
              Ready to Begin?
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-charcoal">
              Book a free 15-minute consultation
            </h3>
            <p className="text-warm-gray">
              Let&apos;s see if we&apos;re a good fit and explore the next step
              together.
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
