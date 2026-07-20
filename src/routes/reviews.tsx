import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { Star } from "lucide-react";

const reviews = [
  { name: "Jennifer M.", city: "Greensboro, NC", stars: 5, text: "Water heater died and flooded our finished basement overnight. Called at 6am and Tom was here by 8. They pulled all the water, set up dryers, and had it dry by the weekend. No mold, no drama. Fair price and honest people." },
  { name: "Robert K.", city: "High Point, NC", stars: 5, text: "Got two other quotes that were double what these guys charged and included work we did not actually need. Marcus came out, showed me exactly what was going on in the crawl space, and we fixed only what needed fixing. Two years later, still no musty smell." },
  { name: "Aisha D.", city: "Winston-Salem, NC", stars: 5, text: "Bought a house with attic mold showing on the inspection. They rerouted the bath fan, treated the sheathing, and gave me a written report I sent to the seller. Closing went through no problem. Would recommend to anyone." },
  { name: "David P.", city: "Kernersville, NC", stars: 5, text: "Very professional crew. Contained the work area with plastic, wore full PPE, and cleaned up better than they found it. My wife has asthma and had zero flare-up during the job which was our biggest concern." },
  { name: "Maria S.", city: "Summerfield, NC", stars: 5, text: "Encapsulated our crawl space last spring. Humidity in the house dropped noticeably and the hardwood floors stopped squeaking. Wish we had done it years ago." },
  { name: "Chris L.", city: "Burlington, NC", stars: 4, text: "Job took a day longer than they first estimated because they found more damaged drywall behind the wall. They ate the extra cost which was really appreciated. Great communication throughout." },
  { name: "Nicole H.", city: "Jamestown, NC", stars: 5, text: "Ashley in the office was amazing. She dealt directly with my insurance adjuster and I did not have to lift a finger on paperwork. The remediation itself was smooth and clean." },
  { name: "Terrell R.", city: "Oak Ridge, NC", stars: 5, text: "Fair, honest, and on time. They told me my black spots were mildew not mold and how to clean it myself. Did not charge me for the inspection visit. Any actual mold job I ever have goes to them." },
];

const avg = (reviews.reduce((a, r) => a + r.stars, 0) / reviews.length).toFixed(1);

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Greensboro Mold Removal Company",
  aggregateRating: { "@type": "AggregateRating", ratingValue: avg, reviewCount: reviews.length },
  review: reviews.map(r => ({
    "@type": "Review",
    reviewRating: { "@type": "Rating", ratingValue: r.stars },
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
  })),
};

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Greensboro Mold Removal Company" },
      { name: "description", content: "Real reviews from Greensboro, High Point, Winston-Salem, and Triad homeowners we have helped." },
      { property: "og:title", content: "Customer Reviews" },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <Layout>
      <PageHeader eyebrow="Reviews" title={`${avg} out of 5 from local homeowners`} subtitle="A few of the notes people have sent us. We keep every one." />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map(r => (
            <div key={r.name} className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5">{Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[color:var(--accent-teal)] text-[color:var(--accent-teal)]" />)}</div>
              <p className="mt-3 text-foreground/85">"{r.text}"</p>
              <div className="mt-4 text-sm font-semibold">{r.name}<span className="text-muted-foreground font-normal"> · {r.city}</span></div>
            </div>
          ))}
        </div>
      </Section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
    </Layout>
  );
}
