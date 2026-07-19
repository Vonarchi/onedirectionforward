import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[color:var(--navy)] text-white/85 mt-24">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-white">One Direction Forward Inc.</p>
          <p className="mt-2 text-white/70 max-w-md">{site.tagline}</p>
          <div className="mt-6 space-y-2 text-sm">
            <p className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-[color:var(--gold)]" /><span>{site.address.line1}<br />{site.address.line2}</span></p>
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[color:var(--gold)]" /><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[color:var(--gold)]" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] font-semibold">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.slice(1, 7).map(n => (
              <li key={n.to}><Link to={n.to} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--gold)] font-semibold">Organization</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/community-impact" className="hover:text-white">Community Impact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link to="/accessibility" className="hover:text-white">Accessibility</Link></li>
          </ul>
          <Link to="/contact" className="btn-gold mt-6 w-full">Request an appointment</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} One Direction Forward Inc. All rights reserved.</p>
          <p>Confidential · Professional · Compassionate</p>
        </div>
      </div>
    </footer>
  );
}
