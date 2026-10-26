'use client'

import { useLanguage } from '@/lib/language-context'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface-strong)]">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--text)] sm:text-5xl">
          {t.contact.statement}
        </p>
        <a
          href="/Facundo-Posse-CV-2026.pdf"
          target="_blank"
          rel="noopener"
          className="mt-7 inline-flex min-h-11 items-center border border-[var(--border)] px-5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)] active:translate-y-px"
        >
          {t.hero.downloadCvCta}
        </a>
      </div>
    </section>
  )
}
