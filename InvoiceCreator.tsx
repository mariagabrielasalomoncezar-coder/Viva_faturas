"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { DUE_GROUPS } from "@/lib/groups";

export default function InvoiceCreator({clientId,memberships,initialMonth}:{clientId:string;memberships:{group_key:string;due_day:number|null}[];initialMonth:string}){
  const router=useRouter(); const [month,setMonth]=useState(initialMonth);
  const [group,setGroup]=useState(memberships[0]?.group_key||"");
  const [date,setDate]=useState(()=>{const d=memberships[0]?.due_day; if(!d||!DUE_GROUPS.find(g=>g.key===memberships[0]?.group_key)?.days.some(day=>day===d))return "";const [y,m]=initialMonth.split("-").map(Number); if(!y||!m)return ""; return `${initialMonth}-${String(Math.min(d,new Date(y,m,0).getDate())).padStart(2,"0")}`;}); const [amount,setAmount]=useState(""); const [feedback,setFeedback]=useState("");const [busy,setBusy]=useState(false);
  function choose(groupKey:string, monthValue:string){
    setGroup(groupKey);setMonth(monthValue);
    const due=memberships.find(g=>g.group_key===groupKey)?.due_day;
    if(due && DUE_GROUPS.find(g=>g.key===groupKey)?.days.some(d=>d===due) && /^\d{4}-\d{2}$/.test(monthValue)){
      const [year,m]=monthValue.split("-").map(Number);
      const last=new Date(year,m,0).getDate();
      setDate(`${monthValue}-${String(Math.min(due,last)).padStart(2,"0")}`);
    } else setDate("");
  }
  async function submit(e:React.FormEvent){
    e.preventDefault(); if(!group||!month||!date)return;
    setBusy(true);setFeedback("");
    const value=amount.trim()?Number(amount.replace(",",".")):null;
    if(value!==null && (!Number.isFinite(value)||value<0)){setFeedback("Valor inválido.");setBusy(false);return;}
    const {data,error}=await createClient().from("invoices").insert({client_id:clientId,group_key:group,competence:`${month}-01`,due_date:date,amount:value,status:"aguardando_fatura"}).select("id").single();
    setBusy(false);if(error){setFeedback(error.message);return;}
    router.push(`/invoices/${data.id}`);router.refresh();
  }
  return <form onSubmit={submit} className="mt-4 flex flex-wrap items-end gap-3 text-sm">
    <label className="text-xs font-semibold">Grupo<select value={group} onChange={e=>choose(e.target.value,month)} className="control mt-1">{memberships.map(m=><option key={m.group_key} value={m.group_key}>{DUE_GROUPS.find(g=>g.key===m.group_key)?.days.join(" · ")}</option>)}</select></label>
    <label className="text-xs font-semibold">Mês da fatura<input required type="month" value={month} onChange={e=>choose(group,e.target.value)} className="control mt-1" /></label>
    <label className="text-xs font-semibold">Vencimento<input required type="date" value={date} onChange={e=>setDate(e.target.value)} className="control mt-1" /></label>
    <label className="text-xs font-semibold">Valor (opcional)<input type="text" inputMode="decimal" placeholder="0,00" value={amount} onChange={e=>setAmount(e.target.value)} className="control mt-1 !w-28" /></label>
    <button disabled={busy} className="action-primary disabled:opacity-50">{busy?"Criando...":"Criar fatura →"}</button>
    {feedback&&<p role="status" className="w-full text-xs text-red-700">{feedback}</p>}
  </form>;
}
