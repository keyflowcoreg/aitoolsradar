import { Metadata } from "next";
import { TermsOfService } from "@/components/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AIToolsRadar.",
};

export default function TermsPage() {
  return (
    <TermsOfService
      companyName="AI Business Factory"
      productName="AIToolsRadar"
      contactEmail="hello@aitoolsradar.com"
      websiteUrl="https://aitoolsradar-zeta.vercel.app"
      lastUpdated="2026-03-20"
    />
  );
}
