import '@/app/globals.css'
import type { Metadata } from 'next'
import { clash_display, panchang } from '@/utils/fonts'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'

export const metadata: Metadata = {
  title: {
    default: 'Wellington Almeida | Front-end Developer',
    template: '%s — Wellington Almeida | Front-end Developer',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { locale } = await getLocaleAndDictionaryServer()

  return (
    <html
      lang={locale}
      className={`${clash_display.variable} ${panchang.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
