import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ArrowRight, Phone, ClipboardCheck, GraduationCap, RotateCcw, Repeat } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/dot-sap")({
  head: () => ({
    meta: [
      { title: "DOT SAP Services — Return-to-Duty Evaluations | One Direction Forward" },
      { name: "description", content: "Qualified Substance Abuse Professional (SAP) evaluations, treatment recommendations, follow-up, and return-to-duty guidance for FMCSA, FAA, FRA, FTA, PHMSA, and USCG." },
      { property: "og:title", content: "DOT SAP Services" },
      { property: "og:description", content: "Confidential, professional guidance through the DOT SAP evaluation and return-to-duty process." },
      { property: "og:url", content: "/dot-sap" },
    ],
    links: [{ rel: "canonical", href: "/dot-sap" }],
  }),
  component: DotSap,
});

const steps = [
  { icon: ClipboardCheck, t: "Initial SAP evaluation", d: "A confidential clinical evaluation that meets DOT requirements." },
  { icon: GraduationCap, t: "Education & treatment recommendations", d: "A written recommendation tailored to your situation." },
  { icon: RotateCcw, t: "Follow-up evaluation", d: "Verification that recommended education or treatment has been completed." },
  { icon: ShieldCheck, t: "Return-to-duty guidance", d: "Clear next steps aligned to the applicable DOT process." },
  { icon: Repeat, t: "Follow-up testing plan", d: "A directed testing plan lasting at least 12 months, up to 60 months." },
];

const agencies = ["FMCSA", "FAA", "FRA", "FTA", "PHMSA", "USCG"];

function DotSap() {
  return (
    <>
      <PageHero
        eyebrow="DOT SAP Program"
        title="Return to duty with clear, professional guidance."
        intro="A DOT-qualified Substance Abuse Professional (SAP) provides the evaluation and recommendations required under the applicable DOT process."
      >
        <Link to="/contact" className="btn-primary">Start the SAP process <ArrowRight className="h-4 w-4" /></Link>
        <a href={site.phoneHref} className="btn-outline"><Phone className="h-4 w-4" /> Call {site.phone}</a>
      </PageHero>

      <section className="container-page mt-16">
        <SectionHeading eyebrow="The process" title="What to expect, step by step" />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="card-soft">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--aqua)] text-[color:var(--teal)]"><s.icon className="h-5 w-5" /></span>
                <span className="font-display text-2xl text-[color:var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-4 text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Agencies we serve" title="Evaluations for regulated safety-sensitive roles" />
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {agencies.map(a => (
            <div key={a} className="rounded-2xl bg-white border border-[color:var(--border)] py-6 text-center shadow-[var(--shadow-card)]">
              <p className="font-display text-2xl text-[color:var(--navy)]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page mt-20">
        <SectionHeading eyebrow="Common question" title="Does the SAP decide if I get hired back?" />
        <div className="mt-6 card-soft max-w-3xl">
          <p className="text-[color:var(--muted-foreground)] text-lg leading-relaxed">
            No. A SAP does not control an employer's hiring decision. The SAP provides the evaluation and recommendations required under the applicable DOT process. Employer decisions are made by the employer.
          </p>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
