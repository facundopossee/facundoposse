export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Facundo Posse</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <a
            href="mailto:facundopossee@gmail.com"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            Email
          </a>
          <a
            href="https://wa.me/5491172798435"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            WhatsApp
          </a>
          <a
            href="https://github.com/facundopossee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center transition-colors hover:text-[var(--text)]"
          >
            GitHub
          </a>
          <p className="inline-flex items-center gap-2">
            Buenos Aires, Argentina
            <span aria-hidden="true" className="leading-none">🇦🇷</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
