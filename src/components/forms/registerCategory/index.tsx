import { Button } from "@/components/button";
import { Input } from "../../input";
import { addCategory } from "../../../data/firebase/firebaseController";

export function RegisterCategory() {
  return (
    <form className="w-full h-full flex items-center justify-center p-4 gap-5" action={addCategory} >
      <Input
        name="registerCategory"
        placeholder="Registrar Categoria"
        type="text"
      />
      <div>
        <Button title="Registrar Categoria" />
      </div>
    </form>
  );
}