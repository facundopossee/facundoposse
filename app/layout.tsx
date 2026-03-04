import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Facundo Posse',
  description:
    'Technical Leader & Software Engineer. Building secure, scalable digital platforms for regulated industries.',
  openGraph: {
    title: 'Facundo Posse',
    description:
      'Technical Leader & Software Engineer based in Buenos Aires, Argentina.',
    url: 'https://facundoposse.com',
    siteName: 'Facundo Posse',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="bg-[#0a0a0a] text-[#e5e5e5] antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
