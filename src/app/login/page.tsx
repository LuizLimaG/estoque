"use client";

import { SignIn } from "@/data/auth/signIn";
import { FirebaseError } from "firebase/app";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    const { result, error } = await SignIn(`${user}@hotntender.com`, password);
    if (error) {
      const firebaseError = error as FirebaseError;
      if (firebaseError.message) {
        throw new Error(firebaseError.message);
      } else {
        throw new Error("Erro desconhecido");
      }
    } else {
      console.log(result)
      redirect("/");
    }
  };

  return (
    <div className="w-full h-full grid place-items-center font-poppins">
      <div className="w-[350px] h-[500px] flex flex-col items-center justify-evenly">
        <section className="w-full flex flex-col items-center">
          <div className="font-inter font-extrabold text-[40px] text-slate-800">
            Bem-vindo!
          </div>
          <div className="font-normal text-[14px] text-gray-700 text-center">
            Faça login para acessar a plataforma e ter acesso ao estoque.
          </div>
        </section>

        <section className="w-full flex flex-col gap-6 items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full">
              <div>
                <label htmlFor="user">Usuário</label>
              </div>
              <input
                type="text"
                placeholder="Usuário"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic"
                name="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="password">Senha</label>
              </div>
              <input
                type="text"
                placeholder="Senha"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full px-2">
            <button
              onClick={handleForm}
              className="block w-full bg-slate-800 text-white font-medium rounded-md py-2 hover:bg-slate-700 transition-all duration-200"
            >
              Logar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
