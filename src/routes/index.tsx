import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Droplets,
  Facebook,
  FileText,
  Instagram,
  Leaf,
  Linkedin,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Waves,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import appProcessPoster from "@/assets/app-process-poster.jpg.asset.json";
import appProcessVideo from "@/assets/solidmaint-app-process.mp4.asset.json";
import familyVillaPoster from "@/assets/family-villa-footer-poster.jpg.asset.json";
import familyVillaVideo from "@/assets/family-villa-footer.mp4.asset.json";
import logoAsset from "@/assets/solidmaint-logo.png.asset.json";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";
import testimonialStill from "@/assets/testimonial-still.jpg";
import { InstagramFeed } from "@/components/InstagramFeed";
import { MarenaBanner } from "@/components/MarenaBanner";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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

const team = [
  { name: "Antonio Reyes", role: "Head of Operations", photo: team1 },
  { name: "Marena López", role: "Client Care", photo: team2 },
  { name: "Daniel Torres", role: "Lead Technician", photo: team3 },
  { name: "Carmen Vidal", role: "Property Manager", photo: team4 },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="SolidMaint home">
      <img src={logoAsset.url} alt="" className="size-10 rounded-md" width="40" height="40" />
      <span className={`flex flex-col leading-tight ${light ? "text-sunlit" : "text-deep"}`}>
        <span className="text-sm font-extrabold uppercase">SolidMaint</span>
        <span className="text-[11px] font-medium tracking-wide opacity-80">Your home. Solidly cared for.</span>
      </span>
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

const navLinks = [
  { href: "#packages", label: "Benefits" },
  { href: "#services", label: "Services" },
  { href: "#vault", label: "Property Vault" },
  { href: "#proof", label: "Reviews" },
  { href: "#team", label: "Team" },
  { href: "#coverage", label: "Coverage" },
  { href: "#faqs", label: "FAQs" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="top" className="overflow-hidden bg-sunlit text-deep">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-deep/85 shadow-lg backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:px-10 md:py-5">
          <Brand light />
          <div className="hidden items-center gap-8 text-sm font-bold uppercase text-sunlit lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a href="#contact" className="solid-button solid-button-coral px-4 py-2.5 text-[0.7rem] sm:px-5 sm:text-xs md:text-[0.78rem]">Enquire</a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              className="grid size-11 shrink-0 place-items-center rounded-md border border-sunlit/40 text-sunlit lg:hidden"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-y border-deep/10 bg-sunlit px-4 py-2 text-deep lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-deep/10 py-4 text-sm font-bold uppercase last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

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
          <p className="section-label text-coral">Currently serving Benalmádena → Sotogrande · Every visit documented</p>
          <TypewriterHeading text="Let’s build the right care plan for your home." />
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/75">
            One dependable team for your garden, pool, air conditioning and home—with a clear record of every visit.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#packages" className="solid-button solid-button-coral">Find your care plan <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section id="packages" className="scroll-mt-28 pt-10 pb-20 md:py-32">
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

      <section id="how-we-work" className="scroll-mt-28 bg-olive/10 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid items-end gap-8 border-b border-deep/15 pb-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="section-label text-coral">02 — How we work</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">A care plan in four simple steps.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-deep/65 lg:pb-2">
              Start with a base plan, shape it around your home, add extra hours or services where you need them, and follow every task from your phone.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="how-step">
              <span className="section-label text-coral">Step 01</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Choose your base plan</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Pick the plan closest to how you use your home. It’s a starting point — not a fixed package, and it can grow with your property.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Outdoor Care", "Home Ready", "Complete Care"].map((name) => (
                  <a key={name} href="#packages" className="rounded-full border border-deep/20 px-3.5 py-1.5 text-xs font-bold transition-colors hover:border-coral hover:text-coral">{name}</a>
                ))}
              </div>
              <div className="mt-8 border border-coral/40 bg-coral/10 p-4 lg:mt-auto">
                <MessageCircle className="size-5 text-coral" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold leading-snug">Not sure what plan is for you?</p>
                <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-coral">Talk to us now <ArrowRight className="size-4" aria-hidden="true" /></a>
              </div>
            </article>

            <article className="how-step">
              <span className="section-label text-coral">Step 02</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Customise it with extra hours or services</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Layer extra hours of any work we provide — or add a standalone service — on top of your plan’s regular visits. Mix and match freely.</p>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <span key={service.title} className="flex items-center gap-2.5 border border-deep/15 bg-sunlit px-3 py-2.5 text-xs font-bold">
                      <Icon className="size-4 shrink-0 text-coral" aria-hidden="true" />
                      {service.title}
                    </span>
                  );
                })}
              </div>
            </article>

            <article className="how-step">
              <span className="section-label text-coral">Step 03</span>
              <h3 className="mt-4 font-display text-2xl font-semibold md:text-3xl">Booked in clear time slots</h3>
              <p className="mt-4 leading-relaxed text-deep/65">Extra hours are booked in one time slot — a minimum of 2 hours, up to a maximum of 6 added to your 3-month plan.</p>
              <div className="mt-8 border-t border-deep/15 pt-6 lg:mt-auto">
                <p className="text-xs font-bold uppercase tracking-wide text-deep/50">Extra hours per time slot</p>
                <div className="mt-4 grid grid-cols-5 gap-2" aria-hidden="true">
                  {[{ h: 2, p: "38%" }, { h: 3, p: "52%" }, { h: 4, p: "66%" }, { h: 5, p: "82%" }, { h: 6, p: "100%", max: true }].map(({ h, p, max }) => (
                    <div key={h} className="text-center">
                      <div className="relative h-24 w-full">
                        <div className={`absolute bottom-0 w-full ${max ? "bg-coral" : "bg-olive/40"}`} style={{ height: p }} />
                      </div>
                      <span className="mt-2 block text-xs font-bold">{h}h</span>
                    </div>
                  ))}
                </div>
                <p className="mt-2 flex items-baseline justify-between text-[0.65rem] font-bold uppercase tracking-wide">
                  <span className="text-deep/45">Min 2h</span>
                  <span className="text-coral">Max 6h · 3-month plan</span>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 bg-background py-20 md:py-32">
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

      <section id="smart-enquiry" className="bg-coral py-20 text-deep md:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center md:px-10">
          <MessageCircle className="mx-auto size-8" aria-hidden="true" />
          <p className="section-label mt-7">04 — A smarter first conversation</p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Tell us who you are. We’ll ask what matters.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sunlit">Our guided chat shapes the questions around your property and priorities, so your first recommendation is useful—not generic.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Overseas owner", "Resident owner", "Property manager", "Buying a home"].map((audience) => (
              <a key={audience} href="#contact" className="audience-pill">{audience}<ArrowRight className="size-4" aria-hidden="true" /></a>
            ))}
          </div>
        </div>
      </section>

      <section id="vault" className="scroll-mt-28 py-20 md:py-32">
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
            <p className="section-label text-coral">05 — Your Property Vault</p>
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
          <p className="section-label text-coral">06 — In their words</p>
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

      <section id="team" className="scroll-mt-28 bg-sunlit py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="section-label text-coral">07 — Meet the team</p>
              <h2 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-tight md:text-6xl">The people behind every visit.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-deep/65 lg:pb-2">
              A small, experienced crew based along the Costa del Sol. We know the homes, the climate and the details that keep a property running smoothly.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-display text-xl font-semibold">{member.name}</p>
                <p className="mt-1 text-sm font-bold uppercase text-coral">{member.role}</p>
              </div>
            ))}
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

          <div id="faqs" className="scroll-mt-28 mt-20 grid gap-10 border-t border-deep/15 pt-16 lg:grid-cols-[0.75fr_1.25fr]">
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

      <InstagramFeed />



      <footer id="contact" className="relative bg-deep py-20 text-sunlit md:py-28">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-10">
          <p className="section-label text-coral">Your home, handled</p>
          <h2 className="mx-auto mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-tight md:text-6xl">Let’s talk about your home.</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sunlit/65">Tell us where your home is and what needs care. The Marbella team will reply within one working day.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:info@solidmaint.com" className="solid-button solid-button-coral">Start your enquiry <ArrowRight aria-hidden="true" /></a>
            <a href="tel:+34951798899" className="solid-button solid-button-outline">Call +34 951 798 899</a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            {[
              { href: "https://www.facebook.com/solidmaint", label: "SolidMaint on Facebook", icon: Facebook },
              { href: "https://instagram.com/solidmaint", label: "SolidMaint on Instagram", icon: Instagram },
              { href: "https://www.linkedin.com/company/solidmaint", label: "SolidMaint on LinkedIn", icon: Linkedin },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="grid size-11 place-items-center rounded-full border border-sunlit/25 text-sunlit transition-colors hover:border-coral hover:bg-coral hover:text-sunlit"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-5 border-t border-sunlit/15 pt-7 text-sm text-sunlit/55 sm:flex-row sm:items-center sm:justify-between">
            <Brand light />
            <p>Marbella, Benalmádena · Mon–Fri, 09:00–18:00 CET</p>
            <p>© 2026 SolidMaint</p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
      <MarenaBanner />
    </main>
  );
}