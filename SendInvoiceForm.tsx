"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SendInvoiceForm({
  invoiceId, clientEmail, clientName, dueDate, amount, hasFile,
}: {
  invoiceId: string;
  clientEmail: string;
  clientName: string;
  dueDate: string;
  amount: string;
  hasFile: boolean;
}) {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [attached, setAttached] = useState(hasFile);
  const [uploading, setUploading] = useState(false);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState("Faturas Vivo Empresas disponíveis | Viva Conecta");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleAttach() {
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setFeedback("Escolha um arquivo PDF."); return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setFeedback("O PDF deve ter no máximo 10 MB."); return;
    }
    setUploading(true);
    setFeedback(null);
    try {
      const supabase = createClient();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const path = `${invoiceId}/${Date.now()}-${safeName}`;
      const { error: uploadError } = await supabase.storage
        .from("invoices")
        .upload(path, file, { upsert: false, contentType: "application/pdf" });
      if (uploadError) throw uploadError;
      const { error: saveError } = await supabase.from("invoices")
        .update({ file_path: path, status: "anexada" }).eq("id", invoiceId);
      if (saveError) throw saveError;
      setAttached(true);
      setFeedback("PDF anexado ao cadastro com sucesso.");
      router.refresh();
    } catch (error) {
      setFeedback(`Erro ao anexar: ${error instanceof Error ? error.message : "tente novamente"}`);
    } finally {
      setUploading(false);
    }
  }

  async function handleSend() {
    if (!attached || !clientEmail) return;
    if (!window.confirm(`Enviar a fatura em PDF para ${clientEmail}?`)) return;
    setSending(true);
    setFeedback(null);
    try {
      const response = await fetch("/api/send-invoice", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ invoiceId, subject }),
      });
      const result = await response.json();
      setFeedback(result.ok
        ? result.warning || "E-mail encaminhado com a fatura em anexo. Confira o histórico."
        : `Erro no envio: ${result.error || "tente novamente"}`);
      router.refresh();
    } catch {
      setFeedback("Erro de conexão. Verifique se o e-mail foi enviado antes de tentar novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-2 text-sm">
      <section className="rounded-2xl border border-[#eae7f0] bg-[#fdfcff] p-5">
        <h3 className="font-semibold">1. Anexar PDF da fatura</h3>
        <p className="mt-1 text-xs text-ink-500">Baixe a fatura no Simplifique e anexe. Cliente: {clientName}; vencimento: {new Date(dueDate + "T12:00:00").toLocaleDateString("pt-BR")}; valor: {amount}.</p>
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <input type="file" accept="application/pdf,.pdf" onChange={(e) => setFile(e.target.files?.[0] ?? null)} className="block max-w-full text-[11px]" />
          <button type="button" onClick={handleAttach} disabled={!file || uploading || sending}
            className="action-secondary disabled:opacity-40">
            {uploading ? "Anexando..." : "Anexar PDF"}
          </button>
          {attached && <span className="text-xs font-medium text-green-700">PDF anexado</span>}
        </div>
      </section>
      <section className="rounded-2xl border border-[#eae7f0] bg-[#fdfcff] p-5">
        <h3 className="font-semibold">2. Conferir e enviar por e-mail</h3>
        <p className="mt-1 text-xs text-ink-500">O e-mail usa o modelo roxo da Viva Conecta aprovado em setembro/2026.</p>
        <label className="mt-3 block text-xs text-ink-500">E-mail cadastrado
          <input type="email" readOnly value={clientEmail || "E-mail não cadastrado"} className="control mt-1 !bg-[#f7f5fa]" />
        </label>
        <label className="mt-3 block text-xs text-ink-500">Assunto
          <input value={subject} onChange={(e) => setSubject(e.target.value)} maxLength={160}
            className="control mt-1" />
        </label>
        <button type="button" onClick={handleSend} disabled={sending || uploading || !attached || !clientEmail || !subject.trim()}
          className="action-primary mt-4 disabled:opacity-40">
          {sending ? "Enviando..." : "Enviar e-mail com fatura"}
        </button>
        {!clientEmail && <p className="mt-2 text-xs text-red-700">O cliente precisa ter e-mail no cadastro.</p>}
        {feedback && <p role="status" className="mt-3 text-xs text-ink-700">{feedback}</p>}
      </section>
    </div>
  );
}
