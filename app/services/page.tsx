import type { Metadata } from "next";
import ContractPageTemplate from "../components/page-template/ContractPageTemplate";
import { servicesPageData } from "@/lib/site-pages/services.data";

export const metadata: Metadata = servicesPageData.metadata;

export default function Services() {
  return <ContractPageTemplate data={servicesPageData} />;
}
