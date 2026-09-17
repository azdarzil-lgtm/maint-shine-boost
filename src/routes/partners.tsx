import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Building2, CalendarClock, HandHeart, KeyRound, LineChart, Percent, Phone, Users } from "lucide-react";

import partnersTeam from "@/assets/partners-team.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partner Programme | SolidMaint — Join the family" },
      {
        name: "description",
        content:
          "A partnership programme for estate agents, rental managers and developers on the Costa del Sol: one trusted maintenance team, priority response, shared reporting and referral rewards.",
      },
      { property: "og:title", content: "SolidMaint Partner Programme — Join the family" },
      {
        property: "og:description",
        content:
          "Estate agents, rental managers and developers: one dependable maintenance team behind every home you look after.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const whoFor = [
  {
    icon: Building2,
    title: "Estate agencies",
    body: "Hand over keys with confidence. Every listing shows beautifully, and every new owner inherits a home already in good hands.",
  },
  {
    icon: KeyRound,
    title: "Rental & holiday managers",
    body: "Changeovers, pools, gardens and AC handled between guests — with photo-backed records for every single visit.",
  },
  {
    icon: Users,
    title: "Developers & communities",
    body: "One team across a whole portfolio, one point of contact, and a maintenance story you can show to buyers.",
  },
];

const benefits = [
  {
    icon: Phone,
    title: "Your own person, not a call centre",
    body: "A named partner manager who knows your properties, your owners and how you like things done.",
  },
  {
    icon: CalendarClock,
    title: "Priority in the diary",
    body: "Partner jobs are slotted first. Urgent call-outs are answered the same working day wherever we can.",
  },
  {
    icon: Percent,
    title: "Family rates",
    body: "Preferential pricing across every plan and hourly service, and rewards on every home you introduce to us.",
  },
  {
    icon: LineChart,
    title: "Shared visibility",
    body: "One dashboard across your whole portfolio — every visit, photo and note, ready to forward to an owner.",
  },
  {
    icon: BadgeCheck,
    title: "Fully covered work",
    body: "Insured, documented, and carried out by the same faces every time. Your reputation is safe with ours.",
  },
  {
    icon: HandHeart,
    title: "We grow together",
    body: "Co-branded materials, owner welcome packs and referrals sent back your way when a client needs an agent.",
  },
];

const tiers = [
  {
    name: "Friend",
    homes: "1–5 homes",
    blurb: "For agencies just starting to send us work.",
    points: ["Named contact", "Preferential hourly rates", "Photo-backed visit reports", "Referral reward per home"],
  },
  {
    name: "Family",
    homes: "6–25 homes",
    blurb: "Our most popular partnership — properly looked after.",
    points: [
      "Everything in Friend",
      "Priority scheduling & same-day urgent response",
      "Portfolio dashboard access",
      "Quarterly review with your partner manager",
      "Co-branded owner welcome packs",
    ],
    featured: true,
  },
  {
    name: "Inner circle",
    homes: "26+ homes",
    blurb: "For developers and larger managed portfolios.",
    points: [
      "Everything in Family",
      "Dedicated crew assigned to your portfolio",
      "Custom SLA and bespoke pricing",
      "Monthly reporting for your owners",
      "Joint marketing and event support",
    ],
  },
];

const steps = [
  { n: "01", title: "Tell us about your portfolio", body: "Where the homes are, how many, and what usually goes wrong." },
  { n: "02", title: "We build your partner plan", body: "Rates, response times and reporting shaped around how you work." },
  { n: "03", title: "Meet your partner manager", body: "One name, one number, and an introduction to the crew on the ground." },
  { n: "04", title: "You are part of the family", body: "We look after the homes; you look after the clients. Everyone sleeps better." },
];

