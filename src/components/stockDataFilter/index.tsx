'use client'
import { db } from "@/data/firebase/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { TableHead } from "../table/tableHead";
import { TableColumnContent } from "../table/tableColumnContent";
import { LoadingComponent } from "../loading";

interface Product {
  id: string;
  productName: string;
  category: string;
  quantity: number;
  measure: string;
  minimumStock: number;
  maximumStock: number;
  countDate: string;
}

export function StockDataFilter() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [uniqueDates, setUniqueDates] = useState<string[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!selectedDate) return;

    const collectionRef = collection(db, "Stock");
    const q = query(collectionRef, where("countDate", "==", selectedDate));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const filteredProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Product[];
      setProducts(filteredProducts);
    });
    return () => unsubscribe();
  }, [selectedDate]);

  useEffect(() => {
    const collectionRef = collection(db, "Stock");
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const allProducts = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as Product[];

      const dates = [
        ...new Set(allProducts.map((product) => product.countDate)),
      ].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
      setUniqueDates(dates);
      setLoading(false)
    });
    
    return () => unsubscribe();
  }, []);

  return (
    <section className="w-full bg-white rounded-lg overflow-hidden">
      <div className="w-full p-3 md:p-6 bg-gray-50 flex items-center justify-between">
        <h1 className="font-bold text-[18px] md:text-[23px] text-slate-800">
          Selecionar a data da contagem
        </h1>
      </div>
      <div className="grid transition-[grid-template-rows] duration-200 ease-out">
        <div className="overflow-hidden">
          <div className="p-4">
            <div className="mb-4">
              <select
                id="dateFilter"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="" disabled>Selecione uma data</option>
                {uniqueDates.map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            {selectedDate && (
              <div className="overflow-x-auto rounded-lg">
                {loading ? <LoadingComponent/> : (
                  <table className="min-w-full divide-y-2 font-poppins bg-white text-sm">
                  <TableHead />
                  <tbody className="divide-y divide-gray-200">
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
                  </tbody>
                </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
