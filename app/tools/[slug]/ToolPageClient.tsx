"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "@/components/StarRating";
import FunnelCta from "@/components/FunnelCta";
import NewsletterForm from "@/components/NewsletterForm";
import type { Tool, Category } from "@/lib/tools";
import { SITE_URL } from "@/lib/tools";

interface Props {
  tool: Tool;
  alternatives: Tool[];
  category: Category | null;
}

export default function ToolPageClient({ tool, alternatives, category }: Props) {
  return (
    <>
      <article className="mx-auto max-w-5xl px-4 pb-16 pt-12 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-text-muted">
          <Link href="/" className="hover:text-cyan-accent">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/${tool.category}`} className="hover:text-cyan-accent">
            {category?.name || tool.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-text-secondary">{tool.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="mb-1 text-sm font-medium uppercase tracking-wider text-cyan-accent">
                {category?.name || tool.category}
              </div>
              <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">
                {tool.name}
              </h1>
              <StarRating rating={tool.rating} size="lg" />
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                {tool.description}
              </p>
            </motion.div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-accent px-8 py-3 text-lg font-bold text-black"
              >
                Try {tool.name}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </motion.a>
              <Link
                href={`/${tool.category}`}
                className="inline-flex items-center rounded-lg border border-[var(--color-border)] px-6 py-3 font-medium text-text-primary transition-colors hover:border-cyan-accent"
              >
                Compare alternatives
              </Link>
            </motion.div>

            {/* Pricing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-10"
            >
              <h2 className="mb-3 text-xl font-bold">Pricing</h2>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4">
                <p className="text-text-primary">{tool.pricing}</p>
              </div>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-10"
            >
              <h2 className="mb-4 text-xl font-bold">Key Features</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                {tool.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-3"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-cyan-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-sm text-text-primary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Pros & Cons */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10"
            >
              <h2 className="mb-4 text-xl font-bold">Pros & Cons</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-5">
                  <h3 className="mb-3 font-semibold text-green-400">Pros</h3>
                  <ul className="space-y-2">
                    {tool.pros.map((pro) => (
                      <li
                        key={pro}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-green-400">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-5">
                  <h3 className="mb-3 font-semibold text-red-400">Cons</h3>
                  <ul className="space-y-2">
                    {tool.cons.map((con) => (
                      <li
                        key={con}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="mt-0.5 text-red-400">-</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Best For */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 rounded-lg border border-cyan-accent/20 bg-cyan-accent/5 p-6"
            >
              <h2 className="mb-2 text-lg font-bold">Best For</h2>
              <p className="text-text-secondary">{tool.bestFor}</p>
            </motion.section>

            {/* Alternatives */}
            {alternatives.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-10"
              >
                <h2 className="mb-4 text-xl font-bold">Alternatives</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {alternatives.map((alt) => (
                    <Link
                      key={alt.slug}
                      href={`/tools/${alt.slug}`}
                      className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] p-4 transition-all hover:border-cyan-accent/40 hover:bg-[var(--color-bg-card-hover)]"
                    >
                      <div>
                        <p className="font-semibold text-text-primary">
                          {alt.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {alt.pricing.split("/")[0]}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-cyan-accent">
                          {alt.rating.toFixed(1)}
                        </span>
                        <span className="text-xs text-text-muted">/5</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Quick info */}
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
                <h3 className="mb-4 font-bold text-text-primary">Quick Info</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Category</dt>
                    <dd>
                      <Link
                        href={`/${tool.category}`}
                        className="text-cyan-accent hover:underline"
                      >
                        {category?.name || tool.category}
                      </Link>
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Rating</dt>
                    <dd className="font-semibold text-cyan-accent">
                      {tool.rating}/5
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-text-muted">Pricing</dt>
                    <dd className="text-right text-text-primary">
                      {tool.pricing.split("/")[0]}
                    </dd>
                  </div>
                </dl>
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block rounded-lg bg-cyan-accent py-3 text-center font-bold text-black transition-transform hover:scale-105"
                >
                  Visit {tool.name}
                </a>
              </div>

              {/* Funnel CTA */}
              {category?.funnelCta && (
                <FunnelCta
                  text={category.funnelCta.text}
                  product={category.funnelCta.product}
                  price={category.funnelCta.price}
                  url={category.funnelCta.url}
                />
              )}
            </div>
          </aside>
        </div>

        {/* Newsletter */}
        <div className="mx-auto mt-16 max-w-3xl">
          <NewsletterForm />
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Review",
            itemReviewed: {
              "@type": "SoftwareApplication",
              name: tool.name,
              description: tool.description,
              url: tool.url,
              applicationCategory: category?.name || tool.category,
              offers: {
                "@type": "Offer",
                description: tool.pricing,
              },
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: tool.rating,
              bestRating: 5,
              worstRating: 1,
            },
            author: {
              "@type": "Organization",
              name: "AIToolsRadar",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Organization",
              name: "AIToolsRadar",
              url: SITE_URL,
            },
          }),
        }}
      />
    </>
  );
}
