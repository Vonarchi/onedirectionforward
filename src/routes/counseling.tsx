import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake, User, Users, Flame, Brain, Home, GraduationCap } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceCard } from "@/components/site/ServiceCard";
import counselingImg from "@/assets/counseling.jpg";

export const Route = createFileRoute("/counseling")({
  head: () => ({
    meta: [
      { title: "Counseling & Behavioral Health | One Direction Forward" },
      { name: "description", content: "Substance-use counseling, anger management, individual and group therapy, behavioral-health and family support in a confidential, nonjudgmental setting." },
      { property: "og:title", content: "Counseling & Behavioral Health" },
      { property: "og:url", content: "/counseling" },
    ],
    links: [{ rel: "canonical", href: "/counseling" }],
  }),
  component: Counseling,
});

const items = [
  { icon: HeartHandshake, title: "Substance-use counseling", desc: "Confidential support for exploring change and sustaining recovery." },
  { icon: User, title: "Individual counseling", desc: "One-on-one care tailored to your goals and pace." },
  { icon: Users, title: "Group counseling", desc: "Small groups offering shared experience and structured support." },
  { icon: Flame, title: "Anger management", desc: "Evidence-informed skills for difficult moments and lasting change." },
  { icon: Brain, title: "Behavioral-health support", desc: "Compassionate care for anxiety, mood, life stress, and adjustment." },
  { icon: Home, title: "Family support", desc: "Support for the people who love someone in recovery." },
  { icon: GraduationCap, title: "Prevention & recovery education", desc: "Practical information for individuals, families, and organizations." },
];

function Counseling() {
  return (
    <>
      <PageHero
        eyebrow="Counseling & Behavioral Health"
        title="Care that feels human. Support that keeps moving."
        intro="Confidential, licensed care for individuals and families — delivered with warmth and clinical rigor."
      />

      <section className="container-page mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <div>
          <SectionHeading eyebrow="Our approach" title="A calm room, a clear plan, a compassionate partner." intro="We meet people where they are. Every plan is tailored — never one-size-fits-all — and always confidential." />
        </div>
        <img src={counselingImg} alt="Two hands meeting supportively" loading="lazy" width={1200} height={900} className="rounded-[1.75rem] w-full h-[320px] object-cover shadow-[var(--shadow-lift)]" />
      </section>

      <section className="container-page mt-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(i => <ServiceCard key={i.title} {...i} />)}
        </div>
      </section>

      <AppointmentCTA />
    </>
  );
}
