import { Link } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  to,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  to?: string;
}) {
  const inner = (
    <div className="card-soft h-full flex flex-col gap-4">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--aqua)] text-[color:var(--teal)]">
        <Icon className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[color:var(--navy)]">{title}</h3>
        <p className="mt-2 text-sm text-[color:var(--muted-foreground)] leading-relaxed">{desc}</p>
      </div>
      {to && (
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--teal)]">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </div>
  );
  return to ? <Link to={to} className="block h-full">{inner}</Link> : inner;
}
