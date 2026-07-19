import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { AppointmentCTA } from "@/components/site/CTA";
import communityImg from "@/assets/community.jpg";
import mediaImg from "@/assets/media.jpg";
import classesImg from "@/assets/classes.jpg";
import counselingImg from "@/assets/counseling.jpg";
import driverImg from "@/assets/driver.jpg";
import testingImg from "@/assets/testing.jpg";

export const Route = createFileRoute("/community-impact")({
  head: () => ({
    meta: [
      { title: "Community Impact | One Direction Forward Inc." },
      { name: "description", content: "Presentations, workshops, radio appearances, health events, and outreach that meet the community where it lives." },
      { property: "og:title", content: "Community Impact" },
      { property: "og:url", content: "/community-impact" },
    ],
    links: [{ rel: "canonical", href: "/community-impact" }],
  }),
  component: Community,
});

const gallery = [
  { img: communityImg, cap: "Educational presentation" },
  { img: mediaImg, cap: "Radio & media appearance" },
  { img: classesImg, cap: "Professional workshop" },
  { img: counselingImg, cap: "Family-support outreach" },
  { img: driverImg, cap: "Safety-sensitive workforce program" },
  { img: testingImg, cap: "Health & prevention event" },
];

function Community() {
  return (
    <>
      <PageHero
        eyebrow="Community Impact"
        title="Present where people are."
        intro="A record of educational presentations, workshops, radio appearances, and community outreach."
      />

      <section className="container-page mt-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 [grid-auto-flow:dense]">
          {gallery.map((g, i) => (
            <figure key={i} className={`card-soft !p-0 overflow-hidden group ${i % 5 === 0 ? "sm:col-span-2" : ""}`}>
              <div className={i % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}>
                <img src={g.img} alt={g.cap} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="px-5 py-4 text-sm font-medium text-[color:var(--navy)]">{g.cap}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <AppointmentCTA title="Invite us to your community." body="Book a presentation, workshop, or media conversation." />
    </>
  );
}
