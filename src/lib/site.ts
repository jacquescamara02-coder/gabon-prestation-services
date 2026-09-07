export const SITE = {
  name: "P.S.G",
  fullName: "P.S.G — Prestation de Services Généraux",
  city: "Port-Gentil, Gabon",
  address: "Port-Gentil, Gabon (B.P. 1320)",
  bp: "B.P. 1320",
  phones: ["077 21 05 22", "062 77 67 60"],
  phoneLinks: ["tel:+24177210522", "tel:+24162776760"],
  whatsapp: "https://wa.me/24102776760",
  whatsappDisplay: "+241 02 77 67 60",
  anpi: "ANP12800371441732",
  cnamgs: "102200033031",
} as const;

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/main-doeuvre", label: "Main-d'œuvre" },
  { to: "/contact", label: "Contact" },
] as const;
