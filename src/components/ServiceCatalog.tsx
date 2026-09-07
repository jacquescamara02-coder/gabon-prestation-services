import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LetterSwing } from "@/components/LetterSwing";
import { Reveal } from "@/components/Reveal";
import enginsImage from "@/assets/engins.jpg";
import equipeImage from "@/assets/equipe.jpg";
import froidImage from "@/assets/froid.jpg";
import heroImage from "@/assets/hero-psg.jpg";
import soudureImage from "@/assets/soudure.jpg";

const catalogItems = [
  {
    eyebrow: "Transport & levage",
    title: "Engins avec opérateurs",
    text: "Location d'engins lourds, légers et véhicules avec chauffeurs qualifiés.",
    image: enginsImage,
    to: "/services",
  },
  {
    eyebrow: "Travaux industriels",
    title: "Soudure & maintenance",
    text: "Interventions techniques pour sites industriels, bases-vies et chantiers.",
    image: soudureImage,
    to: "/services",
  },
  {
    eyebrow: "Froid industriel",
    title: "Climatisation 24h/7j",
    text: "Installation, dépannage et maintenance de systèmes de froid et climatisation.",
    image: froidImage,
    to: "/services",
  },
  {
    eyebrow: "Main-d'œuvre HSE",
    title: "Équipes qualifiées",
    text: "Soudeurs, tuyauteurs, techniciens, chauffeurs et agents équipés EPI.",
    image: equipeImage,
    to: "/main-doeuvre",
  },
  {
    eyebrow: "Conformité & devis",
    title: "Contact Port-Gentil",
    text: "Un interlocuteur unique pour cadrer, planifier et lancer votre demande.",
    image: heroImage,
    to: "/contact",
  },
] as const;

export function ServiceCatalog() {
  return (
    <section id="catalogue" aria-labelledby="catalogue-title" className="overflow-hidden bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Notre Catalogue</p>
            <LetterSwing id="catalogue-title" className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Toutes les prestations P.S.G
            </LetterSwing>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Survolez les cartes pour ouvrir l'éventail de nos métiers : chaque visuel mène
              vers la page dédiée pour préparer votre demande d'intervention.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="catalog-stage mt-12" aria-label="Catalogue des services P.S.G">
            <div className="catalog-fan">
              {catalogItems.map((item, index) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="catalog-fan-card group"
                  aria-label={`${item.title} — ouvrir la page associée`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    width={900}
                    height={1200}
                    className="catalog-fan-image"
                  />
                  <span className="catalog-fan-shade" aria-hidden="true" />
                  <span className="catalog-fan-content">
                    <span className="catalog-fan-eyebrow block text-[0.65rem] font-semibold uppercase tracking-widest text-signal">
                      {item.eyebrow}
                    </span>
                    <span className="catalog-fan-title mt-1 block font-display text-base font-bold uppercase leading-tight text-navy-foreground">
                      {item.title}
                    </span>
                    <span className="catalog-fan-link mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-navy-foreground/85">
                      Voir
                      <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>

                  </span>
                  <span className="sr-only">{item.text}</span>
                  <span className="sr-only">{`0${index + 1}`}</span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Link
              to="/contact"
              className="orbit-border-button orbit-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide"
            >
              Demander le catalogue complet
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
