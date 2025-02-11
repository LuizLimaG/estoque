export function Input({
  name,
  placeholder,
  type,
}: {
  name: string,
  placeholder: string,
  type: string,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border-2 border-gray-900 p-3 w-[300px] rounded-lg"
    />
  );
}
