"use client";

import { motion } from "framer-motion";
import ComparisonTable from "@/components/ComparisonTable";
import ToolCard from "@/components/ToolCard";
import FunnelCta from "@/components/FunnelCta";
import NewsletterForm from "@/components/NewsletterForm";
import type { Category, Tool } from "@/lib/tools";
import { SITE_URL } from "@/lib/tools";

interface Props {
  category: Category;
  tools: Tool[];
}

export default function CategoryPageClient({ category, tools }: Props) {
  const sortedTools = [...tools].sort((a, b) => b.rating - a.rating);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden px-4 pb-8 pt-16 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="mb-2 inline-block rounded-full bg-cyan-accent/10 px-4 py-1 text-sm font-medium text-cyan-accent">
              {category.toolCount} tools compared
            </span>
            <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Best AI {category.name} Tools
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          {/* Main content */}
          <div>
            {/* Comparison table */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 sm:p-6"
            >
              <h2 className="mb-4 text-xl font-bold">Quick Comparison</h2>
              <ComparisonTable tools={sortedTools} />
            </motion.div>

            {/* Tool cards grid */}
            <h2 className="mb-6 text-xl font-bold">Detailed Reviews</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {sortedTools.map((tool, i) => (
                <ToolCard key={tool.slug} tool={tool} index={i} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {category.funnelCta && (
              <FunnelCta
                text={category.funnelCta.text}
                product={category.funnelCta.product}
                price={category.funnelCta.price}
                url={category.funnelCta.url}
              />
            )}

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="mb-3 font-bold text-text-primary">Top Pick</h3>
              {sortedTools[0] && (
                <>
                  <p className="text-lg font-bold text-cyan-accent">
                    {sortedTools[0].name}
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {sortedTools[0].bestFor}
                  </p>
                  <a
                    href={sortedTools[0].affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block rounded-lg bg-cyan-accent py-2.5 text-center font-semibold text-black transition-transform hover:scale-105"
                  >
                    Try {sortedTools[0].name}
                  </a>
                </>
              )}
            </div>

            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
              <h3 className="mb-3 font-bold text-text-primary">Best Value</h3>
              {sortedTools.length > 1 && (() => {
                const bestValue = [...sortedTools].sort((a, b) => {
                  const aFree = a.pricing.toLowerCase().includes("free");
                  const bFree = b.pricing.toLowerCase().includes("free");
                  if (aFree && !bFree) return -1;
                  if (!aFree && bFree) return 1;
                  return b.rating - a.rating;
                })[0];
                return (
                  <>
                    <p className="text-lg font-bold text-cyan-accent">
                      {bestValue.name}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {bestValue.pricing.split("/")[0]}
                    </p>
                    <a
                      href={bestValue.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block rounded-lg border border-cyan-accent py-2.5 text-center font-semibold text-cyan-accent transition-all hover:bg-cyan-accent hover:text-black"
                    >
                      Try {bestValue.name}
                    </a>
                  </>
                );
              })()}
            </div>
          </aside>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mt-16 max-w-3xl">
          <NewsletterForm />
        </div>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `Best AI ${category.name} Tools`,
            description: category.description,
            url: `${SITE_URL}/${category.slug}`,
            numberOfItems: tools.length,
            itemListElement: sortedTools.map((tool, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "SoftwareApplication",
                name: tool.name,
                description: tool.description,
                url: tool.url,
                applicationCategory: category.name,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: tool.rating,
                  bestRating: 5,
                  worstRating: 1,
                },
              },
            })),
          }),
        }}
      />
    </>
  );
}
