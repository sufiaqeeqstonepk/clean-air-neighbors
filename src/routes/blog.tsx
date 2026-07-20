import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Mold Resources & Blog | Greensboro Mold Removal Company" },
      { name: "description", content: "Practical guides on mold, moisture, and indoor air quality from a local Greensboro, NC mold company." },
      { property: "og:title", content: "Mold Resources & Blog" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { slug: "signs-of-hidden-mold", title: "7 Signs of Hidden Mold in Your Home", desc: "How to spot mold before it shows on the wall, from smells to musty laundry." },
  { slug: "mold-vs-mildew", title: "Mold vs Mildew: What Is Actually Growing on My Wall?", desc: "Plain-English differences and when to worry." },
  { slug: "crawl-space-humidity", title: "Why Your Crawl Space Humidity Matters", desc: "How wet crawl space air affects the whole house and what to do about it." },
  { slug: "after-a-flood", title: "The First 48 Hours After a Flood", desc: "What to do right away to stop mold from taking hold." },
  { slug: "insurance-mold-claim", title: "Filing a Homeowners Insurance Claim for Mold", desc: "What most policies cover, and what they usually do not." },
  { slug: "black-mold-facts", title: "Black Mold: The Facts vs the Hype", desc: "What we actually know about Stachybotrys and health effects." },
];

function Blog() {
  return (
    <Layout>
      <PageHeader eyebrow="Resources" title="Mold and moisture guides for homeowners" subtitle="Short, practical articles written by people who work on this every day." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <article key={p.slug} className="rounded-lg border bg-card p-6 hover:border-brand transition">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <Link to="/contact" className="mt-4 inline-block text-sm font-semibold text-brand">Coming soon →</Link>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
