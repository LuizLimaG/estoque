import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Gear } from "@phosphor-icons/react/dist/ssr";

export default function StockCount() {
  return (
    <Content>
      <SectionHeader
        pageTitle={"Contagem de Estoque"}
        secundaryButton={"Ver Estoque"}
        primaryButton={"Definição da Contagem"}
        primaryLink={"/stock/stockCount/stockCountSettings"}
        link={"/stock"}
        icon={<Gear size={20} weight="fill" />}
      />

      <section className="w-full h-full">
        <div className="w-full h-full p-4">
          <div>
            <input
              type="text"
              name=""
              className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
              placeholder="Aparece Porra"
            />
          </div>
        </div>
      </section>
    </Content>
  );
}
