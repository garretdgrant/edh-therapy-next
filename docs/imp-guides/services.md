# SEO Implementation Guide — /services Page

## EDH Therapy · eldoradohillstherapy.com/services

---

## Section 1 — Competitive Context

### Competitor Analysis

| #   | Competitor                      | URL                                                             | What They Do Well                                                                                                                     | Gap EDH Therapy Can Exploit                                                                                                                      |
| --- | ------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | The Holistic Counseling Center  | theholisticcounseling.center/el-dorado-hills-counseling-therapy | Strong local keyword saturation ("therapy in El Dorado Hills, CA"), testimonials on page, named modalities with detail, multiple CTAs | EDH Therapy can add testimonials/social proof, deeper modality descriptions, and stronger local keyword usage with "El Dorado Hills" in headings |
| 2   | The Path Wellness Center        | thepathwellnesscenter.com                                       | Dedicated sub-pages per specialty (couples, anxiety, trauma), bold H1 copy, media logos for authority, blog content                   | EDH Therapy can create dedicated service sub-pages over time; for now, add FAQ schema and more long-tail content on this single services page    |
| 3   | EDH Wellness Counseling         | edhwellness.com                                                 | Domain name advantage ("edh"), mentions 20+ years experience, clear specialties list                                                  | EDH Therapy has a modern site and broader service range (teens, families); emphasize telehealth-only convenience and wider California reach      |
| 4   | Avesta Therapy (Folsom)         | avestatherapy.com                                               | Lists specific service areas (Folsom, Roseville, Granite Bay, etc.), credentials prominently displayed, ADHD niche                    | EDH Therapy can add an "Areas Served" section listing surrounding cities to capture geo-modified searches                                        |
| 5   | Every Heart Dreams Counseling   | everyheartdreamscounseling.com                                  | Detailed trauma modality list (DBT, EMDR, Brainspotting, IFS), emotionally resonant copy, specific client-problem scenarios           | EDH Therapy can add client-scenario language ("If you're feeling…") to connect emotionally and match search intent                               |
| 6   | Together Known Therapy (Folsom) | togetherknown.com                                               | EFT specialty highlighted, couples intensives offered, clean modern design                                                            | EDH Therapy can differentiate with breadth (individual + couples + family + teens) on one page, plus telehealth flexibility                      |

### Keyword Table

| Keyword                               | Type      | Est. Monthly Search Volume | Difficulty |
| ------------------------------------- | --------- | -------------------------- | ---------- |
| therapy services El Dorado Hills      | Primary   | 40–70                      | Low        |
| therapist El Dorado Hills CA          | Secondary | 90–150                     | Medium     |
| online therapy California             | Secondary | 800–1,200                  | High       |
| couples therapy El Dorado Hills       | Secondary | 30–50                      | Low        |
| anxiety therapist El Dorado Hills     | Secondary | 20–40                      | Low        |
| telehealth therapy California         | Secondary | 300–500                    | Medium     |
| family therapy El Dorado Hills        | Secondary | 10–30                      | Low        |
| individual therapy near me California | Long-tail | 50–100                     | Medium     |
| CBT therapist El Dorado Hills         | Long-tail | 10–20                      | Low        |
| teen therapy El Dorado Hills CA       | Long-tail | 10–20                      | Low        |

---

## Section 2 — Title Tag & Meta Description

### Current Title Tag

```
Therapy Services in California | EDH Therapy
```

**Problems:**

- Too generic — "Therapy Services in California" competes with every therapist in the state
- Misses the primary local keyword "El Dorado Hills"
- Does not mention specific service types (individual, couples, family)
- "EDH Therapy" brand alone does not signal location to search engines

### Recommended Title Tag

```html
<title>Therapy Services in El Dorado Hills, CA | EDH Therapy</title>
```

Character count: 53

**Reasoning:**

- Inserts primary keyword "Therapy Services in El Dorado Hills"
- Adds state abbreviation "CA" for local SEO signal
- Retains brand name at end
- Under 60-character limit

### Recommended Meta Description

