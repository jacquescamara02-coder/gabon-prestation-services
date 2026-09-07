import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LetterSwing } from "@/components/LetterSwing";

const testimonials = [
  {
    quote: "Une équipe réactive, ponctuelle et attentive aux exigences de sécurité de notre site.",
    author: "Responsable de site",
    company: "Entreprise industrielle · Port-Gentil",
  },
  {
    quote: "La mise à disposition de l'engin avec son opérateur nous a permis de démarrer sans délai.",
    author: "Chef de chantier",
    company: "Construction & logistique · Ogooué-Maritime",
  },
  {
    quote: "Intervention professionnelle et communication claire du début à la fin de la mission.",
    author: "Responsable maintenance",
    company: "Services techniques · Port-Gentil",
  },
  {
    quote: "Des techniciens bien équipés, disponibles et immédiatement opérationnels sur le terrain.",
    author: "Coordinateur HSE",
    company: "Secteur industriel · Gabon",
  },
];

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-secondary/60 py-20" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Avis clients</p>
          <LetterSwing id="testimonials-title" className="mt-3 max-w-3xl text-3xl sm:text-4xl">
            La confiance se construit sur le terrain
          </LetterSwing>
          <div className="hairline mt-6 h-px w-40" aria-hidden="true" />
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10">
        <div className="testimonial-marquee" role="region" aria-label="Témoignages de clients">
          <div className="testimonial-track">
            {loop.map((item, index) => (
              <article
                key={`${item.author}-${index}`}
                className="testimonial-card rounded-lg border border-border bg-card p-6 shadow-card"
                aria-hidden={index >= testimonials.length}
              >
                <div className="flex items-center justify-between">
                  <Quote className="size-7 text-primary" aria-hidden="true" />
                  <span className="flex gap-1 text-safety" aria-label="5 étoiles sur 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-foreground">« {item.quote} »</p>
                <footer className="mt-5 border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}