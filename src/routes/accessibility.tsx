import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHeader, Section } from "@/components/site/PageHeader";
import { business } from "@/lib/business";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | Greensboro Mold Removal Company" },
      { name: "description", content: "Our commitment to making the Greensboro Mold Removal Company website and services usable for everyone." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Legal" title="Accessibility Statement" subtitle="Last updated: January 2026" />
      <Section>
        <div className="max-w-3xl space-y-5 text-foreground/85">
          <p>
            {business.name} is committed to making sure everyone can use our website and reach us for help. We believe that people of every ability should be able to learn about our services, request a quote, and get in touch with our team without barriers.
          </p>

          <h2 className="text-xl">Our standard</h2>
          <p>
            We work to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines are the international standard for making websites easier to use for people with vision, hearing, motor, and cognitive differences.
          </p>

          <h2 className="text-xl">Features we build in</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Semantic HTML structure so screen readers can move through pages in a logical order.</li>
            <li>Descriptive alternative text on informative images.</li>
            <li>Keyboard-friendly navigation so you can use the site without a mouse.</li>
            <li>Color combinations that meet the minimum contrast ratios for readability.</li>
            <li>Text that can be resized in your browser without breaking the layout.</li>
            <li>Clear headings, labels, and link text so it is easy to understand where each link goes.</li>
            <li>Forms with visible labels and helpful error messages.</li>
            <li>A responsive design that works on phones, tablets, and desktop computers.</li>
          </ul>

          <h2 className="text-xl">Ongoing work</h2>
          <p>
            Accessibility is an ongoing effort, not a one-time project. We test new pages before publishing, review the site regularly, and work with our developers to fix any issues we find. We also welcome feedback from real users, which is often the fastest way to spot a problem.
          </p>

          <h2 className="text-xl">Third-party content</h2>
          <p>
            Some parts of our site rely on outside services, such as embedded maps or review widgets. We choose vendors who take accessibility seriously, but we cannot fully control the code they provide. If a third-party feature is blocking you, please let us know and we will work with the vendor or offer another way to get the same information.
          </p>

          <h2 className="text-xl">Need help using the site?</h2>
          <p>
            If any part of our website is hard to use, we want to help you directly. You do not need to fight with the website to get service.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Call us at {business.phoneDisplay} during office hours or 24/7 for emergencies.</li>
            <li>Email us at {business.email} with your name, phone number, and a description of the problem.</li>
            <li>Write to us at {business.address.street}, {business.address.city}, {business.address.state} {business.address.zip}.</li>
          </ul>

          <h2 className="text-xl">Feedback</h2>
          <p>
            Please tell us what page you were on, what device or browser you used, and what happened. Your feedback goes to a real person on our team, and we do our best to reply within two business days.
          </p>
        </div>
      </Section>
    </Layout>
  );
}
