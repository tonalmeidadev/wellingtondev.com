import { NavigationBar } from './navigation-bar'
import { Navigation } from './navigation'
import { Profile } from './profile'

export async function Sidebar() {
  return (
    <aside className="relative flex flex-col items-center justify-between gap-12 p-8 xs:px-16 md:fixed md:bottom-0 md:left-0 md:top-0 md:h-screen md:w-full md:max-w-72 md:gap-0 md:py-8">
      <NavigationBar className="md:hidden" />

      <div className="flex w-full items-center justify-between md:h-full md:flex-col md:items-start">
        <Profile orientation="column" size="sm" />
        <Navigation />
      </div>
    </aside>
  )
}
