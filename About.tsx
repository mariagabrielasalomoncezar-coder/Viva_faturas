export default function About() {
  return (
    <section id="sobre" className="relative bg-base-deep py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="section-eyebrow text-[11px] font-medium uppercase text-signal-soft">
            Sobre a Viva Connecta
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-ink-primary sm:text-4xl">
            Uma empresa de conectividade pensada para o ritmo da sua operação.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
            A Viva Connecta nasceu para conectar empresas às melhores soluções em
            telecomunicações e conectividade. Com atendimento próximo e foco nas
            necessidades de cada negócio, ajudamos empresas a encontrarem soluções
            adequadas para manter suas operações sempre conectadas.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-teal" />
              Parceira Vivo Empresas
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-base-line bg-base-elevated/60 px-4 py-2 text-sm font-medium text-ink-muted">
              Sede em Guarulhos – SP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
