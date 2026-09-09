const experience = [
  {
    company: 'Self-directed',
    role: 'Independent Product Builder',
    period: '2024 - Present',
    independent: true,
    bullets: [
      'Build and operate commercial SaaS products for small businesses, covering discovery, UX, pricing, engineering, infrastructure, and production support',
      'Design multi-tenant platforms integrating payments, authentication, messaging, digital wallets, and operational workflows',
      'Built and validated focused product experiments, including a native iOS app using SwiftUI and HealthKit',
      'Work directly with users and businesses to define scope, observe real usage, and iterate on the product',
    ],
  },
  {
    company: 'N5 Now',
    role: 'Technical Leader',
    period: 'Dec 2021 - Present',
    bullets: [
      'Led mobile banking and digital health platforms for clients in highly regulated industries, serving 60K+ monthly active users',
      'Delivered banking features including digital wallets, real-time card data, rewards, and biometric authentication flows',
      'Led evolution of healthcare platforms for a top-tier private medical network: patient scheduling, electronic prescriptions, insurance integrations, billing, and clinical imaging access',
      'Owned CI/CD pipelines and cloud infrastructure on AWS and Azure, ensuring high-availability deployments across production environments',
      'Led and mentored cross-functional teams of 5-15 engineers across multiple product streams',
    ],
  },
  {
    company: 'N5 Now',
    role: 'Full Stack Developer',
    period: 'Feb 2021 - Dec 2021',
    bullets: [
      'Developed features for digital health platforms using .NET and React: patient scheduling, clinical workflows, and internal tooling',
      'Built and integrated APIs connecting health systems with medical insurance providers for coverage verification and operational automation',
      'Optimized Azure pipelines and SQL workloads supporting high-availability healthcare operations',
    ],
  },
  {
    company: 'Editorial ACES',
    role: 'Full Stack Developer',
    period: 'Feb 2018 - Feb 2021',
    bullets: [
      'Developed and maintained sales, e-commerce, and internal productivity platforms using .NET and Vue.js',
      'Integrated ERP system (Dynamics AX) to automate operational workflows',
      'Delivered inventory, production control, and order management features',
      'Improved SQL-based data operations and supported CI/CD and Azure cloud migration',
    ],
  },
  {
    company: 'Sanatorio Adventista de Hohenau',
    role: '.NET Developer, Intern',
    period: 'Dec 2016 - Feb 2017',
    bullets: [
      'Supported system modernization by migrating legacy solutions to .NET technologies',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[var(--text)] sm:text-4xl">Experience</h2>
      <div className="mt-14">
        {experience.map((item, i) => (
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
