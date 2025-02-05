import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Gear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AdminPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full">
        <SidebarTrigger />
        <div className="w-full text-white p-5">
          
            <section className="w-full flex items-center justify-between px-10">
                <aside className="w-full">

                </aside>
                <aside className="w-full flex items-center justify-end">
                    <Link href="/admin/settings" className="flex items-center gap-3 px-3 py-1 rounded-lg cursor-pointer bg-amber-600 hover:bg-amber-500 transition-all duration-200">
                        <Gear size={20} weight="fill"/>
                        Ir para configurações
                    </Link>
                </aside>
            </section>

        </div>
      </main>
    </SidebarProvider>
  );
}
