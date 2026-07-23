import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { getCanonicalUrl } from "@/lib/canonical";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Greensboro Mold Removal Company" },
      { name: "description", content: "Locally owned mold inspection and remediation in Greensboro, NC since 2012. Licensed, insured, and IICRC certified." },
      { property: "og:title", content: "About Greensboro Mold Removal Company" },
      { property: "og:url", content: getCanonicalUrl("/about") },
    ],
    links: [{ rel: "canonical", href: getCanonicalUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHeader eyebrow="About Us" title="A local mold company you can actually get on the phone" subtitle="We started in Greensboro in 2012 with one truck and a simple idea: do the job right and stand behind it." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <img src={founder} alt="Owner of Greensboro Mold Removal Company in front of a service van" width={900} height={900} loading="lazy" className="rounded-xl w-full h-auto" />
          <div className="space-y-5 text-foreground/80">
            <h2>Who we are</h2>
            <p>Greensboro Mold Removal Company is a family owned business based on South Eugene Street in downtown Greensboro. Our crews live here, our kids go to school here, and we have been doing this work for over a decade.</p>
            <p>Most of our work comes from referrals. That only happens when you take care of people, so we do. We show up when we say we will, we explain what we find in plain English, and we give a written warranty on the work.</p>
            <h2>What we believe</h2>
            <p>Mold is not a scare tactic. It is a real problem with a clear cause, and the fix is almost always about controlling water. We would rather tell you it is a small job than sell you something you don't need.</p>
            <h2>What sets us apart</h2>
            <p>We follow the IICRC S520 standard on every job, we send samples to a third party lab when testing is needed, and we back our work with a written warranty. We also answer the phone at 7 am on a Saturday if you need us.</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
