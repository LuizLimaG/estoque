import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Stack } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <Content>
      <SectionHeader
        pageTitle="Página Inicial"
        icon={<Stack weight="fill" className="text-[15px] md:text-[20px]" />}
        primaryButton={"Ver Estoque"}
        primaryLink={"/stock"}
        secundaryButton={"Realizar Contagem"}
        link={"/stock/stockCount"}
      />
    </Content>
  );
}
