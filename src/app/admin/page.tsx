import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { UserInfoCard } from "@/components/userInfos";
import { UserPlus } from "@phosphor-icons/react/dist/ssr";

export default function AdminPage() {
  return (
    <Content>
      <SectionHeader
        pageTitle="Administração"
        icon={<UserPlus size={20} weight="bold" />}
        primaryButton="Adicionar colaborador"
        primaryLink="/admin/registerCollaborator"
      />
      <section className="w-full bg-white rounded-lg overflow-hidden">
        <UserInfoCard title="Sei lá"/>
        <UserInfoCard title="Sei lá"/>
        <UserInfoCard title="Sei lá"/>
        <UserInfoCard title="Sei lá"/>
      </section>
    </Content>
  );
}
