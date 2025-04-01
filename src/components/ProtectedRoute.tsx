"use client";

import { useContext, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthContext } from "@/context/authContext";
import { LoadingComponent } from "./loading";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <LoadingComponent/>
    );
  }

  return <>{children}</>;
}
