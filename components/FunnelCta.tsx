"use client";

import { motion } from "framer-motion";

interface FunnelCtaProps {
  text: string;
  product: string;
  price: string;
  url: string;
}

export default function FunnelCta({ text, product, price, url }: FunnelCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-xl border border-cyan-accent/30 bg-gradient-to-br from-cyan-accent/10 to-transparent p-6"
    >
      <p className="mb-3 text-sm text-text-secondary">{text}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2"
      >
        <motion.span
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-cyan-accent px-5 py-2.5 font-semibold text-black"
        >
          {product} — {price}
        </motion.span>
        <span className="text-sm text-cyan-accent transition-transform group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    </motion.div>
  );
}
