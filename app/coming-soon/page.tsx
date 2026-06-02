import type { Metadata } from "next";
import ComingSoonPage from "../components/ComingSoonPage";
import { buildPageMetadata } from "@/lib/page-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Coming Soon",
  description:
    "This EDH Therapy page is being prepared and will be available soon.",
  pathname: "/coming-soon",
  noindex: true,
});

export default function ComingSoonRoute() {
  return <ComingSoonPage />;
}
