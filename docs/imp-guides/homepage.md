# SEO Implementation Guide — Homepage

## eldoradohillstherapy.com

**Prepared:** March 28, 2026
**Page:** Homepage (`/`)
**Domain:** https://www.eldoradohillstherapy.com
**Business:** EDH Therapy — Meagan Murray, AMFT

---

## Table of Contents

1. [Competitive Context](#1-competitive-context)
2. [Title Tag & Meta Description](#2-title-tag--meta-description)
3. [Canonical, Robots & Technical Head Tags](#3-canonical-robots--technical-head-tags)
4. [Open Graph & Twitter Card Tags](#4-open-graph--twitter-card-tags)
5. [JSON-LD Structured Data](#5-json-ld-structured-data)
6. [Heading Structure (H1–H3)](#6-heading-structure-h1h3)
7. [Complete Homepage Copy (Section by Section)](#7-complete-homepage-copy-section-by-section)
8. [Image Alt Text](#8-image-alt-text)
9. [Internal Links from Homepage](#9-internal-links-from-homepage)
10. [FAQ Schema Opportunity](#10-faq-schema-opportunity)

---

## 1. Competitive Context

The homepage needs to rank for the core navigational and local-intent queries that drive first impressions. Here's what the top competitors are doing on _their_ homepages and where EDH Therapy can win.

| Competitor Homepage                | Title Tag Pattern                                                       | What They Do Well                                                           | Gap EDH Therapy Can Exploit                                                          |
| ---------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **theholisticcounseling.center**   | "Holistic Therapy in California"                                        | Reviews/testimonials on homepage, multi-city mentions, clear specialty list | Generic title — no city in H1. EDH Therapy can own "El Dorado Hills" more explicitly |
| **everyheartdreamscounseling.com** | "Integrated Trauma Therapy for Teens and Adults in El Dorado Hills, CA" | Long-tail keyword in title, strong emotional copy                           | Narrow trauma focus — EDH Therapy covers broader conditions                          |
| **eldoradohillscounseling.com**    | "Family Therapist \| Breakthrough Counseling \| El Dorado Hills"        | Exact-match domain, city in title                                           | Thin content, no structured data, dated design                                       |
| **thepathwellnesscenter.com**      | "Holistic Therapy in El Dorado Hills"                                   | Rich emotional storytelling, service list                                   | No therapist name in title — EDH Therapy can personalize                             |
| **edhwellness.com**                | "EDH Wellness Counseling and Psychological Services"                    | Strong domain name                                                          | Almost no on-page SEO, no schema, no meta descriptions                               |
| **avestatherapy.com**              | "Folsom Therapy and Counseling \| Couples & Anxiety Expert"             | Keywords "couples" and "anxiety" in title, city-specific                    | Based in Folsom, not EDH — EDH Therapy owns the local advantage                      |

### Primary Homepage Keywords

| Keyword                           | Monthly Search Volume (est.) | Current Ranking       | Difficulty |
| --------------------------------- | ---------------------------- | --------------------- | ---------- |
| therapist in El Dorado Hills      | 70–170                       | Not ranking (page 2+) | Medium     |
| therapy El Dorado Hills CA        | 50–110                       | Not ranking           | Medium     |
| El Dorado Hills therapist         | 40–90                        | Not ranking           | Medium     |
| online therapy El Dorado Hills    | 20–50                        | Not ranking           | Low        |
| couples therapist El Dorado Hills | 30–70                        | Not ranking           | Low–Medium |
| AMFT El Dorado Hills              | <10                          | Not ranking           | Low        |

---

## 2. Title Tag & Meta Description

### Current (Problems)

```
Title: Compassionate Therapy in El Dorado Hills, CA | EDH Therapy
```

- ❌ Leads with adjective "Compassionate" — not a search term
- ❌ Missing therapist credential (AMFT) — weakens E-E-A-T
- ❌ "EDH Therapy" brand name is unknown — wastes title space

```
Meta Description: (not set or auto-generated)
```

- ❌ No explicit meta description means Google auto-generates one — often poorly

### Recommended

**Title Tag** (55 characters):

```html
<title>Therapist in El Dorado Hills, CA | Meagan Murray, AMFT</title>
```

- ✅ Primary keyword "Therapist in El Dorado Hills" is first
- ✅ State abbreviation "CA" matches local search patterns
- ✅ Therapist name + credential builds trust and E-E-A-T
- ✅ 55 characters — within the 60-character display limit

**Meta Description** (154 characters):

```html
<meta
  name="description"
  content="Online therapy for anxiety, relationships, and life transitions in El Dorado Hills, CA. Meagan Murray, AMFT offers a free 15-minute consultation. Book today."
/>
```

- ✅ Includes secondary keywords: "anxiety," "relationships," "life transitions"
- ✅ Location reinforced: "El Dorado Hills, CA"
- ✅ Clear CTA: "free 15-minute consultation. Book today."
- ✅ 154 characters — within the 155-character display limit

---

## 3. Canonical, Robots & Technical Head Tags

Add these to the `<head>` of the homepage:

```html
<!-- Charset & Viewport (likely already present in Next.js) -->
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Title & Meta Description -->
<title>Therapist in El Dorado Hills, CA | Meagan Murray, AMFT</title>
<meta
  name="description"
  content="Online therapy for anxiety, relationships, and life transitions in El Dorado Hills, CA. Meagan Murray, AMFT offers a free 15-minute consultation. Book today."
/>

<!-- Canonical URL -->
<link rel="canonical" href="https://www.eldoradohillstherapy.com/" />

<!-- Robots -->
<meta
  name="robots"
  content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
/>

<!-- Geo Meta Tags (local SEO signal) -->
<meta name="geo.region" content="US-CA" />
<meta name="geo.placename" content="El Dorado Hills" />
<meta name="geo.position" content="38.6857;-121.0819" />
<meta name="ICBM" content="38.6857, -121.0819" />
```

---

## 4. Open Graph & Twitter Card Tags

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="EDH Therapy" />
<meta
  property="og:title"
  content="Therapist in El Dorado Hills, CA | Meagan Murray, AMFT"
/>
<meta
  property="og:description"
  content="Online therapy for anxiety, relationships, and life transitions in El Dorado Hills, CA. Free 15-minute consultation available."
/>
<meta property="og:url" content="https://www.eldoradohillstherapy.com/" />
<meta
  property="og:image"
  content="https://www.eldoradohillstherapy.com/og-image-homepage.jpg"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta
  property="og:image:alt"
  content="Meagan Murray, AMFT — Online Therapist in El Dorado Hills, California"
/>
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Therapist in El Dorado Hills, CA | Meagan Murray, AMFT"
/>
<meta
  name="twitter:description"
  content="Online therapy for anxiety, relationships, and life transitions. Free consultation available."
/>
<meta
  name="twitter:image"
  content="https://www.eldoradohillstherapy.com/og-image-homepage.jpg"
/>
<meta
  name="twitter:image:alt"
  content="Meagan Murray, AMFT — Online Therapist in El Dorado Hills, California"
/>
```

### OG Image Asset to Create

Create a branded image at **1200×630px** named `og-image-homepage.jpg` containing:

- Meagan's professional headshot (left or right third)
- Text overlay: **"Meagan Murray, AMFT"** (large)
- Subtext: **"Online Therapy · El Dorado Hills, CA"**
- EDH Therapy logo mark
- Warm, calming background matching site color palette

---

## 5. JSON-LD Structured Data

Place all three schema blocks in the homepage `<head>` inside a single `<script type="application/ld+json">` tag (or as separate script tags — both are valid).

### 5A. LocalBusiness / MedicalBusiness Schema

This is the most critical schema for local search visibility, map pack eligibility, and rich results.

```json
{
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "ProfessionalService"],
  "@id": "https://www.eldoradohillstherapy.com/#business",
  "name": "EDH Therapy",
  "alternateName": "El Dorado Hills Therapy",
  "url": "https://www.eldoradohillstherapy.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.eldoradohillstherapy.com/logo.png",
    "width": 300,
    "height": 300
  },
  "image": "https://www.eldoradohillstherapy.com/headshots/optimized/edh-therapy-therapist-desk-portrait.webp",
  "description": "Compassionate online therapy for individuals, couples, teens, and families in El Dorado Hills, California. Meagan Murray, AMFT specializes in anxiety, relationship challenges, life transitions, depression, self-esteem, grief, and family dynamics using evidence-based approaches including CBT, Emotionally Focused Therapy, and mindfulness.",
  "telephone": "+1-916-500-4431",
  "email": "contact@edhtherapy.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "El Dorado Hills",
    "addressRegion": "CA",
    "postalCode": "95762",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.6857,
    "longitude": -121.0819
  },
  "areaServed": [
    {
      "@type": "State",
      "name": "California",
      "sameAs": "https://en.wikipedia.org/wiki/California"
    },
    {
      "@type": "City",
      "name": "El Dorado Hills",
      "sameAs": "https://en.wikipedia.org/wiki/El_Dorado_Hills,_California"
    },
    {
      "@type": "City",
      "name": "Folsom"
    },
    {
      "@type": "City",
      "name": "Sacramento"
    },
    {
      "@type": "City",
      "name": "Cameron Park"
    },
    {
      "@type": "City",
      "name": "Roseville"
    },
    {
      "@type": "City",
      "name": "Granite Bay"
    }
  ],
  "priceRange": "$175 per session",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Credit Card, Debit Card, HSA, FSA",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://www.eldoradohillstherapy.com/about#meagan-murray",
    "name": "Meagan Murray",
    "jobTitle": "Associate Marriage and Family Therapist",
    "image": "https://www.eldoradohillstherapy.com/headshots/optimized/edh-therapy-therapist-seated-stool-portrait.webp",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Professional License",
      "name": "Associate Marriage and Family Therapist (AMFT)",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "California Board of Behavioral Sciences"
      }
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "University of San Francisco"
      },
      {
        "@type": "CollegeOrUniversity",
        "name": "University of California, Davis"
      }
    ],
    "knowsAbout": [
      "Cognitive Behavioral Therapy",
      "Emotionally Focused Therapy",
      "Mindfulness-Based Therapy",
      "Narrative Therapy",
      "Family Systems Theory",
      "Anxiety Treatment",
      "Couples Therapy",
      "Depression Treatment",
      "Life Transitions Counseling",
      "Teen Therapy"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Therapy",
          "description": "One-on-one therapy for anxiety, depression, self-esteem, identity exploration, and life transitions. For adults 18+ and teens 13-17.",
          "url": "https://www.eldoradohillstherapy.com/services",
          "offers": {
            "@type": "Offer",
            "price": "175",
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": "175",
              "priceCurrency": "USD",
              "unitText": "50-minute session"
            }
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Couples Therapy",
          "description": "Relationship therapy including premarital counseling, conflict resolution, and emotional reconnection using Emotionally Focused Therapy (EFT).",
          "url": "https://www.eldoradohillstherapy.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Therapy",
          "description": "Family systems work for parent-child dynamics, blended families, communication patterns, and life transitions.",
          "url": "https://www.eldoradohillstherapy.com/services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teen Therapy",
          "description": "Adolescent therapy for ages 13-17 addressing anxiety, self-esteem, school stress, and family conflict.",
          "url": "https://www.eldoradohillstherapy.com/services"
        }
      }
    ]
  },
  "sameAs": []
}
```

> **Note on `sameAs`:** Add URLs as Meagan creates directory profiles — Psychology Today, GoodTherapy, TherapyDen, Yelp, LinkedIn, Instagram, etc. This strengthens the knowledge graph.

### 5B. WebSite Schema (Sitewide, but placed on homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.eldoradohillstherapy.com/#website",
  "name": "EDH Therapy",
  "url": "https://www.eldoradohillstherapy.com",
  "description": "Online therapy for individuals, couples, teens, and families in El Dorado Hills, California.",
  "publisher": {
    "@id": "https://www.eldoradohillstherapy.com/#business"
  },
  "inLanguage": "en-US"
}
```

### 5C. WebPage Schema (Homepage specifically)

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.eldoradohillstherapy.com/#webpage",
  "url": "https://www.eldoradohillstherapy.com/",
  "name": "Therapist in El Dorado Hills, CA | Meagan Murray, AMFT",
  "description": "Online therapy for anxiety, relationships, and life transitions in El Dorado Hills, CA. Meagan Murray, AMFT offers a free 15-minute consultation. Book today.",
  "isPartOf": {
    "@id": "https://www.eldoradohillstherapy.com/#website"
  },
  "about": {
    "@id": "https://www.eldoradohillstherapy.com/#business"
  },
  "inLanguage": "en-US",
  "datePublished": "2026-01-01",
  "dateModified": "2026-03-28"
}
```

---

## 6. Heading Structure (H1–H3)

### Current Heading Structure (Problems)

```
H1: "Compassionate Therapy for Growth"
  H2: "Everyone deserves a safe space"
  H2: "Supporting you through life's challenges"
  H2: "Areas of Support"
  H2: "Compassionate & Collaborative"
  H2: "Your Journey Begins Here"
