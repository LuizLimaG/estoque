export default function Login() {
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="w-[350px] h-[500px] flex flex-col items-center justify-evenly">
        <section className="w-full flex flex-col items-center">
          <div>{/* icon */}</div>
          <div className="font-bold text-[35px]">Bem-vindo!</div>
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
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-amber-600 placeholder:text-gray-300 placeholder:italic"
                name="email"
              />
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label htmlFor="senha">Senha</label>
                <span className="text-[13px] text-amber-600 cursor-pointer hover:underline">
                  Esqueci minha senha
                </span>
              </div>
              <input
                type="text"
                placeholder="Digite seu email"
                className="w-full rounded-md border-[2px] border-gray-200 px-2 py-2 focus:border-amber-600 placeholder:text-gray-300 placeholder:italic"
                name="email"
              />
            </div>
          </div>
          <div className="w-full px-2">
            <button className="block w-full bg-amber-600 text-white font-medium rounded-md py-2">
              Logar
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
