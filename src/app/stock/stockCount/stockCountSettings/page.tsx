import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

export default function StockCountSettings() {
    return(
        <Content>
            <SectionHeader
                pageTitle={"Definição da Contagem"}
                primaryButton={"Voltar"}
                primaryLink={"/stock/stockCount"}
                icon={
                    <CaretLeft size={20} weight="bold" />
                }
            />
        </Content>
    )
}