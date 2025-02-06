import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
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

      <section className="bg-blue-300 w-full h-full">
        <div className="bg-red-300 w-full h-full rounded-md"></div>
      </section>
    </Content>
  );
}
