import { TableColumnContent } from "./tableColumnContent";

export function TableLine() {

    const items = [
        "Sei la",
        "Sei la",
        "Sei la",
        "Sei la",
    ]
    
  return (
    <tr className="odd:bg-gray-50">
        {items.map(item => (
            <TableColumnContent content={item}/>
        ))}
    </tr>
  );
}
