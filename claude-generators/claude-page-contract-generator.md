# EDH Therapy Page Contract Generator

**Purpose:** Generate an implementation-ready `ContractPageData` object for an EDH Therapy page.

This is only a data-contract prompt. Research instructions, source gathering, competitor analysis, and content strategy live elsewhere. The output should be a clean TypeScript data object that works with the shared renderer.

---

## Project Context

- **Site:** EDH Therapy
- **Renderer:** `ContractPageTemplate`
- **Target type:** `ContractPageData` from `@/lib/site-pages/page-content.types`
- **Data path:** `lib/site-pages/{page}.data.ts`
- **Metadata helper:** `buildPageMetadata` from `@/lib/page-metadata`
- **Visible phone:** `916-500-4431`
- **Phone href:** `tel:9165004431`
- **Schema phone:** `+1-916-500-4431`

Route files should stay thin: import the data object, export `metadata`, and render `ContractPageTemplate`.

---

## Required Output Shape

Return TypeScript that exports one object satisfying `ContractPageData`.

```ts
import { buildPageMetadata } from "@/lib/page-metadata";
import type { ContractPageData } from "@/lib/site-pages/page-content.types";

export const pageNameData: ContractPageData = {
  template: "site",
  metadata: buildPageMetadata({
    title: "Page Title",
    description: "Search result description.",
    pathname: "/route",
    imageAlt: "Primary page image alt text",
  }),
  jsonLd: [],
  hero: {
    eyebrow: "Context label",
    title: [{ text: "Visible H1" }],
    description: ["Hero copy."],
    ctas: [
      {
        label: "Book a Free Consultation",
        href: "/contact",
        variant: "primary",
      },
    ],
  },
  sections: [],
};
```

`jsonLd` is optional. When included, each item must be `{ id: string, data: Record<string, unknown> }` and must match visible page content.

---

## Hard Rules

- Output page data only unless asked for additional files.
- Do not output JSX, route-local copy, renderer code, build steps, lint steps, TODOs, or research notes.
- Put all visible page copy in `hero` and `sections`.
- Preserve supplied/current copy verbatim when requested.
- Use only `916-500-4431`, `tel:9165004431`, and `+1-916-500-4431` for phone references.
- Use known internal routes such as `/`, `/about`, `/services`, `/faqs`, and `/contact`.
- Use existing or supplied assets only. Do not invent image imports.
- Every section must use a supported `PageSection` type listed below.
- If an SEO opportunity needs a new visual pattern, propose a contract extension separately instead of inventing a new `type`.

---

## Field Rules

### `template`

- Use `"site"` for normal pages.
- Use `"standalone"` only for special full-screen pages such as thank-you or coming-soon.

### `metadata`

Use `buildPageMetadata({ title, description, pathname, imageAlt, noindex? })`.

- `pathname` must match the canonical route.
- `title` and `description` should be concise and page-specific.
- Use `noindex: true` only when the page should not be indexed.

### `hero`

Use for the H1 and above-the-fold message.

- `title`: `Array<{ text: string; accent?: boolean }>`
- `description`: inline text array
- `ctas`: optional array of `{ label, href, variant, icon? }`
- Phone CTA href must be `tel:9165004431`.

### Inline Text

Fields typed as inline text may use strings or linked text objects:

```ts
[
  "Learn more about ",
  { text: "therapy services", href: "/services", strong: true },
  ".",
];
```

Allowed object fields: `text`, `href`, `strong`, `className`.

Do not use JSX, HTML strings, or markdown links inside copy.

### Page Titles

Every field typed as `PageTitle` must be an array, even for a single-line heading:

```ts
title: [{ text: "Everyone Deserves a Safe Space" }];
```

Do not output `title: "Everyone Deserves a Safe Space"` for `hero`, `text-image`, `card-grid`, `split-cards`, `list-panel`, `payment`, `cta`, `thank-you`, or `coming-soon`.

### Paragraph Arrays

`text-image.paragraphs` and other `InlineTextSegment[][]` fields must be nested arrays:

```ts
paragraphs: [
  ["First paragraph."],
  ["Second paragraph with ", { text: "a link", href: "/services" }, "."],
];
```

Do not output a flat string array for `paragraphs`.

---

## Supported Sections

Use this table as the contract reference. Optional fields may be added when supported by the type.

