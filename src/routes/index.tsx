import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  
  Clock3,
  Compass,
  Droplets,
  FileText,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  Star,
  Sun,
  TrendingUp,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import appProcessPoster from "@/assets/app-process-poster.jpg.asset.json";
import appProcessVideo from "@/assets/solidmaint-app-process.mp4.asset.json";
import enquiryBg from "@/assets/enquiry-bg-2.jpg";
import familyVillaPoster from "@/assets/family-villa-footer-poster.jpg.asset.json";
import familyVillaVideo from "@/assets/family-villa-footer.mp4.asset.json";
import antonio from "@/assets/antonio.jpg";
import testimonialStill from "@/assets/testimonial-still.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { InstagramFeed } from "@/components/InstagramFeed";
import { MarenaBanner } from "@/components/MarenaBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PlanBuilder, type PlanKey } from "@/components/PlanBuilder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Property Maintenance Costa del Sol | SolidMaint" },
      {
        name: "description",
        content:
          "Reliable garden, pool and home maintenance from Benalmádena to Sotogrande, with every visit documented in your Property Vault.",
      },
      { property: "og:title", content: "SolidMaint | Costa del Sol Property Care" },
      {
        property: "og:description",
        content: "Your Costa del Sol home cared for, checked and documented while you are away.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const packages: {
  number: string;
  key: PlanKey;
  name: string;
  lead: string;
  price: number;
  detail: string;
  items: { title: string; body: string; perk?: boolean }[];
  featured?: boolean;
}[] = [
  {
    number: "01",
    key: "outdoor",
    name: "Essential Care",
    lead: "The dependable essentials",
    price: 189,
    detail: "A flexible starting point for flats, townhouses and smaller homes. Choose only the regular care your property needs.",
    items: [
      {
        title: "Garden or yard care",
        body: "Optional care shaped around your outdoor space — from a small townhouse patio to generous finca grounds.",
      },
      { title: "Pool care", body: "Add regular pool care only if your home needs it." },
      { title: "Maintenance hours", body: "Add hours whenever you need help with a repair or practical job." },
      { title: "Visit photos", body: "Photos from every visit saved to your free Property Vault.", perk: true },
    ],
  },
  {
    number: "02",
    key: "home-ready",
    name: "Home Ready",
    lead: "More support, already built in",
    price: 289,
    detail: "Our most popular level for owners who want regular care plus practical time set aside for the little things.",
    items: [
      {
        title: "Garden or yard care",
        body: "Choose the right level for your outdoor space, or leave it out completely.",
      },
      {
        title: "Pool care",
        body: "Optional cleaning, water chemistry and equipment checks for homes with a pool.",
      },
      {
        title: "2 maintenance hours",
        body: "Two hours of general maintenance every month are already included in your plan.",
        perk: true,
      },
      { title: "Property report", body: "A photo-documented view of your home’s condition, stored in your Property Vault." },
    ],
    featured: true,
  },
  {
    number: "03",
    key: "complete",
    name: "VIP Care",
    lead: "Full-property peace of mind",
    price: 459,
    detail: "Proactive, hands-on oversight for villas, fincas and any home whose owner wants everything checked and ready.",
    items: [
      { title: "Whole-property checks", body: "We proactively check AC, plumbing, electrics, fixtures and the general condition of your home." },
      { title: "Garden and pool care", body: "Add the exact level each part of your property needs." },
      { title: "4 maintenance hours", body: "Four hours of general maintenance every month are already included in your plan.", perk: true },
      { title: "Priority coordination", body: "One dependable team to spot, organise and document what needs attention." },
    ],
  },
];

