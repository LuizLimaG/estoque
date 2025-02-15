"use client";

import { SignUp } from "@/data/auth/signUp";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function RegisterCollaborator() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = async () => {
    const { result, error } = await SignUp(`${user}@hotntender.com`, password);
    if (error) {
      throw new Error(`${error}`);
    } else {
      redirect("/admin");
    }
  };

  return (
    <div className="w-full h-full grid place-items-center font-poppins">
      <div className="w-4/6 lg:w-2/6 h-[500px] flex flex-col items-center justify-evenly">
        <section className="w-full flex flex-col items-center">
          <div className="font-inter font-extrabold text-[40px] text-slate-800 text-center">
            Cadastrar colaborador
          </div>
          <div className="font-normal text-[14px] text-gray-700 text-center">
            Cadastre um colaborador para acessar o sistema.
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
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic outline-none"
                name="user"
                autoComplete="off"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="w-full">
              <div>
                <label htmlFor="password">Senha</label>
              </div>
              <input
                type="text"
                placeholder="Senha"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic outline-none"
                name="password"
                autoComplete="off"
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
