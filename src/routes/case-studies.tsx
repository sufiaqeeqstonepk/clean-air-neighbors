import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import ba from "@/assets/before-after.jpg";

const cases = [
  { title: "Flooded basement in Fisher Park", problem: "A burst supply line ran for hours in a 1920s Fisher Park home while the owners were away. About 1,400 square feet of finished basement had standing water, and mold started on the drywall within three days.", did: "We extracted the water the same day, removed drywall up to 24 inches, ran six air movers and two dehumidifiers, and treated the framing. Clearance testing at day 9 came back below the outdoor baseline.", result: "Total time on site: 11 days. Insurance covered the full cost. Owners moved back into a finished basement 3 weeks later." },
  { title: "Attic mold in a Summerfield ranch", problem: "New buyer inspection turned up dark staining on the north roof sheathing. Cause was a bath fan venting directly into the attic.", did: "Rerouted the bath fan through the roof, added a new soffit vent, sanded and treated the sheathing, and fogged the space with an antimicrobial.", result: "Passed post-remediation testing on the first try. Closing went through on schedule." },
  { title: "Crawl space encapsulation in Kernersville", problem: "Musty smell in the whole house, cupping hardwood floors, and visible mold on floor joists.", did: "Removed old plastic and insulation, treated the joists, installed a 20 mil vapor barrier, sealed vents, and added a 90 pint dehumidifier.", result: "Humidity dropped from 78 percent to a steady 48 percent. Musty smell gone within two weeks." },
  { title: "Commercial restaurant kitchen in Winston-Salem", problem: "Slow ice machine leak fed hidden mold behind the wall for months. Restaurant could not close.", did: "Worked overnight for four nights. Contained the wall, removed drywall and insulation, dried the structure, replaced the wall and paint.", result: "Restaurant never lost a day of service. Health inspector signed off with no violations." },
];

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Greensboro Mold Removal Company" },
      { name: "description", content: "Real mold remediation jobs across Greensboro and the Triad. See the problem, the fix, and the result." },
      { property: "og:title", content: "Case Studies" },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: Cases,
});

function Cases() {
  return (
    <Layout>
      <PageHeader eyebrow="Case Studies" title="Recent jobs, real results" subtitle="A few examples of what we do every week. Details changed to protect customer privacy." />
      <Section>
        <img src={ba} alt="Before and after photo of a basement wall that had heavy black mold removed" width={1400} height={900} loading="lazy" className="rounded-xl w-full h-auto mb-10" />
        <div className="space-y-8">
          {cases.map(c => (
            <article key={c.title} className="rounded-lg border bg-card p-6">
              <h3 className="text-xl">{c.title}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div><div className="text-xs font-semibold uppercase text-brand">The problem</div><p className="mt-1 text-sm text-foreground/80">{c.problem}</p></div>
                <div><div className="text-xs font-semibold uppercase text-brand">What we did</div><p className="mt-1 text-sm text-foreground/80">{c.did}</p></div>
                <div><div className="text-xs font-semibold uppercase text-brand">The result</div><p className="mt-1 text-sm text-foreground/80">{c.result}</p></div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
