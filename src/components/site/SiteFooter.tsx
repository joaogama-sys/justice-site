import { Link } from "@tanstack/react-router";
import { ADDRESS, NAV_LINKS, OFFICE_TAGLINE, PHONE_DISPLAY, WHATSAPP_URL } from "./site-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ivory/10 bg-navy px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <span className="font-display text-2xl font-semibold tracking-wide text-ivory">
            Glaidemir <span className="text-gold">Resende</span>
          </span>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.35em] text-gold/90 uppercase">
            {OFFICE_TAGLINE}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ivory/60">
            {ADDRESS.street}
            <br />
            {ADDRESS.district} — {ADDRESS.city}
            <br />
            {ADDRESS.cep}
          </p>
          {/* Campo reservado para o número de inscrição na OAB */}
          {/* <p className="mt-3 text-sm text-ivory/60">OAB/RJ nº —</p> */}
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Navegação</h2>
          <ul className="mt-5 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Contato</h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block font-display text-xl font-semibold text-ivory transition-colors hover:text-gold"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-ivory/60">
            Atendimento mediante agendamento. Urgências criminais 24 horas.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-ivory/10 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Glaidemir Resende — Advocacia Criminal. Todos os direitos reservados.</p>
        <div className="flex items-center gap-4">
          <Link to="/politica-de-privacidade" className="transition-colors hover:text-gold">
            Política de Privacidade
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl text-[11px] leading-relaxed text-ivory/35">
        Este site tem caráter meramente informativo, em conformidade com o Código de
        Ética e Disciplina da OAB. Não constitui oferta de serviços, captação de
        clientela ou promessa de resultados.
      </p>
    </footer>
  );
}
