import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-navy-deep/95 shadow-lg shadow-navy-deep/40 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="flex flex-col"
          onClick={() => setOpen(false)}
          aria-label="Glaidemir Resende — Advocacia Criminal"
        >
          <span className="font-display text-2xl leading-tight font-semibold tracking-wide text-ivory">
            Glaidemir <span className="text-gold">Resende</span>
          </span>
          <span className="text-[10px] font-semibold tracking-[0.35em] text-gold/90 uppercase">
            Advocacia Criminal
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ivory/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-navy-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale com um advogado
          </a>
        </nav>

        <button
          type="button"
          className="text-ivory transition-colors hover:text-gold lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-ivory/10 bg-navy-deep/95 px-6 pt-2 pb-6 backdrop-blur-md lg:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ivory/5 py-3 text-sm font-medium text-ivory/85 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-soft"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Fale com um advogado
          </a>
        </nav>
      )}
    </header>
  );
}
