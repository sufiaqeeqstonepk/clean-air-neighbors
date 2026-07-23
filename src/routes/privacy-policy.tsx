import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { getCanonicalUrl } from "@/lib/canonical";
import { business } from "@/lib/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Greensboro Mold Removal Company" },
      { name: "description", content: "How Greensboro Mold Removal Company collects, uses, stores, and protects your personal information." },
      { property: "og:url", content: getCanonicalUrl("/privacy-policy") },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/privacy-policy") }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: January 2026" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>
            This Privacy Policy explains how {business.name} ("we", "us", or "our") collects, uses, shares, and protects information when you visit our website, call our office, request a quote, or hire us for work. By using our website or contacting us, you agree to this policy.
          </p>

          <h2 className="text-xl">Information we collect</h2>
          <p>We only collect the information we need to respond to you and complete your project. This may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact details you provide, such as your name, phone number, email address, and property address.</li>
            <li>Project details you share with us, including the type of problem, photos, prior repair history, and access instructions.</li>
            <li>Billing information required to process invoices, deposits, or final payments.</li>
            <li>Insurance details when you ask us to work directly with your homeowner or commercial insurance carrier.</li>
            <li>Basic website usage information such as pages viewed, referring website, browser type, device type, and general geographic location based on your IP address.</li>
          </ul>

          <h2 className="text-xl">How we use your information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To answer your questions, schedule inspections, and provide written estimates.</li>
            <li>To perform the services you hired us for and document the work for warranty or insurance purposes.</li>
            <li>To send appointment reminders, follow-up messages, and status updates on active projects.</li>
            <li>To send occasional service reminders, seasonal maintenance tips, or special offers. You can opt out at any time.</li>
            <li>To improve our website, service quality, and customer experience.</li>
            <li>To meet legal, tax, insurance, and safety recordkeeping requirements.</li>
          </ul>

          <h2 className="text-xl">How we share your information</h2>
          <p>We do not sell, rent, or trade your personal information. We only share it in these limited situations:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>With trusted service providers who help us run our business, such as payment processors, scheduling software, and email providers, who are only allowed to use the information to perform specific tasks.</li>
            <li>With independent testing labs when you approve air or surface sample testing.</li>
            <li>With your insurance carrier or adjuster when you ask us to file or support a claim on your behalf.</li>
            <li>When required by law, subpoena, court order, or a valid government request.</li>
            <li>To protect our rights, our staff, other customers, or the public from harm or fraud.</li>
          </ul>

          <h2 className="text-xl">Cookies and website analytics</h2>
          <p>
            Our website uses standard cookies and basic analytics tools to understand how visitors use the site. This helps us fix problems, improve pages, and measure the results of our online efforts. You can control cookies in your browser settings.
          </p>

          <h2 className="text-xl">Text messages and phone calls</h2>
          <p>
            When you give us your phone number, you agree that we may call or text you about your quote, appointment, or active project. We do not use your number for mass marketing without your permission.
          </p>

          <h2 className="text-xl">Data retention</h2>
          <p>
            We keep customer records for as long as needed to service your warranty, defend our work, and comply with tax and insurance rules. In most cases this is at least seven years after your project is complete.
          </p>

          <h2 className="text-xl">How we protect your information</h2>
          <p>
            We use reasonable technical and physical safeguards to protect the information we hold, including secure office storage, password-protected systems, and encrypted payment processing. No method is 100% secure, but we take data security seriously.
          </p>

          <h2 className="text-xl">Children</h2>
          <p>
            Our website and services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us information, please contact us immediately.
          </p>

          <h2 className="text-xl">Your rights</h2>
          <p>
            You can ask us to review, correct, update, or delete the personal information we have about you. To make a request, call us at {business.phoneDisplay} or email {business.email}. We may ask for proof of identity before responding.
          </p>

          <h2 className="text-xl">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will change the "Last updated" date at the top of this page. If the changes are significant, we will make a clear notification. Your continued use of the website means you accept the updated policy.
          </p>

          <h2 className="text-xl">Contact</h2>
          <p>
            Questions about this policy or your information? Call {business.phoneDisplay} or email {business.email}. You can also write to us at {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}.
          </p>
        </div>
      </Section>
    </Layout>
  );
}