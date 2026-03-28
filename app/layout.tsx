import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { therapistDeskPortrait } from "./headshots";
import { getProfessionalServiceId, getWebSiteId } from "@/lib/schema";
import {
  DEFAULT_SITE_DESCRIPTION,
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
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: DEFAULT_SITE_DESCRIPTION,
  },
};

const siteUrl = getSiteUrl();
const webSiteId = getWebSiteId();
const professionalServiceId = getProfessionalServiceId();

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": webSiteId,
  url: siteUrl,
  name: SITE_NAME,
  description: DEFAULT_SITE_DESCRIPTION,
  publisher: {
    "@id": professionalServiceId,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": professionalServiceId,
  name: SITE_NAME,
  url: siteUrl,
  image: new URL(therapistDeskPortrait, siteUrl).toString(),
  description:
    "Compassionate therapy in El Dorado Hills, California, with online therapy available throughout California.",
  telephone: "+1-916-471-2562",
  email: "contact@edhtherapy.com",
  areaServed: {
    "@type": "State",
    name: "California",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "El Dorado Hills",
    addressRegion: "CA",
    addressCountry: "US",
  },
  serviceType: ["Individual Therapy", "Couples Therapy", "Family Therapy"],
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
          id="professional-service-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
