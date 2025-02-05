import { CaretUp, ChartBar, Gear, House, SignOut, Stack, StackPlus, User } from "@phosphor-icons/react/dist/ssr";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function AppSidebar() {
  const items = [
    {
      title: "Página Inicial",
      url: "/",
      icon: House,
    },
    {
      title: "Realizar Contagem",
      url: "/",
      icon: StackPlus,
    },
    {
      title: "Estoque",
      url: "/",
      icon: Stack,
    },
    {
      title: "Consumo",
      url: "/",
      icon: ChartBar,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} >
                    <item.icon size={32} weight="bold" />
                    <span className="font-normal">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User size={20} weight="bold" /> <span className="font-medium">Username</span>
                  <CaretUp size={20} weight="bold" className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={"/profile"} className="w-full flex items-center gap-2 font-medium">
                  <User size={20} weight="bold" />
                    Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href={"/settings"} className="w-full flex items-center gap-2 font-medium">
                  <Gear size={20} weight="bold" />
                    Configurações
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <span className="w-full flex items-center gap-2 text-red-500 font-medium">
                    <SignOut size={20} weight="bold" />
                    Sair
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
