import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Mic, Users, BookOpen } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kenneth Simpson Sr., LCSW, SAP, CADC, CAMS-II" },
      {
        name: "description",
        content:
          "Meet Kenneth Simpson Sr., an experienced licensed clinical social worker, DOT-qualified SAP, CADC, and CAMS-II serving individuals, families, employers, and the community.",
      },
      { property: "og:title", content: "About One Direction Forward" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Compassionate care. Clinical rigor. A steady partner for the road ahead."
        intro="One Direction Forward Inc. was built to help people move productively toward a better tomorrow — with confidentiality, professionalism, and warmth at the core of every visit."
      />

      <section className="container-page mt-16 grid gap-12 md:grid-cols-[1fr_1.4fr] items-start">
        <div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--aqua)] -z-10" />
            <img
              src="/kenneth-simpson.png"
              alt="Kenneth Simpson Sr., LCSW, SAP, CADC, CAMS-II"
              loading="lazy"
              width={1347}
              height={1168}
              className="rounded-[1.75rem] w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </div>
        <div>
          <p className="eyebrow">Provider</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Kenneth Simpson Sr.</h2>
          <p className="mt-1 text-[color:var(--teal)] font-medium">LCSW · SAP · CADC · CAMS-II</p>

          <section className="mt-8">
            <h3 className="text-xl">Care philosophy</h3>
            <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
              People do better when they feel respected, understood, and given an honest path
              forward. Our practice combines evidence-based methods with a listening, nonjudgmental
              style — the kind of care that helps clients stay engaged long enough to see real
              change.
            </p>
          </section>

          <section className="mt-8">
            <h3 className="text-xl">Professional background</h3>
            <p className="mt-3 text-[color:var(--muted-foreground)] leading-relaxed">
              Kenneth is an experienced licensed clinical social worker and behavioral health
              professional. He serves individuals and families, and partners with employers and
              community organizations on prevention, recovery, and workforce-support programs.
            </p>
          </section>

          <section className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "Credentials", d: "LCSW, DOT SAP, CADC, CAMS-II" },
              {
                icon: Users,
                t: "Community involvement",
                d: "Outreach, presentations, and health events",
              },
              { icon: Mic, t: "Media & education", d: "Radio appearances and public education" },
              {
                icon: BookOpen,
                t: "Ongoing learning",
                d: "Continuing education across specialties",
              },
            ].map((i) => (
              <div key={i.t} className="card-soft">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[color:var(--aqua)] text-[color:var(--teal)]">
                  <i.icon className="h-5 w-5" />
                </span>
                <h4 className="mt-3 font-semibold text-[color:var(--navy)]">{i.t}</h4>
                <p className="text-sm text-[color:var(--muted-foreground)] mt-1">{i.d}</p>
              </div>
            ))}
          </section>
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
