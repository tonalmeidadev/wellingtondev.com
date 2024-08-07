import { Navigation } from './navigation'
import { Profile } from './profile'

export function Sidebar() {
  return (
    <aside className="relative flex items-center justify-between gap-8 px-8 pb-8 pt-16 xs:px-16 md:fixed md:bottom-0 md:left-0 md:top-0 md:h-screen md:w-full md:max-w-72 md:flex-col md:items-start md:gap-0 md:py-8">
      <Profile orientation="column" size="sm" />
      <Navigation />
    </aside>
  )
}
