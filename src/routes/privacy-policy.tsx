import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Greensboro Mold Removal Company" },
      { name: "description", content: "How Greensboro Mold Removal Company collects, uses, and protects your information." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <Section>
        <div className="prose max-w-3xl space-y-5 text-foreground/85">
          <p>This policy explains what information {business.name} collects when you use our website or contact us, and what we do with it.</p>
          <h2 className="text-xl">Information we collect</h2>
          <p>When you fill out a contact form or call us, we collect your name, phone number, email, and any details you share about your property. We use this only to respond to your request and provide service.</p>
          <h2 className="text-xl">How we use it</h2>
          <p>We use your information to schedule appointments, provide quotes, complete work, and follow up. We do not sell or rent your information to anyone.</p>
          <h2 className="text-xl">Cookies and analytics</h2>
          <p>Our website uses basic analytics to understand how visitors use the site. You can disable cookies in your browser at any time.</p>
          <h2 className="text-xl">Contact</h2>
          <p>Questions about this policy? Email {business.email} or call {business.phoneDisplay}.</p>
        </div>
      </Section>
    </Layout>
  );
}
