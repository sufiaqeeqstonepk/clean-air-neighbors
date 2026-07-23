import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { getCanonicalUrl } from "@/lib/canonical";
import { business } from "@/lib/business";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Greensboro Mold Removal Company" },
      { name: "description", content: "Call (743) 373-1171 or send a message for a free mold inspection quote in Greensboro, NC and the Triad." },
      { property: "og:title", content: "Contact Greensboro Mold Removal Company" },
      { property: "og:url", content: getCanonicalUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/contact") }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHeader eyebrow="Contact" title="Get a free quote or ask a question" subtitle="Call us, or send a quick message and we will get back to you the same business day." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-lg border p-5">
              <a href={`tel:${business.phoneRaw}`} className="flex items-center gap-3 text-lg font-semibold text-brand"><Phone className="h-5 w-5" /> {business.phoneDisplay}</a>
              <p className="mt-1 text-sm text-muted-foreground">24/7 for emergencies</p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="flex items-center gap-3 font-semibold"><Mail className="h-5 w-5 text-brand" /> {business.email}</div>
              <p className="mt-1 text-sm text-muted-foreground">Replies within one business day</p>
            </div>
            <div className="rounded-lg border p-5">
              <div className="flex items-start gap-3"><MapPin className="h-5 w-5 text-brand mt-0.5" /><div><div className="font-semibold">{business.address.street}</div><div>{business.address.city}, {business.address.state} {business.address.zip}</div></div></div>
            </div>
            <div className="rounded-lg border p-5">
              <div className="flex items-start gap-3"><Clock className="h-5 w-5 text-brand mt-0.5" /><div><div className="font-semibold">Hours</div><div className="text-sm text-muted-foreground">{business.hours}</div></div></div>
            </div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="rounded-xl border bg-card p-6 space-y-4">
            {sent ? (
              <div className="text-center py-8">
                <h3 className="text-brand">Thanks, message received.</h3>
                <p className="mt-2 text-muted-foreground">We will call you back the same business day.</p>
              </div>
            ) : (<>
              <div><label className="text-sm font-medium">Name</label><input required className="mt-1 w-full rounded-md border px-3 py-2" /></div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="text-sm font-medium">Phone</label><input required type="tel" className="mt-1 w-full rounded-md border px-3 py-2" /></div>
                <div><label className="text-sm font-medium">Email</label><input type="email" className="mt-1 w-full rounded-md border px-3 py-2" /></div>
              </div>
              <div><label className="text-sm font-medium">Address or city</label><input className="mt-1 w-full rounded-md border px-3 py-2" /></div>
              <div><label className="text-sm font-medium">How can we help?</label><textarea required rows={5} className="mt-1 w-full rounded-md border px-3 py-2" /></div>
              <button type="submit" className="w-full rounded-md bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark">Send Message</button>
              <p className="text-xs text-muted-foreground">We never share your info. Standard message rates apply.</p>
            </>)}
          </form>
        </div>
      </Section>
    </Layout>
  );
}