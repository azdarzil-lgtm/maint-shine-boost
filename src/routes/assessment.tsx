import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarCheck, ClipboardCheck, MessageCircle, Sparkles } from "lucide-react";

import enquiryBg from "@/assets/enquiry-bg-2.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { AssessmentEnquiry } from "@/components/SmartEnquiry";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/assessment")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Free Property Assessment | SolidMaint" },
      {
        name: "description",
        content:
          "Tell us who you are — overseas owner, resident owner, property manager or buying a home — and our guided enquiry shapes a care recommendation around your property on the Costa del Sol.",
      },
      { property: "og:title", content: "Free Property Assessment | SolidMaint" },
      {
        property: "og:description",
        content:
          "A smarter first conversation. Tell us who you are and we'll ask what matters — a useful, personal recommendation, not a generic one.",
      },
      { property: "og:url", content: "https://www.solidmaint.com/assessment" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.solidmaint.com/assessment" }],
  }),
  component: AssessmentPage,
});

const steps = [
  {
    icon: ClipboardCheck,
    title: "Pick who you are",
    text: "Overseas owner, resident owner, property manager or buying a home — each path asks its own questions.",
  },
  {
    icon: Sparkles,
    title: "Answer what matters",
    text: "Property type, town, priorities and timing — a couple of minutes, in plain English, no jargon.",
  },
  {
    icon: CalendarCheck,
    title: "Get a real recommendation",
    text: "We reply within one working day with a care plan (or a one-off visit) that fits your home — no pressure.",
  },
];

function AssessmentPage() {
  return (
    <>
      <SiteHeader solid />
      <main>
        <section className="relative overflow-hidden bg-deep py-16 text-sunlit md:py-24">
          <img
            src={enquiryBg}
            alt=""
            aria-hidden="true"
            loading="eager"
            width={1920}
            height={1024}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/88" aria-hidden="true" />
          <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
            <MessageCircle className="mx-auto size-10 text-coral md:size-12" aria-hidden="true" />
            <p className="section-label mt-8 text-[0.85rem] text-coral md:text-[1rem]">05 — A smarter first conversation</p>
            <h1 className="mx-auto mt-5 font-display text-5xl font-semibold leading-tight text-sunlit md:text-7xl">
              <span className="block">Tell us who you are.</span> <span className="block">We’ll ask what matters.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-sunlit md:text-2xl">
              Our guided chat shapes the questions around your property and priorities, so your first recommendation is
              useful—not generic.
            </p>
            <AssessmentEnquiry />
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-[1.5rem] border border-deep/10 bg-sunlit p-7 shadow-[0_18px_40px_-28px_rgb(59_97_96/0.5)]">
                  <span className="grid size-12 place-items-center rounded-full bg-coral/12 text-coral">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-deep">{title}</h2>
                  <p className="mt-3 leading-relaxed text-deep/70">{text}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-10 max-w-2xl text-center text-lg leading-relaxed text-deep/70">
              One-off job or a full care plan, a villa or a flat, a pool or a stubborn shutter — it all starts the same
              way: a short, honest conversation. Property Vault included with every plan.
            </p>
            <div className="mt-10 text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-deep/60 transition hover:text-coral">
                <ArrowLeft className="size-4" aria-hidden="true" /> Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
