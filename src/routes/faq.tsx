import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";

const faqs = [
  { q: "How much does mold removal cost in Greensboro?", a: "Most residential jobs run between $500 and $6,000 depending on how much material has to come out. A small bathroom spot might be under $500. A full basement remediation can be $4,000 to $8,000. We give a firm written price before any work starts." },
  { q: "How long does a mold job take?", a: "A typical home job takes 2 to 5 days. Larger jobs with reconstruction can take 1 to 2 weeks. We tell you the exact timeline in the written estimate." },
  { q: "Do I need to leave the house?", a: "Usually no. We contain the work area so the rest of the home stays clean. If the work is in a main living area or if anyone in the family has serious breathing issues, we may recommend staying elsewhere for a night or two." },
  { q: "Will my insurance cover mold removal?", a: "It depends on the cause. If mold is from a sudden covered event like a burst pipe, most policies cover it up to a limit. Long-term hidden leaks are usually not covered. We help document everything and work with your adjuster." },
  { q: "How do I know if the black spots are really mold?", a: "Not every dark spot is mold. It could be mildew, dirt, or soot. If it wipes off with a damp cloth and does not come back, it is likely surface mildew. If it stays or comes back within a week, call for an inspection." },
  { q: "Can I just clean mold myself with bleach?", a: "For a small spot on tile or grout, yes. Bleach does not really work on porous surfaces like drywall or wood, because it does not reach the roots. Anything larger than a square foot should be looked at professionally." },
  { q: "Do you test for mold?", a: "Yes. We take air and surface samples and send them to a third-party accredited lab. We recommend testing before remediation if the source is unclear, and after remediation as a clearance test." },
  { q: "How fast can you come out?", a: "For emergencies like flooding, same day. For non-emergency inspections, usually within 2 to 5 days depending on the season." },
  { q: "Are you licensed and insured?", a: "Yes. We hold a North Carolina general contractor license, $2M in general liability, and workers comp. Every remediator on our crew is IICRC certified." },
  { q: "Will the mold come back?", a: "Not if the water source is fixed. Mold cannot grow without moisture. We back our work with a written warranty on the areas we treated." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs | Greensboro Mold Removal Company" },
      { name: "description", content: "Answers to the most common questions we get about mold inspection, removal, cost, insurance, and safety in Greensboro, NC." },
      { property: "og:title", content: "Mold Removal FAQs" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <Layout>
      <PageHeader eyebrow="FAQs" title="Common questions about mold" subtitle="If your question is not here, give us a call. We are happy to answer." />
      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map(f => (
            <details key={f.q} className="group rounded-lg border bg-card p-5">
              <summary className="cursor-pointer text-lg font-semibold text-foreground">{f.q}</summary>
              <p className="mt-3 text-foreground/80">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </Layout>
  );
}
