import '@/app/globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Crosshair } from '@/components/crosshair'

export const metadata: Metadata = {
  title: {
    template: '%s | Wellington Almeida — Front-end Developer',
    default: 'Wellington Almeida | Front-end Developer',
  },
  keywords:
    'sites, web, desenvolvedor, developer, front end, javascript, typescript, react, nextjs, css, tailwind, shadcn ui, radix, motion, ux, ui, redux, storybook',
  metadataBase: new URL('https://wellingtondev.com'),
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/assets/og-image.webp',
        width: 1200,
        height: 628,
      },
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

const clash_display = localFont({
  src: '../../public/fonts/ClashDisplay-Variable.ttf',
  variable: '--font-clash_display',
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { locale } = await getLocaleAndDictionaryServer()

  return (
    <html lang={locale} className={clash_display.variable}>
      <body>
        {children}
        <Crosshair />
      </body>
    </html>
  )
}
