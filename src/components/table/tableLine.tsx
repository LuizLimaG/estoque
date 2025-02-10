import { collection, getDocs } from "firebase/firestore";
import { TableColumnContent } from "./tableColumnContent";
import { db } from "@/data/firebase/firebaseConfig";

interface Product {
  id: string;
  nome: string;
  categoria: string;
  quantidade: number;
  medida: string;
  estoqueMinimo: number;
  estoqueMaximo: number;
  dataContagem: string;
}

export async function TableLine() {
  const collectionRef = collection(db, "Produtos");
  const stockCollectionSnapshot = await getDocs(collectionRef);
  const productsList = stockCollectionSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as Product[];

  return (
    <>
      {productsList.map((product) => (
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
  );
}