```html
<meta
  name="description"
  content="Individual, couples, and family therapy in El Dorado Hills, CA. Meagan Murray, AMFT offers online sessions throughout California. Book a free consultation today."
/>
```

Character count: 155

**Reasoning:**

- Front-loads service types (individual, couples, family) for rich snippet appeal
- Includes primary geo keyword "El Dorado Hills, CA"
- Names the therapist and credential for E-E-A-T
- Mentions telehealth/online for search intent match
- Clear CTA ("Book a free consultation today")

---

## Section 3 — Technical Head Tags

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Therapy Services in El Dorado Hills, CA | EDH Therapy</title>
<meta
  name="description"
  content="Individual, couples, and family therapy in El Dorado Hills, CA. Meagan Murray, AMFT offers online sessions throughout California. Book a free consultation today."
/>
<link rel="canonical" href="https://www.eldoradohillstherapy.com/services" />
<meta name="robots" content="index, follow" />
<meta name="geo.region" content="US-CA" />
<meta name="geo.placename" content="El Dorado Hills" />
<meta name="geo.position" content="38.6857;-121.0819" />
<meta name="ICBM" content="38.6857, -121.0819" />
```

---

## Section 4 — Open Graph & Twitter Card Tags

```html
<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="EDH Therapy" />
<meta
  property="og:title"
  content="Therapy Services in El Dorado Hills, CA | EDH Therapy"
/>
<meta
  property="og:description"
  content="Individual, couples, and family therapy in El Dorado Hills, CA. Meagan Murray, AMFT offers online sessions throughout California. Book a free consultation today."
/>
<meta
  property="og:url"
  content="https://www.eldoradohillstherapy.com/services"
/>
<meta
  property="og:image"
  content="https://www.eldoradohillstherapy.com/og/services-og.jpg"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta
  property="og:image:alt"
  content="EDH Therapy services — individual, couples, and family therapy in El Dorado Hills, California"
/>
<meta property="og:locale" content="en_US" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta
  name="twitter:title"
  content="Therapy Services in El Dorado Hills, CA | EDH Therapy"
/>
<meta
  name="twitter:description"
  content="Individual, couples, and family therapy in El Dorado Hills, CA. Online sessions throughout California. Book a free consultation."
/>
<meta
  name="twitter:image"
  content="https://www.eldoradohillstherapy.com/og/services-og.jpg"
/>
<meta
  name="twitter:image:alt"
  content="EDH Therapy services — individual, couples, and family therapy in El Dorado Hills, California"
/>
```

### OG Image Asset Specs

- **Filename:** services-og.jpg
- **Dimensions:** 1200 × 630 px
- **Content:** Left side — therapist portrait (reuse existing headshot). Right side — text overlay: "Therapy Services" (large), "Individual · Couples · Family" (medium), "El Dorado Hills, CA | Online Throughout California" (small), EDH Therapy logo bottom-right.
- **Background:** Warm neutral tone consistent with site palette.
- **Format:** JPEG, optimized to under 250 KB.

---

## Section 5 — JSON-LD Structured Data

### Block 1 — BreadcrumbList

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.eldoradohillstherapy.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.eldoradohillstherapy.com/services"
    }
  ]
}
</script>
```

