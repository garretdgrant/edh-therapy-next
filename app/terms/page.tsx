import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of service information for EDH Therapy is being prepared and will be available soon.",
  pathname: "/terms",
  noindex: true,
});

export default function TermsPage() {
  redirect("/coming-soon");
}
