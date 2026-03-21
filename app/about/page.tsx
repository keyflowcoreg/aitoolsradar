import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About AIToolsRadar — the free AI tool comparison directory by AI Business Factory.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
        About AIToolsRadar
      </h1>

      <div className="space-y-6 text-zinc-300 leading-relaxed">
        <p>
          AIToolsRadar is a free, independent directory that helps developers and creators find
          the right AI tools for their needs. We compare 40+ tools across 6 categories &mdash;
          code, writing, design, marketing, data, and automation &mdash; with honest reviews,
          real pricing, and clear recommendations.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">Why We Built This</h2>
        <p>
          The AI tool landscape is overwhelming. New tools launch every week, pricing changes
          constantly, and marketing promises rarely match reality. We built AIToolsRadar to cut
          through the noise and give you straightforward comparisons based on actual usage.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">Part of AI Business Factory</h2>
        <p>
          AIToolsRadar is part of the{" "}
          <a
            href="https://forgestore.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            AI Business Factory
          </a>{" "}
          ecosystem &mdash; 8 developer tools built to help you build, ship, and monetize
          AI-powered products. From coding rules (RulesForge) to security scanning (AgentAudit)
          to crypto payments (CryptoPayKit), every tool in the ecosystem is designed to work
          together.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">How We Make Money</h2>
        <p>
          AIToolsRadar is free to use. We earn revenue through affiliate links when you visit
          a tool through our site. This does not affect our ratings or recommendations &mdash;
          every review is based on actual tool quality, not affiliate commission rates.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">Contact</h2>
        <p>
          Have a tool you want listed? Found an error in a review? Want to collaborate?
          Reach out at{" "}
          <a
            href="mailto:hello@aitoolsradar.com"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            hello@aitoolsradar.com
          </a>{" "}
          or visit our{" "}
          <a
            href="/contact"
            className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
          >
            contact page
          </a>.
        </p>
      </div>
    </div>
  );
}
