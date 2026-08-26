import { Clock, EyeOff, MessagesSquare, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import escritorioAsset from "@/assets/escritorio-interior.png.asset.json";

const escritorio = escritorioAsset.url;

const ITEMS = [
  {
    icon: Clock,
    title: "Atendimento 24 horas",
    text: "Disponibilidade para urgências criminais, inclusive fins de semana e feriados.",
  },
  {
    icon: EyeOff,
    title: "Discrição absoluta",
    text: "Sigilo profissional rigoroso em todas as etapas do relacionamento.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação clara",
    text: "Explicações sem juridiquês e atualizações constantes sobre o andamento.",
  },
  {
    icon: Target,
    title: "Estratégia individual",
    text: "Cada defesa é construída a partir das particularidades do caso concreto.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-background px-6 py-24 lg:py-32" aria-label="Diferenciais">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Diferenciais
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-navy sm:text-4xl lg:text-5xl">
            Por que confiar sua defesa a nós
          </h2>
          <ul className="mt-10 space-y-8">
            {ITEMS.map((item) => (
              <li key={item.title} className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy">
                  <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <img
            src={escritorio}
            alt="Interior do escritório de advocacia Glaidemir Resende"
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-2xl shadow-navy-deep/25"
          />
        </Reveal>
      </div>
    </section>
  );
}
