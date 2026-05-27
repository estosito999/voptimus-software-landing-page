import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import OpportunityContactForm from '@/components/OpportunityContactForm'
import Footer from '@/components/Footer'

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <Portfolio />
        <OpportunityContactForm type="developer" />
      </main>
      <Footer />
    </>
  )
}
