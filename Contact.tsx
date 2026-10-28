"use client";

import { FormEvent, ReactNode, useState } from "react";
import { ADDRESS, WHATSAPP_NUMBER, WHATSAPP_NUMBER_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/config";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { MapPin } from "lucide-react";

const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS.full
)}&output=embed`;

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Não há backend configurado para este formulário. Para manter o botão
    // funcional sem inventar um sistema de envio, os dados preenchidos são
    // usados para montar uma mensagem e abrir uma conversa no WhatsApp
    // oficial da Viva Connecta. Quando houver uma integração futura
    // (ex.: API própria ou serviço de e-mail), substitua esta função.
    const lines = [
      "Olá! Vim pelo site da Viva Connecta e gostaria de falar com a equipe.",
      form.nome && `Nome: ${form.nome}`,
      form.empresa && `Empresa: ${form.empresa}`,
      form.telefone && `Telefone: ${form.telefone}`,
      form.email && `E-mail: ${form.email}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="relative bg-base-elevated py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-[11px] font-medium uppercase text-signal-soft">
            Contato
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl">
            Vamos conectar sua empresa.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl border border-base-line bg-base-surface p-7">
              <h3 className="font-display text-lg font-semibold text-ink-primary">
                Viva Connecta
              </h3>
              <div className="mt-4 flex items-start gap-3 text-sm text-ink-muted">
                <MapPin className="mt-0.5 h-4.5 w-4.5 flex-none text-signal-teal" strokeWidth={1.8} />
                <p className="leading-relaxed">
                  {ADDRESS.street}
                  <br />
                  {ADDRESS.city} – {ADDRESS.state}
                  <br />
                  CEP: {ADDRESS.zip}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Olá! Vim pelo site da Viva Connecta e gostaria de conhecer as soluções para minha empresa."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  Falar pelo WhatsApp
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-base-line bg-base-elevated px-5 py-3 text-sm font-semibold text-ink-primary transition-colors hover:border-signal/50"
                >
                  <InstagramIcon className="h-4.5 w-4.5" />
                  Seguir no Instagram
                </a>
              </div>

              <div className="mt-6 space-y-1 border-t border-base-line pt-5 text-sm text-ink-muted">
                <p>
                  <span className="text-ink-faint">WhatsApp: </span>
                  {WHATSAPP_NUMBER_DISPLAY}
                </p>
                <p>
                  <span className="text-ink-faint">Instagram: </span>
                  {INSTAGRAM_HANDLE}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-base-line">
              <iframe
                title="Localização da Viva Connecta em Guarulhos"
                src={mapEmbedSrc}
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(0.15) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-base-line bg-base-surface p-7 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Nome" htmlFor="nome">
                <input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  className="form-input"
                  placeholder="Seu nome"
                />
              </Field>
              <Field label="Empresa" htmlFor="empresa">
                <input
                  id="empresa"
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  className="form-input"
                  placeholder="Nome da empresa"
                />
              </Field>
              <Field label="Telefone" htmlFor="telefone">
                <input
                  id="telefone"
                  required
                  value={form.telefone}
                  onChange={(e) => update("telefone", e.target.value)}
                  className="form-input"
                  placeholder="(11) 90000-0000"
                />
              </Field>
              <Field label="E-mail" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="form-input"
                  placeholder="voce@empresa.com.br"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Mensagem" htmlFor="mensagem">
                  <textarea
                    id="mensagem"
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => update("mensagem", e.target.value)}
                    className="form-input resize-none"
                    placeholder="Conte um pouco sobre o que sua empresa precisa"
                  />
                </Field>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] sm:w-auto"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              Enviar mensagem
            </button>
            <p className="mt-3 text-xs text-ink-faint">
              Ao enviar, sua mensagem é encaminhada diretamente para o WhatsApp
              oficial da Viva Connecta.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
