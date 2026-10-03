import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK } from "../data/content";

function MlPreview() {
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink-mute dark:text-night-ink/55">training · loss</p>
        <span className="rounded-full bg-[#E6F7EC] px-2.5 py-1 font-mono text-[11px] font-bold text-[#157A3A] dark:bg-[#7EE2A8]/15 dark:text-[#7EE2A8]">
          acc 92.4%
        </span>
      </div>
      <svg viewBox="0 0 200 64" className="mt-3 h-16 w-full" fill="none">
        <path d="M4 10 C 40 12, 60 26, 90 34 S 160 52, 196 54" stroke="#2447FF" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="196" cy="54" r="4" fill="#2447FF" />
        <path d="M4 22 C 50 24, 90 34, 130 44 S 175 56, 196 57" stroke="#B9C4FF" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 5" />
      </svg>
      <div className="mt-2 flex gap-1.5 font-mono text-[10px] text-ink-mute dark:text-night-ink/50">
        <span className="rounded bg-ink/[0.05] px-2 py-1 dark:bg-white/10">epoch 48/50</span>
        <span className="rounded bg-ink/[0.05] px-2 py-1 dark:bg-white/10">val-loss 0.21</span>
      </div>
    </div>
  );
}

function AnalyticsPreview() {
  const bars = [34, 52, 44, 68, 58, 82, 95];
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink-mute dark:text-night-ink/55">sales · last 7 weeks</p>
        <span className="rounded-full bg-lav px-2.5 py-1 font-mono text-[11px] font-bold text-brand-deep dark:bg-white/10 dark:text-night-ink">+18%</span>
      </div>
      <div className="mt-3 flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div
            key={i}
            style={{ height: `${h}%` }}
            className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-brand" : i >= bars.length - 3 ? "bg-brand/50" : "bg-ink/10 dark:bg-white/15"}`}
          />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 font-mono text-[10.5px]">
        {[["Orders", "1,280"], ["Users", "860"], ["Repeat", "34%"]].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-ink/[0.04] px-2 py-1.5 dark:bg-white/[0.06]">
            <p className="text-ink-mute dark:text-night-ink/50">{k}</p>
            <p className="font-bold text-ink dark:text-night-ink">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IotPreview() {
  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[11px] text-ink-mute dark:text-night-ink/55">sensors · live</p>
        <span className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-[#157A3A] dark:text-[#7EE2A8]">
          <span className="h-2 w-2 rounded-full bg-[#22C55E]" /> online
        </span>
      </div>
      <div className="mt-3 flex items-center justify-between px-1">
        {["Temp 24°", "Humidity 61%", "Motion"].map((s) => (
          <div key={s} className="flex flex-col items-center gap-1.5">
            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-brand/40 bg-sky font-mono text-[10px] font-bold text-brand-deep dark:bg-brand/20 dark:text-white">
              ●
            </span>
            <span className="font-mono text-[10px] text-ink-mute dark:text-night-ink/55">{s}</span>
          </div>
        ))}
        <div className="mb-6 h-px flex-1 bg-ink/10 dark:bg-white/15" />
      </div>
      <p className="mt-1 rounded-lg bg-ink px-3 py-2 font-mono text-[10.5px] text-[#C9D4FF] dark:bg-black/50">
        alert → fan ON <span className="text-honey">· auto</span>
      </p>
    </div>
  );
}

function WebPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-white dark:border-white/10 dark:bg-white/[0.04]" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-ink/[0.07] px-3 py-2.5 dark:border-white/10">
        <span className="dot bg-[#FF5F57]" />
        <span className="dot bg-[#FEBC2E]" />
        <span className="dot bg-[#28C840]" />
        <span className="ml-2 flex-1 truncate rounded-full bg-ink/[0.05] px-3 py-1 font-mono text-[10.5px] text-ink-mute dark:bg-white/10 dark:text-night-ink/55">
          your-site.live
        </span>
      </div>
      <div className="p-4">
        <div className="h-2.5 w-2/3 rounded-full bg-ink/80 dark:bg-white/80" />
        <div className="mt-2 h-2.5 w-1/2 rounded-full bg-ink/15 dark:bg-white/15" />
        <div className="mt-2 h-2.5 w-3/5 rounded-full bg-ink/15 dark:bg-white/15" />
        <div className="mt-3.5 flex gap-2">
          <span className="rounded-full bg-brand px-3.5 py-1.5 text-[11px] font-bold text-white">Get started</span>
          <span className="rounded-full border border-ink/15 px-3.5 py-1.5 text-[11px] font-bold text-ink-soft dark:border-white/20 dark:text-night-ink/70">Learn more</span>
        </div>
      </div>
    </div>
  );
}

const PROJECTS = [
  { cat: "AI / ML", title: "Prediction & ML models", points: ["Data cleaning & training", "Model building & tuning", "Simple demo you can present"], note: "Built for student / custom requirements", Visual: MlPreview },
  { cat: "Data Analytics", title: "Dashboards & insights", points: ["Excel · Power BI · Tableau · Python", "Interactive dashboards", "Insights written in plain words"], note: "Built for startup / custom requirements", Visual: AnalyticsPreview },
  { cat: "IoT + AI", title: "Sensor + software builds", points: ["Sensor data collection", "Hardware + software link", "Optional AI/ML layer"], note: "Built for student / custom requirements", Visual: IotPreview },
  { cat: "Web Applications", title: "Sites & web apps", points: ["Responsive frontend", "Backend + database", "Deployed & shareable link"], note: "Built for startup / custom requirements", Visual: WebPreview },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Project work"
          title="From idea to something you can actually show."
          copy="The kind of things we can build with you — shaped around your requirements, ready to demo, submit or launch."
        />
        <p className="mt-4 text-[12.5px] italic text-ink-mute dark:text-night-ink/50">
          Illustrative mockups below — they show what we can build, not client work.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={Math.min(i * 80, 240)}>
              <article className="card-soft group flex h-full flex-col overflow-hidden rounded-3xl p-5 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_44px_-24px_rgba(20,27,46,0.35)] sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-ink px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-ivory dark:bg-honey dark:text-ink">
                    {p.cat}
                  </span>
                </div>
                <h3 className="mt-3.5 font-display text-[24px] font-medium tracking-tight">{p.title}</h3>
                <div className="mt-4">
                  <p.Visual />
                </div>
                <ul className="mt-4 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[14px] text-ink-soft dark:text-night-ink/70">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-dashed border-ink/15 pt-3.5 text-[12.5px] italic text-ink-mute dark:border-white/15 dark:text-night-ink/50">
                  {p.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-3xl bg-ink p-6 text-ivory sm:flex-row sm:items-center sm:p-7 dark:bg-ivory dark:text-ink">
            <div>
              <p className="font-display text-[22px] italic leading-snug">Have something similar in mind?</p>
              <p className="mt-1 text-[14px] opacity-70">Send a 2-line note about your idea — we&rsquo;ll take it from there.</p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[50px] shrink-0 items-center gap-2 rounded-full bg-ivory px-6 text-[15px] font-semibold text-ink transition-colors duration-200 hover:bg-honey dark:bg-ink dark:text-ivory dark:hover:bg-brand dark:hover:text-white"
            >
              Let&rsquo;s discuss it
              <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
