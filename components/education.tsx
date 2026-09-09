export default function Education() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-10 pb-16">
      <p className="mb-10 font-mono text-xs uppercase tracking-widest text-[#7d9e8e]">
        Education
      </p>
      <div className="border-t border-[#1a2a1a] pt-8">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <div className="flex flex-wrap items-baseline gap-x-2">
            <span className="text-sm font-medium text-[#e5e5e5]">
              Universidad Adventista del Plata
            </span>
            <span className="text-[#4d6e60]">·</span>
            <span className="text-sm text-[#a3a3a3]">
              Bachelor&apos;s Degree in Information Systems
            </span>
          </div>
          <span className="font-mono text-xs text-[#666666] shrink-0">2018</span>
        </div>
      </div>
    </section>
  )
}
