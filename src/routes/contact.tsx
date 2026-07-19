import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Info } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Request an Appointment | One Direction Forward" },
      { name: "description", content: `Contact One Direction Forward Inc. in Matteson, IL. Call ${site.phone} or request an appointment online.` },
      { property: "og:title", content: "Contact One Direction Forward" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const services = [
  "DOT SAP Evaluation", "DUI Evaluation", "DUI Education",
  "Substance-Use Counseling", "Anger Management", "Drug Testing",
  "Professional Training", "Other",
] as const;

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  contactPref: z.enum(["Phone", "Email", "Either"]),
  service: z.enum(services),
  date: z.string().max(20).optional().or(z.literal("")),
  time: z.string().max(20).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true, { message: "Please confirm to submit" }),
  hp: z.string().max(0).optional(), // honeypot
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: fd.get("name") as string,
      phone: fd.get("phone") as string,
      email: fd.get("email") as string,
      contactPref: fd.get("contactPref") as string,
      service: fd.get("service") as string,
      date: (fd.get("date") as string) || "",
      time: (fd.get("time") as string) || "",
      message: (fd.get("message") as string) || "",
      consent: fd.get("consent") === "on",
      hp: (fd.get("hp") as string) || "",
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[issue.path[0] as string] = issue.message;
      setErrors(errs);
      setStatus("error");
      return;
    }
    // Placeholder: wire to backend / email service later.
    setErrors({});
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request an appointment or ask a question."
        intro="Reach us by phone during business hours or send an appointment request. A team member will follow up promptly."
      />

      <section className="container-page mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <aside className="space-y-5">
          <div className="card-soft">
            <p className="eyebrow">Office</p>
            <p className="mt-3 font-display text-xl text-[color:var(--navy)]">One Direction Forward Inc.</p>
            <p className="mt-2 text-[color:var(--muted-foreground)]"><MapPin className="inline h-4 w-4 mr-1 text-[color:var(--teal)]" />{site.address.line1}<br />{site.address.line2}</p>
            <p className="mt-3"><a href={site.phoneHref} className="inline-flex items-center gap-2 text-[color:var(--navy)] font-semibold"><Phone className="h-4 w-4 text-[color:var(--teal)]" />{site.phone}</a></p>
            <p className="mt-1"><a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-[color:var(--navy)]"><Mail className="h-4 w-4 text-[color:var(--teal)]" />{site.email}</a></p>
          </div>
          <div className="card-soft !p-0 overflow-hidden">
            <div className="aspect-[4/3] bg-[color:var(--aqua)] relative grid place-items-center text-center px-6">
              <div>
                <MapPin className="h-8 w-8 text-[color:var(--teal)] mx-auto" />
                <p className="mt-2 font-semibold text-[color:var(--navy)]">Map placeholder</p>
                <p className="text-sm text-[color:var(--muted-foreground)]">Google Maps embed goes here</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[color:var(--aqua)] p-5 text-sm text-[color:var(--ink)]">
            <p className="flex items-start gap-2"><Info className="h-4 w-4 mt-0.5 text-[color:var(--teal)] shrink-0" /> Please do not include detailed private health information in the general contact form.</p>
          </div>
        </aside>

        <form onSubmit={onSubmit} noValidate className="card-soft space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" name="name" required error={errors.name} />
            <Field label="Phone number" name="phone" type="tel" required error={errors.phone} />
            <Field label="Email" name="email" type="email" required error={errors.email} />
            <Select label="Preferred contact method" name="contactPref" required options={["Phone", "Email", "Either"]} error={errors.contactPref} />
            <Select label="Service needed" name="service" required options={services as unknown as string[]} error={errors.service} />
            <Field label="Preferred appointment date" name="date" type="date" error={errors.date} />
            <Field label="Preferred appointment time" name="time" type="time" error={errors.time} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[color:var(--navy)]" htmlFor="message">Brief message</label>
            <textarea id="message" name="message" rows={4} maxLength={1000} className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white p-4 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]" placeholder="A short note about your situation (avoid detailed private health info)." />
          </div>

          {/* honeypot */}
          <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" name="consent" className="mt-1 h-5 w-5 rounded border-[color:var(--border)]" />
            <span>I consent to being contacted by One Direction Forward Inc. about my request. I understand this form is not for emergencies or detailed private health information.</span>
          </label>
          {errors.consent && <p className="text-sm text-red-600">{errors.consent}</p>}

          <div className="flex flex-wrap gap-3 items-center">
            <button type="submit" className="btn-primary">Send request</button>
            <a href={site.phoneHref} className="btn-outline"><Phone className="h-4 w-4" /> Call {site.phone}</a>
          </div>

          {status === "success" && (
            <p className="rounded-2xl bg-[color:var(--aqua)] text-[color:var(--navy)] px-4 py-3 flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-[color:var(--teal)] mt-0.5" /> Thank you — your request has been received. We'll be in touch shortly.</p>
          )}
          {status === "error" && (
            <p className="rounded-2xl bg-red-50 text-red-800 px-4 py-3 flex items-start gap-2"><AlertCircle className="h-5 w-5 mt-0.5" /> Please review the highlighted fields and try again.</p>
          )}
        </form>
      </section>
      <div className="h-16" />
    </>
  );
}

function Field({ label, name, type = "text", required, error }: { label: string; name: string; type?: string; required?: boolean; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-[color:var(--navy)]">
        {label} {required && <span aria-hidden className="text-[color:var(--teal)]">*</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required}
        aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined}
        className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]"
      />
      {error && <p id={`${name}-err`} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, required, error }: { label: string; name: string; options: string[]; required?: boolean; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-[color:var(--navy)]">
        {label} {required && <span aria-hidden className="text-[color:var(--teal)]">*</span>}
      </label>
      <select id={name} name={name} required={required}
        aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined}
        defaultValue=""
        className="mt-2 w-full rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal)]">
        <option value="" disabled>Select…</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p id={`${name}-err`} className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
