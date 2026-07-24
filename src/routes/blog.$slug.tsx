import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Section } from "@/components/site/PageHeader";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { business } from "@/lib/business";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) {
      return {
        meta: [{ title: "Article not found | Greensboro Mold Removal Company" }],
      };
    }
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: post.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.metaDescription,
            image: [post.image],
            datePublished: post.updated,
            dateModified: post.updated,
            author: { "@type": "Organization", name: business.name },
            publisher: {
              "@type": "Organization",
              name: business.name,
              telephone: business.phone,
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  errorComponent: () => (
    <Layout>
      <Section>
        <h1>Article not available</h1>
        <p className="mt-4 text-muted-foreground">Try the <Link to="/blog" className="text-brand font-semibold">blog index</Link>.</p>
      </Section>
    </Layout>
  ),
  notFoundComponent: () => (
    <Layout>
      <Section>
        <h1>Article not found</h1>
        <p className="mt-4 text-muted-foreground">Head back to the <Link to="/blog" className="text-brand font-semibold">blog</Link>.</p>
      </Section>
    </Layout>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  return (
    <Layout>
      <article>
        <header className="border-b bg-gradient-to-b from-brand-light to-background">
          <div className="container-x py-12 md:py-16 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand">Mold & moisture guide</p>
            <h1 className="mt-2">{post.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{post.desc}</p>
            <p className="mt-4 text-sm text-muted-foreground">
              {post.readMinutes} min read · Updated {new Date(post.updated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </header>

        <div className="container-x py-10 md:py-14 max-w-3xl">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={1024}
            height={1024}
            className="w-full h-auto rounded-lg border"
          />

          <p className="mt-8 text-lg leading-relaxed">{post.intro}</p>

          {post.sections.map((s, i) => (
            <section key={i} className="mt-10">
              <h2 className="text-2xl font-semibold">{s.h2}</h2>
              {s.body.map((para, j) => (
                <p key={j} className="mt-4 leading-relaxed text-foreground/90">{para}</p>
              ))}
            </section>
          ))}

          <section className="mt-12 rounded-lg border bg-brand-light/50 p-6">
            <h2 className="text-xl font-semibold">Key takeaways</h2>
            <ul className="mt-4 space-y-2 list-disc pl-5">
              {post.takeaways.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-lg border bg-card p-6 text-center">
            <h2 className="text-xl font-semibold">Think you have a mold problem?</h2>
            <p className="mt-2 text-muted-foreground">Talk to a certified inspector in Greensboro. Same-day response for active leaks.</p>
            <a
              href={`tel:${business.phoneRaw}`}
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-6 py-3 font-semibold hover:bg-brand-dark transition"
            >
              <Phone className="w-5 h-5" />
              Call {business.phoneDisplay}
            </a>
          </section>
        </div>
      </article>

      <Section>
        <h2 className="text-2xl font-semibold">More guides</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {related.map(p => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-lg border bg-card overflow-hidden hover:border-brand transition"
            >
              <img src={p.image} alt={p.imageAlt} loading="lazy" width={1024} height={1024} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-base leading-snug">{p.title}</h3>
                <span className="mt-3 inline-block text-sm font-semibold text-brand">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
