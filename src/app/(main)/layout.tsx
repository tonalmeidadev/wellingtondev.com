import { Available } from "@/components/available";
import { Clock } from "@/components/clock";
import { NavigationBar } from "@/components/navigation-bar";
import { Sidebar } from "@/components/sidebar";

export default async function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col gap-16 md:pl-72">
      <Sidebar />

      <div className="xs:px-16 mx-auto flex w-full max-w-6xl flex-col gap-40 px-8 py-8">
        <header className="hidden grid-cols-1 items-center gap-8 md:grid md:grid-cols-[auto_auto] md:gap-0 lg:grid-cols-2">
          <NavigationBar />

          <div className="flex flex-col gap-2">
            <Clock />

            <span className="text-sm text-neutral-400 lowercase md:hidden">
              @2024 — Wellington Almeida
            </span>
          </div>
        </header>

        <main className="flex flex-col gap-16">
          <Available status="off" />

          {children}
        </main>

        <footer className="flex flex-col gap-4 md:hidden">
          <Clock />

          <span className="text-sm text-neutral-400 lowercase">
            @2024 — Wellington Almeida
          </span>
        </footer>
      </div>
    </div>
  );
}
