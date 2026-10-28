import { buildWhatsAppLink, INSTAGRAM_URL } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import SignalMap from "@/components/SignalMap";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-base-deep pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-28">
        <div className="relative z-10 animate-fade-up">
          <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-base-line bg-base-elevated/60 px-3.5 py-1.5 text-[11px] font-medium uppercase text-signal-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-teal" />
            Parceira Vivo Empresas · Guarulhos – SP
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink-primary sm:text-5xl lg:text-6xl">
            Conectando sua empresa ao que realmente importa.
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
            Somos a Viva Connecta: soluções de telefonia móvel, internet e fibra
            para empresas, com atendimento próximo e a força da parceria com a
            Vivo Empresas.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] active:scale-[0.98] sm:text-base"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Falar com um especialista
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-base-line bg-base-elevated/60 px-7 py-3.5 text-sm font-semibold text-ink-primary transition-colors hover:border-signal/50 hover:bg-base-surface sm:text-base"
            >
              Conheça nossas soluções
            </a>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink-primary"
          >
            <InstagramIcon className="h-4.5 w-4.5" />
            @vivaconectabr
          </a>
        </div>

        <div className="relative z-0 mx-auto h-[320px] w-full max-w-[560px] animate-float-slow sm:h-[400px] lg:h-[460px]">
          <SignalMap />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-base-line to-transparent" />
    </section>
  );
}
