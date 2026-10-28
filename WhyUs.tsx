import { HeartHandshake, ShieldCheck, MapPin, Building2 } from "lucide-react";

const REASONS = [
  {
    icon: HeartHandshake,
    title: "Atendimento personalizado",
    description: "Entendemos as necessidades da sua empresa para buscar a solução mais adequada.",
  },
  {
    icon: ShieldCheck,
    title: "Parceria Vivo Empresas",
    description: "Conte com soluções da Vivo Empresas através da nossa parceria.",
  },
  {
    icon: MapPin,
    title: "Atendimento próximo",
    description: "Estamos localizados em Guarulhos – SP.",
  },
  {
    icon: Building2,
    title: "Soluções para empresas",
    description: "Atendimento focado nas necessidades de comunicação e conectividade do mercado corporativo.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative bg-base-elevated py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-[11px] font-medium uppercase text-signal-soft">
            Por que escolher a Viva Connecta
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
            Perto o suficiente para entender o seu negócio.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-base-line bg-base-surface text-signal-teal">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
