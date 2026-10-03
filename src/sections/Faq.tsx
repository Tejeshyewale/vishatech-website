import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const FAQS = [
  {
    q: "What kind of projects do you build?",
    a: "Websites, web apps, data analytics dashboards, ML models, AI/GenAI apps, IoT builds, blockchain projects, custom software and deployment support — anything from a college project to a small-business tool.",
  },
  {
    q: "Can you build a project from my idea?",
    a: "Yes — that's the core of what we do. Share your idea even if it's rough, and we'll shape it into clear requirements, then build the working solution.",
  },
  {
    q: "Can I request only one service?",
    a: "Absolutely. If you only need a dashboard, a model, deployment help, debugging or a customization, pick the individual-service option (₹6K–₹10K) and we'll scope just that piece.",
  },
  {
    q: "Do you help with deployment?",
    a: "Yes. We help you get your project running and shareable — AWS, GCP, Docker, Streamlit, Render and general hosting support, depending on what your project needs.",
  },
  {
    q: "Can you work on AI/ML projects?",
    a: "Yes. Predictive models, model development, NLP, computer vision, LLM applications, RAG systems and AI chatbots are all in scope.",
  },
  {
    q: "How is pricing decided?",
    a: "Complete projects start at ₹11K–₹15K and individual services at ₹6K–₹10K. The final figure depends on scope, features and complexity — we confirm it with you before any work begins.",
  },
  {
    q: "How do I get started?",
    a: "Tap “Start Your Project” — it opens WhatsApp with a pre-filled message. Tell us about your idea in a few lines and we'll take the conversation from there.",
  },
];

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  return (
    <div
      className={`card-soft overflow-hidden rounded-2xl transition-colors duration-200 ${
        open ? "ring-2 ring-brand/25" : ""
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
      >
        <span className="text-[15.5px] font-semibold tracking-tight">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
            open ? "bg-brand text-white" : "bg-ink/[0.06] text-ink dark:bg-white/10 dark:text-night-ink"
          }`}
        >
          <Plus size={17} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-5 pb-6 text-[14.5px] leading-relaxed text-ink-soft sm:px-6 dark:text-night-ink/70">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-24 bg-ivory-deep/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl border-t border-ink/10 px-5 py-16 sm:px-8 sm:py-24 dark:border-white/10">
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions, answered plainly."
        />
        <Reveal delay={100}>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <Item
                key={f.q}
                index={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
