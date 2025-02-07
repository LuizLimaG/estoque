import Link from "next/link";

export default function AdminSettings() {
  return (
      <main className="flex w-full">
        <div className="bg-black w-full text-white">
            <section>
                <aside></aside>
                <aside>
                    <Link href="/register" className="bg-amber-600">
                        Cadastrar usuário
                    </Link>
                </aside>
            </section>
        </div>
      </main>
  );
}