```

**Issues:**

- ❌ H1 contains zero keywords — "Compassionate Therapy for Growth" doesn't match any search query
- ❌ H2s are emotional/aspirational but not keyword-optimized
- ❌ No city name, no therapist type, no credential in any heading
- ❌ "Areas of Support" is vague — could be anything

### Recommended Heading Structure

```
H1: Therapist in El Dorado Hills, CA — Compassionate Therapy for Growth
  H2: Online Therapy for Individuals, Couples & Families in California
  H2: Who I Work With
    H3: Adults (18+)
    H3: Teens (13–17)
    H3: Couples
    H3: Families
  H2: Areas of Specialty
    (Retain the current list: Anxiety & Stress, Relationship Challenges, etc.)
  H2: Evidence-Based Therapy Approaches
    H3: Cognitive Behavioral Therapy (CBT)
    H3: Emotionally Focused Therapy (EFT)
    H3: Mindfulness-Based Therapy
    H3: Narrative Therapy
    H3: Family Systems Work
  H2: What to Expect — Your First Steps in Therapy
  H2: Online Therapy Throughout California
  H2: Fees & Insurance — $175 Per Session
  H2: Book a Free 15-Minute Consultation
```

### Specific Copy Changes

**H1 — Change from:**

```
Compassionate Therapy for Growth
```

**Change to:**

```
Therapist in El Dorado Hills, CA — Compassionate Therapy for Growth
```

**Subheading under H1 — Change from:**

```
"Online therapy throughout California"
(currently a small text label above the H1)
```

**Change to (keep as eyebrow text):**

```
Online Therapy Throughout California · Meagan Murray, AMFT
```

**H2 "Everyone deserves a safe space" — Change to:**

```
Online Therapy for Individuals, Couples & Families
```

> Preserves the warm tone while adding service keywords. The welcoming copy beneath this heading stays as-is.

**H2 "Supporting you through life's challenges" — Change to:**

```
Who I Work With
```

> Already used on the site in some sections — just make it the semantic H2 here.

**H2 "Compassionate & Collaborative" — Change to:**

```
Evidence-Based Therapy Approaches
```

> The word "evidence-based" is a strong search qualifier competitors use.

**H2 "Your Journey Begins Here" — Change to:**

```
What to Expect — Your First Steps in Therapy
```

> Targets the informational query "what to expect first therapy session."

**Telehealth section heading — add as H2:**

```
Online Therapy Throughout California
```

**Fees section heading — change to:**

```
Fees & Insurance — $175 Per Session
```

> Price in the heading improves CTR for cost-related searches.

**CTA section H2 — change from:**

```
Take the first step toward healing
```

**Change to:**

```
Book a Free 15-Minute Consultation
```

> Direct CTA keyword that matches transactional search intent.

---

## 7. Complete Homepage Copy (Section by Section)

Below is the full, final copy for every section of the homepage — written out exactly as it should appear on the live page. Headings show the semantic HTML tag. Annotations in `[brackets]` describe UI elements, images, or links — they are not visible copy.

---

### SECTION 1 — Hero

`[Eyebrow text above H1]`

Online Therapy Throughout California · Meagan Murray, AMFT

`[H1]`

# Therapist in El Dorado Hills, CA — Compassionate Therapy for Growth

`[Hero paragraph]`

Meagan Murray, AMFT provides compassionate online therapy for individuals, couples, teens, and families in El Dorado Hills and throughout California. Whether you're navigating anxiety, relationship challenges, depression, or a major life transition, therapy can help you find clarity, build connection, and move forward with confidence.

`[Primary CTA button → /contact]`
Book a Free Consultation

`[Secondary CTA button → #approach]`
Learn More

`[Hero image]`
![Meagan Murray, AMFT — online therapist in El Dorado Hills, CA during a telehealth session](edh-therapy-therapist-desk-portrait.webp)

---

### SECTION 2 — Welcome

`[Eyebrow text]`

Welcome

`[H2]`

## Everyone Deserves a Safe Space

`[Paragraph 1]`

My approach is warm, collaborative, and human-centered — designed to support you in understanding yourself deeply and feeling more grounded in your life and relationships.

`[Paragraph 2]`

Therapy is a place to slow down, reflect, and reconnect with your strengths. Together, we work toward greater emotional resilience, clarity, and confidence.

`[Paragraph 3 — NEW]`

As an Associate Marriage and Family Therapist based in El Dorado Hills, I integrate evidence-based modalities like Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), and mindfulness to create a therapeutic experience tailored to your needs.

