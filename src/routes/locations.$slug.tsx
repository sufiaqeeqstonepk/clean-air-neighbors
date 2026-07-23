import { createFileRoute, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { LocationTemplate } from "@/components/site/LocationTemplate";
import { getCanonicalUrl } from "@/lib/canonical";
import { getLocationContent } from "@/lib/content";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const c = getLocationContent(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    }
    return {
      meta: [
        { title: loaderData.metaTitle },
        { name: "description", content: loaderData.metaDesc },
        { property: "og:title", content: loaderData.metaTitle },
        { property: "og:description", content: loaderData.metaDesc },
        { property: "og:url", content: getCanonicalUrl(`/locations/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: getCanonicalUrl(`/locations/${params.slug}`) }],
    };
  },
  component: LocationPage,
  notFoundComponent: () => (
    <Layout hideCTA>
      <div className="container-x py-24">
        <h1>Location not found</h1>
      </div>
    </Layout>
  ),
});

function LocationPage() {
  const c = Route.useLoaderData();
  return (
    <Layout hideCTA>
      <LocationTemplate {...c} />
    </Layout>
  );
}