| Type                | Best For                                                   | Required Fields                                       |
| ------------------- | ---------------------------------------------------------- | ----------------------------------------------------- |
| `text-image`        | Narrative copy, intro, approach, SEO body sections         | `surface`, `eyebrow`, `title`, `paragraphs`           |
| `card-grid`         | Services, specialties, benefits, grouped SEO topics        | `surface`, `title`, `cards`                           |
| `split-cards`       | Image/text section with supporting cards                   | `surface`, `eyebrow`, `title`, `description`, `cards` |
| `list-panel`        | Expectations, structured lists, qualifications, conditions | `surface`, `eyebrow`, `title`, `description`, `items` |
| `dark-steps`        | Process, getting started, step-by-step flow                | `eyebrow`, `title`, `description`, `steps`            |
| `feature-cards`     | Rich service cards, tags, pricing, images                  | `surface`, `cards`                                    |
| `faq-list`          | Page-specific FAQ block                                    | `surface`, `eyebrow`, `title`, `faqs`                 |
| `cta`               | Final conversion or direct-contact block                   | `surface`, `eyebrow`, `title`, `description`, `ctas`  |
| `credentials`       | About-page credentials and training                        | `eyebrow`, `title`, `cards`, `training`               |
| `contact-info-grid` | Contact-page information cards                             | `cards`                                               |
| `crisis`            | Urgent/emergency notice                                    | `title`, `text`, `icon`                               |
| `payment`           | Fees, payment methods, superbills                          | `eyebrow`, `title`, `description`, `price`, `items`   |
| `faq-categories`    | Dedicated FAQ page grouped by topic                        | `categories`                                          |
| `thank-you`         | Thank-you page content                                     | `eyebrow`, `title`, `paragraphs`, `ctas`, `aside`     |
| `coming-soon`       | Coming-soon page content                                   | all fields required by `ComingSoonSection`            |

Surface constraints:

- `text-image`: `"cream"` or `"cream-dark"`
- `card-grid`: `"cream"`, `"cream-dark"`, or `"linen"`
- `split-cards`, `list-panel`, `feature-cards`: `"cream"`
- `faq-list`: `"cream-dark"`
- `cta`: `"cream"` or `"cream-dark"`

Card/grid constraints:

- `card-grid.columns`: `2`, `3`, or `4`
- `card-grid.cardVariant`: `"plain"`, `"icon"`, or `"compact"`
- `feature-cards.cards[].tone`: `"sage"` or `"terracotta"`
- CTA variants: `"primary"`, `"secondary"`, or `"text"`
- CTA icons: `"arrow"`, `"phone"`, `"email"`, or `"check"`

Shape constraints:

- `dark-steps.description`, `payment.description`, `cta.description`, and `card-grid.description` are inline text arrays, not strings.
- `payment.price` is `{ amount: string; label: string }`, not a string.
- `text-image` should include an `image` when using the current two-column visual pattern. If no image is available, prefer a supported non-image section type such as `card-grid`, `list-panel`, or `cta`.
- If cards include `href` values and should be clickable, set `linkedCards: true`.
- Card-grid section titles are required and should always be supplied as `PageTitle`, even when no `eyebrow` or `description` is present.
- For phone CTAs, use labels like `Call 916-500-4431`, not parenthesized phone formatting.
- Image references must have matching imports or known public-path constants. Do not reference undeclared image variables.

---

## SEO Flexibility

The generator may add sections when they improve search intent coverage, clarity, trust, or conversion.

Good additions include:

- `text-image` for a concise explanatory intro or location/service context
- `card-grid` for services, specialties, benefits, or conditions supported
- `list-panel` or `split-cards` for "who this helps" or "what to expect"
- `dark-steps` for getting started
- `payment` for fees and payment details
- `faq-list` or `faq-categories` for search-aligned questions
- `cta` for the final contact path

Keep the order natural: hero, core answer, supporting details, process/proof/payment, FAQs, CTA. Avoid keyword stuffing and unsupported clinical claims. If FAQ schema is emitted, visible FAQ content must match it.

---

## Unsupported Section Needs

If a useful SEO section cannot be represented with the supported types, do not add an unsupported section to the object.

After the object, add:

```txt
Required Contract Extension:
- Proposed section type:
- Why it is needed:
- Required renderer behavior:
- Suggested TypeScript shape:
```

The returned `ContractPageData` object itself must still contain only supported section types.

---

## Final Checklist

- Export name matches the page, such as `homePageData` or `servicesPageData`.
- Object includes `template`, `metadata`, and `sections`.
- `metadata.pathname` matches the route.
- Page has one visible H1 via `hero.title` or a standalone page section.
- Every section uses a supported `type` and includes required fields.
- Phone references use only the canonical values above.
- FAQ schema matches visible FAQs when present.
- No JSX, HTML strings, markdown links, TODOs, or implementation notes appear in the object.
