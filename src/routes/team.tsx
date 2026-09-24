import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import antonio from "@/assets/antonio.jpg";
import pekka from "@/assets/pekka.jpg";
import mikko from "@/assets/mikko.jpg";
import jonas from "@/assets/jonas.jpg";
import marenaAsset from "@/assets/marena.webp.asset.json";
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
          "Meet the SolidMaint team — management and a small, experienced crew with Nordic roots, caring for homes along the Costa del Sol, from Benalmádena to Sotogrande.",
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

const management = [
  { name: "Antonio Reyes", role: "Head of Operations", photo: antonio },
  { name: "Marena López", role: "Client Care Director", photo: marenaAsset.url },
  { name: "Carmen Vidal", role: "Property Manager", photo: team4 },
];

const team = [
  { name: "Daniel Torres", role: "Lead Technician", photo: team3 },
  { name: "Pekka Lindqvist", role: "AC Specialist", photo: pekka },
  { name: "Mikko Aaltonen", role: "Handyman Lead", photo: mikko },
  { name: "Jonas Berg", role: "Electrical Lead", photo: jonas },
];

function MemberCard({
  name,
  role,
  photo,
  imageClass,
}: {
  name: string;
  role: string;
  photo: string;
  imageClass: string;
}) {
  return (
    <div className="group text-center">
      <div className={`mx-auto overflow-hidden rounded-[1.75rem] ${imageClass}`}>
        <img
          src={photo}
          alt={name}
          loading="lazy"
          width={600}
          height={600}
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mt-4 font-display text-lg font-semibold">{name}</p>
      <p className="mt-1 text-xs font-bold uppercase text-coral">{role}</p>
    </div>
  );
}

function TeamPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="pt-36 pb-16 md:pt-48 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Meet the team</p>
          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
            The people behind every visit.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep/65">
            A small, experienced crew based along the Costa del Sol. Our team has deep Nordic roots — precision,
            delivered with genuine Costa warmth. We know the homes, the climate and the details that keep a
            property running smoothly.
          </p>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">Management</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {management.map((member) => (
              <MemberCard key={member.name} {...member} imageClass="max-w-[240px] md:max-w-[260px]" />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">Our crew</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <MemberCard key={member.name} {...member} imageClass="max-w-[200px] md:max-w-[220px]" />
            ))}
          </div>

          <div className="mt-16 rounded-[1.75rem] border border-deep/15 bg-olive/10 p-8 md:p-12">
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
