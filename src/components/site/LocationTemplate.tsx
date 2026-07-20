import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Star } from "lucide-react";
import { business, locations } from "@/lib/business";
import type { LocationData } from "@/lib/content";

export type LocationTemplateProps = {
  slug: string;
  city: string;
  state: string;
} & LocationData;

const LOCATION_SERVICES: { name: string; desc: string }[] = [
  { name: "Mold Inspection", desc: "Full walk-through with moisture meters and thermal imaging." },
  { name: "Mold Testing", desc: "Air and surface samples sent to an accredited third-party lab." },
  { name: "Mold Removal", desc: "Safe removal of visible mold from any surface in the home." },
  { name: "Mold Remediation", desc: "Full IICRC S520 process from containment to clearance." },
  { name: "Black Mold Removal", desc: "Careful handling of Stachybotrys and other toxic molds." },
  { name: "Attic Mold Removal", desc: "Fix ventilation and treat the roof sheathing." },
  { name: "Basement Mold Removal", desc: "Address humidity, groundwater, and damaged drywall." },
  { name: "Crawl Space Mold Removal", desc: "Vapor barriers, joist treatment, and dehumidification." },
  { name: "Bathroom Mold Removal", desc: "Repair grout, drywall, and fan venting at the source." },
  { name: "Kitchen Mold Removal", desc: "Remove mold behind cabinets, sinks, and appliances." },
  { name: "Air Duct Mold Removal", desc: "Clean duct interiors so spores stop spreading through the home." },
  { name: "HVAC Mold Cleaning", desc: "Coil, drain pan, and blower cleaning with antimicrobial fog." },
  { name: "Water Damage Restoration", desc: "Extract water and dry the structure before mold starts." },
  { name: "Mold Prevention Treatment", desc: "Protect areas prone to repeat moisture problems." },
  { name: "Mold Odor Removal", desc: "Get rid of the musty smell, not just cover it up." },
  { name: "Mold Air Quality Testing", desc: "Measure indoor spore counts against outdoor baselines." },
  { name: "Post Remediation Verification Testing", desc: "Independent clearance test after the work is done." },
  { name: "Emergency Mold Removal", desc: "Same-day response for active leaks and flooding." },
  { name: "Flood Damage Mold Cleanup", desc: "Full extraction, drying, and mold prevention after floods." },
  { name: "Sewage Cleanup and Mold Removal", desc: "Safe handling of Category 3 contaminated water." },
  { name: "Drywall Mold Removal", desc: "Cut out mold-damaged drywall and replace it clean." },
  { name: "Carpet Mold Removal", desc: "Remove or salvage carpet and pad after water damage." },
  { name: "Wood Mold Treatment", desc: "Sand, HEPA vacuum, and treat framing and subfloor." },
  { name: "Mold Barrier and Containment Setup", desc: "Plastic sheeting and negative air to keep spores contained." },
  { name: "Antimicrobial Treatment", desc: "EPA registered products applied after all mold is removed." },
  { name: "Mold Encapsulation", desc: "Sealed coating for wood that cannot be replaced." },
  { name: "Ceiling Mold Removal", desc: "Fix the leak above, then remove and repaint the ceiling." },
  { name: "Window Sill Mold Removal", desc: "Handle condensation mold on frames and sills." },
  { name: "Garage Mold Removal", desc: "Clean up moisture from concrete floors and shared walls." },
  { name: "Rental Property Mold Removal", desc: "Coordinated cleanup for landlords and tenants." },
  { name: "Commercial Mold Remediation", desc: "Offices, retail, restaurants, and medical facilities." },
  { name: "Residential Mold Remediation", desc: "Single family homes, condos, and townhouses." },
  { name: "New Construction Mold Inspection", desc: "Catch moisture problems before drywall goes up." },
  { name: "Real Estate Mold Inspection", desc: "Pre-purchase and pre-sale inspections with written reports." },
  { name: "Mold Damage Repair", desc: "Drywall, paint, and trim work after remediation." },
  { name: "Vapor Barrier Installation", desc: "Heavy plastic ground cover for crawl spaces." },
  { name: "Dehumidification Services", desc: "Commercial dehumidifiers sized for the space." },
  { name: "Air Scrubbing and Filtration", desc: "HEPA air scrubbers during and after the work." },
  { name: "Mold Clearance Testing", desc: "Final testing so you have written proof it is safe." },
];

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={`tel:${business.phoneRaw}`}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark ${className}`}
    >
      <Phone className="h-4 w-4" /> Call {business.phoneDisplay}
    </a>
  );
}

const TESTIMONIALS = [
  { name: "Jennifer M.", stars: 5, text: "Called on a Saturday morning and had a crew at the house before lunch. Fair price, no surprises, and they explained everything as they worked." },
  { name: "Robert K.", stars: 5, text: "Two other companies tried to sell me work I did not need. These guys came out, showed me exactly what was going on, and only fixed what mattered." },
  { name: "Aisha D.", stars: 5, text: "Bought a home with attic mold on the inspection report. They treated the sheathing, fixed the bath fan venting, and sent a written report I could share." },
  { name: "David P.", stars: 5, text: "Very professional crew. Full containment, wore PPE, and left the house cleaner than they found it. My wife has asthma and had no flare-up." },
  { name: "Maria S.", stars: 5, text: "Encapsulated our crawl space last spring. Humidity in the house dropped and the musty smell is gone. Wish we had done it years ago." },
  { name: "Chris L.", stars: 5, text: "Honest people. When they found extra damage they ate part of the cost instead of billing me. Great communication from start to finish." },
];

const FAQS = [
  { q: "How long does mold removal take in {LOCATION}?", a: "Most home jobs in {LOCATION} take two to five days from start to finish. Small bathroom or closet jobs can be done in a single day. Larger projects with drywall replacement can run one to two weeks. We give you a written timeline before any work starts. Call {PHONE} and we can walk through your situation." },
  { q: "How much does mold removal cost?", a: "Most residential jobs in {LOCATION} run between $500 and $6,000. The price depends on how much material has to come out, how bad the water damage is, and whether we need to work in a tight crawl space. We give a firm written price before we start, so you know the total up front. Call {PHONE} for a free quote." },
  { q: "Is mold in my home a health risk?", a: "Mold can bother anyone, but it hits kids, older adults, and anyone with asthma or allergies the hardest. Common signs include coughing, headaches, itchy eyes, and a stuffy nose that gets better when you leave the house. If you think mold is affecting your family, call {PHONE} today so we can come look." },
  { q: "Will my insurance cover mold removal?", a: "It depends on what caused the mold. Sudden events like a burst pipe or storm damage are usually covered up to a policy limit. Long-term slow leaks are usually not. We document everything with photos and can work directly with your adjuster. Call {PHONE} and we can help figure it out." },
  { q: "What are the signs I have mold?", a: "Watch for a musty smell that will not go away, dark spots on walls or ceilings, warped baseboards, and family members feeling worse indoors. Anywhere water has been sitting for more than a day or two is worth checking. Call {PHONE} to schedule an inspection." },
  { q: "How soon can you come out in {LOCATION}?", a: "For emergencies like flooding or an active leak, we can be there the same day. For a standard inspection in {LOCATION}, we usually book within two to five days depending on the season. Call {PHONE} to lock in a time." },
  { q: "Do I need to leave the house during the work?", a: "In most cases you can stay in the home. We seal off the work area with plastic containment and run negative air, so dust and spores do not spread. If the work is in a main living area, we may recommend staying elsewhere a night or two. Call {PHONE} to talk through your situation." },
  { q: "Do you guarantee your work?", a: "Yes. Every remediation job comes with a written warranty on the area we treated. As long as the water source is fixed, mold cannot come back. If it does, we come back too. Call {PHONE} for details." },
];

export function LocationTemplate(props: LocationTemplateProps) {
  const { slug, city, state, intro, landmarks, climate, neighborhoods, zips, geo, nearby, stats } = props;

  const nearbyLocations = nearby
    .map(s => locations.find(l => l.slug === s))
    .filter((l): l is (typeof locations)[number] => Boolean(l));

  const faqs = FAQS.map(f => ({
    q: f.q.replace(/{LOCATION}/g, city).replace(/{PHONE}/g, business.phoneDisplay),
    a: f.a.replace(/{LOCATION}/g, city).replace(/{PHONE}/g, business.phoneDisplay),
  }));

  const bbox = [geo.lng - 0.08, geo.lat - 0.06, geo.lng + 0.08, geo.lat + 0.06].join("%2C");
  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${geo.lat}%2C${geo.lng}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: business.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
    areaServed: { "@type": "City", name: `${city}, ${state}` },
    url: `/locations/${slug}`,
  };

  const serviceGraph = {
    "@context": "https://schema.org",
    "@graph": LOCATION_SERVICES.slice(0, 12).map(s => ({
      "@type": "Service",
      serviceType: s.name,
      areaServed: { "@type": "City", name: `${city}, ${state}` },
      provider: { "@type": "LocalBusiness", name: business.name, telephone: business.phone },
      description: s.desc,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: TESTIMONIALS.length },
    review: TESTIMONIALS.map(r => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.stars },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
      itemReviewed: { "@type": "LocalBusiness", name: business.name },
    })),
  };

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-brand-light to-background">
        <div className="container-x py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Serving {city}, {state}</p>
          <h1 className="mt-2 max-w-4xl">Best Certified Mold Removal Company in {city}, {state} near me</h1>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{intro}</p>
          <div className="mt-6"><CallButton /></div>
        </div>
      </section>

      {/* Residential + Commercial */}
      <section className="container-x py-14 md:py-20">
        <h2>{city}, {state} Mold Remediation</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">{climate}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h4 className="text-xl font-semibold">Residential Mold Removal Services</h4>
            <p className="mt-3 text-foreground/80">We work on homes, townhouses, condos, and rentals across {city}. Every job starts with finding the water source, then containment, safe removal, and a clean rebuild. You get a written report and a warranty on the work we did.</p>
            <div className="mt-4"><CallButton /></div>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h4 className="text-xl font-semibold">Commercial Mold Removal Services</h4>
            <p className="mt-3 text-foreground/80">For offices, retail, restaurants, and multi-unit buildings in {city}, we work after hours when needed and keep the affected area sealed off so business can keep running. We document everything for property managers and health inspectors.</p>
            <div className="mt-4"><CallButton /></div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t bg-secondary">
        <div className="container-x py-14 md:py-20">
          <h2>Professional Mold Removal Services in {city}, {state}</h2>
          <p className="mt-3 max-w-3xl text-foreground/80">Full mold and moisture services from one local team. Call {business.phoneDisplay} for a free quote on any of these.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATION_SERVICES.map(s => (
              <div key={s.name} className="rounded-lg border bg-card p-5">
                <h3 className="text-base font-semibold text-foreground">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Stat bar */}
          <div className="mt-10 grid gap-4 rounded-lg border bg-card p-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">{stats.services}</div>
              <h5 className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Services Provided</h5>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">{stats.jobs}</div>
              <h5 className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Jobs Completed</h5>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand">{stats.reviews}</div>
              <h5 className="mt-1 text-sm font-semibold uppercase tracking-wide text-muted-foreground">5 Star Reviews Received</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Zip + nearby cities */}
      <section className="container-x py-14 md:py-20">
        <h2>Best Mold Removal Company in {city}, {state}</h2>
        <p className="mt-3 max-w-3xl text-foreground/80">We cover every neighborhood in {city} and the surrounding {state} cities. Here are the local zip codes and cities we work in every week.</p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Popular Zip Codes</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {zips.map(z => (
                <div key={z} className="rounded-md border bg-card px-4 py-3">
                  <h4 className="text-base font-semibold text-foreground">{z}</h4>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Mold Removal Services in North Carolina Cities</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {nearbyLocations.map(l => (
                <li key={l.slug}>
                  <Link
                    to="/locations/$slug"
                    params={{ slug: l.slug }}
                    className="block rounded-md border bg-card px-4 py-3 font-medium text-brand hover:border-brand"
                  >
                    Mold Removal in {l.city}, {l.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t bg-secondary">
        <div className="container-x py-14 md:py-20">
          <h2>Frequently Asked Questions About Mold Removal Services in {city}, {state}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="group rounded-lg border bg-card p-5">
                <summary className="cursor-pointer text-lg font-semibold text-foreground">{f.q}</summary>
                <p className="mt-3 text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x py-14 md:py-20">
        <h2>What Our Clients Say About Us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map(r => (
            <div key={r.name} className="rounded-lg border bg-card p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[color:var(--accent-teal)] text-[color:var(--accent-teal)]" />
                ))}
              </div>
              <p className="mt-3 text-foreground/85">"{r.text}"</p>
              <div className="mt-4 text-sm font-semibold">
                {r.name}
                <span className="font-normal text-muted-foreground"> · {city}, {state}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact + Map */}
      <section className="border-t bg-secondary">
        <div className="container-x py-14 md:py-20">
          <h3 className="text-2xl font-bold">Contact Info</h3>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <a
                href={`tel:${business.phoneRaw}`}
                className="flex items-center justify-center gap-3 rounded-lg bg-brand px-6 py-6 text-2xl font-bold text-brand-foreground hover:bg-brand-dark"
              >
                <Phone className="h-6 w-6" /> Call {business.phoneDisplay}
              </a>
              <div className="flex items-start gap-3 rounded-lg border bg-card p-5">
                <MapPin className="mt-1 h-5 w-5 text-brand" />
                <div>
                  <div className="font-semibold">{business.name}</div>
                  <div className="text-muted-foreground">{business.address.street}</div>
                  <div className="text-muted-foreground">{business.address.city}, {business.address.state} {business.address.zip}</div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-5">
                <div className="font-semibold">Hours</div>
                <div className="text-muted-foreground">{business.hours}</div>
              </div>
              <p className="text-sm text-foreground/80">
                Serving {city} and nearby areas including {nearbyLocations.slice(0, 4).map(l => l.city).join(", ")}. If you are inside {city}, {state} or the surrounding {state} cities, we can help.
              </p>
            </div>
            <div className="overflow-hidden rounded-lg border bg-card">
              <iframe
                title={`Map of ${city}, ${state} service area`}
                src={mapSrc}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand text-brand-foreground">
        <div className="container-x py-14 text-center">
          <h2 className="text-brand-foreground">Ready for straight answers on mold in {city}?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">Call us right now. A local specialist picks up the phone, listens to what is going on, and can book your visit today.</p>
          <div className="mt-6 flex justify-center">
            <a
              href={`tel:${business.phoneRaw}`}
              className="inline-flex items-center gap-3 rounded-md bg-white px-8 py-4 text-xl font-bold text-brand hover:bg-white/90"
            >
              <Phone className="h-5 w-5" /> Call {business.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceGraph) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
    </>
  );
}
