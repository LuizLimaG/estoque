"use client"
import { Content } from "@/components/content"
import { DeleteUserModal } from "@/components/deleteAccountModal"
import { SectionHeader } from "@/components/sectionHeader"
import { UserInfoCard } from "@/components/userInfos"
import { db } from "@/data/firebase/firebaseConfig"
import { UserPlus } from "@phosphor-icons/react/dist/ssr"
import { collection, doc, onSnapshot, query, writeBatch } from "firebase/firestore"
import { useEffect, useState } from "react"

interface Users {
  user: string
  id: string
  userType: string
}

export default function AdminPage() {

  const [users, setUsers] = useState<Users[]>([])
  const [selectedUser, setSelectedUser] = useState<{id: string, name: string, email: string} | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const collectionRef = collection(db, "Usuarios")
    const q = query(collectionRef)

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const usersList = snapshot.docs.map((doc) => ({
        id: doc.id,
        user: doc.data().user,
        userType: doc.data().userType
      }))
      setUsers(usersList)
      return () => unsubscribe()
    })
  })

  const handleDeleteUserData = async () => {
    try {
      const userDocRef = doc(db, "Usuarios", selectedUser?.id || "")
      const batch = writeBatch(db)
      batch.delete(userDocRef)
      await batch.commit()

      setError("")
    } catch (error) {
      console.error("Erro ao deletar usuário", error)
      setError("Erro ao deletar usuário. Tente novamente")
    }
  }

  const handleDeleteClick = (userId: string, userName: string, userEmail: string) => {
    setSelectedUser({
      id: userId,
      name: userName,
      email: userEmail
    })
    setModalOpen(true)
  }

  const sortedUsers = users.sort((a, b) => a.user.localeCompare(b.user))

  return (
    <Content>
      <SectionHeader
        pageTitle="Administração"
        icon={<UserPlus size={20} weight="bold" />}
        primaryButton="Adicionar colaborador"
        primaryLink="/admin/registerCollaborator"
      />
      <section className="w-full bg-white rounded-lg overflow-hidden">
        {sortedUsers.map((user) => (
          <UserInfoCard key={user.id} email={`${user.user}@hotntender.com`} title={user.user} type={user.userType} id={user.id} onDeleteClick={handleDeleteClick}/>
        ))}
      </section>
      <DeleteUserModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false)
          setSelectedUser(null)
        }}
        userEmail={selectedUser?.email || ""}
        userName={selectedUser?.name || ""}
        onSuccess={handleDeleteUserData}
      />
    </Content>
  )
}
