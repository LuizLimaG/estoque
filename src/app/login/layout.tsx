import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { AuthContextProvider } from "@/context/authProvider";
import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: 'Login - Estoque',
  description: 'Página de login do sistema de estoque'
}

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

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased h-screen ${poppins.variable} ${inter.variable} bg-gray-200`}>
        <AuthContextProvider>
          <NextTopLoader
            height={5}
            color="#1E293B"
            showSpinner={false}
          />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}