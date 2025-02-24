export function Input({
  name,
  placeholder,
  type,
  inputValue,
  onchange,
  readonly,
  classe,
} : {
  name: string,
  placeholder: string,
  type: string,
  inputValue?: string,
  onchange?: any,
  readonly?: boolean,
  classe?: string
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-[400px] border-2 border-gray-200 shadow-inputShadow p-2 rounded-sm focus:border-slate-700 outline-none ${classe}`}
      id={name}
      autoComplete="off"
      value={inputValue}
      onChange={onchange}
      readOnly={readonly}
      required
    />
  );
}