const services = [
  { title: "Garden Maintenance", description: "Scheduled care for lawns, borders and terraces, all year.", icon: Leaf },
  { title: "Pool Maintenance", description: "Cleaning, water testing and equipment checks, done regularly.", icon: Waves },
  { title: "AC Services", description: "Filter cleaning, performance checks and seasonal servicing.", icon: Wind },
  { title: "Handyman & Repairs", description: "Small fixes, fitting work and odd jobs handled reliably.", icon: Wrench },
  { title: "Electrical Services", description: "Safe fault-finding, installations and repairs.", icon: Zap },
  { title: "Plumbing Services", description: "Leaks, taps, drainage and bathroom maintenance.", icon: Droplets },
];

function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {[
        { small: "Download on the", name: "App Store" },
        { small: "Get it on", name: "Google Play" },
      ].map((store) => (
        <a key={store.name} href="#" className="store-button" aria-label={`${store.small} ${store.name}`}>
          <span className="grid size-8 place-items-center rounded-full bg-sunlit/10 text-lg">↓</span>
          <span className="leading-none">
            <span className="block text-[9px] uppercase text-sunlit/60">{store.small}</span>
            <span className="mt-1 block text-sm font-bold">{store.name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

function TypewriterHeading({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedText(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(heading);
    return () => observer.disconnect();
  }, [text]);

  useEffect(() => {
    if (!hasStarted || displayedText.length >= text.length) return;

    const timeout = window.setTimeout(
      () => setDisplayedText(text.slice(0, displayedText.length + 1)),
      displayedText.length === 0 ? 220 : 42,
    );

    return () => window.clearTimeout(timeout);
  }, [displayedText, hasStarted, text]);

  return (
    <h1
      ref={headingRef}
      aria-label={text}
      className="mx-auto mt-6 min-h-[3.1em] max-w-[15ch] font-display text-[2.45rem] font-semibold leading-[1.05] text-sunlit sm:text-6xl md:text-8xl"
    >
      <span aria-hidden="true">
        {displayedText}
        <span className="typewriter-cursor">|</span>
      </span>
    </h1>
  );
}


function Index() {
  const [builderPlan, setBuilderPlan] = useState<PlanKey | null>(null);

  return (
    <main id="top" className="overflow-hidden bg-sunlit text-deep">
      {builderPlan && <PlanBuilder plan={builderPlan} onClose={() => setBuilderPlan(null)} />}
      <SiteHeader />

      <section className="relative isolate overflow-hidden bg-deep text-sunlit">
        <video
          className="absolute inset-0 z-0 size-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={familyVillaPoster.url}
          aria-hidden="true"
        >
          <source src={familyVillaVideo.url} type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-[1] bg-deep/60" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 text-center md:px-10 md:pb-28 md:pt-44">
          <p className="section-label text-xs text-sunlit md:text-sm">Currently serving Benalmádena → Sotogrande · Every visit documented</p>
          <TypewriterHeading text="Let’s build the right care plan for your home." />
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/75">
            One dependable team for your garden, pool, air conditioning and home—with a clear record of every visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#packages" className="solid-button solid-button-coral">Find your care plan <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 pt-10 pb-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-deep/15 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label text-coral">01 — The benefits</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Care-free ownership, built on Nordic precision.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-deep/65 lg:pb-2">
              Our team comes from Finland and Sweden — precision is simply how we work. Every plan keeps your home
              care-free, and every visit adds to its documented history.{" "}
              <strong className="font-bold text-deep">Your free Property Vault is always included.</strong>
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Nordic precision",
                body: "Our crew comes from Finland and Sweden. Measured, scheduled and finished properly — the same exacting standard on every single visit.",
              },
              {
                icon: Sun,
                title: "Care-free ownership",
                body: "You enjoy the Costa del Sol; we handle the rest. No chasing trades, no surprise calls — just a home that's always ready when you arrive.",
              },
              {
                icon: TrendingUp,
                title: "Value that stays up",
                body: "A documented home is worth more. Your Property Vault holds the full history of services, repairs and renovations — solid proof of care when it's time to sell.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="rounded-[1.5rem] border border-deep/15 bg-sunlit p-7">
                  <span className="grid size-11 place-items-center rounded-full bg-coral/15">
                    <Icon className="size-5 text-coral" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold md:text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-deep/65">{pillar.body}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={item.featured ? "editorial-package editorial-package-featured" : "editorial-package"}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="section-label opacity-60">{item.number}</span>
                    {item.featured && <span className="featured-tag">Most popular</span>}
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-base font-semibold text-coral">{item.lead}</p>
                  <p className="mt-6 flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase tracking-wide opacity-55">From</span>
                    <span className="font-display text-4xl font-semibold">€{item.price}.00</span>
                    <span className="text-sm opacity-55">/ month</span>
                  </p>
                  <p className="mt-4 leading-relaxed opacity-65">{item.detail}</p>
                  <ul className="mt-8 space-y-4 text-sm">
                    {item.items.map((point) =>
                      point.perk ? (
                        <li key={point.title} className="flex gap-3 rounded-2xl bg-coral/12 p-4">
                          <Smartphone className="mt-0.5 size-5 shrink-0 text-coral" aria-hidden="true" />
                          <span>
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="font-bold">{point.title}</span>
                              <span className="rounded-full bg-coral px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-sunlit">Free</span>
                            </span>
                            <span className="mt-1 block leading-relaxed opacity-75">{point.body}</span>
                          </span>
                        </li>
                      ) : (
                        <li key={point.title} className="flex gap-3 border-t border-current/10 pt-4">
                          <Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                          <span>
                            <span className="font-bold">{point.title}</span>
                            <span className="opacity-70"> — {point.body}</span>
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={() => setBuilderPlan(item.key)}
                  className={item.featured ? "solid-button solid-button-coral mt-10" : "solid-button solid-button-dark mt-10"}
                >
                  Build my bespoke plan <ArrowRight aria-hidden="true" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-6 rounded-[2rem] bg-deep p-8 text-sunlit md:flex-row md:items-center md:p-10">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-coral" aria-hidden="true">
              <Smartphone className="size-7 text-sunlit" />
            </span>
            <div>
              <p className="section-label text-coral">Included free with every plan</p>
              <h3 className="mt-2 max-w-[28ch] font-display text-2xl font-semibold leading-tight md:text-3xl">Your Property Vault — a lifetime history of your home, saved forever.</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-sunlit/70">Every service, repair and renovation, time-stamped and photographed. It's proof of care you can hand straight to a future buyer — history that protects your home's value.</p>
            </div>
            <a href="#vault" className="solid-button solid-button-coral shrink-0 md:ml-auto">See it in action <ArrowRight aria-hidden="true" /></a>
          </div>

          <p className="mt-6 text-sm text-deep/60">
            Every plan is bespoke. Your indicative price reflects your property type, outdoor space, pool, maintenance hours and plan length. Not sure where you land?{" "}
            <a href="#contact" className="font-bold text-coral underline-offset-4 hover:underline">Talk to us and we&apos;ll work it out with you.</a>
          </p>
        </div>
      </section>

      <section id="how-we-work" className="scroll-mt-28 bg-olive/10 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-deep/15 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label text-coral">02 — How we work</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">A care plan in four simple steps.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-deep/65 lg:pb-2">
              Tell us about your property, choose the care it needs and we’ll build a bespoke monthly plan around it — then document every task on your phone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="how-step">
              <span className="section-label text-coral">Step 01</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Tell us about your home</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Flat, townhouse, villa or finca — with a small yard, a large garden, a pool or neither. We begin with the home you actually own.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Flat", "Townhouse", "Villa", "Finca"].map((name) => (
                  <a key={name} href="#packages" className="rounded-full border border-deep/20 px-3.5 py-1.5 text-xs font-bold transition-colors hover:border-coral hover:text-coral">{name}</a>
                ))}
              </div>
              <div className="mt-8 rounded-2xl border border-coral/40 bg-coral/10 p-4 lg:mt-auto">
                <MessageCircle className="size-5 text-coral" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold leading-snug">Not sure what plan is for you?</p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-coral">Talk to us now <ArrowRight className="size-4" aria-hidden="true" /></a>
              </div>
            </article>

            <article className="how-step">
              <span className="section-label text-coral">Step 02</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Choose the care you need</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Garden and pool care are both optional. Add either, both or neither, then choose the care level that feels right.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <span key={service.title} className="inline-flex items-center gap-2 rounded-full border border-deep/15 bg-sunlit px-3 py-2 text-xs font-bold">
                      <Icon className="size-4 shrink-0 text-coral" aria-hidden="true" />
                      {service.title}
                    </span>
                  );
                })}
              </div>
            </article>

            <article className="how-step">
              <span className="section-label text-coral">Step 03</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Add maintenance time</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Home Ready includes 2 hours and VIP Care includes 4. Add more in clear 2–6 hour monthly blocks whenever your property needs them.</p>
              <div className="mt-8 border-t border-deep/15 pt-6 lg:mt-auto">
                <p className="text-xs font-bold uppercase tracking-wide text-deep/50">Extra hours per time slot</p>
                <div className="mt-4 grid grid-cols-5 gap-2" aria-hidden="true">
                  {[{ h: 2, p: "38%" }, { h: 3, p: "52%" }, { h: 4, p: "66%" }, { h: 5, p: "82%" }, { h: 6, p: "100%", max: true }].map(({ h, p, max }) => (
                    <div key={h} className="text-center">
                      <div className="relative h-24 w-full">
                        <div className={`absolute bottom-0 w-full rounded-t-full ${max ? "bg-coral" : "bg-olive/40"}`} style={{ height: p }} />
                      </div>
                      <span className="mt-2 block text-xs font-bold">{h}h</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 flex items-baseline justify-between text-[0.65rem] font-bold uppercase tracking-wide">
                  <span className="text-deep/45">Min 2h</span>
                   <span className="text-coral">Up to 6 extra hours</span>
                </p>
              </div>
            </article>

            <article className="how-step how-step-app">
              <span className="section-label text-coral">Step 04</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Follow it all from your phone — Simple!</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Download the app and watch the progress of every task, for the lifetime of your home — each visit documented, right in your pocket.</p>
              <div className="mt-6 flex items-center gap-3 lg:mt-auto">
                <Smartphone className="size-10 shrink-0 text-olive" aria-hidden="true" />
                <a href="#vault" className="solid-button solid-button-coral text-xs">Download the app</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-12">
            <p className="section-label text-coral">03 — Book one service</p>
            <h2 className="mt-5 max-w-[11ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Need just one thing? We do that too.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-deep/65">Every service can stand alone or become part of your care plan.</p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-bold text-coral">Discuss what you need <ArrowRight className="size-4" aria-hidden="true" /></a>
          </div>
          <div className="border-t border-deep/15">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a key={service.title} href="#contact" className="service-row group">
                  <span className="hidden text-xs font-bold text-coral sm:block">0{index + 1}</span>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-olive/15 sm:size-12"><Icon className="size-5" aria-hidden="true" /></span>
                  <span>
                    <strong className="font-display text-xl font-semibold md:text-2xl">{service.title}</strong>
                    <span className="mt-1 block text-sm text-deep/60">{service.description}</span>
                  </span>
                  <ArrowRight className="ml-auto size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-28 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-10">
          <p className="section-label text-coral">04 — Word of mouth</p>
          <h2 className="mt-3 font-display text-xl font-semibold leading-snug md:text-2xl">What our clients say about our top employees.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <figure className="flex flex-col rounded-2xl border border-deep/10 bg-white p-5">
              <div className="flex items-center gap-3">
                <img
                  src={antonio}
                  alt="Antonio, garden and pool specialist at SolidMaint"
                  loading="lazy"
                  width={96}
                  height={96}
                  className="size-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold">Antonio</p>
                  <p className="text-[0.7rem] font-bold uppercase text-coral">Garden &amp; pool care</p>
                </div>
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-deep/70">“Antonio was on time, polite and very helpful — and the pool has never looked better.”</blockquote>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="size-3 fill-coral text-coral" aria-hidden="true" />
                  ))}
                </span>
                <p className="text-xs font-bold text-deep/70">Paul W. · Marbella</p>
              </div>
            </figure>
            {[
              {
                initials: "MI",
                name: "Mikko",
                role: "Handyman & repairs",
                quote: "Mikko talked us through everything in plain English, fixed it the same week and left the place spotless.",
                author: "Emma R. · Sotogrande",
              },
              {
                initials: "JO",
                name: "Jonas",
                role: "Electrical services",
                quote: "Jonas found and sorted an electrical fault two other companies missed. Proper craftsmanship.",
                author: "David & Helen · Estepona",
              },
              {
                initials: "SM",
                name: "The whole crew",
                role: "Complete care plans",
                quote: "One team, one plan, no chasing anyone. It was the easiest decision we have made about our home.",
                author: "Claire T. · Benahavís",
              },
            ].map(({ initials, name, role, quote, author }) => (
              <figure key={name} className="flex flex-col rounded-2xl border border-deep/10 bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-coral/15 font-display text-xs font-bold text-coral">{initials}</span>
                  <div>
                    <p className="font-display text-sm font-semibold">{name}</p>
                    <p className="text-[0.7rem] font-bold uppercase text-coral">{role}</p>
                  </div>
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-deep/70">“{quote}”</blockquote>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="size-3 fill-coral text-coral" aria-hidden="true" />
                    ))}
                  </span>
                  <p className="text-xs font-bold text-deep/70">{author}</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="smart-enquiry" className="relative overflow-hidden bg-deep py-20 text-sunlit md:py-28">
        <img
          src={enquiryBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1920}
          height={1024}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/88" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-10">
          <MessageCircle className="mx-auto size-10 text-coral md:size-12" aria-hidden="true" />
          <p className="section-label mt-8 text-[0.85rem] text-coral md:text-[1rem]">05 — A smarter first conversation</p>
          <h2 className="mx-auto mt-5 font-display text-5xl font-semibold leading-tight text-sunlit md:text-7xl"><span className="block">Tell us who you are.</span> <span className="block">We’ll ask what matters.</span></h2>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-relaxed text-sunlit md:text-2xl">Our guided chat shapes the questions around your property and priorities, so your first recommendation is useful—not generic.</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Overseas owner", "Resident owner", "Property manager", "Buying a home"].map((audience) => (
              <a key={audience} href="#contact" className="audience-pill px-6 py-3.5 text-base md:text-lg">{audience}<ArrowRight className="size-5" aria-hidden="true" /></a>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="scroll-mt-28 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12">
          <figure className="relative lg:col-span-7">
            <video
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={appProcessPoster.url}
              aria-label="How every visit is recorded in your SolidMaint Property Vault"
            >
              <source src={appProcessVideo.url} type="video/mp4" />
            </video>
            <figcaption className="absolute -bottom-5 right-3 grid size-28 place-items-center bg-deep p-4 text-center text-sunlit sm:size-36 md:-bottom-7 md:-right-7 md:size-48">
              <span><strong className="block font-display text-2xl text-coral sm:text-4xl">100%</strong><span className="mt-1 block text-[0.6rem] font-bold uppercase sm:mt-2 sm:text-xs">visible from anywhere</span></span>
            </figcaption>
          </figure>
          <div className="pt-10 lg:col-span-5 lg:pl-12 lg:pt-0">
            <p className="section-label text-coral">06 — Your Property Vault</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral px-4 py-1.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-sunlit">
              <Check className="size-3.5" aria-hidden="true" /> Free with every care plan
            </span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Every visit, clearly documented.</h2>
            <p className="mt-6 text-lg leading-relaxed text-deep/65">Yours free, on every plan. Follow the care of your home from anywhere — each visit is verified, photographed and filed with its report and invoice.</p>
            <div className="mt-9 space-y-5">
              {[
                { icon: Clock3, label: "Verified time on site" },
                { icon: ShieldCheck, label: "Time-stamped photos" },
                { icon: FileText, label: "Reports and invoices" },
              ].map(({ icon: Icon, label }, index) => (
                <div key={label} className="flex items-center gap-4 border-b border-deep/15 pb-5">
                  <Icon className="size-5 text-coral" aria-hidden="true" />
                  <span className="font-bold">{label}</span>
                  <span className="ml-auto text-xs text-deep/40">0{index + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-9"><StoreButtons /></div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-deep py-20 text-sunlit md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">07 — In their words</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <figure className="overflow-hidden rounded-[2rem]">
              <img src={testimonialStill} alt="SolidMaint customer testimonial video" loading="lazy" width="1600" height="912" className="aspect-video size-full object-cover" />
            </figure>
            <div className="flex flex-col justify-center">
              <blockquote className="font-display text-3xl font-medium leading-snug md:text-4xl">“Excellent service. Arrived exactly on time and carried out the repair as required.”</blockquote>
              <p className="mt-6 text-sm font-bold uppercase text-coral">Verified customer</p>
              <blockquote className="mt-10 border-t border-sunlit/20 pt-8 text-lg text-sunlit/70">“Antonio was on time, polite and very helpful.” <span className="mt-3 block text-sm font-bold text-sunlit">Paul W. · Marbella</span></blockquote>
            </div>
          </div>
        </div>
      </section>


      <section id="coverage" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="section-label text-coral">08 — Local coverage</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold leading-tight md:text-6xl">From Benalmádena to Sotogrande.</h2>
              <p className="mt-5 max-w-md text-lg font-semibold leading-relaxed text-deep/65">Currently serving the Costa del Sol, from Benalmádena to Sotogrande.</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-deep/15">
              {["Mijas", "Benalmádena", "Marbella", "Benahavís", "Estepona", "Sotogrande"].map((place) => (
                <span key={place} className="flex items-center gap-3 bg-sunlit p-5 font-bold md:p-7"><MapPin className="size-4 text-coral" aria-hidden="true" />{place}</span>
              ))}
            </div>
          </div>

          <div id="out-of-area" className="scroll-mt-28 mt-12 rounded-[1.75rem] border border-coral/40 bg-coral/10 p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              <div>
                <p className="section-label text-coral">Coming to you soon</p>
                <h3 className="mt-4 max-w-[18ch] font-display text-3xl font-semibold leading-tight md:text-4xl">Not in our coverage area yet?</h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-deep/70">
                  We are expanding along the coast town by town. Leave your details and you will be the first to know when SolidMaint reaches your area — and we will hold a place for your home in the queue.
                </p>
              </div>
              <form
                className="grid gap-5 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  const body = [...data.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
                  window.location.href = `mailto:hello@solidmaint.com?subject=${encodeURIComponent(
                    "Out-of-area enquiry — coming to you soon",
                  )}&body=${encodeURIComponent(body)}`;
                }}
              >
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Your name
                  <input
                    name="Name"
                    required
                    maxLength={100}
                    className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Email
                  <input
                    name="Email"
                    type="email"
                    required
                    maxLength={255}
                    className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Phone (optional)
                  <input
                    name="Phone"
                    type="tel"
                    maxLength={30}
                    className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm font-semibold">
                  Your town or area
                  <input
                    name="Area"
                    required
                    maxLength={100}
                    placeholder="e.g. Fuengirola, La Cala…"
                    className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal placeholder:text-deep/40"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="solid-button solid-button-coral">
                    Keep me posted
                  </button>
                </div>
              </form>
            </div>
          </div>


        </div>
      </section>

      <InstagramFeed />





      <SiteFooter />

      <WhatsAppButton />
      <MarenaBanner />
    </main>
  );
}