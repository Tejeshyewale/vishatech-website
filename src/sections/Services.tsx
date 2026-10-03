import { Globe, BrainCircuit, BarChart3, Sparkles, Link2, Cpu, AppWindow, CloudUpload, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK } from "../data/content";

const SERVICES = [
  {
    icon: Globe,
    name: "Web Development",
    desc: "Websites and web apps — responsive frontend with a solid backend.",
    tags: ["Websites", "Web apps"],
    span: "lg:col-span-3",
    featured: true,
  },
  {
    icon: Sparkles,
    name: "AI & Generative AI",
    desc: "AI apps, LLM features, RAG systems, chatbots, NLP and vision.",
    tags: ["LLM apps", "RAG", "Chatbots"],
    span: "lg:col-span-3",
    featured: true,
  },
  {
    icon: BrainCircuit,
    name: "Data Science & ML",
    desc: "ML models and predictive analytics, built around your data.",
    tags: ["ML models", "Predictive analytics"],
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: BarChart3,
    name: "Data Analytics",
    desc: "Excel, Power BI, Tableau and Python dashboards with real insights.",
    tags: ["Power BI", "Dashboards"],
    span: "lg:col-span-2",
    featured: true,
  },
  {
    icon: AppWindow,
    name: "Software Projects",
    desc: "Custom software — desktop apps, web-based tools, tailored builds.",
    tags: ["Desktop", "Custom tools"],
    span: "lg:col-span-2",
    featured: false,
  },
  {
    icon: Cpu,
    name: "IoT Projects",
    desc: "Sensor-based builds with hardware + software working together.",
    tags: ["Sensors", "IoT + AI/ML"],
    span: "lg:col-span-2",
    featured: false,
  },
  {
    icon: Link2,
    name: "Blockchain",
    desc: "Blockchain projects, DApps, smart contracts and integrations.",
    tags: ["DApps", "Smart contracts"],
    span: "lg:col-span-2",
    featured: false,
  },
  {
    icon: CloudUpload,
    name: "Deployment & Cloud",
    desc: "AWS, GCP, Docker, Streamlit and Render — go live without the headache.",
    tags: ["AWS / GCP", "Docker", "Hosting"],
    span: "lg:col-span-2",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ivory-deep/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl border-y border-ink/10 px-5 py-16 sm:px-8 sm:py-24 dark:border-white/10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What can we build together?"
            copy="Eight ways we can help — pick a full project or just the piece you're stuck on."
          />
          <Reveal delay={120}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-ink/15 bg-white/70 px-5 text-[14px] font-semibold transition-colors duration-200 hover:border-ink/30 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
            >
              Not sure what you need? Ask us <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={Math.min(i * 60, 300)} className={s.span}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label={`${s.name} — discuss this service on WhatsApp`}
                className={`card-soft group relative flex h-full flex-col rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_44px_-24px_rgba(20,27,46,0.35)] sm:p-6 ${
                  s.featured ? "bg-gradient-to-b from-white to-lav/60 dark:from-night-card dark:to-brand/[0.08]" : ""
                }`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-ivory transition-colors duration-200 group-hover:bg-brand group-hover:text-white dark:bg-ivory dark:text-ink dark:group-hover:bg-honey">
                  <s.icon size={20} strokeWidth={1.9} />
                </span>
                <h3 className="mt-4 text-[18px] font-bold tracking-tight">{s.name}</h3>
                <p className="mt-1.5 max-w-[38ch] text-[14px] leading-relaxed text-ink-soft dark:text-night-ink/65">
                  {s.desc}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-ink/[0.06] px-2.5 py-1 text-[12px] font-medium text-ink-soft dark:bg-white/10 dark:text-night-ink/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13.5px] font-semibold text-brand-deep dark:text-honey">
                  Discuss this
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
