"use client";
import { addProduct, ProductData } from "@/data/firebase/firebaseController";
import { Input } from "../../input";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/data/firebase/firebaseConfig";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";

interface ProductCategory {
  id: string;
  categoryName: string;
}

export function StockCountForm() {

  const initialFormState = {
    productName: "",
    quantity: "",
    measure: "",
    maximumStock: "",
    minimumStock: "",
    countDate: "",
    category: "",
  };

  const [formData, setFormData] = useState<ProductData>(initialFormState);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const validateForm = () => {
    for (const [key, value] of Object.entries(formData)) {
      if (!value || value.trim() === "") {
        setError(`O campo ${key} é obrigatório`);
        return false;
      }
    }
    return true;
  };

  const handleAddProduct = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);
    try {
      await addProduct(formData);
      setFormData(initialFormState);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const collectionRef = collection(db, "StockSettings");
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const categoriesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        categoryName: doc.data().category,
      }));
      setCategories(categoriesList);
      return () => unsubscribe();
    });
  });

  const inputItems = [
    {
      name: "countDate",
      type: "date",
      placeholder: "Selecione a data da contagem:",
      inputValue: formData.countDate,
    },
    {
      name: "productName",
      type: "text",
      placeholder: "Digite o produto:",
      inputValue: formData.productName,
    },
    {
      name: "quantity",
      type: "text",
      placeholder: "Digite a quantidade:",
      inputValue: formData.quantity,
    },
    {
      name: "measure",
      type: "text",
      placeholder: "Digite a medida:",
      inputValue: formData.measure,
    },
    {
      name: "minimumStock",
      type: "text",
      placeholder: "Digite o estoque mínimo:",
      inputValue: formData.minimumStock,
    },
    {
      name: "maximumStock",
      type: "text",
      placeholder: "Digite o estoque máximo:",
      inputValue: formData.maximumStock,
    },
  ];

  return (
    <div className="w-full md:w-6/6 flex flex-col items-center gap-2 md:py-8 mx-auto">
      <div className="w-full h-full flex flex-col items-center justify-center p-4 gap-5">
        <div className="flex flex-wrap items-center justify-start gap-4 ">
          {inputItems.map((item, index) => (
            <Input key={index} {...item} onchange={handleInputChange} />
          ))}
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-[400px] border-2 border-gray-200 shadow-inputShadow p-2 rounded-sm focus:border-slate-700 outline-none"
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>
            {categories.map((item) => (
              <option key={item.id} value={item.categoryName}>
                {item.categoryName}
              </option>
            ))}
          </select>
        </div>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}
        <div>
          <button
            className={`font-medium text-white text-[15px] px-16 bg-slate-800 rounded-md py-2 hover:bg-slate-700 transition-all duration-200
              ${isLoading ? "cursor-not-allowed opacity-50 px-20" : ""}`}
            onClick={handleAddProduct}
            disabled={isLoading}
          >
            {isLoading ? (
              <SpinnerGap size={24} className="animate-spin" />
            ) : (
              "Registrar"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
