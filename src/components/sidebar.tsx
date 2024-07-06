import { Navigation } from './navigation'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-between gap-8 px-8 pb-8 pt-16 xs:px-16 md:fixed md:bottom-0 md:left-0 md:top-0 md:h-screen md:max-w-64 md:gap-0 md:py-8">
      <Profile orientation="column" size="sm" />
      <Navigation />
    </aside>
  )
}
