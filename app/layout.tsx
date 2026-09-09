import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { LanguageProvider } from '@/lib/language-context'
import { translations } from '@/lib/i18n'
import './globals.css'

const t = translations.en

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  openGraph: {
    title: t.meta.ogTitle,
    description: t.meta.ogDescription,
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
        <LanguageProvider initialLang="en">{children}</LanguageProvider>
      </body>
    </html>
  )
}
