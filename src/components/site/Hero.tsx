import { ChevronDown } from "lucide-react";
import heroOffice from "@/assets/hero-office.jpg";
import { WHATSAPP_URL } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center" aria-label="Apresentação">
      <img
        src={heroOffice}
        alt="Escritório de advocacia criminal com biblioteca jurídica e luminária dourada"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/75 to-navy-deep/35" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-deep/60 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-32 pb-40">
        <div className="max-w-2xl">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Advocacia Criminal · Campos dos Goytacazes
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-semibold text-ivory sm:text-5xl lg:text-6xl">
            Advocacia Criminal com experiência, estratégia e{" "}
            <span className="text-gold italic">dedicação</span>.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Atuação jurídica pautada pela técnica, estratégia e compromisso com a
            defesa dos direitos de nossos clientes.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 text-sm font-bold tracking-wide text-navy-deep uppercase transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Falar pelo WhatsApp
            </a>
            <a
              href="#escritorio"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-ivory/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-ivory uppercase transition-all hover:border-gold hover:text-gold"
            >
              Conheça o escritório
            </a>
          </div>
        </div>
      </div>

      <a
        href="#confianca"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 text-ivory/50 transition-colors hover:text-gold md:block"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
