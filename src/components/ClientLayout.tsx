"use client";

import { usePathname } from "next/navigation";
import Sidebar, { SidebarItem } from "@/components/sidebar";
import { CrownSimple, House, Package, StackPlus } from "@phosphor-icons/react";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showSidebar = pathname !== "/login"; 

  return (
    <div className="flex min-h-screen">
      {showSidebar && (
        <Sidebar>
          <SidebarItem icon={<House size={24} />} text="Home" active link="/" />
          <SidebarItem icon={<Package size={24} />} text="Estoque" link="/stock" />
          <SidebarItem icon={<StackPlus size={24} />} text="Contagem" link="/stock/stockCount" />
          <hr />
          <SidebarItem icon={<CrownSimple size={24} weight="fill" />} text="Administração" link="/admin" />
        </Sidebar>
      )}
      <main className="flex-1">{children}</main>
    </div>
  );
}
