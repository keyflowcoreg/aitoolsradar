import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  categories,
  getToolsByCategory,
  getCategoryBySlug,
  SITE_NAME,
  SITE_URL,
  type CategorySlug,
} from "@/lib/tools";
import CategoryPageClient from "./CategoryPageClient";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const title = `Best AI ${category.name} Tools (2026) — Compared & Ranked`;
  const description = `Compare the ${category.toolCount} best AI tools for ${category.name.toLowerCase()}. Honest reviews, pricing, pros & cons. ${category.description}`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${slug}`,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const categoryTools = getToolsByCategory(slug as CategorySlug);

  return (
    <CategoryPageClient
      category={category}
      tools={categoryTools}
    />
  );
}
