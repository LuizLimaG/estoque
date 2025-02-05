import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
        <main className="flex w-full">
          <SidebarTrigger />
          <div className="bg-black w-full text-white">
            <h1>
              teste de conteúdo
            </h1>
          </div>
        </main>
    </SidebarProvider>
  );
}
