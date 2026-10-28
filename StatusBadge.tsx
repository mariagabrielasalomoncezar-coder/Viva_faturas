import { INVOICE_STATUS_LABEL, InvoiceStatus } from "@/types/database";

const STATUS_STYLE: Record<InvoiceStatus, string> = {
  aguardando_fatura: "bg-ink-100 text-ink-700",
  anexada: "bg-brand-100 text-brand-700",
  enviada: "bg-blue-100 text-blue-700",
  a_vencer: "bg-brand-100 text-brand-700",
  vencida: "bg-red-100 text-red-700",
  paga: "bg-emerald-100 text-emerald-700",
  cancelada: "bg-ink-100 text-ink-500",
};

export default function StatusBadge({ status }: { status: InvoiceStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLE[status]}`}
    >
      {INVOICE_STATUS_LABEL[status]}
    </span>
  );
}
