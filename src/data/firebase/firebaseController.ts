"use server";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";

interface ProductData {
  productName: string;
  category: string;
  quantity: string;
  measure: string;
  minimumStock: string;
  maximumStock: string;
  countDate: string;
}

interface UserData {
  user: string;
  userType: string;
}

const addProduct = async (productData: ProductData) => {
  const requiredFields = {
    productName: "Nome do produto",
    category: "Categoria do produto",
    quantity: "Quantidade do produto",
    measure: "Unidade de medida",
    minimumStock: "Estoque mínimo",
    maximumStock: "Estoque máximo",
    countDate: "Data da contagem",
  }

  for (const [key, label] of Object.entries(requiredFields)) {
    if (!productData[key as keyof ProductData]?.trim()) {
      throw new Error(`O campo ${label} é obrigatório`);
    }
  }

  try {
    const collectionRef = collection(db, "Stock");
    const docRef = await addDoc(collectionRef, productData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro ao adicionar o produto:", error);
    throw new Error("Erro ao adicionar o produto.");
  }
};

const addCategory = async (categoryName: string) => {
  if (!categoryName?.trim()) {
    throw new Error("Nome da categoria é obrigatório");
  }

  try {
    const collectionRef = collection(db, "StockSettings");
    const docRef = await addDoc(collectionRef, { categoria: categoryName });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro ao adicionar categoria:", error);
    throw new Error("Falha ao adicionar categoria");
  }
};

const addUser = async (userData: UserData) => {
  if (!userData.user?.trim() || !userData.userType?.trim()) {
    throw new Error("Usuário e tipo de usuário são obrigatórios");
  }

  try {
    const collectionRef = collection(db, "Usuarios");
    const docRef = await addDoc(collectionRef, userData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Erro ao adicionar usuário:", error);
    throw new Error("Falha ao adicionar usuário");
  }
}

export { addProduct, addCategory, addUser };
export type { ProductData };
