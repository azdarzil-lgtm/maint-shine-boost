import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  FileText,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Waves,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

import appProcessPoster from "@/assets/app-process-poster.jpg.asset.json";
import appProcessVideo from "@/assets/solidmaint-app-process.mp4.asset.json";
import gardenVideo from "@/assets/garden-maintenance.mp4.asset.json";
import gardenVideoPoster from "@/assets/garden-maintenance-poster.jpg.asset.json";
import logoAsset from "@/assets/solidmaint-logo.png.asset.json";
import testimonialStill from "@/assets/testimonial-still.jpg";
import { MarenaBanner } from "@/components/MarenaBanner";

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

const packages = [
  {
    number: "01",
    name: "Outdoor Care",
    lead: "Garden + pool",
    detail: "For owners who want outdoor areas kept inviting, healthy and ready between visits.",
    items: ["Scheduled garden care", "Pool cleaning and checks", "Visit photos and report"],
  },
  {
    number: "02",
    name: "Home Ready",
    lead: "Garden + pool + AC",
    detail: "Our core all-year bundle for a home that should feel ready whenever you arrive.",
    items: ["Everything in Outdoor Care", "Air-conditioning maintenance", "Your digital Property Vault"],
    featured: true,
  },
  {
    number: "03",
    name: "Complete Care",
    lead: "Whole-home support",
    detail: "A tailored plan for villas and homes needing broader, hands-on maintenance support.",
    items: ["Garden, pool and AC care", "Handyman and repair support", "Electrical and plumbing support"],
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

const faqs = [
  {
    question: "What is included in a SolidMaint care plan?",
    answer:
      "Plans are tailored around your property and can combine recurring garden, pool and air-conditioning care. Every visit is documented in your Property Vault.",
  },
  {
    question: "How do I know what happened during a visit?",
    answer: "Technicians check in on arrival. Time on site, task photos, reports and invoices are stored against your property.",
  },
  {
    question: "Can I add repairs when something comes up?",
    answer: "Yes. Handyman, electrical and plumbing work can be requested alongside your recurring maintenance plan.",
  },
  {
    question: "Which areas do you cover?",
    answer: "SolidMaint serves homes along the Costa del Sol, from Benalmádena to Sotogrande.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="SolidMaint home">
      <img src={logoAsset.url} alt="" className="size-10 rounded-md" width="40" height="40" />
      <span className={`text-sm font-extrabold uppercase ${light ? "text-sunlit" : "text-deep"}`}>SolidMaint</span>
    </a>
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

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-sunlit text-deep">
      <header className="bg-sunlit">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Brand />
          <div className="hidden items-center gap-8 text-sm font-bold uppercase lg:flex">
            <a href="#packages" className="nav-link">Packages</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#vault" className="nav-link">Property Vault</a>
            <a href="#proof" className="nav-link">Reviews</a>
            <a href="#coverage" className="nav-link">Coverage</a>
          </div>
          <a href="#contact" className="solid-button solid-button-coral shadow-[0_8px_24px_-10px_oklch(0.31_0.052_174/0.5)]">Enquire</a>
        </nav>

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-14 text-center md:px-10 md:pb-24 md:pt-24">
          <p className="section-label text-coral">Benalmádena → Sotogrande · Every visit documented</p>
          <h1 className="mx-auto mt-6 max-w-[15ch] font-display text-5xl font-semibold leading-[1.02] sm:text-6xl md:text-8xl">
            Your coast home, <span className="text-coral">effortlessly</span> maintained.
          </h1>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-7 md:flex-row">
            <p className="max-w-md text-base leading-relaxed text-deep/68 md:text-right md:text-lg">
              One dependable team for your garden, pool, air conditioning and home—with a clear record of every visit.
            </p>
            <span className="hidden h-px w-16 bg-deep/20 md:block" />
            <a href="#packages" className="solid-button solid-button-dark shrink-0">Find your care plan <ArrowDownRight aria-hidden="true" /></a>
          </div>

          <figure className="relative mt-16 overflow-hidden rounded-[2rem] md:mt-24">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={gardenVideoPoster.url}
              aria-label="SolidMaint garden maintenance team at work"
            >
              <source src={gardenVideo.url} type="video/mp4" />
            </video>
            <figcaption className="absolute bottom-4 left-4 bg-sunlit px-4 py-3 text-left text-xs font-bold uppercase text-deep md:bottom-7 md:left-7">
              Property care, carried out properly
            </figcaption>
          </figure>
        </div>
      </header>

      <section id="packages" className="scroll-mt-8 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-deep/15 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label text-coral">01 — Care packages</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Care that fits the way you use your home.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-deep/65 lg:pb-2">
              Start with a practical bundle, then tailor the visit rhythm and exact work to your property. Plans start from €89/month, IVA included.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={item.featured ? "editorial-package editorial-package-featured" : "editorial-package"}>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="section-label opacity-60">{item.number}</span>
                    {item.featured && <span className="featured-tag">Most complete</span>}
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-semibold">{item.name}</h3>
                  <p className="mt-2 text-base font-semibold text-coral">{item.lead}</p>
                  <p className="mt-6 leading-relaxed opacity-65">{item.detail}</p>
                  <ul className="mt-8 space-y-4 text-sm">
                    {item.items.map((point) => (
                      <li key={point} className="flex gap-3 border-t border-current/10 pt-4">
                        <Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className={item.featured ? "solid-button solid-button-coral mt-10" : "solid-button solid-button-dark mt-10"}>Request a tailored quote</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-8 bg-background py-20 md:py-32">
        <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:px-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-12">
            <p className="section-label text-coral">02 — Book one service</p>
            <h2 className="mt-5 max-w-[11ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Need just one thing? We do that too.</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-deep/65">Every service can stand alone or become part of your care plan.</p>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-bold text-coral">Discuss what you need <ArrowRight className="size-4" aria-hidden="true" /></a>
          </div>
          <div className="border-t border-deep/15">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a key={service.title} href="#contact" className="service-row group">
                  <span className="text-xs font-bold text-coral">0{index + 1}</span>
                  <span className="grid size-12 place-items-center rounded-full bg-olive/15"><Icon className="size-5" aria-hidden="true" /></span>
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

      <section id="smart-enquiry" className="bg-coral py-20 text-deep md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
          <MessageCircle className="mx-auto size-8" aria-hidden="true" />
          <p className="section-label mt-7">03 — A smarter first conversation</p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Tell us who you are. We’ll ask what matters.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sunlit">Our guided chat shapes the questions around your property and priorities, so your first recommendation is useful—not generic.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Overseas owner", "Resident owner", "Property manager", "Buying a home"].map((audience) => (
              <a key={audience} href="#contact" className="audience-pill">{audience}<ArrowRight className="size-4" aria-hidden="true" /></a>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="scroll-mt-8 py-20 md:py-32">
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
            <figcaption className="absolute -bottom-7 right-5 grid size-36 place-items-center bg-deep p-5 text-center text-sunlit md:-right-7 md:size-48">
              <span><strong className="block font-display text-4xl text-coral">100%</strong><span className="mt-2 block text-xs font-bold uppercase">visible from anywhere</span></span>
            </figcaption>
          </figure>
          <div className="pt-10 lg:col-span-5 lg:pl-12 lg:pt-0">
            <p className="section-label text-coral">04 — Your Property Vault</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">Every visit, clearly documented.</h2>
            <p className="mt-6 text-lg leading-relaxed text-deep/65">Follow the care of your home from anywhere. Each visit is verified, photographed and filed with its report and invoice.</p>
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

      <section id="proof" className="bg-deep py-20 text-sunlit md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">05 — In their words</p>
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
              <p className="section-label text-coral">06 — Local coverage</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-4xl font-semibold leading-tight md:text-6xl">From Benalmádena to Sotogrande.</h2>
            </div>
            <div className="grid grid-cols-2 gap-px bg-deep/15">
              {["Mijas", "Benalmádena", "Marbella", "Benahavís", "Estepona", "Sotogrande"].map((place) => (
                <span key={place} className="flex items-center gap-3 bg-sunlit p-5 font-bold md:p-7"><MapPin className="size-4 text-coral" aria-hidden="true" />{place}</span>
              ))}
            </div>
          </div>

          <div className="mt-20 grid gap-10 border-t border-deep/15 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
            <h2 className="max-w-[10ch] font-display text-4xl font-semibold">Clear answers before we begin.</h2>
            <div className="divide-y divide-deep/15 border-y border-deep/15">
              {faqs.map((faq) => (
                <details key={faq.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-bold">{faq.question}<ChevronDown className="size-5 shrink-0 text-coral transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
                  <p className="max-w-2xl pb-6 leading-relaxed text-deep/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-deep py-20 text-sunlit md:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
          <p className="section-label text-coral">Your home, handled</p>
          <h2 className="mx-auto mt-5 max-w-[15ch] font-display text-5xl font-semibold leading-tight md:text-7xl">Let’s build the right care plan for your property.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/65">Tell us where your home is and what needs care. The Marbella team will reply within one working day.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:info@solidmaint.com" className="solid-button solid-button-coral">Start your enquiry <ArrowRight aria-hidden="true" /></a>
            <a href="tel:+34951798899" className="solid-button solid-button-outline">Call +34 951 798 899</a>
          </div>
          <div className="mt-20 flex flex-col gap-5 border-t border-sunlit/15 pt-7 text-sm text-sunlit/55 sm:flex-row sm:items-center sm:justify-between">
            <Brand light />
            <p>Marbella, Benalmádena · Mon–Fri, 09:00–18:00 CET</p>
            <p>© 2026 SolidMaint</p>
          </div>
        </div>
      </footer>

      <MarenaBanner />
    </main>
  );
}