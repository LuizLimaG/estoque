"use client"
import { SpinnerGap } from "@phosphor-icons/react/dist/ssr"
import { deleteUser, getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"

interface DeleteUserModalProps {
  isOpen: boolean
  onClose: () => void
  userEmail: string
  userName: string
  onSuccess: () => void
}

export function DeleteUserModal({
  isOpen,
  onClose,
  userEmail,
  userName,
  onSuccess,
}: DeleteUserModalProps) {
  const [password, setPassword] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState("")

  async function handleDelete() {
    try {
      setIsDeleting(true)
      setError("")
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userEmail,
        password
      )
      await deleteUser(userCredential.user)
      onSuccess()
      onClose()
      setPassword("")
    } catch (error: any) {
      setError("Erro ao deletar usuário")
      if (error.code === "auth/wrong-password") {
        setError("Senha incorreta.")
      } else if (error.code === "auth/too-many-requests") {
        setError("Muitas tentativas. Tente novamente mais tarde.")
      } else {
        setError("Erro ao deletar usuário. Tente novamente.")
      }
    } finally {
      setIsDeleting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full flex flex-col gap-3">
        <div>
          <h2 className="text-xl font-semibold mb-4">Confirmar exclusão</h2>
          <p className="text-gray-600">
            Tem certeza que deseja excluir o usuário <strong>{userName}</strong>
            ? Esta ação não pode ser desfeita.
          </p>
        </div>

        <div>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white p-3 rounded-md border-2 borger-gray-300"
            placeholder="Senha:"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              onClose()
              setError("")
            }}
            disabled={isDeleting}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting || !password}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
          >
            {isDeleting ? (
              <SpinnerGap size={24} className="animate-spin" />
            ) : (
              "Excluir"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
