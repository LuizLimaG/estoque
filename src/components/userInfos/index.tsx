import { Pencil, Trash } from "@phosphor-icons/react/dist/ssr"

interface UserInfoCardProps {
  email: string
  title: string
  type: string
  id: string
  onDeleteClick: (id: string, userName: string, userEmail: string) => void
}

export function UserInfoCard({ title, type, id, onDeleteClick, email } : UserInfoCardProps) {
  return (
    <div className="w-full flex items-center justify-center p-4 odd:bg-gray-100">
      <div className="w-3/6 font-poppins font-medium flex flex-col justify-start px-4">
        <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
        <h3 className="italic text-gray-500 font-normal">{type}</h3>
      </div>
      <div className="w-3/6 flex justify-end px-4">
        <div className="cursor-pointer p-1.5 rounded-md hover:bg-green-100">
          <Pencil size={24} color="green"/>
        </div>
        <div className="cursor-pointer p-1.5 rounded-md hover:bg-red-100">
          <button onClick={() => onDeleteClick(id, title, email)}>
            <Trash size={24} color="red" />
          </button>
        </div>
      </div>
    </div>
  )
}
