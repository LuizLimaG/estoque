"use client"
import { collection, onSnapshot, query } from "firebase/firestore"
import { TableColumnContent } from "./tableColumnContent"
import { db } from "@/data/firebase/firebaseConfig"
import { useEffect, useState } from "react"

interface Product {
  id: string
  nome: string
  categoria: string
  quantidade: number
  medida: string
  estoqueMinimo: number
  estoqueMaximo: number
  dataContagem: string
}

export function TableLine() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const collectionRef = collection(db, "Produtos")
    const q = query(collectionRef)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const productsList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Product[]
      setProducts(productsList)
    })
    return () => unsubscribe()
  }, [])

  return (
    <>
      {products.map((product) => (
        <tr key={product.id} className="even:bg-gray-50">
          <TableColumnContent content={product.nome} />
          <TableColumnContent content={product.categoria} />
          <TableColumnContent content={product.quantidade} />
          <TableColumnContent content={product.medida} />
          <TableColumnContent content={product.estoqueMinimo} />
          <TableColumnContent content={product.estoqueMaximo} />
          <TableColumnContent
            content={
              product.quantidade < product.estoqueMinimo ? "Necessária" : "OK"
            }
          />
          <TableColumnContent content={product.dataContagem} />
        </tr>
      ))}
    </>
  )
}