### Block 2 — ProfessionalService (Primary Business Schema)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "EDH Therapy",
  "url": "https://www.eldoradohillstherapy.com",
  "telephone": "+19165004431",
  "email": "contact@edhtherapy.com",
  "description": "Individual, couples, and family therapy in El Dorado Hills, CA. Online telehealth sessions throughout California provided by Meagan Murray, AMFT.",
  "image": "https://www.eldoradohillstherapy.com/headshots/optimized/edh-therapy-therapist-chair-portrait.webp",
  "priceRange": "$175 per 50-minute session",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "El Dorado Hills",
    "addressRegion": "CA",
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
      "name": "California"
    },
    {
      "@type": "City",
      "name": "El Dorado Hills"
    },
    {
      "@type": "City",
      "name": "Folsom"
    },
    {
      "@type": "City",
      "name": "Sacramento"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Therapy Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Individual Therapy",
          "description": "One-on-one therapy for anxiety, depression, self-esteem, identity exploration, and life transitions for adults 18+ and teens 13–17."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Couples Therapy",
          "description": "Therapy for couples focusing on communication, conflict resolution, and deeper emotional connection using Emotionally Focused Therapy."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Family Therapy",
          "description": "Family therapy to improve communication patterns, rebuild trust, and work through family dynamics and transitions."
        }
      }
    ]
  },
  "provider": {
    "@type": "Person",
    "name": "Meagan Murray",
    "jobTitle": "Associate Marriage and Family Therapist",
    "credential": "AMFT",
    "url": "https://www.eldoradohillstherapy.com/about"
  }
}
</script>
```

### Block 3 — Service Schema (Individual Therapy)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Individual Therapy",
  "name": "Individual Therapy — EDH Therapy",
  "description": "One-on-one therapy for anxiety, depression, self-esteem, identity exploration, and life transitions. Available for adults 18+ and teens 13–17 via telehealth throughout California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "EDH Therapy",
    "url": "https://www.eldoradohillstherapy.com"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceType": "Telehealth",
    "serviceUrl": "https://www.eldoradohillstherapy.com/contact"
  },
  "offers": {
    "@type": "Offer",
    "price": "175",
    "priceCurrency": "USD",
    "description": "$175 per 50-minute session, out-of-network"
  }
}
</script>
```

### Block 4 — Service Schema (Couples Therapy)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Couples Therapy",
  "name": "Couples Therapy — EDH Therapy",
  "description": "Strengthen your relationship through improved communication, conflict resolution, and emotional reconnection using Emotionally Focused Therapy (EFT).",
  "provider": {
    "@type": "ProfessionalService",
    "name": "EDH Therapy",
    "url": "https://www.eldoradohillstherapy.com"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "offers": {
    "@type": "Offer",
    "price": "175",
    "priceCurrency": "USD",
    "description": "$175 per 50-minute session, out-of-network"
  }
}
</script>
```

### Block 5 — Service Schema (Family Therapy)

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Family Therapy",
  "name": "Family Therapy — EDH Therapy",
  "description": "Work through family dynamics, improve communication patterns, and rebuild trust within your family system. Available via telehealth across California.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "EDH Therapy",
    "url": "https://www.eldoradohillstherapy.com"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "offers": {
    "@type": "Offer",
    "price": "175",
    "priceCurrency": "USD",
    "description": "$175 per 50-minute session, out-of-network"
  }
}
</script>
```

### Block 6 — FAQPage

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What therapy services does EDH Therapy offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDH Therapy offers individual therapy, couples therapy, and family therapy via secure online telehealth sessions throughout California. Meagan Murray, AMFT, works with adults 18+, teens 13–17, couples, and families."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a therapy session cost at EDH Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each 50-minute session is $175. EDH Therapy is an out-of-network provider. Superbills are available for potential reimbursement depending on your insurance plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does EDH Therapy offer online therapy in California?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All sessions are held via secure, HIPAA-compliant video. You can attend from anywhere in California — no commute or waiting room required."
      }
    },
    {
      "@type": "Question",
      "name": "What therapy approaches does Meagan Murray use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Meagan integrates evidence-based modalities including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), mindfulness-based approaches, narrative therapy, family systems theory, and strength-based person-centered methods."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a first appointment with EDH Therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with a free 15-minute phone consultation to discuss your goals and see if it's a good fit. You can book online at eldoradohillstherapy.com/contact or call (916) 500-4431."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does EDH Therapy serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EDH Therapy is based in El Dorado Hills, CA and serves clients throughout all of California via telehealth. This includes clients in Folsom, Sacramento, Roseville, Granite Bay, Cameron Park, Placerville, Davis, and beyond."
      }
    }
  ]
}
</script>
```

---

## Section 6 — Heading Structure

### Current H1

```
Personalized therapy for change
```

**Problems:**

- Contains no target keyword — "therapy" alone is too generic
- Missing location signal ("El Dorado Hills")
- Missing service types (individual, couples, family)
- Not differentiated from any other therapy site

### Recommended Heading Hierarchy

```
H1: Therapy Services in El Dorado Hills, CA — Individual, Couples & Family
  H2: Types of Therapy
    H3: Individual Therapy
    H3: Couples Therapy
    H3: Family Therapy
  H2: Evidence-Based Therapy Approaches
  H2: Areas of Support
  H2: How Therapy Works
    H3: Free Consultation
    H3: Intake Session
    H3: Regular Sessions
    H3: Ongoing Growth
  H2: Online Therapy Throughout California
  H2: Fees & Insurance
  H2: Frequently Asked Questions About Therapy (NEW)
    H3: What therapy services does EDH Therapy offer?
    H3: How much does a therapy session cost at EDH Therapy?
    H3: Does EDH Therapy offer online therapy in California?
    H3: What therapy approaches does Meagan Murray use?
    H3: How do I book a first appointment with EDH Therapy?
    H3: What areas does EDH Therapy serve?
  H2: Areas Served (NEW)
  H2: Take the First Step Toward Change
