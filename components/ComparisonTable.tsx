"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import type { Tool } from "@/lib/tools";

interface ComparisonTableProps {
  tools: Tool[];
}

export default function ComparisonTable({ tools }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[700px] border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border)]">
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-secondary">
              Tool
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-secondary">
              Rating
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-secondary">
              Pricing
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-text-secondary">
              Best For
            </th>
            <th className="px-4 py-3 text-right text-sm font-semibold text-text-secondary">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, i) => (
            <motion.tr
              key={tool.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              className="border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-bg-card)]"
            >
              <td className="px-4 py-4">
                <Link
                  href={`/tools/${tool.slug}`}
                  className="font-semibold text-text-primary hover:text-cyan-accent transition-colors"
                >
                  {tool.name}
                </Link>
              </td>
              <td className="px-4 py-4">
                <StarRating rating={tool.rating} size="sm" animated={false} />
              </td>
              <td className="px-4 py-4 text-sm text-text-secondary">
                {tool.pricing.split("/")[0]}
              </td>
              <td className="px-4 py-4">
                <span className="rounded-full bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent">
                  {tool.bestFor.length > 40
                    ? tool.bestFor.slice(0, 40) + "..."
                    : tool.bestFor}
                </span>
              </td>
              <td className="px-4 py-4 text-right">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border border-cyan-accent px-4 py-1.5 text-sm font-medium text-cyan-accent transition-all hover:bg-cyan-accent hover:text-black"
                >
                  Visit
                </a>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
