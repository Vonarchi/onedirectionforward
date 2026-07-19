import { createFileRoute } from "@tanstack/react-router";
import { TestTube2, Briefcase, Shuffle, AlertTriangle, Eye, RotateCcw, Repeat, ShieldCheck, Pencil } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/drug-testing")({
  head: () => ({
    meta: [
      { title: "Drug & Alcohol Testing (DOT & Non-DOT) | One Direction Forward" },
      { name: "description", content: "DOT and non-DOT drug and alcohol testing: pre-employment, random, post-accident, reasonable suspicion, return-to-duty, and follow-up." },
      { property: "og:title", content: "Drug & Alcohol Testing" },
      { property: "og:url", content: "/drug-testing" },
    ],
    links: [{ rel: "canonical", href: "/drug-testing" }],
  }),
  component: Testing,
});

const items = [
  { icon: ShieldCheck, t: "DOT testing", d: "Federally regulated testing for safety-sensitive employees." },
  { icon: TestTube2, t: "Non-DOT testing", d: "Employer-directed testing outside DOT regulations." },
  { icon: Briefcase, t: "Pre-employment", d: "Testing prior to a candidate's start date." },
  { icon: Shuffle, t: "Random", d: "Random-selection testing consistent with employer policy." },
  { icon: AlertTriangle, t: "Post-accident", d: "Testing following a qualifying incident." },
  { icon: Eye, t: "Reasonable suspicion", d: "Testing directed by trained supervisor observation." },
  { icon: RotateCcw, t: "Return-to-duty", d: "Directed testing before an employee resumes duties." },
  { icon: Repeat, t: "Follow-up", d: "Ongoing testing per SAP or employer plan." },
];

function Testing() {
  return (
    <>
      <PageHero
        eyebrow="Drug & Alcohol Testing"
        title="Reliable DOT and non-DOT testing services."
        intro="Confidential collections and coordination for employers, safety-sensitive workers, and individuals."
      />

      <section className="container-page mt-16">
        <SectionHeading eyebrow="Services" title="Testing programs we support" />
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)] flex items-center gap-2"><Pencil className="h-4 w-4" /> Individual testing services below are editable content — confirm with the office before publication.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(i => (
            <div key={i.t} data-editable className="card-soft">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--aqua)] text-[color:var(--teal)]"><i.icon className="h-5 w-5" /></span>
              <h3 className="mt-4 text-lg">{i.t}</h3>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      <AppointmentCTA title="Set up testing services today." body="We work with individuals and employers to establish clean, reliable testing programs." />
    </>
  );
}
