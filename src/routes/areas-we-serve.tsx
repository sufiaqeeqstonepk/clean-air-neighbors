import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { locations, business } from "@/lib/business";
import { Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/areas-we-serve")({
  head: () => ({
    meta: [
      { title: "Areas We Serve in North Carolina | Greensboro Mold Removal Company" },
      { name: "description", content: `Mold inspection and remediation across ${locations.length}+ North Carolina cities. Based in Greensboro, serving the Triad and beyond. Call (743) 373-1171.` },
      { property: "og:title", content: "Areas We Serve in North Carolina" },
      { property: "og:description", content: "Local mold removal service across North Carolina. Find your city." },
      { property: "og:url", content: "/areas-we-serve" },
    ],
    links: [{ rel: "canonical", href: "/areas-we-serve" }],
  }),
  component: AreasWeServe,
});

function AreasWeServe() {
  const grouped = locations.reduce<Record<string, typeof locations>>((acc, l) => {
    const letter = l.city[0].toUpperCase();
    (acc[letter] ||= []).push(l);
    return acc;
  }, {});
  const letters = Object.keys(grouped).sort();

  return (
    <Layout>
      <PageHeader
        eyebrow="Service Area"
        title="Areas We Serve in North Carolina"
        subtitle={`Based in Greensboro, our crews travel across the Triad and throughout North Carolina. We currently serve ${locations.length} cities and towns, with same-week appointments in most areas and 24/7 emergency response.`}
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4 text-foreground/80">
            <h2>Local mold experts, close to home</h2>
            <p>Mold problems do not wait, and neither do we. Whether you are in downtown Greensboro, out in Summerfield, or across the state line in the mountains, we send a certified technician to your address, walk the property with you, and give a written quote before any work starts.</p>
            <p>Every job follows the same IICRC S520 standard. It does not matter if it is a small bathroom spot or a full basement remediation. The process is the same: inspect, contain, remove, clean, and verify.</p>
            <h3>What to expect when you call</h3>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>A real person answers, 24/7 for emergencies</li>
              <li>Free on-site inspection with moisture mapping</li>
              <li>Written report and honest quote before work begins</li>
              <li>Licensed, insured, and background-checked crews</li>
              <li>Insurance documentation handled for you</li>
            </ul>
          </div>
          <aside className="rounded-lg border bg-brand-light p-6">
            <MapPin className="h-6 w-6 text-brand" />
            <h3 className="mt-3 text-lg">Not sure if we serve your area?</h3>
            <p className="mt-2 text-sm text-foreground/80">Give us a call. If we cannot reach you, we can usually point you to a trusted local partner.</p>
            <a href={`tel:${business.phoneRaw}`} className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:bg-brand-dark">
              <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
            </a>
          </aside>
        </div>
      </Section>

      <Section className="border-t">
        <h2>Browse cities by letter</h2>
        <p className="mt-2 text-muted-foreground">Click any city to see local details, service info, and contact options.</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {letters.map(l => (
            <a key={l} href={`#letter-${l}`} className="rounded-md border bg-card px-3 py-1.5 text-sm font-semibold text-brand hover:bg-brand-light">{l}</a>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {letters.map(letter => (
            <div key={letter} id={`letter-${letter}`}>
              <h3 className="text-2xl font-bold text-brand border-b pb-2">{letter}</h3>
              <div className="mt-4 grid gap-x-4 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-sm">
                {grouped[letter].map(l => (
                  <Link key={l.slug} to="/locations/$slug" params={{ slug: l.slug }} className="py-1 text-foreground/80 hover:text-brand hover:underline">
                    {l.city}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
