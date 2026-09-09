'use client'

import { useLanguage } from '@/lib/language-context'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto grid max-w-5xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-20">
        <div className="hero-reveal">
          <h1 className="text-balance text-5xl font-semibold leading-none tracking-[-0.04em] text-[var(--text)] sm:text-7xl">Facundo Posse</h1>
          <p className="mt-6 max-w-2xl text-balance text-2xl font-medium leading-tight tracking-[-0.025em] text-[var(--accent-strong)] sm:text-3xl">{t.hero.tagline}</p>
          <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-[var(--text-secondary)]">{t.hero.subtitle}</p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="mailto:facundopossee@gmail.com" className="inline-flex min-h-11 items-center bg-[var(--accent)] px-5 text-sm font-medium text-[var(--background)] transition-colors hover:bg-[var(--accent-strong)] active:translate-y-px">{t.hero.emailCta}</a>
            <a
              href="https://wa.me/5491172798435"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.hero.whatsappAria}
              className="inline-flex min-h-11 items-center border border-[var(--border)] px-5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)] active:translate-y-px"
            >
              {t.hero.whatsappCta}
            </a>
          </div>
        </div>
        <dl className="hero-proof border-t border-[var(--border)] lg:border-t-0">
          {t.hero.proof.map((item) => (
            <div key={item.value} className="grid grid-cols-[7rem_1fr] gap-4 border-b border-[var(--border)] py-5 lg:grid-cols-1 lg:gap-1">
              <dt className="font-mono text-sm text-[var(--accent)]">{item.value}</dt>
              <dd className="text-sm leading-6 text-[var(--text-secondary)]">{item.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