`[Image]`
![Warm therapy workspace — EDH Therapy, El Dorado Hills, California](glasses-desk.webp)

---

### SECTION 3 — Who I Work With

`[Eyebrow text]`

Who I Work With

`[H2]`

## Supporting You Through Life's Challenges

`[Paragraph]`

Whether you're experiencing a major life transition or simply feeling stuck, therapy can support meaningful change. I work with individuals at many stages of life, as well as couples and families seeking stronger connection.

`[Image]`
![Comfortable and safe therapy setting for individuals, couples, and families](cozy_chair.webp)

`[Numbered list — each item links to /services]`

01 — **Adults** `[→ /services]`
Individual therapy for adults ages 18 and older.

02 — **Teens** `[→ /services]`
Adolescent therapy for ages 13–17.

03 — **Couples** `[→ /services]`
Relationship, premarital, and reconnection therapy.

04 — **Families** `[→ /services]`
Family systems, parent-child dynamics, and transitions.

---

### SECTION 4 — Areas of Specialty

`[Eyebrow text]`

Specialties

`[H2]`

## Areas of Support

`[Subtitle paragraph — NEW]`

These are some of the challenges I help clients navigate. If you don't see your concern listed, reach out — I'm happy to discuss whether therapy with me might be a good fit.

`[Specialty list — each item links to /services now, to individual condition pages when created]`

