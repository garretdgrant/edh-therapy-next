import type { Metadata } from "next";
import ContractPageTemplate from "../components/page-template/ContractPageTemplate";
import { aboutPageData } from "@/lib/site-pages/about.data";

export const metadata: Metadata = aboutPageData.metadata;

export default function About() {
  return <ContractPageTemplate data={aboutPageData} />;
}
