import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { WHATSAPP_URL } from "./site-data";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 bg-navy text-ivory shadow-lg transition-colors hover:bg-navy-deep hover:text-gold"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-navy-deep/30 transition-transform hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
