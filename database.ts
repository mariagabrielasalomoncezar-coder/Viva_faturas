export type InvoiceStatus =
  | "aguardando_fatura"
  | "anexada"
  | "enviada"
  | "a_vencer"
  | "vencida"
  | "paga"
  | "cancelada";

export const INVOICE_STATUS_LABEL: Record<InvoiceStatus, string> = {
  aguardando_fatura: "Aguardando fatura",
  anexada: "Anexada",
  enviada: "Enviada",
  a_vencer: "A vencer",
  vencida: "Vencida",
  paga: "Paga",
  cancelada: "Cancelada",
};

export type Client = {
  id: string;
  external_id: string | null;
  company_name: string;
  trade_name: string | null;
  cnpj: string;
  contact_name: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  consultant: string | null;
  due_day: number | null;
  status: "ativo" | "inativo";
  notes: string | null;
  created_at: string;
};

export type Invoice = {
  id: string;
  client_id: string;
  competence: string;
  due_date: string;
  amount: number;
  external_ref: string | null;
  file_path: string | null;
  status: InvoiceStatus;
  paid_at: string | null;
  notes: string | null;
  created_at: string;
  // presente quando a fatura vem de um join com clients
  clients?: Pick<Client, "company_name" | "cnpj" | "email">;
};
