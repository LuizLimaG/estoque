import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Sidebar, { SidebarItem } from "@/components/sidebar";
import { CrownSimple, House, Package, StackPlus } from "@phosphor-icons/react/dist/ssr";
import { AuthContextProvider } from "@/context/authProvider";
import { Metadata } from "next";
import ProtectedRoute from "@/components/ProtectedRoute"; 

export const metadata: Metadata = {
  title: "Estoque",
  description: "Estoque louco",
};

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased h-screen ${poppins.variable} ${inter.variable} bg-gray-200`}>
        <AuthContextProvider>
          <ProtectedRoute>
            <NextTopLoader height={5} color="#1E293B" showSpinner={false} />
            <Sidebar>
              <SidebarItem icon={<House size={24} />} text="Home" active link="/" />
              <SidebarItem icon={<Package size={24} />} text="Estoque" link="/stock" />
              <SidebarItem icon={<StackPlus size={24} />} text="Contagem" link="/stock/stockCount" />
              <hr />
              <SidebarItem icon={<CrownSimple size={24} weight="fill" />} text="Administração" link="/admin" />
            </Sidebar>
            {children}
          </ProtectedRoute>
        </AuthContextProvider>
      </body>
    </html>
  );
}
