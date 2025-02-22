import { TableColumnHeader } from "./tableColumnHeader"

export function TableHeaderLine() {

    const items = [
        "Produto",
        "Categoria",
        "Quantidade",
        "Medida",
        "Estoque Mínimo",
        "Estoque Máximo",
        "Data da Contagem"
    ]
    
    return(
        <tr>
            {items.map((item, index) => (
                <TableColumnHeader key={index} content={item} />
            ))}
        </tr>
    )
}