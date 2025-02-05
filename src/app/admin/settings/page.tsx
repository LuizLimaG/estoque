import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Link from "next/link";

export default function AdminSettings() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <SidebarTrigger />
        <div className="bg-black w-full text-white">
          
            <section>
                <aside></aside>
                <aside>
                    <Link href="/register" className="bg-amber-600">
                        Cadastrar usuário
                    </Link>
                </aside>
            </section>
          
        </div>
      </main>
    </SidebarProvider>
  );
}
