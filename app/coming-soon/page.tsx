import type { Metadata } from "next";
import ContractPageTemplate from "../components/page-template/ContractPageTemplate";
import { comingSoonPageData } from "@/lib/site-pages/coming-soon.data";

export const metadata: Metadata = comingSoonPageData.metadata;

export default function ComingSoonRoute() {
  return <ContractPageTemplate data={comingSoonPageData} />;
}
