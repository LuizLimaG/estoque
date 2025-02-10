import { TableColumnContent } from "./tableColumnContent";

export function TableLine() {

  const items = ["Sei la", "Sei la", "Sei la", "Sei la", "Sei la", "Sei la", "Sei la"];

  return (
    <tr className="even:bg-gray-50">
      {items.map((item, index) => (
        <TableColumnContent key={index} content={item} />
      ))}
    </tr>
  );
}
