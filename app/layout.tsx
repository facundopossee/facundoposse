import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Facundo Posse',
  description:
    'Software engineer and product builder with over 8 years of experience taking digital products from problem definition to production.',
  openGraph: {
    title: 'Facundo Posse - Software Engineer & Product Builder',
    description:
      'Over 8 years building and operating digital products across product, engineering, delivery, and technical leadership.',
    url: 'https://facundoposse.com',
    siteName: 'Facundo Posse',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
