import { SidebarDemo } from "@/components/code/SideBar";
import Header from "@/components/code/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header fixe */}
      <Header />
      
      {/* Contenu principal avec marge pour compenser le header fixe */}
      <main className="pt-16 sm:pt-20">
        <SidebarDemo />
      </main>
    </div>
  );
}