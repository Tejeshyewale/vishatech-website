type SymbolProps = {
  className?: string;
  label?: string;
};

/**
 * VishaTech symbol — "the drop-in V".
 * A geometric V (technology / structure) holding an electric-blue node
 * (the idea) in its cradle: Idea → Tech → Solution.
 * Flat, two inks + one accent. Theme-aware via Tailwind fill/stroke tokens.
 */
export function LogoSymbol({ className = "h-9 w-9", label }: SymbolProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="12"
        className="fill-ink dark:fill-ivory"
      />
      <path
        d="M15 17 L24 35 L33 17"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-ivory dark:stroke-ink"
      />
      <circle cx="24" cy="10" r="4" className="fill-brand" />
    </svg>
  );
}

type LogoProps = {
  /** show the "idea → tech → solution" strap under the wordmark */
  tagline?: boolean;
  symbolClass?: string;
  wordmarkClass?: string;
  taglineClass?: string;
};

/**
 * Compact lockup used in navbar + footer.
 * Symbol tile + single-color wordmark set tight in Plus Jakarta Sans.
 */
export default function Logo({
  tagline = true,
  symbolClass = "h-9 w-9",
  wordmarkClass = "text-[16px]",
  taglineClass = "text-[10.5px]",
}: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoSymbol className={symbolClass} />
      <span className="leading-none">
        <span
          className={`block font-extrabold tracking-[-0.035em] ${wordmarkClass}`}
        >
          VishaTech
        </span>
        {tagline && (
          <span
            className={`mt-1 block font-medium tracking-wide text-ink-mute dark:text-night-ink/55 ${taglineClass}`}
          >
            idea → tech → solution
          </span>
        )}
      </span>
    </span>
  );
}
