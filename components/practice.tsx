const stages = [
  { name: 'Understand', description: 'Find the real constraint, speak with users, and define the outcome.' },
  { name: 'Shape', description: 'Set scope, make product decisions, and design the simplest viable path.' },
  { name: 'Build', description: 'Own the application, data, integrations, and infrastructure.' },
  { name: 'Operate', description: 'Launch, support real usage, measure what matters, and keep improving.' },
]

const technologyGroups = [
  { name: 'Product interfaces', items: 'React, React Native, Next.js, SwiftUI, Vue.js' },
  { name: 'Services and data', items: 'Node.js, Python, .NET, PostgreSQL, Supabase' },
  { name: 'Platforms and delivery', items: 'AWS, Azure, Vercel, CI/CD, observability' },
]

export default function Practice() {
  return (
    <section id="approach" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">From problem to production</h2>
          <p className="mt-5 text-pretty text-base leading-7 text-[var(--text-secondary)]">Alongside my professional work, I build commercial SaaS products and focused experiments validated through real use. The same principle guides both: learn by putting useful software into people&apos;s hands.</p>
        </div>
        <ol className="mt-14 grid border-t border-[var(--border)] md:grid-cols-4">
          {stages.map((stage, index) => (
            <li key={stage.name} className="relative border-b border-[var(--border)] py-7 md:border-r md:px-6 md:last:border-r-0 first:md:pl-0 last:md:pr-0">
              <span className="font-mono text-xs text-[var(--text-muted)]">0{index + 1}</span>
              <h3 className="mt-8 text-lg font-medium text-[var(--text)]">{stage.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{stage.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-3 md:gap-12">
          {technologyGroups.map((group) => (
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