function PartnersPage() {
  return (
    <main className="min-h-screen bg-sunlit text-deep">
      <SiteHeader solid />

      <section className="pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="section-label text-coral">Partner programme</p>
            <h1 className="mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">
              Join the family behind the homes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-deep/70">
              Estate agencies, rental managers and developers on the Costa del Sol trust us with the properties their
              reputation depends on. Partnering with SolidMaint is not a supplier arrangement — it is a small, dependable
              team that turns up as if every home were our own.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#apply" className="solid-button solid-button-coral">
                Become a partner <ArrowRight aria-hidden="true" />
              </a>
              <a href="/#contact" className="solid-button solid-button-dark">
                Talk to us first
              </a>
            </div>
          </div>
          <figure className="overflow-hidden rounded-[1.75rem] border border-deep/10">
            <img
              src={partnersTeam}
              alt="Partner agents and the SolidMaint team outside a Costa del Sol real estate office"
              className="h-full w-full object-cover"
              width={1536}
              height={1024}
            />
          </figure>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Who it is for</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {whoFor.map((item) => (
              <div key={item.title} className="border border-deep/15 bg-olive/5 p-7">
                <item.icon className="size-7 text-coral" aria-hidden="true" />
                <h2 className="mt-5 font-display text-xl font-semibold md:text-2xl">{item.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-deep/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-20 text-sunlit md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">What you get</p>
          <h2 className="mt-5 max-w-[20ch] font-display text-3xl font-semibold leading-tight md:text-5xl">
            Looked after, the same way we look after homes.
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border-t border-sunlit/20 pt-6">
                <benefit.icon className="size-6 text-coral" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-semibold md:text-xl">{benefit.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-sunlit/65">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Partner levels</p>
          <h2 className="mt-5 max-w-[22ch] font-display text-3xl font-semibold leading-tight md:text-5xl">
            The more homes you bring, the closer to the table you sit.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col border p-8 ${
                  tier.featured ? "border-coral bg-coral/10" : "border-deep/15 bg-olive/5"
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wide text-coral">{tier.homes}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold md:text-3xl">{tier.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-deep/65">{tier.blurb}</p>
                <ul className="mt-6 space-y-3 text-base text-deep/80">
                  {tier.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <BadgeCheck className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a href="#apply" className="solid-button solid-button-dark mt-8 self-start">
                  Apply <ArrowRight aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">How joining works</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.n} className="border-t-2 border-coral pt-5">
                <span className="font-display text-3xl font-semibold text-coral">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold md:text-xl">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-deep/65">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-5 md:px-10">
          <div className="border border-deep/15 bg-olive/10 p-8 md:p-12">
            <p className="section-label text-coral">Members area</p>
            <h2 className="mt-5 max-w-[22ch] font-display text-3xl font-semibold leading-tight md:text-4xl">
              Request your partner account.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep/70">
              Partners get a private login to the portfolio dashboard — every property, every visit, every photo in one
              place. Tell us about your business and we will set it up and call you within one working day.
            </p>

            <form
              className="mt-9 grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                const data = new FormData(event.currentTarget);
                const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
                window.location.href = `mailto:hello@solidmaint.com?subject=${encodeURIComponent(
                  "Partner programme application",
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Company
                <input
                  name="Company"
                  required
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Your name
                <input
                  name="Name"
                  required
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Email
                <input
                  name="Email"
                  type="email"
                  required
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Phone
                <input
                  name="Phone"
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Type of business
                <select
                  name="Business type"
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                >
                  <option>Estate agency</option>
                  <option>Rental / holiday management</option>
                  <option>Developer</option>
                  <option>Community administrator</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Homes in your portfolio
                <select
                  name="Portfolio size"
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                >
                  <option>1–5</option>
                  <option>6–25</option>
                  <option>26+</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold sm:col-span-2">
                Anything we should know?
                <textarea
                  name="Notes"
                  rows={4}
                  className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="solid-button solid-button-coral">
                  Send my application <ArrowRight aria-hidden="true" />
                </button>
                <p className="mt-4 text-sm text-deep/60">
                  Already a partner? Your login link is in your welcome email — or ask your partner manager.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  );
}
