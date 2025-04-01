import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { StockDataFilter } from "@/components/stockDataFilter";
import { StackPlus } from "@phosphor-icons/react/dist/ssr";


export default function Stock() {
 return (
   <Content>
     <SectionHeader
       pageTitle={"Estoque"}
       primaryButton={"Realizar Contagem"}
       primaryLink={"/stock/stockCount"}
       icon={<StackPlus size={20} weight="fill" />}
     />
     <StockDataFilter />
   </Content>
 );
}
