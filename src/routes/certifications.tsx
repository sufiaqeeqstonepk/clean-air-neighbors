import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Award } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Licensing | Greensboro Mold Removal Company" },
      { name: "description", content: "IICRC certified, EPA lead safe, licensed and insured in North Carolina. Learn what our certifications mean for your job." },
      { property: "og:title", content: "Certifications and Licensing" },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certs,
});

const certs = [
  { name: "IICRC S520 Certified Firm", what: "The Institute of Inspection Cleaning and Restoration Certification sets the industry standard for mold remediation. S520 is the specific standard for how a mold job should be run, from containment to clearance." },
  { name: "IICRC AMRT (Applied Microbial Remediation Technician)", what: "Individual technicians pass this training to work on mold jobs. Every remediation tech on our crew holds it." },
  { name: "IICRC WRT (Water Damage Restoration Technician)", what: "Water is the source of most mold. This training covers proper extraction and drying so mold does not grow in the first place." },
  { name: "ACAC CMI (Council-certified Microbial Investigator)", what: "Held by our senior inspector. Covers testing protocols, sampling strategy, and lab data interpretation." },
  { name: "EPA Lead-Safe Certified Firm", what: "Required for work in homes built before 1978. Guarantees safe handling if lead paint is present." },
  { name: "North Carolina General Contractor License", what: "Allows us to do the rebuild work after remediation, so you do not have to hire a second contractor." },
  { name: "$2M General Liability Insurance", what: "Full coverage so you are protected during work on your property." },
  { name: "OSHA 10-Hour Trained Crews", what: "All field staff complete OSHA safety training." },
];

function Certs() {
  return (
    <Layout>
      <PageHeader eyebrow="Trust" title="Certifications and licensing" subtitle="Here is what our credentials actually mean for your project." />
      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          {certs.map(c => (
            <div key={c.name} className="rounded-lg border bg-card p-6">
              <div className="flex items-start gap-3">
                <Award className="h-6 w-6 text-brand shrink-0" />
                <div>
                  <h3 className="text-lg">{c.name}</h3>
                  <p className="mt-2 text-sm text-foreground/80">{c.what}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
