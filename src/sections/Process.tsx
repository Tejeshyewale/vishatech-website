import { useEffect, useRef } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const STEPS = [
  { n: "01", title: "Idea", copy: "You share your idea — even if it's rough. We ask the right questions." },
  { n: "02", title: "Requirements", copy: "We agree on scope, features and what 'done' looks like." },
  { n: "03", title: "Development", copy: "We build it in parts and keep you posted along the way." },
  { n: "04", title: "Testing", copy: "We check it works — and fix what doesn't before delivery." },
  { n: "05", title: "Deployment", copy: "We help get it live, with a link you can actually share." },
];

export default function Process() {
  const lineRef = useRef<HTMLDivElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const line = lineRef.current;
    const wrap = wrapRef.current;
    if (!line || !wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      line.style.transform = "scaleY(1)";
      return;
    }
    const onScroll = () => {
      const r = wrap.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.72 - r.top) / r.height));
      line.style.transform = `scaleY(${progress})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="process" className="scroll-mt-24 bg-ivory-deep/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl border-y border-ink/10 px-5 py-16 sm:px-8 sm:py-24 dark:border-white/10">
        <SectionHeading
          eyebrow="Process"
          title="Clear steps, no guesswork."
          copy="You'll always know what's happening and what's next."
        />

        <div ref={wrapRef} className="relative mx-auto mt-12 max-w-2xl pl-8 sm:pl-10">
          {/* track */}
          <div className="absolute bottom-4 left-[13px] top-4 w-[2px] rounded bg-ink/10 sm:left-[17px] dark:bg-white/10" aria-hidden="true" />
          <div
            ref={lineRef}
            className="flow-line absolute bottom-4 left-[13px] top-4 w-[2px] origin-top rounded sm:left-[17px]"
            style={{ transform: "scaleY(0)" }}
            aria-hidden="true"
          />

          <ol className="space-y-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={Math.min(i * 70, 280)}>
                <article className="card-soft relative flex gap-4 rounded-3xl p-5 transition-transform duration-200 hover:-translate-y-0.5 sm:gap-5 sm:p-6">
                  <span
                    className="absolute -left-8 top-6 grid h-7 w-7 place-items-center rounded-full bg-brand text-[11px] font-bold text-white ring-4 ring-ivory sm:-left-10 sm:h-9 sm:w-9 sm:text-[12px] dark:ring-night"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-brand-deep dark:text-honey">
                      Step {s.n}
                    </p>
                    <h3 className="mt-1 font-display text-[24px] font-medium tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-ink-soft dark:text-night-ink/65">
                      {s.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
