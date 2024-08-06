import Image from 'next/image'
import { clsx } from 'clsx'

interface ProfileProps {
  orientation: 'row' | 'column'
  size: 'sm' | 'lg'
}

export async function Profile({ orientation, size }: ProfileProps) {
  return (
    <div
      className={clsx(
        'flex',
        orientation === 'row' && 'items-center gap-3',
        orientation === 'column' && 'flex-col gap-2.5',
      )}
    >
      <Image
        src="/assets/photo.webp"
        width={52}
        height={52}
        quality={100}
        className={clsx(
          'pointer-events-none select-none rounded-full',
          size === 'sm' && 'h-[72px] w-[72px] md:h-12 md:w-12',
          size === 'lg' && 'h-[52px] w-[52px]',
        )}
        alt="Foto de perfil de Ton Almeida"
      />

      <div className="flex flex-col">
        <span
          className={clsx(
            size === 'sm' && 'text-lg md:text-[13px] md:leading-4',
            size === 'lg' && 'text-base leading-5',
          )}
        >
          Wellington Almeida
        </span>
        <span
          className={clsx(
            'text-neutral-400',
            size === 'sm' && 'text-sm md:text-[11px]',
            size === 'lg' && 'text-[13px]',
          )}
        >
          Front-end Developer
        </span>
      </div>
    </div>
  )
}
