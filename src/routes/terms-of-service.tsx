import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Greensboro Mold Removal Company" },
      { name: "description", content: "The terms and conditions that govern use of the Greensboro Mold Removal Company website and services." },
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
          <p>
            These Terms of Service ("Terms") govern your use of the {business.name} website and any services we provide. By using our website, requesting a quote, or hiring us for work, you agree to these Terms. Please read them carefully.
          </p>

          <h2 className="text-xl">Use of the website</h2>
          <p>
            The content on this website is provided for general information only. It is not a substitute for a professional in-person inspection of your property. You agree not to use the site for any unlawful purpose, to attempt to gain unauthorized access to our systems, or to copy, scrape, or resell our content without written permission.
          </p>

          <h2 className="text-xl">Estimates, quotes, and pricing</h2>
          <p>
            Any price ranges shown on the website or discussed by phone are estimates only. The binding scope of work and price is the written estimate we provide after an in-person inspection. Estimates are valid for 30 days unless we state otherwise. Additional work discovered during a project may require a written change order, which you will sign before we proceed.
          </p>

          <h2 className="text-xl">Scheduling, deposits, and payment</h2>
          <p>
            Some projects require a deposit before we schedule the work. Final payment is due upon project completion unless a written payment plan has been agreed to. Late payments may be subject to a service fee and interest allowed under North Carolina law. Returned checks are subject to a processing fee.
          </p>

          <h2 className="text-xl">Cancellations</h2>
          <p>
            You may cancel a scheduled appointment at no cost by giving us at least 24 hours notice. Same-day cancellations after a crew has been dispatched may be charged a trip fee to cover time and materials.
          </p>

          <h2 className="text-xl">Access to your property</h2>
          <p>
            You agree to give our crew safe access to the work area, working utilities, and clear pathways for equipment. You confirm that you are the property owner or have written permission from the owner to authorize the work.
          </p>

          <h2 className="text-xl">Warranty</h2>
          <p>
            We stand behind our work with a written warranty that is provided in your final project paperwork. The warranty covers the remediation work we performed as long as the underlying moisture source has been repaired and the environment is maintained. The warranty does not cover new water intrusion, deferred repairs you were advised to complete, or damage from unrelated events.
          </p>

          <h2 className="text-xl">Insurance claims</h2>
          <p>
            When you ask us to work with your insurance carrier, we will document the loss and provide the information your adjuster requests. You remain responsible for your deductible and any amount your policy does not cover. We are not a party to your insurance contract.
          </p>

          <h2 className="text-xl">Limits of liability</h2>
          <p>
            {business.name} is not responsible for damage or losses caused by conditions that existed before our work, ongoing water problems you were advised to fix, hidden defects that could not be detected by a normal inspection, or events outside our control. Our total liability for any claim is limited to the amount you paid us for the specific project giving rise to the claim.
          </p>

          <h2 className="text-xl">No medical or legal advice</h2>
          <p>
            Information on this website and provided during your project is educational. It is not medical advice, legal advice, or a substitute for a licensed professional. If you have health concerns related to mold or water damage, please talk with your doctor.
          </p>

          <h2 className="text-xl">Intellectual property</h2>
          <p>
            All logos, text, photography, and design on this site are owned by {business.name} or our licensors and are protected by copyright and trademark law. You may not reproduce or use them without written permission.
          </p>

          <h2 className="text-xl">Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of North Carolina. Any dispute must be filed in the state or federal courts located in Guilford County, North Carolina.
          </p>

          <h2 className="text-xl">Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The updated version will be posted here with a new "Last updated" date. Continued use of the site or our services after changes are posted means you accept the updated Terms.
          </p>

          <h2 className="text-xl">Contact</h2>
          <p>
            Questions about these Terms? Call {business.phoneDisplay} or email {business.email}. You can also write to {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
