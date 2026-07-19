import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions | One Direction Forward" },
      { name: "description", content: "Answers about DOT SAP evaluations, DUI services, counseling, drug testing, appointments, and confidentiality." },
      { property: "og:title", content: "FAQ" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question", name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Is my visit confidential?", a: "Yes. Confidentiality is central to our practice and protected under applicable law." },
  { q: "Does the SAP decide if I get hired back?", a: "No. A SAP does not control an employer's hiring decision. The SAP provides the evaluation and recommendations required under the applicable DOT process." },
  { q: "Do you provide DUI evaluations for court?", a: "Yes, we provide DUI evaluations and clear, professional documentation of services completed." },
  { q: "Will you guarantee restoration of my driver's license?", a: "No. Decisions about your driving privileges are made by the Illinois Secretary of State." },
  { q: "Do you offer drug testing for employers?", a: "Yes — DOT and non-DOT programs, including pre-employment, random, post-accident, reasonable suspicion, return-to-duty, and follow-up." },
  { q: "How do I schedule?", a: "Call 708-300-6977 during business hours, or submit the appointment form on our Contact page." },
  { q: "What should I bring to my appointment?", a: "A photo ID and any court, employer, or referral paperwork related to your visit." },
  { q: "Do you accept insurance?", a: "Coverage varies by service. Please call the office to discuss options." },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers, plainly stated."
        intro="If you don't see your question, please call — we're happy to walk you through your options."
      />

      <section className="container-page mt-12 max-w-3xl">
        <ul className="space-y-4">
          {faqs.map((f, i) => (
            <li key={i} className="card-soft !p-0">
              <details className="group">
                <summary className="list-none cursor-pointer p-6 flex items-start justify-between gap-4">
                  <span className="font-semibold text-[color:var(--navy)] text-lg">{f.q}</span>
                  <span aria-hidden className="mt-1 h-7 w-7 grid place-items-center rounded-full bg-[color:var(--aqua)] text-[color:var(--teal)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-6 -mt-2 text-[color:var(--muted-foreground)] leading-relaxed">{f.a}</div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <AppointmentCTA />
    </>
  );
}
