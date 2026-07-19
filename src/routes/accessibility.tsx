import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility Statement | One Direction Forward Inc." },
      { name: "description", content: "Our commitment to a welcoming, accessible experience for every visitor." },
      { property: "og:url", content: "/accessibility" },
    ],
    links: [{ rel: "canonical", href: "/accessibility" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Accessibility Statement" intro="We are committed to a welcoming, accessible experience for every visitor." />
      <section className="container-page mt-10 max-w-3xl">
        <div className="card-soft space-y-5 text-[color:var(--ink)] leading-relaxed">
          <p>We aim to conform to WCAG 2.1 AA. Our site is built with semantic HTML, keyboard-accessible controls, sufficient color contrast, clear focus states, and responsive layouts for mobile devices. Motion is restrained and respects the operating-system reduced-motion setting.</p>
          <p>If you encounter a barrier or have a suggestion, please call {site.phone} or email {site.email}. We take accessibility feedback seriously and will work to improve the experience.</p>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
