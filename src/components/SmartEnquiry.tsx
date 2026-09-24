import { useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

type Field =
  | { kind: "text"; key: string; label: string; placeholder: string }
  | { kind: "select"; key: string; label: string; options: string[] };

type Audience = {
  id: string;
  label: string;
  intro: string;
  fields: Field[];
};

const emailField: Field = { kind: "text", key: "email", label: "Your email", placeholder: "you@example.com" };
const nameField: Field = { kind: "text", key: "name", label: "Your name", placeholder: "First name is fine" };

const audiences: Audience[] = [
  {
    id: "overseas",
    label: "Overseas owner",
    intro: "Tell us about your home away from home — we'll shape the care around how you use it.",
    fields: [
      { kind: "select", key: "property", label: "What kind of property is it?", options: ["Flat or apartment", "Townhouse", "Villa", "Finca or country home"] },
      { kind: "select", key: "town", label: "Where is it?", options: ["Benalmádena", "Fuengirola", "Mijas", "Marbella", "Estepona", "Sotogrande", "Somewhere else on the Costa del Sol"] },
      { kind: "select", key: "visits", label: "How often do you visit?", options: ["A few times a year", "Every couple of months", "Monthly", "Rarely — it is mostly rented or empty"] },
      { kind: "select", key: "worry", label: "What worries you most while you're away?", options: ["Security and checks", "The pool", "The garden", "Storms, leaks and damp", "Everything, honestly"] },
      nameField,
      emailField,
    ],
  },
  {
    id: "resident",
    label: "Resident owner",
    intro: "You live here full-time — let's take the upkeep off your plate.",
    fields: [
      { kind: "select", key: "property", label: "What kind of home is it?", options: ["Flat or apartment", "Townhouse", "Villa", "Finca or country home"] },
      { kind: "select", key: "town", label: "Where do you live?", options: ["Benalmádena", "Fuengirola", "Mijas", "Marbella", "Estepona", "Sotogrande", "Somewhere else on the Costa del Sol"] },
      { kind: "select", key: "priority", label: "What needs the most care?", options: ["The garden", "The pool", "Repairs and odd jobs", "Air conditioning", "A bit of everything"] },
      { kind: "select", key: "start", label: "When would you like to start?", options: ["As soon as possible", "Within a month", "Just comparing for now"] },
      nameField,
      { kind: "text", key: "phone", label: "Your phone number", placeholder: "+34 ..." },
    ],
  },
  {
    id: "manager",
    label: "Property manager",
    intro: "Tell us about your portfolio — we'll come back with a partnership proposal.",
    fields: [
      { kind: "text", key: "company", label: "Company or agency name", placeholder: "Your company" },
      { kind: "select", key: "homes", label: "How many homes do you look after?", options: ["1–5 homes", "6–25 homes", "26–60 homes", "60+ homes"] },
      { kind: "select", key: "needs", label: "What do you need most?", options: ["Regular maintenance plans", "Fast repairs between guests", "Keyholding and inspections", "Renovations and projects", "All of it"] },
      { kind: "select", key: "areas", label: "Which areas do you cover?", options: ["Benalmádena area", "Marbella area", "Estepona area", "Sotogrande area", "Several of these"] },
      nameField,
      emailField,
    ],
  },
  {
    id: "buying",
    label: "Buying a home",
    intro: "Buying on the Costa? We'll help you understand what the property needs before and after completion.",
    fields: [
      { kind: "select", key: "area", label: "Where are you looking?", options: ["Benalmádena", "Fuengirola", "Mijas", "Marbella", "Estepona", "Sotogrande", "Still deciding"] },
      { kind: "select", key: "timeline", label: "Where are you in the process?", options: ["Just browsing", "Viewing properties", "Offer accepted", "Completing soon", "Already have the keys"] },
      { kind: "select", key: "check", label: "Would a pre-purchase condition check help?", options: ["Yes, please", "Maybe — tell me more", "No, I need care after I move in"] },
      nameField,
      emailField,
    ],
  },
];

export function SmartEnquiry() {
  const [active, setActive] = useState<Audience | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const choose = (audience: Audience) => {
    setActive(audience);
    setValues({});
    setSent(false);
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!active) return;
    const lines = active.fields
      .map((field) => `${field.label}: ${values[field.key] || "—"}`)
      .join("\n");
    const body = `Hello SolidMaint team,\n\nI'm an ${active.label.toLowerCase()} and would like a tailored recommendation.\n\n${lines}\n\nThank you!`;
    window.location.href = `mailto:info@solidmaint.com?subject=${encodeURIComponent(
      `Smart enquiry — ${active.label}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div>
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {audiences.map((audience) => {
          const isActive = active?.id === audience.id;
          return (
            <button
              key={audience.id}
              type="button"
              onClick={() => choose(audience)}
              aria-expanded={isActive}
              className={`audience-pill px-6 py-3.5 text-base md:text-lg ${isActive ? "ring-2 ring-sunlit/70 ring-offset-2 ring-offset-transparent" : ""}`}
            >
              {audience.label}
              {isActive ? (
                <ChevronDown className="size-5" aria-hidden="true" />
              ) : (
                <ArrowRight className="size-5" aria-hidden="true" />
              )}
            </button>
          );
        })}
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${active ? "mt-10 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          {active && (
            <form
              onSubmit={submit}
              className="mx-auto max-w-2xl rounded-[1.75rem] bg-sunlit p-6 text-left text-deep shadow-[0_24px_60px_-20px_rgb(0_0_0/0.45)] md:p-9"
            >
              <p className="font-display text-2xl font-semibold leading-snug md:text-3xl">{active.intro}</p>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                {active.fields.map((field) => (
                  <label key={field.key} className={`block ${field.kind === "text" && (field.key === "name" || field.key === "email" || field.key === "phone") ? "" : "sm:col-span-2"}`}>
                    <span className="mb-1.5 block text-xs font-extrabold uppercase tracking-wider text-deep/60">{field.label}</span>
                    {field.kind === "text" ? (
                      <input
                        type={field.key === "email" ? "email" : field.key === "phone" ? "tel" : "text"}
                        required={field.key === "email" || field.key === "name"}
                        maxLength={120}
                        value={values[field.key] ?? ""}
                        onChange={(event) => setValues((v) => ({ ...v, [field.key]: event.target.value }))}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl border border-deep/20 bg-transparent px-4 py-3 text-base outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/30"
                      />
                    ) : (
                      <select
                        required
                        value={values[field.key] ?? ""}
                        onChange={(event) => setValues((v) => ({ ...v, [field.key]: event.target.value }))}
                        className="w-full appearance-none rounded-xl border border-deep/20 bg-transparent px-4 py-3 text-base outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/30"
                      >
                        <option value="" disabled>Choose one…</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    )}
                  </label>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-coral rounded-full px-7 py-3.5 text-base font-bold">
                  Get my recommendation <ArrowRight className="size-4" aria-hidden="true" />
                </button>
                <p className="text-sm text-deep/55">Our team will reply within one working day.</p>
              </div>
              {sent && (
                <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-2 text-sm font-bold text-coral">
                  <Check className="size-4" aria-hidden="true" /> Your email app should have opened with everything pre-filled — just press send.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
