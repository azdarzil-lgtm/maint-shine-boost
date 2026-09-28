import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { journalPosts } from "@/lib/journal-posts";

export const Route = createFileRoute("/journal/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = journalPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title} | SolidMaint Journal` },
      { name: "description", content: loaderData?.excerpt ?? "" },
      { property: "og:title", content: loaderData?.title ?? "" },
      { property: "og:description", content: loaderData?.excerpt ?? "" },
      { property: "og:url", content: `https://maint-shine-boost.lovable.app/journal/${loaderData?.slug}` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(loaderData?.image.startsWith("https")
        ? [
            { property: "og:image", content: loaderData.image },
            { name: "twitter:image", content: loaderData.image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: `https://maint-shine-boost.lovable.app/journal/${loaderData?.slug}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: loaderData?.title,
          description: loaderData?.excerpt,
          author: { "@type": "Organization", name: "SolidMaint" },
          publisher: { "@type": "Organization", name: "SolidMaint" },
        }),
      },
    ],
  }),
  component: JournalPostPage,
});

function JournalPostPage() {
  const post = Route.useLoaderData();
  const index = journalPosts.findIndex((p) => p.slug === post.slug);
  const next = journalPosts[index + 1];

  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <article className="pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-3xl px-5 md:px-10">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-coral transition-colors hover:text-deep"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Back to the Journal
          </Link>

          <p className="section-label mt-8 text-coral">{post.date}</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-5xl">
            {post.title}
          </h1>

          <img
            src={post.image}
            alt={post.alt}
            className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
          />

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-deep/75">
            {post.body.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "text-xl font-medium text-deep" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-deep/15 bg-olive/10 p-8 md:-mx-8 md:p-10">
            <h2 className="font-display text-2xl font-semibold leading-tight">
              Wondering what your home needs this season?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-deep/65">
              Tell us where your home is and what needs care — we&apos;ll suggest a plan that fits it.
            </p>
            <a href="/#contact" className="solid-button solid-button-coral mt-6">
              Talk to us <ArrowRight aria-hidden="true" />
            </a>
          </div>

          {next && (
            <Link
              to="/journal/$slug"
              params={{ slug: next.slug }}
              className="group mt-12 flex items-center justify-between gap-4 border-t border-deep/15 pt-8 transition-colors hover:text-coral"
            >
              <span>
                <span className="block text-xs font-bold uppercase tracking-wider text-coral">
                  Next — {next.date}
                </span>
                <span className="mt-1 block font-display text-xl font-semibold md:text-2xl">
                  {next.title}
                </span>
              </span>
              <ArrowRight
                className="size-6 shrink-0 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </article>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
