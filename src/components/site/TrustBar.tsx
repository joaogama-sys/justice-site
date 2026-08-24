import { Clock, MapPin, MessageSquareQuote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: Star,
    value: "4,8/5",
    label: "Avaliação dos clientes",
  },
  {
    icon: MessageSquareQuote,
    value: "17",
    label: "Avaliações",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Atendimento",
  },
  {
    icon: MapPin,
    value: "Campos dos Goytacazes",
    label: "Rio de Janeiro",
  },
];

export function TrustBar() {
  return (
    <section id="confianca" className="relative z-10 -mt-20 px-6" aria-label="Indicadores de confiança">
      <Reveal className="mx-auto max-w-6xl">
        <dl className="grid grid-cols-2 divide-border overflow-hidden rounded-sm border border-border bg-card shadow-xl shadow-navy-deep/10 lg:grid-cols-4 lg:divide-x">
          {ITEMS.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 px-4 py-8 text-center"
            >
              <item.icon className="h-6 w-6 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <dt className="order-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {item.label}
              </dt>
              <dd className="order-1 font-display text-2xl font-semibold text-navy sm:text-3xl">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
