import Header from '@/components/header'
import Hero from '@/components/hero'
import Practice from '@/components/practice'
import Experience from '@/components/experience'
import Education from '@/components/education'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Practice />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
