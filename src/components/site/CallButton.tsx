import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <a
      href={site.phoneHref}
      className="md:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-[color:var(--navy)] text-white py-3.5 font-semibold shadow-[0_10px_30px_-8px_rgba(20,59,82,0.55)]"
      aria-label={`Call ${site.phone}`}
    >
      <Phone className="h-5 w-5" /> Call {site.phone}
    </a>
  );
}