- Anxiety & Stress `[→ /services]`
- Relationship Challenges `[→ /services]`
- Life Transitions `[→ /services]`
- Depression & Low Mood `[→ /services]`
- Self-Esteem & Identity `[→ /services]`
- Grief & Loss `[→ /services]`
- Divorce & Separation `[→ /services]`
- Parenting Support `[→ /services]`
- Codependency & Boundaries `[→ /services]`

---

### SECTION 5 — Approach / Modalities

`[Eyebrow text]`

My Approach

`[H2]`

## Evidence-Based & Collaborative Therapy

`[Paragraph]`

Treatment is always tailored to your needs, values, and goals. I draw from several evidence-based modalities to provide the support that works best for you — because no two clients are alike, and no single approach fits everyone.

`[Numbered modality list]`

01 — **CBT** — Cognitive Behavioral Therapy
Identify and shift unhelpful thought patterns that drive anxiety, depression, and stress.

02 — **EFT** — Emotionally Focused Therapy
Strengthen emotional bonds and build secure attachment in relationships.

03 — **Mindfulness** — Mindfulness-Based Therapy
Cultivate present-moment awareness to reduce overwhelm and increase emotional regulation.

04 — **Narrative** — Narrative Therapy
Reframe your story, separate yourself from the problem, and find new meaning in your experiences.

