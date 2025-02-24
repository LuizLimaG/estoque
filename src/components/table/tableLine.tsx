"use client"
import { collection, onSnapshot, query } from "firebase/firestore"
import { TableColumnContent } from "./tableColumnContent"
import { db } from "@/data/firebase/firebaseConfig"
import { useEffect, useState } from "react"

interface Product {
  id: string
  productName: string
  category: string
  quantity: number
  measure: string
  minimumStock: number
  maximumStock: number
  countDate: string
}

export function TableLine() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const collectionRef = collection(db, "Stock")
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
          <TableColumnContent content={product.productName} />
          <TableColumnContent content={product.category} />
          <TableColumnContent content={product.quantity} />
          <TableColumnContent content={product.measure} />
          <TableColumnContent content={product.minimumStock} />
          <TableColumnContent content={product.maximumStock} />
          <TableColumnContent content={product.countDate} />
        </tr>
      ))}
    </>
  )
}
