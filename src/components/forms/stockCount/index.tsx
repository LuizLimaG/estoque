"use client";
import { addProduct } from "@/data/firebase/firebaseController";
import { Input } from "../../input";
import { Button } from "@/components/button";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/data/firebase/firebaseConfig";

interface ProductCategory {
  id: string;
  categoryName: string;
}

export function StockCountForm() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, "ConfiguracoesProdutos");
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const categoriesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        categoryName: doc.data().categoria,
      }));
      setCategories(categoriesList);
      return () => unsubscribe();
    });
  });

  const inputItems = [
    {
      name: "productName",
      type: "text",
      placeholder: "Digite o produto:",
    },
    {
      name: "productQuantity",
      type: "text",
      placeholder: "Digite a quantidade:",
    },
    {
      name: "productMeasure",
      type: "text",
      placeholder: "Digite a medida:",
    },
    {
      name: "productMinimumStock",
      type: "text",
      placeholder: "Digite o estoque mínimo:",
    },
    {
      name: "productMaximumStock",
      type: "text",
      placeholder: "Digite o estoque máximo:",
    },
    {
      name: "productShopping",
      type: "text",
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
      className="w-full flex flex-col items-center gap-2 py-8"
      action={addProduct}
    >
      <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-5">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {inputItems.map((item, index) => (
            <Input key={index} {...item} />
          ))}
          <select
            defaultValue={"DEFAULT"}
            className="border-2 border-gray-200 shadow-inputShadow p-2 w-[400px] rounded-sm focus:border-slate-700 outline-none"
          >
            <option value="DEFAULT" disabled hidden>
              Selecione uma categoria
            </option>
            {categories.map((item, index) => (
              <option key={index} defaultValue={item.categoryName}>
                {item.categoryName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button title="Adicionar Produto" />
        </div>
      </div>
    </form>
  );
}
