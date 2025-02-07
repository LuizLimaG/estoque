import { TableBody } from "./tableBody";
import { TableHead } from "./tableHead";

export function Table() {
  return (
    <div className="overflow-x-auto rounded-lg border border-amber-200">
      <table className="min-w-full divide-y-2 divide-amber-200 bg-white text-sm">
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
