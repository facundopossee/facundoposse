export default function Footer() {
  return (
    <footer className="border-t border-[#1a2a1a]">
      <div className="mx-auto max-w-2xl px-6 py-8">
        <p className="font-mono text-xs text-[#666666]">
          © {new Date().getFullYear()} Facundo Posse
        </p>
      </div>
    </footer>
  )
}
