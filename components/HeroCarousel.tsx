"use client";

import { motion } from "framer-motion";

const toolNames = [
  "Cursor",
  "Claude",
  "Midjourney",
  "Zapier",
  "ChatGPT",
  "Figma AI",
  "Copilot",
  "DALL-E",
  "HubSpot",
  "n8n",
  "Jasper",
  "Julius",
];

export default function HeroCarousel() {
  return (
    <div className="relative overflow-hidden py-4">
      <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent" />
      <motion.div
        animate={{ x: [0, -1200] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
        className="flex gap-6"
      >
        {[...toolNames, ...toolNames].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="flex h-12 shrink-0 items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] px-6 text-sm font-medium text-text-secondary"
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
