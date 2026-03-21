interface TermsOfServiceProps {
  companyName: string;
  productName: string;
  contactEmail: string;
  websiteUrl: string;
  lastUpdated: string;
  governingLaw?: string;
  jurisdiction?: string;
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </section>
  );
}

export function TermsOfService({
  companyName,
  productName,
  contactEmail,
  websiteUrl,
  lastUpdated,
  governingLaw = "the laws of Italy",
  jurisdiction = "the courts of Cagliari, Italy",
}: TermsOfServiceProps) {
  return (
    <article className="prose-invert mx-auto max-w-3xl space-y-12 px-4 py-16 text-zinc-300 sm:px-6 lg:px-0">
      <header className="space-y-3 border-b border-zinc-800 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Terms of Service
        </h1>
        <p className="text-sm text-zinc-500">Last updated: {lastUpdated}</p>
        <p className="leading-relaxed">
          These Terms of Service (&quot;Terms&quot;) govern your access to and
          use of <strong className="text-white">{productName}</strong> (the
          &quot;Service&quot;), operated by{" "}
          <strong className="text-white">{companyName}</strong> (&quot;we&quot;,
          &quot;us&quot;, &quot;our&quot;). By accessing or using the Service,
          you agree to be bound by these Terms.
        </p>
      </header>

      <Section id="acceptance" title="1. Acceptance of Terms">
        <p>By using the Service, you confirm that you are at least 16 years of age and have the legal capacity to enter into a binding agreement.</p>
        <p>We reserve the right to modify these Terms at any time. Material changes will be communicated via email or a prominent notice on the website.</p>
      </Section>

      <Section id="license" title="2. License and Access">
        <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable licence to access and use the Service for your personal or internal business purposes.</p>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Copy, modify, distribute, or create derivative works of the Service.</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
          <li>Use the Service for any unlawful purpose.</li>
          <li>Use automated means (bots, scrapers) to access the Service without our written permission.</li>
        </ul>
      </Section>

      <Section id="payments" title="3. Payments and Refunds">
        <p>The Service may include paid plans or one-time purchases for digital products. All prices are displayed in the applicable currency at checkout.</p>
        <p>Due to the nature of digital products, all sales are final except where required by applicable law.</p>
      </Section>

      <Section id="ip" title="4. Intellectual Property">
        <p>All content, features, and functionality of the Service are and remain the exclusive property of {companyName} or its licensors.</p>
      </Section>

      <Section id="limitations" title="5. Disclaimer and Limitation of Liability">
        <p>THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>
        <p>TO THE FULLEST EXTENT PERMITTED BY LAW, {companyName.toUpperCase()} SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.</p>
      </Section>

      <Section id="termination" title="6. Termination">
        <p>We may suspend or terminate your access to the Service at any time, with or without cause.</p>
        <p>You may terminate your account at any time by contacting us at <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-zinc-200">{contactEmail}</a>.</p>
      </Section>

      <Section id="governing-law" title="7. Governing Law">
        <p>These Terms shall be governed by and construed in accordance with {governingLaw}. Any disputes shall be subject to the exclusive jurisdiction of {jurisdiction}.</p>
      </Section>

      <Section id="entire-agreement" title="8. Entire Agreement">
        <p>These Terms, together with our <a href="/privacy" className="text-white underline underline-offset-4 hover:text-zinc-200">Privacy Policy</a>, constitute the entire agreement between you and {companyName} regarding the Service.</p>
      </Section>

      <Section id="contact" title="9. Contact Us">
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong className="text-white">Email:</strong> <a href={`mailto:${contactEmail}`} className="text-white underline underline-offset-4 hover:text-zinc-200">{contactEmail}</a></li>
          <li><strong className="text-white">Website:</strong> <a href={websiteUrl} className="text-white underline underline-offset-4 hover:text-zinc-200">{websiteUrl}</a></li>
        </ul>
      </Section>
    </article>
  );
}
