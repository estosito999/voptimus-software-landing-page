import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Industries from '@/components/Industries'
import AISustainability from '@/components/AISustainability'
import Process from '@/components/Process'
import Portfolio from '@/components/Portfolio'
import Technologies from '@/components/Technologies'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Industries />
        <AISustainability />
        <Process />
        <Portfolio />
        <Technologies />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
