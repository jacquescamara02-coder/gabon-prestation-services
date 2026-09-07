import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, Loader2, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import { BackButton } from "@/components/BackButton";
import { LetterSwing } from "@/components/LetterSwing";
import { SITE } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & devis express — P.S.G Port-Gentil (B.P. 1320)" },
      {
        name: "description",
        content:
          "Contactez P.S.G à Port-Gentil : 077 21 05 22 / 062 77 67 60, WhatsApp, formulaire de devis, plan d'accès et informations administratives (ANPI, CNAMGS).",
      },
      { property: "og:title", content: "Contact & devis express — P.S.G Port-Gentil" },
      {
        property: "og:description",
        content:
          "Demandez un devis express pour vos engins, travaux industriels ou mise à disposition de personnel à Port-Gentil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom.").max(80),
  societe: z.string().trim().max(80).optional(),
  telephone: z.string().trim().min(6, "Numéro de téléphone requis.").max(30),
  email: z.string().trim().email("Adresse e-mail invalide.").max(120),
  besoin: z.string().min(1, "Sélectionnez un besoin."),
  message: z.string().trim().min(10, "Décrivez votre besoin (10 caractères minimum).").max(1500),
});

const besoins = [
  "Location d'engins avec chauffeur",
  "Transport & logistique",
  "Soudure / chaudronnerie",
  "Peinture industrielle",
  "Froid & climatisation",
  "Plomberie",
  "Menuiserie",
  "Espaces verts",
  "Mise à disposition de personnel",
  "Autre demande",
];

