import { createFileRoute } from "@tanstack/react-router";
import { Phone, ArrowRight, Building2, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LetterSwing } from "@/components/LetterSwing";
import { BackButton } from "@/components/BackButton";
import { SITE } from "@/lib/site";
import dgAsset from "@/assets/psg-dg-mamadou-platini.jpg.asset.json";
import assistanteAsset from "@/assets/psg-assistante-mengue-rahima.jpg.asset.json";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      {
        title: "Qui sommes-nous — PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL",
      },
      {
        name: "description",
        content:
          "Découvrez l'équipe dirigeante de PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL : Mamadou Platini, directeur général, et MENGUE RAHIMA, assistante du DG.",
      },
      {
        property: "og:title",
        content: "Qui sommes-nous — PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL",
      },
      {
        property: "og:description",
        content:
          "L'équipe dirigeante de PSG SARL au Gabon : direction générale et assistance de direction.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const leaders = [
  {
    name: "Mamadou Platini",
    role: "Directeur Général",
    image: dgAsset.url,
    alt: "Mamadou Platini, Directeur Général de PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL, à son bureau",
    width: 732,
    height: 976,
  },
  {
    name: "MENGUE RAHIMA",
    role: "Assistante du Directeur Général",
    image: assistanteAsset.url,
    alt: "MENGUE RAHIMA, assistante du Directeur Général de PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL",
    width: 648,
    height: 862,
  },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <BackButton inverse />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Notre équipe dirigeante
            </p>
            <LetterSwing
              as="h1"
              className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl"
            >
              Qui dirige PSG
            </LetterSwing>
            <p className="mt-5 max-w-2xl leading-relaxed text-navy-foreground/85">
              PRESTATION DES SERVICES GÉNÉRAUX (PSG) SARL est animée par une
              direction proche du terrain et de ses clients, à Port-Gentil et sur
              l'ensemble du Gabon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              À propos de nous
            </p>
            <LetterSwing className="mt-3 text-3xl">
              Une structure familiale à taille humaine
            </LetterSwing>
            <div className="hairline mt-6 h-px w-40" aria-hidden="true" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              PSG SARL accompagne depuis plusieurs années les entreprises,
              industriels et chantiers du Gabon dans la mise à disposition
              d'engins, de véhicules, de main-d'œuvre qualifiée et dans les
              travaux industriels.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Notre force : une direction impliquée, une réactivité 24h/7j et
              des équipes formées aux exigences HSE de Port-Gentil.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Building2, label: "Siège à Port-Gentil" },
                { icon: Users, label: "Équipes opérationnelles locales" },
                { icon: Phone, label: "Disponibilité continue" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card"
                >
                  <item.icon
                    className="size-5 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold">{item.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {leaders.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 120}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.alt}
                      loading="lazy"
                      width={leader.width}
                      height={leader.height}
                      className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span
                      className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg">{leader.name}</h2>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-primary">
                      {leader.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-10 shadow-card md:flex-row md:items-center">
            <div>
              <LetterSwing className="text-2xl sm:text-3xl">
                Contactez la direction
              </LetterSwing>
              <p className="mt-2 text-sm text-muted-foreground">
                Un projet industriel ou logistique ? Discutons-en directement
                avec nos équipes.
              </p>
            </div>
            <a
              href={SITE.phoneLinks[0]}
              className="orbit-border-button orbit-primary inline-flex shrink-0 items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
            >
              <Phone className="size-4" aria-hidden="true" />
              Appeler le {SITE.phones[0]}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
