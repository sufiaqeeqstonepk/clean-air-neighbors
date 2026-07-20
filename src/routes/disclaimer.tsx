import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Greensboro Mold Removal Company" },
      { name: "description", content: "General disclaimer for information on the Greensboro Mold Removal Company website." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Disclaimer" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>Information on this website is for general education and is not medical, legal, or professional advice. Mold conditions vary from property to property. Only an in-person inspection can tell you what is actually happening in your home or building.</p>
          <p>We make our best effort to keep the information current and accurate. We do not guarantee it is complete or free of errors. Prices mentioned are estimates and can change without notice.</p>
          <p>For advice specific to your property, please contact us directly.</p>
        </div>
      </Section>
    </Layout>
  );
}
