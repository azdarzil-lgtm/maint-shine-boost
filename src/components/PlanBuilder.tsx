import { ArrowLeft, ArrowRight, Check, Download, Home, Phone, Video, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { downloadQuotePdf } from "@/lib/quote-pdf";

type PropertyKey = "flat" | "townhouse" | "villa" | "finca";
type PackageKey = "basic" | "middle" | "best";
type CleaningSize = "up100" | "100to200" | "200to300" | "300to500";

export const HOURLY_RATE = 45;

const packages: { key: PackageKey; name: string; hours: number; price: number; strapline: string; acVisits: number; featured?: boolean }[] = [
  { key: "basic", name: "Essential Care", hours: 2, price: 89, strapline: "Regular check + small fixes", acVisits: 0 },
  { key: "middle", name: "Home Ready", hours: 4, price: 149, strapline: "More time for everyday home care", acVisits: 1, featured: true },
  { key: "best", name: "Signature Care", hours: 6, price: 199, strapline: "Our most complete monthly care", acVisits: 2 },
];

const propertyTypes: { key: PropertyKey; label: string; note: string }[] = [
  { key: "flat", label: "Flat", note: "Apartment or penthouse" },
  { key: "townhouse", label: "Townhouse", note: "Shared or private outdoor space" },
  { key: "villa", label: "Villa", note: "Detached home and grounds" },
  { key: "finca", label: "Finca / Estate", note: "Larger rural property or estate" },
];

const outdoorSizes = [
  { label: "No garden / yard", note: "No regular outdoor care", add: 0 },
  { label: "Small garden", note: "up to 300 m²", add: 35 },
  { label: "Family garden", note: "300–700 m²", add: 80 },
  { label: "Large garden", note: "700–1,500 m²", add: 140 },
  { label: "Estate grounds", note: "1,500 m² +", add: 210 },
];

const poolSizes = [
  { label: "No pool", note: "No regular pool care", add: 0 },
  { label: "Plunge pool", note: "up to 15 m²", add: 30 },
  { label: "Standard pool", note: "15–32 m²", add: 60 },
  { label: "Large pool", note: "32–60 m²", add: 105 },
  { label: "XL / infinity pool", note: "60 m² +", add: 160 },
];

const cleaningPrices: Record<CleaningSize, { label: string; hours: number; prices: [number, number, number] }> = {
  up100: { label: "Up to 100 m²", hours: 3, prices: [419, 849, 1269] },
  "100to200": { label: "100–200 m²", hours: 4, prices: [569, 1129, 1699] },
  "200to300": { label: "200–300 m²", hours: 5, prices: [709, 1419, 2119] },
  "300to500": { label: "300–500 m²", hours: 6, prices: [849, 1699, 2549] },
};

const acAnnualPrices: Record<number, number> = { 1: 99, 2: 178, 3: 261, 4: 335, 5: 395, 8: 555.04, 10: 625 };
const hourIdeas = [
  "Small repairs and handyman jobs", "Small plumbing and electrical fixes", "Ventilation and vent cleaning",
  "Range hood filter care", "Pool filter media replacement", "Irrigation inspection and adjustment",
  "Solar panel cleaning", "Drain and trap cleaning", "Bathroom silicone and grout renewal",
  "Terrace pressure washing", "Exterior window cleaning", "Tree pruning and pest control",
];

const euro = (value: number) => `€${Math.ceil(value)}`;
const exactEuro = (value: number) => `€${value.toFixed(2)}`;

type DetailKey = "garden" | "pool" | "cleaning";

const serviceDetails: Record<DetailKey, { tagline: string; groups: { title: string; items: string[] }[] }> = {
  garden: {
    tagline: "A garden that looks cared for every time you arrive.",
    groups: [
      { title: "Garden maintenance", items: ["Lawns mown, edged and kept healthy", "Plants and shrubs looked after, season by season", "Pruning and shaping that keeps the garden in form", "Beds and borders kept free of weeds", "Irrigation checked, so nothing quietly dries out", "Garden tidied and green waste taken away", "Seasonal care whenever the garden needs it"] },
      { title: "Orchard and fruit trees", items: ["Watering and tree health checked", "Dead and damaged branches removed", "Trees pruned and shaped for strong growth", "Weeds cleared from around the trees", "Ongoing care for trees and plants", "Green waste taken away"] },
    ],
  },
  pool: {
    tagline: "Clear, balanced water, ready whenever you want to swim.",
    groups: [{ title: "Pool maintenance", items: ["Pool surfaces and floor cleaned", "Skimmers and baskets emptied and cleaned", "Water quality tested on every visit", "Chemicals adjusted to keep the water balanced", "Filters and pool equipment checked", "Pool area left clean and tidy"] }],
  },
  cleaning: {
    tagline: "Come home to a clean, fresh house, every week.",
    groups: [{ title: "Weekly home cleaning", items: ["Dusting throughout the home", "Floors vacuumed and mopped", "Kitchen surfaces cleaned", "Bathrooms and toilets cleaned", "Mirrors left streak-free", "Bins emptied", "Every room tidied and surfaces wiped", "Bed linen changed, if agreed"] }],
  },
};

function IncludedDisclosure({ detail, onDark = false }: { detail: DetailKey; onDark?: boolean }) {
  const info = serviceDetails[detail];
  return (
    <div className={onDark ? "mt-1 border-t border-sunlit/10" : "border-t border-deep/10"}>
      <p className={`mt-3 font-display font-semibold ${onDark ? "text-sm text-sunlit" : "text-lg text-deep"}`}>Look! what is included in your Home Care Package!</p>
      <div className="mt-2">
        <p className={`text-sm leading-relaxed ${onDark ? "text-sunlit/70" : "text-deep/70"}`}>{info.tagline}</p>
        {info.groups.map((group) => (
          <div key={group.title} className="mt-3 first:mt-2">
            <p className={`text-xs font-bold uppercase tracking-wide ${onDark ? "text-sunlit/60" : "text-deep/50"}`}>{group.title}</p>
            <ul className={`mt-2 grid gap-1.5 text-sm sm:grid-cols-2 ${onDark ? "text-sunlit/80" : "text-deep/75"}`}>
              {group.items.map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-coral" />{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PropertyDrawing({ type }: { type: PropertyKey }) {
  if (type === "flat") return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M24 56V9h48v47M18 56h60M35 19h8v8h-8zm18 0h8v8h-8zM35 35h8v8h-8zm18 0h8v8h-8zM45 56V45h8v11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  if (type === "townhouse") return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M12 56V26l18-14 18 14v30m0 0V26l18-14 18 14v30M7 56h82M21 34h9v9h-9zm36 0h9v9h-9zM35 56V39h8v17m28 0V39h8v17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  if (type === "villa") return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M10 56h76M18 56V29L48 10l30 19v27M10 31l38-24 38 24M29 35h11v10H29zm27 0h11v10H56zM44 56V39h9v17M76 22V10h7v17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M7 56h82M18 56V31L48 13l30 18v25M12 34l36-24 36 24M29 37h11v9H29zm27 0h11v9H56zM44 56V40h9v16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Slider({ label, options, value, onChange }: { label: string; options: { label: string; note: string; add: number }[]; value: number; onChange: (value: number) => void }) {
  const selected = options[value] ?? options[0];
  if (!selected) return null;
  return <div><div className="flex items-baseline justify-between gap-4"><p className="section-label text-coral">{label}</p><p className="text-sm font-semibold text-deep/60">{selected.note}</p></div><p className="mt-2 font-display text-2xl font-semibold md:text-3xl">{selected.label}</p><input type="range" min={0} max={options.length - 1} step={1} value={value} onChange={(event) => onChange(Number(event.target.value))} aria-label={label} className="mt-5 w-full accent-[var(--coral)]" /><div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-wide text-deep/45"><span>None / smallest</span><span>Largest</span></div></div>;
}

export function PlanBuilder({ onClose, initialPackage = "middle" }: { onClose: () => void; initialPackage?: PackageKey }) {
  const [step, setStep] = useState(0);
  const [packageIndex] = useState(() => Math.max(0, packages.findIndex((plan) => plan.key === initialPackage)));
  const [propertyIndex, setPropertyIndex] = useState(1);
  const [outdoor, setOutdoor] = useState(1);
  const [gardenVisits, setGardenVisits] = useState<1 | 2 | 3>(2);
  const [palms, setPalms] = useState(0);
  const [pool, setPool] = useState(0);
  const [jacuzzi, setJacuzzi] = useState(false);
  const [cleaning, setCleaning] = useState(false);
  const [cleaningSize, setCleaningSize] = useState<CleaningSize>("up100");
  const [cleaningVisits, setCleaningVisits] = useState<1 | 2 | 3>(1);
  const [acUnits, setAcUnits] = useState(0);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [nextMode, setNextMode] = useState<"visit" | "call">("visit");
  const [nextName, setNextName] = useState("");
  const [nextPhone, setNextPhone] = useState("");
  const [nextEmail, setNextEmail] = useState("");
  const [nextTown, setNextTown] = useState("");
  const [nextTime, setNextTime] = useState("Any time, 09:00–18:00");
  const [nextNote, setNextNote] = useState("");
  const [nextSent, setNextSent] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [videoContact, setVideoContact] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const selectedPackage = packages[packageIndex] ?? packages[1];
  const property = propertyTypes[propertyIndex] ?? propertyTypes[1];
  const outdoorChoice = outdoorSizes[outdoor] ?? outdoorSizes[0];
  const poolChoice = poolSizes[pool] ?? poolSizes[0];
  if (!selectedPackage || !property || !outdoorChoice || !poolChoice) return null;

  const cleaningChoice = cleaningPrices[cleaningSize];
  const cleaningAdd: number = cleaning && cleaningChoice ? (cleaningChoice.prices[cleaningVisits - 1] ?? 0) : 0;
  const palmAdd = palms * 8.75;
  const acAdd = acUnits > 0 && selectedPackage.acVisits > 0 ? ((acAnnualPrices[acUnits] ?? 0) * selectedPackage.acVisits) / 12 : 0;
  const total = selectedPackage.price + outdoorChoice.add + poolChoice.add + (jacuzzi ? 80 : 0) + palmAdd + cleaningAdd + acAdd;
  const displayedTotal = Math.ceil(total);

  const lines = useMemo<{ label: string; frequency: string; amount: number; detail?: DetailKey }[]>(() => [
    { label: `${selectedPackage.name} package · ${selectedPackage.hours} hours per month · Property Vault included`, frequency: "As needed", amount: selectedPackage.price },
    ...(outdoorChoice.add ? [{ label: `Garden care · ${outdoorChoice.label}`, frequency: `${gardenVisits}× per week`, amount: outdoorChoice.add, detail: "garden" as const }] : []),
    ...(palms ? [{ label: `Palm trimming · ${palms} ${palms === 1 ? "palm" : "palms"}`, frequency: "Once a year", amount: palmAdd }] : []),
    ...(poolChoice.add ? [{ label: `Pool care · ${poolChoice.label}`, frequency: "At least once per week · chemical treatments included", amount: poolChoice.add, detail: "pool" as const }] : []),
    ...(jacuzzi ? [{ label: "Jacuzzi / spa care", frequency: "Alongside pool care", amount: 80 }] : []),
    ...(cleaning && cleaningChoice ? [{ label: `Home cleaning · ${cleaningChoice.label}`, frequency: `${cleaningVisits}× per week`, amount: cleaningAdd, detail: "cleaning" as const }] : []),
    ...(acAdd ? [{ label: `AC service · ${acUnits} ${acUnits === 1 ? "unit" : "units"}`, frequency: `${selectedPackage.acVisits}× per year`, amount: acAdd }] : []),
  ], [selectedPackage, outdoorChoice, gardenVisits, palms, palmAdd, poolChoice, jacuzzi, cleaning, cleaningChoice, cleaningVisits, cleaningAdd, acUnits, acAdd]);

  const steps = ["Your property", "Garden", "Pool", "Cleaning", "AC service", "Your hours", "Your plan & quote"];
  const enquiryBody = [
    `Package: ${selectedPackage.name} — ${selectedPackage.hours} hours per month (${euro(selectedPackage.price)})`,
    `Property: ${property.label}`,
    ...lines.slice(1).map((line) => `${line.label}: ${line.frequency} — ${euro(line.amount)}/month`),
    `Indicative total: ${euro(displayedTotal)} per month incl. IVA`,
    "Billing: No upfront payment — billed after service",
  ].join("\n");

  const handlePdf = async () => {
    setPdfBusy(true);
    try {
      await downloadQuotePdf({
        total: euro(displayedTotal),
        lines: lines.map((line) => ({ label: `${line.label} · ${line.frequency}`, amount: euro(line.amount) })),
        summary: [
          `${selectedPackage.name} gives you ${selectedPackage.hours} hours of our team's time every month, counted in 15-minute steps with travel time never counted.`,
          `Property: ${property.label}.`,
          "Use your hours for the work your home needs; unused hours roll over for one month.",
          "One dedicated team and plan manager, with every visit documented in your included Property Vault.",
          "Fixed monthly fee, no upfront payment — billed after service. No minimum term.",
        ],
      });
    } finally { setPdfBusy(false); }
  };

  return <div className="fixed inset-0 z-[70] flex items-end justify-center bg-deep/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
    <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-t-3xl bg-sunlit text-deep shadow-2xl sm:rounded-3xl">
      <div className="flex items-center justify-between gap-4 border-b border-deep/10 px-5 py-4 md:px-8"><div><p className="section-label text-coral">Build your home care plan</p><p className="text-sm text-deep/60">Step {step + 1} of {steps.length} · {steps[step]}</p></div><button type="button" onClick={onClose} aria-label="Close plan builder" className="grid size-10 place-items-center rounded-full border border-deep/20 transition-colors hover:border-coral hover:text-coral"><X className="size-5" aria-hidden="true" /></button></div>
      <div className="h-1 w-full bg-deep/10"><div className="h-full bg-coral transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
      <div className="flex-1 overflow-y-auto px-5 py-7 md:px-8 md:py-9">
        {step === 0 && <div><p className="section-label text-coral">What kind of property is it?</p><h3 className="mt-3 font-display text-3xl font-semibold">Tell us about the home we’ll care for.</h3><p className="mt-2 text-sm text-deep/60">Your {selectedPackage.name} package is selected. This helps our team prepare and does not change its price.</p><div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{propertyTypes.map((option, index) => <button key={option.key} type="button" onClick={() => setPropertyIndex(index)} className={`rounded-2xl border p-4 text-left transition-colors ${propertyIndex === index ? "border-coral bg-coral/10 text-coral" : "border-deep/15 hover:border-coral/60"}`}><PropertyDrawing type={option.key} /><span className="mt-3 block font-display text-lg font-semibold text-deep">{option.label}</span><span className="mt-1 block text-xs leading-snug text-deep/60">{option.note}</span></button>)}</div></div>}

        {step === 1 && <div><Slider label="Does your home have a garden or yard?" options={outdoorSizes} value={outdoor} onChange={(value) => { setOutdoor(value); if (value === 0) setPalms(0); }} /><div className="mt-7 rounded-2xl border border-deep/15 bg-white/60 p-5"><IncludedDisclosure detail="garden" /></div>{outdoor > 0 && <><div className="mt-4 rounded-2xl border border-deep/15 bg-white/60 p-5"><p className="font-display text-xl font-semibold">How often would you like us to visit?</p><p className="mt-1 text-sm text-deep/60">Twice a week is our standard recommendation.</p><div className={`mt-4 grid gap-2 ${selectedPackage.key === "basic" ? "grid-cols-2" : "grid-cols-3"}`}>{((selectedPackage.key === "basic" ? [1, 2] : [1, 2, 3]) as (1 | 2 | 3)[]).map((visits) => <button key={visits} type="button" onClick={() => setGardenVisits(visits)} className={`rounded-xl border px-3 py-3 text-sm font-bold ${gardenVisits === visits ? "border-coral bg-coral/10 text-coral" : "border-deep/15"}`}>{visits === 1 ? "Once" : visits === 2 ? "Twice" : "Three times"}<span className="block text-xs font-normal text-deep/55">per week</span></button>)}</div></div><div className="mt-4 rounded-2xl border border-deep/15 bg-white/60 p-5"><div className="flex flex-wrap items-center justify-between gap-4"><div><p className="font-display text-xl font-semibold">Do your palm trees need trimming?</p><p className="mt-1 text-sm text-deep/60">Once yearly, including green-waste removal · {exactEuro(8.75)} per palm each month</p></div><div className="flex items-center gap-3"><button type="button" onClick={() => setPalms(Math.max(0, palms - 1))} disabled={palms === 0} aria-label="Fewer palm trees" className="grid size-9 place-items-center rounded-full border border-deep/20 font-bold disabled:opacity-40">−</button><span className="min-w-8 text-center font-bold">{palms}</span><button type="button" onClick={() => setPalms(Math.min(30, palms + 1))} aria-label="More palm trees" className="grid size-9 place-items-center rounded-full border border-deep/20 font-bold">+</button></div></div></div></>}</div>}

        {step === 2 && <div><Slider label="Would you like regular pool care?" options={poolSizes} value={pool} onChange={setPool} />{pool > 0 && <><p className="mt-5 rounded-2xl border border-deep/15 bg-white/60 p-4 text-sm leading-relaxed text-deep/70">We visit at least once per week to keep the water quality intact. Pool care includes the necessary chemical treatments.</p><div className="mt-4 rounded-2xl border border-deep/15 bg-white/60 p-5"><IncludedDisclosure detail="pool" /></div></>}<button type="button" onClick={() => setJacuzzi((on) => !on)} aria-pressed={jacuzzi} className={`mt-6 flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors ${jacuzzi ? "border-coral bg-coral/10" : "border-deep/15 hover:border-coral/60"}`}><span><span className="block font-display text-lg font-semibold">Add jacuzzi / spa care</span><span className="mt-1 block text-sm text-deep/60">Water quality, filters and sanitising.</span></span><span className="font-display text-lg font-bold text-coral">+ €80 / month</span></button></div>}

        {step === 3 && <div><p className="section-label text-coral">Home cleaning</p><h3 className="mt-3 font-display text-3xl font-semibold">Would you like us to keep the inside cared for too?</h3><div className="mt-6 grid grid-cols-2 gap-3">{([false, true] as const).map((choice) => <button key={String(choice)} type="button" onClick={() => setCleaning(choice)} className={`rounded-2xl border p-4 text-left font-semibold ${cleaning === choice ? "border-coral bg-coral/10" : "border-deep/15"}`}>{choice ? "Yes, add home cleaning" : "No, I don’t need cleaning"}</button>)}</div>{cleaning && <div className="mt-6 grid gap-5 rounded-2xl border border-deep/15 bg-white/60 p-5 sm:grid-cols-2"><label className="text-sm font-semibold">Size of home<select value={cleaningSize} onChange={(event) => setCleaningSize(event.target.value as CleaningSize)} className="mt-2 w-full rounded-xl border border-deep/15 bg-white px-3 py-3 font-normal"><option value="up100">Up to 100 m²</option><option value="100to200">100–200 m²</option><option value="200to300">200–300 m²</option><option value="300to500">300–500 m²</option></select></label><label className="text-sm font-semibold">Cleaning visits<select value={cleaningVisits} onChange={(event) => setCleaningVisits(Number(event.target.value) as 1 | 2 | 3)} className="mt-2 w-full rounded-xl border border-deep/15 bg-white px-3 py-3 font-normal"><option value={1}>Once a week</option><option value={2}>Twice a week</option><option value={3}>Three times a week</option></select></label><div className="sm:col-span-2"><p className="text-sm text-deep/65">Indicative price: <strong className="text-coral">{euro(cleaningAdd)} / month</strong>.</p><IncludedDisclosure detail="cleaning" /></div></div>}<p className="mt-5 text-xs leading-relaxed text-deep/55">Homes over 500 m² are priced after a free home visit.</p></div>}

        {step === 4 && <div><p className="section-label text-coral">Air conditioning</p><h3 className="mt-3 font-display text-3xl font-semibold">Keep every unit running cleanly.</h3>{selectedPackage.acVisits === 0 ? <div className="mt-6 rounded-2xl border border-deep/15 bg-white/60 p-5"><p className="font-semibold">AC service is not scheduled with Essential Care.</p><p className="mt-2 text-sm text-deep/60">Choose Home Ready for one scheduled service yearly or Signature Care for two. You can still ask us for a separate AC quote.</p></div> : <><p className="mt-3 text-deep/65">Your {selectedPackage.name} package schedules AC service {selectedPackage.acVisits === 1 ? "once" : "twice"} a year. The service is added to your monthly fee according to the number of units.</p><div className="mt-6 grid grid-cols-4 gap-2 sm:grid-cols-8">{[0, 1, 2, 3, 4, 5, 8, 10].map((count) => <button key={count} type="button" onClick={() => setAcUnits(count)} className={`rounded-xl border px-2 py-3 text-sm font-bold ${acUnits === count ? "border-coral bg-coral/10 text-coral" : "border-deep/15"}`}>{count === 0 ? "None" : count}</button>)}</div>{acUnits > 0 && <p className="mt-5 font-semibold">{acUnits} {acUnits === 1 ? "unit" : "units"} · {selectedPackage.acVisits}× yearly · <span className="text-coral">{euro(acAdd)} / month</span></p>}<p className="mt-4 text-xs text-deep/55">Have 6, 7, 9 or more than 10 units? We’ll confirm the exact price at your free home visit.</p></>}</div>}

        {step === 5 && <div><p className="section-label text-coral">Your house, your choice</p><h3 className="mt-3 font-display text-3xl font-semibold">{selectedPackage.hours} hours for whatever your home needs.</h3><p className="mt-3 max-w-3xl leading-relaxed text-deep/65">These are simply ideas — you decide how your hours are used.</p><div className="mt-6 grid gap-2 sm:grid-cols-2">{hourIdeas.map((idea) => <p key={idea} className="flex gap-2 rounded-xl border border-deep/10 bg-white/55 p-3 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-coral" />{idea}</p>)}</div><div className="mt-6 rounded-2xl border border-coral/35 bg-coral/10 p-4 text-sm leading-relaxed"><strong>Simple hour rules:</strong> time on site is counted in 15-minute steps, travel is never counted, visits are at least one hour, and unused hours roll over for one month. Away mode lets hours accumulate for up to three months.</div></div>}

        {step === 6 && <div><p className="section-label text-coral">Your home plan is ready</p><h3 className="mt-3 font-display text-3xl font-semibold">Everything in one clear monthly plan.</h3><div className="mt-5 overflow-hidden rounded-2xl bg-deep text-sunlit"><div className="flex flex-wrap items-end justify-between gap-4 p-5 md:p-6"><div><p className="section-label text-coral">Indicative monthly total · IVA included</p><p className="mt-2 font-display text-4xl font-semibold md:text-5xl">{euro(displayedTotal)}<span className="ml-2 text-base text-sunlit/60">/ month</span></p></div><p className="text-sm font-bold text-coral">No upfront payment — billed after service</p></div><p className="border-t border-sunlit/15 px-5 pb-1 pt-3 text-xs text-sunlit/50 md:px-6">Each service below shows exactly what we do on every visit.</p><div className="border-t border-sunlit/15 px-5 py-2 md:px-6">{lines.map((line) => <div key={line.label} className="border-b border-sunlit/10 py-3 text-sm last:border-0"><div className="grid grid-cols-[1fr_auto] gap-x-4"><span>{line.label}</span><span className="font-semibold">{euro(line.amount)}</span><span className="text-xs text-sunlit/55">{line.frequency}</span></div>{line.detail && <IncludedDisclosure detail={line.detail} onDark />}</div>)}</div></div><div className="mt-5 rounded-2xl border border-deep/15 bg-white/70 p-5"><p className="font-display text-xl font-semibold">What’s always included</p><ul className="mt-3 space-y-2 text-sm text-deep/75">{[`${selectedPackage.hours} service hours each month — yours to use where the home needs them`, "One dedicated team and plan manager", "A monthly report with tasks, time and photos in your Property Vault", "No minimum term — cancel any month"].map((item) => <li key={item} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-coral" />{item}</li>)}</ul></div><p className="mt-4 text-xs leading-relaxed text-deep/55">Indicative price, confirmed after a free look at your property. The confirmed price stays within ±10%, or you can cancel free of charge. Materials up to €50 per job are approved automatically; larger amounts need your approval first. If a yearly service has already taken place when you cancel, its unpaid balance becomes due.</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl border border-deep/15 bg-white/70 p-5"><p className="section-label text-coral">Keep your quote</p><h4 className="mt-2 font-display text-xl font-semibold">Download your plan as a PDF.</h4><button type="button" onClick={handlePdf} disabled={pdfBusy} className="solid-button solid-button-coral mt-4 !px-5 !py-2.5 !text-sm disabled:opacity-60"><Download className="size-4" />{pdfBusy ? "Preparing…" : "Download my quote (PDF)"}</button></div><div className="rounded-2xl border border-deep/15 bg-white/70 p-5"><p className="section-label text-coral">Need to show us more?</p><p className="mt-2 text-sm text-deep/65">Send a quick video of the garden, pool or anything that needs care.</p><button type="button" onClick={() => setVideoOpen((open) => !open)} className="solid-button mt-4 !border !border-deep/20 !bg-transparent !px-5 !py-2.5 !text-sm !text-deep"><Video className="size-4" />Send us a video</button>{videoOpen && <form className="mt-4 grid gap-3" onSubmit={(event) => { event.preventDefault(); const body = `Name: ${videoName}\nEmail or WhatsApp: ${videoContact}\nPlease send me a link to share a property video.`; window.location.href = `mailto:info@solidmaint.com?subject=Property video for my care plan&body=${encodeURIComponent(body)}`; }}><input required value={videoName} onChange={(event) => setVideoName(event.target.value)} placeholder="Your name" className="rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm" /><input required value={videoContact} onChange={(event) => setVideoContact(event.target.value)} placeholder="Email or WhatsApp" className="rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm" /><button className="solid-button solid-button-coral !py-2.5 !text-sm" type="submit">Request my upload link</button></form>}</div></div>
          <div className="mt-5 rounded-2xl border border-coral/40 bg-coral/10 p-5 md:p-6"><p className="section-label text-coral">Let’s connect</p><h4 className="mt-2 font-display text-xl font-semibold">Would you like a home visit from our specialist, or are you not ready yet?</h4>{nextSent ? <p className="mt-4 flex gap-2 text-sm font-semibold"><Check className="size-4 text-coral" />Your email app has opened with everything filled in. Press send and we’ll be in touch.</p> : <form className="mt-4" onSubmit={(event) => { event.preventDefault(); const details = [`Request: ${nextMode === "visit" ? "Free specialist home visit" : "Callback"}`, `Name: ${nextName}`, `Phone: ${nextPhone}`, `Email for estimate: ${nextEmail}`, `Property location: ${nextTown || "—"}`, `Best time: ${nextTime}`, `Notes: ${nextNote || "—"}`, "", "— My plan —", enquiryBody].join("\n"); window.location.href = `mailto:info@solidmaint.com?subject=${encodeURIComponent(nextMode === "visit" ? "Care plan — home visit request" : "Care plan — callback request")}&body=${encodeURIComponent(details)}`; setNextSent(true); }}><div className="grid gap-2 sm:grid-cols-2">{([ ["visit", "Yes, I’d like a home visit", Home], ["call", "Not ready yet? Request a callback", Phone] ] as const).map(([key, label, Icon]) => <button key={key} type="button" onClick={() => setNextMode(key)} className={`rounded-xl border p-3 text-left font-semibold ${nextMode === key ? "border-coral bg-white" : "border-deep/15"}`}><Icon className="mr-2 inline size-4 text-coral" />{label}</button>)}</div><div className="mt-4 grid gap-3 sm:grid-cols-2"><input required value={nextName} onChange={(e) => setNextName(e.target.value)} placeholder="Your name" className="rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm" /><input required type="tel" value={nextPhone} onChange={(e) => setNextPhone(e.target.value)} placeholder="Phone number" className="rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm" /><input required type="email" value={nextEmail} onChange={(e) => setNextEmail(e.target.value)} placeholder="Email for your estimate" className="rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm" /><input value={nextTown} onChange={(e) => setNextTown(e.target.value)} placeholder="Property location" className="rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm" /><select value={nextTime} onChange={(e) => setNextTime(e.target.value)} className="rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm sm:col-span-2"><option>Any time, 09:00–18:00</option><option>Morning, 09:00–12:00</option><option>Midday, 12:00–15:00</option><option>Afternoon, 15:00–18:00</option></select><label className="text-sm font-semibold sm:col-span-2">Is there a service you don’t see in our offer?<textarea value={nextNote} onChange={(e) => setNextNote(e.target.value)} placeholder="Tell us what else your home needs (optional)" rows={3} className="mt-2 w-full rounded-xl border border-deep/15 bg-white px-3 py-2.5 text-sm" /></label></div><button type="submit" className="solid-button solid-button-coral mt-4 w-full">{nextMode === "visit" ? "Book my free home visit" : "Request my callback"}<ArrowRight /></button></form>}</div>
        </div>}
      </div>
       <div className="flex items-center justify-between gap-3 border-t border-deep/10 px-5 py-4 md:px-8"><button type="button" onClick={() => (step === 0 ? onClose() : setStep((current) => current - 1))} className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-deep/60 hover:text-coral"><ArrowLeft className="size-4" />{step === 0 ? "Close" : "Back"}</button>{step < steps.length - 1 ? <>{step > 0 && <p className="hidden text-sm text-deep/60 sm:block"><span className="font-display text-lg font-bold text-deep">{euro(displayedTotal)}</span> / month</p>}<button type="button" onClick={() => setStep((current) => current + 1)} className="solid-button solid-button-coral">Continue<ArrowRight /></button></> : <p className="font-display text-lg font-semibold">{euro(displayedTotal)} / month</p>}</div>
    </div>
  </div>;
}
