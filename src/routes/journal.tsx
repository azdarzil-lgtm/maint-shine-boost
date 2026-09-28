import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import wonderingMan from "@/assets/wondering-man-cutout.png";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { journalPosts as posts } from "@/lib/journal-posts";

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
              <Link
                key={post.slug}
                to="/journal/$slug"
                params={{ slug: post.slug }}
                className="group grid grid-cols-[5.5rem_minmax(0,1fr)_auto] items-center gap-4 py-5 transition-colors hover:text-coral sm:grid-cols-[7rem_9rem_minmax(0,1fr)_auto] sm:py-6"
              >
                <span className="hidden w-28 shrink-0 text-xs font-bold uppercase text-coral sm:block">
                  {post.date}
                </span>
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="h-20 w-24 shrink-0 rounded-xl object-cover sm:h-24 sm:w-36"
                />
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

          <div className="mt-14 grid overflow-hidden border border-deep/15 bg-olive/10 md:grid-cols-[minmax(0,1fr)_29rem] md:items-end">
            <div className="p-8 md:py-12 md:pl-12 md:pr-6">
              <h2 className="max-w-[20ch] font-display text-2xl font-semibold leading-tight md:text-4xl">
                Wondering what your home needs this season?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-deep/65 lg:whitespace-nowrap">
                Tell us where your home is and what needs care — we&apos;ll suggest a plan that fits it.
              </p>
              <a href="/#contact" className="solid-button solid-button-coral mt-8">
                Talk to us <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="flex h-[26rem] items-end justify-center px-4 sm:h-[29rem] md:h-full md:min-h-96 md:px-0 md:pr-2">
              <img
                src={wonderingMan}
                alt="A man wondering which seasonal care his home needs"
                className="max-h-full w-full max-w-lg object-contain object-bottom"
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
