import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, MapPin } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { getLocationContent } from "@/lib/content";
import { business, services } from "@/lib/business";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const c = getLocationContent(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDesc },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDesc },
        { property: "og:url", content: `/locations/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/locations/${params.slug}` }],
    };
  },
  component: LocationPage,
  notFoundComponent: () => <Layout><div className="container-x py-24"><h1>Location not found</h1></div></Layout>,
});

function LocationPage() {
  const c = Route.useLoaderData();
  return (
    <Layout>
      <PageHeader eyebrow="Service Area" title={c.h1} subtitle={c.intro}>
        <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark">
          <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
        </a>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            <div>
              <h2>Where we work in {c.city}</h2>
              <p className="mt-3 text-foreground/80">{c.landmarks}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.neighborhoods.map(n => <span key={n} className="inline-flex items-center gap-1 rounded-full bg-brand-light px-3 py-1 text-sm text-brand"><MapPin className="h-3 w-3" /> {n}</span>)}
              </div>
            </div>
            <div>
              <h2>Why mold is common in {c.city}</h2>
              <p className="mt-3 text-foreground/80">{c.climate}</p>
            </div>
            <div>
              <h2>Services we offer in {c.city}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map(s => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="rounded-lg border bg-card p-4 hover:border-brand">
                    <div className="font-semibold text-foreground">{s.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{s.short}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2>What to expect from a {c.city} visit</h2>
              <p className="mt-3 text-foreground/80">We start with a phone call to understand what you are seeing, then set a time that works for you. On-site we walk the property, take moisture readings, and give you a written report with a clear plan and price. See our full <Link to="/process" className="text-brand underline">step-by-step process</Link>.</p>
            </div>
          </article>
          <aside className="lg:sticky lg:top-24 h-fit rounded-lg border bg-brand-light p-6">
            <h3 className="text-lg">Free {c.city} quote</h3>
            <a href={`tel:${business.phoneRaw}`} className="mt-3 flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-semibold text-brand-foreground"><Phone className="h-4 w-4" /> {business.phoneDisplay}</a>
            <Link to="/contact" className="mt-2 flex items-center justify-center rounded-md border border-brand bg-white px-4 py-3 font-semibold text-brand">Request Contact</Link>
          </aside>
        </div>
      </Section>
    </Layout>
  );
}
