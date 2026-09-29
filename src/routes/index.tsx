import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
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
import antonioAsset from "@/assets/antonio.jpg.asset.json";
import joseAntonio from "@/assets/jose-antonio.jpg";
import samuliAsset from "@/assets/samuli.jpg.asset.json";
import vaultWoman from "@/assets/vault-woman-phone.jpg";

const antonio = antonioAsset.url;
const samuli = samuliAsset.url;
import jonas from "@/assets/jonas.jpg";
import testimonialStill from "@/assets/testimonial-still.jpg";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { InstagramFeed } from "@/components/InstagramFeed";
import { MarenaBanner } from "@/components/MarenaBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PlanBuilder } from "@/components/PlanBuilder";
import { SmartEnquiry } from "@/components/SmartEnquiry";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Property Maintenance Costa del Sol — Marbella & Estepona | SolidMaint" },
      {
        name: "description",
        content:
          "Property maintenance on the Costa del Sol — garden, pool, AC and home care in Marbella, Estepona and from Benalmádena to Sotogrande, every visit documented.",
      },
      { property: "og:title", content: "SolidMaint | Costa del Sol Property Care" },
      {
        property: "og:description",
        content: "Your Costa del Sol home cared for, checked and documented while you are away.",
      },
      { property: "og:url", content: "https://maint-shine-boost.lovable.app/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://maint-shine-boost.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "SolidMaint",
          url: "https://maint-shine-boost.lovable.app/",
          telephone: "+34 951 798 899",
          email: "info@solidmaint.com",
          description:
            "Property maintenance on the Costa del Sol: garden, pool, AC, handyman, plumbing and electrical care for homes in Marbella, Estepona, Benalmádena and Sotogrande, with every visit documented in a free Property Vault.",
          address: { "@type": "PostalAddress", addressLocality: "Marbella", addressRegion: "Málaga", addressCountry: "ES" },
          areaServed: ["Costa del Sol", "Marbella", "Estepona", "Benalmádena", "Fuengirola", "Mijas", "Benahavís", "Casares", "Manilva", "Sotogrande"].map((name) => ({ "@type": "Place", name })),
          openingHours: "Mo-Fr 09:00-18:00",
          sameAs: ["https://www.facebook.com/solidmaint", "https://instagram.com/solidmaint", "https://www.linkedin.com/company/solidmaint"],
        }),
      },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "Garden Maintenance",
    description: "Scheduled care for lawns, borders and terraces, all year.",
    icon: Leaf,
    detail:
      "Lawns mown and edged, borders tidied and beds weeded — then a soil-moisture check so nothing quietly dries out. You come home to a garden that simply looks after itself.",
    lead: { name: "Jose Antonio", role: "Garden care lead", photo: joseAntonio },
  },
  {
    title: "Pool Maintenance",
    description: "Cleaning, water testing and equipment checks, done regularly.",
    icon: Waves,
    detail:
      "Skimming, brushing and basket-emptying on a schedule, with the water tested and balanced on every visit. Swim-ready, whenever you are.",
    lead: { name: "Antonio", role: "Pool care lead", photo: antonio },
  },
  {
    title: "AC Services",
    description: "Filter cleaning, performance checks and seasonal servicing.",
    icon: Wind,
    detail:
      "Filters cleaned, systems checked and the cooling tuned before the heat arrives. Air conditioning that is ready long before you need it.",
    lead: { name: "Antonio", role: "AC specialist lead", photo: antonio },
  },
  {
    title: "Handyman & Repairs",
    description: "Small fixes, fitting work and odd jobs handled reliably.",
    icon: Wrench,
    detail:
      "That list of little jobs — a sticky door, a shelf, a blind — done properly in one tidy visit. No job too small, and no chasing anyone.",
    lead: { name: "Samuli", role: "Handyman lead", photo: samuli },
  },
  {
    title: "Electrical Services",
    description: "Safe fault-finding, installations and repairs.",
    icon: Zap,
    detail:
      "Safe fault-finding, new fittings and lighting installed with care. If something is not quite right, we find it and put it right.",
    lead: { name: "Jonas Berg", role: "Electrical lead", photo: jonas },
  },
  {
    title: "Plumbing Services",
    description: "Leaks, taps, drainage and bathroom maintenance.",
    icon: Droplets,
    detail:
      "Drips, drains, taps and bathrooms sorted before small problems grow. Quiet, tidy work that keeps the water exactly where it belongs.",
    lead: { name: "Samuli", role: "Plumbing lead", photo: samuli },
  },
];

function ServiceAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const opening = openIndex !== index;
    setOpenIndex(opening ? index : null);
    if (opening) {
      // Wait for the expand animation, then bring the opened row into view
      window.setTimeout(() => {
        rowRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 320);
    }
  };

  return (
    <div className="border-t border-deep/15">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isOpen = openIndex === index;
        return (
          <div key={service.title} ref={(el) => { rowRefs.current[index] = el; }} className="scroll-mt-28">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`service-panel-${index}`}
              onClick={() => toggle(index)}
              className="service-row group w-full cursor-pointer text-left"
            >
              <span className="hidden text-xs font-bold text-coral sm:block">0{index + 1}</span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-olive/15 sm:size-12"><Icon className="size-5" aria-hidden="true" /></span>
              <span>
                <strong className="font-display text-xl font-semibold md:text-2xl">{service.title}</strong>
                <span className="mt-1 block text-sm text-ink/60">{service.description}</span>
              </span>
              <ChevronDown
                className={`ml-auto size-5 shrink-0 text-coral transition-transform duration-300 group-hover:translate-y-0.5 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`service-panel-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-5 px-0 pt-1 pb-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-4">
                  <span className="hidden sm:block" aria-hidden="true" />
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <img
                      src={service.lead.photo}
                      alt={service.lead.name}
                      loading="lazy"
                      width={96}
                      height={96}
                      className="size-16 shrink-0 rounded-full object-cover sm:size-20"
                    />
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-widest text-coral">
                        {service.lead.name} · {service.lead.role}
                      </p>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{service.detail}</p>
                      <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-coral hover:underline">
                        Book this service <ArrowRight className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


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
  const [builderOpen, setBuilderOpen] = useState(false);

  return (
    <main id="top" className="overflow-hidden bg-sunlit text-deep">
      {builderOpen && <PlanBuilder onClose={() => setBuilderOpen(false)} />}
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
          <p className="section-label text-xs text-sunlit md:text-sm">Currently serving the Costa del Sol · Every visit documented</p>
          <TypewriterHeading text="Let’s build the right care plan for your home." />
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sunlit/90 md:text-xl">
            One dependable Maintenance Team for your garden, pool, air conditioning and home — with a clear record of every visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#builder" className="solid-button solid-button-coral">Build my home plan now <ArrowDownRight aria-hidden="true" /></a>
            <a href="#services" className="solid-button solid-button-white">Need just one thing? <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 pt-10 pb-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-deep/15 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label text-coral">01 — The benefits</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">You enjoy the home. We handle the rest.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink/65 lg:pb-2">
              Our care for your property is built on Nordic precision. Garden and pool care, AC servicing and
              hands-on maintenance hours — every plan tailored to your property.{" "}
              <strong className="font-bold text-ink">Your plan covers only what your property actually needs</strong>,
              and your free Property Vault keeps it all in view — every visit, every photo, every report, wherever
              you are.
            </p>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-5 border-b border-deep/10 pb-10 md:grid-cols-3">
            {[
              {
                icon: Compass,
                title: "Nordic precision",
                body: "Measured, scheduled and finished properly — the same exacting standard on every single visit.",
              },
              {
                icon: Sun,
                title: "You enjoy the home",
                body: "No chasing trades, no surprise calls — just a home that's always ready when you arrive.",
              },
              {
                icon: TrendingUp,
                title: "Value that stays up",
                body: "Every service documented in your Property Vault — proof of care that protects your home's value.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex items-start gap-3">
                  <Icon className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-deep">{pillar.title}</h3>
                    <p className="mt-1 text-[0.8rem] leading-relaxed text-ink/60">{pillar.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="builder" className="mt-10 scroll-mt-28 overflow-hidden rounded-[2rem] border border-deep/15 bg-deep text-sunlit">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
              <div>
                <p className="section-label text-coral">Bespoke plans</p>
                <h3 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">Your home. Your plan.</h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-sunlit/80">
                  No fixed bundles — and no paying for what your home doesn’t need. In about a minute we build one plan
                  around your actual home: the outdoor care, the extra services and the hands-on hours you choose. Nothing else.
                </p>
                <ul className="mt-7 space-y-3 text-sm">
                  {[
                    "Garden, pool and home care — only what your property actually needs",
                    "Tick the extra services you want, from AC servicing to solar panel cleaning",
                    "Choose your monthly maintenance hours — unused hours simply roll over",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                      <span className="text-sunlit/85">{point}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" onClick={() => setBuilderOpen(true)} className="solid-button solid-button-coral mt-9">
                  Build my home plan now <ArrowRight aria-hidden="true" />
                </button>
                <p className="mt-4 text-xs text-sunlit/60">Free Property Vault with every plan · Indicative pricing until we’ve viewed your property</p>
              </div>
              <div className="rounded-[1.5rem] bg-sunlit p-6 text-deep md:p-8">
                <p className="section-label text-coral">For example — a villa plan</p>
                <ul className="mt-4 divide-y divide-deep/10 text-sm">
                  {[
                    ["Care plan base", "€89.00"],
                    ["Villa", "+ €70.00"],
                    ["Family garden", "+ €80.00"],
                    ["Standard pool", "+ €60.00"],
                    ["AC seasonal service · 1 hour", "€45.00"],
                    ["3 maintenance hours · €45/hour", "€135.00"],
                  ].map(([label, price]) => (
                    <li key={label} className="flex items-center justify-between gap-4 py-2.5">
                      <span>{label}</span>
                      <span className="font-semibold">{price}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-end justify-between gap-4 border-t border-deep/15 pt-4">
                  <span className="font-display text-2xl font-semibold">€479.00<span className="ml-1 text-sm font-normal text-ink/55">/ month</span></span>
                  <span className="rounded-full bg-coral px-3 py-1 text-[0.6rem] font-extrabold uppercase tracking-wider text-sunlit">Indicative</span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink/55">Every plan is different — yours is built in the builder, around your home.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-deep/15 bg-sunlit md:grid-cols-[minmax(0,1fr)_20rem] lg:grid-cols-[minmax(0,1fr)_23rem]">
            <div className="p-8 md:p-10">
              <p className="section-label text-coral">Included free with every plan</p>
              <h3 className="mt-2 max-w-[28ch] font-display text-2xl font-semibold leading-tight md:text-3xl">Your Property Vault — a lifetime history of your home, saved forever.</h3>
              <p className="mt-3 max-w-xl leading-relaxed text-ink/70">Every service, repair and renovation, time-stamped and photographed. It's proof of care you can hand straight to a future buyer — history that protects your home's value.</p>
              <a href="#vault" className="solid-button solid-button-coral mt-7">See it in action <ArrowRight aria-hidden="true" /></a>
            </div>
            <div className="relative min-h-[15rem] md:min-h-full">
              <img
                src={vaultWoman}
                alt="A happy homeowner on her terrace, following every visit in the SolidMaint Property Vault on her phone"
                loading="lazy"
                width={1024}
                height={1280}
                className="absolute inset-0 size-full object-cover object-top"
              />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-sunlit/95 px-4 py-2 text-xs font-bold text-deep shadow-sm">
                <Smartphone className="size-4 text-coral" aria-hidden="true" /> Your home, live on your phone
              </span>
            </div>
          </div>

          <p className="mt-6 text-sm text-ink/60">
            Every plan is bespoke. Your indicative price reflects your property type, outdoor space, pool, extra
            services and maintenance hours — and there&apos;s no upfront payment: sign up for your services, or simply try
            us out and we&apos;ll bill you after the service. Not sure where you land?
          </p>
          <p className="mt-2 text-sm text-ink/60">
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
            <p className="max-w-xl text-lg leading-relaxed text-ink/65 lg:pb-2">
              Tell us about your property, choose the care it needs and we’ll build a bespoke monthly plan around it — then document every task on your phone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="how-step">
              <span className="section-label text-coral">Step 01</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Tell us about your home</h3>
              <p className="mt-4 leading-relaxed text-ink/65">Flat, townhouse, villa, finca or estate — with a small yard, a large garden, a pool or neither. We begin with the home you actually own.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Flat", "Townhouse", "Villa", "Finca / Estate"].map((name) => (
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
              <p className="mt-4 leading-relaxed text-ink/65">Garden and pool care are both optional — add either, both or neither, then tick the extra services your home needs.</p>
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
              <p className="mt-4 leading-relaxed text-ink/65">Choose exactly how many hands-on hours your home needs each month — from 0 to 12 at one clear rate of €45 per hour. Unused hours simply roll over to the next month.</p>
              <div className="mt-8 border-t border-deep/15 pt-6 lg:mt-auto">
                <p className="text-xs font-bold uppercase tracking-wide text-ink/50">Monthly maintenance hours</p>
                <div className="mt-4 grid grid-cols-5 gap-2" aria-hidden="true">
                  {[{ h: 1, p: "15%" }, { h: 3, p: "35%" }, { h: 6, p: "55%" }, { h: 9, p: "78%" }, { h: 12, p: "100%", max: true }].map(({ h, p, max }) => (
                    <div key={h} className="text-center">
                      <div className="relative h-24 w-full">
                        <div className={`absolute bottom-0 w-full rounded-t-full ${max ? "bg-coral" : "bg-olive/40"}`} style={{ height: p }} />
                      </div>
                      <span className="mt-2 block text-xs font-bold">{h}h</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 flex items-baseline justify-between text-[0.65rem] font-bold uppercase tracking-wide">
                  <span className="text-ink/45">From 1h</span>
                   <span className="text-coral">Up to 12 hours</span>
                </p>
              </div>
            </article>

            <article className="how-step how-step-app">
              <span className="section-label text-coral">Step 04</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Follow it all from your phone — Simple!</h3>
              <p className="mt-4 leading-relaxed text-ink/65">Download the app and watch the progress of every task, for the lifetime of your home — each visit documented, right in your pocket.</p>
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
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">Every service can stand alone or become part of your care plan.</p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-bold text-coral">Discuss what you need <ArrowRight className="size-4" aria-hidden="true" /></a>
          </div>
          <ServiceAccordion />
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
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">“Antonio was on time, polite and very helpful — and the pool has never looked better.”</blockquote>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="size-3 fill-coral text-coral" aria-hidden="true" />
                  ))}
                </span>
                <p className="text-xs font-bold text-ink/70">Paul W. · Marbella</p>
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
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/70">“{quote}”</blockquote>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="flex items-center gap-0.5" aria-label="Rated 5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star key={star} className="size-3 fill-coral text-coral" aria-hidden="true" />
                    ))}
                  </span>
                  <p className="text-xs font-bold text-ink/70">{author}</p>
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
          <SmartEnquiry />
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
            <p className="mt-6 text-lg leading-relaxed text-ink/65">Yours free, on every plan. Follow the care of your home from anywhere — each visit is verified, photographed and filed with its report and invoice.</p>
            <div className="mt-9 space-y-5">
              {[
                { icon: Clock3, label: "Verified time on site" },
                { icon: ShieldCheck, label: "Time-stamped photos" },
                { icon: FileText, label: "Reports and invoices" },
              ].map(({ icon: Icon, label }, index) => (
                <div key={label} className="flex items-center gap-4 border-b border-deep/15 pb-5">
                  <Icon className="size-5 text-coral" aria-hidden="true" />
                  <span className="font-bold">{label}</span>
                  <span className="ml-auto text-xs text-ink/40">0{index + 1}</span>
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
              <p className="mt-5 max-w-md text-lg font-semibold leading-relaxed text-ink/65">Currently serving the Costa del Sol, from Benalmádena to Sotogrande.</p>
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
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
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
                    className="rounded-md border border-deep/20 bg-sunlit px-4 py-3 text-base font-normal placeholder:text-ink/40"
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