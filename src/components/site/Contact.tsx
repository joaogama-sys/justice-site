import { MapPin, Navigation, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  ADDRESS,
  MAPS_EMBED_URL,
  MAPS_ROUTE_URL,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from "./site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Contact() {
  return (
    <section id="contato" className="bg-navy-deep px-6 py-24 lg:py-32" aria-label="Contato">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            Contato
          </p>
          <h2 className="font-display text-3xl leading-tight font-semibold text-ivory sm:text-4xl lg:text-5xl">
            Fale com um <span className="text-gold italic">advogado criminalista</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory/70">
            O atendimento é sigiloso. Envie uma mensagem pelo WhatsApp e descreva
            brevemente sua situação.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold/15">
                  <MapPin className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Endereço
                  </h3>
                  <address className="mt-2 text-base leading-relaxed text-ivory/80 not-italic">
                    {ADDRESS.street}
                    <br />
                    {ADDRESS.district}
                    <br />
                    {ADDRESS.city} · {ADDRESS.cep}
                  </address>
                  <a
                    href={MAPS_ROUTE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                  >
                    <Navigation className="h-4 w-4" />
                    Como chegar
                  </a>
                </div>
              </li>

              <li className="flex gap-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-gold/15">
                  <Phone className="h-5 w-5 text-gold" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                    Telefone / WhatsApp
                  </h3>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block font-display text-2xl font-semibold text-ivory transition-colors hover:text-gold"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 text-sm font-bold tracking-wide text-navy-deep uppercase transition-all hover:bg-gold-soft hover:shadow-lg hover:shadow-gold/20"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Falar pelo WhatsApp
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden rounded-sm border border-ivory/15">
              <iframe
                src={MAPS_EMBED_URL}
                title="Localização do escritório Glaidemir Resende no mapa"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
