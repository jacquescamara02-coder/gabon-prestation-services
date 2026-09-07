import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Forklift,
  HardHat,
  Phone,
  ShieldCheck,
  Snowflake,
  Truck,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { LetterSwing } from "@/components/LetterSwing";
import { ServiceCatalog } from "@/components/ServiceCatalog";
import { Testimonials } from "@/components/Testimonials";
import { SITE } from "@/lib/site";
import heroImage from "@/assets/hero-psg.jpg";
import enginsImage from "@/assets/engins.jpg";
import froidImage from "@/assets/froid.jpg";
import soudureImage from "@/assets/soudure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "P.S.G — Engins, travaux industriels & main-d'œuvre à Port-Gentil",
      },
      {
        name: "description",
        content:
          "P.S.G, Prestation de Services Généraux à Port-Gentil : location d'engins avec chauffeurs, soudure, peinture, froid industriel, menuiserie, espaces verts et main-d'œuvre qualifiée.",
      },
      {
        property: "og:title",
        content: "P.S.G — Prestation de Services Généraux à Port-Gentil",
      },
      {
        property: "og:description",
        content:
          "Engins lourds et légers avec opérateurs, travaux industriels et main-d'œuvre HSE au Gabon. Devis express.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const priorities = [
  {
    icon: Wrench,
    title: "Main-d'œuvre technique",
    subtitle: "Soudeurs & tuyauteurs",
    text: "Une sous-traitance réactive avec des profils hautement qualifiés maîtrisant la soudure industrielle, prêts à intervenir sur vos chantiers.",
    image: soudureImage,
  },
  {
    icon: Forklift,
    title: "Location d'engins de levage",
    subtitle: "Avec chauffeurs certifiés",
    text: "Manitou, chariots élévateurs, camions et véhicules légers ou lourds. Nous fournissons la solution logistique complète : l'engin + le conducteur.",
    image: enginsImage,
  },
  {
    icon: Snowflake,
    title: "Froid & climatisation",
    subtitle: "Industrielle et tertiaire",
    text: "Maintenance express et installation complète de systèmes de climatisation pour vos bureaux, locaux techniques et bases-vies à Port-Gentil.",
    image: froidImage,
  },
];

const stats = [
  { value: 24, suffix: "h/7j", label: "Disponibilité et réactivité" },
  { value: 6, suffix: " métiers", label: "Corps de métiers industriels" },
  { value: 100, suffix: "%", label: "Personnel équipé EPI" },
  { value: 1, suffix: " interlocuteur", label: "Engin + conducteur inclus" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Chantier portuaire à Port-Gentil : chariot élévateur et engin de levage au crépuscule"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div
          className="absolute inset-0 bg-navy/80"
          style={{
            backgroundImage:
              "linear-gradient(100deg, oklch(0.2 0.06 258 / 0.94) 0%, oklch(0.24 0.08 255 / 0.82) 45%, oklch(0.3 0.1 250 / 0.55) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-signal">
              <Clock className="size-3.5" aria-hidden="true" />
              Port-Gentil · Gabon · 24h/7j
            </p>
          </Reveal>

          <Reveal delay={80}>
            <LetterSwing as="h1" className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] text-navy-foreground sm:text-6xl lg:text-7xl">
              P.S.G — Prestation de Services Généraux à Port-Gentil
            </LetterSwing>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
              Bienvenue chez P.S.G. Nous sommes votre partenaire de confiance au Gabon pour
              tous vos besoins professionnels. Notre entreprise est spécialisée dans la mise à
              disposition d'engins lourds et légers, de véhicules et autres moyens de transport.
              Nous réalisons également tous vos travaux industriels : soudure, peinture, froid,
              menuiserie, espaces verts, ainsi que la mise à disposition de la main-d'œuvre y
              afférente.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="orbit-border-button orbit-primary inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
              >
                <Phone className="size-4" aria-hidden="true" />
                Demander un devis express
              </Link>
              <a
                href={SITE.phoneLinks[0]}
                className="orbit-border-button orbit-hero inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
              >
                Appeler {SITE.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PRIORITAIRES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Nos 3 services prioritaires à POG
          </p>
          <LetterSwing className="mt-3 max-w-3xl font-display text-3xl sm:text-4xl">
            Des solutions complètes, immédiatement opérationnelles
          </LetterSwing>
          <div className="hairline mt-6 h-px w-40" aria-hidden="true" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {priorities.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="group h-full overflow-hidden rounded-lg border border-border bg-card shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 inline-flex size-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <p.icon className="size-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-steel">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                  <Link
                    to="/services"
                    className="orbit-border-button orbit-secondary mt-5 inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold"
                  >
                    En savoir plus
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ServiceCatalog />

      {/* HSE */}
      <section className="surface-navy">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-signal">
              <ShieldCheck className="size-4" aria-hidden="true" /> Sécurité HSE
            </p>
            <LetterSwing className="mt-4 font-display text-3xl sm:text-4xl">
              Un personnel équipé, formé et sensibilisé
            </LetterSwing>
            <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/85">
              Tous nos personnels (chauffeurs, conducteurs d'engins, soudeurs, plombiers,
              maçons) sont fournis avec leurs Équipements de Protection Individuelle (EPI)
              complets et sont strictement sensibilisés aux normes de sécurité (HSE) en
              vigueur à Port-Gentil.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: HardHat, label: "EPI complets fournis" },
                { icon: Truck, label: "Opérateurs expérimentés" },
                { icon: Clock, label: "Réactivité 24h/7j" },
                { icon: ShieldCheck, label: "Normes HSE respectées" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 p-5 transition-colors duration-200 hover:border-signal/60"
                >
                  <b.icon className="size-5 text-signal" aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold">{b.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-10 shadow-card md:flex-row md:items-center">
            <div>
              <LetterSwing className="text-2xl sm:text-3xl">Un besoin urgent sur votre chantier ?</LetterSwing>
              <p className="mt-2 text-sm text-muted-foreground">
                Engins, équipes techniques ou dépannage climatisation — nous répondons vite.
              </p>
            </div>
            <Link
              to="/contact"
              className="orbit-border-button orbit-primary inline-flex shrink-0 items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide"
            >
              Contacter P.S.G
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
