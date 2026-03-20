import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  tools,
  getToolBySlug,
  getAlternatives,
  getCategoryBySlug,
  SITE_NAME,
  SITE_URL,
} from "@/lib/tools";
import ToolPageClient from "./ToolPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  const title = `${tool.name} Review (2026) — Pricing, Features, Pros & Cons`;
  const description = `Is ${tool.name} worth it? Detailed review with pricing (${tool.pricing}), features, pros, cons, and alternatives. Rating: ${tool.rating}/5.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/tools/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/tools/${slug}`,
      siteName: SITE_NAME,
      type: "article",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const alternatives = getAlternatives(tool);
  const category = getCategoryBySlug(tool.category);

  return (
    <ToolPageClient
      tool={tool}
      alternatives={alternatives}
      category={category || null}
    />
  );
}
