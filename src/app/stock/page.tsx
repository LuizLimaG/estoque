import { StackPlus } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Stock() {
  return (
    <main className="flex flex-col gap-4 px-6 py-10 w-full h-full">
      <section className="w-full flex items-center justify-between px-4">
        <div>
          <h1 className="font-black text-[30px] text-amber-600">Estoque</h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-black font-medium cursor-pointer hover:underline hover:text-amber-500 transition-all duration-200">
            Definições da Contagem
          </span>
          <Link
            href={"/stock/stockCount"}
            className="flex items-center justify-center gap-1 text-white bg-amber-600 px-2 py-1 rounded-lg hover:bg-amber-500 transition-all duration-200"
          >
            <StackPlus size={20} />
            Realizar Contagem
          </Link>
        </div>
      </section>

      <section className="bg-blue-300 w-full h-full">
        <div className="bg-red-300 w-full h-full rounded-md"></div>
      </section>
    </main>
  );
}
