import { addProduct } from "@/data/firebase/firebaseController";
import { Input } from "../input";

export function StockCountForm() {
  const inputItems = [
    {
      name: "productName",
      type: "text",
      placeholder: "Digite o produto:",
    },
    {
      name: "productCategory",
      type: "text",
      placeholder: "Digite a categoria:",
    },
    {
      name: "productQuantity",
      type: "number",
      placeholder: "Digite a quantidade:",
    },
    {
      name: "productMeasure",
      type: "text",
      placeholder: "Digite a medida:",
    },
    {
      name: "productMinimumStock",
      type: "number",
      placeholder: "Digite o estoque mínimo:",
    },
    {
      name: "productMaximumStock",
      type: "number",
      placeholder: "Digite o estoque máximo:",
    },
    {
      name: "productShopping",
      type: "number",
      placeholder: "Digite a quantidade de compras:",
    },
    {
      name: "productCountDate",
      type: "date",
      placeholder: "Digite a data da contagem:",
    },
  ];

  return (
    <form
      className="w-3/6 flex flex-col items-center gap-2 py-8"
      action={addProduct}
    >
      <div className="w-full flex flex-wrap justify-center gap-2">
        {inputItems.map((item, index) => (
          <Input key={index} {...item} />
        ))}
      <div>
        <button className="text-black py-2 px-4 bg-white rounded-md">
          Enviar
        </button>
      </div>
      </div>
    </form>
  );
}
