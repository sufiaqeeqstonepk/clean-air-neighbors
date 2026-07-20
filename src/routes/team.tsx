import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | Greensboro Mold Removal Company" },
      { name: "description", content: "Certified mold inspectors and remediation technicians serving Greensboro, NC and the Triad." },
      { property: "og:title", content: "Meet the Team" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: Team,
});

const team = [
  { name: "Daniel Rivera", role: "Owner & Lead Remediator", yrs: 15, certs: "IICRC AMRT, WRT", bio: "Daniel started the company in 2012 after years of restoration work across North Carolina. He still runs the crew on larger jobs." },
  { name: "Marcus Bell", role: "Senior Mold Inspector", yrs: 11, certs: "IICRC AMRT, ACAC CMI", bio: "Marcus handles most inspections and moisture assessments. He also trains new techs on documentation." },
  { name: "Ashley Cole", role: "Project Manager", yrs: 8, certs: "IICRC WRT, ASD", bio: "Ashley coordinates schedules, insurance paperwork, and customer updates from start to finish." },
  { name: "Jorge Ramirez", role: "Remediation Technician", yrs: 6, certs: "IICRC AMRT", bio: "Jorge leads containment setup and HEPA cleaning on residential jobs." },
  { name: "Sarah Nguyen", role: "Customer Care Lead", yrs: 5, certs: "OSHA 10", bio: "Sarah is the person who answers the phone. She books your visit and follows up after the job." },
  { name: "Tom Fields", role: "Water Damage Technician", yrs: 9, certs: "IICRC WRT, ASD", bio: "Tom handles emergency water extraction and structural drying." },
];

function Team() {
  return (
    <Layout>
      <PageHeader eyebrow="Team" title="Meet the people doing the work" subtitle="Local crews with real training. When you call, one of these people is who shows up." />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(t => (
            <div key={t.name} className="rounded-lg border bg-card p-6">
              <img src={founder} alt={`Photo of ${t.name}`} width={400} height={400} loading="lazy" className="mb-4 h-40 w-full rounded-md object-cover" />
              <h3 className="text-lg">{t.name}</h3>
              <p className="text-sm font-medium text-brand">{t.role}</p>
              <p className="mt-2 text-xs text-muted-foreground">{t.yrs} years experience · {t.certs}</p>
              <p className="mt-3 text-sm text-foreground/80">{t.bio}</p>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
