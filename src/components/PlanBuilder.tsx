import { ArrowLeft, ArrowRight, Check, MessageCircle, Smartphone, Sparkles, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type PlanKey = "outdoor" | "home-ready" | "complete";

export const planBase: Record<PlanKey, { name: string; base: number; blurb: string }> = {
  outdoor: { name: "Garden Care", base: 189, blurb: "Your garden kept healthy and inviting all year." },
  "home-ready": { name: "Home Ready", base: 289, blurb: "Garden, pool and monthly photo report." },
  complete: { name: "Complete Care", base: 459, blurb: "Whole-home care with hands-on support." },
};

const gardenSizes = [
  { label: "Patio / courtyard", note: "up to 100 m²", add: 0 },
  { label: "Small garden", note: "100 – 300 m²", add: 35 },
  { label: "Family garden", note: "300 – 700 m²", add: 80 },
  { label: "Large garden", note: "700 – 1,500 m²", add: 140 },
  { label: "Estate grounds", note: "1,500 m² +", add: 210 },
];

const poolSizes = [
  { label: "No pool", note: "garden care only", add: 0 },
  { label: "Plunge pool", note: "up to 15 m²", add: 30 },
  { label: "Standard pool", note: "15 – 32 m²", add: 60 },
  { label: "Large pool", note: "32 – 60 m²", add: 105 },
  { label: "XL / infinity pool", note: "60 m² +", add: 160 },
];

const terms = [
  { key: "trial", label: "Monthly try-out", months: 1, discount: 0, note: "Rolling month, cancel any time" },
  { key: "3", label: "3 months", months: 3, discount: 0.05, note: "5% off · extra hours at €42/h" },
  { key: "6", label: "6 months", months: 6, discount: 0.1, note: "10% off · extra hours at €38/h" },
  { key: "12", label: "12 months", months: 12, discount: 0.15, note: "15% off · extra hours at €34/h · 1 free garden hour a month" },
] as const;

const hourlyRate: Record<number, number> = { 1: 48, 3: 42, 6: 38, 12: 34 };

const extraServices = [
  "Handyman & repairs",
  "Electrical services",
  "Plumbing services",
  "AC servicing",
  "Deep garden work",
  "Pre-arrival home prep",
];

const euro = (n: number) => `€${n.toFixed(2).replace(/\.00$/, ".00")}`;

function HelpCta() {
  return (
    <a
      href="mailto:info@solidmaint.com?subject=Help%20me%20choose%20a%20care%20plan"
      className="mt-6 flex items-center gap-3 rounded-2xl border border-coral/40 bg-coral/10 p-4 text-left"
    >
      <MessageCircle className="size-5 shrink-0 text-coral" aria-hidden="true" />
      <span className="text-sm leading-snug">
        <span className="font-semibold">Stuck, or not sure what to pick?</span>{" "}
        <span className="text-deep/70">Tell us about your home and we&apos;ll answer today.</span>
      </span>
      <ArrowRight className="ml-auto size-4 shrink-0 text-coral" aria-hidden="true" />
    </a>
  );
}

function Slider({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; note: string; add: number }[];
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <p className="section-label text-coral">{label}</p>
        <p className="text-sm font-semibold text-deep/60">{options[value]!.note}</p>
      </div>
      <p className="mt-2 font-display text-2xl font-semibold md:text-3xl">{options[value]!.label}</p>
      <input
        type="range"
        min={0}
        max={options.length - 1}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        className="mt-5 w-full accent-[var(--coral)]"
      />
      <div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-wide text-deep/45">
        <span>Smallest</span>
        <span>Largest</span>
      </div>
    </div>
  );
}

