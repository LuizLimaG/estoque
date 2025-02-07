import { TableColumnHeader } from "./tableColumnHeader"

export function TableHeaderLine() {

    const items = [
        "Sei la",
        "Sei la",
        "Sei la",
        "Sei la",
    ]
    
    return(
        <tr>
            {items.map(item => (
                <TableColumnHeader content={item} />
            ))}
        </tr>
    )
}