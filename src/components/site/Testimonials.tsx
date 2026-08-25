import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    text: "Profissional atencioso e extremamente competente. Explicou cada etapa do processo com clareza e sempre esteve disponível para tirar dúvidas.",
    author: "Cliente atendido",
  },
  {
    text: "Fui muito bem orientado desde o primeiro contato. Trabalho sério, discreto e conduzido com respeito.",
    author: "Cliente atendido",
  },
  {
    text: "Excelente advogado criminalista. Rápido no atendimento e transparente do início ao fim.",
    author: "Cliente atendido",
  },
];

export function Testimonials() {
  return (
    <section id="avaliacoes" className="bg-secondary px-6 py-24 lg:py-32" aria-label="Avaliações">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Avaliações
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-navy sm:text-4xl lg:text-5xl">
            O que dizem os clientes
          </h2>
          <p className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </span>
            4,8 de 5 · 17 avaliações no Google
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <li key={review.text}>
              <Reveal delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col rounded-sm border border-border bg-card p-8 shadow-sm">
                  <Quote className="h-7 w-7 text-gold/70" strokeWidth={1.4} aria-hidden="true" />
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground/80 italic">
                    “{review.text}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {review.author}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
