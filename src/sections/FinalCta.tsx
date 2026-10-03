import { ArrowRight, MessageCircle, AtSign } from "lucide-react";
import Reveal from "../components/Reveal";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/content";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="px-3 pb-6 pt-16 sm:px-6 sm:pt-24">
      <Reveal>
        <div className="paper-grain relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-ink px-6 py-16 text-center text-ivory sm:px-12 sm:py-24 dark:bg-gradient-to-b dark:from-night-card dark:to-[#1B2450]">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_50%_100%,rgba(36,71,255,0.35),transparent_70%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-ivory/80">
              <span className="h-1.5 w-1.5 rounded-full bg-honey" aria-hidden="true" />
              Next step
            </p>
            <h2 id="cta-heading" className="display-lg mx-auto mt-5 max-w-2xl text-ivory">
              Got an idea in mind?
              <br />
              <span className="font-display italic text-honey">Let&rsquo;s turn it into something real.</span>
            </h2>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-8 py-4 text-[15.5px] font-bold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-honey sm:w-auto"
              >
                Start Your Project
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-[15.5px] font-semibold text-ivory transition-all duration-200 hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-[14.5px] text-ivory/75">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="font-semibold text-ivory underline-offset-4 hover:underline">
                {WHATSAPP_NUMBER}
              </a>
              <span className="mx-3 opacity-40" aria-hidden="true">·</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-ivory underline-offset-4 hover:underline">
                <AtSign size={15} /> {INSTAGRAM_HANDLE}
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
