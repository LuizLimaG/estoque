"use client";
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr";
import { addCategory } from "../../../data/firebase/firebaseController";
import { useState } from "react";

export function RegisterCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = async () => {
    if (categoryName.trim() === "") {
      return;
    }
    setIsLoading(true);
    try {
      await addCategory(categoryName);
      setCategoryName("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-4 gap-5">
      <input
        className=" w-full md:w-[400px] border-2 border-gray-200 shadow-inputShadow p-2 rounded-sm focus:border-slate-700 outline-none"
        name="registerCategory"
        placeholder="Registrar Categoria"
        autoComplete="off"
        type="text"
        value={categoryName}
        onChange={handleInputChange}
      />
      <div>
        <button
          className={`
            font-medium text-white text-[15px] px-16 bg-slate-800 rounded-md py-2 hover:bg-slate-700 transition-all duration-200
            ${isLoading ? "cursor-not-allowed opacity-50 px-20" : ""}
            ${categoryName.trim() === "" ? "cursor-not-allowed opacity-50" : ""}
            `}
          onClick={handleAddCategory}
          disabled={isLoading || categoryName.trim() === ""}
        >
          {isLoading ? (
            <SpinnerGap size={24} className="animate-spin" />
          ) : (
            "Registrar"
          )}
        </button>
      </div>
    </div>
  );
}
