"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { DUE_GROUPS } from "@/lib/groups";

export default function GroupDueEditor({clientId,groups}:{clientId:string;groups:{group_key:string;due_day:number|null;review_reason:string|null}[]}){
  const router=useRouter();
  const [admin,setAdmin]=useState(false);
  const [selection,setSelection]=useState<Record<string,string>>(()=>Object.fromEntries(groups.map(x=>[x.group_key,String(x.due_day||"")])));
  const [feedback,setFeedback]=useState("");const [busy,setBusy]=useState(false);
  useEffect(()=>{(async()=>{
    const sb=createClient();const {data:{user}}=await sb.auth.getUser();if(!user)return;
    const {data:profile}=await sb.from("profiles").select("role").eq("id",user.id).maybeSingle();
    setAdmin(profile?.role==="admin");
  })();},[]);
  if(!admin||!groups.length)return null;
  async function save(groupKey:string){
    const days=DUE_GROUPS.find(g=>g.key===groupKey)?.days||[];
    const day=Number(selection[groupKey]);
    if(!days.some(x=>x===day)){setFeedback("Escolha um dia válido do grupo.");return;}
    setBusy(true);setFeedback("");
    const {error}=await createClient().from("client_groups").update({due_day:day,review_reason:null}).eq("client_id",clientId).eq("group_key",groupKey);
    setBusy(false);setFeedback(error?`Não foi possível salvar: ${error.message}`:"Vencimento confirmado.");if(!error)router.refresh();
  }
  return <div className="mt-5 border-t pt-4"><h3 className="text-sm font-bold">Conferir dia de vencimento (administrador)</h3>
    {groups.map(g=>{const group=DUE_GROUPS.find(x=>x.key===g.group_key);return <div key={g.group_key} className="mt-3 flex items-center gap-2 text-xs"><span className="min-w-16">{group?.days.join("/")}</span><select className="min-w-0 flex-1 rounded-lg border p-2" value={selection[g.group_key]||""} onChange={e=>setSelection(v=>({...v,[g.group_key]:e.target.value}))}><option value="">A conferir</option>{group?.days.map(d=><option key={d} value={d}>Dia {d}</option>)}</select><button disabled={busy||!selection[g.group_key]} onClick={()=>save(g.group_key)} className="rounded-lg bg-brand-600 px-3 py-2 font-semibold text-white disabled:opacity-40">Salvar</button></div>;})}
    {feedback&&<p role="status" className="mt-2 text-xs">{feedback}</p>}
  </div>;
}
