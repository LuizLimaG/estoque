export function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-fit flex flex-col gap-4 pl-24 pr-6 py-10">
      {children}
    </main>
  );
}
