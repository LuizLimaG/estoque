import { Gear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function StockCount() {
  return (
    <main className="flex flex-col gap-4 px-6 py-10 w-full h-full">
      <section className="w-full flex items-center justify-between px-4">
        <div>
          <h1 className="font-black text-[30px] text-amber-600">
            Contagem de Estoque
          </h1>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Link href={'/stock'} className="text-black font-medium cursor-pointer hover:underline hover:text-amber-500 transition-all duration-200">
            Ver Estoque
          </Link>
          <button className="flex items-center justify-center gap-2 text-white bg-amber-600 px-2 py-1 rounded-lg hover:bg-amber-500 transition-all duration-200">
            <Gear size={20} weight="fill" />
            Definições da Contagem
          </button>
        </div>
      </section>

      <section className="bg-blue-300 w-full h-full">
        <div className="bg-red-300 w-full h-full rounded-md"></div>
      </section>
    </main>
  );
}
