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

      {/* Process overview */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2>Our 5-Step Mold Remediation Process</h2>
          <p className="mt-3 text-muted-foreground">Every job follows the IICRC S520 standard. Here is exactly what happens from the first phone call to the final clearance test.</p>
        </div>
        <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {[
            { n: "1", t: "Inspection", d: "We walk the property, use moisture meters and thermal cameras, and find the source of the water problem." },
            { n: "2", t: "Testing", d: "Optional air and surface samples go to an independent accredited lab so you get unbiased results." },
            { n: "3", t: "Containment", d: "We seal off the work area with plastic barriers and negative air pressure to keep spores from spreading." },
            { n: "4", t: "Removal", d: "Affected drywall, insulation, and wood are safely removed. Surfaces are HEPA vacuumed and treated." },
            { n: "5", t: "Clearance", d: "A post-remediation verification test confirms the space is safe before you move back in." },
          ].map(s => (
            <li key={s.n} className="rounded-lg border bg-card p-6">
              <div className="text-3xl font-extrabold text-brand">{s.n}</div>
              <h3 className="mt-2 text-base font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Signs you need a pro */}
      <section className="bg-secondary">
        <div className="container-x py-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2>Signs You May Have a Mold Problem</h2>
            <p className="mt-3 text-muted-foreground">Mold is not always visible. If any of these sound familiar, it is worth a free inspection.</p>
            <ul className="mt-6 space-y-3">
              {[
                "A musty or earthy smell that will not go away",
                "Dark spots on drywall, grout, or ceilings",
                "Peeling paint or bubbling wallpaper near plumbing",
                "Allergy symptoms that get worse indoors",
                "A past leak, flood, or roof problem that was never dried out",
                "High humidity in the basement or crawl space",
              ].map(x => <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" /><span>{x}</span></li>)}
            </ul>
          </div>
          <div>
            <h2>Common Causes We See in the Triad</h2>
            <p className="mt-3 text-muted-foreground">North Carolina humidity, aging homes, and heavy summer storms all play a role.</p>
            <ul className="mt-6 space-y-3">
              {[
                "Slow plumbing leaks under sinks and behind walls",
                "Crawl spaces without a vapor barrier",
                "Roof and flashing leaks from wind and hail damage",
                "HVAC condensation and dirty drain pans",
                "Poor bathroom ventilation and long steamy showers",
                "Basement seepage after heavy rain",
              ].map(x => <li key={x} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" /><span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-16">
        <div className="max-w-2xl">
          <h2>Frequently Asked Questions</h2>
          <p className="mt-3 text-muted-foreground">Straight answers to the questions we hear every week.</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            { q: "How much does mold removal cost in Greensboro?", a: "Most residential jobs run between $500 and $6,000 depending on the size of the area and the source of the water. Small bathroom spots are on the low end. A full basement or crawl space is on the high end. We give a written quote before any work starts." },
            { q: "Do I need a mold test before remediation?", a: "Not always. If you can see the mold and know where the water came from, testing is optional. Testing helps when the source is hidden, when a tenant or buyer needs proof, or when clearance is required after the job." },
            { q: "How long does mold remediation take?", a: "A small job takes one day. A typical basement or attic job takes 2 to 4 days. Larger jobs with structural drying can run a week or more." },
            { q: "Is black mold really dangerous?", a: "Any indoor mold growth should be taken seriously, but the health effects depend on the person and the amount of exposure. We handle every job with proper containment and personal protection regardless of the species." },
            { q: "Will homeowners insurance cover it?", a: "Insurance usually covers mold when it comes from a sudden covered event, like a burst pipe. Long-term leaks and humidity problems are often excluded. We document everything so you can file a strong claim." },
            { q: "Do you offer free inspections?", a: "Yes. On-site inspections in the Greensboro area are free and come with a written quote. There is no obligation to book work with us." },
          ].map(f => (
            <details key={f.q} className="group rounded-lg border bg-card p-5">
              <summary className="cursor-pointer font-semibold text-foreground">{f.q}</summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-light">
        <div className="container-x py-16">
          <h2>What Our Neighbors Say</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl">Real feedback from homeowners and property managers across the Triad.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: "Sarah M., Greensboro", t: "They found mold behind our bathroom wall the previous inspector missed. Clean work, clear pricing, and they were done in two days." },
              { n: "Derek P., Winston-Salem", t: "Called on a Sunday after a pipe burst. A crew was at the house within a few hours and stopped it from turning into a full remediation." },
              { n: "Lisa R., High Point", t: "Honest company. They told us our attic issue was minor and did not try to upsell us into a full remediation. Rare these days." },
            ].map(r => (
              <figure key={r.n} className="rounded-lg border bg-white p-6">
                <div className="flex gap-0.5 text-brand">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-3 text-sm text-foreground/80">"{r.t}"</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">{r.n}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Areas We Serve */}
      <section className="container-x py-16">
        <h2>Areas We Serve in North Carolina</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Based in Greensboro, we serve homes and businesses across North Carolina. Pick your city below for local details.</p>
        <div className="mt-8 grid gap-x-4 gap-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-sm">
          {locations.map(l => (
            <Link key={l.slug} to="/locations/$slug" params={{ slug: l.slug }} className="py-1 text-foreground/80 hover:text-brand hover:underline">
              {l.city}
            </Link>
          ))}
        </div>
      </section>

    </Layout>
  );
}