05 — **Person-Centered** — Person-Centered & Strength-Based Approaches
Build on your existing strengths, inner wisdom, and capacity for growth.

06 — **Family Systems** — Family Systems Work
Understand and improve patterns within family relationships and dynamics.

---

### SECTION 6 — What to Expect

`[Eyebrow text]`

What to Expect

`[H2]`

## Your First Steps in Therapy

`[Paragraph]`

Starting therapy can feel vulnerable — but your first step doesn't have to be overwhelming. Here's what the process looks like when you work with me.

`[Step cards]`

01 — **Explore**
We start by understanding what's bringing you to therapy — what feels hard, what feels stuck, and what you're hoping to change.

02 — **Clarify**
Together, we define how you want your life to feel and set goals that are meaningful to you.

03 — **Identify**
We uncover the patterns, beliefs, and emotional blocks that may be keeping you from moving forward.

04 — **Build**
You develop practical tools for emotional resilience, healthier relationships, and lasting confidence.

`[Closing sentence]`

The goal is to create a supportive space where you feel seen, understood, and empowered to grow.

---

### SECTION 7 — Telehealth

`[Image]`
![Online therapy session on laptop — HIPAA-compliant telehealth throughout California](laptop-couch.webp)

`[H3]`

### Online Therapy Throughout California

