import { ArrowRight, Check } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK } from "../data/content";

const PLANS = [
  {
    tag: "Build a project",
    price: "₹11K – ₹15K",
    copy: "Complete project development based on your requirements.",
    points: ["Idea to working build", "Development + basic deployment help", "Clean, explainable work"],
    cta: "Discuss My Project",
    highlight: true,
  },
  {
    tag: "Need a service?",
    price: "₹6K – ₹10K",
    copy: "For individual services such as development, analytics, model building, deployment, debugging or customization.",
    points: ["One focused service", "Dashboards, models or fixes", "Deployment & debugging help"],
    cta: "Get a Quote",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          align="center"
          eyebrow="Pricing"
          title="Honest ranges, decided with you."
          copy="Two clear options — a complete build, or help with one specific piece."
        />

        <Reveal delay={80}>
          <div className="mx-auto mt-8 grid max-w-4xl gap-3 text-center sm:grid-cols-2 sm:gap-4 sm:text-left">
            <p className="rounded-2xl border border-ink/10 bg-white/70 px-5 py-3.5 text-[13.5px] leading-relaxed text-ink-soft dark:border-white/10 dark:bg-white/5 dark:text-night-ink/70">
              <strong className="font-bold text-ink dark:text-night-ink">Full project?</strong> → Build a Project.
              Idea to working, deployed solution.
            </p>
            <p className="rounded-2xl border border-ink/10 bg-white/70 px-5 py-3.5 text-[13.5px] leading-relaxed text-ink-soft dark:border-white/10 dark:bg-white/5 dark:text-night-ink/70">
              <strong className="font-bold text-ink dark:text-night-ink">One thing stuck?</strong> → Need a Service.
              A dashboard, model, fix or deployment.
            </p>
          </div>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {PLANS.map((p, i) => (
            <Reveal key={p.tag} delay={i * 100}>
              <article
                className={`relative flex h-full flex-col rounded-[28px] p-7 transition-all duration-200 hover:-translate-y-1.5 sm:p-9 ${
                  p.highlight
                    ? "bg-ink text-ivory shadow-[0_30px_60px_-30px_rgba(20,27,46,0.55)] dark:bg-ivory dark:text-ink"
                    : "card-soft"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-honey px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-ink">
                    Most common
                  </span>
                )}
                <p
                  className={`text-[12px] font-bold uppercase tracking-[0.16em] ${
                    p.highlight ? "opacity-65" : "text-brand-deep dark:text-honey"
                  }`}
                >
                  {p.tag}
                </p>
                <p className="mt-3 font-display text-[42px] font-medium tracking-tight sm:text-[44px]">{p.price}</p>
                <p className={`mt-2 text-[14.5px] leading-relaxed ${p.highlight ? "opacity-75" : "text-ink-soft dark:text-night-ink/65"}`}>
                  {p.copy}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[14.5px] font-medium">
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                          p.highlight ? "bg-honey text-ink" : "bg-brand/12 text-brand-deep dark:bg-honey/20 dark:text-honey"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`group mt-8 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-all duration-200 ${
                    p.highlight
                      ? "bg-ivory text-ink hover:bg-honey dark:bg-ink dark:text-ivory dark:hover:bg-brand dark:hover:text-white"
                      : "bg-brand text-white hover:bg-brand-deep"
                  }`}
                >
                  {p.cta}
                  <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13.5px] leading-relaxed text-ink-soft dark:text-night-ink/65">
            Final pricing depends on project scope, features and complexity.
            <span className="block mt-1 text-ink-mute dark:text-night-ink/55">
              We confirm everything with you before starting — no surprises.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
