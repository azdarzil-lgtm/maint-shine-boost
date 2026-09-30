import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import aldis from "@/assets/aldis.jpg";
import anita from "@/assets/anita.jpg";
import leevi from "@/assets/leevi.jpg";
import antonio from "@/assets/antonio.jpg";
import carlos from "@/assets/carlos.jpg";
import jani from "@/assets/jani.jpg";
import joseAntonio from "@/assets/jose-antonio.jpg";
import manMeditating from "@/assets/man-meditating.png";
import tero from "@/assets/tero.jpg";
import tuukka from "@/assets/tuukka.jpg";
import janita from "@/assets/janita.jpg";
import jussi from "@/assets/jussi.jpg";
import samuliAsset from "@/assets/samuli.jpg.asset.json";

const samuli = samuliAsset.url;
import marenaAsset from "@/assets/marena.webp.asset.json";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/team")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "SolidMaint Team | SolidMaint — The people behind every visit" },
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
  { name: "Jani Hämäläinen", role: "CEO", photo: jani },
  { name: "Tero Keski-Valkama", role: "CTO", photo: tero },
  { name: "Marena Christenses", role: "Head of Customer Relations", photo: marenaAsset.url },
  { name: "Anita Victoria Zdarzil", role: "Head of Marketing", photo: anita },
  { name: "Samuli Isoherranen", role: "Business Manager", photo: samuliAsset.url },
  { name: "Tuukka Sariola", role: "Business Development & Partnerships Manager", photo: tuukka },
  { name: "Jussi Koivulahti", role: "Service Manager", photo: jussi },
  { name: "Janita Rintala", role: "Customer Success Manager", photo: janita },
  { name: "Carlos Moreno", role: "Product Designer / UX Engineer", photo: carlos },
];

const team = [
  { name: "Aldis", role: "Plumbing & Construction", photo: aldis },
  { name: "Antonio", role: "AC, Electricity & Plumbing", photo: antonio },
  { name: "José Antonio", role: "Garden & Pool", photo: joseAntonio },
  { name: "Leevi", role: "Garden & Pool", photo: leevi },
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
          <div className="mt-6 grid gap-6 text-lg leading-relaxed text-deep/65 lg:grid-cols-2 lg:gap-10">
            <p>
              A small, experienced team based along the Costa del Sol. Our crew have deep Nordic roots — precision,
              delivered with genuine Costa warmth. We know the homes, the climate and the details that keep a
              property running smoothly.
            </p>
            <p>
              SolidMaint started with a simple discovery: for all its beautiful homes, the Costa was missing a truly
              quality home care service — the kind where visits actually happen on time, where you know exactly who
              is coming and what was done. So we decided to build it ourselves: an innovative company with a
              technical upper hand, created to serve the fantastic clients of this coast the way they deserve.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Precision",
                body: "Nordic attention to detail in every visit — schedules kept, checklists finished, nothing left to chance.",
              },
              {
                title: "Innovation",
                body: "The Property Vault, photo reports and smart planning put every visit, photo and invoice in your pocket.",
              },
              {
                title: "Costa warmth",
                body: "Real people who know your home by name — and treat it like their own, every single time.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-[1.5rem] border border-deep/10 bg-white/70 p-6">
                <p className="font-display text-base font-semibold text-coral">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-deep/65">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">SolidMaint Team</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {management.map((member) => (
              <MemberCard key={member.name} {...member} imageClass="max-w-[240px] md:max-w-[260px]" />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h2 className="text-center font-display text-2xl font-semibold md:text-3xl">Our Crew</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-deep/65">
            The specialists out on the tools — each one the lead for their service.
          </p>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <MemberCard key={member.name} {...member} imageClass="max-w-[200px] md:max-w-[220px]" />
            ))}
          </div>


          <div className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-deep/15 bg-olive/10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end xl:grid-cols-[minmax(0,1fr)_24rem]">
            <div className="p-8 lg:py-12 lg:pl-10 lg:pr-4">
              <h2 className="font-display text-2xl font-semibold leading-tight md:text-3xl lg:whitespace-nowrap xl:text-4xl">
                Would you like us to look after Your Home?
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-deep/65">
                Put your feet up and simply relax — we&apos;ve got it from here. While you enjoy the Costa life, our
                crew keeps your home cared for, checked and running smoothly. You relax; we handle the rest.
              </p>
              <a href="/#contact" className="solid-button solid-button-coral mt-8">
                Talk to us <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="flex h-[15rem] items-end justify-center px-4 sm:h-[17rem] lg:h-full lg:min-h-[20rem] lg:px-0 lg:pr-2">
              <img
                src={manMeditating}
                alt="A homeowner relaxing while SolidMaint takes care of his home"
                className="max-h-full w-full max-w-[17rem] object-contain object-bottom sm:max-w-[18.5rem]"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
