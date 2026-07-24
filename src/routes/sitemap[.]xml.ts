import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, locations } from "@/lib/business";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const proto = request.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
        const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? url.host;
        const origin = `${proto}://${host}`;

        const staticPaths = [
          { path: "/", priority: "1.0" },
          { path: "/about", priority: "0.7" },
          { path: "/contact", priority: "0.8" },
          { path: "/blog", priority: "0.6" },
          { path: "/team", priority: "0.6" },
          { path: "/certifications", priority: "0.6" },
          { path: "/process", priority: "0.6" },
          { path: "/case-studies", priority: "0.6" },
          { path: "/reviews", priority: "0.6" },
          { path: "/faq", priority: "0.6" },
          { path: "/privacy-policy", priority: "0.3" },
          { path: "/terms-of-service", priority: "0.3" },
          { path: "/accessibility", priority: "0.3" },
          { path: "/disclaimer", priority: "0.3" },
        ];
        const svc = services.map(s => ({ path: `/services/${s.slug}`, priority: "0.8" }));
        const loc = locations.map(l => ({ path: `/locations/${l.slug}`, priority: "0.7" }));
        const blog = blogPosts.map(b => ({ path: `/blog/${b.slug}`, priority: "0.6" }));
        const all = [...staticPaths, ...svc, ...loc, ...blog];
        const lastmod = new Date().toISOString().slice(0, 10);

        const urls = all
          .map(
            e =>
              `  <url><loc>${origin}${e.path}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
