import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  FileText,
  MapPin,
  MessageCircle,
  Play,
  ShieldCheck,
} from "lucide-react";

import appProcessPoster from "@/assets/app-process-poster.jpg.asset.json";
import appProcessVideo from "@/assets/solidmaint-app-process.mp4.asset.json";
import gardenVideo from "@/assets/garden-maintenance.mp4.asset.json";
import gardenVideoPoster from "@/assets/garden-maintenance-poster.jpg.asset.json";
import logoAsset from "@/assets/solidmaint-logo.png.asset.json";
import testimonialStill from "@/assets/testimonial-still.jpg";

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

const faqs = [
  {
    question: "What is included in a SolidMaint care plan?",
    answer:
      "Plans are tailored around your property and can combine recurring garden, pool and air-conditioning care. Every visit is documented in your Property Vault.",
  },
  {
    question: "How do I know what happened during a visit?",
    answer:
      "Technicians check in on arrival. Time on site, task photos, reports and invoices are stored against your property.",
  },
  {
    question: "Can I add repairs when something comes up?",
    answer:
      "Yes. Handyman, electrical and plumbing work can be requested alongside your recurring maintenance plan.",
  },
  {
    question: "Which areas do you cover?",
    answer: "SolidMaint serves homes along the Costa del Sol, from Benalmádena to Sotogrande.",
  },
];

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="SolidMaint home">
      <img src={logoAsset.url} alt="" className="size-10 rounded-md" width="40" height="40" />
      <span className="font-body text-sm font-extrabold uppercase text-sunlit">SolidMaint</span>
    </a>
  );
}

