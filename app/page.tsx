import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/tools";

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description:
    "Compare 40+ AI tools across code, writing, design, marketing, data, and automation. Find the best AI tool for your needs with honest reviews and pricing.",
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return <HomeClient />;
}
