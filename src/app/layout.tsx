"use client";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Sidebar, { SidebarItem } from "@/components/sidebar";
import { CrownSimple, House, Package, StackPlus, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const routesWithoutSidebar = ["/login"];
  const shouldShowSidebar = !routesWithoutSidebar.includes(pathname);

  return (
    <html lang="pt-br">
      <body
        className={`antialiased h-screen ${poppins.variable} ${inter.variable}  bg-gray-200`}
      >
        <NextTopLoader
          height={5}
          color="#1E293B"
          showSpinner={false}
        ></NextTopLoader>
        {shouldShowSidebar && (
          <Sidebar>
            <SidebarItem
              icon={<House size={24} />}
              text={"Home"}
              active
              alert={false}
              link={"/"}
            />
            <SidebarItem
              icon={<Package size={24} />}
              text={"Estoque"}
              alert={false}
              link={"/stock"}
            />
            <SidebarItem
              icon={<StackPlus size={24} />}
              text={"Contagem"}
              alert={false}
              link={"/stock/stockCount"}
            />
            <hr />
            <SidebarItem
              icon={<CrownSimple size={24} weight="fill" />}
              text={"Administração"}
              alert={false}
              link={"/admin"}
            />
          </Sidebar>
        )}
        {children}
      </body>
    </html>
  );
}
