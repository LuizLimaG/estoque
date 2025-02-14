export function Content({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-fit flex flex-col gap-4 md:pl-24 px-6 py-10">
      {children}
    </main>
  );
}
