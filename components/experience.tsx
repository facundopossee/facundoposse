const experience = [
  {
    company: 'N5 Now',
    role: 'Technical Leader',
    period: 'Dec 2021 – Present',
    bullets: [
      'Led mobile banking and digital health platforms for high-regulated clients, serving 60K+ monthly active users across financial and healthcare environments',
      'Delivered banking features including digital wallets, real-time card data, rewards, and biometric authentication flows',
      'Led evolution of healthcare platforms for a top-tier private medical network: patient scheduling, electronic prescriptions, insurance integrations, billing, and clinical imaging access',
      'Owned CI/CD pipelines and cloud infrastructure on AWS and Azure, ensuring high-availability deployments across production environments',
      'Led and mentored cross-functional teams of 5–15 engineers across multiple product streams',
    ],
  },
  {
    company: 'N5 Now',
    role: 'Full Stack Developer',
    period: 'Feb 2021 – Dec 2021',
    bullets: [
      'Developed features for digital health platforms using .NET and ReactJS: patient scheduling, clinical workflows, and internal tooling',
      'Built and integrated APIs connecting health systems with medical insurance providers for coverage verification and operational automation',
      'Optimized Azure pipelines and SQL workloads supporting high-availability healthcare operations',
    ],
  },
  {
    company: 'Editorial ACES',
    role: 'Full Stack Developer',
    period: 'Feb 2018 – Feb 2021',
    bullets: [
      'Developed and maintained sales, e-commerce, and internal productivity platforms using .NET and Vue.js',
      'Integrated ERP system (Dynamics AX) to automate operational workflows',
      'Delivered inventory, production control, and order management features',
      'Improved SQL-based data operations and supported CI/CD and Azure cloud migration',
    ],
  },
  {
    company: 'Sanatorio Adventista de Hohenau',
    role: '.NET Developer — Intern',
    period: 'Dec 2016 – Feb 2017',
    bullets: [
      'Supported system modernization by migrating legacy solutions to .NET technologies',
    ],
  },
]

export default function Experience() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-10 pb-24">
      <p className="mb-10 font-mono text-xs uppercase tracking-widest text-[#7d9e8e]">
        Experience
      </p>
      <div className="space-y-10">
        {experience.map((item, i) => (
          <div key={i} className="border-t border-[#1a2a1a] pt-8">
            <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <span className="text-sm font-medium text-[#e5e5e5]">
                  {item.company}
                </span>
                <span className="text-[#4d6e60]">·</span>
                <span className="text-sm text-[#a3a3a3]">{item.role}</span>
              </div>
              <span className="font-mono text-xs text-[#666666] shrink-0">
                {item.period}
              </span>
            </div>
            <ul className="space-y-2">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-[#a3a3a3]">
                  <span className="mt-0.5 shrink-0 text-[#4d6e60]">—</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
