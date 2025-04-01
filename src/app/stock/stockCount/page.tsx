import { Content } from "@/components/content";
import { RegisterCategory } from "@/components/forms/registerCategory";
import { StockCountForm } from "@/components/forms/stockCount";
import { SectionContent } from "@/components/sectionContent";
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

      <SectionContent title="Geral">
        <StockCountForm />
      </SectionContent>

      <SectionContent title="Categoria">
        <RegisterCategory />
      </SectionContent>

      <SectionContent title="Produtos">
        <div></div>
      </SectionContent>
    </Content>
  );
}
