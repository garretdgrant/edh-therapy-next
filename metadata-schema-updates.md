# EDH Therapy Metadata + Schema Handoff

## Core SEO Positioning

EDH Therapy should be positioned as an **El Dorado Hills-based online therapy practice serving clients throughout California**.

Because she does **not** offer in-person sessions, all metadata and schema should avoid implying a physical office, walk-in clinic, or in-person appointment availability.

Use language like:

- Online therapy in California
- El Dorado Hills-based online therapist
- Telehealth therapy for California clients
- Virtual therapy for individuals, couples, teens, and families
- Online sessions only

Avoid language like:

- Therapy office in El Dorado Hills
- In-person therapist near me
- Visit our clinic
- Walk-in therapy
- Local therapy office

---

# Global Schema Needed Across the Site

## 1. Main Business Entity

Use a main business schema entity for EDH Therapy.

Recommended type:

- `MedicalBusiness`
- Optionally paired with `OnlineBusiness`

Purpose:

- Identifies EDH Therapy as a therapy/mental health business.
- Makes it clear the business is virtual/telehealth-based.
- Supports the El Dorado Hills brand while still showing service availability throughout California.

Important fields to include:

- Business name: EDH Therapy / El Dorado Hills Therapy
- Website URL
- Phone number
- Email address
- Business description
- Area served: California
- Local brand location: El Dorado Hills, CA
- Service type: online therapy / telehealth therapy
- Price range, if published on site
- SameAs profiles, if available
- No public street address unless she wants one shown and it is accurate

Recommended positioning:

> EDH Therapy is an El Dorado Hills-based online therapy practice offering telehealth therapy throughout California.

---

## 2. Website Schema

Use `WebSite` schema globally.

Purpose:

- Helps define the website as the official site for EDH Therapy.
- Connects the site to the main business entity.

Include:

- Site name
- Site URL
- Publisher/main business entity

---

## 3. WebPage Schema

Each page should have its own page-specific schema.

Purpose:

- Helps Google understand what each page is about.
- Prevents every page from looking identical.
- Supports stronger topical clarity.

Each page should include:

- Page title
- Page description
- Canonical URL
- Main entity for that page
- Connection back to the main EDH Therapy business entity

---

## 4. Breadcrumb Schema

Use `BreadcrumbList` on every page except the homepage if desired.

Purpose:

- Clarifies site structure.
- Helps Google understand hierarchy.

Recommended breadcrumb structure:

- Home
- About
- Services
- FAQs
- Contact

---

# Page-by-Page Metadata + Schema

---

# Homepage

URL:

`https://www.eldoradohillstherapy.com/`

## Primary SEO Goal

Position EDH Therapy as an online therapy practice based in El Dorado Hills and serving clients throughout California.

## Recommended Title Direction

Use a title like:

> Online Therapy in California | EDH Therapy

or:

> El Dorado Hills Online Therapy | EDH Therapy

## Recommended Description Direction

The description should mention:

- Online therapy
- California clients
- El Dorado Hills-based practice
- Individuals, couples, teens, and families
- Anxiety, relationships, life transitions, and emotional wellbeing

Example direction:

> EDH Therapy offers online therapy for individuals, couples, teens, and families throughout California, with support for anxiety, relationships, life transitions, and emotional wellbeing.

## Schema Needed

Use:

- `WebPage`
- `WebSite`
- `MedicalBusiness`
- `OnlineBusiness`

## Main Entity

The main entity should be EDH Therapy as a virtual therapy practice.

## Important Schema Details

Include:

- Name: EDH Therapy
- Alternate name: El Dorado Hills Therapy
- Based in: El Dorado Hills, CA
- Area served: California
- Services: individual therapy, couples therapy, teen therapy, family therapy, online therapy
- Session format: online / telehealth
- Contact phone
- Contact email
- Price range if published
- SameAs links if available

## Avoid

Do not imply:

- In-person sessions
- Physical office visits
- Walk-ins
- A clinic location

---

# About Page

URL:

`https://www.eldoradohillstherapy.com/about`

## Primary SEO Goal

