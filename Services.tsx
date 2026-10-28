import { Smartphone, Building2, Wifi, Cable, Network, Settings2, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Smartphone,
    title: "Telefonia Móvel Empresarial",
    description: "Soluções de telefonia móvel para empresas.",
  },
  {
    icon: Building2,
    title: "Planos Corporativos",
    description: "Opções pensadas para as necessidades de comunicação das empresas.",
  },
  {
    icon: Wifi,
    title: "Internet Empresarial",
    description: "Soluções de internet para manter sua empresa conectada.",
  },
  {
    icon: Cable,
    title: "Fibra para Empresas",
    description: "Conectividade através de fibra óptica.",
  },
  {
    icon: Network,
    title: "Soluções de Conectividade",
    description: "Alternativas para empresas que precisam de comunicação eficiente e confiável.",
  },
  {
    icon: Settings2,
    title: "Gestão de Linhas e Dispositivos",
    description: "Soluções para facilitar a gestão da comunicação empresarial.",
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="relative bg-base-deep py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-[11px] font-medium uppercase text-signal-soft">
            Nossas soluções
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
            Conectividade sob medida para cada etapa da sua operação.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-base-line bg-base-elevated/60 p-7 shadow-card transition-colors duration-300 hover:border-signal/40 hover:bg-base-surface"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal/12 text-signal-soft transition-colors duration-300 group-hover:bg-signal/20">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-primary">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
