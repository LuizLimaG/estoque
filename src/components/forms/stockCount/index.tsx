import { addProduct } from "@/data/firebase/firebaseController";

export function StockCountForm() {
    return (
        <form 
            className="w-3/6 flex flex-col items-center gap-2"
            action={addProduct}
          >
            <div className="w-full flex flex-wrap justify-center gap-2">
              <input
                type="text"
                name="productName"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Produto"
              />
              <input
                type="text"
                name="productCategory"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Categoria"
              />
              <input
                type="text"
                name="productQuantity"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Quantidade"
              />
              <input
                type="text"
                name="productMeasure"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Medida"
              />
              <input
                type="text"
                name="productMinimumStock"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Estoque Mínimo"
              />
              <input
                type="text"
                name="productMaximumStock"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Estoque Máximo"
              />
              <input
                type="text"
                name="productShopping"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Compras"
              />
              <input
                type="date"
                name="productCountDate"
                className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
                placeholder="Data da Contagem"
              />
            </div>
            <div>
              <button className="text-black py-2 px-4 bg-white rounded-md">
                Enviar
              </button>
            </div>
          </form>
    )
}