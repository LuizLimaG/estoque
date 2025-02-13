'use server'
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebaseConfig"
import { redirect } from "next/navigation"

const addProduct = async (formData: any) => {
    const collectionRef = collection(db, 'Produtos')
    await addDoc(collectionRef, {
        nome: formData.get('productName'),
        categoria: formData.get('productCategory'),
        quantidade: formData.get('productQuantity'),
        medida: formData.get('productMeasure'),
        estoqueMinimo: formData.get('productMinimumStock'),
        estoqueMaximo: formData.get('productMaximumStock'),
        dataContagem: formData.get('productCountDate')
    })
}

const addCategory = async (formData: any) => {
    const collectionRef = collection(db, 'ConfiguracoesProdutos')
    await addDoc(collectionRef, {
        categoria: formData.get('registerCategory')
    })
}

export {
    addProduct,
    addCategory
}