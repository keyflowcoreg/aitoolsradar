"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "Subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }

    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 4000);
  };

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
      <h3 className="mb-2 text-2xl font-bold text-text-primary">
        Stay ahead of the AI curve
      </h3>
      <p className="mb-6 text-text-secondary">
        Weekly roundup of the best new AI tools, deals, and comparisons. Free, no spam.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto flex max-w-md gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          required
          className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] px-4 py-3 text-text-primary placeholder-text-muted outline-none transition-colors focus:border-cyan-accent"
        />
        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="rounded-lg bg-cyan-accent px-6 py-3 font-semibold text-black transition-opacity disabled:opacity-50"
        >
          {status === "loading" ? "..." : "Subscribe"}
        </motion.button>
      </form>

      <AnimatePresence>
        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-4 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
          >
            {status === "success" && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="mr-1 inline-block"
              >
                &#10003;
              </motion.span>
            )}
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
