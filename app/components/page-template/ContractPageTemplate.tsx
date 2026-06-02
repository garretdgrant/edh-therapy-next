import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import SitePageTemplate from "@/app/components/page-template/SitePageTemplate";
import type {
  CardGridSection,
  ContractPageData,
  CtaSection,
  FeatureCardsSection,
  HeroContent,
  InlineTextSegment,
  PageCta,
  PageImage,
  PageSection,
  PageTitle,
  TextImageSection,
} from "@/lib/site-pages/page-content.types";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function EmailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function renderIcon(icon?: PageCta["icon"], className?: string) {
  if (icon === "phone") return <PhoneIcon className={className} />;
  if (icon === "email") return <EmailIcon className={className} />;
  if (icon === "check") return <CheckIcon className={className} />;
  return <ArrowIcon className={className} />;
}

function isRouteHref(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

function RichText({ value }: { value: InlineTextSegment[] }) {
  return (
    <>
      {value.map((segment, index) => {
        if (typeof segment === "string") {
          return <span key={index}>{segment}</span>;
        }

        const content = segment.strong ? (
          <strong className={segment.className}>{segment.text}</strong>
        ) : (
          <span className={segment.className}>{segment.text}</span>
        );

        if (!segment.href) {
          return <span key={index}>{content}</span>;
        }

        const className =
          segment.className ??
          "font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft";

        return isRouteHref(segment.href) ? (
          <Link key={index} href={segment.href} className={className}>
            {segment.text}
          </Link>
        ) : (
          <a key={index} href={segment.href} className={className}>
            {segment.text}
          </a>
        );
      })}
    </>
  );
}

function SectionTitle({
  as = "h2",
  title,
  className,
}: {
  as?: "h1" | "h2";
  title: PageTitle;
  className: string;
}) {
  const Heading = as;

  return (
    <Heading className={className}>
      {title.map((line, index) => {
        const content = line.accent ? (
          <span className="font-medium italic text-charcoal-soft">
            {line.text}
          </span>
        ) : (
          line.text
        );

        return (
          <span
            key={`${line.text}-${index}`}
            className={index > 0 ? "block" : undefined}
          >
            {content}
          </span>
        );
      })}
    </Heading>
  );
}

function DecorativeBackground() {
  return (
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
  );
}

function CurveDivider() {
  return (
    <svg
      className="absolute top-0 left-0 right-0 h-16 w-full text-cream"
      preserveAspectRatio="none"
      viewBox="0 0 1440 64"
    >
      <path
        fill="currentColor"
        d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 pt-4">
      <div className="h-px w-12 bg-sand" />
      <div className="h-2 w-2 rounded-full bg-sage" />
      <div className="h-px w-12 bg-sand" />
    </div>
  );
}

function CtaLink({ cta, large = false }: { cta: PageCta; large?: boolean }) {
  const base =
    "inline-flex items-center justify-center transition-all duration-300";
  const primary = `${base} group gap-3 rounded-full bg-charcoal text-cream hover:-translate-y-0.5 hover:bg-charcoal-soft hover:shadow-xl ${large ? "px-10 py-5 text-lg" : "px-8 py-4"}`;
  const secondary = `${base} gap-2 rounded-full border border-sand text-charcoal-soft hover:border-sage hover:text-charcoal ${large ? "px-8 py-4" : "px-8 py-4"}`;
  const text = `${base} gap-2 text-charcoal hover:text-sage`;
  const className =
    cta.variant === "primary"
      ? primary
      : cta.variant === "secondary"
        ? secondary
        : text;

  const content = (
    <>
      {cta.icon && cta.icon !== "arrow" ? renderIcon(cta.icon) : null}
      <span>{cta.label}</span>
      {cta.variant === "primary" || cta.icon === "arrow"
        ? renderIcon(
            "arrow",
            large
              ? "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              : "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1",
          )
        : null}
    </>
  );

  return isRouteHref(cta.href) ? (
    <Link href={cta.href} className={className}>
      {content}
    </Link>
  ) : (
    <a href={cta.href} className={className}>
      {content}
    </a>
  );
}

function FramedImage({ image }: { image: PageImage }) {
  return (
    <div className="relative opacity-0-initial animate-scale-in delay-300">
      <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-sage-soft/40 blur-sm" />
      <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-terracotta-soft/30 blur-sm" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-sand/30">
        <div className="absolute inset-4 rounded-[1.5rem] border border-sand/50" />
        <div className="absolute inset-8 overflow-hidden rounded-[1rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={image.priority}
            unoptimized={image.unoptimized}
            className={image.objectClassName ?? "object-cover object-center"}
            sizes={image.sizes ?? "(min-width: 1024px) 40vw, 80vw"}
          />
        </div>
      </div>
    </div>
  );
}

function StandaloneImage({ image }: { image: PageImage }) {
  return (
    <div className="relative">
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-sage-soft/30 blur-sm" />
      <div
        className={`relative overflow-hidden rounded-[2rem] shadow-xl shadow-sand/20 ${image.className ?? "aspect-[4/3]"}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={image.objectClassName ?? "object-cover"}
          sizes={image.sizes ?? "(min-width: 1024px) 45vw, 100vw"}
        />
      </div>
    </div>
  );
}

function HeroSection({ hero }: { hero: HeroContent }) {
  const minHeight =
    hero.minHeight === "contact"
      ? "min-h-[70vh]"
      : hero.minHeight === "screen"
        ? "min-h-screen"
        : "min-h-[85vh]";

  return (
    <section
      className={`relative ${minHeight} flex items-center overflow-hidden pt-32`}
    >
      <DecorativeBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-6 opacity-0-initial animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-sage-soft/30 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
                <span className="text-sm tracking-wide text-charcoal-soft">
                  {hero.eyebrow}
                </span>
              </div>
              <SectionTitle
                as="h1"
                title={hero.title}
                className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-charcoal md:text-6xl lg:text-7xl"
              />
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-warm-gray opacity-0-initial animate-fade-in-up delay-200">
              <RichText value={hero.description} />
            </p>
            {hero.contactCards ? (
              <div className="space-y-4 opacity-0-initial animate-fade-in-up delay-400">
                {hero.contactCards.map((card) => {
                  const content = (
                    <>
                      <div
                        className={`h-12 w-12 rounded-xl ${card.toneClassName} flex items-center justify-center transition-colors duration-300`}
                      >
                        <svg
                          className="h-6 w-6 text-charcoal-soft"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {card.iconPaths.map((path) => (
                            <path
                              key={path}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d={path}
                            />
                          ))}
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-warm-gray">{card.label}</p>
                        <p className="font-medium text-charcoal">
                          {card.value}
                        </p>
                        {card.note ? (
                          <p className="text-xs text-warm-gray">{card.note}</p>
                        ) : null}
                      </div>
                    </>
                  );

                  if (card.href) {
                    const className =
                      "group flex items-center gap-4 rounded-2xl bg-cream-dark/50 p-4 transition-all duration-300 hover:bg-cream-dark";

                    return isRouteHref(card.href) ? (
                      <Link
                        key={card.label}
                        href={card.href}
                        className={className}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        key={card.label}
                        href={card.href}
                        className={className}
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={card.label}
                      className="flex items-center gap-4 rounded-2xl bg-cream-dark/50 p-4"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {hero.ctas ? (
              <div className="flex flex-col gap-4 opacity-0-initial animate-fade-in-up delay-400 sm:flex-row">
                {hero.ctas.map((cta) => (
                  <CtaLink key={cta.label} cta={cta} />
                ))}
              </div>
            ) : null}
          </div>
          {hero.form ? (
            <div className="relative opacity-0-initial animate-scale-in delay-300">
              <div className="relative rounded-[2rem] border border-sand/20 bg-cream p-8 shadow-2xl shadow-sand/20 md:p-10">
                <div className="mb-8">
                  <h2 className="font-serif text-2xl text-charcoal md:text-3xl">
                    {hero.form.title}
                  </h2>
                  <p className="mt-2 text-warm-gray">{hero.form.description}</p>
                </div>
                <ContactForm />
              </div>
              <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-sage-soft/40 blur-sm" />
              <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full bg-terracotta-soft/30 blur-sm" />
            </div>
          ) : hero.image ? (
            <FramedImage image={hero.image} />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function TextImage({ section }: { section: TextImageSection }) {
  const sectionClass =
    section.surface === "cream-dark" ? "bg-cream-dark" : "bg-cream";
  const text = (
    <div className="space-y-8">
      <span className="inline-block font-serif text-lg italic text-sage">
        {section.eyebrow}
      </span>
      <SectionTitle
        title={section.title}
        className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl"
      />
      {section.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg leading-relaxed text-warm-gray">
          <RichText value={paragraph} />
        </p>
      ))}
      {section.divider ? <Divider /> : null}
    </div>
  );
  const image = section.image ? (
    <StandaloneImage image={section.image} />
  ) : null;

  return (
    <section
      id={section.id}
      className={`relative overflow-hidden py-24 md:py-32 ${sectionClass}`}
    >
      {section.surface === "cream-dark" ? <CurveDivider /> : null}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className={section.imageFirst ? "order-2 lg:order-1" : ""}>
            {section.imageFirst ? image : text}
          </div>
          <div className={section.imageFirst ? "order-1 lg:order-2" : ""}>
            {section.imageFirst ? text : image}
          </div>
        </div>
      </div>
    </section>
  );
}

function CardGrid({ section }: { section: CardGridSection }) {
  const surface =
    section.surface === "linen"
      ? "bg-linen"
      : section.surface === "cream-dark"
        ? "bg-cream-dark"
        : "bg-cream";
  const grid =
    section.columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : section.columns === 2
        ? "grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id={section.id}
      className={`relative overflow-hidden py-24 md:py-32 ${surface}`}
    >
      {section.surface === "cream-dark" ? <CurveDivider /> : null}
      {section.surface === "linen" ? (
        <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-sage-soft/10 to-transparent" />
      ) : null}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {section.eyebrow || section.description || section.title.length > 0 ? (
          <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
            {section.eyebrow ? (
              <span className="inline-block font-serif text-lg italic text-sage">
                {section.eyebrow}
              </span>
            ) : null}
            <SectionTitle
              title={section.title}
              className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl"
            />
            {section.description ? (
              <p className="text-lg leading-relaxed text-warm-gray">
                <RichText value={section.description} />
              </p>
            ) : null}
          </div>
        ) : null}
        <div className={`grid gap-6 ${grid}`}>
          {section.cards.map((card, index) => {
            if (section.cardVariant === "compact") {
              const compactContent = (
                <>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-sage-soft/30 transition-colors duration-300 group-hover:bg-sage-soft/50">
                    {card.icon ? (
                      <svg
                        className="h-5 w-5 text-charcoal-soft"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={card.icon}
                        />
                      </svg>
                    ) : (
                      <span className="font-serif text-sm text-charcoal-soft">
                        +
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-charcoal">
                    {card.title}
                  </span>
                </>
              );

              if (section.linkedCards && card.href) {
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group flex items-center gap-4 rounded-xl bg-cream p-5 transition-all duration-300 hover:bg-cream-dark"
                  >
                    {compactContent}
                  </Link>
                );
              }

              return (
                <div
                  key={card.title}
                  className="group flex cursor-default items-center gap-4 rounded-xl bg-cream p-5 transition-all duration-300 hover:bg-cream-dark"
                >
                  {compactContent}
                </div>
              );
            }

            const content = (
              <>
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-sage-soft/30 text-sm font-serif font-medium text-charcoal-soft transition-colors duration-300 group-hover:bg-sage-soft/50">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="space-y-4 pt-4">
                  {card.icon ? (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sage-soft to-sage-soft/50">
                      <svg
                        className="h-7 w-7 text-charcoal"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={card.icon}
                        />
                      </svg>
                    </div>
                  ) : null}
                  <h3 className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-charcoal-soft md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-warm-gray">
                    {card.description ?? card.desc}
                  </p>
                  {card.features ? (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {card.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-cream-dark px-3 py-1 text-xs text-charcoal-soft"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  <div className="h-px w-8 bg-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </>
            );

            if (section.linkedCards && card.href) {
              return (
                <Link
                  key={card.title}
                  href={card.href}
                  className="group relative rounded-2xl bg-cream-dark p-8 transition-all duration-500 hover:bg-linen"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={card.title}
                className="group relative rounded-2xl bg-cream p-8 transition-all duration-500 hover:bg-linen md:p-10"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SplitCards({
  section,
}: {
  section: Extract<PageSection, { type: "split-cards" }>;
}) {
  return (
    <section id={section.id} className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="inline-block font-serif text-lg italic text-sage">
              {section.eyebrow}
            </span>
            <SectionTitle
              title={section.title}
              className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl"
            />
            <p className="text-lg leading-relaxed text-warm-gray">
              <RichText value={section.description} />
            </p>
            {section.image ? (
              <div className="relative mt-8">
                <div
                  className={`relative overflow-hidden rounded-2xl shadow-lg shadow-sand/20 ${section.image.className ?? "aspect-[16/9]"}`}
                >
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className={section.image.objectClassName ?? "object-cover"}
                    sizes={
                      section.image.sizes ?? "(min-width: 1024px) 50vw, 100vw"
                    }
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {section.cards.map((card, index) => {
              const content = (
                <>
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-sage-soft/30 text-xs font-medium text-charcoal-soft">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <span className="font-serif text-2xl text-charcoal transition-colors duration-300 group-hover:text-charcoal-soft">
                    {card.title}
                  </span>
                  <p className="mt-2 text-sm text-warm-gray">
                    {card.description ?? card.desc}
                  </p>
                  <div className="mt-4 h-px w-8 bg-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </>
              );

              if (section.linkedCards && card.href) {
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative rounded-2xl bg-cream-dark p-8 transition-all duration-500 hover:bg-linen"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={card.title}
                  className="group relative cursor-default rounded-2xl bg-cream-dark p-8 transition-all duration-500 hover:bg-linen"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ListPanel({
  section,
}: {
  section: Extract<PageSection, { type: "list-panel" }>;
}) {
  return (
    <section
      id={section.id}
      className="relative overflow-hidden bg-cream py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <span className="inline-block font-serif text-lg italic text-sage">
              {section.eyebrow}
            </span>
            <SectionTitle
              title={section.title}
              className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl"
            />
            <p className="text-lg leading-relaxed text-warm-gray">
              <RichText value={section.description} />
            </p>
            <Divider />
          </div>
          <div className="space-y-4">
            {section.items.map((item, index) => (
              <article
                key={item.label ?? item.name ?? item.title}
                className="group rounded-xl p-4 transition-all duration-300 hover:bg-cream-dark"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sage-soft to-sage-soft/50 font-serif font-medium text-charcoal">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-charcoal">
                      {item.label
                        ? `${item.label} - ${item.title}`
                        : (item.name ?? item.title)}
                    </h3>
                    {item.full ? (
                      <p className="text-xs text-warm-gray">{item.full}</p>
                    ) : null}
                    <p className="text-sm leading-7 text-warm-gray">
                      {item.description ?? item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DarkSteps({
  section,
}: {
  section: Extract<PageSection, { type: "dark-steps" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-charcoal-soft/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sage/5 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
          <span className="inline-block font-serif text-lg italic text-sage-soft">
            {section.eyebrow}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-cream md:text-5xl">
            {section.title}
          </h2>
          <p className="text-lg leading-relaxed text-sand">
            <RichText value={section.description} />
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {section.steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative rounded-2xl border border-charcoal-soft/30 bg-charcoal-soft/30 p-8 transition-all duration-500 hover:border-sage/30"
            >
              <span className="absolute right-4 top-4 font-serif text-5xl font-light text-charcoal-soft/40 transition-colors duration-500 group-hover:text-sage/30">
                {step.step ?? String(index + 1).padStart(2, "0")}
              </span>
              <div className="space-y-3 pt-12">
                <h3 className="font-serif text-2xl text-cream">{step.title}</h3>
                <p className="text-sm leading-relaxed text-sand">
                  {step.desc ?? step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
        {section.footer ? (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sand">
            {section.footer}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function FeatureCards({ section }: { section: FeatureCardsSection }) {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {section.cards.map((card) => (
            <article
              key={card.title}
              className={`relative overflow-hidden rounded-3xl p-10 md:p-12 ${
                card.tone === "sage"
                  ? "bg-gradient-to-br from-sage-soft/30 to-sage-soft/10"
                  : "bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10"
              }`}
            >
              <div
                className={`absolute ${
                  card.tone === "sage" ? "top-0 right-0" : "bottom-0 left-0"
                } h-40 w-40 rounded-full ${
                  card.tone === "sage"
                    ? "bg-sage-soft/30"
                    : "bg-terracotta-soft/30"
                } blur-2xl`}
              />
              <div className="relative z-10 space-y-6">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-cream">
                    <svg
                      className={`h-8 w-8 ${card.tone === "sage" ? "text-sage" : "text-terracotta"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={card.icon}
                      />
                    </svg>
                  </div>
                  {card.image ? (
                    <div className="hidden h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-linen to-cream shadow-md sm:block">
                      <Image
                        src={card.image.src}
                        alt={card.image.alt}
                        width={card.image.width ?? 96}
                        height={card.image.height ?? 96}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                </div>
                <h3 className="font-serif text-3xl text-charcoal">
                  {card.title}
                </h3>
                {card.price ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-4xl text-charcoal">
                      {card.price.amount}
                    </span>
                    <span className="text-warm-gray">{card.price.label}</span>
                  </div>
                ) : null}
                {card.description.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-warm-gray">
                    <RichText value={paragraph} />
                  </p>
                ))}
                {card.tags ? (
                  <div className="flex flex-wrap gap-3">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cream px-4 py-1.5 text-sm text-charcoal-soft"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqList({
  section,
}: {
  section: Extract<PageSection, { type: "faq-list" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <span className="inline-block font-serif text-lg italic text-sage">
            {section.eyebrow}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            {section.title}
          </h2>
        </div>
        <div className="space-y-4">
          {section.faqs.map((item) => (
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
        {section.footer ? (
          <p className="mt-10 text-center text-lg text-warm-gray">
            {section.footer.before}{" "}
            <Link
              href={section.footer.href}
              className="font-medium text-charcoal transition-colors duration-300 hover:text-charcoal-soft"
            >
              {section.footer.linkLabel}
            </Link>
            {section.footer.after}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function DirectContact({
  directContact,
}: {
  directContact: NonNullable<CtaSection["directContact"]>;
}) {
  return (
    <div className="space-y-4 pt-8">
      <p className="text-sm text-warm-gray">{directContact.label}</p>
      <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
        <a
          href={directContact.phoneHref}
          className="flex items-center gap-2 text-charcoal transition-colors duration-300 hover:text-sage"
        >
          <PhoneIcon />
          <span>{directContact.phone}</span>
        </a>
        <span className="hidden text-sand sm:block">|</span>
        <a
          href={directContact.emailHref}
          className="flex items-center gap-2 text-charcoal transition-colors duration-300 hover:text-sage"
        >
          <EmailIcon />
          <span>{directContact.emailLabel}</span>
        </a>
      </div>
    </div>
  );
}

function Cta({ section }: { section: CtaSection }) {
  return (
    <section
      id={section.id}
      className={`relative overflow-hidden py-24 md:py-32 ${section.surface === "cream" ? "bg-cream" : "bg-cream-dark"}`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-8 text-center">
          <span className="inline-block font-serif text-lg italic text-sage">
            {section.eyebrow}
          </span>
          <SectionTitle
            title={section.title}
            className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl lg:text-6xl"
          />
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-warm-gray">
            <RichText value={section.description} />
          </p>
          <div className="flex flex-col items-center justify-center gap-6 pt-4 sm:flex-row">
            {section.ctas.map((cta) => (
              <CtaLink key={cta.label} cta={cta} large />
            ))}
          </div>
          {section.directContact ? (
            <DirectContact directContact={section.directContact} />
          ) : null}
        </div>
      </div>
    </section>
  );
}

function Credentials({
  section,
}: {
  section: Extract<PageSection, { type: "credentials" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-linen py-24 md:py-32">
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-sage-soft/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
          <span className="inline-block font-serif text-lg italic text-sage">
            {section.eyebrow}
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-charcoal md:text-5xl">
            {section.title}
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          {section.cards.map((card) => (
            <div
              key={card.title}
              className={`relative overflow-hidden rounded-3xl p-10 md:p-12 ${
                card.tone === "sage"
                  ? "bg-gradient-to-br from-sage-soft/30 to-sage-soft/10"
                  : "bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10"
              }`}
            >
              <div className="relative z-10 space-y-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cream">
                  <svg
                    className={`h-8 w-8 ${card.tone === "sage" ? "text-sage" : "text-terracotta"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {card.icon.map((path) => (
                      <path
                        key={path}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={path}
                      />
                    ))}
                  </svg>
                </div>
                <h3 className="font-serif text-3xl text-charcoal">
                  {card.title}
                </h3>
                <div className="space-y-4">
                  {card.entries.map((entry) => (
                    <div
                      key={entry.title}
                      className="rounded-xl bg-cream/60 p-4"
                    >
                      <p className="font-medium text-charcoal">{entry.title}</p>
                      <p className="mt-1 text-sm text-warm-gray">
                        {entry.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-3xl bg-cream p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/3">
              <h4 className="font-serif text-2xl text-charcoal">
                {section.training.title}
              </h4>
              <p className="mt-2 text-warm-gray">
                {section.training.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:w-2/3">
              {section.training.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-cream-dark px-4 py-2 text-sm text-charcoal-soft"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoGrid({
  section,
}: {
  section: Extract<PageSection, { type: "contact-info-grid" }>;
}) {
  const toneClass = {
    sage: "bg-gradient-to-br from-sage-soft to-sage-soft/50",
    terracotta: "bg-gradient-to-br from-terracotta-soft to-terracotta-soft/50",
    linen: "bg-gradient-to-br from-linen to-sand/50",
  };

  return (
    <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
      <CurveDivider />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {section.cards.map((card) => (
            <div key={card.title} className="rounded-3xl bg-cream p-8">
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${toneClass[card.tone ?? "sage"]}`}
              >
                <svg
                  className="h-7 w-7 text-charcoal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d={card.icon ?? ""}
                  />
                </svg>
              </div>
              <h3 className="mb-3 font-serif text-2xl text-charcoal">
                {card.title}
              </h3>
              <p className="leading-relaxed text-warm-gray">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Crisis({
  section,
}: {
  section: Extract<PageSection, { type: "crisis" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-charcoal-soft/20 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-terracotta-soft/20">
            <svg
              className="h-8 w-8 text-terracotta-soft"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={section.icon}
              />
            </svg>
          </div>
          <div className="text-center md:text-left">
            <h3 className="mb-2 font-serif text-xl text-cream">
              {section.title}
            </h3>
            <p className="leading-relaxed text-sand">
              <RichText value={section.text} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Payment({
  section,
}: {
  section: Extract<PageSection, { type: "payment" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-sage-soft/20 to-terracotta-soft/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-block font-serif text-lg italic text-sage">
              {section.eyebrow}
            </span>
            <SectionTitle
              title={section.title}
              className="font-serif text-3xl font-light leading-tight text-charcoal md:text-4xl"
            />
            <p className="leading-relaxed text-warm-gray">
              <RichText value={section.description} />
            </p>
            <Divider />
          </div>
          <div className="relative rounded-3xl bg-gradient-to-br from-terracotta-soft/30 to-terracotta-soft/10 p-8">
            <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-terracotta-soft/30 blur-2xl" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl text-charcoal">
                  {section.price.amount}
                </span>
                <span className="text-warm-gray">{section.price.label}</span>
              </div>
              <ul className="space-y-3 text-warm-gray">
                {section.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-sage" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqCategories({
  section,
}: {
  section: Extract<PageSection, { type: "faq-categories" }>;
}) {
  return (
    <section className="relative overflow-hidden bg-cream-dark py-24 md:py-32">
      <CurveDivider />
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="space-y-12">
          {section.categories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sage-soft to-sage-soft/50 font-serif font-medium text-charcoal">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-2xl text-charcoal md:text-3xl">
                  {category.category}
                </h2>
              </div>
              <div className="space-y-4 pl-16">
                {category.questions.map((item) => (
                  <article
                    key={item.question}
                    className="group overflow-hidden rounded-2xl bg-cream shadow-md"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 text-left">
                        <h3 className="font-medium text-charcoal transition-colors duration-300 group-hover:text-charcoal-soft">
                          {item.question}
                        </h3>
                        <div className="flex h-8 w-8 flex-shrink-0 rotate-180 items-center justify-center rounded-full bg-sage-soft/50">
                          <svg
                            className="h-4 w-4 text-charcoal-soft"
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
                      </div>
                      <div className="mt-6 border-t border-sand/30 pt-2">
                        <p className="pt-4 leading-relaxed text-warm-gray">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThankYou({
  section,
}: {
  section: Extract<PageSection, { type: "thank-you" }>;
}) {
  return (
    <section className="relative min-h-[78vh] overflow-hidden pt-32 pb-20">
      <DecorativeBackground />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] lg:gap-14">
          <div className="space-y-8">
            <div className="space-y-6 opacity-0-initial animate-fade-in">
              <div className="inline-flex items-center gap-3 rounded-full bg-sage-soft/35 px-4 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sage/70 text-charcoal">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-sm tracking-wide text-charcoal-soft">
                  {section.eyebrow}
                </span>
              </div>
              <SectionTitle
                as="h1"
                title={section.title}
                className="max-w-3xl font-serif text-5xl font-light leading-[1.02] tracking-tight text-charcoal md:text-6xl lg:text-7xl"
              />
            </div>
            <div className="max-w-2xl space-y-5 opacity-0-initial animate-fade-in-up delay-200">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-warm-gray"
                >
                  <RichText value={paragraph} />
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4 opacity-0-initial animate-fade-in-up delay-400 sm:flex-row">
              {section.ctas.map((cta) => (
                <CtaLink key={cta.label} cta={cta} />
              ))}
            </div>
          </div>
          <aside className="relative opacity-0-initial animate-scale-in delay-300">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-sage-soft/45 blur-sm" />
            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-terracotta-soft/35 blur-sm" />
            <div className="relative overflow-hidden rounded-[2rem] border border-sand/30 bg-cream/90 p-8 shadow-2xl shadow-sand/20 backdrop-blur-sm">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-warm-gray">
                    {section.aside.eyebrow}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl text-charcoal">
                    {section.aside.title}
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
                      d={section.aside.icon}
                    />
                  </svg>
                </div>
              </div>
              <div className="space-y-4">
                {section.aside.steps.map((step) => (
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
                  {section.aside.contactEyebrow}
                </p>
                <a
                  href={section.aside.contactHref}
                  className="mt-3 block font-serif text-2xl transition-colors duration-300 hover:text-sage-soft"
                >
                  {section.aside.contactLabel}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ComingSoon({
  section,
}: {
  section: Extract<PageSection, { type: "coming-soon" }>;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#fdf9f3_0%,#f7f1e8_45%,#efe7db_100%)] text-charcoal">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-[26rem] w-[26rem] rounded-full bg-sage-soft/35 blur-3xl" />
        <div className="absolute right-[-7rem] top-[10rem] h-[22rem] w-[22rem] rounded-full bg-terracotta-soft/35 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[26rem] w-[30rem] -translate-x-1/2 rounded-full bg-linen/80 blur-3xl" />
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
                {section.brand}
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-warm-gray">
                {section.subbrand}
              </p>
            </div>
          </div>
          <div className="hidden rounded-full border border-charcoal/10 bg-white/50 px-4 py-2 text-xs uppercase tracking-[0.24em] text-charcoal-soft shadow-[0_12px_30px_rgba(61,57,51,0.06)] backdrop-blur md:block">
            {section.badge}
          </div>
        </div>
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:gap-16 lg:py-14">
          <section className="space-y-8">
            <div className="animate-fade-in-up delay-100 inline-flex items-center gap-3 rounded-full border border-sage/20 bg-white/55 px-5 py-2.5 shadow-[0_12px_26px_rgba(61,57,51,0.05)] backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-sage animate-pulse-gentle" />
              <span className="text-xs uppercase tracking-[0.28em] text-charcoal-soft">
                {section.eyebrow}
              </span>
            </div>
            <div className="space-y-6">
              <SectionTitle
                as="h1"
                title={section.title}
                className="animate-fade-in-up delay-200 max-w-3xl font-serif text-5xl font-light leading-[0.96] tracking-tight text-charcoal md:text-6xl lg:text-[5.4rem]"
              />
              <p className="animate-fade-in-up delay-300 max-w-2xl text-lg leading-8 text-warm-gray md:text-xl">
                {section.description}
              </p>
            </div>
            <div className="animate-fade-in-up delay-400 grid gap-4 sm:grid-cols-[auto_1fr]">
              <div className="rounded-[1.75rem] border border-charcoal/10 bg-white/60 p-5 shadow-[0_22px_50px_rgba(61,57,51,0.08)] backdrop-blur">
                <p className="text-xs uppercase tracking-[0.24em] text-warm-gray">
                  {section.meantime.eyebrow}
                </p>
                <p className="mt-3 font-serif text-2xl text-charcoal">
                  {section.meantime.text}
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-sage/20 bg-sage-soft/20 p-5 shadow-[0_22px_50px_rgba(168,181,160,0.12)]">
                <p className="text-sm uppercase tracking-[0.24em] text-charcoal-soft">
                  {section.support.eyebrow}
                </p>
                <div className="mt-4 flex flex-col gap-3 text-base text-charcoal sm:flex-row sm:items-center sm:gap-6">
                  <a
                    href={section.support.phoneHref}
                    className="transition-colors duration-300 hover:text-charcoal-soft"
                  >
                    {section.support.phone}
                  </a>
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-charcoal/25 sm:block" />
                  <a
                    href={section.support.emailHref}
                    className="transition-colors duration-300 hover:text-charcoal-soft"
                  >
                    {section.support.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up delay-500 grid gap-4 md:grid-cols-3">
              {section.highlights.map((highlight) => (
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
                      src={section.images.portrait.src}
                      alt={section.images.portrait.alt}
                      fill
                      unoptimized={section.images.portrait.unoptimized}
                      className="object-cover"
                      sizes={section.images.portrait.sizes}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/18 via-transparent to-transparent" />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.75rem] border border-charcoal/10 bg-cream/80 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-warm-gray">
                        Moodboard
                      </p>
                      <div className="mt-4 grid grid-cols-[0.95fr_1.05fr] gap-3">
                        {section.images.moodboard.map((image) => (
                          <div
                            key={image.alt}
                            className="relative min-h-[154px] overflow-hidden rounded-[1.3rem]"
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover"
                              sizes={image.sizes}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-[1.75rem] border border-sage/20 bg-[linear-gradient(180deg,rgba(197,207,190,0.26),rgba(255,255,255,0.72))] p-5">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-charcoal-soft">
                            {section.status.eyebrow}
                          </p>
                          <p className="mt-2 font-serif text-3xl text-charcoal">
                            {section.status.title}
                          </p>
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-charcoal/10 bg-white/70">
                          <div className="h-7 w-7 rounded-full border-2 border-sage border-t-transparent animate-spin" />
                        </div>
                      </div>
                      <div className="mt-6 space-y-3">
                        {section.status.items.map((item) => (
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

function renderSection(section: PageSection) {
  switch (section.type) {
    case "text-image":
      return (
        <TextImage key={section.id ?? section.eyebrow} section={section} />
      );
    case "card-grid":
      return (
        <CardGrid
          key={section.id ?? section.title[0]?.text}
          section={section}
        />
      );
    case "split-cards":
      return (
        <SplitCards key={section.id ?? section.eyebrow} section={section} />
      );
    case "list-panel":
      return (
        <ListPanel key={section.id ?? section.eyebrow} section={section} />
      );
    case "dark-steps":
      return <DarkSteps key={section.title} section={section} />;
    case "feature-cards":
      return <FeatureCards key="feature-cards" section={section} />;
    case "faq-list":
      return <FaqList key={section.title} section={section} />;
    case "cta":
      return <Cta key={section.id ?? section.eyebrow} section={section} />;
    case "credentials":
      return <Credentials key={section.title} section={section} />;
    case "contact-info-grid":
      return <ContactInfoGrid key="contact-info-grid" section={section} />;
    case "crisis":
      return <Crisis key={section.title} section={section} />;
    case "payment":
      return <Payment key={section.eyebrow} section={section} />;
    case "faq-categories":
      return <FaqCategories key="faq-categories" section={section} />;
    case "thank-you":
      return <ThankYou key="thank-you" section={section} />;
    case "coming-soon":
      return <ComingSoon key="coming-soon" section={section} />;
    default:
      return null;
  }
}

function ContractPageBody({ data }: { data: ContractPageData }) {
  return (
    <>
      {data.hero ? <HeroSection hero={data.hero} /> : null}
      {data.sections.map((section) => renderSection(section))}
    </>
  );
}

export default function ContractPageTemplate({
  data,
}: {
  data: ContractPageData;
}) {
  if (data.template === "standalone") {
    return <ContractPageBody data={data} />;
  }

  return (
    <SitePageTemplate
      className={data.className}
      jsonLd={data.jsonLd}
      mainClassName={data.mainClassName}
    >
      <ContractPageBody data={data} />
    </SitePageTemplate>
  );
}
