"use client"
import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Table } from "@/components/table";
import TableSkeleton from "@/components/TableSkeleton";
import { StackPlus } from "@phosphor-icons/react/dist/ssr";
import { useState, useEffect } from "react";


export default function Stock() {
 const [isLoading, setIsLoading] = useState(true);


 useEffect(() => {
   const timer = setTimeout(() => {
     setIsLoading(false);
   }, 2000);


   return () => clearTimeout(timer);
 }, []);


 return (
   <Content>
     <SectionHeader
       pageTitle={"Estoque"}
       primaryButton={"Realizar Contagem"}
       primaryLink={"/stock/stockCount"}
       icon={<StackPlus size={20} weight="fill" />}
     />


     <section className="w-full h-full bg-white rounded-lg overflow-hidden">
       <div className="w-full h-full">
         {isLoading ? <TableSkeleton /> : <Table />}
       </div>
     </section>
   </Content>
 );
}
