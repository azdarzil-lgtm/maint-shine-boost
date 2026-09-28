import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";

import wonderingWoman from "@/assets/wondering-woman-cutout.png";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/faqs")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Property Maintenance FAQs — Costa del Sol | SolidMaint" },
      {
        name: "description",
        content:
          "Answers to the questions we hear most — care plans, visit reports, extra hours, Property Vault and the areas we cover, from Benalmádena to Sotogrande.",
      },
      { property: "og:title", content: "SolidMaint — Frequently asked questions" },
      {
        property: "og:description",
        content: "Clear answers on care plans, visits, pricing and Property Vault — before we begin.",
      },
      { property: "og:url", content: "https://maint-shine-boost.lovable.app/faqs" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://maint-shine-boost.lovable.app/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqsPage,
});

const faqs = [
  {
    question: "What is included in a SolidMaint care plan?",
    answer:
      "Plans are tailored around your property and can combine recurring garden, pool and air-conditioning care. Every visit is documented in your Property Vault.",
  },
  {
    question: "How do I know what happened during a visit?",
    answer:
      "Technicians check in on arrival. Time on site, task photos, reports and invoices are stored against your property in your Property Vault — so you always have a documented history of your home.",
  },
  {
    question: "What is the Property Vault?",
    answer:
      "Your Property Vault is included free with every care plan. It keeps photos and reports from every visit, plus the full history of services, repairs and renovations — proof of care that keeps your property's value up.",
  },
  {
    question: "Can I add extra hours or repairs when something comes up?",
    answer:
      "Yes. On 3, 6 and 12-month plans you can add extra hours from our service portfolio — handyman, electrical, plumbing and more. The longer the plan, the lower the hourly rate.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Each plan has a starting price, and the final price depends on your garden and pool size plus the length of your plan. Our one-minute quote builder walks you through it — or just talk to us and we will put it together with you.",
  },
  {
    question: "Can I follow the work from my phone?",
    answer:
      "Absolutely. Download the SolidMaint app and follow the progress of every task from your phone — check-ins, photos, reports and invoices, all in one place.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "SolidMaint serves homes along the Costa del Sol, from Benalmádena through Marbella and Estepona to Sotogrande. Not there yet? Leave your details and we will let you know when we reach your area.",
  },
  {
    question: "We are a real estate company — do you work with businesses?",
    answer:
      "Yes. Our partner programme is built for estate agencies, rental and holiday managers, developers and communities. Partners become part of the family, with care plans across whole portfolios.",
  },
];

function FaqsPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Good questions, honest answers</p>
          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
            Clear answers before we begin.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-deep/65">
            Everything you might want to know about our care plans, your Property Vault and how we work. If your
            question is not here, we are one message away.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-3xl divide-y divide-deep/15 border-y border-deep/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-bold">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-coral transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-deep/65">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-deep/15 bg-olive/10 md:grid-cols-[minmax(0,1fr)_29rem] md:items-end">
            <div className="p-8 md:py-12 md:pl-12 md:pr-6">
              <h2 className="max-w-[20ch] font-display text-2xl font-semibold leading-tight md:text-4xl">
                Still wondering about something?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-deep/65">
                Tell us about your home and what matters to you — we will come back with the right care plan, in plain
                English.
              </p>
              <a href="/#contact" className="solid-button solid-button-coral mt-8">
                Talk to us <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="flex h-[26rem] items-end justify-center px-4 sm:h-[29rem] md:h-full md:min-h-96 md:px-0 md:pr-2">
              <img
                src={wonderingWoman}
                alt="A woman wondering about the right care for her home"
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
