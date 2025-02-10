export function TableColumnContent({
    content
} : {
    content: string
}) {
    return(
        <td className="whitespace-nowrap px-4 py-2 text-gray-700 first:text-gray-900 text-base">
            {content}
        </td>
    )
}