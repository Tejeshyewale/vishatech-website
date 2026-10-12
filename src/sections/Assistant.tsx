import { useState } from "react";
import { ArrowRight, Bot, RotateCcw } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { whatsappLink } from "../data/content";

const GOALS = [
  { id: "web", label: "A website or web app", service: "Web Development" },
  { id: "ai", label: "An AI feature, chatbot or ML model", service: "AI & Generative AI" },
  { id: "data", label: "A dashboard or data analysis", service: "Data Analytics" },
  { id: "ml", label: "Predictions from my data", service: "Data Science & ML" },
  { id: "iot", label: "A hardware / sensor build", service: "IoT Projects" },
  { id: "other", label: "Something else", service: "Custom Software" },
] as const;

const STAGES = [
  { id: "rough", label: "Just a rough idea", tip: "Share whatever you have — we'll shape it into clear requirements together." },
  { id: "clear", label: "I know what I need", tip: "Send your requirements and we'll confirm scope and a quotation." },
  { id: "stuck", label: "Stuck on one piece", tip: "Pick the individual-service option — a dashboard, model, fix or deployment." },
] as const;

export default function Assistant() {
  const [goal, setGoal] = useState<string | null>(null);
  const [stage, setStage] = useState<string | null>(null);

  const service = GOALS.find((g) => g.id === goal)?.service;
  const stageTip = STAGES.find((s) => s.id === stage)?.tip;
  const done = goal !== null && stage !== null;

  function reset() {
    setGoal(null);
    setStage(null);
  }

  const optionClass = (active: boolean) =>
    `rounded-2xl border px-4 py-3.5 text-left text-[14.5px] font-semibold transition-colors duration-150 ${
      active
        ? "border-brand bg-brand text-white dark:border-honey dark:bg-honey dark:text-ink"
        : "border-ink/15 bg-white/70 hover:border-ink/30 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
    }`;

  return (
    <section id="assistant" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          align="center"
          eyebrow="Service finder"
          title="Not sure what you need?"
          copy="Answer two quick questions — this simple guide points you to the right service. No AI hype, no data leaves your browser."
        />

        <Reveal delay={100}>
          <div className="card-soft mx-auto mt-10 max-w-2xl rounded-[28px] p-6 sm:p-9">
            <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink-mute dark:text-night-ink/55">
              <Bot size={16} /> Step 1 — What do you want to build?
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2" role="group" aria-label="What do you want to build?">
              {GOALS.map((g) => (
                <button key={g.id} type="button" onClick={() => setGoal(g.id)} aria-pressed={goal === g.id} className={optionClass(goal === g.id)}>
                  {g.label}
                </button>
              ))}
            </div>

            <p className="mt-7 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.12em] text-ink-mute dark:text-night-ink/55">
              <Bot size={16} /> Step 2 — Where do you stand?
            </p>
            <div className="mt-3 grid gap-2" role="group" aria-label="Where do you stand?">
              {STAGES.map((s) => (
                <button key={s.id} type="button" onClick={() => setStage(s.id)} aria-pressed={stage === s.id} className={optionClass(stage === s.id)}>
                  {s.label}
                </button>
              ))}
            </div>

            {done && service && stageTip && (
              <div className="mt-7 rounded-2xl bg-ink p-6 text-ivory dark:bg-ivory dark:text-ink" aria-live="polite">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] opacity-65">
                  Suggested service
                </p>
                <p className="mt-1 font-display text-[26px] font-medium tracking-tight">{service}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed opacity-75">{stageTip}</p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={whatsappLink(
                      `Hi VishvaTech, I need help with ${service}. My situation: ${STAGES.find((s) => s.id === stage)?.label}. Please guide me.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-full bg-ivory px-6 text-[14.5px] font-semibold text-ink transition-colors hover:bg-honey dark:bg-ink dark:text-ivory dark:hover:bg-brand dark:hover:text-white"
                  >
                    Ask about {service} <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex min-h-[50px] flex-1 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-[14.5px] font-semibold transition-colors hover:bg-white/10 dark:border-ink/20"
                  >
                    Use the enquiry form
                  </a>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold opacity-70 hover:opacity-100"
                >
                  <RotateCcw size={14} /> Start over
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
