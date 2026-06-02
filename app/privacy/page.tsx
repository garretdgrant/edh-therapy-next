import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { privacyPageData } from "@/lib/site-pages/legal.data";

export const metadata: Metadata = privacyPageData.metadata;

export default function PrivacyPage() {
  redirect("/coming-soon");
}
