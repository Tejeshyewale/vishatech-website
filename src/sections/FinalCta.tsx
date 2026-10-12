import { ArrowRight, MessageCircle, AtSign } from "lucide-react";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/content";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="px-3 pb-6 pt-16 sm:px-6 sm:pt-24">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-ink/10 bg-white px-6 py-16 text-center text-ink sm:px-12 sm:py-24 dark:border-white/10 dark:bg-night-card dark:text-night-ink">
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-soft dark:border-white/15 dark:text-night-ink/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
              Next step
            </p>
            <h2 id="cta-heading" className="display-lg mx-auto mt-5 max-w-2xl text-ink dark:text-night-ink">
              Got an idea in mind?
              <br />
              <span className="font-display italic text-brand-deep dark:text-honey">Let&rsquo;s turn it into something real.</span>
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-[15.5px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep sm:w-auto"
              >
                Start Your Project
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-[15.5px] font-semibold text-ink transition-all duration-200 hover:border-ink/40 sm:w-auto dark:border-white/20 dark:text-night-ink"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-[14.5px] text-ink-soft dark:text-night-ink/70">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="font-semibold text-ink underline-offset-4 hover:underline dark:text-night-ink">
                {WHATSAPP_NUMBER}
              </a>
              <span className="mx-3 opacity-40" aria-hidden="true">·</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-ink underline-offset-4 hover:underline dark:text-night-ink">
                <AtSign size={15} /> {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
