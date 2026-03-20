"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StarRating from "./StarRating";
import type { Tool } from "@/lib/tools";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        href={`/tools/${tool.slug}`}
        className="group block rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 transition-all hover:border-cyan-accent/40 hover:bg-[var(--color-bg-card-hover)]"
      >
        <div className="mb-3 flex items-start justify-between">
          <h3 className="text-lg font-bold text-text-primary group-hover:text-cyan-accent transition-colors">
            {tool.name}
          </h3>
          <span className="rounded-full bg-cyan-accent/10 px-3 py-1 text-xs font-medium text-cyan-accent">
            {tool.bestFor.split(" ").slice(0, 3).join(" ")}
          </span>
        </div>

        <StarRating rating={tool.rating} size="sm" animated={false} />

        <p className="mt-3 text-sm leading-relaxed text-text-secondary line-clamp-2">
          {tool.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-text-muted">{tool.pricing.split("/")[0]}</span>
          <span className="text-sm font-medium text-cyan-accent group-hover:underline">
            View details &rarr;
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
