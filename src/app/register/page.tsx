import Link from "next/link";

export default function Register() {
  return (
    <div className="w-2/6 h-3/6 shadow-shadow rounded-3xl p-4 px-5 flex flex-col justify-between bg-white">
      <section>
        <h1 className="font-bold text-[30px] text-amber-600">
            Cadastro
        </h1>
      </section>
      <section className="w-full flex flex-col gap-2 ">
        <input
          type="text"
          className="w-full border-2 rounded-lg bg-white p-2 focus:border-amber-600 hover:border-amber-600 duration-150 transition-all"
          placeholder="Digite o seu nome:"
        />

        <input
          type="text"
          className="w-full border-2 rounded-lg bg-white p-2 focus:border-amber-600 hover:border-amber-600 duration-150 transition-all"
          placeholder="Digite o seu e-mail:"
        />

        <input
          type="text"
          className="w-full border-2 rounded-lg bg-white p-2 focus:border-amber-600 hover:border-amber-600 duration-150 transition-all"
          placeholder="Digite a sua senha:"
        />

        <input
          type="text"
          className="w-full border-2 rounded-lg bg-white p-2 focus:border-amber-600 hover:border-amber-600 duration-150 transition-all"
          placeholder="Confirme a sua senha:"
        />

        <h3 className="text-[12px]">Já possui login? <Link href={'/login'} className="text-amber-600 underline cursor-pointer hover:text-amber-500">Login</Link></h3>

      </section>
      <section className="grid place-items-center">
        <button className="bg-amber-600 rounded-md px-7 py-2 text-[18px] text-white font-medium hover:bg-amber-500 transition-all duration-300">
            Cadastrar
        </button>
      </section>
    </div>
  );
}
