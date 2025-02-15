'use client'
import { Content } from "@/components/content";
import { SectionHeader } from "@/components/sectionHeader";
import { UserInfoCard } from "@/components/userInfos";
import { db } from "@/data/firebase/firebaseConfig";
import { UserPlus } from "@phosphor-icons/react/dist/ssr";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

interface Users {
  id: string
  user: string
  userType: string
}

export default function AdminPage() {

  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const collectionRef = collection(db, "Usuarios");
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        user: doc.data().user,
        userType: doc.data().userType
      }));
      setUsers(usersList);
      return () => unsubscribe();
    });
  })

  return (
    <Content>
      <SectionHeader
        pageTitle="Administração"
        icon={<UserPlus size={20} weight="bold" />}
        primaryButton="Adicionar colaborador"
        primaryLink="/admin/registerCollaborator"
      />
      <section className="w-full bg-white rounded-lg overflow-hidden">
        {users.map((user) => (
          <UserInfoCard key={user.id} title={user.user} type={user.userType}/>
        ))}
      </section>
    </Content>
  );
}
