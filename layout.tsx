import Sidebar from "@/components/Sidebar";
import AppIcon from "@/components/AppIcon";
import {createClient} from "@/lib/supabase/server";
export default async function MainLayout({children}:{children:React.ReactNode}){
 const {data:{user}}=await createClient().auth.getUser();
 return <div className="app-shell"><Sidebar userEmail={user?.email||""}/><div className="app-content">
  <div className="top-strip"><div className="top-breadcrumb"><span className="top-crumb-icon"><AppIcon name="dashboard" size={17}/></span> Viva Conecta <span className="breadcrumb-chevron">/</span> Gestão financeira</div><div className="top-status"><span className="pulse-dot"/> Ambiente privado <span className="top-status-separator"/><AppIcon name="shield" size={16}/><span>Central de Faturamento</span></div></div>
  <main className="app-main">{children}</main>
 </div></div>;
}
