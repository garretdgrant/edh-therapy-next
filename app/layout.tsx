import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { therapistDeskPortrait } from "./headshots";
import { buildPageUrl, getBusinessId, getWebSiteId } from "@/lib/schema";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_DESCRIPTION,
  DEFAULT_TWITTER_IMAGE,
  SITE_NAME,
} from "@/lib/page-metadata";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
    images: [DEFAULT_TWITTER_IMAGE],
  },
};

const siteUrl = getSiteUrl();
const webSiteId = getWebSiteId();
const businessId = getBusinessId();

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": webSiteId,
  url: siteUrl,
  name: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  publisher: {
    "@id": businessId,
  },
  inLanguage: "en-US",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "OnlineBusiness"],
  "@id": businessId,
  name: SITE_NAME,
  alternateName: "El Dorado Hills Therapy",
  url: siteUrl,
  logo: buildPageUrl("/favicon.ico"),
  image: new URL(therapistDeskPortrait, siteUrl).toString(),
  description:
    "EDH Therapy is an El Dorado Hills-based online therapy practice offering telehealth therapy for individuals, couples, teens, and families throughout California.",
  telephone: "+1-916-500-4431",
  email: "contact@edhtherapy.com",
  priceRange: "$175 per session",
  paymentAccepted: "Credit Card, Debit Card, HSA, FSA",
  areaServed: {
    "@type": "State",
    name: "California",
  },
  location: {
    "@type": "Place",
    name: "El Dorado Hills, California",
    address: {
      "@type": "PostalAddress",
      addressLocality: "El Dorado Hills",
      addressRegion: "CA",
      addressCountry: "US",
    },
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "therapy consultation",
    telephone: "+1-916-500-4431",
    email: "contact@edhtherapy.com",
    url: buildPageUrl("/contact"),
    areaServed: "California",
    availableLanguage: "en-US",
  },
  serviceType: [
    "Online therapy",
    "Telehealth therapy",
    "Individual therapy",
    "Couples therapy",
    "Teen therapy",
    "Family therapy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${outfit.variable} antialiased`}>
        <script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          id="business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
