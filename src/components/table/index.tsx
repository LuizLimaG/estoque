import { TableBody } from "./tableBody";
import { TableHead } from "./tableHead";

export function Table() {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full divide-y-2 font-poppins bg-white text-sm">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
