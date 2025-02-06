import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Gear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function StockCount() {
  return (
    <Content>
      <SectionHeader
        pageTitle={"Contagem de Estoque"}
        secundaryButton={"Ver Estoque"}
        primaryButton={"Definição da Contagem"}
        primaryLink={"/stock/stockCount/stockCountSettings"}
        link={"/stock"}
        icon={
          <Gear size={20} weight="fill"/>
        }
      />

      <section className="bg-blue-300 w-full h-full">
        <div className="bg-red-300 w-full h-full rounded-md"></div>
      </section>
    </Content>
  );
}
