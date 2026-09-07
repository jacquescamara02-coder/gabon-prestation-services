import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brush,
  Forklift,
  Hammer,
  Leaf,
  Snowflake,
  Truck,
  UserCheck,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { BackButton } from "@/components/BackButton";
import { LetterSwing } from "@/components/LetterSwing";
import enginsImage from "@/assets/engins.jpg";
import soudureImage from "@/assets/soudure.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Transport, engins & travaux industriels — P.S.G Port-Gentil" },
      {
        name: "description",
        content:
          "Location d'engins lourds et légers avec opérateurs, soudure, peinture anticorrosion, froid et plomberie, menuiserie et espaces verts à Port-Gentil.",
      },
      { property: "og:title", content: "Transport, engins & travaux industriels — P.S.G" },
      {
        property: "og:description",
        content:
          "Matériel de levage, flotte de véhicules et travaux industriels pour vos chantiers urbains, maritimes et industriels au Gabon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const travaux = [
  {
    icon: Wrench,
    title: "Soudure",
    text: "Travaux de soudure générale, chaudronnerie et interventions de maintenance sur site.",
  },
  {
    icon: Brush,
    title: "Peinture",
    text: "Peinture de bâtiments et traitements de peinture industrielle anticorrosion, essentielle pour l'environnement marin de Port-Gentil.",
  },
  {
    icon: Snowflake,
    title: "Froid & plomberie",
    text: "Installation, dépannage de climatiseurs et maintenance de réseaux de plomberie pour professionnels.",
  },
  {
    icon: Hammer,
    title: "Menuiserie",
    text: "Travaux de menuiserie bois, coffrage et aménagements sur mesure.",
  },
  {
    icon: Leaf,
    title: "Espaces verts",
    text: "Aménagement, tonte, débroussaillage et nettoyage complet des abords de vos usines, bureaux ou bases-vies.",
  },
  {
    icon: UserCheck,
    title: "Main-d'œuvre dédiée",
    text: "Mise à disposition des équipes qualifiées correspondant à chacun de ces corps de métiers.",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <BackButton inverse />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Nos prestations
            </p>
            <LetterSwing as="h1" className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
              Transport, logistique d'engins & travaux industriels
            </LetterSwing>
            <p className="mt-5 max-w-2xl leading-relaxed text-navy-foreground/85">
              Une offre intégrée pour vos chantiers urbains, maritimes et industriels à
              Port-Gentil : le matériel, les opérateurs et les corps de métier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BLOC 1 */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={enginsImage}
              alt="Flotte d'engins de levage et chariots élévateurs avec leurs opérateurs"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-lg border border-border object-cover shadow-card"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Bloc 1 — Transport & logistique
            </p>
            <LetterSwing className="mt-3 text-3xl">Location d'engins lourds et légers</LetterSwing>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Matériel de levage et de manutention adapté aux exigences de vos chantiers
              urbains, maritimes et industriels à POG.
            </p>

            <h3 className="mt-8 text-xl">Véhicules et autres moyens de transport</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Flotte disponible pour la logistique de vos équipements, les navettes de
              personnel et les transferts de matériel.
            </p>

            <div className="mt-8 flex items-start gap-3 rounded-lg border border-primary/25 bg-primary/5 p-5">
              <Forklift className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-sm font-semibold text-foreground">
                Le + Confiance : tous nos engins et véhicules sont loués avec des opérateurs
                expérimentés.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOC 2 */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.15fr]">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Bloc 2 — Travaux industriels & maintenance
              </p>
              <LetterSwing className="mt-3 text-3xl">Tous les corps de métier, un seul prestataire</LetterSwing>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                De la chaudronnerie à l'entretien des abords, P.S.G intervient sur l'ensemble
                de vos besoins de maintenance industrielle et de second œuvre.
              </p>
              <img
                src={soudureImage}
                alt="Soudeur en intervention de maintenance industrielle"
                loading="lazy"
                width={1200}
                height={800}
                className="mt-8 rounded-lg border border-border object-cover shadow-card"
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {travaux.map((t, i) => (
                <Reveal key={t.title} delay={i * 80}>
                  <article className="h-full rounded-lg border border-border bg-card p-6 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <t.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-10 shadow-card md:flex-row md:items-center">
            <div>
              <LetterSwing className="text-2xl sm:text-3xl">Décrivez-nous votre chantier</LetterSwing>
              <p className="mt-2 text-sm text-muted-foreground">
                Nous établissons un devis adapté à la durée et à la nature de l'intervention.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/main-doeuvre"
                className="orbit-border-button orbit-card inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
              >
                <Truck className="size-4" aria-hidden="true" />
                Notre main-d'œuvre
              </Link>
              <Link
                to="/contact"
                className="orbit-border-button orbit-primary inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold uppercase tracking-wide"
              >
                Devis express
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