Build trust around Meagan Murray as the provider and strengthen E-E-A-T for a YMYL therapy site.

## Recommended Title Direction

> About Meagan Murray, AMFT | EDH Therapy

## Recommended Description Direction

The description should mention:

- Meagan Murray
- AMFT credential
- Online therapy
- California clients
- Individuals, couples, teens, and families

Example direction:

> Meet Meagan Murray, AMFT, an El Dorado Hills-based therapist offering online therapy throughout California for individuals, couples, teens, and families.

## Schema Needed

Use:

- `AboutPage`
- `Person`
- `BreadcrumbList`

## Main Entity

The main entity should be Meagan Murray.

## Important Schema Details

Include:

- Full name
- Professional title
- Credential: AMFT
- Education, if listed
- Areas of focus
- Works for EDH Therapy
- Connection to the main business entity
- California telehealth service context
- Supervisor information if applicable and visible on the page

## Important Content/Trust Fix

The About page should not have placeholder supervisor information.

If supervision is required to be listed, add the real:

- Supervisor name
- License type
- License number

This is especially important because therapy is YMYL and trust signals matter.

---

# Services Page

URL:

`https://www.eldoradohillstherapy.com/services`

## Primary SEO Goal

Clearly explain the online therapy services offered and the types of clients supported.

## Recommended Title Direction

> Online Therapy Services in California | EDH Therapy

## Recommended Description Direction

The description should mention:

- Online individual therapy
- Couples therapy
- Family therapy
- Teen therapy
- California clients
- Anxiety, relationships, grief, self-esteem, and life transitions

Example direction:

> Explore online individual therapy, couples therapy, family therapy, and teen therapy for California clients, with support for anxiety, relationships, grief, self-esteem, and life transitions.

## Schema Needed

Use:

- `Service`
- `OfferCatalog`
- `MedicalTherapy`
- `BreadcrumbList`

## Main Entity

The main entity should be the therapy services offered by EDH Therapy.

## Services to Include

Include service entities for:

- Online individual therapy
- Online couples therapy
- Online family therapy
- Online teen therapy
- Anxiety support
- Relationship challenges
- Life transitions
- Depression support
- Self-esteem
- Grief and loss
- Family dynamics

## Important Schema Details

Each service should make clear:

- Provider: EDH Therapy
- Format: online / telehealth
- Area served: California
- Audience: individuals, couples, teens, families
- Service category: mental health therapy

## Avoid

Do not frame the services as:

- In-office therapy
- Local clinic appointments
- In-person sessions in El Dorado Hills

---

# FAQs Page

URL:

`https://www.eldoradohillstherapy.com/faqs`

## Primary SEO Goal

Answer practical questions about online therapy, fees, insurance, telehealth, and getting started.

## Recommended Title Direction

> Online Therapy FAQs | EDH Therapy

## Recommended Description Direction

The description should mention:

- Online therapy questions
- Session length
- Fees
- Insurance
- Telehealth
- Scheduling
- What to expect

Example direction:

> Answers to common questions about online therapy, session length, fees, insurance, telehealth, scheduling, and what to expect when starting therapy with EDH Therapy.

## Schema Needed

Use:

- `FAQPage`
- `BreadcrumbList`

## Main Entity

The main entity should be the FAQ content.

## FAQ Schema Requirements

Only include questions and answers that are visible on the page.

Good FAQ topics to include:

- Do you offer in-person sessions?
- Who do you work with?
- How long are sessions?
- What is the session fee?
- Do you accept insurance?
- Do you offer online therapy?
- What can I expect in the first session?
- How do I schedule a consultation?

## Important Note

This page should clearly state that sessions are online only.

The FAQ schema should reinforce that EDH Therapy provides telehealth therapy throughout California, not in-person office sessions.

---

# Contact Page

URL:

`https://www.eldoradohillstherapy.com/contact`

## Primary SEO Goal

Encourage users to book a consultation while clearly setting expectations for online-only therapy.

## Recommended Title Direction

> Book a Free Therapy Consultation | EDH Therapy

or:

> Contact EDH Therapy | Online Therapy in California

