import type { Metadata } from "next";
import ContractPageTemplate from "@/app/components/page-template/ContractPageTemplate";
import { thankYouPageData } from "@/lib/site-pages/thank-you.data";

export const metadata: Metadata = thankYouPageData.metadata;

export default function ContactThankYouPage() {
  return <ContractPageTemplate data={thankYouPageData} />;
}
