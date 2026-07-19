import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | One Direction Forward Inc." },
      { name: "description", content: "Terms governing use of the One Direction Forward Inc. website." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" intro="These terms govern your use of this website." />
      <section className="container-page mt-10 max-w-3xl">
        <div className="card-soft space-y-5 text-[color:var(--ink)] leading-relaxed">
          <p>The content on this website is provided for general informational purposes and is not a substitute for professional advice, diagnosis, or treatment. No provider–patient relationship is created by visiting this site.</p>
          <p>One Direction Forward Inc. does not promise or guarantee restoration of driving privileges, employment outcomes, or other legal or regulatory results.</p>
          <p>By using this website you agree to use it lawfully and to respect the intellectual property rights of the site's content.</p>
        </div>
      </section>
      <div className="h-24" />
    </>
  );
}
