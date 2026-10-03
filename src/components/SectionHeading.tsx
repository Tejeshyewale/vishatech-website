import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, copy, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
          "border-ink/10 bg-white/70 text-ink-soft dark:border-white/15 dark:bg-white/5 dark:text-night-ink/80"
        }`}
      >
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="display-lg mt-4">{title}</h2>
      {copy ? (
        <p className="lead mt-4 text-ink-soft dark:text-night-ink/70">{copy}</p>
      ) : null}
    </Reveal>
  );
}
