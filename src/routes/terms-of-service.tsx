import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Greensboro Mold Removal Company" },
      { name: "description", content: "Terms that govern use of the Greensboro Mold Removal Company website and services." },
      { property: "og:url", content: "/terms-of-service" },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Terms of Service" subtitle="Last updated: January 2026" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>By using this website or hiring {business.name}, you agree to these terms.</p>
          <h2 className="text-xl">Use of the site</h2>
          <p>Content on this site is for general information. It is not a substitute for a professional inspection of your property.</p>
          <h2 className="text-xl">Estimates and quotes</h2>
          <p>Written estimates provided in person are the binding scope of work. Numbers discussed by phone or on this site are ranges only.</p>
          <h2 className="text-xl">Warranty</h2>
          <p>We warranty our remediation work in writing. Details are provided with your project paperwork.</p>
          <h2 className="text-xl">Limits of liability</h2>
          <p>We are not responsible for damage caused by conditions that existed before our work or by ongoing water problems we advised you to fix.</p>
          <h2 className="text-xl">Contact</h2>
          <p>Questions? Call {business.phoneDisplay} or email {business.email}.</p>
        </div>
      </Section>
    </Layout>
  );
}
