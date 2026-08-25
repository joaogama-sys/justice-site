import {
  Gavel,
  ShieldCheck,
  Scale,
  FileSearch,
  Users,
  Landmark,
  Handshake,
  Siren,
} from "lucide-react";
import { Reveal } from "./Reveal";

const AREAS = [
  {
    icon: Siren,
    title: "Prisão em flagrante",
    text: "Atuação imediata em flagrantes, audiências de custódia e pedidos de liberdade.",
  },
  {
    icon: Gavel,
    title: "Tribunal do Júri",
    text: "Defesa em crimes dolosos contra a vida, da instrução ao plenário.",
  },
  {
    icon: FileSearch,
    title: "Inquérito policial",
    text: "Acompanhamento desde a fase investigativa, com estratégia desde o início.",
  },
  {
    icon: ShieldCheck,
    title: "Habeas corpus",
    text: "Medidas urgentes contra prisões e constrangimentos ilegais.",
  },
  {
    icon: Scale,
    title: "Execução penal",
    text: "Progressão de regime, livramento condicional e demais benefícios legais.",
  },
  {
    icon: Landmark,
    title: "Crimes patrimoniais e financeiros",
    text: "Defesa em furtos, roubos, estelionato e crimes contra a ordem econômica.",
  },
  {
    icon: Users,
    title: "Violência doméstica",
    text: "Atuação técnica e discreta em processos regidos pela Lei Maria da Penha.",
  },
  {
    icon: Handshake,
    title: "Consultoria preventiva",
    text: "Orientação jurídica para evitar riscos e conduzir situações delicadas.",
  },
];

export function PracticeAreas() {
  return (
    <section id="atuacao" className="bg-navy-deep px-6 py-24 lg:py-32" aria-label="Áreas de atuação">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Áreas de Atuação
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
            Atuação focada em <span className="text-gold italic">Direito Criminal</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70">
            Defesa em todas as fases da persecução penal, com atenção às
            particularidades de cada caso.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((area, i) => (
            <li key={area.title} className="bg-navy-deep">
              <Reveal delay={(i % 4) * 80} className="h-full">
                <div className="group h-full bg-navy-deep p-7 transition-colors hover:bg-navy">
                  <area.icon
                    className="h-7 w-7 text-gold transition-transform group-hover:-translate-y-0.5"
                    strokeWidth={1.4}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ivory">
                    {area.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ivory/65">{area.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
