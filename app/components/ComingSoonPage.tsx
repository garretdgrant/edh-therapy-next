import Image from "next/image";
import officeCorner from "../assets/About/office-corner.webp";
import greenTrail from "../assets/About/green-trail.webp";
import { therapistChairPortrait } from "../headshots";

const highlights = [
  {
    eyebrow: "A gentler arrival",
    title: "A quieter intake experience",
    description:
      "Fresh copy, calmer transitions, and a more grounded first impression are being shaped with care.",
  },
  {
    eyebrow: "More guidance",
    title: "Resources that feel steady",
    description:
      "Supportive educational content and thoughtful next steps are being prepared for clients who want clarity before reaching out.",
  },
  {
    eyebrow: "Same heart, refined",
    title: "The atmosphere is the work",
    description:
      "Every detail is being tuned to feel soft, spacious, and emotionally safe rather than simply finished.",
  },
];

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fdf9f3_0%,#f7f1e8_45%,#efe7db_100%)] text-charcoal">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-[26rem] w-[26rem] rounded-full bg-sage-soft/35 blur-3xl" />
        <div className="absolute right-[-7rem] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-terracotta-soft/35 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[30rem] -translate-x-1/2 rounded-full bg-linen/80 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233d3933' fill-opacity='.06'%3E%3Ccircle cx='12' cy='12' r='1.5'/%3E%3Ccircle cx='84' cy='58' r='1.2'/%3E%3Ccircle cx='136' cy='120' r='1.3'/%3E%3Ccircle cx='38' cy='108' r='1.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-12 pt-8 lg:px-8">
        <div className="animate-fade-in flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage shadow-[0_16px_30px_rgba(168,181,160,0.28)]">
              <span className="font-serif text-2xl font-semibold text-charcoal">
                E
              </span>
            </div>
            <div>
              <p className="font-serif text-2xl font-medium tracking-[0.02em]">
                EDH Therapy
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-warm-gray">
                Sanctuary In Progress
              </p>
            </div>
          </div>

          <div className="hidden rounded-full border border-charcoal/10 bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-charcoal-soft shadow-[0_12px_30px_rgba(61,57,51,0.06)] backdrop-blur md:block">
            Under Construction
          </div>
        </div>

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-16 lg:py-14">
          <section className="space-y-8">
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-3 rounded-full border border-sage/20 bg-white/55 px-5 py-2.5 shadow-[0_12px_26px_rgba(61,57,51,0.05)] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-sage animate-pulse-gentle" />
              <span className="text-xs uppercase tracking-[0.28em] text-charcoal-soft">
                A calmer space is on the way
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="animate-fade-in-up delay-200 max-w-3xl font-serif text-5xl font-light leading-[0.96] tracking-[-0.03em] text-charcoal md:text-6xl lg:text-[5.4rem]">
                This page is being
                <span className="block italic text-charcoal-soft">
                  quietly shaped.
                </span>
              </h1>

              <p className="animate-fade-in-up delay-300 max-w-2xl text-lg leading-8 text-warm-gray md:text-xl">
                We are building a softer, more spacious experience here right
                now. The goal is not just to launch another page, but to create
                something that feels grounded, clear, and emotionally safe from
                the first glance.
              </p>
            </div>

            <div className="animate-fade-in-up delay-400 grid gap-4 sm:grid-cols-[auto_1fr]">
              <div className="rounded-[1.75rem] border border-charcoal/10 bg-white/60 p-5 shadow-[0_22px_50px_rgba(61,57,51,0.08)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                  In the meantime
                </p>
                <p className="mt-3 font-serif text-2xl text-charcoal">
                  The rest of the site is still live.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-sage/20 bg-sage-soft/20 p-5 shadow-[0_22px_50px_rgba(168,181,160,0.12)]">
                <p className="text-sm uppercase tracking-[0.24em] text-charcoal-soft">
                  Need support now?
                </p>
                <div className="mt-4 flex flex-col gap-3 text-base text-charcoal sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href="tel:9165004431"
                    className="transition-colors duration-300 hover:text-charcoal-soft"
                  >
                    (916) 500-4431
                  </a>
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-charcoal/25 sm:block" />
                  <a
                    href="mailto:contact@edhtherapy.com"
                    className="transition-colors duration-300 hover:text-charcoal-soft"
                  >
                    contact@edhtherapy.com
                  </a>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up delay-500 grid gap-4 md:grid-cols-3">
              {highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-[1.5rem] border border-charcoal/10 bg-white/55 p-5 shadow-[0_20px_40px_rgba(61,57,51,0.06)] backdrop-blur transition-transform duration-500 hover:-translate-y-1"
                >
                  <p className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">
                    {highlight.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-2xl leading-tight text-charcoal">
                    {highlight.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-charcoal-soft">
                    {highlight.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <aside className="relative">
            <div className="animate-scale-in delay-300 relative mx-auto max-w-xl">
              <div className="absolute left-6 right-6 top-8 h-full rounded-[2rem] border border-white/50 bg-white/30 shadow-[0_30px_80px_rgba(61,57,51,0.08)] backdrop-blur" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-charcoal/10 bg-white/55 p-4 shadow-[0_30px_80px_rgba(61,57,51,0.09)] backdrop-blur">
                <div className="grid gap-4 md:grid-cols-[0.78fr_1fr]">
                  <div className="relative min-h-[280px] overflow-hidden rounded-[2rem]">
                    <Image
                      src={therapistChairPortrait}
                      alt="Therapy portrait in a calm, welcoming setting"
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(min-width: 1024px) 22rem, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/18 via-transparent to-transparent" />
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[1.75rem] border border-charcoal/10 bg-cream/80 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">
                        Moodboard
                      </p>
                      <div className="mt-4 grid grid-cols-[0.95fr_1.05fr] gap-3">
                        <div className="relative min-h-[154px] overflow-hidden rounded-[1.3rem]">
                          <Image
                            src={officeCorner}
                            alt="A quiet room corner with soft natural light"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 10rem, 50vw"
                          />
                        </div>
                        <div className="relative min-h-[154px] overflow-hidden rounded-[1.3rem]">
                          <Image
                            src={greenTrail}
                            alt="A green trail suggesting calm movement and reflection"
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 10rem, 50vw"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-sage/20 bg-[linear-gradient(180deg,rgba(197,207,190,0.26),rgba(255,255,255,0.72))] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-charcoal-soft">
                            Status
                          </p>
                          <p className="mt-2 font-serif text-3xl text-charcoal">
                            In progress
                          </p>
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-charcoal/10 bg-white/70">
                          <div className="h-7 w-7 rounded-full border-2 border-sage border-t-transparent animate-spin" />
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        {[
                          "Refining message hierarchy",
                          "Preparing softer visual storytelling",
                          "Polishing the call-to-action flow",
                        ].map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-2xl bg-white/55 px-4 py-3"
                          >
                            <span className="h-2 w-2 rounded-full bg-sage" />
                            <span className="text-sm text-charcoal-soft">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
