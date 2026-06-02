# SEO TODO - Homepage

## Manual follow-ups

- Create `public/og-image-homepage.jpg` for the homepage social share asset at `1200x630`.
  Intended usage: homepage Open Graph and Twitter image.
  Prompt: "Create a warm, calming website social share image for EDH Therapy. Use a professional headshot of Meagan Murray, AMFT positioned on the left or right third, a soft neutral background with sage and warm beige tones, and subtle brand styling that feels grounded and emotionally safe. Include tasteful text overlay reading 'Meagan Murray, AMFT' with secondary text 'Online Therapy - El Dorado Hills, CA'. Add a small EDH Therapy logo mark. Keep the composition clean, premium, and legible at thumbnail size."
  Instruction: avoid embedded text only if the final social design is approved without overlay copy; otherwise keep text minimal and highly readable.

- Export or create a branded square logo asset at `300x300` as `public/logo.png`.
  Intended usage: homepage LocalBusiness schema `logo` image.
  Prompt: "Design a simple, calming logo mark for EDH Therapy using sage green, warm cream, and charcoal accents. The mark should feel professional, therapeutic, and minimal, suitable for a counseling practice in El Dorado Hills. Create a clean square composition that works at small sizes, with no background texture and no extra text beyond an optional subtle 'E' monogram."
  Instruction: avoid embedded text beyond a minimal monogram if possible.

- Validate the homepage JSON-LD in `https://validator.schema.org/` after deployment.

- Test the homepage social preview in `https://www.opengraph.xyz/` after the final OG asset is in place.

- Submit the updated homepage URL in Google Search Console after deployment.

## Implementation notes

- The guide conflicts on the hero secondary CTA destination. The implementation uses `/services` so the CTA remains an indexable internal route instead of an in-page jump.
- The current homepage metadata uses the existing file-based social images as a temporary safe fallback until `og-image-homepage.jpg` is created.
