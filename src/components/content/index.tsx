export function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col gap-4 px-6 py-10 w-full h-full">
      {children}
    </main>
  );
}