`[Paragraph]`

All sessions are held via secure, HIPAA-compliant video — offering privacy, flexibility, and ease from wherever you are in California. No commute, no waiting room. Just a quiet space and a stable internet connection.

`[Feature tags]`
Secure · Private · Flexible

---

### SECTION 8 — Fees & Insurance

`[H3]`

### Fees & Insurance

`[Price display]`

**$175** per 50-minute session

`[Paragraph]`

I am an out-of-network provider, which means I don't bill insurance directly. However, I provide superbills — detailed receipts you can submit to your insurance company for potential reimbursement. Many PPO plans offer out-of-network mental health benefits. I accept credit cards, debit cards, and HSA/FSA cards. Payment is collected at the time of each session.

---

### SECTION 9 — Common Questions (NEW SECTION)

`[Eyebrow text]`

Common Questions

`[H2]`

## Frequently Asked Questions About Therapy

`[FAQ item 1]`

**How much does therapy cost?**

Individual therapy sessions are $175 per 50-minute session. I am an out-of-network provider, but I provide superbills for potential insurance reimbursement through PPO plans. I accept credit cards, debit cards, and HSA/FSA cards.

`[FAQ item 2]`

**Do you offer in-person or online sessions?**

All sessions are conducted online via secure, HIPAA-compliant video. This allows me to serve clients throughout California with greater flexibility and accessibility — no commute or waiting room required.

`[FAQ item 3]`

**What issues do you help with?**

I specialize in anxiety, depression, relationship challenges, life transitions, self-esteem, codependency, boundaries, grief, divorce, parenting support, and family dynamics. If you're unsure whether I can help with your specific concern, I'm happy to discuss it during a free consultation.

`[FAQ item 4]`

**How do I get started?**

Book a free 15-minute consultation call using the button on this page. During the call, we'll talk about what you're looking for and whether we're a good fit. If so, we'll schedule your first full session.

`[Link]`
Have more questions? Visit the [FAQs page](/faqs).

---

### SECTION 10 — Final CTA

`[Eyebrow text]`

Ready to Begin?

`[H2]`

## Book a Free 15-Minute Consultation

`[Paragraph]`

If you're ready to explore whether therapy is the right fit, I'd love to hear from you. The consultation is free, and there's no pressure — just a conversation about what you're going through and how I can help.

`[Primary CTA button → /contact]`
Book a Free Consultation

`[Secondary contact line]`

Prefer to reach out directly?

[916-500-4431](tel:9165004431) | [Email](mailto:contact@edhtherapy.com)

---

### SECTION 11 — Footer

`[Logo + business tagline]`

**EDH Therapy**

Meagan Murray, AMFT offers compassionate online therapy for anxiety, depression, couples, teens, and families. Serving El Dorado Hills, Folsom, Cameron Park, Sacramento, Roseville, and all of California.

`[Quick Links]`

