import type { Metadata } from "next";
import ContractPageTemplate from "./components/page-template/ContractPageTemplate";
import { homePageData } from "@/lib/site-pages/homepage-new.data";

export const metadata: Metadata = homePageData.metadata;

export default function Home() {
  return <ContractPageTemplate data={homePageData} />;
}