## Recommended Description Direction

The description should mention:

- Free 15-minute consultation
- Online therapy
- California clients
- Contact form, phone, or email
- Telehealth-only sessions

Example direction:

> Contact EDH Therapy to schedule a free 15-minute consultation for online therapy in California. Sessions are offered by telehealth only.

## Schema Needed

Use:

- `ContactPage`
- `ContactPoint`
- `BreadcrumbList`

## Main Entity

The main entity should be the contact method for EDH Therapy.

## Important Schema Details

Include:

- Phone number
- Email address
- Contact form URL
- Consultation CTA
- Area served: California
- Service format: online sessions only
- Contact type: customer support / appointments / therapy consultation

## Avoid

Do not include:

- Office visit language
- Physical directions
- “Visit us”
- “Come into our office”
- In-person appointment wording

---

# Recommended Metadata Style Rules

## Titles

Titles should be:

- Clear
- Local but not misleading
- Therapy-focused
- Under 60 characters when possible
- Unique per page

Use modifiers like:

- Online Therapy
- California
- El Dorado Hills
- AMFT
- Therapy Services
- Consultation

## Descriptions

Descriptions should be:

- Around 140–160 characters when possible
- Human and trust-focused
- Clear that services are online
- Unique per page
- Written for actual searchers, not just keywords

## Canonicals

Each page should have a self-referencing canonical URL.

Use clean canonical URLs:

- `https://www.eldoradohillstherapy.com/`
- `https://www.eldoradohillstherapy.com/about`
- `https://www.eldoradohillstherapy.com/services`
- `https://www.eldoradohillstherapy.com/faqs`
- `https://www.eldoradohillstherapy.com/contact`

---

# Recommended Open Graph / Social Metadata

Each page should include:

- `og:title`
- `og:description`
- `og:url`
- `og:type`
- `og:image`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`

## Recommended OG Image Direction

Use a calm, professional therapy-oriented image.

Good themes:

- Soft neutral background
- Warm, approachable typography
- EDH Therapy logo/name
- Online therapy positioning
- No exaggerated medical claims
- No stock image that implies an in-person clinic if the practice is telehealth-only

Suggested default OG text:

> EDH Therapy  
> Online Therapy in California

---

# Trust / E-E-A-T Signals to Include

Because therapy is a YMYL topic, metadata and schema should support trust, accuracy, and clarity.

Important trust signals:

- Provider name
- Credential
- Supervisor details if required
- California telehealth availability
- Clear pricing if published
- Free consultation if offered
- Online-only sessions
- Contact phone and email
- Education and training
- Areas of focus
- No exaggerated promises
- No guaranteed outcomes

Avoid claims like:

- Cure anxiety
- Fix your relationship
- Guaranteed results
- Best therapist in El Dorado Hills
- #1 therapist
- Instant healing

Use softer, compliant language:

- Support for anxiety
- Help navigating relationship challenges
- Therapy for life transitions
- A compassionate space to process emotions
- Online support for California clients

---

# Final Recommended Schema Map

| Page     | Metadata Focus                                         | Schema Types                                                  |
| -------- | ------------------------------------------------------ | ------------------------------------------------------------- |
| Homepage | Online therapy in California, based in El Dorado Hills | `WebPage`, `WebSite`, `MedicalBusiness`, `OnlineBusiness`     |
| About    | Meagan Murray, AMFT, credentials, trust                | `AboutPage`, `Person`, `BreadcrumbList`                       |
| Services | Online therapy services and client types               | `Service`, `OfferCatalog`, `MedicalTherapy`, `BreadcrumbList` |
| FAQs     | Telehealth, pricing, insurance, scheduling             | `FAQPage`, `BreadcrumbList`                                   |
| Contact  | Free consultation and online-only contact path         | `ContactPage`, `ContactPoint`, `BreadcrumbList`               |

---

# Final Positioning Recommendation

Use this positioning across the site:

> EDH Therapy is an El Dorado Hills-based online therapy practice offering telehealth therapy for individuals, couples, teens, and families throughout California.

This gives the site local relevance while staying accurate that sessions are online-only.
