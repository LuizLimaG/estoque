import { Pencil, Trash } from "@phosphor-icons/react/dist/ssr";

export function UserInfoCard({ title }: { title: string }) {
  return (
    <div className="w-full flex items-center justify-center p-4 odd:bg-gray-100">
      <div className="w-3/6 font-poppins font-medium flex justify-start px-4">
        <h1>{title}</h1>
      </div>
      <div className="w-3/6 flex justify-end px-4">
        <div className="cursor-pointer p-1.5 rounded-md hover:bg-green-100">
          <Pencil size={24} color="green"/>
        </div>
        <div className="cursor-pointer p-1.5 rounded-md hover:bg-red-100">
          <Trash size={24} color="red" />
        </div>
      </div>
    </div>
  );
}
