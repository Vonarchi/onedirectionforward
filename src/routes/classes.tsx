import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Building2, HeartPulse } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import classesImg from "@/assets/classes.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Classes & Professional Training | One Direction Forward" },
      { name: "description", content: "Group education, DUI risk-education classes, professional trainings, and workshops for organizations and the community." },
      { property: "og:title", content: "Classes & Professional Training" },
      { property: "og:url", content: "/classes" },
    ],
    links: [{ rel: "canonical", href: "/classes" }],
  }),
  component: Classes,
});

const tracks = [
  { icon: GraduationCap, t: "DUI risk-education classes", d: "Structured curriculum focused on decision-making and risk." },
  { icon: Users, t: "Group education & workshops", d: "Small-group formats built for engagement and integration." },
  { icon: Building2, t: "Employer & organizational training", d: "Custom sessions on substance use, wellness, and safety-sensitive policy." },
  { icon: HeartPulse, t: "Community workshops", d: "Prevention, recovery, and mental-health topics delivered where people live." },
];

function Classes() {
  return (
    <>
      <PageHero
        eyebrow="Classes & Training"
        title="Practical learning for individuals, employers, and communities."
        intro="From court-related DUI risk education to workplace and community trainings, our programs are built to be useful and human."
      />

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <img src={classesImg} alt="Adult professional workshop in progress" loading="lazy" width={1200} height={900} className="rounded-[1.75rem] w-full h-[320px] object-cover shadow-[var(--shadow-lift)] order-2 lg:order-1" />
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="Program tracks" title="What we offer" />
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {tracks.map(t => (
              <li key={t.t} className="card-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--aqua)] text-[color:var(--teal)]"><t.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 text-lg">{t.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{t.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <AppointmentCTA title="Bring a training to your team or community." body="We tailor content to your audience, from small teams to community-wide events." />
    </>
  );
}
