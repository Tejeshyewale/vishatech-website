import { Ear, Hammer, Rocket, HeartHandshake } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const CARDS = [
  { n: "01", icon: Ear, title: "Understand", copy: "We start with your idea and requirements." },
  { n: "02", icon: Hammer, title: "Build", copy: "We develop the actual solution." },
  { n: "03", icon: Rocket, title: "Deploy", copy: "We help get it running." },
  { n: "04", icon: HeartHandshake, title: "Support", copy: "We help with improvements and fixes." },
];

export default function Why() {
  return (
    <section id="why" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Why VishaTech"
          title="Not just a project. A working solution."
          copy="We work with you from idea to development and deployment — keeping things practical, clear and focused on what you actually need."
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 90}>
              <article className="card-soft group h-full rounded-3xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_44px_-24px_rgba(20,27,46,0.35)]">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lav text-brand-deep transition-colors duration-200 group-hover:bg-brand group-hover:text-white dark:bg-white/10 dark:text-white">
                    <c.icon size={19} />
                  </span>
                  <span className="font-display text-[15px] italic text-ink-mute dark:text-night-ink/45">
                    {c.n}
                  </span>
                </div>
                <h3 className="mt-5 text-[18px] font-bold tracking-tight">{c.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft dark:text-night-ink/65">
                  {c.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
