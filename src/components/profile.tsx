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
        width={128}
        height={128}
        quality={100}
        className={clsx(
          'pointer-events-none select-none rounded-full border-2 border-neutral-800 contrast-[110%]',
          size === 'sm' && 'h-20 w-20 md:h-16 md:w-16',
          size === 'lg' && 'h-20 w-20',
        )}
        alt="Foto de perfil de Ton Almeida"
      />

      <div className="flex flex-col">
        <span
          className={clsx(
            size === 'sm' && 'text-lg md:text-base',
            size === 'lg' && 'text-lg leading-5',
          )}
        >
          Wellington Almeida
        </span>
        <span
          className={clsx(
            'text-neutral-400',
            size === 'sm' && 'text-base md:text-sm',
            size === 'lg' && 'text-base',
          )}
        >
          Front-end Developer
        </span>
      </div>
    </div>
  )
}
