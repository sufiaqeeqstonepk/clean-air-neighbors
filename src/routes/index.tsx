import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Shield, Clock, Award, CheckCircle2, Star } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { business, services, locations } from "@/lib/business";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mold Removal in Greensboro, NC | Greensboro Mold Removal Company" },
      { name: "description", content: "Certified mold inspection and remediation in Greensboro, NC. Licensed, insured, IICRC trained. 24/7 emergency response. Call (743) 373-1171." },
      { property: "og:title", content: "Greensboro Mold Removal Company" },
      { property: "og:description", content: "Local mold inspection and remediation in Greensboro, NC. Call (743) 373-1171." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-light to-background">
        <div className="container-x grid gap-10 py-12 md:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm ring-1 ring-border">
              <Shield className="h-3.5 w-3.5" /> Licensed · Insured · IICRC Trained
            </p>
            <h1 className="mt-4">Mold Inspection and Removal in Greensboro, NC</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              Local crews, honest quotes, and the training to do the job right. We handle everything from a small bathroom spot to a full basement remediation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${business.phoneRaw}`} className="inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark">
                <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-brand px-5 py-3 font-semibold text-brand hover:bg-brand-light">
                Get a Free Quote
              </Link>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-foreground/80">
              {["Free written estimates", "Same-week appointments", "24/7 emergency response", "Insurance friendly"].map(x => (
                <li key={x} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[color:var(--accent-teal)]" /> {x}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={hero} alt="Certified mold technician inspecting a wall with a moisture meter in Greensboro" width={1600} height={1100} className="rounded-xl shadow-xl w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y bg-secondary">
        <div className="container-x py-6 grid grid-cols-2 gap-6 md:grid-cols-4 text-center text-sm">
          {[
            { icon: Award, label: "IICRC S520 Certified" },
            { icon: Shield, label: "Licensed & Fully Insured" },
            { icon: Clock, label: "24/7 Emergency Response" },
            { icon: Star, label: "Locally Owned Since 2012" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-foreground/80"><Icon className="h-5 w-5 text-brand" /> {label}</div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2>Our Mold Services</h2>
          <p className="mt-3 text-muted-foreground">Full inspection, testing, and remediation for homes and businesses across the Triad.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-lg border bg-card p-6 transition hover:border-brand hover:shadow-md">
              <h3 className="text-base font-semibold text-foreground group-hover:text-brand">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-brand">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-brand-light">
        <div className="container-x py-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2>Why Homeowners Pick Us</h2>
            <p className="mt-3 text-muted-foreground">We are a local business, not a franchise call center. When you call, you talk to someone who actually works on your job.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Free on-site inspection with a written report",
                "IICRC S520 remediation standards, every job",
                "Independent third-party lab testing available",
                "We work with your insurance and document everything",
                "Clear pricing with no surprise fees",
              ].map(x => <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" /><span>{x}</span></li>)}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "1,200+", v: "Homes remediated" },
              { k: "12+", v: "Years serving the Triad" },
              { k: "24/7", v: "Emergency phone line" },
              { k: "100%", v: "Licensed and insured" },
            ].map(x => (
              <div key={x.v} className="rounded-lg border bg-white p-6">
                <div className="text-3xl font-extrabold text-brand">{x.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{x.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="container-x py-16">
        <h2>Areas We Serve</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Based in Greensboro, working across the Piedmont Triad.</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {locations.map(l => (
            <Link key={l.slug} to="/locations/$slug" params={{ slug: l.slug }} className="rounded-lg border bg-card p-4 text-sm font-semibold hover:border-brand hover:text-brand">
              {l.city}, {l.state}
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
