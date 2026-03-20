import Link from "next/link";
import { categories, WALLET_ADDRESS } from "@/lib/tools";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      {/* Build with our tools */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-text-primary">
            Build with our tools
          </h3>
          <p className="mb-6 text-text-secondary">
            Products designed to help you ship faster and earn more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://promptforge.dev?ref=aitoolsradar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyan-accent px-6 py-3 font-semibold text-black transition-transform hover:scale-105"
            >
              PromptForge — $19
            </a>
            <a
              href="https://siteforge.dev?ref=aitoolsradar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-accent px-6 py-3 font-semibold text-cyan-accent transition-transform hover:scale-105"
            >
              SiteForge — $29
            </a>
            <a
              href="https://cryptopaykit.com?ref=aitoolsradar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-accent px-6 py-3 font-semibold text-cyan-accent transition-transform hover:scale-105"
            >
              CryptoPayKit — $49
            </a>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-accent font-bold text-black text-sm">
                AI
              </div>
              <span className="text-lg font-bold">
                AITools<span className="text-cyan-accent">Radar</span>
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              Find the right AI tool. Stop wasting money on the wrong one.
            </p>
            <p className="mt-4 text-xs text-text-muted">
              Curated by AI researchers
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-text-primary">Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/${cat.slug}`}
                    className="text-sm text-text-secondary transition-colors hover:text-cyan-accent"
                  >
                    {cat.name} AI Tools
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-text-primary">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://promptforge.dev?ref=aitoolsradar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-cyan-accent"
                >
                  PromptForge
                </a>
              </li>
              <li>
                <a
                  href="https://siteforge.dev?ref=aitoolsradar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-cyan-accent"
                >
                  SiteForge
                </a>
              </li>
              <li>
                <a
                  href="https://cryptopaykit.com?ref=aitoolsradar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-secondary transition-colors hover:text-cyan-accent"
                >
                  CryptoPayKit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold text-text-primary">Legal</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-text-secondary">
                  Affiliate Disclosure: We may earn commissions from links on this site.
                </span>
              </li>
              <li>
                <span className="text-sm text-text-muted break-all">
                  Tips: {WALLET_ADDRESS.slice(0, 10)}...{WALLET_ADDRESS.slice(-8)}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-center text-sm text-text-muted">
          &copy; {new Date().getFullYear()} AIToolsRadar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
