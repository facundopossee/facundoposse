export default function Hero() {
  return (
    <section className="mx-auto max-w-2xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
      <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#7d9e8e]">
        Technical Leader · Software Engineer
      </p>
      <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#e5e5e5] sm:text-5xl">
        Facundo Posse
      </h1>
      <p className="mb-10 max-w-lg leading-relaxed text-[#a3a3a3]">
        Building secure, scalable digital platforms for regulated industries.
        6+ years leading engineering teams and designing cloud-native
        architectures in banking and healthcare.
      </p>
      <div className="flex items-center gap-2 font-mono text-xs text-[#7d9e8e]">
        <span>Buenos Aires, Argentina</span>
        <span>·</span>
        <span>Remote</span>
      </div>
    </section>
  )
}
