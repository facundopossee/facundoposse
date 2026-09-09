'use client'

import { useLanguage } from '@/lib/language-context'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">{t.experience.heading}</h2>
      <div className="mt-14">
        {t.experience.items.map((item, i) => (
          <article
            key={i}
            className={`grid gap-6 border-t border-[var(--border)] py-9 md:grid-cols-[15rem_1fr] md:gap-12 ${item.independent ? 'bg-[var(--surface-strong)] px-5 sm:px-8 md:-mx-8' : ''}`}
          >
            <div>
              <h3 className={`font-medium ${item.independent ? 'text-[var(--accent-strong)]' : 'text-[var(--text)]'}`}>{item.role}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.company}</p>
              <p className="mt-3 font-mono text-xs text-[var(--text-muted)]">{item.period}</p>
            </div>
            <ul className="list-disc space-y-3 pl-5 marker:text-[var(--accent)]">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="pl-1 text-sm leading-6 text-[var(--text-secondary)]">{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
