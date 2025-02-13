export function Button({
  title,
  func,
}: {
  title: string;
  func?: React.ReactEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      type="submit"
      onClick={func}
      className="font-medium text-white text-[15px] border-4 border-transparent bg-slate-800 rounded-md py-2 px-16 hover:bg-white hover:border-4 hover:border-slate-800 hover:text-slate-800 transition-all duration-200"
    >
      {title}
    </button>
  );
}
