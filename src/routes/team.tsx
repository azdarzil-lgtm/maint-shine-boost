import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import antonioAsset from "@/assets/antonio.jpg.asset.json";
import joseAntonio from "@/assets/jose-antonio.jpg";
import samuliAsset from "@/assets/samuli.jpg.asset.json";

const antonio = antonioAsset.url;
const samuli = samuliAsset.url;
import marenaAsset from "@/assets/marena.webp.asset.json";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/team")({
  staticData: { sitemap: true },
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
      { property: "og:url", content: "https://maint-shine-boost.lovable.app/team" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://maint-shine-boost.lovable.app/team" }],
  }),
  component: TeamPage,
});

const management = [
  { name: "Jani Hämäläinen", role: "CEO", initials: "JH" },
  { name: "Marena Christenses", role: "Head of Customer Relations", photo: marenaAsset.url },
  { name: "Samuli Isoherranen", role: "Business Manager", photo: samuliAsset.url },
  { name: "Anita Victoria Zdarzil", role: "Head of Marketing", initials: "AZ" },
  { name: "Tero Keski-Valkama", role: "CTO", initials: "TK" },
];

const team = [
  { name: "José Antonio", role: "Garden Maintenance", photo: joseAntonio },
  { name: "Antonio", role: "Pool Maintenance & AC Services", photo: antonio },
];

function MemberCard({
  name,
  role,
  photo,
  initials,
  imageClass,
}: {
  name: string;
  role: string;
  photo?: string;
  initials?: string;
  imageClass: string;
}) {
  return (
    <div className="group text-center">
      <div className={`mx-auto overflow-hidden rounded-[1.75rem] ${imageClass}`}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            loading="lazy"
            width={600}
            height={600}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex aspect-square w-full items-center justify-center bg-olive/15 transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-4xl font-semibold text-deep/40">{initials}</span>
          </div>
        )}
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
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((member) => (
              <MemberCard key={member.name} {...member} imageClass="max-w-[240px] md:max-w-[260px]" />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">Our crew</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
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
