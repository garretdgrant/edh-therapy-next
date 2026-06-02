import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { termsPageData } from "@/lib/site-pages/legal.data";

export const metadata: Metadata = termsPageData.metadata;

export default function TermsPage() {
  redirect("/coming-soon");
}
