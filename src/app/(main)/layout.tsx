import { Clock } from '@/components/clock'
import { Sidebar } from '@/components/sidebar'
import { Available } from '@/components/available'
import { NavigationBar } from '@/components/navigation-bar'

export default async function LayoutMain({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col gap-16 md:pl-72">
      <Sidebar />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-40 px-8 py-8 xs:px-16">
        <header className="hidden grid-cols-1 items-center gap-8 md:grid md:grid-cols-[auto_auto] md:gap-0 lg:grid-cols-2">
          <NavigationBar />

          <div className="flex flex-col gap-2">
            <Clock />

            <span className="text-sm uppercase text-neutral-400 md:hidden">
              @2024 — Wellington Almeida
            </span>
          </div>
        </header>

        <main className="flex flex-col gap-16">
          <Available status="on" />

          {children}
        </main>

        <footer className="flex flex-col gap-4 md:hidden">
          <Clock />

          <span className="text-sm uppercase text-neutral-400">
            @2024 — Wellington Almeida
          </span>
        </footer>
      </div>
    </div>
  )
}
