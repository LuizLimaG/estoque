import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Table } from "@/components/table";
import { StackPlus } from "@phosphor-icons/react/dist/ssr";

export default function Stock() {
  return (
    <Content>
      <SectionHeader
        pageTitle={"Estoque"}
        primaryButton={"Realizar Contagem"}
        primaryLink={"/stock/stockCount"}
        icon={
          <StackPlus size={20} weight="fill"/>
        }
      />

      <section className="w-full h-full bg-white rounded-lg overflow-hidden">
        <div className="w-full h-full">
          <Table></Table>
        </div>
      </section>
    </Content>
  );
}
