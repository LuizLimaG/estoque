export function TableColumnHeader({
    content
} : {
    content: string
}) {
    return(
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-sm">
            {content}
        </th>
    )
}