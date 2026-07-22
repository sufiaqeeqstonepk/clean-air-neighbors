import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Greensboro Mold Removal Company" },
      { name: "description", content: "Important disclaimers about the information, pricing, and services described on the Greensboro Mold Removal Company website." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Disclaimer" subtitle="Last updated: January 2026" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>
            The information on this website is provided by {business.name} for general education about mold, water damage, indoor air quality, and related restoration services. We want it to be useful, but it is not a replacement for a real in-person inspection of your property or advice from a licensed professional.
          </p>

          <h2 className="text-xl">Not medical advice</h2>
          <p>
            Mold can affect people in different ways. Any health information you read on this site is general and is not medical advice. If you have symptoms you think are related to mold, water damage, or indoor air quality, please talk with your doctor or a qualified health professional.
          </p>

          <h2 className="text-xl">Not legal or insurance advice</h2>
          <p>
            Content about insurance claims, landlord and tenant issues, or legal responsibilities is general information. Rules vary by policy, contract, and location. For advice on your specific situation, please contact a licensed attorney or your insurance carrier directly.
          </p>

          <h2 className="text-xl">Property conditions vary</h2>
          <p>
            Every home and building is different. Age, construction type, past water events, ventilation, and climate all affect what you find inside walls, attics, crawl spaces, and HVAC systems. Only an in-person inspection can tell you what is actually happening in your property. Do not make repair or health decisions based only on what you read here.
          </p>

          <h2 className="text-xl">Pricing and estimates</h2>
          <p>
            Any prices, ranges, or examples shown on this website are for reference only and can change at any time without notice. The only binding price for your project is the written estimate we provide in person after inspecting the site.
          </p>

          <h2 className="text-xl">Accuracy of information</h2>
          <p>
            We do our best to keep this website current and correct. Even so, information can become outdated and errors can slip through. {business.name} does not guarantee that all content is complete, accurate, or free of typos, and we are not responsible for decisions made based on the content alone.
          </p>

          <h2 className="text-xl">External links</h2>
          <p>
            Our site may link to third-party websites for your convenience. We do not control these sites and we are not responsible for their content, accuracy, privacy practices, or safety.
          </p>

          <h2 className="text-xl">Testimonials and case studies</h2>
          <p>
            Customer reviews and case studies on this site describe specific past projects. Your project, results, and timeline may be different. Testimonials are shared with permission and are not a promise of a specific outcome.
          </p>

          <h2 className="text-xl">DIY guidance</h2>
          <p>
            Some articles on the site describe what a mold or water damage project usually involves. This is background information, not step-by-step instructions to do the work yourself. Improper mold work can spread contamination and make the problem worse. When in doubt, please call a certified professional.
          </p>

          <h2 className="text-xl">Contact</h2>
          <p>
            For advice specific to your property, please contact us. Call {business.phoneDisplay}, email {business.email}, or visit us at {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
