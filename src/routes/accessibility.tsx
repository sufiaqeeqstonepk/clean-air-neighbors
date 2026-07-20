import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | Greensboro Mold Removal Company" },
      { name: "description", content: "Our commitment to making our website usable for everyone." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Accessibility Statement" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>{business.name} wants everyone to be able to use our website. We work to meet WCAG 2.1 Level AA standards.</p>
          <h2 className="text-xl">Features</h2>
          <p>Our site uses semantic HTML, keyboard-friendly navigation, alt text on images, and colors that meet minimum contrast ratios.</p>
          <h2 className="text-xl">Feedback</h2>
          <p>If you have trouble using any part of the site, call us at {business.phoneDisplay} or email {business.email} and we will help you directly.</p>
        </div>
      </Section>
    </Layout>
  );
}
