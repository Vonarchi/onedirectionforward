import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[color:var(--cream)]/85 backdrop-blur border-b border-[color:var(--border)]">
      <div className="container-page flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
          <Logo />
          <span className="min-w-0 leading-tight">
            <span className="block font-display text-[15px] sm:text-base font-semibold text-[color:var(--navy)] truncate">One Direction Forward</span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-[color:var(--teal)]">Est. Support · Guidance · Forward</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-[color:var(--navy)] bg-[color:var(--aqua)]" }}
              inactiveProps={{ className: "text-[color:var(--ink)]/75 hover:text-[color:var(--navy)] hover:bg-[color:var(--aqua)]/60" }}
              className="rounded-full px-3 py-2 text-[13.5px] font-medium transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden md:inline-flex btn-outline !py-2 !px-4 !text-[13px]">
            <Phone className="h-4 w-4" /> {site.phone}
          </a>
          <Link to="/contact" className="hidden md:inline-flex btn-primary !py-2 !px-4 !text-[13px]">Book</Link>
          <button
            className="lg:hidden grid place-items-center h-11 w-11 rounded-full border border-[color:var(--border)] bg-white"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color:var(--border)] bg-white">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-[color:var(--aqua)] text-[color:var(--navy)]" }}
                className="rounded-2xl px-4 py-3 text-base font-medium text-[color:var(--ink)]"
              >
                {n.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-3">
              <a href={site.phoneHref} className="btn-outline">
                <Phone className="h-4 w-4" /> Call
              </a>
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary">Book</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--navy)] text-white shadow-[0_6px_16px_-8px_rgba(20,59,82,0.6)]">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 16c4-8 12-8 16 0" />
        <path d="M16 12l4 4-4 4" />
      </svg>
    </span>
  );
}
