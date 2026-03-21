import { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for AIToolsRadar — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <PrivacyPolicy
      companyName="AI Business Factory"
      contactEmail="hello@aitoolsradar.com"
      websiteUrl="https://aitoolsradar-zeta.vercel.app"
      lastUpdated="2026-03-20"
    />
  );
}
