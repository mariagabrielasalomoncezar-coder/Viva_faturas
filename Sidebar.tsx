"use client";
import Link from "next/link";
import {usePathname,useRouter} from "next/navigation";
import {useState} from "react";
import {createClient} from "@/lib/supabase/client";
import AppIcon from "./AppIcon";

const groups=[
 {href:"/vencimentos/03-05-08",label:"03, 05 e 08",code:"01"},
 {href:"/vencimentos/10-13-15-17",label:"10, 13, 15 e 17",code:"02"},
 {href:"/vencimentos/21-25-28",label:"21, 25 e 28",code:"03"},
];
export default function Sidebar({userEmail}:{userEmail:string}){
 const pathname=usePathname();const router=useRouter();const [open,setOpen]=useState(false);
 const userLabel=userEmail?.split("@")[0]?.replace(/[._-]/g," ")||"Equipe financeira";
 const initial=userLabel.split(" ").filter(Boolean).slice(0,2).map(s=>s[0]?.toUpperCase()||"").join("")||"VC";
 async function logout(){await createClient().auth.signOut();router.push("/login");router.refresh()}
 const close=()=>setOpen(false);
 function link(href:string,label:string,icon:"dashboard"|"users"|"file"|"upload",extra=""){
  const selected=pathname===href||(href!=="/dashboard"&&pathname.startsWith(href+"/"));
  return <Link key={href} onClick={close} href={href} aria-current={selected?"page":undefined} className={`side-link ${selected?"side-link-active":""} ${extra}`}><AppIcon name={icon} size={18}/><span>{label}</span>{selected&&<span className="side-link-dot"/>}</Link>;
 }
 return <>
  <header className="mobile-topbar"><Link href="/dashboard" className="mobile-brand"><span className="brand-mark">V</span><span>VIVA <b>CONECTA</b></span></Link><button type="button" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-label={open?"Fechar navegação":"Abrir navegação"} className="mobile-menu"><AppIcon name="menu"/></button></header>
  {open&&<button type="button" className="mobile-backdrop" aria-label="Fechar menu" onClick={close}/>}
  <aside className={`sidebar-shell ${open?"sidebar-open":""}`}>
   <div className="sidebar-main">
    <Link href="/dashboard" onClick={close} className="sidebar-logo"><span className="brand-mark">V</span><span className="sidebar-brand-copy"><strong>VIVA CONECTA</strong><small>CENTRAL FINANCEIRA</small></span></Link>
    <div className="sidebar-brand-divider"/>
    <div className="sidebar-workspace"><span className="workspace-icon"><AppIcon name="briefcase" size={17}/></span><div><strong>Área de faturamento</strong><small>Ambiente independente</small></div><span className="workspace-indicator"/></div>
    <p className="side-section-label">VISÃO GERAL</p>
    <nav className="side-nav" aria-label="Navegação principal">{link("/dashboard","Dashboard","dashboard")}</nav>
    <p className="side-section-label side-section-spaced">CARTEIRAS POR VENCIMENTO</p>
    <nav className="side-nav" aria-label="Carteiras de vencimento">{groups.map(g=>{
     const active=pathname===g.href||pathname.startsWith(g.href+"/");
     return <Link key={g.href} onClick={close} href={g.href} aria-current={active?"page":undefined} className={`side-link side-group-link ${active?"side-link-active":""}`}><span className="nav-group-number">{g.code}</span><span>Dias {g.label}</span>{active&&<span className="side-link-dot"/>}</Link>
    })}</nav>
    <p className="side-section-label side-section-spaced">GERENCIAMENTO</p>
    <nav className="side-nav" aria-label="Gerenciamento">{link("/clients","Todos os clientes","users")}{link("/invoices","Faturas e anexos","file")}{link("/importacao","Importar cadastros","upload")}</nav>
    <div className="sidebar-help"><span className="sidebar-help-icon"><AppIcon name="shield" size={18}/></span><p>Controle com segurança</p><small>Os envios só acontecem após sua confirmação. WhatsApp permanece manual.</small></div>
   </div>
   <div className="sidebar-footer"><div className="sidebar-user"><div className="sidebar-avatar">{initial}</div><div className="sidebar-user-info" title={userEmail}><strong className="truncate">{userLabel}</strong><span className="truncate">{userEmail||"Viva Conecta"}</span></div></div><button type="button" onClick={logout} className="sidebar-logout"><AppIcon name="logout" size={17}/> Encerrar sessão</button></div>
  </aside>
 </>;
}
