import type { HoveredRootProps } from '@/types'

export async function Root({ title, children }: HoveredRootProps) {
  return (
    <section className="flex flex-col gap-8 md:gap-4">
      <h2 className="lowercase text-neutral-400">{title}</h2>

      <ul className="flex flex-col gap-8 xs:gap-8 md:gap-1">{children}</ul>
    </section>
  )
}
