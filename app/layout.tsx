import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/tools";

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Compare 40+ AI tools across code, writing, design, marketing, data, and automation.",
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
              url: "https://aitoolsradar.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://aitoolsradar.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <Analytics product="aitoolsradar" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
