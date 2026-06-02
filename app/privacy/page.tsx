import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy information for EDH Therapy is being prepared and will be available soon.",
  pathname: "/privacy",
  noindex: true,
});

export default function PrivacyPage() {
  redirect("/coming-soon");
}
