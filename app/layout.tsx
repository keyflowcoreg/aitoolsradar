import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/tools";
import { CookieBanner } from "@/components/CookieBanner";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { AnnouncementBar } from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Compare 40+ AI tools across code, writing, design, marketing, data, and automation. Honest reviews, pricing, and recommendations to find the right AI tool for you.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Compare 40+ AI tools across code, writing, design, marketing, data, and automation.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "AIToolsRadar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Compare 40+ AI tools across code, writing, design, marketing, data, and automation.",
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "AIToolsRadar",
              description:
                "Compare 40+ AI tools across code, writing, design, marketing, data, and automation. Honest reviews, pricing, and recommendations.",
              url: "https://aitoolsradar-zeta.vercel.app",
              publisher: {
                "@type": "Organization",
                name: "AI Business Factory",
                url: "https://forgestore.vercel.app",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aitoolsradar-zeta.vercel.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <NoiseOverlay />
        <AnnouncementBar
          items={["FREE AI TOOLS DIRECTORY", "Compare 40+ AI tools \u2014 reviews, ratings, alternatives"]}
          className="bg-emerald-950/60 text-emerald-300 border-b border-emerald-500/20"
        />
        <Analytics product="aitoolsradar" />
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
