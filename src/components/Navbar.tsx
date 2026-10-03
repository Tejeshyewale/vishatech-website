import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, WHATSAPP_LINK } from "../data/content";
import Logo from "./Logo";

function useTheme() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("vishatech-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ? stored === "dark" : prefersDark;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggle = () => {
    setDark((d) => {
      const next = !d;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("vishatech-theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
        <nav
          aria-label="Primary"
          className={`mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 pl-4 transition-all duration-300 sm:px-4 ${
            scrolled
              ? "border-ink/10 bg-ivory/80 shadow-[0_12px_36px_-20px_rgba(20,27,46,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-night/75"
              : "border-ink/10 bg-ivory/60 backdrop-blur-md dark:border-white/10 dark:bg-night/50"
          }`}
        >
          <a href="#top" aria-label="VishaTech home">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:bg-ink/[0.06] hover:text-ink dark:text-night-ink/75 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink transition-transform duration-200 hover:scale-105 active:scale-95 dark:border-white/15 dark:bg-white/5 dark:text-night-ink"
            >
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="group hidden min-h-[44px] items-center gap-1.5 rounded-full bg-ink px-5 text-[14px] font-semibold text-ivory transition-colors duration-200 hover:bg-brand sm:inline-flex dark:bg-ivory dark:text-ink dark:hover:bg-honey dark:hover:text-ink"
            >
              Start a Project
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 bg-white/70 text-ink lg:hidden dark:border-white/15 dark:bg-white/5 dark:text-night-ink"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-sm lg:hidden dark:bg-black/55"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -14, opacity: 0, scale: 0.99 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="mx-3 mt-[76px] rounded-3xl border border-ink/10 bg-ivory p-3 shadow-2xl sm:mx-6 dark:border-white/10 dark:bg-night-card"
            >
              <ul className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-semibold transition-colors hover:bg-ink/[0.05] dark:hover:bg-white/5"
                    >
                      {l.label}
                      <ArrowUpRight size={17} className="text-ink-mute" />
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3.5 text-[16px] font-semibold text-white"
              >
                Start a Project <ArrowUpRight size={17} />
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
