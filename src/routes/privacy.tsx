import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | One Direction Forward Inc." },
      { name: "description", content: "How One Direction Forward Inc. collects, uses, and protects your information." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="This page explains how information you share with One Direction Forward Inc. is handled." />
      <section className="container-page mt-10 max-w-3xl prose prose-slate">
        <div className="card-soft space-y-5 text-[color:var(--ink)] leading-relaxed">
          <p>We respect your privacy. Information you provide through our website, phone, or in-person visits is used to respond to your request and provide clinical services. We do not sell your information.</p>
          <p>Clinical records are maintained in accordance with applicable state and federal law. Our website may use standard analytics to understand traffic patterns. This is a general privacy statement; contact the office for the notice-of-privacy-practices governing clinical services.</p>
          <p>For questions about this policy, please contact us.</p>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
