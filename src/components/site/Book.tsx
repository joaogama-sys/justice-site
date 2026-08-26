import { BookOpen } from "lucide-react";
import { Reveal } from "./Reveal";
import livroAsset from "@/assets/livro.png.asset.json";

const livro = livroAsset.url;
const KIWIFY_URL = "https://pay.kiwify.com.br/d0qyqGu";

export function Book() {
  return (
    <section id="livro" className="bg-navy px-6 py-24 lg:py-32" aria-label="Livro">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="mx-auto max-w-sm">
            <img
              src={livro}
              alt="Capa do livro Tribunal do Júri — Quando a Defesa Vai ao Ataque, de Glaidemir Resende"
              loading="lazy"
              className="w-full rounded-sm shadow-2xl shadow-navy-deep/60 ring-1 ring-ivory/10"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Livro do autor
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
            Tribunal do Júri —{" "}
            <span className="text-gold italic">Quando a Defesa Vai ao Ataque</span>
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-ivory/75">
            <p>
              Obra de Glaidemir Resende dedicada à prática do Tribunal do Júri,
              com visão estratégica e ofensiva da defesa criminal, voltada a
              advogados, estudantes de Direito e todos que desejam compreender
              os bastidores dos julgamentos populares.
            </p>
            <p>
              Adquira seu exemplar com pagamento seguro pela plataforma Kiwify.
            </p>
          </div>
          <a
            href={KIWIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 text-sm font-bold tracking-wide text-navy-deep uppercase transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
          >
            <BookOpen className="h-4.5 w-4.5" aria-hidden="true" />
            Comprar o livro
          </a>
        </Reveal>
      </div>
    </section>
  );
}
