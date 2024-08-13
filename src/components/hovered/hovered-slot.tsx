import { HoveredSlotProps } from '@/types'
import { Slot as RadixSlot } from '@radix-ui/react-slot'
import { twMerge } from 'tailwind-merge'

export async function Slot({ asChild, ...props }: HoveredSlotProps) {
  const Component = asChild ? RadixSlot : 'div'

  return (
    <Component
      className={twMerge(
        'group relative flex flex-row items-center gap-4 p-0 md:min-h-8',
        !asChild && 'cursor-default',
      )}
      {...props}
    />
  )
}