```

---

## Section 7 — Complete Page Copy (Section by Section)

---

### Section 1 — Hero

**Eyebrow:** Therapy Services

**[H1] Therapy Services in El Dorado Hills, CA — Individual, Couples & Family**

Whether you're seeking individual support, relationship guidance, or help navigating family dynamics, therapy is tailored to your goals, values, and lived experience. Meagan Murray, AMFT, offers compassionate online therapy throughout California — so you can begin healing from wherever feels most comfortable.

[Button: "Book a Free Consultation" → /contact]
[Button: "View Approaches" → #modalities]

[Image: Therapist seated in a calm studio space]
Alt text: "Meagan Murray, AMFT, therapist at EDH Therapy in El Dorado Hills, California, seated in a calm studio"

---

### Section 2 — Types of Therapy

**Eyebrow:** What I Offer

**[H2] Types of Therapy**

Each therapeutic journey is unique. I offer support across several formats to meet you exactly where you are — whether that's working through personal challenges one-on-one, rebuilding connection with your partner, or strengthening your family relationships.

---

**01**

**[H3] Individual Therapy**

One-on-one support for anxiety, depression, self-esteem, identity exploration, and navigating life transitions. This is a space just for you — to slow down, reflect, and build the tools you need to move forward with clarity and confidence.

[Tags: Adults 18+ · Teens 13–17 · Weekly sessions]

---

**02**

**[H3] Couples Therapy**

Strengthen your relationship through improved communication, conflict resolution, and deeper emotional connection. Using approaches like Emotionally Focused Therapy (EFT), we work together to break negative cycles and create a more secure bond.

[Tags: Premarital · Conflict resolution · Reconnection]

---

**03**

**[H3] Family Therapy**

Work through family dynamics, improve communication patterns, and rebuild trust within your family system. Whether you're navigating a major transition, blending families, or healing parent-child relationships, therapy provides a structured space to reconnect.

[Tags: Parent-child · Blended families · Transitions]

---

### Section 3 — Therapy Modalities

**Eyebrow:** Therapy Modalities  
**Anchor ID:** modalities

**[H2] Evidence-Based Therapy Approaches**

Treatment is never one-size-fits-all. I draw from a blend of proven, evidence-based modalities to support insight, skill-building, and emotional resilience — customizing each session to what works best for you.

---

**01 — CBT**
**Cognitive Behavioral Therapy**
Identify and change unhelpful thought patterns that fuel anxiety, depression, and stress.

**02 — EFT**
**Emotionally Focused Therapy**
Strengthen emotional bonds and break negative cycles in relationships.

**03 — Mindfulness**
**Mindfulness-Based Approaches**
Cultivate present-moment awareness and reduce emotional reactivity.

**04 — Narrative**
**Narrative Therapy**
Reframe your personal story and discover new meaning in your experiences.

**05 — Family Systems**
**Family Systems Theory**
Understand and shift patterns within your family dynamics.

**06 — Person-Centered**
**Strength-Based & Person-Centered**
Build on your existing strengths, wisdom, and capacity for growth.

---

### Section 4 — Areas of Support

**Eyebrow:** Areas of Support

**[H2] You Don't Have to Carry It Alone**

These are some of the challenges I commonly help clients work through. If you don't see your specific concern listed, please reach out — I'm happy to talk about whether therapy with me might be a good fit.

[Tag grid:]

- Anxiety & Stress
- Depression & Low Mood
- Relationship Challenges
- Self-Esteem & Identity
- Life Transitions
- Codependency & Boundaries
- Divorce & Separation
- Parenting Challenges
- Grief & Loss

---

### Section 5 — How Therapy Works

**Eyebrow:** The Process

**[H2] How Therapy Works**

A clear, supportive process designed to help you feel comfortable and informed from the very first step.

---

**01**

**[H3] Free Consultation**

A 15-minute phone call to discuss what's bringing you to therapy, answer your questions, and see if we're a good fit — no pressure, just a conversation.

---

**02**

**[H3] Intake Session**

Your first full 50-minute session where we explore your history, current challenges, and therapy goals together.

---

**03**

**[H3] Regular Sessions**

Weekly or bi-weekly online meetings tailored to your schedule, focused on building skills and creating meaningful change.

---

**04**

**[H3] Ongoing Growth**

Therapy is a collaborative process. We'll continuously assess your progress and adjust our approach as you grow.

---

### Section 6 — Telehealth Sessions

**[H2] Online Therapy Throughout California**

All sessions are held through secure, HIPAA-compliant video — providing flexibility, privacy, and ease from wherever you are in California. No commute, no waiting room. Just a quiet space where you can focus on what matters.

Online therapy has been shown to be just as effective as in-person sessions for concerns like anxiety, depression, and relationship challenges. Whether you're in El Dorado Hills, Sacramento, Folsom, or anywhere else in the state, you'll receive the same personalized care.

[Tags: Secure · Private · Convenient · California-wide]

---

### Section 7 — Fees & Insurance

**[H2] Fees & Insurance**

**$175** per 50-minute session

I am an out-of-network provider. Superbills are provided after each session for potential reimbursement, depending on your insurance plan. If you have questions about using out-of-network benefits, I'm happy to walk you through the process during your free consultation.

---

### Section 8 — FAQs _(NEW SECTION)_

**Eyebrow:** Common Questions

**[H2] Frequently Asked Questions About Therapy**

---

**[H3] What therapy services does EDH Therapy offer?**

EDH Therapy offers individual therapy, couples therapy, and family therapy — all conducted via secure online video. I work with adults 18+, teens 13–17, couples, and families on a wide range of concerns including anxiety, depression, relationship challenges, life transitions, and more.

---

**[H3] How much does a therapy session cost at EDH Therapy?**

Each 50-minute session is $175. I am an out-of-network provider, and I provide superbills after every session that you can submit to your insurance company for potential reimbursement.

---

**[H3] Does EDH Therapy offer online therapy in California?**

Yes. All sessions are held via secure, HIPAA-compliant video so you can attend from anywhere in California. There's no need to commute — just a quiet, private space and a reliable internet connection.

---

**[H3] What therapy approaches does Meagan Murray use?**

I integrate several evidence-based modalities including Cognitive Behavioral Therapy (CBT), Emotionally Focused Therapy (EFT), mindfulness-based approaches, narrative therapy, family systems theory, and strength-based person-centered methods. Each treatment plan is tailored to your unique needs and goals.

---

**[H3] How do I book a first appointment with EDH Therapy?**

Start with a free 15-minute phone consultation. During this call, we'll discuss what's bringing you to therapy and determine if we're a good fit. You can book online or call (916) 500-4431.

[Button: "Book a Free Consultation" → /contact]

---

**[H3] What areas does EDH Therapy serve?**

EDH Therapy is based in El Dorado Hills, California and provides telehealth therapy to clients throughout the entire state. This includes Folsom, Sacramento, Roseville, Granite Bay, Cameron Park, Placerville, Davis, the Bay Area, Los Angeles, San Diego, and everywhere in between.

---

### Section 9 — Areas Served _(NEW SECTION)_

**Eyebrow:** Serving All of California

**[H2] Areas Served**

EDH Therapy is based in El Dorado Hills, CA and offers online therapy to clients throughout California. While many of my clients are in the greater Sacramento region, I welcome anyone in the state who is looking for compassionate, personalized care.

**Local communities served:** El Dorado Hills · Folsom · Sacramento · Roseville · Granite Bay · Rocklin · Cameron Park · Placerville · Elk Grove · Davis · Citrus Heights · Orangevale · Fair Oaks · Rancho Cordova

**Statewide telehealth:** Available to all California residents from the Bay Area to Los Angeles, San Diego to Redding, and everywhere in between.

[Button: "Book a Free Consultation" → /contact]

---

### Section 10 — CTA / Ready to Start

**Eyebrow:** Ready to Start?

**[H2] Take the First Step Toward Change**

Book a free 15-minute consultation to discuss your goals and see if we're a good fit. No pressure, just a conversation about what you need and how therapy can help.

[Button: "Book a Free Consultation" → /contact]

Prefer to reach out directly?

[Link: "(916) 500-4431" → tel:9165004431] | [Link: "Email" → mailto:contact@edhtherapy.com]

---

## Section 8 — Image Alt Text

| #   | Image Location               | Current Alt Text                        | Recommended Alt Text                                                                                  |
| --- | ---------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Hero section                 | Therapist seated in a calm studio space | Meagan Murray, AMFT, therapist at EDH Therapy in El Dorado Hills, California, seated in a calm studio |
| 2   | Site logo (header)           | E                                       | EDH Therapy logo — therapy services in El Dorado Hills, California                                    |
| 3   | Site logo (footer)           | E                                       | EDH Therapy logo — online therapy throughout California                                               |
| 4   | EDC Web Design logo (footer) | EDC Web Design                          | Website designed by EDC Web Design                                                                    |

---

## Section 9 — Internal Links

| Anchor Text                          | Link Target                           | Location on Page                        | Status                                                                    |
| ------------------------------------ | ------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------- |
| EDH Therapy (logo)                   | /                                     | Header                                  | Exists                                                                    |
| About                                | /about                                | Header nav                              | Exists                                                                    |
| Services                             | /services                             | Header nav                              | Exists                                                                    |
| FAQs                                 | /faqs                                 | Header nav                              | Exists                                                                    |
| Contact                              | /contact                              | Header nav                              | Exists                                                                    |
| Book Consultation                    | /contact                              | Header nav button                       | Exists                                                                    |
| Book a Free Consultation             | /contact                              | Hero CTA button                         | Exists                                                                    |
| View Approaches                      | #modalities                           | Hero secondary button                   | Exists                                                                    |
| Book a Free Consultation             | /contact                              | Bottom CTA button                       | Exists                                                                    |
| (916) 500-4431                       | tel:9165004431                        | Bottom contact                          | Exists                                                                    |
| Email                                | mailto:contact@edhtherapy.com         | Bottom contact                          | Exists                                                                    |
| Home                                 | /                                     | Footer                                  | Exists                                                                    |
| About                                | /about                                | Footer                                  | Exists                                                                    |
| Services                             | /services                             | Footer                                  | Exists                                                                    |
| FAQs                                 | /faqs                                 | Footer                                  | Exists                                                                    |
| Contact                              | /contact                              | Footer                                  | Exists                                                                    |
| Privacy Policy                       | /privacy                              | Footer                                  | Exists                                                                    |
| Terms of Service                     | /terms                                | Footer                                  | Exists                                                                    |
| Individual Therapy                   | /services (anchor or future sub-page) | Types of Therapy section                | **MISSING — add link to /contact or future /services/individual-therapy** |
| Couples Therapy                      | /services (anchor or future sub-page) | Types of Therapy section                | **MISSING — add link to /contact or future /services/couples-therapy**    |
| Family Therapy                       | /services (anchor or future sub-page) | Types of Therapy section                | **MISSING — add link to /contact or future /services/family-therapy**     |
| Meagan Murray, AMFT                  | /about                                | Hero paragraph (therapist name mention) | **MISSING — add inline link to About page**                               |
| Book a Free Consultation             | /contact                              | FAQ section (last question)             | **MISSING — add CTA button**                                              |
| Book a Free Consultation             | /contact                              | Areas Served section (new)              | **MISSING — add CTA button in new section**                               |
| Learn more about the therapy process | /faqs                                 | How Therapy Works section               | **MISSING — add contextual link to FAQs page**                            |

---

## Section 10 — Implementation Checklist

### Head Tags & Meta

- ☐ 1. Update `<title>` tag to: `Therapy Services in El Dorado Hills, CA | EDH Therapy`
- ☐ 2. Update `<meta name="description">` to recommended copy (155 chars)
- ☐ 3. Add or verify `<link rel="canonical">` pointing to `https://www.eldoradohillstherapy.com/services`
- ☐ 4. Add `<meta name="robots" content="index, follow">`
- ☐ 5. Add geo meta tags (geo.region, geo.placename, geo.position, ICBM)

