import { useState, type FormEvent } from "react";
import { ArrowUpRight, MessageCircle, RotateCcw } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { whatsappLink } from "../data/content";

const SERVICES = [
  "Web Development",
  "AI & Generative AI",
  "Data Science & ML",
  "Data Analytics",
  "Cloud & Deployment",
  "Blockchain",
  "IoT Projects",
  "Custom Software",
  "Not sure yet",
];

const BUDGETS = [
  "₹6,000 – ₹10,000 (single service)",
  "₹11,000 – ₹15,000 (complete project)",
  "Flexible / need guidance",
];

const DEADLINES = ["Flexible", "Within 2 weeks", "Urgent", "Fixed date (mention in description)"];

type Errors = Partial<Record<"name" | "contact" | "service" | "description", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s-]{6,17}$/;

const inputClass =
  "mt-2 w-full rounded-2xl border border-ink/15 bg-white/80 px-4 py-3.5 text-[15px] dark:border-white/15 dark:bg-white/5";
const labelClass =
  "text-[13px] font-bold uppercase tracking-[0.12em] text-ink-mute dark:text-night-ink/55";
const errorClass = "mt-1.5 text-[13px] font-medium text-red-600 dark:text-red-400";

export default function Enquiry() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(SERVICES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(DEADLINES[0]);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    const c = contact.trim();
    if (!c) e.contact = "Please enter an email or phone number.";
    else if (!EMAIL_RE.test(c) && !PHONE_RE.test(c))
      e.contact = "Enter a valid email (name@example.com) or phone number.";
    if (!service) e.service = "Please choose a service.";
    if (description.trim().length < 10)
      e.description = "Please describe your project in a few words (min 10 characters).";
    return e;
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    const message =
      `Hi VishvaTech, I'd like to discuss a project/service.\n` +
      `Name: ${name.trim()}\nContact: ${contact.trim()}\nService: ${service}\n` +
      `Budget: ${budget}\nDeadline: ${deadline}\nDetails: ${description.trim()}`;
    const url = whatsappLink(message);
    setWaUrl(url);
    setSent(true);
    window.open(url, "_blank", "noopener");
  }

  function reset() {
    setSent(false);
    setErrors({});
    setWaUrl("");
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-ivory-deep/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl border-y border-ink/10 px-5 py-16 sm:px-8 sm:py-24 dark:border-white/10">
        <SectionHeading
          align="center"
          eyebrow="Enquire"
          title="Tell us about your project."
          copy="Fill this in — we'll continue on WhatsApp. Nothing is sent to a server; your message opens in WhatsApp for you to review and send."
        />

        <Reveal delay={100}>
          <div className="card-soft mx-auto mt-10 max-w-2xl rounded-[28px] p-6 sm:p-9">
            {sent ? (
              <div className="text-center" aria-live="polite">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#E6F7EC] text-[#157A3A] dark:bg-[#7EE2A8]/15 dark:text-[#7EE2A8]">
                  <MessageCircle size={24} />
                </span>
                <h3 className="mt-4 text-[22px] font-bold tracking-tight">
                  Your message is ready in WhatsApp
                </h3>
                <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-relaxed text-ink-soft dark:text-night-ink/65">
                  Thanks {name.trim()} — we opened WhatsApp with your enquiry pre-filled. Just press
                  send there, and we&rsquo;ll take it from there.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15px] font-semibold text-white transition-colors hover:bg-brand-deep"
                  >
                    Open WhatsApp again <ArrowUpRight size={17} />
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-ink/15 px-7 text-[15px] font-semibold transition-colors hover:border-ink/30 dark:border-white/15"
                  >
                    <RotateCcw size={16} /> Send another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="eq-name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="eq-name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "eq-name-err" : undefined}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p id="eq-name-err" role="alert" className={errorClass}>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="eq-contact" className={labelClass}>
                      Email or phone
                    </label>
                    <input
                      id="eq-contact"
                      type="text"
                      autoComplete="email"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      aria-invalid={Boolean(errors.contact)}
                      aria-describedby={errors.contact ? "eq-contact-err" : undefined}
                      placeholder="name@example.com / +91 …"
                      className={inputClass}
                    />
                    {errors.contact && (
                      <p id="eq-contact-err" role="alert" className={errorClass}>
                        {errors.contact}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="eq-service" className={labelClass}>
                      Service required
                    </label>
                    <select
                      id="eq-service"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className={inputClass}
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="eq-budget" className={labelClass}>
                      Approximate budget
                    </label>
                    <select
                      id="eq-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={inputClass}
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="eq-desc" className={labelClass}>
                      Project description
                    </label>
                    <textarea
                      id="eq-desc"
                      rows={4}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      aria-invalid={Boolean(errors.description)}
                      aria-describedby={errors.description ? "eq-desc-err" : undefined}
                      placeholder="What do you want to build? A few lines is enough."
                      className={inputClass + " resize-y"}
                    />
                    {errors.description && (
                      <p id="eq-desc-err" role="alert" className={errorClass}>
                        {errors.description}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="eq-deadline" className={labelClass}>
                      Deadline (optional)
                    </label>
                    <select
                      id="eq-deadline"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className={inputClass}
                    >
                      {DEADLINES.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-7 inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-brand px-7 text-[15.5px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-deep"
                >
                  Continue to WhatsApp
                  <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="mt-3 text-center text-[12.5px] text-ink-mute dark:text-night-ink/55">
                  No account needed · nothing stored on a server · you review before sending
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
