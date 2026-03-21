"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryCard from "@/components/CategoryCard";
import StarRating from "@/components/StarRating";
import NewsletterForm from "@/components/NewsletterForm";
import EmailCapture from "@/components/EmailCapture";
import { FAQAccordion } from "@/components/FAQAccordion";
import { EcosystemFooter } from "@/components/EcosystemFooter";
import { categories, getTopPicks } from "@/lib/tools";

const topPicks = getTopPicks();

const paidProducts = [
  {
    name: "PromptForge",
    price: "$19",
    description: "Master AI prompts. Get better results from any AI tool with proven prompt frameworks.",
    url: "https://promptforge.dev?ref=aitoolsradar",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "SiteForge",
    price: "$29",
    description: "Generate complete landing pages with AI. No design skills needed, ready to deploy.",
    url: "https://siteforge.dev?ref=aitoolsradar",
    accent: "from-purple-500/20 to-cyan-500/20",
  },
  {
    name: "CryptoPayKit",
    price: "$49",
    description: "Accept crypto payments on any website. Drop-in components, multi-chain support.",
    url: "https://cryptopaykit.com?ref=aitoolsradar",
    accent: "from-green-500/20 to-cyan-500/20",
  },
];

export default function HomeClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          >
            The AI Tools You{" "}
            <span className="text-cyan-accent">Actually Need</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-text-secondary"
          >
            Stop wasting money on the wrong AI tool. Compare 40+ tools across 6
            categories with honest reviews, real pricing, and clear recommendations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/code"
              className="rounded-lg bg-cyan-accent px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
            >
              Browse Tools
            </Link>
            <a
              href="#newsletter"
              className="rounded-lg border border-[var(--color-border)] px-8 py-3 font-semibold text-text-primary transition-colors hover:border-cyan-accent"
            >
              Get Weekly Updates
            </a>
          </motion.div>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <HeroCarousel />
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Browse by Category</h2>
          <p className="text-text-secondary">
            Find the best AI tools for your specific needs
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* Top Picks */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Top Picks</h2>
          <p className="text-text-secondary">
            Our highest-rated AI tools across all categories
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {topPicks.map((tool, i) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-cyan-accent/40 hover:bg-[var(--color-bg-card-hover)]"
            >
              <div className="mb-1 text-xs font-medium uppercase tracking-wider text-cyan-accent">
                {tool.category}
              </div>
              <h3 className="mb-2 text-xl font-bold text-text-primary">
                {tool.name}
              </h3>
              <StarRating rating={tool.rating} size="sm" />
              <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-3">
                {tool.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-text-muted">{tool.pricing.split("/")[0]}</span>
                <div className="flex gap-2">
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm font-medium text-cyan-accent hover:underline"
                  >
                    Review
                  </Link>
                  <a
                    href={tool.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-cyan-accent px-3 py-1 text-sm font-semibold text-black transition-transform hover:scale-105"
                  >
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Tools */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold">Our Tools</h2>
          <p className="text-text-secondary">
            Products we built to help you ship faster
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {paidProducts.map((product, i) => (
            <motion.a
              key={product.name}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className={`block rounded-xl border border-[var(--color-border)] bg-gradient-to-br ${product.accent} p-6 transition-all hover:border-cyan-accent/40`}
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-xl font-bold text-text-primary">
                  {product.name}
                </h3>
                <span className="rounded-full bg-cyan-accent/20 px-3 py-1 text-sm font-bold text-cyan-accent">
                  {product.price}
                </span>
              </div>
              <p className="text-sm text-text-secondary">{product.description}</p>
              <div className="mt-4 text-sm font-medium text-cyan-accent">
                Learn more &rarr;
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <NewsletterForm />
      </section>

      {/* Email Capture */}
      <section className="mx-auto max-w-xl px-4 py-16 sm:px-6">
        <EmailCapture
          heading="Get weekly AI tool insights"
          description="New tools, updated reviews, and category deep-dives delivered every week."
          buttonText="Subscribe Free"
          accent="emerald"
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <FAQAccordion
          heading="Frequently Asked Questions"
          items={[
            {
              question: "Is AIToolsRadar really free?",
              answer: "Yes, completely free. No account required, no hidden paywalls. We make money through affiliate links when you visit a tool through our site. This does not affect our ratings or recommendations.",
            },
            {
              question: "How do you rate AI tools?",
              answer: "We evaluate tools based on features, ease of use, pricing, documentation quality, and real-world performance. Every review is based on actual usage, not marketing claims.",
            },
            {
              question: "How often are reviews updated?",
              answer: "We review and update tool listings regularly as pricing, features, and capabilities change. Major updates are reflected within a week.",
            },
            {
              question: "Can I suggest a tool to add?",
              answer: "Absolutely! Use our contact form or email us at hello@aitoolsradar.com. We review every suggestion and add qualified tools within a few days.",
            },
            {
              question: "What categories do you cover?",
              answer: "We cover 6 main categories: Code (AI coding assistants), Writing (content generation), Design (image and visual AI), Marketing (SEO and growth tools), Data (analytics and data processing), and Automation (workflow and productivity AI).",
            },
            {
              question: "Do affiliate links affect your ratings?",
              answer: "No. Our ratings are independent of affiliate relationships. We rate tools based on quality, not commission rates. Some highly-rated tools have no affiliate program at all.",
            },
          ]}
        />
      </section>

      {/* Ecosystem Footer */}
      <EcosystemFooter currentProduct="AIToolsRadar" />
    </>
  );
}
