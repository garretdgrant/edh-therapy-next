import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import greenTrail from "../assets/About/green-trail.webp";
import officeCorner from "../assets/About/office-corner.webp";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
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
                      Meet Your Therapist
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
                    Hello, I&apos;m
                    <br />
                    <span className="font-medium italic text-charcoal-soft">
                      [Therapist Name]
                    </span>
                    <br />
                    AMFT
                  </h1>
                </div>

                <p className="text-lg text-warm-gray leading-relaxed max-w-xl opacity-0-initial animate-fade-in-up delay-200">
                  I offer collaborative therapy to individuals, couples, and
                  families seeking clarity, emotional safety, and meaningful
                  change. Therapy is a space to feel seen, understood, and
                  supported as you move toward the life you want.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 opacity-0-initial animate-fade-in-up delay-400">
                  <a
                    href="#book"
                    className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Book a Free Consultation</span>
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
                  <a
                    href="#values"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand text-charcoal-soft rounded-full hover:border-sage hover:text-charcoal transition-all duration-300"
                  >
                    <span>My Values</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Photo Placeholder */}
              <div className="relative opacity-0-initial animate-scale-in delay-300">
                {/* Organic decorative elements - outside overflow container */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-sage-soft/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-terracotta-soft/30 blur-sm" />

                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-linen to-cream-dark shadow-2xl shadow-sand/30">
                  {/* Decorative frame */}
                  <div className="absolute inset-4 border border-sand/50 rounded-[1.5rem]" />

                  {/* Photo placeholder with elegant styling */}
                  <div className="absolute inset-8 rounded-[1rem] bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/20 flex items-center justify-center">
                    <div className="text-center space-y-4 p-8">
                      <div className="w-24 h-24 mx-auto rounded-full bg-cream flex items-center justify-center">
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
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-warm-gray text-sm">
                        Professional headshot
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why I Do This Work Section */}
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Why I Do This Work
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Therapy as a space for
                  <br />
                  <span className="font-medium">restoration & growth</span>
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  I&apos;m passionate about helping people reconnect with their
                  strengths, navigate complex emotions, and build relationships
                  rooted in honesty and care.
                </p>
                <p className="text-lg text-warm-gray leading-relaxed">
                  I believe healing happens when we feel safe enough to explore
                  our stories and brave enough to rewrite them.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-px bg-sand" />
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <div className="w-12 h-px bg-sand" />
                </div>
              </div>

              {/* Photo Placeholder */}
              <div className="relative">
                {/* Decorative element - outside overflow container */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-sage-soft/30 blur-sm" />

                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl shadow-sand/20">
                  <Image
                    src={officeCorner}
                    alt="Serene therapy office corner with soft light"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Philosophy Section */}
        <section
          id="values"
          className="py-24 md:py-32 bg-cream relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sage-soft/10 to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                Values & Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                A grounded, inclusive approach
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                These core values guide every session and shape the therapeutic
                relationship we build together.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Inclusivity",
                  desc: "Creating a welcoming space for all identities, backgrounds, and experiences.",
                },
                {
                  title: "Non-judgment",
                  desc: "Meeting you where you are with compassion, not criticism.",
                },
                {
                  title: "Curiosity",
                  desc: "Approaching your story with genuine interest and openness.",
                },
                {
                  title: "Emotional Safety",
                  desc: "Building a foundation of trust where vulnerability feels possible.",
                },
                {
                  title: "Personal Growth",
                  desc: "Supporting your journey toward the person you want to become.",
                },
                {
                  title: "Connection",
                  desc: "Fostering meaningful relationships with yourself and others.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="group relative p-8 bg-cream-dark rounded-2xl hover:bg-linen transition-all duration-500 cursor-default"
                >
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center text-sm font-serif font-medium text-charcoal-soft group-hover:bg-sage-soft/50 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-4 pt-4">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {value.title}
                    </h3>
                    <p className="text-warm-gray text-sm leading-relaxed">
                      {value.desc}
                    </p>
                    <div className="w-8 h-px bg-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials Section */}
        <section className="py-24 md:py-32 bg-linen relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sage-soft/10 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                Background
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                Credentials & Experience
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Education Card */}
              <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-sage-soft/30 to-sage-soft/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sage-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-cream/60 rounded-xl">
                      <p className="font-medium text-charcoal">
                        MA in Counseling Psychology
                      </p>
                      <p className="text-warm-gray text-sm mt-1">
                        University of San Francisco — 2023
                      </p>
                    </div>
                    <div className="p-4 bg-cream/60 rounded-xl">
                      <p className="font-medium text-charcoal">
                        BA in Communications
                      </p>
                      <p className="text-warm-gray text-sm mt-1">
                        University of California, Davis — 2016
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical Card */}
              <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-terracotta-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-cream flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-terracotta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Clinical Credentials
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-cream/60 rounded-xl">
                      <p className="font-medium text-charcoal">
                        Associate Marriage & Family Therapist
                      </p>
                      <p className="text-warm-gray text-sm mt-1">
                        Licensed in California
                      </p>
                    </div>
                    <div className="p-4 bg-cream/60 rounded-xl">
                      <p className="font-medium text-charcoal">
                        Clinical Supervision
                      </p>
                      <p className="text-warm-gray text-sm mt-1">
                        Supervised by: [Supervisor Name, License #]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Training Modalities */}
            <div className="mt-12 p-8 md:p-10 bg-cream rounded-3xl">
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <h4 className="font-serif text-2xl text-charcoal">
                    Training & Modalities
                  </h4>
                  <p className="text-warm-gray mt-2">
                    Evidence-based approaches tailored to your needs.
                  </p>
                </div>
                <div className="md:w-2/3 flex flex-wrap gap-3">
                  {[
                    "CBT",
                    "Emotionally Focused Therapy",
                    "Mindfulness-Based",
                    "Narrative Therapy",
                    "Family Systems",
                    "Strength-Based",
                  ].map((modality) => (
                    <span
                      key={modality}
                      className="px-4 py-2 bg-cream-dark rounded-full text-sm text-charcoal-soft"
                    >
                      {modality}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Populations Served */}
        <section className="py-24 md:py-32 bg-cream relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Who I Work With
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Serving individuals,
                  <br />
                  <span className="font-medium">couples & families</span>
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  I work with clients at various life stages, helping navigate
                  transitions, strengthen relationships, and build emotional
                  resilience.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { name: "Adults", desc: "Individual therapy for ages 18+" },
                  { name: "Teens", desc: "Adolescent support ages 13-17" },
                  {
                    name: "Couples",
                    desc: "Relationship & premarital therapy",
                  },
                  { name: "Families", desc: "Family systems & dynamics" },
                ].map((group, index) => (
                  <div
                    key={group.name}
                    className="group relative p-8 bg-cream-dark rounded-2xl hover:bg-linen transition-all duration-500 cursor-default"
                  >
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sage-soft/30 flex items-center justify-center text-xs font-medium text-charcoal-soft">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <span className="font-serif text-2xl text-charcoal group-hover:text-charcoal-soft transition-colors duration-300">
                      {group.name}
                    </span>
                    <p className="text-warm-gray text-sm mt-2">{group.desc}</p>
                    <div className="mt-4 w-8 h-px bg-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Note Section */}
        <section className="py-24 md:py-32 bg-cream-dark relative overflow-hidden">
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Photo Placeholder */}
              <div className="relative order-2 lg:order-1">
                {/* Decorative element - outside overflow container */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-sage-soft/30 blur-sm" />

                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-xl shadow-sand/20">
                  <Image
                    src={greenTrail}
                    alt="Green forest trail in soft light"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Personal Note
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  A little about me
                  <br />
                  <span className="font-medium">outside of therapy</span>
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  When I&apos;m not in session, you can find me exploring local
                  trails, trying new coffee shops, or reading about creativity
                  and resilience. I value the small moments that help us feel
                  grounded and connected.
                </p>
                <p className="text-lg text-warm-gray leading-relaxed">
                  I believe that who we are as people influences how we show up
                  as therapists — and I bring my whole self to this work.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-px bg-sand" />
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <div className="w-12 h-px bg-sand" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="book"
          className="py-24 md:py-32 bg-cream relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8">
              <span className="inline-block font-serif text-sage text-lg italic">
                Ready to Begin?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
                Let&apos;s see if we&apos;re
                <br />a good fit
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
                Book a free 15-minute consultation to explore how therapy could
                support you. No pressure, just a conversation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <a
                  href="#"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-charcoal text-cream rounded-full hover:bg-charcoal-soft transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-lg"
                >
                  <span>Book a Free Consultation</span>
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
              </div>

              {/* Alternative contact */}
              <div className="pt-8 space-y-4">
                <p className="text-warm-gray text-sm">
                  Prefer to reach out directly?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a
                    href="tel:9164712562"
                    className="flex items-center gap-2 text-charcoal hover:text-sage transition-colors duration-300"
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
                  <span className="hidden sm:block text-sand">|</span>
                  <a
                    href="mailto:contact@edhtherapy.com"
                    className="flex items-center gap-2 text-charcoal hover:text-sage transition-colors duration-300"
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
