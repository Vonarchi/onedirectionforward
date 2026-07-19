import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy)] text-white grain">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--navy)] via-[color:var(--navy-soft)] to-[color:var(--navy)]" />
        <div className="absolute -left-24 top-1/3 h-[380px] w-[380px] rounded-full bg-[color:var(--teal)] blur-[140px] opacity-30 slow-drift" />
        <div className="absolute right-[-80px] -bottom-24 h-[320px] w-[320px] rounded-full bg-[color:var(--gold)] blur-[160px] opacity-15" />
        <PathwayMotif />
      </div>
      <div className="container-page relative z-10 py-20 md:py-28 max-w-4xl">
        {eyebrow && <p className="eyebrow !text-[color:var(--gold)] fade-up">{eyebrow}</p>}
        <h1 className="mt-4 text-white text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight fade-up">{title}</h1>
        {intro && <p className="mt-5 text-lg md:text-xl text-white/75 max-w-2xl fade-up">{intro}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3 fade-up">{children}</div>}
      </div>
      <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />
    </section>
  );
}

export function PathwayMotif() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -right-10 -top-10 h-[420px] w-[520px] opacity-25 pointer-events-none"
      viewBox="0 0 520 420"
      fill="none"
    >
      <path
        d="M10 320 C 130 260, 200 340, 320 240 S 500 120, 510 40"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="line-draw"
      />
      <path
        d="M10 360 C 150 300, 240 380, 360 280 S 500 160, 510 80"
        stroke="var(--teal-soft)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="4 8"
      />
    </svg>
  );
}
