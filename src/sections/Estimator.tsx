import { useMemo, useState } from "react";
import { ArrowUpRight, Calculator } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { whatsappLink } from "../data/content";

const CATEGORIES = [
  "Web Development",
  "AI & Generative AI",
  "Data Science & ML",
  "Data Analytics",
  "Cloud & Deployment",
  "Blockchain",
  "IoT Projects",
  "Custom Software",
  "Not sure yet",
] as const;

type ProjectType = "full" | "single";
type Complexity = "simple" | "standard" | "advanced";
type Deadline = "flexible" | "soon" | "urgent";

const RANGES: Record<ProjectType, Record<Complexity, [number, number]>> = {
  single: { simple: [6000, 7500], standard: [7000, 9000], advanced: [8500, 10000] },
  full: { simple: [11000, 12500], standard: [12000, 14000], advanced: [13500, 15000] },
};

const inr = (n: number) => "₹" + n.toLocaleString("en-IN");

function RadioGroup<T extends string>({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-mute dark:text-night-ink/55">
        {legend}
      </legend>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className={`cursor-pointer rounded-full border px-4 py-2.5 text-[14px] font-semibold transition-colors duration-150 ${
              value === o.value
                ? "border-brand bg-brand text-white dark:border-honey dark:bg-honey dark:text-ink"
                : "border-ink/15 bg-white/70 hover:border-ink/30 dark:border-white/15 dark:bg-white/5"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function Estimator() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);
  const [type, setType] = useState<ProjectType>("full");
  const [complexity, setComplexity] = useState<Complexity>("standard");
  const [deadline, setDeadline] = useState<Deadline>("flexible");

  const [low, high] = useMemo(() => RANGES[type][complexity], [type, complexity]);

  const message = useMemo(() => {
    const typeLabel = type === "full" ? "Complete project" : "Individual service";
    return (
      `Hi VishvaTech, I'd like an indicative estimate. ` +
      `Service: ${category}. Type: ${typeLabel}. Complexity: ${complexity}. Deadline: ${deadline}. ` +
      `Indicative range shown: ${inr(low)} – ${inr(high)}. Please share a custom quote.`
    );
  }, [category, type, complexity, deadline, low, high]);

  return (
    <section id="estimator" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          align="center"
          eyebrow="Cost estimator"
          title="What might it cost?"
          copy="Answer four quick questions for an indicative range. The final quote always depends on your exact scope — we confirm it with you before starting."
        />

        <Reveal delay={100}>
          <div className="card-soft mx-auto mt-10 max-w-3xl rounded-[28px] p-6 sm:p-9">
            <div className="space-y-7">
              <div>
                <label
                  htmlFor="est-category"
                  className="text-[13px] font-bold uppercase tracking-[0.12em] text-ink-mute dark:text-night-ink/55"
                >
                  Service category
                </label>
                <select
                  id="est-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2.5 w-full rounded-2xl border border-ink/15 bg-white/80 px-4 py-3.5 text-[15px] font-medium dark:border-white/15 dark:bg-white/5"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <RadioGroup<ProjectType>
                legend="Project type"
                name="est-type"
                value={type}
                onChange={setType}
                options={[
                  { value: "full", label: "Complete project (₹11K–₹15K)" },
                  { value: "single", label: "Single service (₹6K–₹10K)" },
                ]}
              />

              <RadioGroup<Complexity>
                legend="Feature complexity"
                name="est-complexity"
                value={complexity}
                onChange={setComplexity}
                options={[
                  { value: "simple", label: "Simple" },
                  { value: "standard", label: "Standard" },
                  { value: "advanced", label: "Advanced" },
                ]}
              />

              <RadioGroup<Deadline>
                legend="Deadline"
                name="est-deadline"
                value={deadline}
                onChange={setDeadline}
                options={[
                  { value: "flexible", label: "Flexible" },
                  { value: "soon", label: "Within 2 weeks" },
                  { value: "urgent", label: "Urgent" },
                ]}
              />
            </div>

            <div
              className="mt-8 rounded-2xl bg-ink p-6 text-ivory sm:p-7 dark:bg-ivory dark:text-ink"
              aria-live="polite"
            >
              <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.16em] opacity-65">
                <Calculator size={15} /> Indicative estimate
              </p>
              <p className="mt-2 font-display text-[38px] font-medium tracking-tight sm:text-[42px]">
                {inr(low)} – {inr(high)}
              </p>
              <p className="mt-2 text-[13.5px] leading-relaxed opacity-75">
                Based on published ranges
                {type === "full" ? " for complete projects" : " for individual services"}.{" "}
                {deadline === "urgent"
                  ? "Rush scheduling may adjust the final quote."
                  : deadline === "soon"
                    ? "A 2-week timeline can affect scheduling — we'll confirm feasibility first."
                    : "Final pricing depends on scope, features and complexity."}{" "}
                This is an indication only, not a confirmed quote.
              </p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-ivory px-7 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-honey dark:bg-ink dark:text-ivory dark:hover:bg-brand dark:hover:text-white"
              >
                Get this estimate on WhatsApp
                <ArrowUpRight size={17} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
