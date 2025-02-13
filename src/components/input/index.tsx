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
      className="border-2 border-gray-200 shadow-inputShadow p-2 w-[400px] rounded-sm focus:border-slate-700 outline-none"
      id={name}
    />
  );
}
