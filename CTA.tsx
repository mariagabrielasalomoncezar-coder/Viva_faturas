import { buildWhatsAppLink } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-base-deep py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-signal/15 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
          Sua empresa precisa de uma solução de conectividade?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
          Fale com a nossa equipe e descubra as soluções que podem fazer sentido
          para o seu negócio.
        </p>
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 text-base font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Falar com um especialista
        </a>
      </div>
    </section>
  );
}
