import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import proofNotPromisesAd from "@/assets/proof-not-promises-ad.jpg.asset.json";
import wonderingMan from "@/assets/wondering-man-cutout.png";

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
    date: "October 2026",
    title: "Proof, not promises: check on your home from your kitchen in London",
    excerpt:
      "The biggest worry we hear from overseas owners? Paying someone local and never quite knowing if the job was done. Here's how every SolidMaint visit ends with fresh photos and a full check log in your Property Vault — no ghosting, no guessing.",
    image: proofNotPromisesAd.url,
    alt: "Checking a sunlit Costa del Sol villa on a phone from a cosy autumn café in London",
  },
  {
    date: "September 2026",
    title: "Autumn on the coast: resetting your home after summer",
    excerpt:
      "After months of heat, dust and full pools, September is when we deep-check gardens, irrigation and AC — and get every home ready for the gentler season ahead.",
    image:
      "https://images.unsplash.com/photo-1625528193934-4cb230e7267d?auto=format&fit=crop&w=900&q=80",
    alt: "Yachts and whitewashed buildings at Puerto Banús marina in Marbella, with La Concha mountain behind",
  },
  {
    date: "August 2026",
    title: "Preparing your garden for the September heat",
    excerpt:
      "What we adjust in watering, pruning and shade across the Costa del Sol when the summer peaks.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    alt: "Lush green garden plants in bright sunlight",
  },
  {
    date: "July 2026",
    title: "The quiet checks that keep a pool perfect",
    excerpt:
      "Beyond cleaning: the water balance and equipment habits that stop small problems becoming big ones.",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80",
    alt: "A crystal-clear swimming pool at a villa",
  },
  {
    date: "June 2026",
    title: "Getting an empty home ready for your arrival",
    excerpt:
      "Our arrival-ready routine for overseas owners — AC, plumbing, electrics and everything in between.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    alt: "A bright modern villa exterior ready for its owners",
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

          <div className="mt-14 grid overflow-hidden border border-deep/15 bg-olive/10 md:grid-cols-[minmax(0,1fr)_22rem] md:items-end">
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
            <div className="flex h-[21.5rem] items-end justify-center px-4 sm:h-24 sm:h-96 md:h-full md:min-h-96 md:px-0 md:pr-5">
              <img
                src={wonderingMan}
                alt="A man wondering which seasonal care his home needs"
                className="max-h-full w-full max-w-md object-contain object-bottom"
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
