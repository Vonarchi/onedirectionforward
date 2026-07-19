export const site = {
  name: "One Direction Forward Inc.",
  tagline: "Moving Productively Toward a Better Tomorrow",
  phone: "708-300-6977",
  phoneHref: "tel:+17083006977",
  email: "info@onedirectionforward.org",
  address: {
    line1: "4747 Lincoln Mall Drive, Suite 412",
    line2: "Matteson, Illinois 60443",
    street: "4747 Lincoln Mall Drive, Suite 412",
    city: "Matteson",
    region: "IL",
    postalCode: "60443",
    country: "US",
  },
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/dot-sap", label: "DOT SAP" },
  { to: "/dui", label: "DUI Services" },
  { to: "/counseling", label: "Counseling" },
  { to: "/drug-testing", label: "Drug Testing" },
  { to: "/classes", label: "Classes" },
  { to: "/about", label: "About" },
  { to: "/community-impact", label: "Community" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;
