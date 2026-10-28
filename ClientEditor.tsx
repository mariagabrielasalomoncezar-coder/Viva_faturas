"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ClientEditor({client}:{client:{id:string;email:string|null;whatsapp:string|null;phone:string|null;contact_name:string|null}}){
  const router=useRouter();
  const [email,setEmail]=useState(client.email||""); const [whatsapp,setWhatsapp]=useState(client.whatsapp||"");
  const [phone,setPhone]=useState(client.phone||""); const [name,setName]=useState(client.contact_name||"");
  const [status,setStatus]=useState(""); const [busy,setBusy]=useState(false);
  async function save(e:React.FormEvent){
    e.preventDefault();setStatus("");
    if(email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setStatus("E-mail inválido.");return;}
    setBusy(true);
    const {error}=await createClient().from("clients").update({email:email.trim()||null,whatsapp:whatsapp.replace(/\D/g,"")||null,phone:phone.trim()||null,contact_name:name.trim()||null}).eq("id",client.id);
    setBusy(false);setStatus(error?`Não foi possível salvar: ${error.message}`:"Contato atualizado.");if(!error)router.refresh();
  }
  return <form onSubmit={save} className="mt-4 space-y-3 text-sm">
    <label className="block text-xs font-semibold">Nome de contato<input value={name} onChange={e=>setName(e.target.value)} className="control mt-1" placeholder="Nome para personalizar o WhatsApp" /></label>
    <label className="block text-xs font-semibold">E-mail para envio<input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="control mt-1" placeholder="financeiro@cliente.com.br" /></label>
    <label className="block text-xs font-semibold">WhatsApp (DDD + número)<input value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} className="control mt-1" placeholder="11999999999" /></label>
    <label className="block text-xs font-semibold">Telefone<input value={phone} onChange={e=>setPhone(e.target.value)} className="control mt-1" /></label>
    <button disabled={busy} className="action-primary disabled:opacity-50">{busy?"Salvando...":"Salvar contatos"}</button>{status&&<p role="status" className="text-xs text-ink-700">{status}</p>}
  </form>;
}
