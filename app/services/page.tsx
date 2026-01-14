import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import journalDesk from "../assets/Services/journal-desk.webp";

export default function Services() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main>
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
                      Therapy Services
                    </span>
                  </div>

                  <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-[1.1] tracking-tight">
                    Personalized
                    <br />
                    <span className="font-medium italic text-charcoal-soft">
                      therapy
                    </span>
                    <br />
                    for change
                  </h1>
                </div>

                <p className="text-lg text-warm-gray leading-relaxed max-w-xl opacity-0-initial animate-fade-in-up delay-200">
                  Whether you&apos;re seeking individual support or relationship
                  guidance, therapy is tailored to your goals, values, and lived
                  experience. Together, we&apos;ll find the approach that works
                  for you.
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
                    href="#modalities"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-sand text-charcoal-soft rounded-full hover:border-sage hover:text-charcoal transition-all duration-300"
                  >
                    <span>View Approaches</span>
                  </a>
                </div>
              </div>

              {/* Right Content - Photo Placeholder */}
              <div className="relative opacity-0-initial animate-scale-in delay-300">
                {/* Organic decorative elements - outside overflow container */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-sage-soft/40 blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-terracotta-soft/30 blur-sm" />

                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-sand/30">
                  {/* Decorative frame */}
                  <div className="absolute inset-4 border border-sand/50 rounded-[1.5rem]" />

                  {/* Photo placeholder */}
                  <div className="absolute inset-8 rounded-[1rem] overflow-hidden">
                    <Image
                      src={journalDesk}
                      alt="Journal and desk setup for reflection"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 40vw, 80vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Types Section */}
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
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                What I Offer
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                Types of Therapy
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                Each therapeutic journey is unique. I offer support across
                several formats to meet you where you are.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Individual Therapy",
                  desc: "One-on-one support for anxiety, depression, self-esteem, identity exploration, and navigating life transitions. A space just for you.",
                  icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                  features: ["Adults 18+", "Teens 13-17", "Weekly sessions"],
                },
                {
                  title: "Couples Therapy",
                  desc: "Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection.",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                  features: [
                    "Premarital",
                    "Conflict resolution",
                    "Reconnection",
                  ],
                },
                {
                  title: "Family Therapy",
                  desc: "Work through family dynamics, improve communication patterns, and rebuild trust within your family system.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                  features: ["Parent-child", "Blended families", "Transitions"],
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className="group relative p-8 md:p-10 bg-cream rounded-3xl hover:shadow-xl transition-all duration-500"
                >
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-sage-soft/30 flex items-center justify-center text-sm font-serif font-medium text-charcoal-soft group-hover:bg-sage-soft/50 transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sage-soft to-sage-soft/50 flex items-center justify-center">
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
                          d={service.icon}
                        />
                      </svg>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal">
                      {service.title}
                    </h3>

                    <p className="text-warm-gray leading-relaxed">
                      {service.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-cream-dark rounded-full text-xs text-charcoal-soft"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="w-8 h-px bg-sage opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Therapy Modalities Section */}
        <section
          id="modalities"
          className="py-24 md:py-32 bg-cream relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="inline-block font-serif text-sage text-lg italic">
                  Therapy Modalities
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                  Evidence-based
                  <br />
                  <span className="font-medium">approaches</span>
                </h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  Treatment is customized to your needs, drawing from a blend of
                  modalities that support insight, skills, and emotional
                  resilience. I meet you where you are.
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-px bg-sand" />
                  <div className="w-2 h-2 rounded-full bg-sage" />
                  <div className="w-12 h-px bg-sand" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    name: "CBT",
                    full: "Cognitive Behavioral Therapy",
                    desc: "Identify and change unhelpful thought patterns",
                  },
                  {
                    name: "EFT",
                    full: "Emotionally Focused Therapy",
                    desc: "Strengthen emotional bonds in relationships",
                  },
                  {
                    name: "Mindfulness",
                    full: "Mindfulness-Based Approaches",
                    desc: "Cultivate present-moment awareness",
                  },
                  {
                    name: "Narrative",
                    full: "Narrative Therapy",
                    desc: "Reframe your story and find new meaning",
                  },
                  {
                    name: "Family Systems",
                    full: "Family Systems Theory",
                    desc: "Understand patterns within family dynamics",
                  },
                  {
                    name: "Person-Centered",
                    full: "Strength-Based & Person-Centered",
                    desc: "Build on your existing strengths and wisdom",
                  },
                ].map((approach, index) => (
                  <div
                    key={approach.name}
                    className="group flex items-start gap-6 p-4 rounded-xl hover:bg-cream-dark transition-all duration-300 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sage-soft to-sage-soft/50 flex items-center justify-center text-charcoal font-serif font-medium flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-charcoal font-medium">
                          {approach.name}
                        </span>
                        <span className="text-xs text-warm-gray">
                          {approach.full}
                        </span>
                      </div>
                      <p className="text-sm text-warm-gray mt-1">
                        {approach.desc}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
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
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Issues Addressed Section */}
        <section className="py-24 md:py-32 bg-linen relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sage-soft/10 to-transparent" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
              <span className="inline-block font-serif text-sage text-lg italic">
                Areas of Support
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal leading-tight">
                You don&apos;t have to carry it alone
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                These are some of the challenges I commonly help clients
                navigate. If you don&apos;t see your concern listed, please
                reach out.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Anxiety & Stress",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
                {
                  title: "Depression & Low Mood",
                  icon: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z",
                },
                {
                  title: "Relationship Challenges",
                  icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                },
                {
                  title: "Self-Esteem & Identity",
                  icon: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Life Transitions",
                  icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
                },
                {
                  title: "Codependency & Boundaries",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
                {
                  title: "Divorce & Separation",
                  icon: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636",
                },
                {
                  title: "Parenting Challenges",
                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                },
                {
                  title: "Grief & Loss",
                  icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
              ].map((issue) => (
                <div
                  key={issue.title}
                  className="group flex items-center gap-4 p-5 bg-cream rounded-xl hover:bg-cream-dark transition-all duration-300 cursor-default"
                >
                  <div className="w-10 h-10 rounded-full bg-sage-soft/30 flex items-center justify-center flex-shrink-0 group-hover:bg-sage-soft/50 transition-colors duration-300">
                    <svg
                      className="w-5 h-5 text-charcoal-soft"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={issue.icon}
                      />
                    </svg>
                  </div>
                  <span className="text-charcoal font-medium">
                    {issue.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Therapy Works Section */}
        <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
          {/* Organic shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-charcoal-soft/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-sage/5 blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
              <span className="inline-block font-serif text-sage-soft text-lg italic">
                The Process
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-cream leading-tight">
                How Therapy Works
              </h2>
              <p className="text-lg text-sand leading-relaxed">
                A clear, supportive process designed to help you feel
                comfortable from the very first step.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Free Consultation",
                  desc: "A 15-minute call to discuss your needs and see if we're a good fit",
                },
                {
                  step: "02",
                  title: "Intake Session",
                  desc: "Your first full session to explore your history and goals",
                },
                {
                  step: "03",
                  title: "Regular Sessions",
                  desc: "Weekly or bi-weekly meetings tailored to your schedule",
                },
                {
                  step: "04",
                  title: "Ongoing Growth",
                  desc: "Continuous assessment and adjustment as you progress",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group relative p-8 rounded-2xl bg-charcoal-soft/30 border border-charcoal-soft/30 hover:border-sage/30 transition-all duration-500"
                >
                  <span className="absolute top-4 right-4 font-serif text-5xl font-light text-charcoal-soft/40 group-hover:text-sage/30 transition-colors duration-500">
                    {item.step}
                  </span>
                  <div className="pt-12 space-y-3">
                    <h3 className="font-serif text-2xl text-cream">
                      {item.title}
                    </h3>
                    <p className="text-sand text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Telehealth & Fees Section */}
        <section className="py-24 md:py-32 bg-cream relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Telehealth Card */}
              <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-sage-soft/30 to-sage-soft/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-sage-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-6">
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">
                    Telehealth Sessions
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    Sessions are held through secure, confidential video to
                    provide flexibility and privacy wherever you are in
                    California. No commute, no waiting room.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Secure", "Private", "Convenient", "California-wide"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-4 py-1.5 bg-cream rounded-full text-sm text-charcoal-soft"
                        >
                          {tag}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Fees Card */}
              <div className="relative p-10 md:p-12 rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-terracotta-soft/30 blur-2xl" />
                <div className="relative z-10 space-y-6">
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
                      <span className="text-warm-gray">per 50-min session</span>
                    </div>
                    <p className="text-warm-gray leading-relaxed">
                      I am an out-of-network provider. Superbills are available
                      for potential reimbursement depending on your insurance
                      plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="book"
          className="py-24 md:py-32 bg-cream-dark relative overflow-hidden"
        >
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center space-y-8">
              <span className="inline-block font-serif text-sage text-lg italic">
                Ready to Start?
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
                Take the first step
                <br />
                toward change
              </h2>
              <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
                Book a free 15-minute consultation to discuss your goals and see
                if we&apos;re a good fit. No pressure, just a conversation.
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
