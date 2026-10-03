import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown, MessageCircle, Check, Rocket, Lightbulb, Hammer } from "lucide-react";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK } from "../data/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function Scribble() {
  return (
    <svg viewBox="0 0 220 14" fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M3 10.5C60 3.5 150 3.5 217 8.5"
        stroke="#FFC53D"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ROWS = [
  { icon: Lightbulb, label: "Idea captured", sub: "student attendance app", done: true, tint: "bg-honey-soft text-[#8a6100] dark:bg-honey/15 dark:text-honey", status: "Done" },
  { icon: Hammer, label: "Build in progress", sub: "auth + dashboard + model", done: true, tint: "bg-sky text-brand-deep dark:bg-brand/20 dark:text-white", status: "Done" },
  { icon: Rocket, label: "Deploy queued", sub: "render · live link next", done: false, tint: "bg-lav text-brand-deep dark:bg-white/10 dark:text-night-ink", status: "Next" },
];

function HeroVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto w-full max-w-[460px] pt-8" aria-hidden="true">
      {/* main build card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="card-soft relative overflow-hidden rounded-[28px] p-5 sm:p-6"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="dot bg-[#FF5F57]" />
            <span className="dot bg-[#FEBC2E]" />
            <span className="dot bg-[#28C840]" />
          </div>
          <span className="truncate rounded-full bg-lav px-3 py-1 text-[11px] font-semibold text-brand-deep dark:bg-white/10 dark:text-night-ink">
            vishatech — project board
          </span>
        </div>

        <div className="mt-5 space-y-2.5">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 + i * 0.14, ease: EASE }}
              className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white px-3.5 py-3 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${row.tint}`}>
                <row.icon size={17} />
              </span>
              <span className="min-w-0 flex-1 leading-tight">
                <span className="block truncate text-[13.5px] font-semibold">{row.label}</span>
                <span className="block truncate text-[12px] text-ink-mute dark:text-night-ink/55">{row.sub}</span>
              </span>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                  row.done
                    ? "bg-ink text-ivory dark:bg-honey dark:text-ink"
                    : "border border-dashed border-ink/25 text-ink-mute dark:border-white/25 dark:text-night-ink/60"
                }`}
              >
                {row.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* mini code strip */}
        <div className="mt-4 overflow-x-auto rounded-2xl bg-ink p-4 font-mono text-[11.5px] leading-relaxed text-[#C9D4FF] dark:bg-black/50">
          <p className="whitespace-nowrap"><span className="text-honey">const</span> solution = <span className="text-white">await</span> build(idea);</p>
          <p className="whitespace-nowrap"><span className="text-white">deploy</span>(solution, {"{ cloud: "}<span className="text-honey">"live"</span>{" }"})</p>
          <p className="flex items-center gap-1.5 whitespace-nowrap text-[#7EE2A8]">
            <Check size={12} strokeWidth={3} /> build passed — ready to show
          </p>
        </div>
      </motion.div>

      {/* deploy ticket — static, one-time entrance, no looping motion */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: EASE }}
        className="absolute right-3 top-0 sm:right-2"
      >
        <div className="rounded-2xl border border-ink/10 bg-ink px-4 py-2.5 text-ivory shadow-[0_18px_40px_-18px_rgba(20,27,46,0.5)] dark:border-white/10 dark:bg-ivory dark:text-ink">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] opacity-60">live preview</p>
          <p className="font-mono text-[12.5px] font-semibold">your-project.live ✓</p>
        </div>
      </motion.div>

      {/* quiet margin note */}
      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -bottom-8 left-3 -rotate-2 font-display text-[16px] italic text-ink-mute dark:text-night-ink/55"
      >
        from a rough note to this
      </motion.p>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="paper-grain relative overflow-hidden pt-28 sm:pt-36">
      {/* very subtle wash, not a neon gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(36,71,255,0.09),transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(108,140,255,0.12),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:pb-24">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1.5 rounded-2xl border border-ink/10 bg-white/80 px-3 py-2 text-[12.5px] font-medium text-ink-soft sm:rounded-full sm:py-1.5 sm:pl-2 sm:pr-4 sm:text-[13px] dark:border-white/10 dark:bg-white/5 dark:text-night-ink/80">
              <span className="rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ivory dark:bg-honey dark:text-ink">
                VishaTech
              </span>
              <span>Your Idea → Our Tech → Real Solution</span>
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="display-xl mt-6"
          >
            Have an Idea?
            <br />
            Let&rsquo;s{" "}
            <span className="scribble">
              Build It.
              <Scribble />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
            className="lead mt-5 max-w-lg text-ink-soft dark:text-night-ink/70"
          >
            From AI and data projects to websites, IoT and deployment — VishaTech helps
            turn your idea into a working solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease: EASE }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15.5px] font-semibold text-white shadow-[0_16px_36px_-16px_rgba(36,71,255,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep active:translate-y-0"
            >
              Start Your Project
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-[54px] items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/70 px-7 text-[15.5px] font-semibold transition-all duration-200 hover:border-ink/30 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            >
              Explore Services
              <ArrowDown size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-8 flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-ink-mute dark:text-night-ink/55"
            aria-label="How it works: idea, build, deploy"
          >
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-ink/10 dark:bg-white/5 dark:ring-white/10">01 · Idea</span>
            <span aria-hidden="true">→</span>
            <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-ink/10 dark:bg-white/5 dark:ring-white/10">02 · Build</span>
            <span aria-hidden="true">→</span>
            <span className="rounded-full bg-ink px-3 py-1.5 text-ivory dark:bg-honey dark:text-ink">03 · Deploy</span>
          </motion.div>
        </div>

        <Reveal delay={120} className="pb-10 lg:pb-2">
          <HeroVisual />
        </Reveal>
      </div>

      <div className="relative border-t border-ink/10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-5 py-4 text-[13px] text-ink-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-night-ink/55">
          <p className="flex items-center gap-2">
            <MessageCircle size={15} /> Friendly for students · Professional for clients
          </p>
          <p>Practical builds — no jargon, no fluff.</p>
        </div>
      </div>
    </section>
  );
}
