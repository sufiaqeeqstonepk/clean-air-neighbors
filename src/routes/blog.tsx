import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Mold Removal Blog & Guides | Greensboro Mold Removal Company" },
      { name: "description", content: "Practical guides on mold, moisture, crawl spaces, insurance claims, and indoor air quality from a certified Greensboro, NC mold company." },
      { property: "og:title", content: "Mold Removal Blog & Guides | Greensboro, NC" },
      { property: "og:description", content: "Helpful, plain-English articles on mold, moisture, and indoor air quality in North Carolina homes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <Layout>
      <PageHeader
        eyebrow="Resources"
        title="Mold and moisture guides for homeowners"
        subtitle="Short, practical articles written by certified mold professionals who work on this every day in Greensboro and across the Triad."
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(p => (
            <article key={p.slug} className="group rounded-lg border bg-card overflow-hidden hover:border-brand transition">
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-48 object-cover group-hover:scale-[1.02] transition-transform"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.readMinutes} min read</p>
                  <h2 className="mt-2 text-lg leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
