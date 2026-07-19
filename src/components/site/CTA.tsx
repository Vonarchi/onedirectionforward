import { Link } from "@tanstack/react-router";
import { Phone, CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

export function AppointmentCTA({
  eyebrow = "Take the next step",
  title = "Your Next Step Can Start Today.",
  body = "Confidential guidance is one call away. We'll help you understand your options and what to expect.",
}: { eyebrow?: string; title?: string; body?: string }) {
  return (
    <section className="container-page my-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--navy)] text-white grain px-6 py-14 md:px-14 md:py-20 shadow-[0_40px_80px_-30px_rgba(20,59,82,0.6)]">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-[color:var(--teal)] blur-[140px] opacity-30 slow-drift" />
          <div className="absolute -left-16 -bottom-16 h-[280px] w-[280px] rounded-full bg-[color:var(--gold)] blur-[140px] opacity-15" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow !text-[color:var(--gold)]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-5xl text-white leading-[1.05] tracking-tight">{title}</h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl">{body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-gold"><CalendarCheck className="h-5 w-5" /> Request an Appointment</Link>
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold text-white hover:bg-white hover:text-[color:var(--navy)] transition min-h-[48px]"><Phone className="h-5 w-5" /> Call {site.phone}</a>
          </div>
        </div>
        <div aria-hidden className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--gold)]/50 to-transparent" />
      </div>

    </section>
  );
}
