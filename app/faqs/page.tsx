import type { Metadata } from "next";
import ContractPageTemplate from "../components/page-template/ContractPageTemplate";
import { faqsPageData } from "@/lib/site-pages/faqs.data";

export const metadata: Metadata = faqsPageData.metadata;

export default function FAQs() {
  return <ContractPageTemplate data={faqsPageData} />;
}
