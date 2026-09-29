import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Phone,
  Smartphone,
  Video,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type PropertyKey = "flat" | "townhouse" | "villa" | "finca";

export const HOURLY_RATE = 45;
export const PLAN_BASE = 89;

const propertyTypes: { key: PropertyKey; label: string; note: string; add: number }[] = [
  { key: "flat", label: "Flat", note: "Apartment or penthouse", add: 0 },
  { key: "townhouse", label: "Townhouse", note: "Shared or private outdoor space", add: 25 },
  { key: "villa", label: "Villa", note: "Detached home and grounds", add: 70 },
  { key: "finca", label: "Finca / Estate", note: "Larger rural property or estate", add: 130 },
];

const outdoorSizes = [
  { label: "No garden / yard", note: "No regular outdoor care", add: 0 },
  { label: "Patio / courtyard", note: "up to 100 m²", add: 20 },
  { label: "Small garden", note: "100–300 m²", add: 35 },
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

const terms = [
  { key: "trial", label: "Monthly try-out", discount: 0, note: "Rolling monthly, no commitment — cancel at any time if you wish" },
  { key: "3", label: "3 months", discount: 0.05, note: "5% off your monthly plan" },
  { key: "6", label: "6 months", discount: 0.08, note: "8% off your monthly plan" },
  { key: "12", label: "12 months", discount: 0.1, note: "10% off your monthly plan" },
] as const;

const extraServices: { label: string; add: number }[] = [
  { label: "AC seasonal service", add: 25 },
  { label: "Deep cleaning", add: 45 },
  { label: "Ventilation duct and vent cleaning", add: 20 },
  { label: "Range hood filter cleaning or replacement", add: 10 },
  { label: "Pool filter sand or glass replacement", add: 15 },
  { label: "Irrigation system inspection, repair and timer adjustment", add: 15 },
  { label: "Solar panel cleaning", add: 20 },
  { label: "Drain and trap cleaning (indoor, terrace, roof)", add: 15 },
  { label: "EV charging point installation", add: 30 },
  { label: "Bathroom silicone and grout renewal", add: 15 },
  { label: "Roof cleaning", add: 25 },
  { label: "Roof coating and moss removal", add: 30 },
  { label: "Facade cleaning", add: 20 },
  { label: "Terrace and walkway pressure washing", add: 15 },
  { label: "Exterior window cleaning", add: 20 },
  { label: "Hydrophobic terrace coating", add: 25 },
  { label: "Palm tree pruning", add: 20 },
  { label: "Tree pruning", add: 20 },
  { label: "Pest control", add: 15 },
];

const euro = (value: number) => `€${value.toFixed(2)}`;

function PropertyDrawing({ type }: { type: PropertyKey }) {
  if (type === "flat") {
    return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M24 56V9h48v47M18 56h60M35 19h8v8h-8zm18 0h8v8h-8zM35 35h8v8h-8zm18 0h8v8h-8zM45 56V45h8v11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  }
  if (type === "townhouse") {
    return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M12 56V26l18-14 18 14v30m0 0V26l18-14 18 14v30M7 56h82M21 34h9v9h-9zm36 0h9v9h-9zM35 56V39h8v17m28 0V39h8v17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  }
  if (type === "villa") {
    return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M10 56h76M18 56V29L48 10l30 19v27M10 31l38-24 38 24M29 35h11v10H29zm27 0h11v10H56zM44 56V39h9v17M76 22V10h7v17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" /></svg>;
  }
  return <svg viewBox="0 0 96 64" className="h-16 w-full" aria-hidden="true"><path d="M7 56h82M18 56V31L48 13l30 18v25M12 34l36-24 36 24M29 37h11v9H29zm27 0h11v9H56zM44 56V40h9v16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}


function Slider({ label, options, value, onChange }: { label: string; options: { label: string; note: string; add: number }[]; value: number; onChange: (value: number) => void }) {
  const selected = options[value] ?? options[0];
  if (!selected) return null;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4"><p className="section-label text-coral">{label}</p><p className="text-sm font-semibold text-deep/60">{selected.note}</p></div>
      <p className="mt-2 font-display text-2xl font-semibold md:text-3xl">{selected.label}</p>
      <input type="range" min={0} max={options.length - 1} step={1} value={value} onChange={(event) => onChange(Number(event.target.value))} aria-label={label} className="mt-5 w-full accent-[var(--coral)]" />
      <div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-wide text-deep/45"><span>None / smallest</span><span>Largest</span></div>
    </div>
  );
}

export function PlanBuilder({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [propertyIndex, setPropertyIndex] = useState(1);
  const [outdoor, setOutdoor] = useState(1);
  const [pool, setPool] = useState(0);
  const [jacuzzi, setJacuzzi] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [hours, setHours] = useState(3);
  const [termIndex, setTermIndex] = useState(1);
  const [callbackOpen, setCallbackOpen] = useState(false);
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackTime, setCallbackTime] = useState("Any time, 09:00–18:00");
  const [callbackSent, setCallbackSent] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [videoName, setVideoName] = useState("");
  const [videoContact, setVideoContact] = useState("");
  const [videoSent, setVideoSent] = useState(false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  const property = propertyTypes[propertyIndex] ?? propertyTypes[0];
  const outdoorChoice = outdoorSizes[outdoor] ?? outdoorSizes[0];
  const poolChoice = poolSizes[pool] ?? poolSizes[0];
  const term = terms[termIndex] ?? terms[0];
  const chosenServices = extraServices.filter((service) => selectedServices.includes(service.label));
  const servicesAdd = chosenServices.reduce((sum, service) => sum + service.add, 0);
  const hoursAdd = hours * HOURLY_RATE;
  const jacuzziAdd = jacuzzi ? 80 : 0;

  const pricing = useMemo(() => {
    const beforeDiscount = PLAN_BASE + (property?.add ?? 0) + (outdoorChoice?.add ?? 0) + (poolChoice?.add ?? 0) + jacuzziAdd + servicesAdd + hoursAdd;
    const saving = beforeDiscount * term.discount;
    return { beforeDiscount, saving, total: beforeDiscount - saving };
  }, [property, outdoorChoice, poolChoice, jacuzziAdd, servicesAdd, hoursAdd, term]);

  const steps = ["Welcome", "Your property", "Outdoor space", "Pool care", "The extras", "Your hours", "Plan length & quote"];
  const enquiryBody = encodeURIComponent([
    `Plan: Bespoke care plan — built with the plan builder`,
    `Property: ${property?.label ?? "Not selected"}`,
    `Garden / yard: ${outdoorChoice?.label ?? "Not selected"}`,
    `Pool: ${poolChoice?.label ?? "Not selected"}`,
    `Jacuzzi / spa care: ${jacuzzi ? "Yes (+€80.00 per month)" : "No"}`,
    `Extra services: ${chosenServices.length ? chosenServices.map((service) => service.label).join(", ") : "None"}`,
    `Maintenance hours: ${hours} h/month (${euro(HOURLY_RATE)} per hour, unused hours roll over)`,
    `Plan length: ${term.label} (${Math.round(term.discount * 100)}% discount)`,
    `Indicative total: ${euro(pricing.total)} per month`, "", "My name:", "Property address:", "Best number to reach me:",
  ].join("\n"));

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-deep/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="relative flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-sunlit text-deep shadow-2xl sm:rounded-3xl">
        <div className="flex items-center justify-between gap-4 border-b border-deep/10 px-5 py-4 md:px-8">
          <div><p className="section-label text-coral">Your home. Your plan.</p><p className="text-sm text-deep/60">Step {step + 1} of {steps.length} · {steps[step]}</p></div>
          <button type="button" onClick={onClose} aria-label="Close plan builder" className="grid size-10 place-items-center rounded-full border border-deep/20 transition-colors hover:border-coral hover:text-coral"><X className="size-5" aria-hidden="true" /></button>
        </div>
        <div className="h-1 w-full bg-deep/10"><div className="h-full bg-coral transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>

        <div className="flex-1 overflow-y-auto px-5 py-7 md:px-8 md:py-9">
          {step === 0 && <div>
            <h3 className="max-w-2xl font-display text-3xl font-semibold leading-tight md:text-4xl">One home. One plan. Built entirely around it.</h3>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-deep/70">No fixed bundles — we assemble your plan from what your property actually needs. Tell us about the home, tick the care it needs and choose your monthly maintenance hours. Your indicative price grows with every choice, and nothing you don’t need ever makes it onto the plan.</p>
            <div className="mt-6 rounded-2xl border border-coral/40 bg-coral/10 p-4"><p className="flex flex-wrap items-center gap-2 font-bold"><Smartphone className="size-5 text-coral" aria-hidden="true" />Your free Property Vault<span className="rounded-full bg-coral px-2.5 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-wider text-sunlit">Always included</span></p><p className="mt-1.5 text-sm leading-relaxed text-deep/70">A photo-documented history of every visit, check, service and repair — whatever your plan includes.</p></div>
          </div>}

          {step === 1 && <div>
            <p className="section-label text-coral">What kind of property is it?</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">Choose the closest match.</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">{propertyTypes.map((option, index) => <button key={option.key} type="button" onClick={() => setPropertyIndex(index)} className={`rounded-2xl border p-4 text-left transition-colors ${propertyIndex === index ? "border-coral bg-coral/10 text-coral" : "border-deep/15 hover:border-coral/60"}`}><PropertyDrawing type={option.key} /><span className="mt-3 block font-display text-lg font-semibold text-deep">{option.label}</span><span className="mt-1 block text-xs leading-snug text-deep/60">{option.note}</span></button>)}</div>
          </div>}

          {step === 2 && <div><Slider label="Does your home have a garden or yard?" options={outdoorSizes} value={outdoor} onChange={setOutdoor} /><p className="mt-6 leading-relaxed text-deep/65">Choose “No garden / yard” for a flat without outdoor space. Otherwise, pick the closest size and we’ll tailor the regular care accordingly.</p></div>}
          {step === 3 && <div><Slider label="Would you like regular pool care?" options={poolSizes} value={pool} onChange={setPool} />
            <button type="button" onClick={() => setJacuzzi((on) => !on)} aria-pressed={jacuzzi} className={`mt-6 flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors ${jacuzzi ? "border-coral bg-coral/10" : "border-deep/15 hover:border-coral/60"}`}>
              <span>
                <span className="block font-display text-lg font-semibold text-deep">Add jacuzzi / spa care</span>
                <span className="mt-1 block text-sm leading-snug text-deep/60">Water quality, filters and sanitising for your jacuzzi or spa — cared for alongside your pool.</span>
              </span>
              <span className="shrink-0 text-right">
                <span className="block font-display text-lg font-bold text-coral">+ €80.00</span>
                <span className="block text-xs text-deep/55">per month</span>
              </span>
            </button>
            <p className="mt-6 leading-relaxed text-deep/65">No pool? No problem. Pool care is optional on every plan and only affects your price when you include it.</p></div>}

          {step === 4 && <div>
            <p className="section-label text-coral">The extras</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">Which extra services should your plan include?</h3>
            <p className="mt-3 leading-relaxed text-deep/65">Tick anything your home needs — each adds its own indicative amount to your monthly plan. Leave them all unticked and your plan stays lean.</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {extraServices.map((service) => {
                const active = selectedServices.includes(service.label);
                return (
                  <button key={service.label} type="button" aria-pressed={active} onClick={() => setSelectedServices((current) => current.includes(service.label) ? current.filter((item) => item !== service.label) : [...current, service.label])} className={`flex items-center justify-between gap-3 rounded-2xl border p-3.5 text-left transition-colors ${active ? "border-coral bg-coral/10" : "border-deep/15 hover:border-coral/60"}`}>
                    <span className="flex items-start gap-2.5 text-sm leading-snug"><span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border ${active ? "border-coral bg-coral text-sunlit" : "border-deep/25"}`}>{active && <Check className="size-3.5" aria-hidden="true" />}</span>{service.label}</span>
                    <span className="shrink-0 text-xs font-bold text-coral">+ {euro(service.add)}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-deep/55">Indicative monthly amounts, IVA included — we confirm every figure after a quick look at your property.</p>
          </div>}

          {step === 5 && <div>
            <p className="section-label text-coral">Hands-on maintenance</p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-tight">How many hours should we set aside for your home each month?</h3>
            <div className="mt-6 rounded-2xl border border-deep/15 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-display text-3xl font-semibold">{hours === 0 ? "No hours for now" : `${hours} ${hours === 1 ? "hour" : "hours"} / month`}</p>
                <p className="font-display text-2xl font-semibold text-coral">{hours === 0 ? "—" : `${euro(hoursAdd)} / month`}</p>
              </div>
              <input type="range" min={0} max={12} step={1} value={hours} onChange={(event) => setHours(Number(event.target.value))} aria-label="Maintenance hours per month" className="mt-5 w-full accent-[var(--coral)]" />
              <div className="mt-2 flex justify-between text-[0.65rem] font-bold uppercase tracking-wide text-deep/45"><span>0 h</span><span>12 h</span></div>
              <p className="mt-4 text-sm leading-relaxed text-deep/65">One clear rate of {euro(HOURLY_RATE)} per hour — spend them on repairs, odd jobs and practical help, and unused hours simply roll over to the next month. Most homes start with around 3 hours.</p>
            </div>
            <div className="mt-6 rounded-2xl border border-coral/40 bg-coral/10 p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="mailto:info@solidmaint.com?subject=Help%20me%20choose%20my%20care%20plan" aria-label="Email our property specialist" className="shrink-0 self-start transition-transform hover:scale-110 sm:self-center"><svg viewBox="0 0 64 46" className="size-12 text-coral" aria-hidden="true"><g className="phone-ring"><circle cx="11" cy="17" r="4.5" fill="currentColor" /><circle cx="47" cy="17" r="4.5" fill="currentColor" /><path d="M11 16 Q29 5 47 16" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /><path d="M15 40 L19 24 Q29 20 39 24 L43 40 Z" fill="currentColor" /><circle cx="29" cy="32" r="4.5" fill="var(--sunlit)" /></g><path className="phone-wave" d="M53 10 a8 8 0 0 1 0 11" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /><path className="phone-wave-2" d="M58 7 a13 13 0 0 1 0 17" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg></a>
                <p className="text-base leading-relaxed text-deep/70">Not sure how much time and care your home needs?<br /><a href="mailto:info@solidmaint.com?subject=Help%20me%20choose%20my%20care%20plan" className="font-bold text-coral underline decoration-coral/40 underline-offset-4 transition-colors hover:decoration-coral">Simply reach out — our property specialist is here to help.</a></p>
                <div className="ml-0 flex shrink-0 flex-col gap-2 self-start sm:ml-auto sm:self-center">
                  <button type="button" onClick={() => setCallbackOpen((open) => !open)} aria-expanded={callbackOpen} className="solid-button solid-button-coral !px-5 !py-2.5 !text-sm"><Phone className="size-4" aria-hidden="true" /> Request a callback</button>
                  <button type="button" onClick={() => setVideoOpen((open) => !open)} aria-expanded={videoOpen} className="solid-button !border !border-deep/25 !bg-transparent !px-5 !py-2.5 !text-sm !text-deep/80 transition-colors hover:!border-coral hover:!text-coral"><Video className="size-4" aria-hidden="true" /> Want to explain more to us? Send us a video</button>
                </div>
              </div>
              <div className={`grid transition-all duration-300 ${callbackOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  {callbackSent ? (
                    <p className="mt-4 rounded-xl bg-sunlit/70 p-4 text-sm font-semibold text-deep">Thank you! Our property specialist will call you back within one working day.</p>
                  ) : (
                    <form
                      className="mt-4 rounded-xl bg-sunlit/70 p-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                        const details = [
                          `Name: ${callbackName.trim()}`,
                          `Phone number: ${callbackPhone.trim()}`,
                          `Preferred callback time: ${callbackTime}`,
                        ].join("\n");
                        window.location.href = `mailto:info@solidmaint.com?subject=${encodeURIComponent("Callback request — care plan")}&body=${encodeURIComponent(details)}`;
                        setCallbackSent(true);
                      }}
                    >
                      <p className="text-sm font-semibold">Prefer a call? Share your details and we'll ring you.</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-3">
                        <label className="block text-xs font-semibold text-deep/70">Name
                          <input required maxLength={80} value={callbackName} onChange={(event) => setCallbackName(event.target.value)} placeholder="Your name" className="mt-1 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm font-normal text-deep placeholder:text-deep/40 focus:border-coral focus:outline-none" />
                        </label>
                        <label className="block text-xs font-semibold text-deep/70">Phone number
                          <input required type="tel" maxLength={30} value={callbackPhone} onChange={(event) => setCallbackPhone(event.target.value)} placeholder="+34 ..." className="mt-1 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm font-normal text-deep placeholder:text-deep/40 focus:border-coral focus:outline-none" />
                        </label>
                        <label className="block text-xs font-semibold text-deep/70">Preferred callback time
                          <select value={callbackTime} onChange={(event) => setCallbackTime(event.target.value)} className="mt-1 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm font-normal text-deep focus:border-coral focus:outline-none">
                            <option>Any time, 09:00–18:00</option>
                            <option>Morning, 09:00–12:00</option>
                            <option>Midday, 12:00–14:00</option>
                            <option>Afternoon, 14:00–18:00</option>
                          </select>
                        </label>
                      </div>
                      <button type="submit" className="solid-button solid-button-coral mt-4 !px-5 !py-2.5 !text-sm"><Phone className="size-4" aria-hidden="true" /> Call me back</button>
                      <p className="mt-2 text-xs text-deep/55">Mon–Fri, 09:00–18:00 CET — we'll call you back within one working day.</p>
                    </form>
                  )}
                </div>
              </div>
              <div className={`grid transition-all duration-300 ${videoOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  {videoSent ? (
                    <p className="mt-4 rounded-xl bg-sunlit/70 p-4 text-sm font-semibold text-deep">Action! 🎬 We'll be in touch within one working day with a link to send your video — then our property specialist will watch it and call you with a tailored recommendation.</p>
                  ) : (
                    <form
                      className="mt-4 rounded-xl bg-sunlit/70 p-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                        const details = [
                          `Name: ${videoName.trim()}`,
                          `Email or WhatsApp number: ${videoContact.trim()}`,
                          "They would like to send a short video of their property — please reply with the best way to send it.",
                        ].join("\n");
                        window.location.href = `mailto:info@solidmaint.com?subject=${encodeURIComponent("Video walkthrough — help me choose")}&body=${encodeURIComponent(details)}`;
                        setVideoSent(true);
                      }}
                    >
                      <p className="text-sm font-semibold">Feeling resourceful? 🎬 Film a quick tour of your yard, pool or garden — show us what needs care, and we'll recommend the perfect plan.</p>
                      <p className="mt-1.5 text-xs leading-relaxed text-deep/55">Completely optional — only if you fancy it (a call works just as well). Just tell us where to reach you and we'll send a link to share your video.</p>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        <label className="block text-xs font-semibold text-deep/70">Name
                          <input required maxLength={80} value={videoName} onChange={(event) => setVideoName(event.target.value)} placeholder="Your name" className="mt-1 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm font-normal text-deep placeholder:text-deep/40 focus:border-coral focus:outline-none" />
                        </label>
                        <label className="block text-xs font-semibold text-deep/70">Email or WhatsApp number
                          <input required maxLength={80} value={videoContact} onChange={(event) => setVideoContact(event.target.value)} placeholder="you@email.com or +34 ..." className="mt-1 w-full rounded-xl border border-deep/15 bg-white px-3 py-2 text-sm font-normal text-deep placeholder:text-deep/40 focus:border-coral focus:outline-none" />
                        </label>
                      </div>
                      <button type="submit" className="solid-button solid-button-coral mt-4 !px-5 !py-2.5 !text-sm"><Video className="size-4" aria-hidden="true" /> Lights, camera… send!</button>
                      <p className="mt-2 text-xs text-deep/55">No lights or script needed — a simple phone video walking around your property is perfect.</p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>}

          {step === 6 && <div>
            <p className="section-label text-coral">Choose your plan length</p><h3 className="mt-3 font-display text-3xl font-semibold leading-tight">Stay flexible, or save by staying longer.</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{terms.map((option, index) => <button key={option.key} type="button" onClick={() => setTermIndex(index)} className={`flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors ${termIndex === index ? "border-coral bg-coral/10" : "border-deep/15 hover:border-coral/60"}`}><span><span className="block font-display text-xl font-semibold">{option.label}</span><span className="block text-sm text-deep/60">{option.note}</span></span><span className="font-display text-lg font-semibold text-coral">{option.discount ? `−${Math.round(option.discount * 100)}%` : "Flexible"}</span></button>)}</div>
            <div className="mt-7 rounded-2xl border border-deep/15 bg-white/70 p-5 md:p-6">
              <p className="section-label text-coral">Your plan at a glance</p>
              <h4 className="mt-2 font-display text-xl font-semibold leading-snug md:text-2xl">Here's exactly what you're buying:</h4>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-deep/80">
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>Care for your <strong className="font-semibold">{property?.label.toLowerCase()}</strong> — our team from Finland and Sweden, with a dedicated plan manager and regular property visits.</span></li>
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{outdoorChoice?.add ? `Regular garden and outdoor care — ${outdoorChoice?.label.toLowerCase()}.` : "No regular garden or yard care — yours stays lean."}</span></li>
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{poolChoice?.add ? `Regular pool care — ${poolChoice?.label.toLowerCase()}.` : "No pool care included — easy to add later if your home changes."}</span></li>
                {jacuzzi && <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>Jacuzzi / spa care — water quality, filters and sanitising, alongside your pool.</span></li>}
                {chosenServices.length > 0 && <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>Extra services: {chosenServices.map((service) => service.label.toLowerCase()).join(", ")}.</span></li>}
                {chosenServices.length === 0 && <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>No extra services for now — you can tick more on at any time.</span></li>}
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{hours === 0 ? "No hands-on maintenance hours for now." : `${hours} hands-on maintenance ${hours === 1 ? "hour" : "hours"} every month at ${euro(HOURLY_RATE)} per hour — unused hours roll over.`}</span></li>
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>{term.discount ? `${term.label} plan — ${Math.round(term.discount * 100)}% off every month.` : "Monthly try-out — rolling monthly, no commitment, cancel at any time if you wish."}</span></li>
                <li className="flex gap-2.5"><Check className="mt-0.5 size-4 shrink-0 text-coral" aria-hidden="true" /><span>Your free <strong className="font-semibold">Property Vault</strong> — every visit, photo, report and document in one place, from anywhere.</span></li>
              </ul>
            </div>
            <div className="mt-5 rounded-2xl bg-deep p-5 text-sunlit md:p-6"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="section-label text-coral">Your indicative bespoke plan</p><p className="mt-2 font-display text-4xl font-semibold md:text-5xl">{euro(pricing.total)}<span className="ml-2 text-base text-sunlit/60">/ month</span></p></div>{pricing.saving > 0 && <p className="text-sm font-bold text-coral">You save {euro(pricing.saving)} each month</p>}</div>
              <ul className="mt-5 space-y-2 border-t border-sunlit/15 pt-4 text-sm text-sunlit/75"><li className="flex justify-between gap-4"><span>Care plan base · {property?.label}</span><span>{euro(PLAN_BASE + (property?.add ?? 0))}</span></li><li className="flex justify-between gap-4"><span>{outdoorChoice?.label} · {poolChoice?.label}</span><span>{euro((outdoorChoice?.add ?? 0) + (poolChoice?.add ?? 0))}</span></li>{jacuzzi && <li className="flex justify-between gap-4"><span>Jacuzzi / spa care</span><span>{euro(80)}</span></li>}{chosenServices.map((service) => <li key={service.label} className="flex justify-between gap-4"><span>{service.label}</span><span>{euro(service.add)}</span></li>)}<li className="flex justify-between gap-4"><span>{hours === 0 ? "No maintenance hours" : `${hours} maintenance ${hours === 1 ? "hour" : "hours"} · ${euro(HOURLY_RATE)}/hour`}</span><span className="font-bold text-coral">{hours === 0 ? "—" : euro(hoursAdd)}</span></li><li className="flex justify-between gap-4"><span>Property Vault</span><span className="font-bold text-coral">Free</span></li></ul>
            </div>
            <p className="mt-5 text-sm leading-snug text-deep/60">Indicative pricing, IVA included. We confirm the final plan after a quick look at your property — no surprises, ever.</p>
            <p className="text-sm leading-snug text-deep/60">* A quick note: our package prices cover services only — any materials needed are quoted separately before we begin.</p>
            <p className="text-sm leading-snug text-deep/60">This is only an estimate based on the information you've given us — how accurate it is depends on the condition of your property.</p>
            <a href={`mailto:info@solidmaint.com?subject=Bespoke%20care%20plan%20request&body=${enquiryBody}`} className="solid-button solid-button-coral mt-5 w-full">Yes, looks good. Let's meet up! <ArrowRight aria-hidden="true" /></a>
          </div>}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-deep/10 px-5 py-4 md:px-8">
          <button type="button" onClick={() => (step === 0 ? onClose() : setStep((current) => current - 1))} className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide text-deep/60 transition-colors hover:text-coral"><ArrowLeft className="size-4" aria-hidden="true" /> {step === 0 ? "Not now" : "Back"}</button>
          {step < steps.length - 1 ? <>{step >= 1 && <p className="text-sm text-deep/60"><span className="hidden sm:inline">Indicative price · </span><span className="font-display text-lg font-bold text-deep">{euro(pricing.total)}</span><span className="text-deep/60">/ month</span></p>}<button type="button" onClick={() => setStep((current) => current + 1)} className="solid-button solid-button-coral">{step === 0 ? "Let’s begin" : "Continue"} <ArrowRight aria-hidden="true" /></button></> : <p className="hidden font-display text-lg font-semibold sm:block">{euro(pricing.total)} / month</p>}
        </div>
      </div>
    </div>
  );
}
