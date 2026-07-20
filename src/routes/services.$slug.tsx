import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Phone, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { getServiceContent, type ServiceContent } from "@/lib/content";
import { serviceSchema } from "@/components/site/SchemaMarkup";
import { business, locations, services } from "@/lib/business";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const c = getServiceContent(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDesc },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDesc },
        { property: "og:url", content: `/services/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/services/${params.slug}` }],
    };
  },
  component: ServicePage,
  notFoundComponent: () => <Layout><div className="container-x py-24"><h1>Service not found</h1></div></Layout>,
});

function ServicePage() {
  const c = Route.useLoaderData();
  return (
    <Layout>
      <PageHeader eyebrow="Service" title={c.h1} subtitle={c.intro}>
        <div className="flex flex-wrap gap-3">
          <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark">
            <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
          </a>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-brand px-5 py-3 font-semibold text-brand hover:bg-brand-light">Free Quote</Link>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="space-y-10">
            {c.sections.map(s => (
              <div key={s.h2}>
                <h2 className="text-2xl">{s.h2}</h2>
                <p className="mt-3 text-foreground/80">{s.body}</p>
                {s.bullets && (
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map(b => <li key={b} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" /><span>{b}</span></li>)}
                  </ul>
                )}
              </div>
            ))}
            <div>
              <h2 className="text-2xl">Related services</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.filter(s => s.slug !== c.slug).slice(0, 6).map(s => (
                  <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="rounded-full border px-3 py-1.5 text-sm hover:border-brand hover:text-brand">{s.title}</Link>
                ))}
              </div>
              <h2 className="mt-8 text-2xl">Cities we serve</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {locations.map(l => (
                  <Link key={l.slug} to="/locations/$slug" params={{ slug: l.slug }} className="rounded-full border px-3 py-1.5 text-sm hover:border-brand hover:text-brand">{l.city}, {l.state}</Link>
                ))}
              </div>
            </div>
          </article>
          <aside className="lg:sticky lg:top-24 h-fit rounded-lg border bg-brand-light p-6">
            <h3 className="text-lg">Talk to a specialist</h3>
            <p className="mt-2 text-sm text-muted-foreground">Free estimates, honest advice, no pressure.</p>
            <a href={`tel:${business.phoneRaw}`} className="mt-4 flex items-center justify-center gap-2 rounded-md bg-brand px-4 py-3 font-semibold text-brand-foreground">
              <Phone className="h-4 w-4" /> {business.phoneDisplay}
            </a>
            <Link to="/contact" className="mt-2 flex items-center justify-center rounded-md border border-brand bg-white px-4 py-3 font-semibold text-brand">Contact form</Link>
            <div className="mt-4 border-t pt-4 text-xs text-muted-foreground">
              <p>{business.address.street}<br />{business.address.city}, {business.address.state} {business.address.zip}</p>
              <p className="mt-2">{business.hours}</p>
            </div>
          </aside>
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(c.title, c.intro)) }} />
    </Layout>
  );
}
