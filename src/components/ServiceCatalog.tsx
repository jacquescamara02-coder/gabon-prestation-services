import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, HardHat, Snowflake, Truck, Wrench } from "lucide-react";
import { LetterSwing } from "@/components/LetterSwing";
import { Reveal } from "@/components/Reveal";
import enginsImage from "@/assets/engins.jpg";
import equipeImage from "@/assets/equipe.jpg";
import froidImage from "@/assets/froid.jpg";
import heroImage from "@/assets/hero-psg.jpg";
import soudureImage from "@/assets/soudure.jpg";

const catalogItems = [
  {
    icon: Truck,
    eyebrow: "Transport & levage",
    title: "Engins avec opérateurs",
    text: "Location d'engins lourds, légers et véhicules avec chauffeurs qualifiés.",
    image: enginsImage,
    to: "/services",
  },
  {
    icon: Wrench,
    eyebrow: "Travaux industriels",
    title: "Soudure & maintenance",
    text: "Interventions techniques pour sites industriels, bases-vies et chantiers.",
    image: soudureImage,
    to: "/services",
  },
  {
    icon: Snowflake,
    eyebrow: "Froid industriel",
    title: "Climatisation 24h/7j",
    text: "Installation, dépannage et maintenance de systèmes de froid et climatisation.",
    image: froidImage,
    to: "/services",
  },
  {
    icon: HardHat,
    eyebrow: "Main-d'œuvre HSE",
    title: "Équipes qualifiées",
    text: "Soudeurs, tuyauteurs, techniciens, chauffeurs et agents équipés EPI.",
    image: equipeImage,
    to: "/main-doeuvre",
  },
  {
    icon: ClipboardCheck,
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
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Notre Catalogue</p>
          <LetterSwing id="catalogue-title" className="mt-3 max-w-xl text-3xl sm:text-4xl">
            Toutes les prestations P.S.G en un coup d'œil
          </LetterSwing>
          <div className="hairline mt-6 h-px w-40" aria-hidden="true" />
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Parcourez les services clés comme un catalogue visuel : chaque carte mène vers
            la page dédiée pour préparer rapidement votre demande d'intervention.
          </p>
          <Link
            to="/contact"
            className="orbit-border-button orbit-primary mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide"
          >
            Demander le catalogue complet
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="catalog-stage" aria-label="Catalogue des services P.S.G">
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
                  <span className="catalog-fan-index">0{index + 1}</span>
                  <span className="catalog-fan-content">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-card transition-transform duration-300 group-hover:-translate-y-1">
                      <item.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-widest text-signal">
                      {item.eyebrow}
                    </span>
                    <span className="mt-1 block font-display text-2xl font-bold uppercase leading-none text-navy-foreground">
                      {item.title}
                    </span>
                    <span className="mt-3 block text-sm leading-relaxed text-navy-foreground/82">{item.text}</span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
                      Voir ce service
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}