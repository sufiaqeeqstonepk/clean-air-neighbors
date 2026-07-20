import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { services, locations } from "@/lib/business";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/about", "/contact", "/blog", "/team", "/certifications", "/process", "/case-studies", "/reviews", "/faq", "/privacy-policy", "/terms-of-service", "/accessibility", "/disclaimer"];
        const svc = services.map(s => `/services/${s.slug}`);
        const loc = locations.map(l => `/locations/${l.slug}`);
        const all = [...staticPaths, ...svc, ...loc];

        const urls = all.map(p => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
