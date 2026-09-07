import { Link } from "@tanstack/react-router";
import { MapPin, Phone, ShieldCheck } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logoAsset from "@/assets/psg-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="surface-navy mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="inline-block rounded-lg bg-navy-foreground p-3 shadow-card">
            <img
              src={logoAsset.url}
              alt="PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL"
              width={220}
              height={56}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/80">
            Engins, véhicules, travaux industriels et main-d'œuvre qualifiée pour les
            chantiers urbains, maritimes et industriels du Gabon.
          </p>
        </div>

        <div>
          <h3 className="text-sm tracking-widest text-signal">Navigation</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-navy-foreground/80 transition-colors duration-200 hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm tracking-widest text-signal">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {SITE.address}
            </li>
            {SITE.phones.map((p, i) => (
              <li key={p} className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={SITE.phoneLinks[i]}
                  className="transition-colors duration-200 hover:text-signal"
                >
                  {p}
                </a>
              </li>
            ))}
            <li className="flex gap-2">
              <ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              Personnel équipé EPI — normes HSE
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-xs text-navy-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>
            Code ANPI : {SITE.anpi} · Immatriculation CNAMGS : {SITE.cnamgs}
          </p>
          <p>© {new Date().getFullYear()} PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL — Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
