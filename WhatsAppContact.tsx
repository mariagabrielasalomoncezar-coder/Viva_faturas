"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const templates={
  fatura: "💜 *VIVA CONECTA | FATURA DISPONÍVEL*\n\nOlá, *[NOME]*! Tudo bem?\n\nSua fatura Vivo Empresas já foi encaminhada ao e-mail cadastrado. 📩\n\n📎 Se preferir, podemos enviar a fatura por aqui.\n\n*Viva Conecta | Departamento Financeiro*",
  cobranca: "💜 *VIVA CONECTA | AVISO FINANCEIRO*\n\nOlá, *[NOME]*!\n\nIdentificamos pendências financeiras associadas à sua conta, referentes aos últimos vencimentos.\n\n📎 Se preferir, posso te enviar as faturas por aqui mesmo.\n\nPara evitar possíveis interrupções nos serviços, pedimos que verifique os valores pendentes.\n\n✅ *Já realizou o pagamento?* Desconsidere este aviso e, se possível, nos encaminhe o comprovante.\n\nPrecisa de ajuda? Nossa equipe está à disposição!\n\n*Viva Conecta | Departamento Financeiro*"
};
export default function WhatsAppContact({clientId,groupKey,month,phone,name}:{clientId:string;groupKey:string;month:string;phone:string|null;name:string}){
  const router=useRouter();const [kind,setKind]=useState<"fatura"|"cobranca">("cobranca");
  const [message,setMessage]=useState(templates.cobranca.replaceAll("[NOME]",name));
  const [status,setStatus]=useState("");
  const digits=(phone||"").replace(/\D/g,"");
  const waNumber=digits.startsWith("55")?digits:`55${digits}`;
  const validPhone=digits.length>=10&&digits.length<=13;
  async function confirmSent(){
    if(!window.confirm("Você já encaminhou a mensagem pelo WhatsApp? Marcar como enviado somente depois de enviar."))return;
    const {error}=await createClient().from("monthly_sends").upsert({client_id:clientId,group_key:groupKey,competence:`${month}-01`,whatsapp_sent_at:new Date().toISOString()},{onConflict:"client_id,group_key,competence"});
    setStatus(error?`Erro: ${error.message}`:"WhatsApp marcado como enviado manualmente.");if(!error)router.refresh();
  }
  return <div className="space-y-3 text-sm">
    <h3 className="font-bold">WhatsApp opcional (envio manual)</h3>
    <label className="block text-xs font-semibold">Modelo<select className="control mt-1" value={kind} onChange={e=>{const k=e.target.value as "fatura"|"cobranca";setKind(k);setMessage(templates[k].replaceAll("[NOME]",name));}}><option value="cobranca">Aviso de cobrança</option><option value="fatura">Fatura disponível</option></select></label>
    <textarea rows={9} value={message} onChange={e=>setMessage(e.target.value)} className="control min-h-[160px] resize-y"/>
    <div className="flex flex-wrap gap-2"><a href={validPhone?`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`:"#"} target="_blank" rel="noopener noreferrer" onClick={e=>{if(!validPhone)e.preventDefault();}} className={`rounded-lg px-4 py-2 text-xs font-bold text-white ${validPhone?'bg-green-600':'cursor-not-allowed bg-ink-300'}`}>Abrir WhatsApp com mensagem</a><button disabled={!validPhone} onClick={confirmSent} className="rounded-lg border px-3 py-2 text-xs font-bold disabled:opacity-40">Marcar envio manual</button></div>
    {!validPhone&&<p className="text-xs text-amber-700">Cadastre um WhatsApp com DDD antes de abrir a mensagem.</p>}
    <p className="text-xs text-ink-500">A mensagem é apenas pré-preenchida. O PDF deve ser anexado manualmente no WhatsApp. Não marque como enviado sem concluir a conversa.</p>{status&&<p role="status" className="text-xs">{status}</p>}
  </div>;
}