### Open Graph & Twitter

- ☐ 6. Add all Open Graph meta tags as specified in Section 4
- ☐ 7. Add all Twitter Card meta tags as specified in Section 4
- ☐ 8. Create OG image asset (1200×630px) per specs and upload to `/og/services-og.jpg`

### Structured Data (JSON-LD)

- ☐ 9. Add BreadcrumbList schema block
- ☐ 10. Add ProfessionalService schema block
- ☐ 11. Add Service schema block for Individual Therapy
- ☐ 12. Add Service schema block for Couples Therapy
- ☐ 13. Add Service schema block for Family Therapy
- ☐ 14. Add FAQPage schema block with all 6 Q&A pairs
- ☐ 15. Validate all JSON-LD blocks at https://validator.schema.org/

### Heading Structure

- ☐ 16. Update H1 to: `Therapy Services in El Dorado Hills, CA — Individual, Couples & Family`
- ☐ 17. Update H2 headings per recommended hierarchy in Section 6
- ☐ 18. Verify no skipped heading levels (H1 → H2 → H3 only)

### Page Copy

- ☐ 19. Replace hero section copy (Section 7, Section 1)
- ☐ 20. Replace Types of Therapy section copy (Section 7, Section 2)
- ☐ 21. Replace Therapy Modalities section copy (Section 7, Section 3)
- ☐ 22. Replace Areas of Support section copy (Section 7, Section 4)
- ☐ 23. Replace How Therapy Works section copy (Section 7, Section 5)
- ☐ 24. Replace Telehealth Sessions section copy (Section 7, Section 6)
- ☐ 25. Replace Fees & Insurance section copy (Section 7, Section 7)
- ☐ 26. Add new FAQ section with all 6 questions and answers (Section 7, Section 8)
- ☐ 27. Add new Areas Served section (Section 7, Section 9)
- ☐ 28. Replace CTA / Ready to Start section copy (Section 7, Section 10)

