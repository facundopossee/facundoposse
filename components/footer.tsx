'use client'

import { useLanguage } from '@/lib/language-context'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Facundo Posse</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href="mailto:facundopossee@gmail.com"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            {t.footer.email}
          </a>
          <a
            href="https://wa.me/5491172798435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            {t.footer.whatsapp}
          </a>
          <a
            href="https://github.com/facundopossee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            {t.footer.github}
          </a>
          <p className="inline-flex items-center gap-2">
            {t.footer.location}
            <span aria-hidden="true" className="leading-none">🇦🇷</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
