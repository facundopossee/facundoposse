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
      </div>
    </section>
  )
}
