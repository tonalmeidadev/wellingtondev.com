import '@/app/globals.css'

import type { Metadata } from 'next'
import { clash_display, panchang } from '@/utils/fonts'
import { getLocaleAndDictionaryServer } from '@/config/i18n-helper'
import { Crosshair } from '@/components/crosshair'

export const metadata: Metadata = {
  title: {
    template: '%s — Wellington Almeida | Front-end Developer',
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
        height: 630,
      },
    ],
  },
  verification: {
    google:
      'google-site-verification=MkGug6uFPgjoDCKWnLIpgp3vhvoBrt3zVKMEAznG1Ck',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      <body>
        {children}
        <Crosshair />
      </body>
    </html>
  )
}
