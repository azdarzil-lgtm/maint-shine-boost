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
      "Every care plan combines hands-on service hours with a dedicated team and a plan manager who knows your home. You choose where the hours go each month — garden care, pool maintenance, air-conditioning services, handyman work, cleaning checklists or anything else your property needs. Each visit is documented with photos, time and a task report in your Property Vault, and you receive a monthly summary so nothing happens at your home that you cannot see.\n\nWe offer three packages: Essential Care (2 service hours a month), Home Ready (4 hours) and Signature Care (6 hours). Property Vault is included with every package, and extras such as orchard and fruit tree care, jacuzzi and spa treatment or additional service hours can be bolted on to any of them.",
  },
  {
    question: "How do I know what happened during a visit?",
    answer:
      "Nothing at your home happens quietly. Your technicians check in on arrival through the app, log their time on site and photograph the work before and after. A task report is written for every visit and stored against your property.\n\nYou can follow each task live from your phone, and at the end of the month you receive a report summarising the visits, the time spent and what was done — all kept in your Property Vault. Invoices appear there too, so you always have a full, documented history of how your home has been cared for. It is the kind of paperwork most owners only wish they had when it comes to selling, insuring or renting out a property.",
  },
  {
    question: "What is the Property Vault?",
    answer:
      "Your Property Vault is the digital memory of your home, included with every care plan. It keeps the photos, reports and time logs from every visit alongside the full history of services, repairs and renovations carried out at the property.\n\nWhy does that matter? Because a well-documented home is a valuable home. When you come to sell, remortgage, insure or hand the keys to a holiday guest, everything is there: proof that the pool has been maintained weekly, the AC serviced, the garden kept in shape. No more hunting through old emails or relying on a contractor's word — the evidence lives in your vault, and you can pull it up from your phone in seconds.",
  },
  {
    question: "Can I add extra hours or repairs when something comes up?",
    answer:
      "Of course — life in a home does not follow a schedule. Beyond your monthly hours you can book additional time from our full service portfolio at €45 per hour, including IVA: handyman work, electrical, plumbing, repairs, garden projects, deep cleans and more.\n\nJust message us or add it in the app and we will slot it in around your regular visits. Extra hours are billed with your next monthly invoice — always after the work is done, never before.",
  },
  {
    question: "How does pricing work?",
    answer:
      "We keep it simple. Each package has a fixed monthly starting price — Essential Care at €89, Home Ready at €149 and Signature Care at €199 — and the final figure depends on your property type and the size of your garden and pool. Extras such as orchard care, jacuzzi treatment or additional AC units are added on top, each with its own clear price.\n\nThe quickest way to see your number is our one-minute quote builder: answer a few questions about your home and you get an indicative monthly price there and then. After a quick look at the property we confirm the final plan — and it stays within 10% of the estimate or you can walk away. If you would rather talk it through with a human first, we are always up for a chat.",
  },
  {
    question: "Am I locked into a contract?",
    answer:
      "No. There is no minimum term and no upfront payment — you are billed after each month's service, not before. If a month comes when you do not need us, or you are away for the summer, you can pause or cancel from one month to the next.\n\nWe would rather earn your next month with good work than hold you to a contract. Most of our owners stay for years, but because they want to — not because they have to.",
  },
  {
    question: "Do you take on one-off jobs, or only care plans?",
    answer:
      "Both. Plenty of our customers start with a single job — a leaking tap, an AC service before the summer, a garden that got away from them — and stay for the care plan once they see how we work. Others just need us now and then, and that is absolutely fine.\n\nOne-off work spans our whole portfolio: handyman and repairs, electrical, plumbing, garden makeovers, pool recovery, deep cleaning and end-of-tenancy sparkle jobs. Tell us what needs doing and we will quote it plainly, with no obligation either way.",
  },
  {
    question: "Can I follow the work from my phone?",
    answer:
      "Yes — that is rather the point of us. Download the SolidMaint app from the App Store or Google Play and your home's entire care story lives in your pocket: live task updates as technicians check in, before-and-after photos, time logs, reports and invoices.\n\nYou will always know who was at your home, when, what they did and how long it took — whether you are on the next street or on another continent. It is the closest thing to being there without being there.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We look after homes along the western Costa del Sol — from Benalmádena and Fuengirola through Mijas, Marbella and San Pedro Alcántara to Estepona and down to Sotogrande. That is where our crews are based and where we can guarantee the response times we promise.\n\nIf your home sits just outside that stretch, leave your details anyway — we are growing along the coast and we will happily let you know the moment we reach your area.",
  },
  {
    question: "What happens after I get in touch?",
    answer:
      "A real conversation, not a sales script. We start by asking about your home — where it is, what needs care, and how you use it. A resident owner and an overseas owner need very different things, and we shape our questions around you rather than the other way round.\n\nFrom there we put together a suggested care plan with a clear price. If it looks right, we arrange a quick visit to see the property and confirm the details — the final price stays within 10% of your estimate or you can walk away with no hard feelings. If it is not right, we adjust it until it is.",
  },
  {
    question: "We are a real estate company — do you work with businesses?",
    answer:
      "Yes, and it is some of the work we are proudest of. Our partner programme is built for estate agencies, rental and holiday-let managers, developers and residential communities — anyone whose reputation depends on the state of the properties they look after.\n\nPartners become part of the family: care plans rolled out across whole portfolios, one point of contact, documented service history for every property (which makes handovers and sales far smoother) and priority scheduling in the busy season. If you look after homes for a living, let us look after the homes with you.",
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
                <div className="max-w-2xl space-y-4 pb-6 leading-relaxed text-deep/65">
                  {faq.answer.split("\n\n").map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
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
                English. Wondering about a one-off job instead — a repair, a garden tidy-up or an AC service? Curious
                how the Property Vault works, what your plan would cost, or whether we cover your street? Ask away.
                There is no such thing as a silly question — and no pressure either. Just an honest chat about what
                your home needs.
              </p>
              <a href="/#contact" className="solid-button solid-button-coral mt-8">
                Talk to us <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="flex h-[26rem] items-end justify-center px-4 sm:h-[29rem] md:h-full md:min-h-96 md:px-0 md:pr-2">
              <img
                src={wonderingWoman}
                alt="A woman wondering about the right care for her home"
                className="max-h-full w-full max-w-lg object-contain object-bottom md:max-h-96"
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
