import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  Stethoscope,
  Scale,
  Users,
  Flame,
  Brain,
  TestTube2,
  MessageCircle,
  GraduationCap,
} from "lucide-react";
import { ServiceCard } from "@/components/site/ServiceCard";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PathwayMotif } from "@/components/site/PageHero";
import { site } from "@/lib/site";
import communityImg from "@/assets/community.jpg";
import mediaImg from "@/assets/media.jpg";
import driverImg from "@/assets/driver.jpg";
import classesImg from "@/assets/classes.jpg";
import counselingImg from "@/assets/counseling.jpg";
import testingImg from "@/assets/testing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "One Direction Forward Inc. — Confidential SAP, DUI & Counseling" },
      {
        name: "description",
        content:
          "Substance-use evaluations, DOT-qualified SAP services, DUI education, behavioral-health counseling, anger management, and professional training in Matteson, IL.",
      },
      { property: "og:title", content: "One Direction Forward Inc." },
      {
        property: "og:description",
        content: "Confidential Support. Professional Guidance. A Clear Way Forward.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/one-direction-forward-banner.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/one-direction-forward-banner.png" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: ShieldCheck,
    title: "DOT SAP Evaluations",
    desc: "Qualified Substance Abuse Professional services for safety-sensitive workers.",
    to: "/dot-sap",
  },
  {
    icon: Scale,
    title: "DUI Evaluations & Education",
    desc: "Court-related evaluations and structured DUI risk-education programs.",
    to: "/dui",
  },
  {
    icon: HeartHandshake,
    title: "Substance-Use Counseling",
    desc: "Confidential individual and group support for recovery.",
    to: "/counseling",
  },
  {
    icon: Flame,
    title: "Anger Management",
    desc: "Evidence-informed skills for handling difficult moments.",
    to: "/counseling",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    desc: "Compassionate care for the whole person and family.",
    to: "/counseling",
  },
  {
    icon: TestTube2,
    title: "DOT & Non-DOT Drug Testing",
    desc: "Pre-employment, random, post-accident, return-to-duty, and follow-up.",
    to: "/drug-testing",
  },
  {
    icon: MessageCircle,
    title: "Group & Individual Counseling",
    desc: "Small, supportive settings led by qualified professionals.",
    to: "/counseling",
  },
  {
    icon: GraduationCap,
    title: "Professional Workshops",
    desc: "Continuing education and community-focused trainings.",
    to: "/classes",
  },
];

const impact = [
  { img: communityImg, title: "Educational presentations" },
  { img: mediaImg, title: "Radio & media appearances" },
  { img: testingImg, title: "Health & prevention events" },
  { img: classesImg, title: "Professional workshops" },
  { img: counselingImg, title: "Community outreach" },
];

function Home() {
  return (
    <>
      {/* Homepage Banner */}
      <section className="bg-[color:var(--navy)]">
        <h1 className="sr-only">
          One Direction Forward Inc. provides compassionate professional services for evaluations,
          DUI support, counseling, drug testing, and classes.
        </h1>
        <div className="relative aspect-[1024/500] overflow-hidden">
          <img
            src="/one-direction-forward-banner.png"
            alt="One Direction Forward Inc. homepage banner with services for DOT SAP, DUI, counseling, drug testing, and classes."
            width={1024}
            height={582}
            className="absolute inset-x-0 top-0 block w-full -translate-y-[11%]"
          />
        </div>
      </section>

      {/* DOT SAP Cinematic Callout */}
      <section className="container-page mt-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--navy)] text-white grain shadow-[0_40px_80px_-30px_rgba(20,59,82,0.55)] grid md:grid-cols-[1.05fr_1fr] items-stretch">
          <div className="relative p-8 md:p-14 z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-bold text-[color:var(--gold)]">
                DOT SAP Program
              </span>
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl text-white leading-[1.05]">
              Removed from a safety-sensitive role after a DOT{" "}
              <span className="italic font-light text-[color:var(--aqua)]">violation?</span>
            </h2>
            <p className="mt-4 text-white/75 text-lg max-w-md">
              Begin the SAP evaluation and return-to-duty process with professional, confidential
              guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dot-sap" className="btn-gold">
                Start the SAP Process <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white hover:text-[color:var(--navy)] transition min-h-[48px]"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-full">
            <img
              src={driverImg}
              alt="A commercial driver at the start of the return-to-duty process"
              loading="lazy"
              width={1200}
              height={900}
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-[color:var(--navy)] via-[color:var(--navy)]/60 to-transparent md:from-[color:var(--navy)] md:via-[color:var(--navy)]/40"
            />
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-page mt-24">
        <SectionHeading eyebrow="How it works" title="A clear three-step path" center />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Contact Us",
              d: "Speak confidentially with our office and tell us which service you need.",
            },
            {
              n: "02",
              t: "Complete Your Evaluation",
              d: "Meet with a qualified professional and receive clear recommendations.",
            },
            {
              n: "03",
              t: "Move Forward",
              d: "Complete the required steps and receive documentation or continued support.",
            },
          ].map((s, i) => (
            <li key={s.n} className="card-soft relative">
              <span className="font-display text-5xl text-[color:var(--gold)]">{s.n}</span>
              <h3 className="mt-3 text-xl">{s.t}</h3>
              <p className="mt-2 text-[color:var(--muted-foreground)]">{s.d}</p>
              {i < 2 && (
                <ArrowRight
                  aria-hidden
                  className="hidden md:block absolute -right-3 top-1/2 h-6 w-6 text-[color:var(--teal)]"
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* About Kenneth */}
      <section className="container-page mt-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[color:var(--aqua)] -z-10" />
            <img
              src="/kenneth-simpson.png"
              alt="Portrait of Kenneth Simpson Sr., LCSW, SAP, CADC, CAMS-II"
              loading="lazy"
              width={1347}
              height={1168}
              className="rounded-[1.75rem] w-full object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
          <div>
            <p className="eyebrow">About the provider</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              Kenneth Simpson Sr., LCSW, SAP, CADC, CAMS-II
            </h2>
            <p className="mt-4 text-[color:var(--muted-foreground)] text-lg leading-relaxed">
              Kenneth is an experienced licensed clinical social worker and behavioral health
              professional serving individuals, families, employers, and the broader community. His
              practice combines clinical expertise with a deeply nonjudgmental approach — the kind
              of care people return to and refer.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
              {[
                "Licensed Clinical Social Worker",
                "DOT-qualified SAP",
                "Certified Alcohol & Drug Counselor",
                "Certified Anger Management Specialist II",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <ShieldCheck className="h-4 w-4 text-[color:var(--teal)] mt-0.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/about" className="btn-outline">
                Read full bio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="container-page mt-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeading
            eyebrow="Community impact"
            title="Present where people are"
            intro="Presentations, workshops, media appearances, and outreach that meet the community where it lives."
          />
          <Link to="/community-impact" className="btn-outline">
            Explore gallery
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {impact.map((c) => (
            <figure key={c.title} className="card-soft !p-0 overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 flex items-center justify-between">
                <span className="font-semibold text-[color:var(--navy)]">{c.title}</span>
                <ArrowRight className="h-4 w-4 text-[color:var(--teal)]" />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
