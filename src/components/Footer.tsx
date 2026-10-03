import { MessageCircle, AtSign, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK, WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../data/content";
import Logo from "./Logo";

const SERVICE_LINKS = [
  "Web Development",
  "Data Science & ML",
  "Data Analytics",
  "AI & Generative AI",
  "Blockchain",
  "IoT Projects",
  "Software Projects",
  "Deployment & Cloud",
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <a href="#top" aria-label="VishaTech home">
            <Logo tagline={false} wordmarkClass="text-[17px]" />
          </a>
          <p className="mt-4 font-display text-[19px] italic text-ink-soft dark:text-night-ink/70">
            Your Idea → Our Tech → Real Solution
          </p>
          <p className="mt-3 max-w-xs text-[13.5px] leading-relaxed text-ink-mute dark:text-night-ink/55">
            An independent tech studio helping students, individuals and small businesses
            ship working projects.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-mute dark:text-night-ink/50">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[14.5px] font-medium text-ink-soft hover:text-brand-deep dark:text-night-ink/70 dark:hover:text-honey">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-mute dark:text-night-ink/50">
            Services & contact
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Services">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="inline-block rounded-full bg-ink/[0.05] px-3 py-1.5 text-[12.5px] font-medium text-ink-soft transition-colors hover:bg-ink hover:text-ivory dark:bg-white/10 dark:text-night-ink/75 dark:hover:bg-honey dark:hover:text-ink"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 space-y-2.5">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-[14.5px] font-semibold hover:text-brand-deep dark:hover:text-honey"
            >
              <MessageCircle size={16} /> {WHATSAPP_NUMBER}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-[14.5px] font-semibold hover:text-brand-deep dark:hover:text-honey"
            >
              <AtSign size={16} /> {INSTAGRAM_HANDLE}
              <ArrowUpRight size={14} className="opacity-50" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ink/10 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-5 text-[13px] text-ink-mute sm:flex-row sm:items-center sm:justify-between sm:px-8 dark:text-night-ink/50">
          <p>© 2026 VishaTech. All rights reserved.</p>
          <p>Made with care — one project at a time.</p>
        </div>
      </div>
    </footer>
  );
}
