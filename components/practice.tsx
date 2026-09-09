'use client'

import { useLanguage } from '@/lib/language-context'

export default function Practice() {
  const { t } = useLanguage()

  return (
    <section id="approach" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">{t.practice.heading}</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-[var(--text-secondary)]">{t.practice.intro}</p>
        </div>
        <ol className="mt-14 grid border-t border-[var(--border)] md:grid-cols-4">
          {t.practice.stages.map((stage, index) => (
            <li key={stage.name} className="relative border-b border-[var(--border)] py-7 md:border-r md:px-6 md:last:border-r-0 first:md:pl-0 last:md:pr-0">
              <span className="font-mono text-xs text-[var(--text-muted)]">0{index + 1}</span>
              <h3 className="mt-8 text-lg font-medium text-[var(--text)]">{stage.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{stage.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-3 md:gap-12">
          {t.practice.technologyGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-sm font-medium text-[var(--text)]">{group.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{group.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
