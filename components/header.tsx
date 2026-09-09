const linkClass =
  'min-h-11 items-center text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text)]'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[color:rgba(9,11,9,0.9)] backdrop-blur-md">
      <a href="#main-content" className="sr-only fixed left-4 top-4 z-30 bg-[var(--accent)] px-4 py-2 text-sm font-medium text-[var(--background)] focus:not-sr-only">
        Skip to content
      </a>
      <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a
          href="#main-content"
          aria-label="Facundo Posse, back to top"
          className="inline-flex min-h-11 min-w-11 items-center justify-start"
        >
          <img src="/icon.svg" alt="" width="28" height="28" />
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-4 sm:gap-7">
          <a href="#approach" className={`${linkClass} hidden sm:flex`}>Approach</a>
          <a href="#experience" className={`${linkClass} flex`}>Experience</a>
          <a href="https://www.linkedin.com/in/facundopossee/" target="_blank" rel="noopener noreferrer" className={`${linkClass} hidden sm:flex`}>LinkedIn</a>
        </nav>
      </div>
    </header>
  )
}
