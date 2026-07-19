import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, FileText, Users, User, BookOpen, Car, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import { site } from "@/lib/site";

export const Route = createFileRoute("/dui")({
  head: () => ({
    meta: [
      { title: "DUI Services — Evaluations & Risk Education | One Direction Forward" },
      { name: "description", content: "DUI evaluations, risk-education classes, individual counseling, court-related documentation, and driver's-license reinstatement support in Matteson, IL." },
      { property: "og:title", content: "DUI Services" },
      { property: "og:description", content: "Professional guidance for your next step." },
      { property: "og:url", content: "/dui" },
    ],
    links: [{ rel: "canonical", href: "/dui" }],
  }),
  component: Dui,
});

const items = [
  { icon: Scale, title: "DUI evaluations", desc: "Comprehensive clinical evaluations for court and administrative use." },
  { icon: BookOpen, title: "DUI risk education", desc: "Structured education programs meeting Illinois standards." },
  { icon: Users, title: "Group classes", desc: "Small-group learning in a respectful, focused setting." },
  { icon: User, title: "Individual counseling", desc: "One-on-one counseling tailored to your circumstances." },
  { icon: FileText, title: "Court-related documentation", desc: "Clear, professional documentation of services completed." },
  { icon: Car, title: "License-reinstatement support", desc: "Guidance and documentation to support your reinstatement process." },
];

function Dui() {
  return (
    <>
      <PageHero
        eyebrow="DUI Services"
        title="Professional Guidance for Your Next Step"
        intro="Confidential evaluations, education, and counseling delivered with respect. We provide documentation of services completed; decisions about your driving privileges are made by the Illinois Secretary of State."
      >
        <Link to="/contact" className="btn-primary">Request an evaluation</Link>
        <a href={site.phoneHref} className="btn-outline"><Phone className="h-4 w-4" /> Call {site.phone}</a>
      </PageHero>

      <section className="container-page mt-16">
        <SectionHeading eyebrow="What we offer" title="Services for every step of the process" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(i => <ServiceCard key={i.title} {...i} />)}
        </div>
      </section>

      <section className="container-page mt-16">
        <div className="card-soft max-w-3xl text-sm text-[color:var(--muted-foreground)] leading-relaxed">
          One Direction Forward Inc. does not promise or guarantee restoration of a driver's license. We provide the professional evaluation, education, counseling, and documentation used in your process.
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
