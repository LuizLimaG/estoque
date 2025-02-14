export default function Login() {
  return (
    <div className="w-full h-full grid place-items-center font-poppins">
      <div className="w-[350px] h-[500px] flex flex-col items-center justify-evenly">
        <section className="w-full flex flex-col items-center">
          <div className="font-inter font-extrabold text-[40px] text-slate-800">Bem-vindo!</div>
          <div className="font-normal text-[14px] text-gray-700 text-center">
            Faça login para acessar a plataforma e ter acesso ao estoque.
          </div>
        </section>

        <section className="w-full flex flex-col gap-6 items-center">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <input
                type="text"
                placeholder="Digite seu email"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic"
                name="email"
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="senha">Senha</label>
                <span className="text-[13px] text-slate-600 cursor-pointer hover:underline">
                  Esqueci minha senha
                </span>
              </div>
              <input
                type="text"
                placeholder="Digite seu email"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-slate-800 placeholder:text-gray-300 placeholder:italic"
                name="email"
              />
            </div>
          </div>
          <div className="w-full px-2">
            <button className="block w-full bg-slate-800 text-white font-medium rounded-md py-2 hover:bg-slate-700 transition-all duration-200">
              Logar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