### Images

- ☐ 29. Update hero image alt text per Section 8 table
- ☐ 30. Update header logo alt text per Section 8 table
- ☐ 31. Update footer logo alt text per Section 8 table

### Internal Links

- ☐ 32. Add inline link from "Meagan Murray, AMFT" in hero paragraph to /about
- ☐ 33. Add "Book a Free Consultation" button in FAQ section linking to /contact
- ☐ 34. Add "Book a Free Consultation" button in Areas Served section linking to /contact
- ☐ 35. Add contextual link from How Therapy Works section to /faqs
- ☐ 36. Consider linking each service type card (Individual, Couples, Family) to /contact with CTA text

### Validation & QA

- ☐ 37. Test page with Google Rich Results Test (https://search.google.com/test/rich-results)
- ☐ 38. Test structured data with Schema.org Validator
- ☐ 39. Verify title tag and meta description render correctly in Google SERP preview tool
- ☐ 40. Check OG tags with Facebook Sharing Debugger (https://developers.facebook.com/tools/debug/)
- ☐ 41. Check Twitter Card with Twitter Card Validator
- ☐ 42. Run Lighthouse audit for SEO score — target 95+
- ☐ 43. Verify canonical URL resolves correctly (no redirect loops)
- ☐ 44. Test page on mobile for heading readability and CTA visibility
- ☐ 45. Submit updated URL to Google Search Console for re-indexing
