import Header from '@/components/header'
import Hero from '@/components/hero'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main>
      <Header />
      <div className="border-b border-[#1a2a1a] bg-[#0d100d]">
        <Hero />
      </div>
      <Experience />
      <Education />
      <Footer />
    </main>
  )
}
