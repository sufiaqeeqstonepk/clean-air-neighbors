import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";

const steps = [
  { n: "01", t: "Phone consultation", b: "We start with a call to understand what you are seeing, hearing, and smelling. We tell you if you need a full inspection or if it can wait." },
  { n: "02", t: "On-site inspection", b: "A certified inspector walks your property, takes moisture readings, checks the attic and crawl space, and photographs every problem area." },
  { n: "03", t: "Written report and estimate", b: "You get a plain-English report with photos and a fixed-price estimate within one business day." },
  { n: "04", t: "Containment setup", b: "Before we touch any mold, we seal off the work area with plastic sheeting and airlocks so nothing spreads." },
  { n: "05", t: "Negative air and HEPA filtration", b: "Air scrubbers run the entire time, pulling spores out of the air through HEPA filters." },
  { n: "06", t: "Removal", b: "We remove all mold-damaged materials safely and bag them for disposal. We save what can be saved and only remove what cannot." },
  { n: "07", t: "Cleaning and treatment", b: "Every surface in the work area gets HEPA vacuumed and wiped. Structural wood is treated with an EPA registered antimicrobial." },
  { n: "08", t: "Drying and moisture control", b: "We set up commercial dryers and monitor moisture readings daily until the structure is dry to a documented baseline." },
  { n: "09", t: "Post-remediation verification", b: "We take air samples for lab testing or arrange an independent hygienist to verify the space is clean." },
  { n: "10", t: "Reconstruction", b: "If you want us to rebuild drywall, paint, or flooring, we can do that too so you have one point of contact." },
];

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Mold Removal Process | Greensboro Mold Removal Company" },
      { name: "description", content: "Step-by-step mold remediation process from inspection to final clearance testing. See exactly how we do the job." },
      { property: "og:title", content: "Our Mold Removal Process" },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

function Process() {
  return (
    <Layout>
      <PageHeader eyebrow="How We Work" title="Our step-by-step mold removal process" subtitle="Every job follows these steps. Nothing gets skipped. You always know what happens next." />
      <Section>
        <ol className="space-y-6">
          {steps.map(s => (
            <li key={s.n} className="grid gap-4 rounded-lg border bg-card p-6 sm:grid-cols-[80px_1fr]">
              <div className="text-3xl font-extrabold text-brand">{s.n}</div>
              <div>
                <h3 className="text-lg">{s.t}</h3>
                <p className="mt-2 text-foreground/80">{s.b}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </Layout>
  );
}
