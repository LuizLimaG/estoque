"use client";

import app from "@/data/firebase/firebaseConfig";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const auth = getAuth(app);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [userAuth, setUserAuth] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (authUserCredentials: User | null) => {
        setUserAuth(authUserCredentials);
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  async function logout() {
    let result = null;
    let error = null;

    try {
      result = await signOut(auth);
    } catch (e) {
      error = e;
    }

    return {
      result,
      error,
    };
  }

  return (
    <AuthContext.Provider value={{ userAuth, logout }}>
      {loading ? (
        <div className="flex items-center justify-center w-full">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-r-slate-800 border-justPurple" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
