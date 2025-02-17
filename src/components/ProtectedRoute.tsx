"use client";

import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "@/context/authContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { userAuth } = useContext(AuthContext);
  const router = useRouter();
  const pathname = usePathname();

  const publicRoutes = ["/login"];

  useEffect(() => {
    if (!userAuth && !publicRoutes.includes(pathname)) {
      router.push("/login"); 
    }
  }, [userAuth, pathname, router]);

  if (userAuth === undefined) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-r-slate-800" />
      </div>
    );
  }

  return <>{children}</>;
}
