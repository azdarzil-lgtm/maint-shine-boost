import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | SolidMaint — The people behind every visit" },
      {
        name: "description",
        content:
          "Meet the SolidMaint team — a small, experienced crew from Finland and Sweden caring for homes along the Costa del Sol, from Benalmádena to Sotogrande.",
      },
      { property: "og:title", content: "Meet the SolidMaint team" },
      {
        property: "og:description",
        content: "Nordic precision, delivered with genuine Costa warmth — meet the people behind every visit.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Antonio Reyes", role: "Head of Operations", photo: team1 },
  { name: "Marena López", role: "Client Care", photo: team2 },
  { name: "Daniel Torres", role: "Lead Technician", photo: team3 },
  { name: "Carmen Vidal", role: "Property Manager", photo: team4 },
];

function TeamPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Meet the team</p>
          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
            The people behind every visit.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep/65">
            A small, experienced crew based along the Costa del Sol. Our team comes from Finland and Sweden — Nordic
            precision, delivered with genuine Costa warmth. We know the homes, the climate and the details that keep a
            property running smoothly.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-display text-xl font-semibold">{member.name}</p>
                <p className="mt-1 text-sm font-bold uppercase text-coral">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-deep/15 bg-olive/10 p-8 md:p-12">
            <h2 className="max-w-[20ch] font-display text-2xl font-semibold leading-tight md:text-4xl">
              Want these faces looking after your home?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-deep/65">
              Tell us about your property and we will match it with the right care plan — and the right people.
            </p>
            <a href="/#contact" className="solid-button solid-button-coral mt-8">
              Talk to us <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