export function PlanBuilder({ plan, onClose }: { plan: PlanKey; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [garden, setGarden] = useState(1);
  const [pool, setPool] = useState(2);
  const [termIndex, setTermIndex] = useState(1);
  const [hours, setHours] = useState(0);
  const [service, setService] = useState(extraServices[0]!);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const term = terms[termIndex]!;
  const isGardenOnly = plan === "outdoor";
  const pricing = useMemo(() => {
    const poolAddition = plan === "outdoor" ? 0 : poolSizes[pool]!.add;
    const base = planBase[plan].base + gardenSizes[garden]!.add + poolAddition;
    const discounted = base * (1 - term.discount);
    const rate = hourlyRate[term.months]!;
    const includedHours = plan === "complete" ? 2 : 0;
    const billableHours = Math.max(0, hours - includedHours);
    const hoursCost = billableHours * rate;
    return { base, discounted, rate, hoursCost, billableHours, includedHours, total: discounted + hoursCost };
  }, [plan, garden, pool, term, hours]);

  const steps = isGardenOnly
    ? ["Welcome", "Your garden", "Your plan length", "Extra hours", "Your quote"]
    : ["Welcome", "Your garden", "Your pool", "Your plan length", "Extra hours", "Your quote"];
  const stage = isGardenOnly ? [0, 1, 3, 4, 5][step] ?? 0 : step;
  const canAddHours = term.months > 1;

  const enquiryBody = encodeURIComponent(
    [
      `Plan: ${planBase[plan].name}`,
      `Garden: ${gardenSizes[garden]!.label} (${gardenSizes[garden]!.note})`,
      isGardenOnly ? "Pool: not included in Garden Care" : `Pool: ${poolSizes[pool]!.label} (${poolSizes[pool]!.note})`,
      `Plan length: ${term.label}`,
      canAddHours && hours > 0 ? `Extra hours: ${hours} h/month of ${service} at ${euro(pricing.rate)}/h${plan === "complete" ? " (first 2 h included in Complete Care)" : ""}` : "Extra hours: none",
      `Indicative total: ${euro(pricing.total)} per month`,
      "",
      "My name:",
      "Property address:",
      "Best number to reach me:",
    ].join("\n"),
  );

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-deep/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl bg-sunlit text-deep shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between gap-4 border-b border-deep/10 px-5 py-4 md:px-8">
          <div>
            <p className="section-label text-coral">{planBase[plan].name}</p>
            <p className="text-sm text-deep/60">
              Step {step + 1} of {steps.length} · {steps[step]}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close plan builder"
            className="grid size-10 place-items-center rounded-full border border-deep/20 transition-colors hover:border-coral hover:text-coral"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div className="h-1 w-full bg-deep/10">
          <div className="h-full bg-coral transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-7 md:px-8 md:py-9">
          {stage === 0 && (
            <div>
              <Sparkles className="size-7 text-coral" aria-hidden="true" />
              <h3 className="mt-4 font-display text-3xl font-semibold leading-tight md:text-4xl">
                Give us one minute — and we&apos;ll give you the right plan.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-deep/70">
                {isGardenOnly
                  ? "No two gardens on this coast are the same. A few quick questions about your garden and how long you'd like us around, and you'll see an honest price built for your property — not a generic number. It really does take about a minute."
                  : "No two homes on this coast are the same. A few quick questions about your garden, your pool and how long you'd like us around, and you'll see an honest price built for your property — not a generic number. It really does take about a minute."}
              </p>
              <div className="mt-6 rounded-2xl border border-coral/40 bg-coral/10 p-4">
                <p className="flex flex-wrap items-center gap-2 font-bold">
                  <Smartphone className="size-5 text-coral" aria-hidden="true" />
                  Your free Property Vault
                  <span className="rounded-full bg-coral px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-sunlit">Included free</span>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-deep/70">Photos from every single visit, saved to your phone — see exactly what we did, from anywhere in the world.</p>
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {["Photo-documented report every month", "One dependable team, no hidden extras"].map((point) => (
                  <li key={point} className="flex gap-3">
                    <Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <HelpCta />
            </div>
          )}

          {stage === 1 && (
            <div>
              <Slider label="How big is your garden?" options={gardenSizes} value={garden} onChange={setGarden} />
              <p className="mt-6 leading-relaxed text-deep/65">
                Mowing, edging, watering, leaf blowing, weeding, trimming and soil-moisture checks — the bigger the
                grounds, the more hours your garden needs each month.
              </p>
              <HelpCta />
            </div>
          )}

          {stage === 2 && (
            <div>
              <Slider label="And your pool?" options={poolSizes} value={pool} onChange={setPool} />
              <p className="mt-6 leading-relaxed text-deep/65">
                Cleaning, water chemistry balancing and emptying the baskets, so the pool is always swim-ready when you
                walk through the door.
              </p>
              <HelpCta />
            </div>
          )}

          {stage === 3 && (
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">How long would you like us around?</h3>
              <p className="mt-3 leading-relaxed text-deep/65">The longer you stay with us, the less you pay — every month and every extra hour.</p>
              <div className="mt-6 grid gap-3">
                {terms.map((option, index) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setTermIndex(index)}
                    className={`flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors ${
                      index === termIndex ? "border-coral bg-coral/10" : "border-deep/15 hover:border-coral/60"
                    }`}
                  >
                    <span>
                      <span className="block font-display text-xl font-semibold">{option.label}</span>
                      <span className="block text-sm text-deep/60">{option.note}</span>
                    </span>
                    <span className="font-display text-lg font-semibold text-coral">
                      {option.discount ? `−${Math.round(option.discount * 100)}%` : "Flexible"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-coral/40 bg-coral/10 p-4 text-sm leading-relaxed">
                <p className="font-bold">And your Property Vault? Always free.</p>
                <p className="mt-1 text-deep/70">
                  Photos from every visit, on every plan, at no extra cost — whichever length you choose. Stay a full
                  year and you also get one hour of garden care free, every single month.
                </p>
              </div>
              <HelpCta />
            </div>
          )}

          {stage === 4 && (
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">Add home maintenance hours?</h3>
              {canAddHours ? (
                <>
                  <p className="mt-3 leading-relaxed text-deep/65">
                    Bank hours from our whole service portfolio and use them whenever something needs doing. Minimum two
                    hours in one slot, up to six hours a month — at {euro(pricing.rate)} an hour on your {term.label.toLowerCase()} plan.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[0, 2, 3, 4, 5, 6].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setHours(option)}
                        className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                          hours === option ? "border-coral bg-coral text-sunlit" : "border-deep/20 hover:border-coral"
                        }`}
                      >
                        {option === 0 ? "No extra hours" : `${option} h / month`}
                      </button>
                    ))}
                  </div>
                  {plan === "complete" && (
                    <p className="mt-4 rounded-2xl border border-coral/40 bg-coral/10 p-4 text-sm font-semibold">
                      Good news — your first 2 hours a month are already included in Complete Care, free. Only pick more
                      if you&apos;d like extra.
                    </p>
                  )}
                  {hours > 0 && (
                    <div className="mt-6">
                      <p className="section-label text-coral">Mostly for</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {extraServices.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setService(item)}
                            className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-colors ${
                              service === item ? "border-coral bg-coral text-sunlit" : "border-deep/20 hover:border-coral"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="mt-3 leading-relaxed text-deep/65">
                  Extra service hours come with our 3, 6 and 12-month plans. Step back and choose a longer plan to unlock
                  them — or start on the monthly try-out and add them later.
                </p>
              )}
              <HelpCta />
            </div>
          )}

          {stage === 5 && (
            <div>
              <p className="section-label text-coral">Your indicative plan</p>
              <p className="mt-3 font-display text-5xl font-semibold">
                {euro(pricing.total)}
                <span className="ml-2 align-middle text-base font-semibold text-deep/55">/ month</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                  <span>
                    {planBase[plan].name} · {gardenSizes[garden]!.label}
                    {!isGardenOnly && ` · ${poolSizes[pool]!.label}`}
                  </span>
                  <span className="font-semibold">{euro(pricing.base)}</span>
                </li>
                <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                  <span>{term.label} commitment</span>
                  <span className="font-semibold">{term.discount ? `−${euro(pricing.base - pricing.discounted)}` : "—"}</span>
                </li>
                {plan === "complete" && (
                  <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                    <span>2 h/month of extra service — included in your plan</span>
                    <span className="font-extrabold text-coral">Free</span>
                  </li>
                )}
                {canAddHours && pricing.billableHours > 0 && (
                  <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                    <span>{pricing.billableHours} extra h/month · {service} at {euro(pricing.rate)}/h</span>
                    <span className="font-semibold">{euro(pricing.hoursCost)}</span>
                  </li>
                )}
                <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                  <span className="font-semibold">Property Vault · photos from every visit</span>
                  <span className="font-extrabold text-coral">Free</span>
                </li>
                {term.months === 12 && (
                  <li className="flex justify-between gap-4 border-t border-deep/10 pt-3">
                    <span>1 hour of garden care, every month</span>
                    <span className="font-semibold text-coral">Free</span>
                  </li>
                )}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-deep/55">
                Indicative pricing, IVA included. We confirm the final figure after a quick look at your property — no
                surprises, ever.
              </p>
              <a
                href={`mailto:info@solidmaint.com?subject=Service%20request%20—%20${encodeURIComponent(planBase[plan].name)}&body=${enquiryBody}`}
                className="solid-button solid-button-coral mt-6 w-full"
              >
                Request this service <ArrowRight aria-hidden="true" />
              </a>
              <HelpCta />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-deep/10 px-5 py-4 md:px-8">
          <button
            type="button"
            onClick={() => (step === 0 ? onClose() : setStep((s) => s - 1))}
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-deep/60 transition-colors hover:text-coral"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> {step === 0 ? "Not now" : "Back"}
          </button>
          {step < steps.length - 1 ? (
            <button type="button" onClick={() => setStep((s) => s + 1)} className="solid-button solid-button-coral">
              {step === 0 ? "Let's go" : "Continue"} <ArrowRight aria-hidden="true" />
            </button>
          ) : (
            <p className="font-display text-lg font-semibold">{euro(pricing.total)} / month</p>
          )}
        </div>
      </div>
    </div>
  );
}
