import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import mark from "@/assets/psg-mark.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/60 transition-[background-color,box-shadow] duration-200",
        scrolled ? "bg-background/95 shadow-card backdrop-blur" : "bg-background",
      )}
    >
      <div className="hidden bg-navy text-navy-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs tracking-wide">
          <span className="uppercase">Port-Gentil, Gabon — Intervention 24h/7j</span>
          <span className="flex items-center gap-4">
            {SITE.phones.map((p, i) => (
              <a
                key={p}
                href={SITE.phoneLinks[i]}
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-signal"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {p}
              </a>
            ))}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={mark} alt="" width={40} height={40} className="size-10 object-contain" />
          <span className="leading-none">
            <span className="block font-display text-2xl font-bold tracking-tight text-primary">
              P.S.G
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-muted-foreground">
              Prestation de Services Généraux
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-semibold tracking-wide text-foreground/80 transition-colors duration-200 hover:bg-secondary hover:text-primary"
              activeProps={{ className: "bg-secondary text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <Phone className="size-4" aria-hidden="true" />
            Devis express
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors duration-200 hover:bg-secondary md:hidden"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-6 py-3 md:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm font-semibold transition-colors duration-200 hover:bg-secondary hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