function Index() {
  return (
    <main id="top" className="overflow-hidden bg-sunlit text-deep">
      <header className="relative min-h-[680px] bg-deep text-sunlit md:min-h-[760px]">
        <video
          className="absolute inset-0 size-full object-cover"
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
        <div className="hero-shade absolute inset-0" />
        <div className="shear-panel pointer-events-none absolute -left-16 top-0 hidden h-full w-64 bg-coral/30 md:block" />

        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <Brand />
          <div className="hidden items-center gap-10 text-base font-bold uppercase tracking-wide text-sunlit/80 lg:flex">
            <a href="#packages" className="px-1 py-1 transition-colors hover:text-coral">Packages</a>
            <a href="#vault" className="px-1 py-1 transition-colors hover:text-coral">Property Vault</a>
            <a href="#proof" className="px-1 py-1 transition-colors hover:text-coral">Reviews</a>
            <a href="#coverage" className="px-1 py-1 transition-colors hover:text-coral">Coverage</a>
          </div>
          <a href="#contact" className="solid-button solid-button-coral text-sm shadow-[0_6px_20px_-4px_oklch(0.66_0.15_37/0.45)]">Enquire</a>
        </nav>

        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-7xl px-5 pb-12 md:px-10 md:pb-16">
          <p className="reveal section-label text-coral">Benalmádena → Sotogrande · Every visit documented</p>
          <h1 className="reveal mt-4 max-w-[17ch] font-display text-4xl font-bold leading-[1.04] text-sunlit sm:text-5xl md:text-7xl">
            Your coast home, kept brilliant while you’re away.
          </h1>
          <p className="reveal mt-5 max-w-xl text-base leading-relaxed text-sunlit/85 md:text-lg">
            Dependable care for your garden, pool and air conditioning—with verified visits and a clear record of every job.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-5">
            <a href="#packages" className="solid-button solid-button-coral">
              Explore care packages <ArrowDownRight aria-hidden="true" />
            </a>
            <span className="text-sm font-semibold text-sunlit/75">Plans from €89/month, IVA included</span>
          </div>
        </div>
      </header>

      <section id="packages" className="relative scroll-mt-8 py-20 md:py-28">
        <div className="shear-wash absolute -left-24 top-0 hidden h-full w-72 bg-sage/25 lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[0.75fr_2fr]">
          <div>
            <p className="section-label text-coral">01 — Care bundles</p>
            <h2 className="mt-4 max-w-[12ch] font-display text-4xl font-bold leading-tight md:text-5xl">
              One reliable team. The right level of care.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-deep/70">
              Start with a practical bundle, then tailor the visit rhythm and exact work to your property.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-bold text-coral hover:underline">
              Help me choose <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((item) => (
              <article key={item.name} className={item.featured ? "package-card package-card-featured" : "package-card"}>
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="section-label text-olive">{item.number}</span>
                    {item.featured && <span className="featured-tag">Most complete</span>}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{item.name}</h3>
                  <p className="mt-1 font-display text-lg italic opacity-75">{item.lead}</p>
                  <p className="mt-5 text-sm leading-relaxed opacity-70">{item.detail}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {item.items.map((point) => (
                      <li key={point} className="flex gap-3">
                        <Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#contact" className={item.featured ? "solid-button solid-button-coral mt-8" : "solid-button solid-button-dark mt-8"}>
                  Request a tailored quote
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="smart-enquiry" className="relative overflow-hidden bg-coral py-16 md:py-20">
        <div className="shear-panel pointer-events-none absolute -right-20 top-0 hidden h-full w-72 bg-sunlit/20 md:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="section-label text-deep">02 — Smart enquiry</p>
            <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-bold leading-tight text-deep md:text-5xl">
              Tell us who you are. We’ll ask what matters.
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white">
              Our guided chat will shape the questions around your property and priorities, so your first recommendation is useful—not generic.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["Overseas owner", "Resident owner", "Property manager", "Buying a home"].map((audience, index) => (
              <a
                key={audience}
                href="#contact"
                className={index === 0 ? "audience-tile audience-tile-dark" : "audience-tile"}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                <span>{audience}</span>
                <ArrowRight className="ml-auto size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="relative bg-deep py-20 text-sunlit md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="section-label text-coral">03 — Trust, documented</p>
            <h2 className="mt-4 max-w-[17ch] font-display text-4xl font-bold leading-tight md:text-5xl">
              Every visit lives in your Property Vault.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sunlit/72">
              Follow the care of your home from anywhere. Each visit is verified, photographed and filed with its report and invoice.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { icon: Clock3, number: "01", label: "Verified time on site" },
                { icon: ShieldCheck, number: "02", label: "Time-stamped photos" },
                { icon: FileText, number: "03", label: "Reports and invoices" },
              ].map(({ icon: FeatureIcon, number, label }) => {
                return (
                  <div key={number} className="border-l border-sunlit/20 pl-5">
                    <FeatureIcon className="size-5 text-coral" aria-hidden="true" />
                    <span className="mt-5 block font-display text-2xl font-bold text-coral">{number}</span>
                    <p className="mt-1 text-sm font-bold">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <figure className="vault-frame overflow-hidden">
            <video
              className="aspect-[4/5] size-full object-cover"
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
          </figure>
        </div>
      </section>

      <section id="proof" className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[1.8fr_1fr]">
          <div>
            <p className="section-label text-coral">04 — In their words</p>
            <div className="group relative mt-5 overflow-hidden bg-olive/20">
              <img
                src={testimonialStill}
                alt="Reserved placement for a SolidMaint customer testimonial video"
                loading="lazy"
                width={1600}
                height={912}
                className="aspect-video size-full object-cover"
              />
              <div className="absolute inset-0 bg-deep/15" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid size-16 place-items-center rounded-full bg-coral text-deep shadow-lg transition-transform group-hover:scale-105">
                  <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
                </div>
              </div>
              <p className="absolute bottom-5 left-5 bg-deep px-4 py-2 text-xs font-bold uppercase text-sunlit">
                Testimonial video placement
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <blockquote className="border-l-2 border-coral pl-5 font-display text-xl italic leading-relaxed">
              “Excellent service. Arrived exactly on time and carried out the repair as required.”
              <footer className="mt-4 font-body text-sm font-bold not-italic text-deep/60">Verified customer</footer>
            </blockquote>
            <blockquote className="border-l-2 border-olive pl-5 font-display text-xl italic leading-relaxed">
              “Antonio was on time, polite and very helpful.”
              <footer className="mt-4 font-body text-sm font-bold not-italic text-deep/60">Paul W. · Marbella</footer>
            </blockquote>
          </div>
        </div>
      </section>

      <section id="coverage" className="border-y border-deep/10 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label text-coral">05 — Local coverage</p>
            <h2 className="mt-4 font-display text-4xl font-bold">Benalmádena to Sotogrande.</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-deep/70">
              One trusted team for garden, pool, air conditioning, handyman, electrical and plumbing services.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Mijas', 'Benalmádena', 'Marbella', 'Benahavís', 'Estepona', 'Sotogrande'].map((place) => (
              <span key={place} className="inline-flex items-center gap-2 border border-deep/15 px-5 py-4 text-base font-bold">
                <MapPin className="size-4 text-coral" aria-hidden="true" /> {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label text-coral">Questions</p>
            <h2 className="mt-4 max-w-[12ch] font-display text-4xl font-bold">Clear answers before we begin.</h2>
          </div>
          <div className="divide-y divide-deep/15 border-y border-deep/15">
            {faqs.map((faq) => (
              <details key={faq.question} className="faq-row group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-bold">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-coral transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-deep/70">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-deep py-20 text-sunlit md:py-24">
        <div className="shear-panel pointer-events-none absolute -right-20 top-0 hidden h-full w-80 bg-coral/25 md:block" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-10">
          <p className="section-label text-coral">Your home, handled</p>
          <h2 className="mt-4 max-w-[16ch] font-display text-4xl font-bold leading-tight md:text-6xl">
            Let’s build the right care plan for your property.
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-sunlit/72">
            Tell us where your home is and what needs care. The Marbella team will reply within one working day.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:info@solidmaint.com" className="solid-button solid-button-coral">
              Start your enquiry <ArrowRight aria-hidden="true" />
            </a>
            <a href="tel:+34951798899" className="solid-button solid-button-outline">Call +34 951 798 899</a>
          </div>
          <div className="mt-16 flex flex-col gap-5 border-t border-sunlit/15 pt-7 text-sm text-sunlit/60 sm:flex-row sm:items-center sm:justify-between">
            <Brand />
            <p>Marbella, Benalmádena · Mon–Fri, 09:00–18:00 CET</p>
            <p>© 2026 SolidMaint</p>
          </div>
        </div>
      </footer>
    </main>
  );
}