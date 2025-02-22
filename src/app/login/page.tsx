"use client";
import { useFirebaseError } from "@/components/firebaseErrors";
import { SignIn } from "@/data/auth/signIn";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const { handleFirebaseError } = useFirebaseError();

  const handleForm = async () => {
    setLoading(true);
    const { result, error } = await SignIn(`${user}@hotntender.com`, password);
    if (error) {
      const errorInfo = handleFirebaseError(error);
      setError(errorInfo.message);
    } else {
      redirect("/");
    }
    setLoading(false);
  };

  function switchEyesPsswd() {
    if (!eye) {
      setEye(true);
    } else {
      setEye(false);
    }
  }

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
              <div className="relative">
                <input
                  type={`${eye ? "text" : "password"}`}
                  placeholder="Senha"
                  className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {eye ? (
                  <Eye
                    onClick={switchEyesPsswd}
                    className="cursor-pointer absolute right-4 -translate-y-8 size-5"
                  />
                ) : (
                  <EyeSlash
                    onClick={switchEyesPsswd}
                    className="cursor-pointer absolute right-4 -translate-y-8 size-5"
                  />
                )}
              </div>
            </div>
          </div>
          {error && (
            <div className="bg-red-200 p-4 rounded-md">
              <h1 className="text-red-600 font-bold">{error}</h1>
            </div>
          )}
          <div className="w-full px-2">
            <button
              onClick={handleForm}
              tabIndex={0}
              className={`block w-full bg-slate-800 text-white font-medium rounded-md py-2 hover:bg-slate-700 transition-all duration-200
                ${loading ? "cursor-not-allowed opacity-50" : ""}`}
              disabled={loading}
            >
              {loading ? (
                <SpinnerGap size={24} className="animate-spin mx-auto" />
              ) : (
                "Logar"
              )}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
