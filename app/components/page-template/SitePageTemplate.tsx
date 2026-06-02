import type { ReactNode } from "react";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import type { JsonLdScript } from "@/lib/site-pages/types";

type SitePageTemplateProps = {
  children: ReactNode;
  className?: string;
  jsonLd?: JsonLdScript[];
  mainClassName?: string;
};

export default function SitePageTemplate({
  children,
  className = "min-h-screen bg-cream",
  jsonLd = [],
  mainClassName,
}: SitePageTemplateProps) {
  return (
    <div className={className}>
      <Header />

      <main className={mainClassName}>
        {jsonLd.map((script) => (
          <script
            key={script.id}
            id={script.id}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(script.data),
            }}
          />
        ))}
        {children}
      </main>

      <Footer />
    </div>
  );
}
