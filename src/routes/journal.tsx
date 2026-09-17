import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal | SolidMaint — Notes from the homes we look after" },
      {
        name: "description",
        content:
          "Seasonal advice and small observations from our property care visits along the Costa del Sol — gardens, pools, air conditioning and empty-home readiness.",
      },
      { property: "og:title", content: "The SolidMaint Journal — Notes from the homes we look after" },
      {
        property: "og:description",
        content: "Seasonal advice and small observations from our visits along the Costa del Sol.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JournalPage,
});

const posts = [
  {
    date: "August 2026",
    title: "Preparing your garden for the September heat",
    excerpt:
      "What we adjust in watering, pruning and shade across the Costa del Sol when the summer peaks.",
  },
  {
    date: "July 2026",
    title: "The quiet checks that keep a pool perfect",
    excerpt:
      "Beyond cleaning: the water balance and equipment habits that stop small problems becoming big ones.",
  },
  {
    date: "June 2026",
    title: "Getting an empty home ready for your arrival",
    excerpt:
      "Our arrival-ready routine for overseas owners — AC, plumbing, electrics and everything in between.",
  },
  {
    date: "May 2026",
    title: "Why your AC needs attention before the first heatwave",
    excerpt:
      "The pre-season service that keeps the cool air flowing — and the small faults it catches before they become breakdowns.",
  },
  {
    date: "April 2026",
    title: "Spring on the coast: the garden jobs that matter most",
    excerpt:
      "Feeding, trimming and irrigation checks — the work we prioritise in spring so homes look their best by summer.",
  },
];

function JournalPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">The SolidMaint Journal</p>
          <h1 className="mt-5 max-w-[16ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
            Notes from the homes we look after.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep/65">
            Seasonal advice and small observations from our visits along the coast — written by the team, for owners.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="divide-y divide-deep/15 border-y border-deep/15">
            {posts.map((post) => (
              <a
                key={post.title}
                href="#journal"
                className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 transition-colors hover:text-coral sm:grid-cols-[7rem_minmax(0,1fr)_auto] sm:py-6"
              >
                <span className="hidden w-28 shrink-0 text-xs font-bold uppercase text-coral sm:block">
                  {post.date}
                </span>
                <span>
                  <strong className="font-display text-xl font-semibold md:text-2xl">{post.title}</strong>
                  <span className="mt-1 block text-sm text-deep/60">{post.excerpt}</span>
                </span>
                <ArrowRight
                  className="ml-auto size-5 shrink-0 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>

          <div className="mt-14 border border-deep/15 bg-olive/10 p-8 md:p-12">
            <h2 className="max-w-[20ch] font-display text-2xl font-semibold leading-tight md:text-4xl">
              Wondering what your home needs this season?
            </h2>
            <p className="mt-4 text-base leading-relaxed md:whitespace-nowrap text-deep/65">
              Tell us where your home is and what needs care — we&apos;ll suggest a plan that fits it.
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
