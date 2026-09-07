import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HardHat, ShieldCheck, Sparkles, Users, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { BackButton } from "@/components/BackButton";
import { LetterSwing } from "@/components/LetterSwing";
import equipeImage from "@/assets/equipe.jpg";

export const Route = createFileRoute("/main-doeuvre")({
  head: () => ({
    meta: [
      { title: "Main-d'œuvre qualifiée & HSE — P.S.G Port-Gentil" },
      {
        name: "description",
        content:
          "Mise à disposition de conducteurs d'engins, chauffeurs SPL, soudeurs homologués, tuyauteurs, peintres industriels, plombiers et agents de support à Port-Gentil.",
      },
      { property: "og:title", content: "Main-d'œuvre qualifiée & HSE — P.S.G" },
      {
        property: "og:description",
        content:
          "Personnel fourni avec EPI complets et sensibilisé aux normes HSE en vigueur à Port-Gentil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkforcePage,
});

const groups = [
  {
    icon: HardHat,
    title: "Conducteurs & chauffeurs",
    text: "Opérateurs de Manitou, grutiers, conducteurs de chariots élévateurs, chauffeurs SPL (poids lourds) et VL.",
    items: ["Opérateurs Manitou", "Grutiers", "Caristes", "Chauffeurs SPL & VL"],
  },
  {
    icon: Wrench,
    title: "Artisans & techniciens",
    text: "Soudeurs homologués, tuyauteurs de métier, peintres industriels, techniciens en climatisation et plombiers.",
    items: ["Soudeurs homologués", "Tuyauteurs", "Peintres industriels", "Frigoristes & plombiers"],
  },
  {
    icon: Users,
    title: "Agents de support",
    text: "Équipes d'entretien des espaces verts, manœuvres logistiques et agents de nettoyage de site.",
    items: ["Espaces verts", "Manœuvres logistiques", "Agents de nettoyage", "Renforts chantier"],
  },
];

function WorkforcePage() {
  return (
    <>
      <section className="surface-navy">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-20 lg:grid-cols-2">
          <Reveal>
            <BackButton inverse />
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Mise à disposition de personnel
            </p>
            <LetterSwing as="h1" className="mt-3 font-display text-4xl sm:text-5xl">
              Une main-d'œuvre qualifiée, prête à intervenir
            </LetterSwing>
            <p className="mt-5 max-w-xl leading-relaxed text-navy-foreground/85">
              P.S.G met à votre disposition des profils opérationnels dès leur arrivée sur
              site, encadrés et équipés selon les exigences de vos donneurs d'ordre.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={equipeImage}
              alt="Équipe de techniciens en équipements de protection individuelle sur un site industriel"
              loading="lazy"
              width={1200}
              height={800}
              className="rounded-lg border border-navy-foreground/15 object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* HSE */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Reveal>
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-8">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <ShieldCheck className="size-4" aria-hidden="true" /> Sécurité HSE
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-foreground">
              « Tous nos personnels (chauffeurs, conducteurs d'engins, soudeurs, plombiers,
              maçons) sont fournis avec leurs Équipements de Protection Individuelle (EPI)
              complets et sont strictement sensibilisés aux normes de sécurité (HSE) en
              vigueur à Port-Gentil. »
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { value: 100, suffix: "%", label: "Personnel doté d'EPI complets" },
            { value: 3, suffix: " familles", label: "De métiers mobilisables" },
            { value: 48, suffix: "h", label: "Délai de mobilisation courant" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-4xl font-bold text-primary">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GROUPES */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <LetterSwing className="text-3xl">Les profils disponibles</LetterSwing>
            <div className="hairline mt-5 h-px w-40" aria-hidden="true" />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {groups.map((g, i) => (
              <Reveal key={g.title} delay={i * 110}>
                <article className="h-full rounded-lg border border-border bg-card p-7 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <g.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl">{g.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                  <ul className="mt-5 space-y-2 border-t border-border pt-5">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-10 shadow-card md:flex-row md:items-center">
            <div>
              <LetterSwing className="text-2xl sm:text-3xl">Besoin d'une équipe la semaine prochaine ?</LetterSwing>
              <p className="mt-2 text-sm text-muted-foreground">
                Indiquez-nous les profils, la durée et le lieu d'intervention.
              </p>
            </div>
            <Link
              to="/contact"
              className="orbit-border-button orbit-primary inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
            >
              Demander du personnel
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
