import { Reveal } from "./Reveal";
import { WHATSAPP_URL } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";
import retratoAsset from "@/assets/retrato.png.asset.json";
import placaAsset from "@/assets/placa.png.asset.json";

const retrato = retratoAsset.url;
const placa = placaAsset.url;

export function About() {
  return (
    <section id="escritorio" className="bg-background px-6 py-24 lg:py-32" aria-label="O escritório">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={retrato}
              alt="Glaidemir Resende, advogado criminalista em Campos dos Goytacazes"
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-2xl shadow-navy-deep/25"
            />
            <img
              src={placa}
              alt="Placa do escritório Glaidemir Resende — Advocacia Criminal"
              loading="lazy"
              className="absolute -right-4 -bottom-10 hidden w-40 rounded-sm border-4 border-background shadow-xl shadow-navy-deep/25 sm:block lg:w-52"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />O Escritório
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-navy sm:text-4xl lg:text-5xl">
            Defesa criminal técnica, estratégica e{" "}
            <span className="text-gold italic">humana</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              O escritório Glaidemir Resende atua de forma dedicada na área criminal,
              em Campos dos Goytacazes e região, oferecendo acompanhamento próximo em
              cada etapa do processo — do inquérito policial ao julgamento.
            </p>
            <p>
              Cada caso é tratado com discrição, análise cuidadosa e comunicação clara,
              para que o cliente compreenda sua situação e as alternativas jurídicas
              disponíveis. O compromisso é com a defesa firme dos direitos e das
              garantias fundamentais.
            </p>
            <p>
              O atendimento é personalizado, com disponibilidade para urgências e
              orientação objetiva desde o primeiro contato.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-sm bg-navy px-7 py-3.5 text-sm font-bold tracking-wide text-ivory uppercase transition-all hover:bg-navy-deep"
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            Agendar atendimento
          </a>
        </Reveal>
      </div>
    </section>
  );
}
