import '@/app/globals.css'
import type { Metadata } from 'next'
import { clash_display, panchang } from '@/utils/fonts'
import { i18n } from '@/config/i18n.config'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: {
    default: 'Wellington Almeida | Front-end Developer',
    template: '%s — Wellington Almeida | Front-end Developer',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const locale = cookieStore.get('NEXT_LOCALE')?.value || i18n.defaultLocale

  return (
    <html
      lang={locale}
      className={`${clash_display.variable} ${panchang.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
