'use client'

import { useLanguage } from '@/lib/language-context'

export default function Education() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-6 border-t border-[var(--border)] pt-8 md:grid-cols-[15rem_1fr] md:gap-12">
        <h2 className="text-lg font-medium text-[var(--text)]">{t.education.heading}</h2>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <div>
            <p className="font-medium text-[var(--text)]">{t.education.degree}</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{t.education.school}</p>
          </div>
          <span className="font-mono text-xs text-[var(--text-muted)]">{t.education.year}</span>
        </div>
      </div>
    </section>
  )
}