const faq = [
  {
    q: "Intervenez-vous uniquement à Port-Gentil ?",
    a: "Notre base est à Port-Gentil, où nous intervenons en priorité et dans les meilleurs délais. Nous étudions également les demandes ailleurs au Gabon selon la durée et la nature du chantier.",
  },
  {
    q: "Les engins sont-ils loués avec un conducteur ?",
    a: "Oui. Tous nos engins et véhicules sont mis à disposition avec des opérateurs expérimentés : l'engin + le conducteur, pour une solution logistique complète.",
  },
  {
    q: "Vos personnels sont-ils équipés en EPI ?",
    a: "Tous nos personnels sont fournis avec leurs Équipements de Protection Individuelle complets et sont sensibilisés aux normes de sécurité HSE en vigueur à Port-Gentil.",
  },
  {
    q: "Quel est le délai pour un dépannage climatisation ?",
    a: "Nous assurons une maintenance express avec une disponibilité 24h/7j pour les bureaux, locaux techniques et bases-vies.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Par téléphone, via WhatsApp ou grâce au formulaire de cette page. Précisez la nature des travaux, la durée estimée et le lieu d'intervention pour une réponse rapide.",
  },
  {
    q: "Êtes-vous une entreprise régulièrement immatriculée ?",
    a: `Oui. Code ANPI : ${SITE.anpi} — Immatriculation CNAMGS : ${SITE.cnamgs}.`,
  },
];

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      parsed.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error("Merci de corriger les champs signalés.");
      return;
    }

    setErrors({});
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));

    const d = parsed.data;
    const body = [
      `Nom : ${d.nom}`,
      d.societe ? `Société : ${d.societe}` : "",
      `Téléphone : ${d.telephone}`,
      `E-mail : ${d.email}`,
      `Besoin : ${d.besoin}`,
      "",
      d.message,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`${SITE.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    setSending(false);
    form.reset();
    toast.success("Demande prête ! Elle s'ouvre dans WhatsApp pour envoi immédiat.");
  };

  const fieldClass =
    "mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm transition-colors duration-200 placeholder:text-muted-foreground/70 hover:border-primary/50 focus:border-primary focus:outline-none";

  return (
    <>
      <section className="surface-navy">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <BackButton inverse />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-signal">
              Contact, localisation & conformité
            </p>
            <LetterSwing as="h1" className="mt-3 font-display text-4xl sm:text-5xl">Parlons de votre chantier</LetterSwing>
            <p className="mt-5 max-w-2xl leading-relaxed text-navy-foreground/85">
              Devis express, mobilisation d'engins ou d'équipes : notre bureau de Port-Gentil
              vous répond rapidement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* FORMULAIRE */}
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-lg border border-border bg-card p-7 shadow-card sm:p-9"
            >
              <LetterSwing className="text-2xl">Demander un devis express</LetterSwing>
              <p className="mt-2 text-sm text-muted-foreground">
                Les champs marqués d'un astérisque sont obligatoires.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="text-sm font-semibold">
                    Nom et prénom *
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    className={fieldClass}
                    placeholder="Jean Moussavou"
                    aria-invalid={Boolean(errors.nom)}
                  />
                  {errors.nom ? (
                    <p className="mt-1 text-xs text-destructive">{errors.nom}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="societe" className="text-sm font-semibold">
                    Société
                  </label>
                  <input
                    id="societe"
                    name="societe"
                    className={fieldClass}
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="text-sm font-semibold">
                    Téléphone *
                  </label>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    className={fieldClass}
                    placeholder="+241 ..."
                    aria-invalid={Boolean(errors.telephone)}
                  />
                  {errors.telephone ? (
                    <p className="mt-1 text-xs text-destructive">{errors.telephone}</p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="vous@societe.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="besoin" className="text-sm font-semibold">
                    Nature du besoin *
                  </label>
                  <select
                    id="besoin"
                    name="besoin"
                    defaultValue=""
                    className={fieldClass}
                    aria-invalid={Boolean(errors.besoin)}
                  >
                    <option value="" disabled>
                      Sélectionnez une prestation
                    </option>
                    {besoins.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.besoin ? (
                    <p className="mt-1 text-xs text-destructive">{errors.besoin}</p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    Détails de l'intervention *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={fieldClass}
                    placeholder="Lieu, durée, matériel ou profils recherchés, date de démarrage..."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  ) : null}
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="orbit-border-button orbit-primary mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold uppercase tracking-wide disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {sending ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send className="size-4" aria-hidden="true" />
                    Envoyer ma demande
                  </>
                )}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Votre demande est transmise à notre équipe via WhatsApp pour un traitement
                immédiat.
              </p>
            </form>
          </Reveal>

          {/* COORDONNÉES */}
          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="rounded-lg border border-border bg-card p-7 shadow-card">
                <LetterSwing className="text-xl">Coordonnées</LetterSwing>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold">Adresse physique</span>
                      {SITE.address}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      <span className="block font-semibold">Téléphone direct</span>
                      {SITE.phones.map((p, i) => (
                        <a
                          key={p}
                          href={SITE.phoneLinks[i]}
                          className="mr-2 inline-block transition-colors duration-200 hover:text-primary"
                        >
                          {p}
                        </a>
                      ))}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <BadgeCheck
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="block font-semibold">Transparence administrative</span>
                      Code ANPI : {SITE.anpi}
                      <br />
                      Immatriculation CNAMGS : {SITE.cnamgs}
                    </span>
                  </li>
                </ul>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-border-button orbit-card mt-6 inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold"
                >
                  WhatsApp {SITE.whatsappDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="overflow-hidden rounded-lg border border-border shadow-card">
                <iframe
                  title="Localisation de P.S.G à Port-Gentil, Gabon"
                  src="https://www.google.com/maps?q=Port-Gentil,%20Gabon&hl=fr&z=13&output=embed"
                  className="h-80 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</p>
            <LetterSwing className="mt-3 text-3xl">Questions fréquentes</LetterSwing>
            <div className="hairline mt-5 h-px w-40" aria-hidden="true" />
          </Reveal>
          <Reveal delay={120}>
            <Accordion type="single" collapsible className="mt-8">
              {faq.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
