import './globals.css'
import { Metadata } from 'next'

import { clash_display, panchang } from '@/app/_utils/fonts'

export const metadata: Metadata = {
  title: {
    default: 'Wellington Almeida | Front-end Developer',
    template: '%s — Wellington Almeida | Front-end Developer',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-US"
      className={`${clash_display.variable} ${panchang.variable}`}
    >
      <body>
                  {children}
      </body>
    </html>
  )
}