Home `[→ /]` · About `[→ /about]` · Services `[→ /services]` · FAQs `[→ /faqs]` · Contact `[→ /contact]`

`[Contact block]`

916-500-4431
El Dorado Hills, California
Online Sessions Only

`[Areas Served line — NEW]`

**Areas Served:** El Dorado Hills · Folsom · Cameron Park · Sacramento · Roseville · Granite Bay · All of California

`[Crisis resources]`

**Crisis Resources:** If you are experiencing a crisis or emergency, please call 988 or go to your nearest emergency room. Online therapy is not appropriate for emergency situations.

`[Copyright]`

© 2026 EDH Therapy. All rights reserved.

`[Legal links]`

Privacy Policy `[→ /privacy]` · Terms of Service `[→ /terms]`

---

## 8. Image Alt Text

### Current Images & Recommended Alt Text

| Image           | Current Alt                                            | Recommended Alt                                                                             |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Hero headshot   | `Therapist smiling at a desk during an online session` | `Meagan Murray, AMFT — online therapist in El Dorado Hills, CA during a telehealth session` |
| Glasses on desk | _(none or decorative)_                                 | `Warm therapy workspace — EDH Therapy, El Dorado Hills, California`                         |
| Cozy chair      | `Cozy therapy chair in a calming space`                | `Comfortable and safe therapy setting for individuals, couples, and families`               |
| Laptop on couch | `Therapy session on a laptop with a cozy couch`        | `Online therapy session on laptop — HIPAA-compliant telehealth throughout California`       |

### Alt Text Rules for This Site

- Every non-decorative image gets an alt attribute
- Include "Meagan Murray, AMFT" in at least one image alt per page (the primary headshot)
- Include "El Dorado Hills" in at least one image alt per page
- Include a service keyword (therapy, telehealth, counseling) in at least one image alt per page
- Keep alt text under 125 characters
- Never keyword-stuff — the alt should still describe the image accurately

---

## 9. Internal Links from Homepage

### Links That Should Exist on the Homepage

| Visible Text / Anchor                        | Links To                                            | Location on Page                |
| -------------------------------------------- | --------------------------------------------------- | ------------------------------- |
| "Meagan Murray, AMFT"                        | `/about`                                            | Hero section or welcome section |
| "Book a Free Consultation" (primary CTA)     | `/contact`                                          | Hero section, bottom CTA        |
| "Learn More"                                 | `/services`                                         | Hero section secondary CTA      |
| "Individual Therapy" (or "Adults" / "Teens") | `/services`                                         | "Who I Work With" section       |
| "Couples"                                    | `/services` (or `/couples-therapy` when created)    | "Who I Work With" section       |
| "Families"                                   | `/services` (or `/family-therapy` when created)     | "Who I Work With" section       |
| "Anxiety & Stress"                           | `/services` (or `/anxiety-therapy` when created)    | "Areas of Support" list         |
| "Relationship Challenges"                    | `/services` (or `/couples-therapy` when created)    | "Areas of Support" list         |
| "Depression & Low Mood"                      | `/services` (or `/depression-therapy` when created) | "Areas of Support" list         |
| "Grief & Loss"                               | `/services` (or `/grief-therapy` when created)      | "Areas of Support" list         |
| "FAQs" or "common questions"                 | `/faqs`                                             | Any relevant paragraph          |
| "916-500-4431"                             | `tel:9165004431`                                    | Footer, CTA section             |
| "Email"                                      | `mailto:contact@edhtherapy.com`                     | Footer, CTA section             |

### Links Currently Missing (High Priority)

1. **Specialty items are not linked.** The "Areas of Support" list (Anxiety & Stress, Relationship Challenges, etc.) should each be clickable links pointing to `/services` now, and to individual condition pages as they are created.
2. **No in-text link to the About page.** Add a link on the therapist name in the welcome section.
3. **"Who I Work With" items are not linked.** Adults, Teens, Couples, Families should each link to `/services`.

---

## 10. FAQ Schema Opportunity

Even though the main FAQ content lives on `/faqs`, adding high-value FAQs directly to the homepage with FAQPage schema markup gives the homepage a chance to appear with rich FAQ snippets in search results. The complete copy for this section is in Section 7 (Section 9 — Common Questions). Below is the matching schema.

