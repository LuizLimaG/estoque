import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { Stack } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <Content>
      <SectionHeader
        pageTitle="Página Inicial"
        icon={<Stack size={20} weight="fill" />}
        primaryButton={"Ver Estoque"}
        primaryLink={"/stock"}
      />
    </Content>
  );
}
