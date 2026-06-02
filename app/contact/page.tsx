import type { Metadata } from "next";
import ContractPageTemplate from "../components/page-template/ContractPageTemplate";
import { contactPageData } from "@/lib/site-pages/contact.data";

export const metadata: Metadata = contactPageData.metadata;

export default function Contact() {
  return <ContractPageTemplate data={contactPageData} />;
}