### Recommended Homepage FAQs

These 4 questions match the copy written in Section 7, Section 9. The visible FAQ copy and this schema must stay in sync.

### FAQPage Schema for Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does therapy cost at EDH Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Individual therapy sessions are $175 per 50-minute session. I am an out-of-network provider, but I provide superbills for potential insurance reimbursement through PPO plans. I accept credit cards, debit cards, and HSA/FSA cards."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer in-person or online therapy sessions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "All sessions are conducted online via secure, HIPAA-compliant video. This allows me to serve clients throughout California with greater flexibility and accessibility — no commute or waiting room required."
      }
    },
    {
      "@type": "Question",
      "name": "What issues does Meagan Murray help with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "I specialize in anxiety, depression, relationship challenges, life transitions, self-esteem, codependency, boundaries, grief, divorce, parenting support, and family dynamics. If you're unsure whether I can help with your specific concern, I'm happy to discuss it during a free consultation."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with therapy at EDH Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Book a free 15-minute consultation call using the button on the website. During the call, we'll talk about what you're looking for and whether we're a good fit. If so, we'll schedule your first full session."
      }
    }
  ]
}
```

---

## Implementation Checklist

| #   | Task                                                                    | Status |
| --- | ----------------------------------------------------------------------- | ------ |
| 1   | Replace `<title>` tag with keyword-optimized version                    | ☐      |
| 2   | Add `<meta name="description">` tag                                     | ☐      |
| 3   | Add `<link rel="canonical">` tag                                        | ☐      |
| 4   | Add `<meta name="robots">` tag                                          | ☐      |
| 5   | Add geo meta tags (region, placename, position)                         | ☐      |
| 6   | Add Open Graph tags (7 tags)                                            | ☐      |
| 7   | Create OG image asset (1200×630px)                                      | ☐      |
| 8   | Add Twitter Card tags (5 tags)                                          | ☐      |
| 9   | Add LocalBusiness/MedicalBusiness JSON-LD schema                        | ☐      |
| 10  | Add WebSite JSON-LD schema                                              | ☐      |
| 11  | Add WebPage JSON-LD schema                                              | ☐      |
| 12  | Add FAQPage JSON-LD schema for homepage FAQs                            | ☐      |
| 13  | Replace Section 1 — Hero (H1, eyebrow, paragraph, CTAs)                 | ☐      |
| 14  | Replace Section 2 — Welcome (H2, paragraphs, new P3)                    | ☐      |
| 15  | Replace Section 3 — Who I Work With (H2, paragraph, add links)          | ☐      |
| 16  | Replace Section 4 — Areas of Specialty (H2, add subtitle, add links)    | ☐      |
| 17  | Replace Section 5 — Approach / Modalities (H2, paragraph, descriptions) | ☐      |
| 18  | Replace Section 6 — What to Expect (H2, paragraph, step descriptions)   | ☐      |
| 19  | Replace Section 7 — Telehealth (H3, paragraph)                          | ☐      |
| 20  | Replace Section 8 — Fees & Insurance (paragraph)                        | ☐      |
| 21  | Add Section 9 — Common Questions (NEW: 4 FAQs)                          | ☐      |
| 22  | Replace Section 10 — Final CTA (H2, paragraph)                          | ☐      |
| 23  | Replace Section 11 — Footer (tagline, areas served line)                | ☐      |
| 24  | Update all image alt text (4 images)                                    | ☐      |
| 25  | Add internal links to specialty items (9 links)                         | ☐      |
| 26  | Add internal links to "Who I Work With" items (4 links)                 | ☐      |
| 27  | Add internal link on therapist name to /about                           | ☐      |
| 28  | Validate all JSON-LD at https://validator.schema.org                    | ☐      |
| 29  | Test OG tags at https://www.opengraph.xyz                               | ☐      |
| 30  | Submit updated URL in Google Search Console                             | ☐      |

---

_This guide covers every SEO implementation item for the homepage of eldoradohillstherapy.com. Each section provides the exact code, copy, or markup to implement — no additional research or interpretation needed._
